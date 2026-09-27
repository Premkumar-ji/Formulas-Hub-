import React, { useState, useEffect } from 'react';
import {
  X,
  Sparkles,
  Check,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { SpacedFormulaItem } from '../types/reminder';
import {
  loadReminderSettings,
  loadSpacedRepetitionDb,
  recordFormulaFeedback,
  syncFormulasDatabase,
} from '../utils/spacedRepetition';
import { MathRenderer } from './MathRenderer';
import { fireConfetti } from '../utils/confetti';

interface DailyPracticeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenSettings: () => void;
}

export const DailyPracticeModal: React.FC<DailyPracticeModalProps> = ({
  isOpen,
  onClose,
  onOpenSettings,
}) => {
  const [queue, setQueue] = useState<SpacedFormulaItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const settings = loadReminderSettings();
      const db = syncFormulasDatabase();
      const selectedTopics = new Set(settings.selectedTopicIds);

      const candidates = Object.values(db).filter(f => selectedTopics.has(f.topicId));
      const now = Date.now();

      // Pick top 5 priority formulas:
      // 1. Due for review
      // 2. High mistake count
      // 3. New/unseen formulas
      const due = candidates
        .filter(f => f.timesSeen > 0 && f.nextReviewDue <= now)
        .sort((a, b) => b.wrongCount - a.wrongCount);

      const unseen = candidates
        .filter(f => f.timesSeen === 0)
        .sort((a, b) => (b.mustKnow ? 1 : 0) - (a.mustKnow ? 1 : 0));

      const pool = [...due, ...unseen, ...candidates].slice(0, 5);
      setQueue(pool);
      setCurrentIndex(0);
      setIsRevealed(false);
      setCompletedCount(0);
      setIsFinished(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const currentFormula = queue[currentIndex];

  const handleRate = (feedback: 'easy' | 'hard') => {
    if (currentFormula) {
      recordFormulaFeedback(currentFormula.id, feedback);
    }

    const nextIdx = currentIndex + 1;
    setCompletedCount(prev => prev + 1);

    if (nextIdx < queue.length) {
      setCurrentIndex(nextIdx);
      setIsRevealed(false);
    } else {
      setIsFinished(true);
      fireConfetti();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Daily Formula Micro-Practice"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={e => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-[var(--card)] border border-[var(--border)] rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden relative text-[var(--ink)]">
        {/* Header */}
        <div className="p-4 border-b border-[var(--border)] flex items-center justify-between bg-gradient-to-r from-amber-500/10 via-purple-500/5 to-amber-500/10">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-amber-500 text-white shadow-xs">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-heading font-bold text-sm text-[var(--ink)]">
                Daily Spaced Revision Queue
              </h3>
              <span className="text-[11px] text-[var(--ink-muted)]">
                {!isFinished ? `Card ${currentIndex + 1} of ${queue.length}` : 'Completed!'}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/5 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        {!isFinished && currentFormula ? (
          <div className="p-5 sm:p-6 space-y-4">
            {/* Topic pill */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-500/20">
                <span>{currentFormula.topicIcon}</span>
                <span>{currentFormula.topicName}</span>
              </span>

              {currentFormula.mustKnow && (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-rose-600 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/20">
                  <Flame className="w-3 h-3 fill-rose-500" />
                  Must Know
                </span>
              )}
            </div>

            {/* Formula Title */}
            <h4 className="font-heading font-extrabold text-sm sm:text-base text-[var(--ink)]">
              {currentFormula.title}
            </h4>

            {/* Math Formula Card */}
            <div className="p-4 rounded-2xl bg-[var(--math-bg)] border border-[var(--math-border)] min-h-[5.5rem] flex items-center justify-center text-center">
              {currentFormula.latex ? (
                <MathRenderer
                  latex={currentFormula.latex}
                  math={currentFormula.formula}
                  displayMode={true}
                  className="font-bold text-base sm:text-lg text-purple-950 dark:text-purple-100"
                />
              ) : (
                <span className="font-mono font-bold text-base sm:text-lg text-purple-950 dark:text-purple-100">
                  {currentFormula.formula}
                </span>
              )}
            </div>

            {/* Reveal Answer / Meaning Toggle */}
            {!isRevealed ? (
              <button
                type="button"
                onClick={() => setIsRevealed(true)}
                className="w-full py-2.5 px-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/15 border border-purple-500/20 text-purple-700 dark:text-purple-300 font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Reveal Meaning & Usage</span>
              </button>
            ) : (
              <div className="p-3.5 rounded-xl bg-slate-500/5 border border-[var(--border)] text-xs text-[var(--ink-muted)] space-y-1 animate-in fade-in">
                <span className="font-bold text-purple-700 dark:text-purple-300 block text-[11px]">
                  💡 Quick Meaning & Use:
                </span>
                <p className="leading-relaxed">{currentFormula.meaning}</p>
              </div>
            )}

            {/* Rating Buttons */}
            <div className="pt-2 grid grid-cols-2 gap-3">
              <button
                onClick={() => handleRate('hard')}
                className="py-2.5 px-3 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-700 dark:text-rose-300 font-bold text-xs transition-colors flex items-center justify-center gap-1.5 border border-rose-500/20"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Forgot / Need Review</span>
              </button>
              <button
                onClick={() => handleRate('easy')}
                className="py-2.5 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs transition-colors shadow-sm flex items-center justify-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Remembered Easily</span>
              </button>
            </div>
          </div>
        ) : (
          /* Finished State */
          <div className="p-6 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h4 className="font-heading font-extrabold text-lg text-[var(--ink)]">
                Daily Revision Done!
              </h4>
              <p className="text-xs text-[var(--ink-muted)] mt-1">
                You reviewed {completedCount} formulas. Intervals have been automatically adjusted for spaced repetition.
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-colors"
              >
                Done for Now
              </button>
              <button
                onClick={onOpenSettings}
                className="px-4 py-2 rounded-xl bg-[var(--bg)] hover:bg-black/5 dark:hover:bg-white/5 text-[var(--ink)] font-semibold text-xs border border-[var(--border)] transition-colors"
              >
                Reminder Settings
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
