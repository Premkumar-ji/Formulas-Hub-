import React, { useState } from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff, CheckCircle2, X } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();
  const [dismissed, setDismissed] = useState(false);

  // If online, don't show the warning bar
  if (isOnline || dismissed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:w-96 z-50 animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-amber-500/95 dark:bg-amber-600/95 text-white shadow-xl backdrop-blur-md border border-amber-400/30">
        <div className="p-2 rounded-xl bg-amber-600/60 dark:bg-amber-700/60 shrink-0">
          <WifiOff className="w-5 h-5 text-amber-100" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 font-bold text-sm">
            <span>Offline Mode Active</span>
            <span className="inline-block w-2 h-2 rounded-full bg-white animate-pulse" />
          </div>
          <p className="text-xs text-amber-100 mt-0.5 leading-relaxed">
            No internet needed! All formulas, flashcards, and cheat sheets are cached locally and work 100% offline.
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 rounded-lg text-amber-200 hover:text-white hover:bg-white/10 transition-colors shrink-0"
          aria-label="Dismiss offline banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
