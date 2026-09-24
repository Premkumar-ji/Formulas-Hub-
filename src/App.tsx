import React, { useState, useEffect, useCallback } from 'react';
import { TOPICS_DATA } from './data/topics';
import { TopicData } from './types/formula';
import { Navbar } from './components/Navbar';
import { IndexView } from './components/IndexView';
import { TopicView } from './components/TopicView';
import { FlashcardModal } from './components/FlashcardModal';
import { StarredView } from './components/StarredView';
import { CheatSheetModal } from './components/CheatSheetModal';

type AppView = 'index' | 'topic' | 'favorites' | 'cheat-sheet';

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>('index');
  const [activeTopicId, setActiveTopicId] = useState<string>('trigonometry');
  const [targetFormulaId, setTargetFormulaId] = useState<string | undefined>();
  const [isFlashcardOpen, setIsFlashcardOpen] = useState<boolean>(false);

  // Theme state
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('fu-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  // Starred formulas state
  const [starredFormulaIds, setStarredFormulaIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('fu-starred');
      return saved ? new Set(JSON.parse(saved)) : new Set(['trig-pyth-2', 'trig-trick-60', 'prob-bayes', 'quad-vieta', 'prog-am-gm-hm']);
    } catch {
      return new Set(['trig-pyth-2', 'trig-trick-60', 'prob-bayes', 'quad-vieta', 'prog-am-gm-hm']);
    }
  });

  // Revised topics state
  const [revisedTopicIds, setRevisedTopicIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('fu-revised');
      return saved ? new Set(JSON.parse(saved)) : new Set(['trigonometry']);
    } catch {
      return new Set(['trigonometry']);
    }
  });

  // Apply theme to document element
  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('fu-theme', theme);
    } catch {
      // Storage unavailable
    }
  }, [isDark]);

  // Persist starred formulas
  useEffect(() => {
    try {
      localStorage.setItem('fu-starred', JSON.stringify(Array.from(starredFormulaIds)));
    } catch {
      // Storage unavailable
    }
  }, [starredFormulaIds]);

  // Persist revised topics
  useEffect(() => {
    try {
      localStorage.setItem('fu-revised', JSON.stringify(Array.from(revisedTopicIds)));
    } catch {
      // Storage unavailable
    }
  }, [revisedTopicIds]);

  // Handle URL hash and query param changes for deep linking
  useEffect(() => {
    const handleUrlChange = () => {
      // 1. Check query param
      const urlParams = new URLSearchParams(window.location.search);
      const queryTopic = urlParams.get('topic');

      // 2. Check hash
      const cleanHash = window.location.hash.replace(/^#\/?/, '').trim();

      const routeKey = queryTopic || cleanHash;

      if (!routeKey) {
        setCurrentView('index');
      } else if (routeKey === 'favorites') {
        setCurrentView('favorites');
      } else if (routeKey === 'cheat-sheet') {
        setCurrentView('cheat-sheet');
      } else {
        const found = TOPICS_DATA.find(
          t => t.slug.toLowerCase() === routeKey.toLowerCase() || t.id.toLowerCase() === routeKey.toLowerCase()
        );
        if (found) {
          setActiveTopicId(found.id);
          setCurrentView('topic');
        } else {
          setCurrentView('index');
        }
      }
    };

    handleUrlChange();
    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const handleToggleTheme = () => {
    setIsDark(prev => !prev);
  };

  const handleSelectTopic = useCallback((topicId: string) => {
    setActiveTopicId(topicId);
    setTargetFormulaId(undefined);
    setCurrentView('topic');
    const topic = TOPICS_DATA.find(t => t.id === topicId);
    if (topic) {
      window.location.hash = topic.slug;
    }
  }, []);

  const handleSelectFormulaDirectly = useCallback((topicId: string, formulaId: string) => {
    setActiveTopicId(topicId);
    setTargetFormulaId(formulaId);
    setCurrentView('topic');
    const topic = TOPICS_DATA.find(t => t.id === topicId);
    if (topic) {
      window.location.hash = topic.slug;
    }
  }, []);

  const handleNavigateHome = useCallback(() => {
    setCurrentView('index');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenFavorites = useCallback(() => {
    setCurrentView('favorites');
    window.location.hash = 'favorites';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleOpenCheatSheet = useCallback(() => {
    setCurrentView('cheat-sheet');
    window.location.hash = 'cheat-sheet';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleToggleStarFormula = useCallback((formulaId: string) => {
    setStarredFormulaIds(prev => {
      const next = new Set(prev);
      if (next.has(formulaId)) next.delete(formulaId);
      else next.add(formulaId);
      return next;
    });
  }, []);

  const handleToggleTopicRevised = useCallback((topicId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setRevisedTopicIds(prev => {
      const next = new Set(prev);
      if (next.has(topicId)) next.delete(topicId);
      else next.add(topicId);
      return next;
    });
  }, []);

  const handleClearAllStarred = useCallback(() => {
    setStarredFormulaIds(new Set());
  }, []);

  const activeTopic = TOPICS_DATA.find(t => t.id === activeTopicId) || TOPICS_DATA[0];

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] text-[var(--ink)] selection:bg-purple-500/20 selection:text-purple-700">
      {/* Top Navigation Bar */}
      <Navbar
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onOpenFavorites={handleOpenFavorites}
        onOpenQuickRevision={() => setIsFlashcardOpen(true)}
        onOpenCheatSheet={handleOpenCheatSheet}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        starredCount={starredFormulaIds.size}
        revisedCount={revisedTopicIds.size}
        totalTopics={TOPICS_DATA.length}
      />

      {/* Main View Router */}
      <div className="flex-1">
        {currentView === 'index' && (
          <IndexView
            topics={TOPICS_DATA}
            onSelectTopic={handleSelectTopic}
            onOpenQuickRevision={() => setIsFlashcardOpen(true)}
            onOpenFavorites={handleOpenFavorites}
            revisedTopicIds={revisedTopicIds}
            onToggleTopicRevised={handleToggleTopicRevised}
            starredFormulaIds={starredFormulaIds}
            onSelectFormulaDirectly={handleSelectFormulaDirectly}
          />
        )}

        {currentView === 'topic' && (
          <TopicView
            topic={activeTopic}
            allTopics={TOPICS_DATA}
            onBackToIndex={handleNavigateHome}
            onSelectTopic={handleSelectTopic}
            isRevised={revisedTopicIds.has(activeTopic.id)}
            onToggleRevised={(id) => handleToggleTopicRevised(id)}
            starredFormulaIds={starredFormulaIds}
            onToggleStarFormula={handleToggleStarFormula}
            targetFormulaId={targetFormulaId}
            onOpenQuickRevision={() => setIsFlashcardOpen(true)}
          />
        )}

        {currentView === 'favorites' && (
          <StarredView
            topics={TOPICS_DATA}
            starredFormulaIds={starredFormulaIds}
            onToggleStarFormula={handleToggleStarFormula}
            onClearAllStarred={handleClearAllStarred}
            onBackToIndex={handleNavigateHome}
            onSelectFormulaDirectly={handleSelectFormulaDirectly}
          />
        )}

        {currentView === 'cheat-sheet' && (
          <CheatSheetModal
            topics={TOPICS_DATA}
            onBackToIndex={handleNavigateHome}
          />
        )}
      </div>

      {/* Interactive Rapid Recall Flashcard Modal */}
      <FlashcardModal
        isOpen={isFlashcardOpen}
        onClose={() => setIsFlashcardOpen(false)}
        topics={TOPICS_DATA}
        starredFormulaIds={starredFormulaIds}
        onToggleStarFormula={handleToggleStarFormula}
      />

      {/* Clean quiet footer */}
      <footer className="mt-auto py-6 border-t border-[var(--border)] bg-[var(--card)]/50 text-center text-xs text-[var(--ink-muted)] no-print">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-[var(--ink)]">Formula Universe</span>
            <span>·</span>
            <span>Comprehensive Math Revision for NIMCET, MCA & JEE Prep</span>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={handleNavigateHome} className="hover:text-purple-600 transition-colors">
              Topics Index
            </button>
            <button onClick={handleOpenFavorites} className="hover:text-purple-600 transition-colors">
              Starred ({starredFormulaIds.size})
            </button>
            <button onClick={handleOpenCheatSheet} className="hover:text-purple-600 transition-colors">
              Cheat Sheet
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
