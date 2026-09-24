export interface FormulaItem {
  id: string;
  title: string;
  formula: string; // Plain-text or LaTeX representation
  latex?: string;  // Explicit KaTeX LaTeX typesetting string
  explanation: string;
  mustKnow?: boolean;
  shortcut?: string;
  commonMistake?: string;
  remember?: string;
  tags?: string[];
}

export interface FormulaCategory {
  id: string;
  name: string;
  description?: string;
  badge?: string;
  formulas: FormulaItem[];
}

export type CategoryGroup =
  | 'All'
  | 'Trigonometry'
  | 'Algebra'
  | 'Calculus'
  | 'Coordinate Geometry'
  | 'Vectors & 3D'
  | 'Discrete & Modern'
  | 'Applied & Stats';

export interface TopicData {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  accentColor: string; // Tailwind color classes for buttons/borders
  gradient: string; // Tailwind gradient classes
  bgTint: string;
  categoryGroup: CategoryGroup;
  description: string;
  examWeightage: string; // e.g. "High Frequency (NIMCET ~4-6 Qs)"
  categories: FormulaCategory[];
  quickTips?: string[];
}

export interface SearchResult {
  topic: TopicData;
  category: FormulaCategory;
  formula: FormulaItem;
}
