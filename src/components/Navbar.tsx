import React from 'react';
import { Sparkles, Star, Moon, Sun, Home, BookOpen, Layers } from 'lucide-react';

interface NavbarProps {
  currentView: 'index' | 'topic' | 'favorites' | 'cheat-sheet';
  onNavigateHome: () => void;
  onOpenFavorites: () => void;
  onOpenQuickRevision: () => void;
  onOpenCheatSheet: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
  starredCount: number;
  revisedCount: number;
  totalTopics: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigateHome,
  onOpenFavorites,
  onOpenQuickRevision,
  onOpenCheatSheet,
  isDark,
  onToggleTheme,
  starredCount,
  revisedCount,
  totalTopics,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-violet-700 via-purple-700 to-pink-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-2.5 text-left text-white hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-lg px-1.5 py-1"
            title="Return to Formula Index"
          >
            <span className="text-2xl select-none" role="img" aria-label="Atom formula">⚡</span>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight leading-tight">
                Formula Universe
              </span>
              <span className="text-[11px] font-medium text-purple-200 hidden sm:inline leading-none">
                Competitive Math Revision
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links */}
        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={onNavigateHome}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              currentView === 'index'
                ? 'bg-white text-purple-900 shadow-sm'
                : 'text-white/90 hover:bg-white/15'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>Topics</span>
          </button>

          <button
            onClick={onOpenFavorites}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              currentView === 'favorites'
                ? 'bg-white text-purple-900 shadow-sm'
                : 'text-white/90 hover:bg-white/15'
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>Starred</span>
            {starredCount > 0 && (
              <span className="bg-amber-400 text-purple-950 font-bold px-1.5 py-0.2 rounded-full text-[10px]">
                {starredCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCheatSheet}
            className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap ${
              currentView === 'cheat-sheet'
                ? 'bg-white text-purple-900 shadow-sm'
                : 'text-white/90 hover:bg-white/15'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Cheat Sheet</span>
          </button>

          <button
            onClick={onOpenQuickRevision}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-purple-950 shadow-sm transition-all whitespace-nowrap active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Rapid</span> Revision
          </button>
        </nav>

        {/* Zone 3: Primary Actions (Progress tracker + Theme switch) */}
        <div className="flex items-center gap-2">
          {/* Progress pill */}
          <div
            className="hidden lg:flex items-center gap-2 bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs border border-white/10"
            title={`${revisedCount} of ${totalTopics} topics revised`}
          >
            <div className="w-16 bg-white/20 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${totalTopics ? Math.round((revisedCount / totalTopics) * 100) : 0}%` }}
              />
            </div>
            <span className="font-mono text-[11px] font-semibold text-emerald-300">
              {totalTopics ? Math.round((revisedCount / totalTopics) * 100) : 0}% Revised
            </span>
          </div>

          {/* Theme Switcher Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-purple-100" />}
          </button>
        </div>
      </div>
    </header>
  );
};
