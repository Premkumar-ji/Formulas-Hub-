import React, { useState, useEffect, useMemo } from 'react';
import {
  Bell,
  Clock,
  Check,
  X,
  Play,
  Pause,
  Send,
  Sparkles,
  Flame,
  Info,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Zap,
} from 'lucide-react';
import { TOPICS_DATA } from '../data/topics';
import { ReminderSettings, SpacedRepetitionStats } from '../types/reminder';
import {
  DEFAULT_REMINDER_SETTINGS,
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
  NotificationPermissionState,
} from '../utils/notificationService';
import { MathRenderer } from './MathRenderer';

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
  const [stats, setStats] = useState<SpacedRepetitionStats>(() =>
    getSpacedRepetitionStats(settings.selectedTopicIds)
  );

  // Sync settings and stats whenever modal opens
  useEffect(() => {
    if (isOpen) {
      const current = loadReminderSettings();
      setSettings(current);
      setPermission(getNotificationPermission());
      setStats(getSpacedRepetitionStats(current.selectedTopicIds));
      setTestSent(false);
    }
  }, [isOpen]);

  // Compute next scheduled reminder slot preview
  const nextSlot = useMemo(() => {
    return getNextScheduledSlot(settings);
  }, [settings]);

  const upcomingPreview = useMemo(() => {
    return getNextFormulasForReminder(settings, nextSlot.slotIndex);
  }, [settings, nextSlot.slotIndex]);

  if (!isOpen) return null;

  const handleToggleEnabled = () => {
    const updated = { ...settings, enabled: !settings.enabled };
    setSettings(updated);
    saveReminderSettings(updated);
  };

  const handleUpdateFormulasPerNotification = (count: 1 | 2) => {
    const updated = { ...settings, formulasPerNotification: count };
    setSettings(updated);
    saveReminderSettings(updated);
  };

  const handleUpdateRemindersPerDay = (count: 2 | 3) => {
    const times = count === 2 ? ['09:00', '19:00'] : ['09:00', '14:00', '20:00'];
    const updated = { ...settings, remindersPerDay: count, times };
    setSettings(updated);
    saveReminderSettings(updated);
  };

  const handleUpdateTime = (index: number, newTime: string) => {
    const newTimes = [...settings.times];
    newTimes[index] = newTime;
    const updated = { ...settings, times: newTimes };
    setSettings(updated);
    saveReminderSettings(updated);
  };

  const handleToggleTopic = (topicId: string) => {
    let newSelected: string[];
    if (settings.selectedTopicIds.includes(topicId)) {
      newSelected = settings.selectedTopicIds.filter(id => id !== topicId);
    } else {
      newSelected = [...settings.selectedTopicIds, topicId];
    }
    const updated = { ...settings, selectedTopicIds: newSelected };
    setSettings(updated);
    saveReminderSettings(updated);
    setStats(getSpacedRepetitionStats(newSelected));
  };

  const handleSelectAllTopics = () => {
    const allIds = TOPICS_DATA.map(t => t.id);
    const updated = { ...settings, selectedTopicIds: allIds };
    setSettings(updated);
    saveReminderSettings(updated);
    setStats(getSpacedRepetitionStats(allIds));
  };

  const handleSelectHighYieldTopics = () => {
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
  };

  const handleClearAllTopics = () => {
    const updated = { ...settings, selectedTopicIds: [] };
    setSettings(updated);
    saveReminderSettings(updated);
    setStats(getSpacedRepetitionStats([]));
  };

  const handleRequestPermission = async () => {
    const newPerm = await requestNotificationPermission();
    setPermission(newPerm);
  };

  const handleSendTestNotification = async () => {
    setTestSent(true);
    await sendTestNotificationNow(settings);
    setTimeout(() => setTestSent(false), 3000);
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
      onClick={e => {
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
                Spaced repetition & automated micro-revision
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
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Paused</span>
                </>
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

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-2 border-t border-purple-300/20">
              <button
                onClick={handleSendTestNotification}
                disabled={testSent}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs transition-all shadow-sm active:scale-95 disabled:opacity-50"
              >
                {testSent ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Notification Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Test Reminder Now</span>
                  </>
                )}
              </button>

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
          </div>

          {/* Section 2: Notification Permission Status Callout */}
          <div className="rounded-2xl p-3.5 sm:p-4 border text-xs flex items-start gap-3 bg-[var(--card)] border-[var(--border)]">
            <div className="shrink-0 mt-0.5">
              {permission === 'granted' ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              ) : permission === 'denied' ? (
                <AlertTriangle className="w-5 h-5 text-amber-500" />
              ) : (
                <Bell className="w-5 h-5 text-purple-600" />
              )}
            </div>
            <div className="flex-1">
              <div className="font-heading font-bold text-sm text-[var(--ink)]">
                {permission === 'granted'
                  ? 'System Notifications Enabled'
                  : permission === 'denied'
                  ? 'Notifications Blocked in Browser'
                  : 'Enable Phone & Desktop Notifications'}
              </div>
              <p className="text-[var(--ink-muted)] text-xs mt-0.5 leading-relaxed">
                {permission === 'granted'
                  ? 'You will receive scheduled formula reminders directly on your device even when the app is minimized.'
                  : permission === 'denied'
                  ? 'Your browser is currently blocking notifications. Reminders will still display as interactive in-app banners whenever you open the app.'
                  : 'Receive 1–2 key formulas 2–3 times a day on your device lock screen for frictionless daily memory retention.'}
              </p>
            </div>
            {permission === 'default' && (
              <button
                onClick={handleRequestPermission}
                className="shrink-0 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors shadow-sm"
              >
                Allow
              </button>
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
              <span className="block font-semibold text-xs text-[var(--ink)] mb-2">
                Preferred Reminder Times:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {settings.times.slice(0, settings.remindersPerDay).map((time, idx) => {
                  const label =
                    settings.remindersPerDay === 2
                      ? idx === 0 ? '🌅 Morning' : '🌙 Evening'
                      : idx === 0 ? '🌅 Morning' : idx === 1 ? '☀️ Afternoon' : '🌙 Evening';

                  return (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-[11px] font-semibold text-[var(--ink-muted)]">
                        {label}
                      </span>
                      <input
                        type="time"
                        value={time}
                        onChange={e => handleUpdateTime(idx, e.target.value)}
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
              {TOPICS_DATA.map(topic => {
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
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 border-t border-[var(--border)] bg-[var(--card)] flex items-center justify-between gap-3 shrink-0">
          <div className="text-[11px] text-[var(--ink-muted)] flex items-center gap-1.5">
            <Info className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span>Settings save automatically and persist across app sessions.</span>
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
