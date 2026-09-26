import React, { useState, useMemo, useEffect, useRef } from 'react';
import { TopicData, FormulaItem } from '../types/formula';
import { MathRenderer, FormattedText } from './MathRenderer';
import { FormulaTable } from './FormulaTable';
import { 
  ArrowLeft, 
  ArrowRight, 
  Search, 
  Copy, 
  Check, 
  Star, 
  Flame, 
  AlertTriangle, 
  Lightbulb, 
  CheckCircle2, 
  Circle, 
  ChevronDown, 
  ChevronUp, 
  SlidersHorizontal,
  Share2,
  Sparkles,
  BookOpen,
  Type
} from 'lucide-react';
import { fireConfetti } from '../utils/confetti';

interface TopicViewProps {
  topic: TopicData;
  allTopics: TopicData[];
  onBackToIndex: () => void;
  onSelectTopic: (topicId: string) => void;
  isRevised: boolean;
  onToggleRevised: (topicId: string) => void;
  starredFormulaIds: Set<string>;
  onToggleStarFormula: (formulaId: string) => void;
  targetFormulaId?: string;
  onOpenQuickRevision: () => void;
  onOpenFontSettings?: () => void;
}

type FilterMode = 'all' | 'must-know' | 'shortcuts' | 'mistakes' | 'starred';

export const TopicView: React.FC<TopicViewProps> = ({
  topic,
  allTopics,
  onBackToIndex,
  onSelectTopic,
  isRevised,
  onToggleRevised,
  starredFormulaIds,
  onToggleStarFormula,
  targetFormulaId,
  onOpenQuickRevision,
  onOpenFontSettings,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<FilterMode>('all');
  const [collapsedCategories, setCollapsedCategories] = useState<Set<string>>(new Set());
  const [hiddenDefinitions, setHiddenDefinitions] = useState<Set<string>>(new Set());
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [showTopicSwitcher, setShowTopicSwitcher] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const toggleDefinition = (formulaId: string) => {
    setHiddenDefinitions(prev => {
      const next = new Set(prev);
      if (next.has(formulaId)) next.delete(formulaId);
      else next.add(formulaId);
      return next;
    });
  };

  const toggleAllDefinitions = () => {
    const allFormulaIds = topic.categories.flatMap(c => c.formulas.map(f => f.id));
    if (hiddenDefinitions.size === allFormulaIds.length) {
      setHiddenDefinitions(new Set());
    } else {
      setHiddenDefinitions(new Set(allFormulaIds));
    }
  };

  const currentIndex = allTopics.findIndex(t => t.id === topic.id);
  const prevTopic = currentIndex > 0 ? allTopics[currentIndex - 1] : null;
  const nextTopic = currentIndex < allTopics.length - 1 ? allTopics[currentIndex + 1] : null;

  // Track scroll position for floating action button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll to target formula if coming from search
  useEffect(() => {
    if (targetFormulaId) {
      setTimeout(() => {
        const el = document.getElementById(`formula-${targetFormulaId}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.classList.add('ring-4', 'ring-amber-400');
          setTimeout(() => el.classList.remove('ring-4', 'ring-amber-400'), 2500);
        }
      }, 150);
    }
  }, [targetFormulaId]);

  // Reset search when topic changes
  useEffect(() => {
    setSearchQuery('');
    setFilterMode('all');
    setCollapsedCategories(new Set());
    setHiddenDefinitions(new Set());
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [topic.id]);

  const toggleCategory = (catId: string) => {
    setCollapsedCategories(prev => {
      const next = new Set(prev);
      if (next.has(catId)) next.delete(catId);
      else next.add(catId);
      return next;
    });
  };

  const expandAll = () => setCollapsedCategories(new Set());
  const collapseAll = () => {
    const all = new Set(topic.categories.map(c => c.id));
    setCollapsedCategories(all);
  };

  const copyFormula = (formula: FormulaItem) => {
    let copyText = '';
    if (formula.table) {
      const rows = formula.table.rows.map(r => `• ${r.feature}: ${r.value}`).join('\n');
      copyText = `${formula.title}:\n${rows}\n\n${formula.explanation}`;
    } else {
      copyText = `${formula.title}:\n${formula.formula}\n\n${formula.explanation}`;
    }
    navigator.clipboard.writeText(copyText).then(() => {
      setCopiedId(formula.id);
      setTimeout(() => setCopiedId(null), 1500);
    });
  };

  const handleToggleRevised = () => {
    if (!isRevised) {
      fireConfetti();
    }
    onToggleRevised(topic.id);
  };

  // Filter formulas
  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return topic.categories
      .map(cat => {
        const matchingFormulas = cat.formulas.filter(f => {
          // 1. Filter by mode
          if (filterMode === 'must-know' && !f.mustKnow) return false;
          if (filterMode === 'shortcuts' && !f.shortcut) return false;
          if (filterMode === 'mistakes' && !f.commonMistake) return false;
          if (filterMode === 'starred' && !starredFormulaIds.has(f.id)) return false;

          // 2. Filter by search query
          if (!q) return true;
          return (
            f.title.toLowerCase().includes(q) ||
            f.formula.toLowerCase().includes(q) ||
            f.explanation.toLowerCase().includes(q) ||
            (f.shortcut && f.shortcut.toLowerCase().includes(q)) ||
            (f.remember && f.remember.toLowerCase().includes(q)) ||
            (f.commonMistake && f.commonMistake.toLowerCase().includes(q))
          );
        });

        return {
          ...cat,
          formulas: matchingFormulas,
        };
      })
      .filter(cat => cat.formulas.length > 0 || !searchQuery);
  }, [topic.categories, searchQuery, filterMode, starredFormulaIds]);

  const totalFormulasInTopic = topic.categories.reduce((acc, c) => acc + c.formulas.length, 0);
  const visibleFormulasCount = filteredCategories.reduce((acc, c) => acc + c.formulas.length, 0);

  return (
    <div className="min-h-screen pb-20 w-full max-w-full overflow-x-hidden">
      {/* Sticky Topic Sub-Header */}
      <section className="sticky top-14 sm:top-16 z-30 bg-[var(--card)]/95 backdrop-blur-md border-b border-[var(--border)] shadow-sm transition-colors w-full max-w-full">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-2 sm:gap-3 w-full max-w-full">
          {/* Left: Back button + Title */}
          <div className="flex items-center gap-2 min-w-0 flex-1 sm:flex-initial">
            <button
              onClick={onBackToIndex}
              className="inline-flex items-center gap-1 text-xs font-bold px-2 sm:px-2.5 py-1.5 rounded-lg bg-[var(--bg)] hover:bg-purple-100 dark:hover:bg-purple-950/60 text-purple-700 dark:text-purple-300 transition-colors border border-[var(--border)] shrink-0"
              title="Return to Index"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Index</span>
            </button>

            <div className="relative min-w-0 flex-1 sm:flex-initial">
              <button
                onClick={() => setShowTopicSwitcher(!showTopicSwitcher)}
                className="flex items-center gap-1.5 font-heading font-bold text-sm sm:text-lg text-[var(--ink)] hover:text-purple-600 transition-colors min-w-0 max-w-full text-left"
              >
                <span className="shrink-0">{topic.icon}</span>
                <span className="truncate max-w-[130px] min-[360px]:max-w-[170px] sm:max-w-xs md:max-w-md">{topic.name}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[var(--ink-muted)] shrink-0" />
              </button>

              {/* Topic Switcher Dropdown */}
              {showTopicSwitcher && (
                <div className="absolute left-0 top-full mt-2 w-72 max-w-[90vw] max-h-80 overflow-y-auto bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-xl z-50 p-2">
                  <div className="text-[11px] font-semibold text-[var(--ink-muted)] px-3 py-1.5 border-b border-[var(--border)]">
                    Jump to any topic:
                  </div>
                  {allTopics.map(t => (
                    <button
                      key={t.id}
                      onClick={() => {
                        onSelectTopic(t.id);
                        setShowTopicSwitcher(false);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                        t.id === topic.id
                          ? 'bg-purple-600 text-white font-bold'
                          : 'hover:bg-[var(--card-hover)] text-[var(--ink)]'
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate mr-2">
                        <span className="shrink-0">{t.icon}</span>
                        <span className="truncate">{t.name}</span>
                      </span>
                      <span className="text-[10px] opacity-75 font-mono shrink-0">
                        {t.categories.reduce((a, c) => a + c.formulas.length, 0)}f
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right: In-topic Search input + Topic Actions */}
          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end min-w-0">
            <div className="relative flex-1 sm:w-60 sm:flex-initial">
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-[var(--ink-muted)]" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Filter formula..."
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-full bg-[var(--bg)] border border-[var(--border)] focus:outline-none focus:ring-2 focus:ring-purple-500 text-[var(--ink)] placeholder-[var(--ink-muted)]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2 text-[10px] text-[var(--ink-muted)] hover:text-[var(--ink)]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Revision check button */}
            <button
              onClick={handleToggleRevised}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap shrink-0 ${
                isRevised
                  ? 'bg-emerald-500 text-white shadow-sm'
                  : 'bg-[var(--bg)] hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-[var(--ink)] border border-[var(--border)]'
              }`}
              title={isRevised ? 'Completed this revision' : 'Mark topic as revised'}
            >
              {isRevised ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Revised</span>
                </>
              ) : (
                <>
                  <Circle className="w-3.5 h-3.5 opacity-50" />
                  <span>Mark Revised</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="max-w-6xl mx-auto px-3 sm:px-6 pb-2.5 flex items-center justify-between gap-2 sm:gap-3 w-full max-w-full overflow-hidden">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 min-w-0 flex-1">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors shrink-0 ${
                filterMode === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-[var(--bg)] text-[var(--ink-muted)] hover:text-[var(--ink)] border border-[var(--border)]'
              }`}
            >
              All ({totalFormulasInTopic})
            </button>

            <button
              onClick={() => setFilterMode('must-know')}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors flex items-center gap-1 shrink-0 ${
                filterMode === 'must-know'
                  ? 'bg-rose-600 text-white'
                  : 'bg-[var(--bg)] text-[var(--ink-muted)] hover:text-[var(--ink)] border border-[var(--border)]'
              }`}
            >
              <Flame className="w-3 h-3 text-rose-500 shrink-0" />
              <span>Must Know</span>
            </button>

            <button
              onClick={() => setFilterMode('shortcuts')}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors flex items-center gap-1 shrink-0 ${
                filterMode === 'shortcuts'
                  ? 'bg-amber-500 text-purple-950'
                  : 'bg-[var(--bg)] text-[var(--ink-muted)] hover:text-[var(--ink)] border border-[var(--border)]'
              }`}
            >
              <span>🎯 Shortcuts</span>
            </button>

            <button
              onClick={() => setFilterMode('mistakes')}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors flex items-center gap-1 shrink-0 ${
                filterMode === 'mistakes'
                  ? 'bg-orange-500 text-white'
                  : 'bg-[var(--bg)] text-[var(--ink-muted)] hover:text-[var(--ink)] border border-[var(--border)]'
              }`}
            >
              <span>⚠️ Traps</span>
            </button>

            <button
              onClick={() => setFilterMode('starred')}
              className={`px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-colors flex items-center gap-1 shrink-0 ${
                filterMode === 'starred'
                  ? 'bg-amber-400 text-purple-950'
                  : 'bg-[var(--bg)] text-[var(--ink-muted)] hover:text-[var(--ink)] border border-[var(--border)]'
              }`}
            >
              <Star className="w-3 h-3 fill-amber-400 text-amber-400 shrink-0" />
              <span>Starred</span>
            </button>
          </div>

          {/* Actions: Fonts & Expand/Collapse All */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {onOpenFontSettings && (
              <>
                <button
                  onClick={onOpenFontSettings}
                  className="flex items-center gap-1 text-[11px] text-purple-600 dark:text-purple-400 hover:text-purple-700 font-semibold px-2 py-0.5 rounded-md hover:bg-purple-50 dark:hover:bg-purple-950/30 transition-colors whitespace-nowrap"
                  title="Customize Text & Number Fonts"
                >
                  <Type className="w-3 h-3 shrink-0" />
                  <span>Fonts</span>
                </button>
                <span className="text-[var(--border)]">|</span>
              </>
            )}
            <button
              onClick={expandAll}
              className="text-[11px] text-[var(--ink-muted)] hover:text-purple-600 transition-colors font-medium whitespace-nowrap"
            >
              Expand
            </button>
            <span className="text-[var(--border)]">|</span>
            <button
              onClick={collapseAll}
              className="text-[11px] text-[var(--ink-muted)] hover:text-purple-600 transition-colors font-medium whitespace-nowrap"
            >
              Collapse
            </button>
            <span className="text-[var(--border)]">|</span>
            <button
              onClick={toggleAllDefinitions}
              className="text-[11px] text-[var(--ink-muted)] hover:text-purple-600 transition-colors font-medium whitespace-nowrap flex items-center gap-1"
              title="Toggle definitions and details on all formula cards"
            >
              <BookOpen className="w-3 h-3" />
              <span>{hiddenDefinitions.size > 0 ? 'Show All Notes' : 'Hide All Notes'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-3 sm:px-6 pt-6 w-full max-w-full min-w-0">
        {/* Quick Tips Box if available */}
        {topic.quickTips && topic.quickTips.length > 0 && !searchQuery && filterMode === 'all' && (
          <div 
            className="mb-6 rounded-2xl bg-amber-500/10 border p-4 text-xs text-[var(--ink)] flex items-start gap-3 w-full max-w-full min-w-0 box-border overflow-visible"
            style={{
              borderColor: '#f2a80a',
              paddingLeft: '17px',
              marginLeft: '0px',
              marginRight: '0px',
              marginTop: '47px',
            }}
          >
            <Lightbulb className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <span className="font-bold text-amber-700 dark:text-amber-400 block mb-1">
                Exam Strategy & Memory Cue for {topic.name}:
              </span>
              <ul className="list-disc list-inside space-y-0.5 text-[var(--ink-muted)]">
                {topic.quickTips.map((tip, idx) => (
                  <li key={idx} className="break-words">{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Formulas Categories */}
        {filteredCategories.length === 0 ? (
          <div className="text-center py-16 bg-[var(--card)] rounded-2xl border border-[var(--border)] p-6">
            <p className="text-sm text-[var(--ink-muted)] mb-3">
              No formulas found matching your filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setFilterMode('all');
              }}
              className="px-4 py-2 bg-purple-600 text-white rounded-xl text-xs font-semibold hover:bg-purple-700 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredCategories.map(category => {
            const isClosed = collapsedCategories.has(category.id);
            return (
              <div
                key={category.id}
                className="cat mb-5 rounded-2xl bg-[var(--card)] border border-[var(--border)] overflow-hidden shadow-sm transition-all w-full min-w-0 max-w-full"
                style={{ boxShadow: 'var(--shadow)' }}
              >
                {/* Category Header */}
                <div
                  onClick={() => toggleCategory(category.id)}
                  className="cat-head flex items-center justify-between p-3.5 sm:p-4 px-4 sm:px-5 cursor-pointer bg-[var(--card-hover)] hover:bg-purple-500/5 transition-colors select-none"
                >
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 mr-2">
                    <h2 className="font-heading font-bold text-xs sm:text-base text-purple-700 dark:text-purple-300 truncate">
                      {category.name}
                    </h2>
                    <span className="text-[10px] sm:text-[11px] font-mono font-medium text-[var(--ink-muted)] bg-[var(--bg)] px-2 py-0.5 rounded-full border border-[var(--border)] shrink-0">
                      {category.formulas.length} {category.formulas.length === 1 ? 'formula' : 'formulas'}
                    </span>
                  </div>
                  <span className={`chev text-sm text-[var(--ink-muted)] transition-transform duration-200 shrink-0 ${isClosed ? '-rotate-90' : 'rotate-0'}`}>
                    ▾
                  </span>
                </div>

                {/* Category Body with formula cards grid */}
                {!isClosed && (
                  <div className="cat-body p-3 sm:p-5 grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 w-full min-w-0 max-w-full">
                    {category.formulas.map(formula => {
                      const isStarred = starredFormulaIds.has(formula.id);
                      const isCopied = copiedId === formula.id;
                      const hasTextPart = Boolean(formula.explanation || formula.shortcut || formula.commonMistake || formula.remember);
                      const isTextHidden = hiddenDefinitions.has(formula.id);

                      return (
                        <div
                          key={formula.id}
                          id={`formula-${formula.id}`}
                          className={`fcard rounded-2xl p-3.5 sm:p-4 bg-[var(--card)] border transition-all duration-200 flex flex-col justify-between relative w-full min-w-0 max-w-full overflow-hidden ${
                            formula.mustKnow
                              ? 'border-purple-500/30 hover:border-purple-500 shadow-sm'
                              : 'border-[var(--border)] hover:border-purple-300'
                          }`}
                        >
                          <div className="min-w-0 max-w-full">
                            {/* Card Title & Tags */}
                            <div className="ftitle flex items-start justify-between gap-2 mb-2.5 min-w-0">
                              <div className="flex items-center gap-1.5 flex-wrap min-w-0 flex-1">
                                <span className="font-heading font-bold text-xs sm:text-sm text-[var(--ink)] break-words">
                                  {formula.title}
                                </span>
                                {formula.mustKnow && (
                                  <span className="bg-rose-500/10 text-rose-600 dark:text-rose-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-rose-500/20 inline-flex items-center gap-0.5 shrink-0">
                                    <Flame className="w-2.5 h-2.5" />
                                    Must Know
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center gap-1 shrink-0">
                                {hasTextPart && (
                                  <button
                                    type="button"
                                    onClick={() => toggleDefinition(formula.id)}
                                    className="p-1 sm:px-2 py-1 rounded-lg text-purple-600 dark:text-purple-400 hover:bg-purple-500/10 transition-colors flex items-center gap-1 text-[11px] font-semibold"
                                    title={isTextHidden ? 'Click arrow to show definition' : 'Click arrow to hide definition'}
                                  >
                                    <span className="hidden sm:inline text-[10px]">{isTextHidden ? 'Definition' : 'Hide'}</span>
                                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isTextHidden ? '-rotate-90' : 'rotate-0'}`} />
                                  </button>
                                )}
                                {/* Star / Favorite Button */}
                                <button
                                  onClick={() => onToggleStarFormula(formula.id)}
                                  className={`p-1.5 rounded-lg transition-colors shrink-0 ${
                                    isStarred
                                      ? 'text-amber-400 hover:text-amber-500'
                                      : 'text-[var(--ink-muted)] hover:text-amber-400'
                                  }`}
                                  title={isStarred ? 'Remove from starred' : 'Star this formula'}
                                >
                                  <Star className={`w-4 h-4 ${isStarred ? 'fill-amber-400' : ''}`} />
                                </button>
                              </div>
                            </div>

                            {/* Professional Mathematical Notation (KaTeX or Structured HTML Table) */}
                            {formula.table ? (
                              <FormulaTable table={formula.table} />
                            ) : (
                              <div
                                className="formula rounded-2xl p-2.5 sm:p-3 mb-2.5 overflow-x-auto select-all w-full max-w-full min-w-0 font-rounded text-left"
                                style={{
                                  backgroundColor: 'var(--math-bg)',
                                  border: '1px solid var(--math-border)',
                                  textAlign: 'left',
                                }}
                              >
                                <MathRenderer
                                  latex={formula.latex}
                                  math={formula.formula}
                                  displayMode={true}
                                  className="text-left"
                                />
                              </div>
                            )}

                            {/* Arrow to hide and unhide definition and text part */}
                            {hasTextPart && (
                              <button
                                type="button"
                                onClick={() => toggleDefinition(formula.id)}
                                className="w-full flex items-center justify-between py-1.5 px-3 rounded-xl bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/20 text-[11px] font-semibold text-purple-700 dark:text-purple-300 transition-colors my-2 select-none"
                                title={isTextHidden ? 'Click arrow to unhide definition & text' : 'Click arrow to hide definition & text'}
                              >
                                <span className="flex items-center gap-1.5">
                                  <BookOpen className="w-3.5 h-3.5" />
                                  <span>{isTextHidden ? 'Show Definition & Details' : 'Hide Definition & Details'}</span>
                                </span>
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isTextHidden ? '' : 'rotate-180'}`} />
                              </button>
                            )}

                            {!isTextHidden && hasTextPart && (
                              <div className="definition-content space-y-2 mb-2.5">
                                {/* Explanation / Definition */}
                                {formula.explanation && (
                                  <div className="exp text-xs text-[var(--ink-muted)] leading-relaxed break-words bg-slate-500/[0.03] p-2.5 rounded-xl border border-[var(--border)]">
                                    <span className="font-semibold text-purple-700 dark:text-purple-300 block mb-0.5 text-[11px]">
                                      📖 Definition & Theory:
                                    </span>
                                    <FormattedText text={formula.explanation} />
                                  </div>
                                )}

                                {/* Shortcut / Trick Note */}
                                {formula.shortcut && (
                                  <div className="trick p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-800 dark:text-amber-300 font-medium leading-normal break-words">
                                    <FormattedText text={formula.shortcut} />
                                  </div>
                                )}

                                {/* Common Mistake Note */}
                                {formula.commonMistake && (
                                  <div className="common-mistake p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/20 text-[11px] text-rose-800 dark:text-rose-300 font-medium leading-normal break-words">
                                    <FormattedText text={formula.commonMistake} />
                                  </div>
                                )}

                                {/* Remember Note */}
                                {formula.remember && (
                                  <div className="remember p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-800 dark:text-cyan-300 font-medium leading-normal break-words">
                                    💡 <FormattedText text={formula.remember} />
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          {/* Card Footer Actions */}
                          <div className="pt-2 border-t border-[var(--border)] flex items-center justify-between mt-1 min-w-0">
                            <span className="text-[10px] text-[var(--ink-muted)] truncate mr-2">
                              Tap formula to highlight
                            </span>
                            <button
                              onClick={() => copyFormula(formula)}
                              className={`copy text-xs font-semibold px-2.5 py-1 rounded-md transition-colors flex items-center gap-1.5 shrink-0 ${
                                isCopied
                                  ? 'bg-emerald-500 text-white'
                                  : 'text-purple-600 dark:text-purple-400 hover:bg-purple-500/10'
                              }`}
                            >
                              {isCopied ? (
                                <>
                                  <Check className="w-3.5 h-3.5" />
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
          })
        )}

        {/* Previous & Next Topic Navigation */}
        <div className="mt-12 pt-6 border-t border-[var(--border)] grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full min-w-0">
          {prevTopic ? (
            <button
              onClick={() => onSelectTopic(prevTopic.id)}
              className="p-3.5 sm:p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-purple-400 transition-all text-left group flex items-center gap-3 shadow-sm hover:shadow min-w-0 w-full"
            >
              <ArrowLeft className="w-5 h-5 text-purple-600 group-hover:-translate-x-1 transition-transform shrink-0" />
              <div className="min-w-0 flex-1">
                <span className="text-[10px] uppercase font-bold text-[var(--ink-muted)] tracking-wider block">
                  Previous Topic
                </span>
                <span className="font-heading font-bold text-sm text-[var(--ink)] truncate block">
                  {prevTopic.icon} {prevTopic.name}
                </span>
              </div>
            </button>
          ) : (
            <div />
          )}

          {nextTopic && (
            <button
              onClick={() => onSelectTopic(nextTopic.id)}
              className="p-3.5 sm:p-4 rounded-2xl bg-[var(--card)] border border-[var(--border)] hover:border-purple-400 transition-all text-right group flex items-center justify-end gap-3 shadow-sm hover:shadow sm:col-start-2 min-w-0 w-full"
            >
              <div className="min-w-0 flex-1 text-right">
                <span className="text-[10px] uppercase font-bold text-[var(--ink-muted)] tracking-wider block">
                  Next Topic
                </span>
                <span className="font-heading font-bold text-sm text-[var(--ink)] truncate block">
                  {nextTopic.icon} {nextTopic.name}
                </span>
              </div>
              <ArrowRight className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          )}
        </div>
      </main>

      {/* Floating Action Button: Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fab fixed bottom-6 right-6 w-12 h-12 rounded-full bg-purple-600 hover:bg-purple-700 text-white shadow-xl flex items-center justify-center transition-all z-40 active:scale-95"
          title="Scroll to Top"
        >
          ↑
        </button>
      )}
    </div>
  );
};
