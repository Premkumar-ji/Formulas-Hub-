import React, { useState, useMemo } from 'react';
import { TopicData, CategoryGroup } from '../types/formula';
import { CATEGORY_GROUPS } from '../data/topics';
import { MathRenderer } from './MathRenderer';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Circle, 
  Star, 
  BookOpen, 
  Flame, 
  GraduationCap,
  Layers,
  ChevronRight,
  WifiOff
} from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface IndexViewProps {
  topics: TopicData[];
  onSelectTopic: (topicId: string) => void;
  onOpenQuickRevision: () => void;
  onOpenFavorites: () => void;
  revisedTopicIds: Set<string>;
  onToggleTopicRevised: (topicId: string, e: React.MouseEvent) => void;
  starredFormulaIds: Set<string>;
  onSelectFormulaDirectly: (topicId: string, formulaId: string) => void;
}

export const IndexView: React.FC<IndexViewProps> = ({
  topics,
  onSelectTopic,
  onOpenQuickRevision,
  onOpenFavorites,
  revisedTopicIds,
  onToggleTopicRevised,
  starredFormulaIds,
  onSelectFormulaDirectly,
}) => {
  const [selectedGroup, setSelectedGroup] = useState<CategoryGroup>('All');
  const [globalSearch, setGlobalSearch] = useState('');

  // Total formulas calculation
  const totalFormulasCount = useMemo(() => {
    return topics.reduce((acc, topic) => {
      const topicFormulas = topic.categories.reduce((cAcc, cat) => cAcc + cat.formulas.length, 0);
      return acc + topicFormulas;
    }, 0);
  }, [topics]);

  // Global search matches
  const searchResults = useMemo(() => {
    const q = globalSearch.trim().toLowerCase();
    if (!q) return [];

    const results: Array<{
      topicId: string;
      topicName: string;
      topicIcon: string;
      categoryName: string;
      formulaId: string;
      formulaTitle: string;
      formulaText: string;
      latex?: string;
      mustKnow?: boolean;
      shortcut?: string;
    }> = [];

    for (const topic of topics) {
      for (const cat of topic.categories) {
        for (const f of cat.formulas) {
          if (
            f.title.toLowerCase().includes(q) ||
            f.formula.toLowerCase().includes(q) ||
            f.explanation.toLowerCase().includes(q) ||
            (f.latex && f.latex.toLowerCase().includes(q)) ||
            (f.shortcut && f.shortcut.toLowerCase().includes(q)) ||
            (f.remember && f.remember.toLowerCase().includes(q))
          ) {
            results.push({
              topicId: topic.id,
              topicName: topic.name,
              topicIcon: topic.icon,
              categoryName: cat.name,
              formulaId: f.id,
              formulaTitle: f.title,
              formulaText: f.formula,
              latex: f.latex,
              mustKnow: f.mustKnow,
              shortcut: f.shortcut,
            });
            if (results.length >= 12) break; // Limit quick search results for performance
          }
        }
        if (results.length >= 12) break;
      }
      if (results.length >= 12) break;
    }

    return results;
  }, [globalSearch, topics]);

  // Filter topics by category group
  const filteredTopics = useMemo(() => {
    if (selectedGroup === 'All') return topics;
    return topics.filter(t => t.categoryGroup === selectedGroup);
  }, [topics, selectedGroup]);

  const revisionPercent = topics.length > 0 ? Math.round((revisedTopicIds.size / topics.length) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-6 py-6 sm:py-8 w-full max-w-full overflow-x-hidden min-w-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-violet-900 via-indigo-900 to-purple-950 text-white p-4 sm:p-10 shadow-xl border border-violet-700/30 mb-8 sm:mb-10 w-full max-w-full min-w-0">
        <div className="absolute -right-16 -top-16 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl min-w-0">
          <div className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[11px] sm:text-xs font-semibold text-purple-200 mb-4 max-w-full">
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 shrink-0" />
            <span>NIMCET · MCA Entrance · JEE Prep</span>
            <span className="opacity-40 hidden min-[400px]:inline">·</span>
            <span className="text-emerald-300 inline-flex items-center gap-1 font-medium">
              <WifiOff className="w-3 h-3 text-emerald-400" />
              <span>100% Offline Ready</span>
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight leading-tight mb-3 sm:mb-4">
            Visual Math Revision <br />
            <span className="bg-gradient-to-r from-amber-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Built for Rapid Recall.
            </span>
          </h1>

          <p className="text-purple-100/90 text-xs sm:text-base leading-relaxed mb-6 max-w-2xl">
            Designed for 10–20 minute rapid revision sessions. All formulas organized topic-wise with standard mathematical notation, exam shortcuts, common traps, and interactive flashcard drills.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 pt-2 border-t border-white/15 w-full min-w-0">
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-w-0">
              <span className="text-[11px] sm:text-xs text-purple-300 block font-medium truncate">Total Topics</span>
              <span className="text-lg sm:text-2xl font-bold font-mono text-white">{topics.length}</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-w-0">
              <span className="text-[11px] sm:text-xs text-purple-300 block font-medium truncate">Formulas</span>
              <span className="text-lg sm:text-2xl font-bold font-mono text-cyan-300">~{totalFormulasCount}+</span>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-w-0">
              <span className="text-[11px] sm:text-xs text-purple-300 block font-medium truncate">Starred</span>
              <button 
                onClick={onOpenFavorites}
                className="text-lg sm:text-2xl font-bold font-mono text-amber-300 hover:underline flex items-center gap-1"
              >
                <span>{starredFormulaIds.size}</span>
                <span className="text-[10px] sm:text-xs font-normal text-amber-200/80">view →</span>
              </button>
            </div>
            <div className="p-2 sm:p-2.5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 min-w-0">
              <span className="text-[11px] sm:text-xs text-purple-300 block font-medium truncate">Mastery</span>
              <span className="text-lg sm:text-2xl font-bold font-mono text-emerald-300">{revisionPercent}%</span>
            </div>
          </div>
        </div>

        {/* Global Search Bar */}
        <div className="relative mt-6 sm:mt-8 max-w-2xl min-w-0">
          <div className="relative flex items-center">
            <Search className="absolute left-3.5 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 text-purple-300 pointer-events-none" />
            <input
              type="text"
              value={globalSearch}
              onChange={(e) => setGlobalSearch(e.target.value)}
              placeholder="Search across all 18 topics (e.g. Bayes, Matrix, Vieta)..."
              className="w-full pl-10 sm:pl-12 pr-10 py-3 sm:py-3.5 rounded-2xl bg-white/15 border border-white/20 text-white placeholder-purple-200/70 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:bg-white/20 transition-all shadow-inner"
            />
            {globalSearch && (
              <button
                onClick={() => setGlobalSearch('')}
                className="absolute right-3.5 text-xs text-purple-200 hover:text-white bg-white/10 px-2 py-1 rounded-md"
              >
                Clear
              </button>
            )}
          </div>

          {/* Instant Search Results Dropdown */}
          {globalSearch.trim() && (
            <div className="absolute left-0 right-0 top-full mt-2 bg-[var(--card)] text-[var(--ink)] rounded-2xl shadow-2xl border border-[var(--border)] z-30 max-h-96 overflow-y-auto p-2 max-w-full">
              <div className="px-3 py-2 text-xs font-semibold text-[var(--ink-muted)] flex justify-between items-center border-b border-[var(--border)] mb-1">
                <span>Matching Formulas ({searchResults.length})</span>
                <span className="text-[10px]">Click formula to open</span>
              </div>
              {searchResults.length === 0 ? (
                <div className="p-6 text-center text-sm text-[var(--ink-muted)]">
                  No formula found matching "{globalSearch}". Try another keyword like "sine", "derivative", "matrix", or "integral".
                </div>
              ) : (
                searchResults.map((res) => (
                  <button
                    key={`${res.topicId}-${res.formulaId}`}
                    onClick={() => {
                      onSelectFormulaDirectly(res.topicId, res.formulaId);
                      setGlobalSearch('');
                    }}
                    className="w-full text-left p-3 hover:bg-[var(--card-hover)] rounded-xl transition-colors flex items-start justify-between gap-3 group border-b border-[var(--border)]/40 last:border-0 min-w-0"
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-sm shrink-0">{res.topicIcon}</span>
                        <span className="text-xs font-semibold text-purple-600 dark:text-purple-400">{res.topicName}</span>
                        <span className="text-xs text-[var(--ink-muted)]">· {res.categoryName}</span>
                        {res.mustKnow && (
                          <span className="bg-rose-500/15 text-rose-600 dark:text-rose-400 text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0">
                            Must Know
                          </span>
                        )}
                      </div>
                      <div className="font-semibold text-sm text-[var(--ink)] group-hover:text-purple-600 transition-colors break-words">
                        {res.formulaTitle}
                      </div>
                      <div className="mt-1 max-w-full overflow-x-auto text-[var(--ink-muted)]">
                        <MathRenderer
                          latex={res.latex}
                          math={res.formulaText}
                          displayMode={false}
                          className="text-xs"
                        />
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-purple-600 transition-transform group-hover:translate-x-0.5 shrink-0 mt-2" />
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        {/* Quick Revision Flashcard Prompt Banner & Offline Install Button */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs text-purple-200">
            <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
            <span>Have 5 minutes? Test your active memory with random flashcard drills!</span>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
            <PWAInstallButton variant="hero" />
            <button
              onClick={onOpenQuickRevision}
              className="w-full sm:w-auto px-4 py-2.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-purple-950 shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5 shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Launch Quick Flashcards</span>
            </button>
          </div>
        </div>
      </section>

      {/* Category Group Filter Bar */}
      <div className="mb-6 sm:mb-8 w-full max-w-full min-w-0">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-heading text-base sm:text-lg font-bold text-[var(--ink)] flex items-center gap-2">
            <span>Explore Mathematical Topics</span>
            <span className="text-xs font-normal text-[var(--ink-muted)]">({filteredTopics.length})</span>
          </h2>
          {revisedTopicIds.size > 0 && (
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1 shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {revisedTopicIds.size} done
            </span>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar w-full max-w-full min-w-0">
          {CATEGORY_GROUPS.map((group) => {
            const isActive = selectedGroup === group;
            return (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`px-3 sm:px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  isActive
                    ? 'bg-purple-600 text-white shadow-sm ring-2 ring-purple-600/30'
                    : 'bg-[var(--card)] text-[var(--ink-muted)] hover:text-[var(--ink)] border border-[var(--border)] hover:border-purple-300'
                }`}
              >
                {group}
              </button>
            );
          })}
        </div>
      </div>

      {/* Topic Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 w-full max-w-full min-w-0">
        {filteredTopics.map((topic) => {
          const isRevised = revisedTopicIds.has(topic.id);
          const formulaCount = topic.categories.reduce((acc, cat) => acc + cat.formulas.length, 0);
          const mustKnowCount = topic.categories.reduce(
            (acc, cat) => acc + cat.formulas.filter(f => f.mustKnow).length,
            0
          );

          return (
            <div
              key={topic.id}
              onClick={() => onSelectTopic(topic.id)}
              className={`group relative rounded-2xl bg-[var(--card)] border transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between w-full min-w-0 max-w-full ${
                isRevised
                  ? 'border-emerald-500/40 shadow-sm hover:shadow-md'
                  : 'border-[var(--border)] hover:border-purple-400/60 hover:shadow-lg'
              }`}
              style={{
                boxShadow: 'var(--shadow)',
              }}
            >
              {/* Top Accent Gradient Bar */}
              <div className={`h-2 w-full bg-gradient-to-r ${topic.gradient}`} />

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between min-w-0">
                <div className="min-w-0">
                  {/* Header Row: Icon + Name + Revision status checkbox */}
                  <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2 min-w-0">
                    <div className="flex items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-purple-500/10 dark:bg-purple-500/20 flex items-center justify-center text-xl sm:text-2xl shrink-0 group-hover:scale-110 transition-transform">
                        {topic.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-heading font-bold text-sm sm:text-base text-[var(--ink)] group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors truncate">
                          {topic.name}
                        </h3>
                        <span className="text-[11px] font-medium text-[var(--ink-muted)] block truncate">
                          {topic.categoryGroup}
                        </span>
                      </div>
                    </div>

                    {/* Revision mark toggle */}
                    <button
                      onClick={(e) => onToggleTopicRevised(topic.id, e)}
                      className={`p-1.5 rounded-lg text-xs transition-colors shrink-0 ${
                        isRevised
                          ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/40'
                          : 'text-[var(--ink-muted)] hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                      title={isRevised ? 'Marked as revised' : 'Mark as revised'}
                    >
                      {isRevised ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-100 dark:fill-emerald-950" />
                      ) : (
                        <Circle className="w-5 h-5 opacity-40 hover:opacity-100" />
                      )}
                    </button>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[var(--ink-muted)] line-clamp-2 leading-relaxed mb-4 break-words">
                    {topic.description}
                  </p>
                </div>

                {/* Card Meta & Action */}
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 text-[11px]">
                    <span className="bg-purple-100 dark:bg-purple-950/50 text-purple-700 dark:text-purple-300 font-semibold px-2 py-0.5 rounded-md shrink-0">
                      {formulaCount} Formulas
                    </span>
                    {mustKnowCount > 0 && (
                      <span className="bg-rose-100 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 shrink-0">
                        <Flame className="w-3 h-3 text-rose-500" />
                        {mustKnowCount} Must-Know
                      </span>
                    )}
                    <span className="text-[10px] text-[var(--ink-muted)] ml-auto font-medium truncate">
                      {topic.examWeightage}
                    </span>
                  </div>

                  <div className="pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-bold text-purple-600 dark:text-purple-400 group-hover:text-purple-700">
                    <span>Explore Topic Formulas</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
