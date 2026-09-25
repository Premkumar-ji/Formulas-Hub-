import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { Download, Smartphone, Check, X, Share, PlusSquare, WifiOff } from 'lucide-react';

interface PWAInstallButtonProps {
  variant?: 'nav' | 'hero' | 'banner';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ variant = 'nav' }) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);

  // If already installed and running standalone, do not show the install button in the nav
  if (isInstalled && variant === 'nav') {
    return (
      <div
        className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold"
        title="App is installed and runs 100% offline"
      >
        <WifiOff className="w-3.5 h-3.5 text-emerald-500" />
        <span>Offline Ready</span>
      </div>
    );
  }

  const handleInstallClick = async () => {
    if (isInstallable) {
      const accepted = await install();
      if (accepted) {
        setInstallSuccess(true);
        setTimeout(() => setInstallSuccess(false), 4000);
      }
    } else {
      setShowGuideModal(true);
    }
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        aria-label="Install App for Offline Use"
        className={`group relative flex items-center justify-center gap-1 sm:gap-1.5 transition-all duration-200 cursor-pointer ${
          variant === 'nav'
            ? 'px-2 sm:px-2.5 py-1.5 text-xs font-semibold rounded-xl bg-white/20 hover:bg-white/30 text-white shadow-sm active:scale-95 shrink-0 border border-white/20 backdrop-blur-sm'
            : 'px-4 py-2.5 text-sm font-bold rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-md hover:shadow-lg hover:from-violet-700 hover:to-indigo-700 active:scale-95'
        }`}
        title="Install app to your phone for 100% offline access"
      >
        {installSuccess ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-300" />
            <span className="hidden min-[380px]:inline text-emerald-200">Installed!</span>
          </>
        ) : (
          <>
            <Download className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 text-amber-300" />
            <span className="hidden min-[380px]:inline text-[11px] sm:text-xs">Install</span>
            <span className="hidden md:inline text-[9px] uppercase tracking-wider bg-white/20 px-1 py-0.2 rounded font-extrabold text-amber-200">
              Offline
            </span>
          </>
        )}
      </button>

      {/* Offline Install Guide Modal (for iOS or manual install on Android / Desktop) */}
      {showGuideModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setShowGuideModal(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl bg-[var(--bg-surface)] text-[var(--ink)] p-5 sm:p-6 shadow-2xl border border-[var(--border)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[var(--border)]">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-tight">Use Offline on Your Phone</h3>
                  <p className="text-xs text-[var(--ink-muted)]">No internet connection required</p>
                </div>
              </div>
              <button
                onClick={() => setShowGuideModal(false)}
                className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-[var(--ink-muted)] transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Offline highlights */}
            <div className="mt-4 p-3 rounded-2xl bg-violet-500/10 border border-violet-500/20 text-xs text-[var(--ink)] space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-violet-700 dark:text-violet-300">
                <WifiOff className="w-3.5 h-3.5" />
                <span>100% Offline Capability</span>
              </div>
              <p className="text-[var(--ink-muted)] leading-relaxed">
                Once installed or cached, all formulas, cheat sheets, flashcards, and search work instantly on your phone even in airplane mode.
              </p>
            </div>

            {/* Platform Instructions */}
            <div className="mt-4 space-y-3.5 text-xs text-[var(--ink)]">
              {isIOS ? (
                /* iOS Safari instructions */
                <div className="space-y-2.5">
                  <div className="font-bold text-sm text-violet-600 dark:text-violet-400 flex items-center gap-1.5">
                    <span>📱 iPhone / iPad (Safari):</span>
                  </div>
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Share className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold">Step 1: Tap Share</p>
                      <p className="text-[var(--ink-muted)]">Tap the standard <strong>Share</strong> button at the bottom of Safari.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <PlusSquare className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold">Step 2: Add to Home Screen</p>
                      <p className="text-[var(--ink-muted)]">Scroll down the menu and select <strong>"Add to Home Screen"</strong>.</p>
                    </div>
                  </div>
                </div>
              ) : (
                /* Android / Chrome instructions */
                <div className="space-y-2.5">
                  <div className="font-bold text-sm text-violet-600 dark:text-violet-400">
                    📱 Android (Chrome / Edge / Samsung Internet):
                  </div>
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                    <div className="w-6 h-6 rounded-lg bg-violet-600/20 text-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Download className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold">Option A: Direct Install</p>
                      <p className="text-[var(--ink-muted)]">
                        {isInstallable ? (
                          <button
                            onClick={async () => {
                              setShowGuideModal(false);
                              await install();
                            }}
                            className="mt-1 px-3 py-1 rounded-lg bg-violet-600 text-white font-bold hover:bg-violet-700"
                          >
                            Click here to Install Now
                          </button>
                        ) : (
                          'Tap the 3 dots menu (⋮) in Chrome and tap "Install app" or "Add to Home screen".'
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)]">
                    <div className="w-6 h-6 rounded-lg bg-amber-500/20 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Smartphone className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-semibold">Option B: iPhone / iPad (Safari)</p>
                      <p className="text-[var(--ink-muted)]">Tap the Share icon &rarr; select <strong>"Add to Home Screen"</strong>.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Close Button */}
            <div className="mt-5">
              <button
                onClick={() => setShowGuideModal(false)}
                className="w-full py-2.5 rounded-2xl bg-[var(--bg)] hover:bg-black/5 dark:hover:bg-white/5 border border-[var(--border)] font-bold text-xs text-[var(--ink)] transition-colors"
              >
                Got It, Thanks!
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
