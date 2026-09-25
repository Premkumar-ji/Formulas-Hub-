import React, { useState } from 'react';
import { TopicData } from '../types/formula';
import { MathRenderer } from './MathRenderer';
import { FormulaTable } from './FormulaTable';
import { ArrowLeft, Printer, Layers, Filter } from 'lucide-react';

interface CheatSheetModalProps {
  topics: TopicData[];
  onBackToIndex: () => void;
}

export const CheatSheetModal: React.FC<CheatSheetModalProps> = ({
  topics,
  onBackToIndex,
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>('all');
  const [mustKnowOnly, setMustKnowOnly] = useState<boolean>(true);

  const displayTopics = selectedTopicId === 'all'
    ? topics
    : topics.filter(t => t.id === selectedTopicId);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-8 w-full max-w-full min-w-0">
      {/* Top action bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8 pb-4 border-b border-[var(--border)] no-print min-w-0">
        <div className="flex items-center gap-3 min-w-0">
          <button
            onClick={onBackToIndex}
            className="p-2 rounded-xl bg-[var(--card)] border border-[var(--border)] text-[var(--ink)] hover:text-purple-600 transition-colors shrink-0"
            title="Back to Topics Index"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="min-w-0">
            <h1 className="font-heading font-extrabold text-xl sm:text-2xl text-[var(--ink)] flex items-center gap-2 truncate">
              <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 shrink-0" />
              <span>Exam Revision Cheat Sheet</span>
            </h1>
            <p className="text-xs text-[var(--ink-muted)] truncate">
              High-density, printable summary of essential competitive examination formulas.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
          <select
            value={selectedTopicId}
            onChange={(e) => setSelectedTopicId(e.target.value)}
            className="px-2.5 sm:px-3 py-1.5 rounded-xl bg-[var(--card)] border border-[var(--border)] text-xs font-semibold text-[var(--ink)] focus:outline-none flex-1 sm:flex-initial"
          >
            <option value="all">All 18 Topics</option>
            {topics.map(t => (
              <option key={t.id} value={t.id}>{t.icon} {t.name}</option>
            ))}
          </select>

          <label className="flex items-center gap-1.5 text-xs text-[var(--ink)] cursor-pointer select-none">
            <input
              type="checkbox"
              checked={mustKnowOnly}
              onChange={(e) => setMustKnowOnly(e.target.checked)}
              className="rounded text-purple-600 focus:ring-purple-500"
            />
            <span>Must-Know</span>
          </label>

          <button
            onClick={handlePrint}
            className="px-3 sm:px-4 py-1.5 sm:py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold transition-all shadow-md flex items-center gap-1.5 shrink-0"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
        </div>
      </div>

      {/* Cheat Sheet Content */}
      <div className="space-y-6 sm:space-y-8 w-full max-w-full min-w-0">
        {displayTopics.map((topic) => {
          return (
            <div
              key={topic.id}
              className="cat rounded-2xl bg-[var(--card)] border border-[var(--border)] p-4 sm:p-5 shadow-sm break-inside-avoid w-full max-w-full min-w-0"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[var(--border)] min-w-0">
                <h2 className="font-heading font-bold text-sm sm:text-base text-purple-700 dark:text-purple-300 flex items-center gap-2 min-w-0 truncate">
                  <span className="shrink-0">{topic.icon}</span>
                  <span className="truncate">{topic.name}</span>
                </h2>
                <span className="text-[11px] font-medium text-[var(--ink-muted)] shrink-0 ml-2">
                  {topic.categoryGroup}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-full min-w-0">
                {topic.categories.flatMap(cat =>
                  cat.formulas
                    .filter(f => !mustKnowOnly || f.mustKnow)
                    .map(formula => (
                      <div
                        key={formula.id}
                        className="p-3 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-xs flex flex-col justify-between w-full max-w-full min-w-0 overflow-hidden"
                      >
                        <div className="min-w-0">
                          <div className="font-bold text-[var(--ink)] mb-1 flex items-center justify-between gap-1 min-w-0">
                            <span className="truncate break-words">{formula.title}</span>
                            {formula.mustKnow && (
                              <span className="text-[9px] bg-rose-500/10 text-rose-600 font-bold px-1.5 py-0.2 rounded shrink-0">
                                Must
                              </span>
                            )}
                          </div>
                          {formula.table ? (
                            <FormulaTable table={formula.table} compact={true} />
                          ) : (
                            <div className="rounded p-2 border border-purple-500/15 mb-1.5 overflow-x-auto bg-white/60 dark:bg-black/20 w-full max-w-full min-w-0">
                              <MathRenderer
                                latex={formula.latex}
                                math={formula.formula}
                                displayMode={true}
                                className="text-xs sm:text-sm !my-0 min-h-0"
                              />
                            </div>
                          )}
                          <p className="text-[10.5px] text-[var(--ink-muted)] leading-tight break-words">
                            {formula.explanation}
                          </p>
                        </div>
                        {formula.shortcut && (
                          <div className="mt-2 text-[10px] text-amber-700 dark:text-amber-300 bg-amber-500/10 p-1.5 rounded break-words">
                            {formula.shortcut}
                          </div>
                        )}
                      </div>
                    ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
