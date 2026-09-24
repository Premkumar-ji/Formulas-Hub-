import React, { useState, useMemo } from 'react';
import { TopicData, FormulaItem } from '../types/formula';
import { MathRenderer, FormattedText } from './MathRenderer';
import { 
  X, 
  Sparkles, 
  RotateCw, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Flame, 
  Eye, 
  EyeOff,
  Shuffle,
  CheckCircle,
  HelpCircle
} from 'lucide-react';
import { fireConfetti } from '../utils/confetti';

interface FlashcardModalProps {
  isOpen: boolean;
  onClose: () => void;
  topics: TopicData[];
  starredFormulaIds: Set<string>;
  onToggleStarFormula: (formulaId: string) => void;
}

export const FlashcardModal: React.FC<FlashcardModalProps> = ({
  isOpen,
  onClose,
  topics,
  starredFormulaIds,
  onToggleStarFormula,
}) => {
  const [selectedTopicFilter, setSelectedTopicFilter] = useState<string>('all');
  const [onlyMustKnow, setOnlyMustKnow] = useState<boolean>(true);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isRevealed, setIsRevealed] = useState<boolean>(false);

  // Compile flashcards pool
  const flashcards = useMemo(() => {
    const list: Array<{
      topicId: string;
      topicName: string;
      topicIcon: string;
      categoryName: string;
      formula: FormulaItem;
    }> = [];

    for (const t of topics) {
      if (selectedTopicFilter !== 'all' && t.id !== selectedTopicFilter) continue;

      for (const cat of t.categories) {
        for (const f of cat.formulas) {
          if (onlyMustKnow && !f.mustKnow) continue;
          list.push({
            topicId: t.id,
            topicName: t.name,
            topicIcon: t.icon,
            categoryName: cat.name,
            formula: f,
          });
        }
      }
    }

    return list;
  }, [topics, selectedTopicFilter, onlyMustKnow]);

  if (!isOpen) return null;

  const currentCard = flashcards[currentIndex] || flashcards[0];
  const isStarred = currentCard ? starredFormulaIds.has(currentCard.formula.id) : false;

  const handleNext = () => {
    setIsRevealed(false);
    setCurrentIndex(prev => (prev + 1) % (flashcards.length || 1));
  };

  const handlePrev = () => {
    setIsRevealed(false);
    setCurrentIndex(prev => (prev - 1 + flashcards.length) % (flashcards.length || 1));
  };

  const handleShuffle = () => {
    setIsRevealed(false);
    const randomIndex = Math.floor(Math.random() * (flashcards.length || 1));
    setCurrentIndex(randomIndex);
  };

  const handleMarkMastered = () => {
    fireConfetti();
    handleNext();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-[var(--card)] border border-[var(--border)] rounded-3xl shadow-2xl overflow-hidden flex flex-col my-auto transition-all animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-300" />
            <h2 className="font-heading font-bold text-base sm:text-lg">
              Rapid Flashcards Recall Drill
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Filter Controls */}
        <div className="p-4 border-b border-[var(--border)] bg-[var(--bg)] flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 flex-wrap">
            <label className="text-[var(--ink-muted)] font-medium">Filter Topic:</label>
            <select
              value={selectedTopicFilter}
              onChange={(e) => {
                setSelectedTopicFilter(e.target.value);
                setCurrentIndex(0);
                setIsRevealed(false);
              }}
              className="px-2.5 py-1 rounded-lg bg-[var(--card)] border border-[var(--border)] text-[var(--ink)] font-semibold text-xs focus:outline-none"
            >
              <option value="all">All Topics (Comprehensive)</option>
              {topics.map(t => (
                <option key={t.id} value={t.id}>
                  {t.icon} {t.name}
                </option>
              ))}
            </select>

            <button
              onClick={() => {
                setOnlyMustKnow(!onlyMustKnow);
                setCurrentIndex(0);
                setIsRevealed(false);
              }}
              className={`px-2.5 py-1 rounded-lg font-semibold flex items-center gap-1 transition-colors ${
                onlyMustKnow
                  ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30'
                  : 'bg-[var(--card)] text-[var(--ink-muted)] border border-[var(--border)]'
              }`}
            >
              <Flame className="w-3 h-3 text-rose-500" />
              <span>Must-Know Only</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[var(--ink-muted)]">
              {flashcards.length > 0 ? currentIndex + 1 : 0} / {flashcards.length}
            </span>
            <button
              onClick={handleShuffle}
              className="p-1.5 rounded-lg bg-[var(--card)] hover:bg-purple-50 text-[var(--ink-muted)] hover:text-purple-600 border border-[var(--border)]"
              title="Shuffle cards"
            >
              <Shuffle className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-8 flex-1 flex flex-col justify-center min-h-[300px]">
          {flashcards.length === 0 ? (
            <div className="text-center py-12 text-[var(--ink-muted)] text-sm">
              No flashcards match this filter. Try selecting "All Topics" or turning off "Must-Know Only".
            </div>
          ) : (
            <div className="w-full">
              {/* Context Tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                  <span>{currentCard.topicIcon}</span>
                  <span>{currentCard.topicName}</span>
                  <span className="text-[var(--ink-muted)] font-normal">· {currentCard.categoryName}</span>
                </span>

                <button
                  onClick={() => onToggleStarFormula(currentCard.formula.id)}
                  className={`p-1.5 rounded-lg transition-colors ${
                    isStarred ? 'text-amber-400' : 'text-[var(--ink-muted)] hover:text-amber-400'
                  }`}
                  title={isStarred ? 'Starred' : 'Star this formula'}
                >
                  <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400' : ''}`} />
                </button>
              </div>

              {/* Prompt Question */}
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-wider font-bold text-[var(--ink-muted)] block mb-1">
                  Recall this formula:
                </span>
                <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--ink)] leading-snug">
                  {currentCard.formula.title}
                </h3>
              </div>

              {/* Formula Reveal Area */}
              {isRevealed ? (
                <div className="space-y-4 animate-in fade-in duration-200">
                  <div
                    className="p-4 rounded-2xl overflow-x-auto select-all"
                    style={{
                      backgroundColor: 'var(--math-bg)',
                      border: '1px solid var(--math-border)',
                    }}
                  >
                    <MathRenderer
                      latex={currentCard.formula.latex}
                      math={currentCard.formula.formula}
                      displayMode={true}
                    />
                  </div>

                  <div className="text-xs sm:text-sm text-[var(--ink-muted)] leading-relaxed">
                    <FormattedText text={currentCard.formula.explanation} />
                  </div>

                  {currentCard.formula.shortcut && (
                    <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 font-medium">
                      <FormattedText text={currentCard.formula.shortcut} />
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsRevealed(true)}
                  className="w-full py-12 rounded-2xl border-2 border-dashed border-purple-400/40 hover:border-purple-600 bg-purple-500/5 hover:bg-purple-500/10 transition-all flex flex-col items-center justify-center gap-2 group"
                >
                  <Eye className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
                  <span className="font-heading font-bold text-sm text-purple-700 dark:text-purple-300">
                    Click to Flip & Reveal Formula
                  </span>
                  <span className="text-[11px] text-[var(--ink-muted)]">
                    Test your memory before revealing
                  </span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[var(--border)] bg-[var(--bg)] flex items-center justify-between gap-3">
          <button
            onClick={handlePrev}
            disabled={flashcards.length <= 1}
            className="px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--card)] border border-[var(--border)] text-[var(--ink)] hover:bg-purple-50 transition-colors flex items-center gap-1 disabled:opacity-40"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <div className="flex items-center gap-2">
            {isRevealed && (
              <button
                onClick={handleMarkMastered}
                className="px-3 sm:px-4 py-2 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-white shadow-sm transition-all flex items-center gap-1 active:scale-95"
              >
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Knew It!</span>
              </button>
            )}

            <button
              onClick={() => setIsRevealed(!isRevealed)}
              className="px-3 sm:px-4 py-2 rounded-xl text-xs font-semibold bg-[var(--card)] border border-[var(--border)] text-purple-600 dark:text-purple-300 hover:bg-purple-50 transition-colors"
            >
              {isRevealed ? 'Hide Formula' : 'Reveal'}
            </button>
          </div>

          <button
            onClick={handleNext}
            disabled={flashcards.length <= 1}
            className="px-3 sm:px-4 py-2 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white shadow-sm transition-all flex items-center gap-1 active:scale-95 disabled:opacity-40"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
