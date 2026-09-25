import React, { useState } from 'react';
import { 
  X, 
  Type, 
  Sparkles, 
  Check, 
  RotateCcw, 
  Hash, 
  Sliders, 
  Bold, 
  Feather
} from 'lucide-react';
import { 
  TEXT_FONT_OPTIONS, 
  NUMBER_FONT_OPTIONS, 
  FONT_PRESETS, 
  TEXT_FONT_WEIGHTS, 
  NUMBER_FONT_WEIGHTS, 
  DEFAULT_TEXT_FONT, 
  DEFAULT_NUMBER_FONT, 
  DEFAULT_FONT_SCALE,
  DEFAULT_TEXT_FONT_WEIGHT,
  DEFAULT_NUMBER_FONT_WEIGHT
} from '../utils/fontManager';
import { MathRenderer } from './MathRenderer';

interface FontCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTextFont: string;
  currentNumberFont: string;
  currentScale: number;
  currentTextWeight: number;
  currentNumberWeight: number;
  onSelectTextFont: (fontId: string) => void;
  onSelectNumberFont: (fontId: string) => void;
  onSelectScale: (scale: number) => void;
  onSelectTextWeight: (weight: number) => void;
  onSelectNumberWeight: (weight: number) => void;
  onResetDefaults: () => void;
}

export const FontCustomizerModal: React.FC<FontCustomizerModalProps> = ({
  isOpen,
  onClose,
  currentTextFont,
  currentNumberFont,
  currentScale,
  currentTextWeight,
  currentNumberWeight,
  onSelectTextFont,
  onSelectNumberFont,
  onSelectScale,
  onSelectTextWeight,
  onSelectNumberWeight,
  onResetDefaults,
}) => {
  const [activeTab, setActiveTab] = useState<'text' | 'numbers' | 'presets'>('text');
  const [textCategoryFilter, setTextCategoryFilter] = useState<string>('all');
  const [numberCategoryFilter, setNumberCategoryFilter] = useState<string>('all');
  const [previewFormula] = useState<string>(
    'e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}'
  );

  if (!isOpen) return null;

  const currentTextObj = TEXT_FONT_OPTIONS.find(f => f.id === currentTextFont) || TEXT_FONT_OPTIONS[0];
  const currentNumberObj = NUMBER_FONT_OPTIONS.find(f => f.id === currentNumberFont) || NUMBER_FONT_OPTIONS[0];

  const filteredTextFonts = textCategoryFilter === 'all'
    ? TEXT_FONT_OPTIONS
    : TEXT_FONT_OPTIONS.filter(f => f.category === textCategoryFilter);

  const filteredNumberFonts = numberCategoryFilter === 'all'
    ? NUMBER_FONT_OPTIONS
    : NUMBER_FONT_OPTIONS.filter(f => f.category === numberCategoryFilter);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[var(--card)] border border-[var(--border)] rounded-3xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-[var(--ink)]"
        style={{ boxShadow: 'var(--shadow-lg)' }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="font-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-[var(--border)] bg-[var(--card-hover)]">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-2xl bg-purple-600/10 text-purple-600 dark:text-purple-400">
              <Type className="w-5 h-5" />
            </div>
            <div>
              <h2 id="font-modal-title" className="font-heading font-extrabold text-base sm:text-lg text-[var(--ink)]">
                Typography & Font Studio
              </h2>
              <p className="text-xs text-[var(--ink-muted)]">
                Customize fonts and adjust font weight for text and numbers separately
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-[var(--border)] transition-colors text-[var(--ink-muted)] hover:text-[var(--ink)]"
            aria-label="Close font settings"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Live Interactive Preview Card */}
        <div className="p-4 sm:p-5 border-b border-[var(--border)] bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-cyan-500/5">
          <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                Live Preview Sandbox
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-purple-300 font-semibold border border-purple-500/20">
                {currentTextObj.name} (w{currentTextWeight}) Text + {currentNumberObj.name} (w{currentNumberWeight}) Digits
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span className="text-[var(--ink-muted)] hidden sm:inline">Scale:</span>
              <div className="inline-flex rounded-lg border border-[var(--border)] bg-[var(--bg)] p-0.5">
                {[92, 100, 108].map(s => (
                  <button
                    key={s}
                    onClick={() => onSelectScale(s)}
                    className={`px-2 py-0.5 text-[10px] font-bold rounded-md transition-colors ${
                      currentScale === s
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'text-[var(--ink-muted)] hover:text-[var(--ink)]'
                    }`}
                  >
                    {s === 92 ? 'Compact' : s === 100 ? 'Normal' : 'Large'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div 
            className="rounded-2xl p-3 sm:p-4 bg-[var(--card)] border border-[var(--border)] shadow-xs transition-all"
            style={{
              fontFamily: currentTextObj.family,
              fontSize: `${currentScale}%`,
              fontWeight: currentTextWeight,
            }}
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 
                className="font-heading text-sm sm:text-base text-[var(--ink)] leading-snug"
                style={{ fontWeight: Math.min(900, currentTextWeight + 100) }}
              >
                Maclaurin / Binomial Expansion #13 (2026 Batch)
              </h3>
              <span 
                className="font-numbers px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs border border-emerald-500/20 shrink-0"
                style={{ 
                  fontFamily: currentNumberObj.family,
                  fontWeight: currentNumberWeight
                }}
              >
                100% NIMCET High-Yield
              </span>
            </div>

            <p className="text-xs text-[var(--ink-muted)] mb-3 leading-relaxed">
              Every term is calculated with precision. Watch how digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 adapt independently to your chosen number font and weight!
            </p>

            {/* Formula rendering in KaTeX */}
            <div 
              className="p-3 rounded-xl bg-[var(--math-bg)] border border-[var(--math-border)] overflow-x-auto text-center"
            >
              <MathRenderer
                latex={previewFormula}
                displayMode={true}
              />
            </div>

            {/* Quick numeral strip */}
            <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-[var(--border)] flex-wrap gap-2">
              <span className="text-[11px] text-[var(--ink-muted)]">
                Digits Sample ({currentNumberObj.name}):
              </span>
              <span 
                className="font-numbers text-sm tracking-widest text-purple-700 dark:text-purple-300"
                style={{ 
                  fontFamily: currentNumberObj.family,
                  fontWeight: currentNumberWeight 
                }}
              >
                0 1 2 3 4 5 6 7 8 9
              </span>
              <span 
                className="text-[11px] text-[var(--ink-muted)] font-mono"
                style={{ 
                  fontFamily: currentNumberObj.family,
                  fontWeight: currentNumberWeight 
                }}
              >
                x^2 / 2! + x^3 / 3!
              </span>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className="flex border-b border-[var(--border)] bg-[var(--card)] px-4 sm:px-5 overflow-x-auto">
          <button
            onClick={() => setActiveTab('text')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'text'
                ? 'border-purple-600 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink)]'
            }`}
          >
            <Type className="w-4 h-4" />
            <span>1. Text Font & Weight</span>
          </button>

          <button
            onClick={() => setActiveTab('numbers')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'numbers'
                ? 'border-purple-600 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink)]'
            }`}
          >
            <Hash className="w-4 h-4" />
            <span>2. Numbers Font & Weight</span>
          </button>

          <button
            onClick={() => setActiveTab('presets')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'presets'
                ? 'border-purple-600 text-purple-600 dark:text-purple-400'
                : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink)]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Curated Pairings</span>
          </button>
        </div>

        {/* Scrollable Tab Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4">
          {activeTab === 'text' && (
            <div className="space-y-4">
              {/* Separate Text Font Weight Control */}
              <div className="p-3.5 rounded-2xl bg-purple-50/50 dark:bg-purple-950/20 border border-purple-200/50 dark:border-purple-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Bold className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                    <span className="text-xs font-bold text-[var(--ink)]">
                      Text Font Weight (Independent)
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400">
                    {TEXT_FONT_WEIGHTS.find(w => w.weight === currentTextWeight)?.label || `${currentTextWeight}`}
                  </span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {TEXT_FONT_WEIGHTS.map(w => {
                    const isSelected = currentTextWeight === w.weight;
                    return (
                      <button
                        key={w.weight}
                        onClick={() => onSelectTextWeight(w.weight)}
                        className={`py-1.5 px-2 rounded-xl text-xs text-center transition-all ${
                          isSelected
                            ? 'bg-purple-600 text-white font-bold shadow-xs scale-102'
                            : 'bg-[var(--card)] hover:bg-[var(--card-hover)] text-[var(--ink)] border border-[var(--border)]'
                        }`}
                        style={{ fontWeight: w.weight }}
                      >
                        <div className="text-[11px] leading-tight">{w.tag}</div>
                        <div className="text-[10px] opacity-80">{w.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Text Category Filter */}
              <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
                <div>
                  <h4 className="text-xs font-bold text-[var(--ink)]">
                    Choose Text Font Family
                  </h4>
                  <p className="text-[11px] text-[var(--ink-muted)]">
                    Includes Comic Sans MS, Segoe Print, Bradley Hand, Fredoka, Bebas Neue, Belanosima & more
                  </p>
                </div>
                <div className="flex items-center gap-1 flex-wrap">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'handwriting', label: 'Handwriting' },
                    { id: 'rounded', label: 'Rounded' },
                    { id: 'sans', label: 'Sans' },
                    { id: 'display', label: 'Display' },
                    { id: 'serif', label: 'Serif' },
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setTextCategoryFilter(cat.id)}
                      className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
                        textCategoryFilter === cat.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-[var(--border)] text-[var(--ink-muted)] hover:text-[var(--ink)]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Text Fonts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {filteredTextFonts.map(font => {
                  const isSelected = font.id === currentTextFont;
                  return (
                    <button
                      key={font.id}
                      onClick={() => onSelectTextFont(font.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between relative group ${
                        isSelected
                          ? 'border-purple-600 bg-purple-50/50 dark:bg-purple-950/20 ring-2 ring-purple-600/30 shadow-sm'
                          : 'border-[var(--border)] hover:border-purple-300 bg-[var(--card)] hover:bg-[var(--card-hover)]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span 
                          className="text-sm text-[var(--ink)]"
                          style={{ 
                            fontFamily: font.family,
                            fontWeight: currentTextWeight
                          }}
                        >
                          {font.name}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[var(--border)] text-[var(--ink-muted)] capitalize">
                            {font.category}
                          </span>
                          {isSelected && (
                            <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                          )}
                        </div>
                      </div>

                      <div 
                        className="text-xs text-[var(--ink)] mb-1 line-clamp-1"
                        style={{ 
                          fontFamily: font.family,
                          fontWeight: currentTextWeight
                        }}
                      >
                        {font.sampleText}
                      </div>

                      <p className="text-[11px] text-[var(--ink-muted)] leading-tight">
                        {font.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'numbers' && (
            <div className="space-y-4">
              {/* Separate Number Font Weight Control */}
              <div className="p-3.5 rounded-2xl bg-cyan-50/50 dark:bg-cyan-950/20 border border-cyan-200/50 dark:border-cyan-800/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Hash className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-xs font-bold text-[var(--ink)]">
                      Numbers & Digits Font Weight (Independent)
                    </span>
                  </div>
                  <span className="text-xs font-extrabold text-cyan-600 dark:text-cyan-400">
                    {NUMBER_FONT_WEIGHTS.find(w => w.weight === currentNumberWeight)?.label || `${currentNumberWeight}`}
                  </span>
                </div>
                <div className="grid grid-cols-6 gap-1.5">
                  {NUMBER_FONT_WEIGHTS.map(w => {
                    const isSelected = currentNumberWeight === w.weight;
                    return (
                      <button
                        key={w.weight}
                        onClick={() => onSelectNumberWeight(w.weight)}
                        className={`py-1.5 px-1.5 rounded-xl text-xs text-center transition-all ${
                          isSelected
                            ? 'bg-cyan-600 text-white font-bold shadow-xs scale-102'
                            : 'bg-[var(--card)] hover:bg-[var(--card-hover)] text-[var(--ink)] border border-[var(--border)]'
                        }`}
                        style={{ fontWeight: w.weight }}
                      >
                        <div className="text-[11px] leading-tight">{w.tag}</div>
                        <div className="text-[10px] opacity-80">{w.label}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Number Category Filter */}
              <div className="flex items-center justify-between gap-2 flex-wrap pt-1">
                <div>
                  <h4 className="text-xs font-bold text-[var(--ink)]">
                    Choose Numbers & Math Digits Font Family
                  </h4>
                  <p className="text-[11px] text-[var(--ink-muted)]">
                    Applies to exponents, formulas, fractions, coefficients, constants & counters
                  </p>
                </div>
                <div className="flex items-center gap-1 flex-wrap">
                  {[
                    { id: 'all', label: 'All' },
                    { id: 'handwriting', label: 'Handwriting' },
                    { id: 'rounded', label: 'Rounded' },
                    { id: 'mono', label: 'Mono' },
                    { id: 'display', label: 'Display' },
                    { id: 'sans', label: 'Sans' },
                    { id: 'serif', label: 'Serif' },
                  ].map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setNumberCategoryFilter(cat.id)}
                      className={`px-2 py-0.5 rounded-full text-[11px] font-medium transition-colors ${
                        numberCategoryFilter === cat.id
                          ? 'bg-purple-600 text-white'
                          : 'bg-[var(--border)] text-[var(--ink-muted)] hover:text-[var(--ink)]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number Fonts Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {filteredNumberFonts.map(font => {
                  const isSelected = font.id === currentNumberFont;
                  return (
                    <button
                      key={font.id}
                      onClick={() => onSelectNumberFont(font.id)}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between relative group ${
                        isSelected
                          ? 'border-purple-600 bg-purple-50/50 dark:bg-purple-950/20 ring-2 ring-purple-600/30 shadow-sm'
                          : 'border-[var(--border)] hover:border-purple-300 bg-[var(--card)] hover:bg-[var(--card-hover)]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-sm text-[var(--ink)]">
                          {font.name}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-[var(--border)] text-[var(--ink-muted)] capitalize">
                            {font.category}
                          </span>
                          {isSelected && (
                            <span className="w-5 h-5 rounded-full bg-purple-600 text-white flex items-center justify-center">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Prominent Numerals Preview with selected weight */}
                      <div 
                        className="font-numbers text-base text-purple-700 dark:text-purple-300 tracking-wider mb-1"
                        style={{ 
                          fontFamily: font.family,
                          fontWeight: currentNumberWeight 
                        }}
                      >
                        {font.sampleDigits}
                      </div>

                      <p className="text-[11px] text-[var(--ink-muted)] leading-tight">
                        {font.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {activeTab === 'presets' && (
            <div>
              <div className="mb-3">
                <h4 className="text-xs font-bold text-[var(--ink)] mb-0.5">
                  1-Click Handpicked Typography Pairings
                </h4>
                <p className="text-[11px] text-[var(--ink-muted)]">
                  Carefully balanced font duos pairing complementary letterforms and mathematical digits.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FONT_PRESETS.map(preset => {
                  const isCurrent = currentTextFont === preset.textId && currentNumberFont === preset.numberId;
                  const textObj = TEXT_FONT_OPTIONS.find(f => f.id === preset.textId);
                  const numObj = NUMBER_FONT_OPTIONS.find(f => f.id === preset.numberId);

                  return (
                    <button
                      key={preset.id}
                      onClick={() => {
                        onSelectTextFont(preset.textId);
                        onSelectNumberFont(preset.numberId);
                      }}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                        isCurrent
                          ? 'border-purple-600 bg-purple-50/50 dark:bg-purple-950/20 ring-2 ring-purple-600/30 shadow-sm'
                          : 'border-[var(--border)] hover:border-purple-300 bg-[var(--card)] hover:bg-[var(--card-hover)]'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-heading font-bold text-sm text-[var(--ink)]">
                          {preset.name}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                          {preset.badge}
                        </span>
                      </div>

                      <p className="text-xs text-[var(--ink-muted)] mb-3">
                        {preset.description}
                      </p>

                      <div className="p-2.5 rounded-xl bg-[var(--bg)] border border-[var(--border)] text-xs flex items-center justify-between">
                        <div>
                          <span className="text-[10px] text-[var(--ink-muted)] block">Text:</span>
                          <span 
                            className="text-xs" 
                            style={{ 
                              fontFamily: textObj?.family,
                              fontWeight: currentTextWeight 
                            }}
                          >
                            {textObj?.name}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-[10px] text-[var(--ink-muted)] block">Numbers:</span>
                          <span 
                            className="text-xs text-purple-600 dark:text-purple-400" 
                            style={{ 
                              fontFamily: numObj?.family,
                              fontWeight: currentNumberWeight 
                            }}
                          >
                            {numObj?.name} (0..9)
                          </span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-[var(--border)] bg-[var(--card-hover)] flex items-center justify-between flex-wrap gap-3">
          <button
            onClick={onResetDefaults}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[var(--border)] hover:bg-[var(--card)] text-xs font-semibold text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults (Nunito 500 + Quicksand 600)</span>
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 ml-auto"
          >
            Apply & Done
          </button>
        </div>
      </div>
    </div>
  );
};
