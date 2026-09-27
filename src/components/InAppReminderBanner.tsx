import React, { useEffect, useState } from 'react';
import { Bell, Check, X, Sparkles, BookOpen } from 'lucide-react';
import { ReminderNotificationData } from '../types/reminder';
import { recordFormulaFeedback } from '../utils/spacedRepetition';
import { MathRenderer } from './MathRenderer';

export const InAppReminderBanner: React.FC = () => {
  const [notification, setNotification] = useState<{
    reminder: ReminderNotificationData;
    isTest: boolean;
    title: string;
    body: string;
  } | null>(null);

  const [ratedFormulaIds, setRatedFormulaIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleNotification = (e: Event) => {
      const customEvent = e as CustomEvent<{
        reminder: ReminderNotificationData;
        isTest: boolean;
        title: string;
        body: string;
      }>;
      setNotification(customEvent.detail);
      setRatedFormulaIds(new Set());
    };

    window.addEventListener('formula-in-app-notification', handleNotification);
    return () => {
      window.removeEventListener('formula-in-app-notification', handleNotification);
    };
  }, []);

  if (!notification) return null;

  const { reminder, isTest } = notification;

  const handleRate = (formulaId: string, feedback: 'easy' | 'hard') => {
    recordFormulaFeedback(formulaId, feedback);
    setRatedFormulaIds(prev => new Set(prev).add(formulaId));

    // If all rated, dismiss after 1.5s
    if (ratedFormulaIds.size + 1 >= reminder.formulas.length) {
      setTimeout(() => {
        setNotification(null);
      }, 1200);
    }
  };

  return (
    <aside
      aria-label="Daily Formula Reminder"
      className="fixed bottom-4 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-in slide-in-from-bottom-5 duration-300 pointer-events-auto"
    >
      <div className="bg-[var(--card)]/95 backdrop-blur-md border-2 border-purple-500 shadow-2xl rounded-2xl p-4 text-[var(--ink)] overflow-hidden relative">
        {/* Glow accent */}
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-purple-600 text-white shadow-sm flex items-center justify-center">
              <Bell className="w-4 h-4 animate-bounce" />
            </span>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-heading font-bold text-xs sm:text-sm text-purple-700 dark:text-purple-300">
                  {reminder.topicName}
                </span>
                {isTest && (
                  <span className="bg-amber-500/20 text-amber-700 dark:text-amber-300 text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-amber-500/30">
                    Test
                  </span>
                )}
              </div>
              <span className="text-[10px] text-[var(--ink-muted)] block font-medium">
                Daily Formula Reminder • Spaced Repetition
              </span>
            </div>
          </div>

          <button
            onClick={() => setNotification(null)}
            className="p-1 rounded-lg text-[var(--ink-muted)] hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            title="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Formulas list */}
        <div className="space-y-3 my-2">
          {reminder.formulas.map(f => {
            const isRated = ratedFormulaIds.has(f.id);

            return (
              <div
                key={f.id}
                className="bg-purple-500/5 dark:bg-purple-950/20 p-3 rounded-xl border border-purple-500/20"
              >
                <div className="flex items-center justify-between text-[11px] font-bold text-purple-800 dark:text-purple-300 mb-1">
                  <span>{f.title}</span>
                  {f.isNew && (
                    <span className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[9px] px-1.5 py-0.5 rounded-full font-bold">
                      New Formula
                    </span>
                  )}
                </div>

                {/* Formula rendering */}
                <div className="my-1.5 font-rounded text-sm font-semibold select-all text-left">
                  {f.latex ? (
                    <MathRenderer latex={f.latex} math={f.formula} displayMode={false} className="text-left font-bold text-sm sm:text-base text-purple-900 dark:text-purple-100" />
                  ) : (
                    <span className="text-sm font-bold text-purple-950 dark:text-purple-100 font-mono">
                      {f.formula}
                    </span>
                  )}
                </div>

                {/* Short meaning */}
                {f.meaning && (
                  <p className="text-[11px] text-[var(--ink-muted)] leading-snug flex items-center gap-1 mt-1">
                    <BookOpen className="w-3 h-3 text-purple-500 shrink-0" />
                    <span>{f.meaning}</span>
                  </p>
                )}

                {/* Quick Rating / Spaced repetition feedback */}
                <div className="mt-2.5 pt-2 border-t border-purple-500/15 flex items-center justify-between">
                  <span className="text-[10px] text-[var(--ink-muted)] font-medium">
                    {isRated ? '✓ Progress recorded!' : 'Did you remember this?'}
                  </span>

                  {!isRated ? (
                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleRate(f.id, 'hard')}
                        className="px-2 py-1 rounded-md text-[10px] font-bold bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 dark:text-rose-300 transition-colors"
                        title="Mark as hard - repeats sooner"
                      >
                        Needs Review
                      </button>
                      <button
                        onClick={() => handleRate(f.id, 'easy')}
                        className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow-xs transition-colors flex items-center gap-1"
                        title="Mark as remembered - advances interval"
                      >
                        <Check className="w-3 h-3" />
                        Got It
                      </button>
                    </div>
                  ) : (
                    <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Updated
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-between text-[10px] text-[var(--ink-muted)] mt-1">
          <span>Click outside or rate to dismiss</span>
          <button
            onClick={() => setNotification(null)}
            className="hover:underline font-semibold text-purple-600 dark:text-purple-400"
          >
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};
