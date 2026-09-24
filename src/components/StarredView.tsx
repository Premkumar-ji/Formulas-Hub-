import React, { useState } from 'react';
import { TopicData, FormulaItem } from '../types/formula';
import { MathRenderer, FormattedText } from './MathRenderer';
import { Star, ArrowLeft, Copy, Check, Trash2, ExternalLink } from 'lucide-react';

interface StarredViewProps {
  topics: TopicData[];
  starredFormulaIds: Set<string>;
  onToggleStarFormula: (formulaId: string) => void;
  onClearAllStarred: () => void;
  onBackToIndex: () => void;
  onSelectFormulaDirectly: (topicId: string, formulaId: string) => void;
}

export const StarredView: React.FC<StarredViewProps> = ({
  topics,
  starredFormulaIds,
  onToggleStarFormula,
  onClearAllStarred,
  onBackToIndex,
  onSelectFormulaDirectly,
}) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Collect all starred formulas
  const starredList: Array<{
    topicId: string;
    topicName: string;
    topicIcon: string;
    categoryName: string;
    formula: FormulaItem;
  }> = [];

  for (const t of topics) {
    for (const cat of t.categories) {
      for (const f of cat.formulas) {
        if (starredFormulaIds.has(f.id)) {
          starredList.push({
            topicId: t.id,
            topicName: t.name,
            topicIcon: t.icon,
            categoryName: cat.name,
            formula: f,
          });
        }
      }
    }
  }

  const handleCopy = (formula: FormulaItem) => {
    const text = `${formula.title}:\n${formula.formula}\n\n${formula.explanation}`;
    navigator.clipboard.writeText(text).then(() => {
      setCopiedId(formula.id);
      setTimeout(() => setCopiedId(null), 1500);
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[var(--border)]">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToIndex}
            className="p-2 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--ink)] hover:text-purple-600 transition-colors"
            title="Back to Topics Index"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="font-heading font-extrabold text-2xl sm:text-3xl text-[var(--ink)] flex items-center gap-2">
              <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              <span>Starred Formulas</span>
            </h1>
            <p className="text-xs sm:text-sm text-[var(--ink-muted)]">
              Your personalized list of high-priority formulas for rapid pre-exam revision.
            </p>
          </div>
        </div>

        {starredList.length > 0 && (
          <button
            onClick={onClearAllStarred}
            className="text-xs text-rose-600 hover:text-rose-700 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear All Starred</span>
          </button>
        )}
      </div>

      {/* Formulas List */}
      {starredList.length === 0 ? (
        <div className="text-center py-20 bg-[var(--card)] rounded-3xl border border-[var(--border)] p-8 max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8" />
          </div>
          <h2 className="font-heading font-bold text-lg text-[var(--ink)] mb-2">
            No Starred Formulas Yet
          </h2>
          <p className="text-xs sm:text-sm text-[var(--ink-muted)] mb-6 leading-relaxed">
            Star important formulas while browsing topics to build your custom quick-revision list for exam day!
          </p>
          <button
            onClick={onBackToIndex}
            className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
          >
            Browse Topics Index
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {starredList.map(({ topicId, topicName, topicIcon, categoryName, formula }) => {
            const isCopied = copiedId === formula.id;

            return (
              <div
                key={formula.id}
                className="rounded-2xl p-5 bg-[var(--card)] border border-[var(--border)] shadow-sm hover:border-purple-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Topic badge + Unstar */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <button
                      onClick={() => onSelectFormulaDirectly(topicId, formula.id)}
                      className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1.5"
                      title="Open in topic view"
                    >
                      <span>{topicIcon}</span>
                      <span>{topicName}</span>
                      <span className="text-[var(--ink-muted)] font-normal">· {categoryName}</span>
                      <ExternalLink className="w-3 h-3 opacity-60" />
                    </button>

                    <button
                      onClick={() => onToggleStarFormula(formula.id)}
                      className="p-1 text-amber-400 hover:text-amber-500 rounded"
                      title="Remove from starred"
                    >
                      <Star className="w-4 h-4 fill-amber-400" />
                    </button>
                  </div>

                  <h3 className="font-heading font-bold text-sm sm:text-base text-[var(--ink)] mb-2">
                    {formula.title}
                  </h3>

                  {/* Formula mathematical notation */}
                  <div
                    className="rounded-xl p-3 mb-2.5 overflow-x-auto select-all"
                    style={{
                      backgroundColor: 'var(--math-bg)',
                      border: '1px solid var(--math-border)',
                    }}
                  >
                    <MathRenderer
                      latex={formula.latex}
                      math={formula.formula}
                      displayMode={true}
                    />
                  </div>

                  <div className="text-xs text-[var(--ink-muted)] mb-2 leading-relaxed">
                    <FormattedText text={formula.explanation} />
                  </div>

                  {formula.shortcut && (
                    <div className="mb-2 p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-800 dark:text-amber-300 font-medium">
                      <FormattedText text={formula.shortcut} />
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs mt-2">
                  <span className="text-[10px] text-[var(--ink-muted)]">Saved for revision</span>
                  <button
                    onClick={() => handleCopy(formula)}
                    className="px-2.5 py-1 rounded-md text-xs font-semibold text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 flex items-center gap-1"
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
