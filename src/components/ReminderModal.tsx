import React, { useState, useEffect, useMemo } from 'react';
import {
  Bell,
  Clock,
  Check,
  X,
  Send,
  Sparkles,
  Flame,
  Info,
  CheckCircle2,
  AlertTriangle,
  Zap,
  Activity,
  Smartphone,
  ChevronDown,
  RefreshCw,
  Timer,
} from 'lucide-react';
import { TOPICS_DATA } from '../data/topics';
import { ReminderSettings, SpacedRepetitionStats } from '../types/reminder';
import {
  getNextFormulasForReminder,
  getNextScheduledSlot,
  getSpacedRepetitionStats,
  loadReminderSettings,
  saveReminderSettings,
} from '../utils/spacedRepetition';
import {
  getNotificationPermission,
  requestNotificationPermission,
  sendTestNotificationNow,
  scheduleBackgroundPushTest,
  syncSettingsWithServer,
  subscribeToPushNotifications,
  getNotificationDiagnostics,
  getApiBaseUrl,
  NotificationPermissionState,
} from '../utils/notificationService';

interface ReminderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTopic: (topicId: string) => void;
  onOpenPractice: () => void;
}

export const ReminderModal: React.FC<ReminderModalProps> = ({
  isOpen,
  onClose,
  onOpenTopic,
  onOpenPractice,
}) => {
  const [settings, setSettings] = useState<ReminderSettings>(loadReminderSettings);
  const [permission, setPermission] = useState<NotificationPermissionState>(getNotificationPermission);
  const [testSent, setTestSent] = useState(false);
  const [bgTestScheduled, setBgTestScheduled] = useState<number | null>(null);
  const [showDiagnostics, setShowDiagnostics] = useState(true);
  const [diagnosticsData, setDiagnosticsData] = useState<any>(null);
  const [isLoadingDiagnostics, setIsLoadingDiagnostics] = useState(false);
  const [nearFutureSet, setNearFutureSet] = useState<string | null>(null);
  const [stats, setStats] = useState<SpacedRepetitionStats>(() =>
    getSpacedRepetitionStats(settings.selectedTopicIds)
  );

  const refreshDiagnostics = async () => {
    setIsLoadingDiagnostics(true);
    const data = await getNotificationDiagnostics();
    setDiagnosticsData(data);
    setIsLoadingDiagnostics(false);
  };

  // Sync settings and stats whenever modal opens
  useEffect(() => {
    if (isOpen) {
      const current = loadReminderSettings();
      setSettings(current);
      setPermission(getNotificationPermission());
      setStats(getSpacedRepetitionStats(current.selectedTopicIds));
      setTestSent(false);
      setBgTestScheduled(null);
      refreshDiagnostics();

      // If permission is already granted, ensure push subscription is active on server
      if (getNotificationPermission() === 'granted') {
        subscribeToPushNotifications(current).catch(() => {});
      }
    }
  }, [isOpen]);

  // Handle countdown timer for background test
  useEffect(() => {
    if (bgTestScheduled === null || bgTestScheduled <= 0) return;
    const timer = setInterval(() => {
      setBgTestScheduled((prev) => (prev !== null && prev > 1 ? prev - 1 : null));
    }, 1000);
    return () => clearInterval(timer);
  }, [bgTestScheduled]);

  // Compute next scheduled reminder slot preview
  const nextSlot = useMemo(() => {
    return getNextScheduledSlot(settings);
  }, [settings]);

  const upcomingPreview = useMemo(() => {
    return getNextFormulasForReminder(settings, nextSlot.slotIndex);
  }, [settings, nextSlot.slotIndex]);

  if (!isOpen) return null;

  const handleToggleEnabled = async () => {
    const updated = { ...settings, enabled: !settings.enabled };
    setSettings(updated);
    saveReminderSettings(updated);
    await syncSettingsWithServer(updated);

    // If enabling and permission not requested yet, prompt permission flow
    if (updated.enabled && permission === 'default') {
      const newPerm = await requestNotificationPermission();
      setPermission(newPerm);
      if (newPerm === 'granted') {
        await subscribeToPushNotifications(updated);
      }
    }
  };

  const handleUpdateFormulasPerNotification = async (count: 1 | 2) => {
    const updated = { ...settings, formulasPerNotification: count };
    setSettings(updated);
    saveReminderSettings(updated);
    await syncSettingsWithServer(updated);
  };

  const handleUpdateRemindersPerDay = async (count: 2 | 3) => {
    const times = count === 2 ? ['09:00', '19:00'] : ['09:00', '14:00', '20:00'];
    const updated = { ...settings, remindersPerDay: count, times };
    setSettings(updated);
    saveReminderSettings(updated);
    await syncSettingsWithServer(updated);
  };

  const handleUpdateTime = async (index: number, newTime: string) => {
    const newTimes = [...settings.times];
    newTimes[index] = newTime;
    const updated = { ...settings, times: newTimes };
    setSettings(updated);
    saveReminderSettings(updated);
    await syncSettingsWithServer(updated);
  };

  const handleToggleTopic = async (topicId: string) => {
    let newSelected: string[];
    if (settings.selectedTopicIds.includes(topicId)) {
      newSelected = settings.selectedTopicIds.filter((id) => id !== topicId);
    } else {
      newSelected = [...settings.selectedTopicIds, topicId];
    }
    const updated = { ...settings, selectedTopicIds: newSelected };
    setSettings(updated);
    saveReminderSettings(updated);
    setStats(getSpacedRepetitionStats(newSelected));
    await syncSettingsWithServer(updated);
  };

  const handleSelectAllTopics = async () => {
    const allIds = TOPICS_DATA.map((t) => t.id);
    const updated = { ...settings, selectedTopicIds: allIds };
    setSettings(updated);
    saveReminderSettings(updated);
    setStats(getSpacedRepetitionStats(allIds));
    await syncSettingsWithServer(updated);
  };

  const handleSelectHighYieldTopics = async () => {
    const highYieldIds = [
      'trigonometry',
      'matrices-determinants',
      'probability',
      'quadratic-equations',
      'progressions',
      'calculus-integration',
      'straight-lines',
      'number-system',
    ];
    const updated = { ...settings, selectedTopicIds: highYieldIds };
    setSettings(updated);
    saveReminderSettings(updated);
    setStats(getSpacedRepetitionStats(highYieldIds));
    await syncSettingsWithServer(updated);
  };

  const handleClearAllTopics = async () => {
    const updated = { ...settings, selectedTopicIds: [] };
    setSettings(updated);
    saveReminderSettings(updated);
    setStats(getSpacedRepetitionStats([]));
    await syncSettingsWithServer(updated);
  };

  const handleRequestPermission = async () => {
    const newPerm = await requestNotificationPermission();
    setPermission(newPerm);
    if (newPerm === 'granted') {
      await subscribeToPushNotifications(settings);
      refreshDiagnostics();
    }
  };

  const handleSendTestNotification = async () => {
    setTestSent(true);
    await sendTestNotificationNow(settings);
    setTimeout(() => setTestSent(false), 3000);
    refreshDiagnostics();
  };

  const handleScheduleBackgroundTest = async () => {
    setBgTestScheduled(15);
    await scheduleBackgroundPushTest(15);
    refreshDiagnostics();
  };

  const handleSetNearFutureTestTime = async () => {
    const now = new Date();
    // 2 minutes in the future for scheduled test
    now.setMinutes(now.getMinutes() + 2);
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const targetTime = `${h}:${m}`;
    const newTimes = [...settings.times];
    newTimes[0] = targetTime;
    const updated = { ...settings, times: newTimes };
    setSettings(updated);
    saveReminderSettings(updated);
    await syncSettingsWithServer(updated);
    setNearFutureSet(targetTime);
    refreshDiagnostics();
    setTimeout(() => setNearFutureSet(null), 10000);
  };

  const formatCountdown = (mins: number) => {
    if (mins <= 1) return 'in less than a minute';
    if (mins < 60) return `in ${mins} minutes`;
    const h = Math.floor(mins / 60);
    const m = mins % 60;
    return m > 0 ? `in ${h}h ${m}m` : `in ${h}h`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Formula Reminder Settings"
      className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden relative text-[var(--ink)]">
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-[var(--border)] flex items-center justify-between gap-3 bg-gradient-to-r from-purple-500/10 via-indigo-500/5 to-purple-500/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
              <Bell className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-extrabold text-base sm:text-lg text-[var(--ink)] leading-tight">
                Daily Formula Reminders
              </h2>
              <p className="text-xs text-[var(--ink-muted)]">
                Native push notifications & spaced micro-revision
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Active / Pause Toggle Button */}
            <button
              onClick={handleToggleEnabled}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                settings.enabled
                  ? 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm'
                  : 'bg-slate-200 dark:bg-slate-800 text-[var(--ink-muted)] hover:text-[var(--ink)]'
              }`}
              title={settings.enabled ? 'Reminders are active' : 'Reminders are paused'}
            >
              {settings.enabled ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Active</span>
                </>
              ) : (
                <span>Paused</span>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
              title="Close settings"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1 text-xs sm:text-sm">
          {/* Section 1: Next Scheduled Reminder (Hero Card) */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/15 via-indigo-500/10 to-pink-500/10 border border-purple-500/30 relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600" />
                </span>
                <span className="font-heading font-bold text-xs uppercase tracking-wider text-purple-700 dark:text-purple-300">
                  Next Scheduled Reminder
                </span>
              </div>

              <span className="text-xs font-mono font-bold text-purple-900 dark:text-purple-200 bg-white/60 dark:bg-black/40 px-2.5 py-0.5 rounded-full border border-purple-300/40">
                {nextSlot.isToday ? 'Today' : 'Tomorrow'} at {nextSlot.timeStr} • {formatCountdown(nextSlot.minutesUntil)}
              </span>
            </div>

            {/* Upcoming formula teaser */}
            {upcomingPreview && upcomingPreview.formulas.length > 0 ? (
              <div className="bg-white/80 dark:bg-black/40 rounded-xl p-3 border border-purple-400/20 my-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-purple-800 dark:text-purple-300 mb-1">
                  <span>Up Next: {upcomingPreview.topicName}</span>
                  <span className="text-[10px] text-[var(--ink-muted)]">
                    {upcomingPreview.formulas[0].isNew ? '✨ Introducing New' : '🔁 Spaced Revision'}
                  </span>
                </div>
                <div className="font-mono font-bold text-xs sm:text-sm text-[var(--ink)] my-1 truncate">
                  {upcomingPreview.formulas[0].formula}
                </div>
                {upcomingPreview.formulas[0].meaning && (
                  <p className="text-[11px] text-[var(--ink-muted)] truncate">
                    💡 {upcomingPreview.formulas[0].meaning}
                  </p>
                )}
              </div>
            ) : (
              <p className="text-xs text-[var(--ink-muted)] italic my-2">
                Select at least one topic below to schedule formula reminders.
              </p>
            )}

            {/* Action Buttons & Mobile Background Push Test */}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2 border-t border-purple-300/20">
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={handleSendTestNotification}
                  disabled={testSent}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-all shadow-sm active:scale-95 disabled:opacity-50"
                  title="Sends immediate notification"
                >
                  {testSent ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Test Push Now</span>
                    </>
                  )}
                </button>

                {/* 15s Background Push Test */}
                <button
                  onClick={handleScheduleBackgroundTest}
                  disabled={bgTestScheduled !== null}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-all shadow-sm active:scale-95 disabled:opacity-50"
                  title="Schedule test, close the app on your phone, and verify native delivery"
                >
                  <Timer className="w-3.5 h-3.5" />
                  <span>
                    {bgTestScheduled !== null
                      ? `Close app now! (${bgTestScheduled}s)`
                      : 'Test Background Push (15s delay)'}
                  </span>
                </button>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onOpenPractice();
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 text-amber-800 dark:text-amber-300 font-semibold text-xs transition-colors border border-amber-500/30"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Practice Daily Queue</span>
              </button>
            </div>

            {bgTestScheduled !== null && (
              <div className="mt-2.5 p-2 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-[11px] text-indigo-900 dark:text-indigo-200 animate-pulse">
                📲 <strong>Mobile Test Active:</strong> Close or minimize the app now. In{' '}
                <strong>{bgTestScheduled} seconds</strong>, the server will wake up your phone with a native formula reminder!
              </div>
            )}
          </div>

          {/* Section 2: Notification Permission Status Callout & Guided Flow */}
          <div className="rounded-2xl p-3.5 sm:p-4 border text-xs flex flex-col gap-3 bg-[var(--card)] border-[var(--border)]">
            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-0.5">
                {permission === 'granted' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                ) : permission === 'denied' ? (
                  <AlertTriangle className="w-5 h-5 text-rose-500" />
                ) : (
                  <Bell className="w-5 h-5 text-purple-600" />
                )}
              </div>
              <div className="flex-1">
                <div className="font-heading font-bold text-sm text-[var(--ink)]">
                  {permission === 'granted'
                    ? 'Native Mobile Notifications: Active & Scheduled'
                    : permission === 'denied'
                    ? 'Notifications Blocked on Device'
                    : 'Enable Daily Formula Notifications'}
                </div>
                <p className="text-[var(--ink-muted)] text-xs mt-0.5 leading-relaxed">
                  {permission === 'granted'
                    ? 'Registered with device push service. Reminders will arrive in your phone notification panel even when the app is completely closed.'
                    : permission === 'denied'
                    ? 'Notification permissions are currently denied in your browser or phone settings. Follow the instructions below to enable.'
                    : 'Receive 1–2 key formulas 2–3 times a day on your device lock screen for spaced repetition and memory retention.'}
                </p>
              </div>
              {permission === 'default' && (
                <button
                  onClick={handleRequestPermission}
                  className="shrink-0 px-3.5 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors shadow-sm"
                >
                  Enable Now
                </button>
              )}
              {permission === 'denied' && (
                <button
                  onClick={async () => {
                    const perm = await requestNotificationPermission();
                    setPermission(perm);
                    refreshDiagnostics();
                  }}
                  className="shrink-0 px-3 py-1.5 rounded-xl bg-purple-600/10 hover:bg-purple-600/20 text-purple-700 dark:text-purple-300 font-bold text-xs transition-colors border border-purple-400/30"
                >
                  Re-check
                </button>
              )}
            </div>

            {/* Instructions shown when permission is denied */}
            {permission === 'denied' && (
              <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-[11px] text-[var(--ink)] space-y-1.5">
                <div className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>How to enable notifications on your mobile device:</span>
                </div>
                <ul className="list-disc pl-4 space-y-1 text-[var(--ink-muted)]">
                  <li>
                    <strong>Android (Chrome / Samsung Internet):</strong> Tap the 🔒 or ⚙️ icon in the address bar → tap <em>Site Settings</em> or <em>Permissions</em> → set <em>Notifications</em> to <strong>Allow</strong>.
                  </li>
                  <li>
                    <strong>iPhone / iPad (iOS Safari):</strong> First add this app to your Home Screen (Share icon → <em>Add to Home Screen</em>). Then open iOS <em>Settings → FormulaHub → Notifications → Allow Notifications</em>.
                  </li>
                  <li>
                    After allowing, tap the <strong>Re-check</strong> button above.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Section 3: Notification Frequency & Schedule */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-sm text-[var(--ink)] flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-600" />
              <span>Notification Schedule & Volume</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Setting A: Formulas per Notification */}
              <div className="p-3.5 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
                <span className="block font-semibold text-xs text-[var(--ink)] mb-1">
                  Formulas Per Notification
                </span>
                <span className="block text-[11px] text-[var(--ink-muted)] mb-2.5">
                  Keep each alert fast to digest immediately.
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleUpdateFormulasPerNotification(1)}
                    className={`py-2 px-3 rounded-xl font-bold text-xs transition-all text-center border ${
                      settings.formulasPerNotification === 1
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-[var(--card)] hover:bg-purple-500/5 text-[var(--ink)] border-[var(--border)]'
                    }`}
                  >
                    1 Formula
                  </button>
                  <button
                    onClick={() => handleUpdateFormulasPerNotification(2)}
                    className={`py-2 px-3 rounded-xl font-bold text-xs transition-all text-center border ${
                      settings.formulasPerNotification === 2
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-[var(--card)] hover:bg-purple-500/5 text-[var(--ink)] border-[var(--border)]'
                    }`}
                  >
                    2 Formulas
                  </button>
                </div>
              </div>

              {/* Setting B: Reminders Per Day */}
              <div className="p-3.5 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
                <span className="block font-semibold text-xs text-[var(--ink)] mb-1">
                  Reminders Per Day
                </span>
                <span className="block text-[11px] text-[var(--ink-muted)] mb-2.5">
                  Spaced intervals for optimal retention.
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => handleUpdateRemindersPerDay(2)}
                    className={`py-2 px-3 rounded-xl font-bold text-xs transition-all text-center border ${
                      settings.remindersPerDay === 2
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-[var(--card)] hover:bg-purple-500/5 text-[var(--ink)] border-[var(--border)]'
                    }`}
                  >
                    2 Times / Day
                  </button>
                  <button
                    onClick={() => handleUpdateRemindersPerDay(3)}
                    className={`py-2 px-3 rounded-xl font-bold text-xs transition-all text-center border ${
                      settings.remindersPerDay === 3
                        ? 'bg-purple-600 text-white border-purple-600 shadow-sm'
                        : 'bg-[var(--card)] hover:bg-purple-500/5 text-[var(--ink)] border-[var(--border)]'
                    }`}
                  >
                    3 Times / Day
                  </button>
                </div>
              </div>
            </div>

            {/* Daily Schedule Slots */}
            <div className="p-3.5 rounded-2xl bg-[var(--bg)] border border-[var(--border)]">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-semibold text-xs text-[var(--ink)]">
                  Preferred Reminder Times (Local Time):
                </span>
                <button
                  onClick={handleSetNearFutureTestTime}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 transition-colors border border-purple-400/20 flex items-center gap-1"
                  title="Sets Slot 1 to 2 minutes from now so you can close the app and verify native notification delivery!"
                >
                  <Timer className="w-3 h-3" />
                  <span>Set Test Time (+2 mins)</span>
                </button>
              </div>

              {nearFutureSet && (
                <div className="mb-2 p-2 rounded-xl bg-purple-500/15 border border-purple-500/30 text-[11px] text-purple-900 dark:text-purple-200">
                  ⏱️ <strong>Slot 1 set to {nearFutureSet}!</strong> Now close this app completely on your mobile phone, wait until {nearFutureSet}, and verify the formula appears in your phone notification shade.
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {settings.times.slice(0, settings.remindersPerDay).map((time, idx) => {
                  const label =
                    settings.remindersPerDay === 2
                      ? idx === 0
                        ? '🌅 Morning'
                        : '🌙 Evening'
                      : idx === 0
                      ? '🌅 Morning'
                      : idx === 1
                      ? '☀️ Afternoon'
                      : '🌙 Evening';

                  return (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold text-[var(--ink-muted)]">
                        {label}
                      </span>
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => handleUpdateTime(idx, e.target.value)}
                        className="w-full px-3 py-1.5 rounded-xl bg-[var(--card)] border border-[var(--border)] text-xs font-mono font-bold text-[var(--ink)] focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Section 4: Spaced-Repetition Progress Bar */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-slate-500/5 border border-[var(--border)]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-heading font-bold text-xs text-[var(--ink)] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>Spaced Repetition Memory Status</span>
              </span>
              <span className="flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400">
                <Flame className="w-3.5 h-3.5 fill-amber-500" />
                <span>{stats.streakDays}-Day Revision Streak</span>
              </span>
            </div>

            {/* Multi-segment progress bar */}
            <div className="w-full h-3 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden flex my-2">
              <div
                className="bg-emerald-500 h-full transition-all duration-500"
                style={{
                  width: `${stats.totalInRotation ? (stats.masteredCount / stats.totalInRotation) * 100 : 0}%`,
                }}
                title={`${stats.masteredCount} Mastered`}
              />
              <div
                className="bg-purple-500 h-full transition-all duration-500"
                style={{
                  width: `${stats.totalInRotation ? (stats.learningCount / stats.totalInRotation) * 100 : 0}%`,
                }}
                title={`${stats.learningCount} In Progress`}
              />
              <div
                className="bg-slate-300 dark:bg-slate-700 h-full transition-all duration-500"
                style={{
                  width: `${stats.totalInRotation ? (stats.unseenCount / stats.totalInRotation) * 100 : 0}%`,
                }}
                title={`${stats.unseenCount} Yet to Introduce`}
              />
            </div>

            <div className="flex items-center justify-between text-[11px] text-[var(--ink-muted)] font-medium pt-1">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" />
                {stats.masteredCount} Mastered
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-500 inline-block" />
                {stats.learningCount} Learning
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-400 inline-block" />
                {stats.unseenCount} In Queue
              </span>
            </div>
          </div>

          {/* Section 5: Topic Selection Control */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <h3 className="font-heading font-bold text-sm text-[var(--ink)]">
                  Select Topics for Daily Revision
                </h3>
                <p className="text-[11px] text-[var(--ink-muted)]">
                  {settings.selectedTopicIds.length} of {TOPICS_DATA.length} topics enabled
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleSelectHighYieldTopics}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-purple-500/10 hover:bg-purple-500/20 text-purple-700 dark:text-purple-300 transition-colors"
                >
                  NIMCET Core
                </button>
                <button
                  onClick={handleSelectAllTopics}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[var(--bg)] hover:bg-black/5 dark:hover:bg-white/5 text-[var(--ink)] border border-[var(--border)] transition-colors"
                >
                  Select All
                </button>
                <button
                  onClick={handleClearAllTopics}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[var(--bg)] hover:bg-black/5 dark:hover:bg-white/5 text-[var(--ink-muted)] border border-[var(--border)] transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Topics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {TOPICS_DATA.map((topic) => {
                const isSelected = settings.selectedTopicIds.includes(topic.id);
                const formulaCount = topic.categories.reduce((acc, c) => acc + c.formulas.length, 0);

                return (
                  <div
                    key={topic.id}
                    onClick={() => handleToggleTopic(topic.id)}
                    className={`p-3 rounded-2xl border transition-all cursor-pointer select-none flex items-center justify-between gap-2.5 ${
                      isSelected
                        ? 'bg-purple-500/10 border-purple-500 shadow-xs'
                        : 'bg-[var(--card)] hover:bg-[var(--card-hover)] border-[var(--border)] opacity-70'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="text-xl shrink-0">{topic.icon}</span>
                      <div className="min-w-0">
                        <span className="font-heading font-bold text-xs text-[var(--ink)] truncate block">
                          {topic.name}
                        </span>
                        <span className="text-[10px] text-[var(--ink-muted)] block">
                          {formulaCount} formulas • {topic.categoryGroup}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 border transition-all ${
                        isSelected
                          ? 'bg-purple-600 border-purple-600 text-white'
                          : 'border-[var(--border)] bg-[var(--bg)]'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 6: Notification Diagnostics (Mandated for debugging) */}
          <div className="border border-[var(--border)] rounded-2xl overflow-hidden">
            <button
              onClick={() => {
                setShowDiagnostics(!showDiagnostics);
                if (!showDiagnostics) refreshDiagnostics();
              }}
              className="w-full flex items-center justify-between p-3.5 bg-slate-500/5 hover:bg-slate-500/10 transition-colors text-left"
            >
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-600" />
                <span className="font-heading font-bold text-xs text-[var(--ink)]">
                  Notification Diagnostics & Mobile PWA Status
                </span>
              </div>
              <ChevronDown
                className={`w-4 h-4 text-[var(--ink-muted)] transition-transform duration-200 ${
                  showDiagnostics ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showDiagnostics && (
              <div className="p-3.5 bg-[var(--card)] border-t border-[var(--border)] space-y-2 text-[11px] font-mono">
                <div className="flex items-center justify-between pb-1 border-b border-[var(--border)] font-sans font-semibold text-[var(--ink-muted)]">
                  <span>Diagnostic Item</span>
                  <button
                    onClick={refreshDiagnostics}
                    className="flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    <RefreshCw className={`w-3 h-3 ${isLoadingDiagnostics ? 'animate-spin' : ''}`} />
                    <span>Refresh</span>
                  </button>
                </div>

                {/* 1. Notification support */}
                <div className="grid grid-cols-2 gap-1 py-1 border-b border-[var(--border)]/50">
                  <span className="text-[var(--ink-muted)] font-sans">Notification support:</span>
                  <span className="font-bold text-right text-[var(--ink)]">
                    {diagnosticsData?.notificationSupported || 'Checking...'}
                  </span>
                </div>

                {/* 2. Permission */}
                <div className="grid grid-cols-2 gap-1 py-1 border-b border-[var(--border)]/50">
                  <span className="text-[var(--ink-muted)] font-sans">Permission:</span>
                  <span
                    className={`font-bold text-right ${
                      diagnosticsData?.permission === 'Granted'
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : diagnosticsData?.permission === 'Denied'
                        ? 'text-rose-600 dark:text-rose-400'
                        : 'text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {diagnosticsData?.permission || 'Checking...'}
                  </span>
                </div>

                {/* 3. Service worker */}
                <div className="grid grid-cols-2 gap-1 py-1 border-b border-[var(--border)]/50">
                  <span className="text-[var(--ink-muted)] font-sans">Service worker:</span>
                  <span className="font-bold text-right text-[var(--ink)]">
                    {diagnosticsData?.serviceWorker || 'Checking...'}
                  </span>
                </div>

                {/* 4. Service worker state */}
                <div className="grid grid-cols-2 gap-1 py-1 border-b border-[var(--border)]/50">
                  <span className="text-[var(--ink-muted)] font-sans">Service worker state:</span>
                  <span className="font-bold text-right text-purple-600 dark:text-purple-400 truncate">
                    {diagnosticsData?.serviceWorkerState || 'None'}
                  </span>
                </div>

                {/* 5. PWA installation status */}
                <div className="grid grid-cols-2 gap-1 py-1 border-b border-[var(--border)]/50">
                  <span className="text-[var(--ink-muted)] font-sans">PWA installation status:</span>
                  <span className="font-bold text-right text-[var(--ink)] truncate">
                    {diagnosticsData?.pwaInstallationStatus || 'Checking...'}
                  </span>
                </div>

                {/* 6. Scheduled reminder count */}
                <div className="grid grid-cols-2 gap-1 py-1 border-b border-[var(--border)]/50">
                  <span className="text-[var(--ink-muted)] font-sans">Scheduled reminder count:</span>
                  <span className="font-bold text-right text-[var(--ink)]">
                    {diagnosticsData?.scheduledReminderCount || `${settings.remindersPerDay} per day`}
                  </span>
                </div>

                {/* 7. Next reminder time */}
                <div className="grid grid-cols-2 gap-1 py-1 border-b border-[var(--border)]/50">
                  <span className="text-[var(--ink-muted)] font-sans">Next reminder time:</span>
                  <span className="font-bold text-right text-[var(--ink)]">
                    {diagnosticsData?.nextReminderTime || nextSlot.timeStr}
                  </span>
                </div>

                {/* 8. Last notification attempt */}
                <div className="grid grid-cols-2 gap-1 py-1 border-b border-[var(--border)]/50">
                  <span className="text-[var(--ink-muted)] font-sans">Last notification attempt:</span>
                  <span className="font-bold text-right text-[var(--ink)] truncate">
                    {diagnosticsData?.lastNotificationAttempt || 'None yet'}
                  </span>
                </div>

                {/* 9. Any notification/scheduling error */}
                <div className="grid grid-cols-2 gap-1 py-1">
                  <span className="text-[var(--ink-muted)] font-sans">Any notification/scheduling error:</span>
                  <span
                    className={`font-bold text-right truncate ${
                      diagnosticsData?.notificationError && diagnosticsData.notificationError !== 'None'
                        ? 'text-rose-600 dark:text-rose-400'
                        : 'text-emerald-600 dark:text-emerald-400'
                    }`}
                  >
                    {diagnosticsData?.notificationError || 'None'}
                  </span>
                </div>

                {/* Additional Web Push details for verification */}
                <div className="mt-2 pt-2 border-t border-[var(--border)]/80 text-[10px] text-[var(--ink-muted)] space-y-1">
                  <div className="flex justify-between">
                    <span>Web Push Service:</span>
                    <span className="font-semibold text-[var(--ink)]">{diagnosticsData?.serverVapidStatus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Push Server Target:</span>
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      {getApiBaseUrl() ? 'Cloud Run Backend (Remote Push Sync)' : 'Cloud Run Backend (Direct Sync)'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Device Subscription:</span>
                    <span className="font-semibold text-[var(--ink)]">
                      {diagnosticsData?.hasPushSubscription ? 'Active & Synced ✅' : 'Not Subscribed'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>HTTPS Connection:</span>
                    <span className="font-semibold text-[var(--ink)]">{diagnosticsData?.isHttps ? 'Yes (Secure)' : 'No'}</span>
                  </div>
                </div>

                <div className="mt-2.5 p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[10px] text-amber-900 dark:text-amber-200">
                  📱 <strong>Mobile Lock-Screen Tip:</strong> Android power-saving can delay lock-screen notifications. For instant delivery while the screen is off, set Battery usage to <em>"Unrestricted"</em> in <em>Settings → Apps → Chrome / FormulaHub → Battery</em>.
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 border-t border-[var(--border)] bg-[var(--card)] flex items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] text-[var(--ink-muted)] flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span>Reminders schedule on server to deliver even when app is closed.</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors shadow-sm"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
