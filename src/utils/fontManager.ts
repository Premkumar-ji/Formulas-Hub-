export interface FontOption {
  id: string;
  name: string;
  family: string;
  category: 'rounded' | 'sans' | 'mono' | 'serif' | 'display' | 'handwriting';
  description: string;
  sampleText?: string;
  sampleDigits?: string;
}

export interface FontPresetPairing {
  id: string;
  name: string;
  badge: string;
  textId: string;
  numberId: string;
  description: string;
}

export interface FontWeightOption {
  weight: number;
  label: string;
  tag: string;
}

export const TEXT_FONT_OPTIONS: FontOption[] = [
  {
    id: 'nunito',
    name: 'Nunito',
    family: "'Nunito', system-ui, -apple-system, sans-serif",
    category: 'rounded',
    description: 'Soft, rounded terminals with high readability and friendly aesthetic',
    sampleText: 'Maclaurin & Binomial Series',
  },
  {
    id: 'quicksand',
    name: 'Quicksand',
    family: "'Quicksand', system-ui, -apple-system, sans-serif",
    category: 'rounded',
    description: 'Geometric rounded display font with clean open apertures',
    sampleText: 'Algebraic & Calculus Revision',
  },
  {
    id: 'fredoka',
    name: 'Fredoka',
    family: "'Fredoka', system-ui, -apple-system, sans-serif",
    category: 'rounded',
    description: 'Smooth rounded typography with warm cheerful modern curves',
    sampleText: 'NIMCET Revision & Shortcuts',
  },
  {
    id: 'belanosima',
    name: 'Belanosima',
    family: "'Belanosima', system-ui, -apple-system, sans-serif",
    category: 'sans',
    description: 'Geometric sans with unique humanist proportions and balanced elegance',
    sampleText: 'Algebraic Summations & Series Limits',
  },
  {
    id: 'bebas-neue',
    name: 'Bebas Neue',
    family: "'Bebas Neue', system-ui, -apple-system, sans-serif",
    category: 'display',
    description: 'All-caps bold condensed display font with powerful title presence',
    sampleText: 'EXPANSIONS & FORMULA MATRIX',
  },
  {
    id: 'comic-sans',
    name: 'Comic Sans MS',
    family: "'Comic Sans MS', 'Comic Sans', 'Comic Neue', cursive, sans-serif",
    category: 'handwriting',
    description: 'Playful informal handwriting with high readability and friendly curve flow',
    sampleText: 'Binomial Expansions & Calculus Tricks',
  },
  {
    id: 'segoe-print',
    name: 'Segoe Print',
    family: "'Segoe Print', 'Bradley Hand', 'Comic Sans MS', cursive, sans-serif",
    category: 'handwriting',
    description: 'Smooth cursive handwriting font modeled after personal study notes',
    sampleText: 'Quick Revision Exam Notes',
  },
  {
    id: 'bradley-hand',
    name: 'Bradley Hand',
    family: "'Bradley Hand', 'Bradley Hand ITC', 'Caveat', cursive, sans-serif",
    category: 'handwriting',
    description: 'Calligraphic personal handwriting with distinct informal flair',
    sampleText: 'Important Series & Shortcuts',
  },
  {
    id: 'inter',
    name: 'Inter',
    family: "'Inter', system-ui, -apple-system, sans-serif",
    category: 'sans',
    description: 'Modern, highly legible interface typeface crafted for screens',
    sampleText: 'Competitive Exam Formula Hub',
  },
  {
    id: 'poppins',
    name: 'Poppins',
    family: "'Poppins', system-ui, -apple-system, sans-serif",
    category: 'display',
    description: 'Bold geometric sans with circular curves and strong presence',
    sampleText: 'Rapid Memory Tricks & Shortcuts',
  },
  {
    id: 'outfit',
    name: 'Outfit',
    family: "'Outfit', system-ui, -apple-system, sans-serif",
    category: 'sans',
    description: 'Contemporary, balanced design with sleek geometric shapes',
    sampleText: 'Sequence, Series & Summations',
  },
  {
    id: 'plus-jakarta-sans',
    name: 'Plus Jakarta Sans',
    family: "'Plus Jakarta Sans', system-ui, -apple-system, sans-serif",
    category: 'sans',
    description: 'Clean modern neo-grotesque with crisp clarity at small sizes',
    sampleText: 'Infinite Geometric Progressions',
  },
  {
    id: 'lora',
    name: 'Lora',
    family: "'Lora', Georgia, serif",
    category: 'serif',
    description: 'Classic literary serif with academic typography feel',
    sampleText: 'Mathematical Analysis & Theorems',
  },
  {
    id: 'system',
    name: 'System Default',
    family: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    category: 'sans',
    description: 'Native device system typography (San Francisco, Segoe UI, Roboto)',
    sampleText: 'Standard Native Interface',
  },
];

export const NUMBER_FONT_OPTIONS: FontOption[] = [
  {
    id: 'quicksand',
    name: 'Quicksand Rounded',
    family: "'Quicksand', system-ui, sans-serif",
    category: 'rounded',
    description: 'Soft rounded numerals with gentle loops and circular zeros',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'nunito',
    name: 'Nunito Soft',
    family: "'Nunito', system-ui, sans-serif",
    category: 'rounded',
    description: 'Curved and friendly digits, easy on the eyes during long study sessions',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'fredoka',
    name: 'Fredoka Digits',
    family: "'Fredoka', system-ui, sans-serif",
    category: 'rounded',
    description: 'Charming smooth rounded numerals with distinct circular apertures',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'belanosima',
    name: 'Belanosima Digits',
    family: "'Belanosima', system-ui, sans-serif",
    category: 'sans',
    description: 'Balanced modern geometric figures with high legibility in formulas',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'bebas-neue',
    name: 'Bebas Neue Digits',
    family: "'Bebas Neue', system-ui, sans-serif",
    category: 'display',
    description: 'Tall condensed display numerals for impactful math constants',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'comic-sans',
    name: 'Comic Sans MS Digits',
    family: "'Comic Sans MS', 'Comic Neue', cursive, sans-serif",
    category: 'handwriting',
    description: 'Cheerful informal numerals with unmistakable digit clarity',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'segoe-print',
    name: 'Segoe Print Digits',
    family: "'Segoe Print', 'Comic Sans MS', cursive, sans-serif",
    category: 'handwriting',
    description: 'Handwritten penmanship numbers replicating personal study notes',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'bradley-hand',
    name: 'Bradley Hand Digits',
    family: "'Bradley Hand', 'Bradley Hand ITC', 'Caveat', cursive, sans-serif",
    category: 'handwriting',
    description: 'Hand-lettered calligraphic numerals with organic mathematical character',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'jetbrains-mono',
    name: 'JetBrains Mono',
    family: "'JetBrains Mono', monospace",
    category: 'mono',
    description: 'Technical monospace with slashed zero and distinct character widths',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'fira-code',
    name: 'Fira Code',
    family: "'Fira Code', monospace",
    category: 'mono',
    description: 'High-precision coding font with distinct mathematical numerals',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'space-grotesk',
    name: 'Space Grotesk',
    family: "'Space Grotesk', system-ui, sans-serif",
    category: 'display',
    description: 'Modern neo-grotesque digits with distinct geometric angles',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'outfit',
    name: 'Outfit Numerals',
    family: "'Outfit', system-ui, sans-serif",
    category: 'sans',
    description: 'Crisp circular zeros and balanced proportional numerals',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'katex-classic',
    name: 'KaTeX Classic Serif',
    family: "KaTeX_Main, 'Times New Roman', serif",
    category: 'serif',
    description: 'Traditional academic LaTeX mathematical numerals and signs',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
  {
    id: 'inter',
    name: 'Inter Proportional',
    family: "'Inter', system-ui, sans-serif",
    category: 'sans',
    description: 'Neutral, clean tabular and proportional numerals',
    sampleDigits: '0 1 2 3 4 5 6 7 8 9',
  },
];

export const FONT_PRESETS: FontPresetPairing[] = [
  {
    id: 'handwritten-notes',
    name: 'Revision Notebook',
    badge: 'Handwriting',
    textId: 'segoe-print',
    numberId: 'bradley-hand',
    description: 'Feels like handwritten revision notes straight from a topper notebook',
  },
  {
    id: 'playful-study',
    name: 'Comic & Playful',
    badge: 'Popular',
    textId: 'comic-sans',
    numberId: 'fredoka',
    description: 'Comic Sans MS text paired with smooth friendly Fredoka numbers',
  },
  {
    id: 'rounded-soft',
    name: 'Soft & Rounded',
    badge: 'Gentle',
    textId: 'nunito',
    numberId: 'quicksand',
    description: 'Soft rounded letters paired with curvy, gentle numerals',
  },
  {
    id: 'modern-humanist',
    name: 'Modern Humanist',
    badge: 'Clean',
    textId: 'belanosima',
    numberId: 'quicksand',
    description: 'Crisp Belanosima typography with gentle circular numbers',
  },
  {
    id: 'bold-impact',
    name: 'Bold Display Impact',
    badge: 'High Impact',
    textId: 'bebas-neue',
    numberId: 'space-grotesk',
    description: 'Tall Bebas Neue headings with striking geometric numerals',
  },
  {
    id: 'tech-dev',
    name: 'Code & Tech Mono',
    badge: 'Precision',
    textId: 'inter',
    numberId: 'jetbrains-mono',
    description: 'Clean UI text with technical slashed-zero monospace numerals',
  },
  {
    id: 'modern-clean',
    name: 'Modern Neo-Grotesque',
    badge: 'Crisp',
    textId: 'outfit',
    numberId: 'space-grotesk',
    description: 'Balanced modern sans with striking geometric numerals',
  },
  {
    id: 'academic-math',
    name: 'Classical Scholar',
    badge: 'Textbook',
    textId: 'lora',
    numberId: 'katex-classic',
    description: 'Serif editorial prose with traditional LaTeX mathematical figures',
  },
  {
    id: 'high-energy',
    name: 'Punchy & Bold',
    badge: 'Vibrant',
    textId: 'poppins',
    numberId: 'fira-code',
    description: 'Strong geometric headings paired with precise math glyphs',
  },
];

export const TEXT_FONT_WEIGHTS: FontWeightOption[] = [
  { weight: 400, label: 'Regular', tag: '400' },
  { weight: 500, label: 'Medium', tag: '500' },
  { weight: 600, label: 'Semi-Bold', tag: '600' },
  { weight: 700, label: 'Bold', tag: '700' },
  { weight: 800, label: 'Extra Bold', tag: '800' },
];

export const NUMBER_FONT_WEIGHTS: FontWeightOption[] = [
  { weight: 400, label: 'Regular', tag: '400' },
  { weight: 500, label: 'Medium', tag: '500' },
  { weight: 600, label: 'Semi-Bold', tag: '600' },
  { weight: 700, label: 'Bold', tag: '700' },
  { weight: 800, label: 'Extra Bold', tag: '800' },
  { weight: 900, label: 'Black', tag: '900' },
];

export const DEFAULT_TEXT_FONT = 'nunito';
export const DEFAULT_NUMBER_FONT = 'quicksand';
export const DEFAULT_FONT_SCALE = 100; // in percent
export const DEFAULT_TEXT_FONT_WEIGHT = 500;
export const DEFAULT_NUMBER_FONT_WEIGHT = 600;

export function getInitialTextFont(): string {
  try {
    const saved = localStorage.getItem('fu-font-text');
    if (saved && TEXT_FONT_OPTIONS.some(f => f.id === saved)) {
      return saved;
    }
  } catch {
    // ignore
  }
  return DEFAULT_TEXT_FONT;
}

export function getInitialNumberFont(): string {
  try {
    const saved = localStorage.getItem('fu-font-numbers');
    if (saved && NUMBER_FONT_OPTIONS.some(f => f.id === saved)) {
      return saved;
    }
  } catch {
    // ignore
  }
  return DEFAULT_NUMBER_FONT;
}

export function getInitialFontScale(): number {
  try {
    const saved = localStorage.getItem('fu-font-scale');
    if (saved) {
      const val = parseInt(saved, 10);
      if (val >= 85 && val <= 125) return val;
    }
  } catch {
    // ignore
  }
  return DEFAULT_FONT_SCALE;
}

export function getInitialTextFontWeight(): number {
  try {
    const saved = localStorage.getItem('fu-font-text-weight');
    if (saved) {
      const val = parseInt(saved, 10);
      if ([400, 500, 600, 700, 800].includes(val)) return val;
    }
  } catch {
    // ignore
  }
  return DEFAULT_TEXT_FONT_WEIGHT;
}

export function getInitialNumberFontWeight(): number {
  try {
    const saved = localStorage.getItem('fu-font-numbers-weight');
    if (saved) {
      const val = parseInt(saved, 10);
      if ([400, 500, 600, 700, 800, 900].includes(val)) return val;
    }
  } catch {
    // ignore
  }
  return DEFAULT_NUMBER_FONT_WEIGHT;
}

export function applyFontsToDOM(
  textId: string, 
  numberId: string, 
  scalePercent: number,
  textWeight: number = DEFAULT_TEXT_FONT_WEIGHT,
  numberWeight: number = DEFAULT_NUMBER_FONT_WEIGHT
) {
  const textOpt = TEXT_FONT_OPTIONS.find(f => f.id === textId) || TEXT_FONT_OPTIONS[0];
  const numberOpt = NUMBER_FONT_OPTIONS.find(f => f.id === numberId) || NUMBER_FONT_OPTIONS[0];

  const root = document.documentElement;
  root.style.setProperty('--font-text', textOpt.family);
  root.style.setProperty('--font-numbers', numberOpt.family);
  root.style.setProperty('--font-scale', `${scalePercent}%`);
  root.style.setProperty('--font-text-weight', textWeight.toString());
  root.style.setProperty('--font-numbers-weight', numberWeight.toString());

  try {
    localStorage.setItem('fu-font-text', textId);
    localStorage.setItem('fu-font-numbers', numberId);
    localStorage.setItem('fu-font-scale', scalePercent.toString());
    localStorage.setItem('fu-font-text-weight', textWeight.toString());
    localStorage.setItem('fu-font-numbers-weight', numberWeight.toString());
  } catch {
    // ignore
  }
}
