import express from 'express';
import path from 'path';
import fs from 'fs';
import crypto from 'crypto';
import webpush from 'web-push';
import { fileURLToPath } from 'url';
import { TOPICS_DATA } from './src/data/topics.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for all origins (supports mobile clients accessing via GitHub Pages)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

app.use(express.json());

// Ensure data directory exists
const DATA_DIR = path.join(__dirname, 'data');
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// 1. Persistent VAPID keys management (with stable permanent fallback)
const DEFAULT_VAPID_KEYS = {
  publicKey: 'BIhc9mRmN9NkjDoiKGAq8JO4XZrGQyB-ZpWcF7ivz4pTxnDiLMR8f1fWciScjcOnAbaNmWM8Uw1mhD-6-IFWisQ',
  privateKey: 'jiAxK0IGy_g9VHYbPp1vXOqIO3bAsqrlzyzSxhAWDGo',
};

const VAPID_FILE = path.join(DATA_DIR, 'vapid-keys.json');
let vapidKeys: { publicKey: string; privateKey: string };

if (fs.existsSync(VAPID_FILE)) {
  try {
    vapidKeys = JSON.parse(fs.readFileSync(VAPID_FILE, 'utf8'));
  } catch {
    vapidKeys = DEFAULT_VAPID_KEYS;
    fs.writeFileSync(VAPID_FILE, JSON.stringify(vapidKeys, null, 2), 'utf8');
  }
} else {
  vapidKeys = DEFAULT_VAPID_KEYS;
  fs.writeFileSync(VAPID_FILE, JSON.stringify(vapidKeys, null, 2), 'utf8');
}

webpush.setVapidDetails(
  'mailto:support@formulauniverse.app',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

console.log('✅ Web Push VAPID keys initialized.');

// 2. Persistent Push Subscriptions Store
const SUBS_FILE = path.join(DATA_DIR, 'reminder-subscriptions.json');

interface StoredSubscription {
  id: string;
  subscription: webpush.PushSubscription;
  settings: {
    enabled: boolean;
    selectedTopicIds: string[];
    formulasPerNotification: 1 | 2;
    remindersPerDay: 2 | 3;
    times: string[]; // e.g. ["09:00", "14:00", "20:00"]
  };
  timezoneOffset: number; // minutes
  createdAt: number;
  lastSentSlotKey?: string;
  lastNotificationSentAt?: number;
  lastNotificationError?: string;
  shownFormulaIds?: string[];
}

let subscriptions: Record<string, StoredSubscription> = {};

if (fs.existsSync(SUBS_FILE)) {
  try {
    subscriptions = JSON.parse(fs.readFileSync(SUBS_FILE, 'utf8'));
  } catch {
    subscriptions = {};
  }
}

function saveSubscriptions(): void {
  try {
    fs.writeFileSync(SUBS_FILE, JSON.stringify(subscriptions, null, 2), 'utf8');
  } catch (err) {
    console.error('Failed to save subscriptions:', err);
  }
}

// Diagnostics log store
let lastPushLog: {
  timestamp: number;
  success: boolean;
  recipientCount: number;
  details: string;
} | null = null;

// Helper: Format plain formula text
function formatCleanFormula(formula: any): string {
  if (formula.formula && !formula.formula.includes('\\begin')) {
    const lines = formula.formula.split('\n').filter((l: string) => l.trim().length > 0);
    if (lines.length > 0 && lines[0].length <= 80) {
      return lines[0].trim();
    }
  }

  let clean = formula.latex || formula.formula || '';
  clean = clean
    .replace(/\\boxed\{([^}]+)\}/g, '$1')
    .replace(/\\operatorname\{([^}]+)\}/g, '$1')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')
    .replace(/\\cdot/g, '·')
    .replace(/\\times/g, '×')
    .replace(/\\pm/g, '±')
    .replace(/\\le/g, '≤')
    .replace(/\\ge/g, '≥')
    .replace(/\\neq/g, '≠')
    .replace(/\\equiv/g, '≡')
    .replace(/\\approx/g, '≈')
    .replace(/\\theta/g, 'θ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\lambda/g, 'λ')
    .replace(/\\pi/g, 'π')
    .replace(/\\infty/g, '∞')
    .replace(/\\implies/g, '⇒')
    .replace(/\\quad/g, ' ')
    .replace(/\\qquad/g, '  ')
    .replace(/\\left|\\right/g, '')
    .replace(/[{}]/g, '')
    .replace(/\\/g, '');

  const firstLine = clean.split('\n')[0].trim();
  return firstLine.length > 80 ? firstLine.slice(0, 77) + '...' : firstLine;
}

function extractMeaning(formula: any): string {
  if (formula.remember) {
    const clean = formula.remember.replace(/^[🎯💡⚠️\s]+/, '').split('.')[0];
    if (clean.length > 5 && clean.length <= 80) return clean;
  }
  if (formula.shortcut) {
    const clean = formula.shortcut.replace(/^[🎯💡⚠️\s]+/, '').split('.')[0];
    if (clean.length > 5 && clean.length <= 80) return clean;
  }
  if (formula.explanation) {
    const clean = formula.explanation.replace(/^[📖\s]+/, '').split('.')[0];
    if (clean.length > 5 && clean.length <= 80) return clean;
    return clean.slice(0, 75) + '...';
  }
  return formula.title;
}

// Select formulas for notification based on spaced repetition & topic selection
function pickFormulasForUser(sub: StoredSubscription) {
  const selectedTopics = new Set(
    sub.settings.selectedTopicIds && sub.settings.selectedTopicIds.length > 0
      ? sub.settings.selectedTopicIds
      : ['trigonometry', 'matrices-determinants', 'probability', 'number-system']
  );

  const shownSet = new Set(sub.shownFormulaIds || []);
  const allCandidates: Array<{
    id: string;
    topicId: string;
    topicName: string;
    title: string;
    formula: string;
    meaning: string;
    mustKnow?: boolean;
    isShown: boolean;
  }> = [];

  TOPICS_DATA.forEach((topic) => {
    if (selectedTopics.has(topic.id)) {
      topic.categories.forEach((cat) => {
        cat.formulas.forEach((f) => {
          allCandidates.push({
            id: f.id,
            topicId: topic.id,
            topicName: topic.name,
            title: f.title,
            formula: formatCleanFormula(f),
            meaning: extractMeaning(f),
            mustKnow: f.mustKnow,
            isShown: shownSet.has(f.id),
          });
        });
      });
    }
  });

  if (allCandidates.length === 0) return null;

  // Split into unseen and revision
  const unseen = allCandidates.filter((c) => !c.isShown);
  const revision = allCandidates.filter((c) => c.isShown);

  const count = sub.settings.formulasPerNotification || 1;
  const picked: typeof allCandidates = [];

  if (count === 1) {
    if (unseen.length > 0) {
      picked.push(unseen[0]);
    } else {
      picked.push(revision[Math.floor(Math.random() * revision.length)]);
    }
  } else {
    // 2 formulas: mix 1 new + 1 revision if possible
    if (unseen.length > 0 && revision.length > 0) {
      picked.push(unseen[0]);
      picked.push(revision[Math.floor(Math.random() * revision.length)]);
    } else if (unseen.length >= 2) {
      picked.push(unseen[0]);
      picked.push(unseen[1]);
    } else {
      picked.push(allCandidates[0]);
      if (allCandidates[1]) picked.push(allCandidates[1]);
    }
  }

  // Record shown
  if (!sub.shownFormulaIds) sub.shownFormulaIds = [];
  picked.forEach((p) => {
    if (!sub.shownFormulaIds!.includes(p.id)) {
      sub.shownFormulaIds!.push(p.id);
    }
  });

  return picked;
}

// Send Web Push notification to a single subscription
async function sendPushToSubscription(
  sub: StoredSubscription,
  customTitle?: string,
  customBody?: string,
  isTest: boolean = false
): Promise<boolean> {
  try {
    let title = customTitle;
    let body = customBody;
    let targetTopic = 'Formula Universe';

    if (!title || !body) {
      const formulas = pickFormulasForUser(sub);
      if (!formulas || formulas.length === 0) {
        return false;
      }

      targetTopic = formulas[0].topicName;
      title = isTest
        ? `⚡ [Test] ${targetTopic} — Formula Reminder`
        : `⚡ ${targetTopic} — Daily Formula`;

      if (formulas.length === 1) {
        const f = formulas[0];
        body = `${f.formula}\n${f.meaning ? `💡 ${f.meaning}` : ''}`;
      } else {
        body = formulas
          .map((f, i) => `${i + 1}. ${f.formula}${f.meaning ? ` — ${f.meaning}` : ''}`)
          .join('\n');
      }
    }

    const payload = JSON.stringify({
      title,
      body,
      icon: '/pwa-192x192.png',
      badge: '/pwa-192x192.png',
      tag: `formula-reminder-${Date.now()}`,
      data: {
        url: '/',
        timestamp: Date.now(),
        isTest,
      },
    });

    await webpush.sendNotification(sub.subscription, payload);

    sub.lastNotificationSentAt = Date.now();
    sub.lastNotificationError = undefined;
    saveSubscriptions();

    lastPushLog = {
      timestamp: Date.now(),
      success: true,
      recipientCount: 1,
      details: `Sent to ${sub.id.slice(0, 10)}...: "${title}"`,
    };

    return true;
  } catch (err: any) {
    console.error(`Failed to push to subscription ${sub.id}:`, err?.message || err);
    sub.lastNotificationError = err?.message || 'Push failed';

    // If subscription has expired or unsubscribed (404/410 Gone), remove it
    if (err.statusCode === 404 || err.statusCode === 410) {
      console.log(`Subscription ${sub.id} expired. Removing.`);
      delete subscriptions[sub.id];
      saveSubscriptions();
    }

    lastPushLog = {
      timestamp: Date.now(),
      success: false,
      recipientCount: 0,
      details: `Failed: ${err?.message || 'Push error'}`,
    };

    return false;
  }
}

// -------------------------------------------------------------
// REST API ROUTES
// -------------------------------------------------------------

// Helper to get safe subscription ID
function getSubscriptionId(endpoint: string): string {
  return crypto.createHash('sha256').update(endpoint).digest('hex').slice(0, 32);
}

// 0. Explicit Manifest Endpoint for all mobile browsers & PWA engines
app.get(['/manifest.json', '/manifest.webmanifest'], (_req, res) => {
  const manifestPath = path.join(__dirname, 'public', 'manifest.json');
  if (fs.existsSync(manifestPath)) {
    res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
    return res.sendFile(manifestPath);
  }
  res.status(404).send('Manifest not found');
});

// 1. Get VAPID Public Key for client subscription
app.get('/api/reminders/vapid-public-key', (_req, res) => {
  res.json({ publicKey: vapidKeys.publicKey });
});

// 2. Subscribe to Web Push notifications
app.post('/api/reminders/subscribe', (req, res) => {
  const { subscription, settings, timezoneOffset } = req.body;
  if (!subscription || !subscription.endpoint) {
    return res.status(400).json({ error: 'Valid PushSubscription required' });
  }

  const id = getSubscriptionId(subscription.endpoint);

  subscriptions[id] = {
    id,
    subscription,
    settings: {
      enabled: settings?.enabled ?? true,
      selectedTopicIds: settings?.selectedTopicIds || [],
      formulasPerNotification: settings?.formulasPerNotification || 1,
      remindersPerDay: settings?.remindersPerDay || 3,
      times: settings?.times || ['09:00', '14:00', '20:00'],
    },
    timezoneOffset: typeof timezoneOffset === 'number' ? timezoneOffset : 0,
    createdAt: Date.now(),
    shownFormulaIds: subscriptions[id]?.shownFormulaIds || [],
  };

  saveSubscriptions();
  console.log(`📱 Push subscription saved (${id.slice(0, 8)}). Total active: ${Object.keys(subscriptions).length}`);

  res.json({ success: true, id });
});

// 3. Update settings for a subscription
app.post('/api/reminders/update-settings', (req, res) => {
  const { subscription, settings, timezoneOffset } = req.body;
  if (!subscription || !subscription.endpoint) {
    return res.status(400).json({ error: 'Subscription required' });
  }

  const id = getSubscriptionId(subscription.endpoint);
  if (subscriptions[id]) {
    if (settings) {
      subscriptions[id].settings = { ...subscriptions[id].settings, ...settings };
    }
    if (typeof timezoneOffset === 'number') {
      subscriptions[id].timezoneOffset = timezoneOffset;
    }
    saveSubscriptions();
  } else {
    subscriptions[id] = {
      id,
      subscription,
      settings: settings || {
        enabled: true,
        selectedTopicIds: ['trigonometry', 'matrices-determinants'],
        formulasPerNotification: 1,
        remindersPerDay: 3,
        times: ['09:00', '14:00', '20:00'],
      },
      timezoneOffset: typeof timezoneOffset === 'number' ? timezoneOffset : 0,
      createdAt: Date.now(),
      shownFormulaIds: [],
    };
    saveSubscriptions();
  }

  res.json({ success: true });
});

// 4. Send immediate test notification
app.post('/api/reminders/send-test', async (req, res) => {
  const { subscription, settings } = req.body;
  let targetSub: StoredSubscription | null = null;

  if (subscription && subscription.endpoint) {
    const id = getSubscriptionId(subscription.endpoint);
    targetSub = subscriptions[id] || {
      id,
      subscription,
      settings: settings || {
        enabled: true,
        selectedTopicIds: ['trigonometry', 'matrices-determinants'],
        formulasPerNotification: 1,
        remindersPerDay: 3,
        times: ['09:00', '14:00', '20:00'],
      },
      timezoneOffset: 0,
      createdAt: Date.now(),
    };
  } else {
    const firstKey = Object.keys(subscriptions)[0];
    if (firstKey) targetSub = subscriptions[firstKey];
  }

  if (!targetSub) {
    return res.status(400).json({ error: 'No push subscription available to send test' });
  }

  const ok = await sendPushToSubscription(targetSub, undefined, undefined, true);
  res.json({ success: ok });
});

// 5. Schedule a near-future test notification (e.g. in 15 seconds) so user can close app and test!
app.post('/api/reminders/schedule-test', (req, res) => {
  const { subscription, delaySeconds = 15 } = req.body;
  if (!subscription || !subscription.endpoint) {
    return res.status(400).json({ error: 'Valid PushSubscription required' });
  }

  const id = getSubscriptionId(subscription.endpoint);
  const targetSub = subscriptions[id];

  if (!targetSub) {
    return res.status(404).json({ error: 'Subscription not found. Please subscribe first.' });
  }

  const delayMs = Math.max(5, Number(delaySeconds)) * 1000;
  console.log(`⏱️ Scheduled native test push in ${delaySeconds}s for ${id.slice(0, 10)}...`);

  setTimeout(async () => {
    console.log(`🔔 Firing scheduled test push now for ${id.slice(0, 10)}...`);
    await sendPushToSubscription(
      targetSub,
      '⚡ [Mobile Test] Trigonometry — Background Reminder',
      'sin²θ + cos²θ = 1\n💡 Pythagorean identity (Delivered while app was closed!)',
      true
    );
  }, delayMs);

  res.json({ success: true, scheduledInSeconds: delaySeconds });
});

// 6. Notification Diagnostics endpoint
app.get('/api/reminders/diagnostics', (_req, res) => {
  const count = Object.keys(subscriptions).length;
  res.json({
    status: 'online',
    vapidConfigured: Boolean(vapidKeys.publicKey && vapidKeys.privateKey),
    publicKeyPrefix: vapidKeys.publicKey.slice(0, 10) + '...',
    activeSubscriptions: count,
    lastPushLog,
    serverTime: new Date().toISOString(),
  });
});

// Helper: Determine if a user's scheduled slot matches the current local time (window: +/- 1 min)
function isSlotDueNow(slotTimeStr: string, localDate: Date): boolean {
  if (!slotTimeStr || !slotTimeStr.includes(':')) return false;
  const [slotH, slotM] = slotTimeStr.split(':').map(Number);
  const currentTotalM = localDate.getUTCHours() * 60 + localDate.getUTCMinutes();
  const slotTotalM = slotH * 60 + slotM;
  const diff = Math.abs(currentTotalM - slotTotalM);
  return diff <= 1 || diff === 1439; // Handles midnight boundary
}

// -------------------------------------------------------------
// BACKGROUND SERVER SCHEDULER (Runs 24/7 on the Node.js server)
// -------------------------------------------------------------
setInterval(() => {
  const nowUtc = Date.now();

  Object.values(subscriptions).forEach(async (sub) => {
    if (!sub.settings || !sub.settings.enabled) return;

    // Convert UTC to subscriber's local time using their client timezone offset
    // In JS, timezoneOffset is minutes to ADD to local time to get UTC
    const localMs = nowUtc - (sub.timezoneOffset || 0) * 60 * 1000;
    const localDate = new Date(localMs);
    const todayDateStr = localDate.toISOString().split('T')[0];

    const activeTimes = (sub.settings.times || []).slice(0, sub.settings.remindersPerDay || 3);

    for (let slotIdx = 0; slotIdx < activeTimes.length; slotIdx++) {
      const slotTime = activeTimes[slotIdx];
      const matchesTime = isSlotDueNow(slotTime, localDate);
      const slotKey = `${todayDateStr}_${slotIdx}`;

      if (matchesTime && sub.lastSentSlotKey !== slotKey) {
        console.log(`⏰ Scheduled reminder trigger for ${sub.id.slice(0, 8)} at slot ${slotTime}`);
        sub.lastSentSlotKey = slotKey;
        await sendPushToSubscription(sub, undefined, undefined, false);
        break;
      }
    }
  });
}, 25000); // Check every 25 seconds for reliable minute matching

// -------------------------------------------------------------
// VITE DEV MIDDLEWARE OR PRODUCTION STATIC SERVING
// -------------------------------------------------------------
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(Number(PORT), '0.0.0.0', () => {
    console.log(`🚀 Formula Universe server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
