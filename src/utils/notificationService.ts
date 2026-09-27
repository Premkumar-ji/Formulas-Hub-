import { ReminderNotificationData, ReminderSettings } from '../types/reminder';
import {
  getNextFormulasForReminder,
  loadReminderSettings,
  markFormulaShownInReminder,
  saveReminderSettings,
} from './spacedRepetition';

export type NotificationPermissionState = 'granted' | 'denied' | 'default' | 'unsupported';

export function isNotificationSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window;
}

export function getNotificationPermission(): NotificationPermissionState {
  if (!isNotificationSupported()) {
    return 'unsupported';
  }
  return Notification.permission as NotificationPermissionState;
}

export async function requestNotificationPermission(): Promise<NotificationPermissionState> {
  if (!isNotificationSupported()) {
    return 'unsupported';
  }
  try {
    const perm = await Notification.requestPermission();
    return perm as NotificationPermissionState;
  } catch {
    return Notification.permission as NotificationPermissionState;
  }
}

/**
 * Plays a pleasant, subtle micro-chime using the Web Audio API without requiring external audio files.
 */
function playReminderChime(): void {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
 * Dispatches a native phone/desktop notification or falls back to in-app banner.
 */
export async function sendFormulaNotification(
  reminder: ReminderNotificationData,
  isTest: boolean = false
): Promise<boolean> {
  const perm = getNotificationPermission();
  const fList = reminder.formulas;

  // Title: "Trigonometry — Daily Formula"
  const title = isTest
    ? `⚡ [Test] ${reminder.topicName} — Formula Reminder`
    : `⚡ ${reminder.topicName} — Daily Formula`;

  // Body:
  // e.g. "sin²θ + cos²θ = 1\n💡 Fundamental Pythagorean identity"
  let body = '';
  if (fList.length === 1) {
    const f = fList[0];
    body = `${f.formula}\n${f.meaning ? `💡 ${f.meaning}` : ''}`;
  } else {
    body = fList
      .map((f, idx) => `${idx + 1}. ${f.formula}${f.meaning ? ` — ${f.meaning}` : ''}`)
      .join('\n');
  }

  // Always mark shown in spaced repetition database (unless it's an isolated test without tracking)
  if (!isTest) {
    fList.forEach(f => markFormulaShownInReminder(f.id));
  }

  // Play subtle in-app chime
  playReminderChime();

  // Broadcast custom in-app event so UI shows the interactive banner/toast
  if (typeof window !== 'undefined') {
    const event = new CustomEvent('formula-in-app-notification', {
      detail: {
        reminder,
        isTest,
        title,
        body,
      },
    });
    window.dispatchEvent(event);
  }

  // If native notifications are granted, push to OS / Notification Tray
  if (perm === 'granted') {
    try {
      // 1. Prefer Service Worker registration (supported on Android PWA / Chrome / Edge)
      if ('serviceWorker' in navigator) {
        const reg = await navigator.serviceWorker.ready;
        if (reg && 'showNotification' in reg) {
          await reg.showNotification(title, {
            body,
            icon: '/pwa-192x192.png',
            badge: '/pwa-192x192.png',
            tag: `formula-reminder-${reminder.slotIndex}-${Date.now()}`,
            data: {
              url: window.location.href,
              topicId: fList[0]?.topicId,
              formulaId: fList[0]?.id,
            },
          });
          return true;
        }
      }

      // 2. Standard Web Notification API fallback
      const notification = new Notification(title, {
        body,
        icon: '/pwa-192x192.png',
        badge: '/pwa-192x192.png',
        tag: `formula-reminder-${reminder.slotIndex}-${Date.now()}`,
      });

      notification.onclick = () => {
        window.focus();
        notification.close();
      };
      return true;
    } catch (err) {
      console.warn('Native notification failed, in-app banner was displayed:', err);
    }
  }

  // In-app fallback successfully delivered
  return true;
}

/**
 * Triggers an immediate test notification for user testing and demonstration.
 */
export async function sendTestNotificationNow(settings: ReminderSettings): Promise<boolean> {
  const reminder = getNextFormulasForReminder(settings, 99);
  if (!reminder) return false;
  return await sendFormulaNotification(reminder, true);
}

/**
 * Checks scheduled times and automatically triggers reminders if due today.
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
        await sendFormulaNotification(reminder, false);
        settings.lastNotificationSentAt = Date.now();
        settings.lastSentDateSlot = slotKey;
        saveReminderSettings(settings);
        break;
      }
    }
  }
}
