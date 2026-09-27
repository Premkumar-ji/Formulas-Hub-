import { ReminderNotificationData, ReminderSettings } from '../types/reminder';
import {
  getNextFormulasForReminder,
  getNextScheduledSlot,
  loadReminderSettings,
  saveReminderSettings,
} from './spacedRepetition';

export type NotificationPermissionState = 'granted' | 'denied' | 'default' | 'unsupported';

/**
 * Returns the backend API base URL.
 * When running on GitHub Pages (premkumar-ji.github.io), routes push notifications
 * to the deployed full-stack server on Cloud Run.
 */
export function getApiBaseUrl(): string {
  if (typeof window === 'undefined') return '';
  // Support optional environment variable if set
  if ((import.meta as any).env?.VITE_BACKEND_URL) {
    return (import.meta as any).env.VITE_BACKEND_URL;
  }
  // If hosted on GitHub Pages or custom static host without backend
  if (window.location.hostname.includes('github.io')) {
    return 'https://ais-pre-zkyer35ttio5giprjr7hqy-586224172541.asia-southeast1.run.app';
  }
  // Local or full-stack deployment
  return '';
}

export function isNotificationSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export function isPushSupported(): boolean {
  return (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    'PushManager' in window &&
    'Notification' in window
  );
}

export function isPWAInstalled(): boolean {
  if (typeof window === 'undefined') return false;
  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    (window.navigator as any).standalone === true ||
    document.referrer.includes('android-app://')
  );
}

export function getNotificationPermission(): NotificationPermissionState {
  if (!isNotificationSupported()) {
    return 'unsupported';
  }
  return Notification.permission as NotificationPermissionState;
}

/**
 * Converts a URL-safe Base64 string to a Uint8Array for PushManager subscription.
 */
function urlBase64ToUint8Array(base64String: string): Uint8Array {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

/**
 * Safely retrieves or initiates the ServiceWorkerRegistration with a safety timeout
 * so that navigator.serviceWorker.ready never hangs indefinitely.
 */
export async function getActiveServiceWorkerRegistration(): Promise<ServiceWorkerRegistration | null> {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {
    return null;
  }
  try {
    let reg = await navigator.serviceWorker.getRegistration();
    if (!reg) {
      const swUrl = process.env.NODE_ENV === 'development' ? './dev-sw.js?dev-sw' : './sw.js';
      reg = await navigator.serviceWorker.register(swUrl, {
        scope: './',
        type: process.env.NODE_ENV === 'development' ? 'module' : 'classic',
      });
    }

    // Race navigator.serviceWorker.ready with a 3-second timeout
    const readyPromise = navigator.serviceWorker.ready;
    const timeoutPromise = new Promise<null>((resolve) => setTimeout(() => resolve(null), 3000));
    const active = await Promise.race([readyPromise, timeoutPromise]);
    return active || reg;
  } catch (err) {
    console.warn('Could not retrieve service worker registration:', err);
    return null;
  }
}

/**
 * Retrieves existing PushSubscription if already registered.
 */
export async function getExistingPushSubscription(): Promise<PushSubscription | null> {
  if (!isPushSupported()) return null;
  try {
    const registration = await getActiveServiceWorkerRegistration();
    if (!registration || !registration.pushManager) return null;
    return await registration.pushManager.getSubscription();
  } catch {
    return null;
  }
}

/**
 * Subscribes user to native Web Push notifications via the Service Worker and server VAPID key.
 */
export async function subscribeToPushNotifications(
  settings: ReminderSettings
): Promise<PushSubscription | null> {
  if (!isPushSupported()) {
    console.warn('PushManager not supported on this browser/platform');
    return null;
  }

  try {
    const registration = await getActiveServiceWorkerRegistration();
    if (!registration || !registration.pushManager) {
      console.warn('No active service worker registration with PushManager');
      return null;
    }

    const apiUrl = getApiBaseUrl();

    // 1. Fetch server VAPID public key
    const res = await fetch(`${apiUrl}/api/reminders/vapid-public-key`);
    if (!res.ok) throw new Error('Failed to fetch VAPID key from server');
    const { publicKey } = await res.json();
    const convertedVapidKey = urlBase64ToUint8Array(publicKey);

    let subscription = await registration.pushManager.getSubscription();

    // Verify existing subscription key matches current server key
    if (subscription) {
      let keyMatches = false;
      const existingKey = subscription.options?.applicationServerKey;
      if (existingKey) {
        const existingBytes = new Uint8Array(existingKey);
        if (existingBytes.length === convertedVapidKey.length) {
          keyMatches = existingBytes.every((b, i) => b === convertedVapidKey[i]);
        }
      }
      if (!keyMatches) {
        console.log('🔄 Outdated VAPID key detected on device. Unsubscribing old subscription...');
        try {
          await subscription.unsubscribe();
        } catch {
          // ignore
        }
        subscription = null;
      }
    }

    if (!subscription) {
      // 2. Subscribe via PushManager
      subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: convertedVapidKey as unknown as BufferSource,
      });
      console.log('✅ Created fresh PushSubscription on device:', subscription.endpoint.slice(0, 30) + '...');
    }

    // 3. Register subscription and preferences with backend
    const timezoneOffset = new Date().getTimezoneOffset(); // e.g. -330 for IST UTC+5:30
    const subRes = await fetch(`${apiUrl}/api/reminders/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subscription,
        settings,
        timezoneOffset,
      }),
    });
    if (!subRes.ok) {
      throw new Error(`Subscribe failed with HTTP ${subRes.status}`);
    }

    console.log('✅ Push subscription synchronized with server scheduler');
    return subscription;
  } catch (err) {
    console.error('Push notification subscription error:', err);
    return null;
  }
}

/**
 * Requests native notification permission and synchronizes with server.
 */
export async function requestNotificationPermission(): Promise<NotificationPermissionState> {
  if (!isNotificationSupported()) {
    return 'unsupported';
  }
  try {
    const perm = await Notification.requestPermission();
    if (perm === 'granted') {
      const settings = loadReminderSettings();
      await subscribeToPushNotifications(settings);
    }
    return perm as NotificationPermissionState;
  } catch {
    return Notification.permission as NotificationPermissionState;
  }
}

/**
 * Keeps server reminder settings in sync with client changes.
 */
export async function syncSettingsWithServer(settings: ReminderSettings): Promise<void> {
  try {
    const subscription = await getExistingPushSubscription();
    if (!subscription) {
      if (settings.enabled && getNotificationPermission() === 'granted') {
        await subscribeToPushNotifications(settings);
      }
      return;
    }

    const apiUrl = getApiBaseUrl();
    const timezoneOffset = new Date().getTimezoneOffset();
    await fetch(`${apiUrl}/api/reminders/update-settings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subscription,
        settings,
        timezoneOffset,
      }),
    });
  } catch (err) {
    console.warn('Failed to sync settings with server:', err);
  }
}

/**
 * Plays a pleasant, subtle micro-chime using the Web Audio API without requiring external audio files.
 */
function playReminderChime(): void {
  try {
    const AudioCtx =
      window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;

    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(587.33, now); // D5
    osc1.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(880, now);
    osc2.frequency.exponentialRampToValueAtTime(1174.66, now + 0.25); // D6

    gain.gain.setValueAtTime(0.08, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now + 0.05);
    osc1.stop(now + 0.4);
    osc2.stop(now + 0.4);
  } catch {
    // Audio context may be restricted before user gesture
  }
}

/**
 * Triggers an immediate test notification via Server Web Push or Service Worker native notification.
 */
export async function sendTestNotificationNow(settings: ReminderSettings): Promise<boolean> {
  const perm = getNotificationPermission();
  const subscription = await getExistingPushSubscription();

  // If we have a push subscription, trigger a REAL server push!
  if (subscription) {
    try {
      const apiUrl = getApiBaseUrl();
      const res = await fetch(`${apiUrl}/api/reminders/send-test`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ subscription, settings }),
      });
      if (res.ok) {
        playReminderChime();
        return true;
      }
    } catch (err) {
      console.warn('Server push test error, falling back to local service worker:', err);
    }
  }

  // Fallback to local Service Worker native notification if permission is granted
  if (perm === 'granted' && 'serviceWorker' in navigator) {
    const reminder = getNextFormulasForReminder(settings, 99);
    if (!reminder) return false;

    const f = reminder.formulas[0];
    const title = `⚡ [Test] ${reminder.topicName} — Formula Reminder`;
    const body = `${f.formula}\n${f.meaning ? `💡 ${f.meaning}` : ''}`;

    try {
      const registration = await getActiveServiceWorkerRegistration();
      if (registration) {
        const iconUrl = typeof window !== 'undefined' ? new URL('pwa-192x192.png', window.location.href).href : 'pwa-192x192.png';
        await registration.showNotification(title, {
          body,
          icon: iconUrl,
          badge: iconUrl,
          tag: `test-${Date.now()}`,
          data: { url: './', isTest: true },
          renotify: true,
        } as any);
        playReminderChime();
        return true;
      }
    } catch (err) {
      console.error('Service worker notification failed:', err);
    }
  }

  // If blocked or unsupported, fallback to in-app banner
  const reminder = getNextFormulasForReminder(settings, 99);
  if (reminder) {
    playReminderChime();
    window.dispatchEvent(
      new CustomEvent('formula-in-app-notification', {
        detail: {
          reminder,
          isTest: true,
          title: `⚡ [Test] ${reminder.topicName} — Formula Reminder`,
          body: reminder.formulas[0]?.formula || '',
        },
      })
    );
    return true;
  }

  return false;
}

/**
 * Schedules a test push notification in N seconds via the server.
 * This allows the user to click the button, completely CLOSE the app on their phone,
 * and verify that the native notification appears in the phone's notification panel!
 */
export async function scheduleBackgroundPushTest(delaySeconds: number = 15): Promise<boolean> {
  const settings = loadReminderSettings();
  let subscription = await getExistingPushSubscription();

  if (!subscription) {
    subscription = await subscribeToPushNotifications(settings);
  }

  if (!subscription) {
    console.warn('Cannot schedule background push: No push subscription available');
    return false;
  }

  const apiUrl = getApiBaseUrl();
  try {
    const res = await fetch(`${apiUrl}/api/reminders/schedule-test`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        subscription,
        delaySeconds,
      }),
    });
    return res.ok;
  } catch (err) {
    console.error('Failed to schedule background test:', err);
    return false;
  }
}

/**
 * Checks scheduled times and automatically triggers reminders if due today while app is in foreground.
 */
export async function checkAndTriggerScheduledReminders(): Promise<void> {
  const settings = loadReminderSettings();
  if (!settings.enabled) return;

  const activeTimes = settings.times.slice(0, settings.remindersPerDay);
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();

  for (let slotIndex = 0; slotIndex < activeTimes.length; slotIndex++) {
    const timeStr = activeTimes[slotIndex];
    const [slotH, slotM] = timeStr.split(':').map(Number);

    // Trigger if current time matches slot hour & minute within 2 minutes window
    const matchesTime = currentHours === slotH && Math.abs(currentMinutes - slotM) <= 2;
    const slotKey = `${todayStr}_${slotIndex}`;

    if (matchesTime && settings.lastSentDateSlot !== slotKey) {
      const reminder = getNextFormulasForReminder(settings, slotIndex);
      if (reminder) {
        settings.lastNotificationSentAt = Date.now();
        settings.lastSentDateSlot = slotKey;
        saveReminderSettings(settings);

        // Try native service worker notification first
        if (getNotificationPermission() === 'granted' && 'serviceWorker' in navigator) {
          try {
            const reg = await getActiveServiceWorkerRegistration();
            if (reg) {
              const iconUrl = typeof window !== 'undefined' ? new URL('pwa-192x192.png', window.location.href).href : 'pwa-192x192.png';
              const f = reminder.formulas[0];
              await reg.showNotification(`⚡ ${reminder.topicName} — Daily Formula`, {
                body: `${f.formula}\n${f.meaning ? `💡 ${f.meaning}` : ''}`,
                icon: iconUrl,
                badge: iconUrl,
                tag: `slot-${slotKey}`,
                data: { url: './' },
                renotify: true,
              } as any);
              playReminderChime();
              break;
            }
          } catch {
            // Fall through to in-app
          }
        }

        // In-app fallback
        playReminderChime();
        window.dispatchEvent(
          new CustomEvent('formula-in-app-notification', {
            detail: {
              reminder,
              isTest: false,
              title: `⚡ ${reminder.topicName} — Daily Formula`,
              body: reminder.formulas[0]?.formula || '',
            },
          })
        );
        break;
      }
    }
  }
}

export interface DiagnosticsReport {
  notificationSupported: 'Supported' | 'Not supported';
  permission: 'Granted' | 'Denied' | 'Not requested';
  serviceWorker: 'Registered' | 'Not registered';
  serviceWorkerState: string;
  pwaInstallationStatus: 'Installed (Standalone)' | 'Browser (Not installed)';
  scheduledReminderCount: string;
  nextReminderTime: string;
  lastNotificationAttempt: string;
  notificationError: string;
  pushManagerSupported: boolean;
  hasPushSubscription: boolean;
  pushEndpointSnippet: string;
  serverVapidStatus: string;
  serverActiveSubs: number;
  isHttps: boolean;
}

/**
 * Gathers complete diagnostic information matching the exact user requirements.
 */
export async function getNotificationDiagnostics(): Promise<DiagnosticsReport> {
  const isHttps =
    typeof window !== 'undefined' &&
    (window.location.protocol === 'https:' ||
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1');

  const supported = isNotificationSupported();
  const rawPerm = getNotificationPermission();
  const permissionDisplay: 'Granted' | 'Denied' | 'Not requested' =
    rawPerm === 'granted' ? 'Granted' : rawPerm === 'denied' ? 'Denied' : 'Not requested';

  const serviceWorkerSupported = typeof navigator !== 'undefined' && 'serviceWorker' in navigator;
  let serviceWorkerDisplay: 'Registered' | 'Not registered' = 'Not registered';
  let serviceWorkerState = 'None';
  let pushManagerSupported = isPushSupported();
  let hasPushSubscription = false;
  let pushEndpointSnippet = 'None';

  if (serviceWorkerSupported) {
    try {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg) {
        serviceWorkerDisplay = 'Registered';
        serviceWorkerState = reg.active
          ? `Active (${reg.active.state})`
          : reg.installing
          ? 'Installing'
          : reg.waiting
          ? 'Waiting'
          : 'Registered';

        if (reg.pushManager) {
          const sub = await reg.pushManager.getSubscription();
          if (sub) {
            hasPushSubscription = true;
            pushEndpointSnippet = sub.endpoint.slice(0, 35) + '...';
          }
        }
      }
    } catch (e: any) {
      serviceWorkerState = `Error: ${e?.message || e}`;
    }
  }

  const settings = loadReminderSettings();
  const nextSlot = getNextScheduledSlot(settings);
  const scheduledCount = `${settings.remindersPerDay} per day (${settings.formulasPerNotification} formula/alert)`;
  const nextTimeStr = `${nextSlot.timeStr} (${nextSlot.isToday ? 'Today' : 'Tomorrow'})`;

  let lastAttempt = settings.lastNotificationSentAt
    ? `Sent at ${new Date(settings.lastNotificationSentAt).toLocaleTimeString()}`
    : 'None yet';

  let notificationError = 'None';

  let serverVapidStatus = 'Checking...';
  let serverActiveSubs = 0;

  try {
    const apiUrl = getApiBaseUrl();
    const res = await fetch(`${apiUrl}/api/reminders/diagnostics`);
    if (res.ok) {
      const data = await res.json();
      serverVapidStatus = data.vapidConfigured ? 'Configured & Online ✅' : 'Not Configured';
      serverActiveSubs = data.activeSubscriptions || 0;
      if (data.lastPushLog) {
        if (!data.lastPushLog.success) {
          notificationError = data.lastPushLog.details;
        }
        lastAttempt = `${data.lastPushLog.details} (${new Date(data.lastPushLog.timestamp).toLocaleTimeString()})`;
      }
    } else if (res.status === 404) {
      serverVapidStatus = 'Static host (Client Service Worker active)';
      notificationError = 'None';
    } else {
      serverVapidStatus = `Server responded HTTP ${res.status}`;
      notificationError = `Server diagnostics returned HTTP ${res.status}`;
    }
  } catch {
    serverVapidStatus = 'Static host / Offline mode';
    notificationError = 'None';
  }

  return {
    notificationSupported: supported ? 'Supported' : 'Not supported',
    permission: permissionDisplay,
    serviceWorker: serviceWorkerDisplay,
    serviceWorkerState,
    pwaInstallationStatus: isPWAInstalled() ? 'Installed (Standalone)' : 'Browser (Not installed)',
    scheduledReminderCount: scheduledCount,
    nextReminderTime: nextTimeStr,
    lastNotificationAttempt: lastAttempt,
    notificationError,
    pushManagerSupported,
    hasPushSubscription,
    pushEndpointSnippet,
    serverVapidStatus,
    serverActiveSubs,
    isHttps,
  };
}
