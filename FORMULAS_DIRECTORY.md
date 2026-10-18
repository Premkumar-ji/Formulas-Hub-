# Formula Universe — Code Directory & Formula Address Guide

All formulas, mathematical theory, derivations, exam tricks, common pitfalls, and structured tables are centralized in a single master source file:

> 📍 **Primary Code File Address:** [`src/data/topics.ts`](src/data/topics.ts)  
> 🏷️ **Type Definitions File Address:** [`src/types/formula.ts`](src/types/formula.ts)  
> 📏 **Total Length:** ~5,203 lines of curated formulas, LaTeX equations, and theory  

---

## 1. Quick Topic Address Map

Below is the directory of all 20 topics with their line numbers in [`src/data/topics.ts`](src/data/topics.ts):

| # | Topic Name | Category Group | Topic ID (`id`) | Starting Line | Formula Count | Exam Weightage |
|---|------------|----------------|-----------------|---------------|---------------|----------------|
| 1 | **Trigonometry** | Trigonometry | `trigonometry` | **Line 16** | 27 formulas | NIMCET ~6-8 Qs |
| 2 | **Probability** | Applied & Stats | `probability` | **Line 403** | 15 formulas | NIMCET ~5-7 Qs |
| 3 | **Quadratic Equations** | Algebra | `quadratic` | **Line 1050** | 9 formulas | NIMCET ~4-5 Qs |
| 4 | **Progressions (AP, GP, HP)** | Algebra | `progressions` | **Line 1258** | 12 formulas | NIMCET ~4-6 Qs |
| 5 | **Logarithms** | Algebra | `logarithms` | **Line 1440** | 8 formulas | NIMCET ~2-3 Qs |
| 6 | **Binomial Theorem** | Algebra | `binomial` | **Line 1541** | 6 formulas | NIMCET ~3-5 Qs |
| 7 | **Permutation & Combination** | Discrete & Modern | `permutations-combinations` | **Line 1623** | 8 formulas | NIMCET ~5-7 Qs |
| 8 | **Matrices & Determinants** | Algebra | `matrices-determinants` | **Line 1842** | 19 formulas | NIMCET ~5-6 Qs |
| 9 | **Coordinate Geometry (Lines & Circles)** | Coordinate Geometry | `coordinate-geometry` | **Line 2866** | 8 formulas | NIMCET ~6-8 Qs |
| 10 | **Conic Sections (Parabola, Ellipse, Hyperbola)** | Coordinate Geometry | `conic-sections` | **Line 3052** | 6 formulas | NIMCET ~4-5 Qs |
| 11 | **Sets, Relations & Boolean Algebra** | Discrete & Modern | `sets-relations` | **Line 3377** | 5 formulas | NIMCET ~4-5 Qs |
| 12 | **Functions & Mappings** | Calculus | `functions` | **Line 3565** | 4 formulas | NIMCET ~4-5 Qs |
| 13 | **Complex Numbers** | Algebra | `complex-numbers` | **Line 3726** | 4 formulas | NIMCET ~4-5 Qs |
| 14 | **Sequence & Series** | Algebra | `sequence-series` | **Line 3868** | 17 formulas | NIMCET ~4-5 Qs |
| 15 | **Statistics** | Applied & Stats | `statistics` | **Line 4097** | 4 formulas | NIMCET ~3-4 Qs |
| 16 | **Vectors & 3D Geometry** | Vectors & 3D | `vectors-3d` | **Line 4202** | 6 formulas | NIMCET ~6-8 Qs |
| 17 | **Differential Calculus** | Calculus | `differential-calculus` | **Line 4283** | 8 formulas | NIMCET ~6-8 Qs |
| 18 | **Integral Calculus** | Calculus | `integral-calculus` | **Line 4486** | 7 formulas | NIMCET ~6-8 Qs |
| 19 | **Differential Equations** | Calculus | `differential-equations` | **Line 4644** | 3 formulas | NIMCET ~3-4 Qs |
| 20 | **Number System & Modular Arithmetic** | Discrete & Modern | `number-system` | **Line 4695** | 20 formulas | NIMCET ~4-6 Qs |

---

## 2. Detailed Subcategory & Theory Addresses

### 📐 1. Trigonometry (`id: "trigonometry"`, Lines 16 – 402)
- **Line 33**: Basic & Reciprocal Identities (`trig-basic`)
- **Line 89**: Pythagorean Identities (`trig-pythagorean`)
- **Line 123**: Compound & Allied Angles (`trig-compound`)
- **Line 171**: Double, Triple & Half Angles (`trig-multiple`)
- **Line 212**: Transformation (Product ↔ Sum) (`trig-trans`)
- **Line 291**: General Solutions of Trig Equations (`trig-general`)
- **Line 330**: Properties of Triangles (SOT, Sine/Cosine Rule) (`trig-properties-triangles`)
- **Line 369**: Competitive Exam Shortcuts & Super Tricks (`trig-shortcuts`)

---

### 🎲 2. Probability (`id: "probability"`, Lines 403 – 1049)
- **Line 423**: Classical Probability, Sample Spaces & Addition Theorems (`prob-fundamentals`)
- **Line 746**: Conditional Probability & Independence (`prob-conditional`)
- **Line 820**: Total Probability & Bayes’ Theorem (`prob-total-bayes`)
- **Line 873**: Random Variables, Binomial, Poisson & Normal Distributions (`prob-distributions`)

---

### 📉 3. Quadratic Equations (`id: "quadratic"`, Lines 1050 – 1257)
- **Line 1068**: Discriminant & Nature of Roots (`quad-basics`)
- **Line 1160**: Formation & Common Roots (`quad-formation-common`)
- **Line 1191**: Vertex Geometry & Location of Roots (`quad-vertex-location`)

---

### 📊 4. Progressions (AP, GP, HP) (`id: "progressions"`, Lines 1258 – 1439)
- **Line 1276**: Arithmetic Progression (AP) (`prog-ap`)
- **Line 1307**: Geometric Progression (GP) (`prog-gp`)
- **Line 1346**: Harmonic Progression & AM-GM-HM Inequalities (`prog-hp-ineq`)
- **Line 1407**: Sum of Special Series / Sigma Formulas (`prog-special-series`)

---

### 🪵 5. Logarithms (`id: "logarithms"`, Lines 1440 – 1540)
- **Line 1458**: Fundamental Laws & Base Change Formulas (`log-laws`)
- **Line 1507**: Logarithmic Inequalities & Characteristic/Mantissa (`log-inequalities`)

---

### 🎈 6. Binomial Theorem (`id: "binomial"`, Lines 1541 – 1622)
- **Line 1559**: General & Middle Terms (`binom-expansion`)
- **Line 1582**: Binomial Coefficient Identities (`binom-coefficients`)

---

### 🔀 7. Permutation & Combination (`id: "permutations-combinations"`, Lines 1623 – 1841)
- **Line 1641**: Arrangements (Permutations) & Selections (`pnc-core`)
- **Line 1724**: Distributions, Derangements & Sum of Numbers (`pnc-advanced-distribution`)

---

### 🔲 8. Matrices & Determinants (`id: "matrices-determinants"`, Lines 1842 – 2865)
- **Line 1862**: Types & Classifications of Matrices (`mat-cat-types`)
- **Line 2060**: Basic Operations & Fundamental Properties (`mat-cat-basic-properties`)
- **Line 2190**: Row & Column Transformations (`mat-cat-row-col-ops`)
- **Line 2291**: Special Matrix Forms & Factor Theorems (`mat-cat-special-forms`)
- **Line 2518**: Matrix–Determinant Properties & Connections (`mat-cat-det-properties`)
- **Line 2582**: Adjoint, Inverse & Systems of Linear Equations (`mat-cat-adjoint-inverse`)
- **Line 2757**: NIMCET High-Yield Patterns & Shortcuts (`mat-cat-nimcet-shortcuts`)

---

### 📍 9. Coordinate Geometry (`id: "coordinate-geometry"`, Lines 2866 – 3100)
- **Line 2884**: Straight Lines & Distance Formulas (`coord-lines`)
  - Standard Forms of Straight Line (`line-forms`)
  - Perpendicular Distance (`line-perp-dist`)
  - Distance Between Parallel Lines (`line-parallel-dist`)
  - Angle Between Two Lines (`line-angle-between`)
  - **Angle Bisectors Between Two Lines (Acute & Obtuse)** (`line-angle-bisectors`)
- **Line 3016**: Circles, Intercepts & Tangents (`coord-circles`)

---

### 🪐 10. Conic Sections (`id: "conic-sections"`, Lines 3052 – 3376)
- **Line 3070**: Parabola ($y^2 = 4ax$) (`conic-parabola`)
- **Line 3146**: Ellipse ($\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$) (`conic-ellipse`)
- **Line 3236**: Hyperbola & Rectangular Hyperbola (`conic-hyperbola`)

---

### 🔘 11. Sets, Relations & Boolean Algebra (`id: "sets-relations"`, Lines 3377 – 3564)
- **Line 3395**: Set Operations & Cardinality (`sets-algebra`)
- **Line 3417**: Types of Relations & Counting Formulas (`relations-types`)
- **Line 3506**: Boolean Algebra Laws & Logic (`boolean-algebra-laws`)

---

### 📈 12. Functions & Mappings (`id: "functions"`, Lines 3565 – 3725)
- **Line 3583**: Types of Functions & Mapping Counts (`func-types`)
- **Line 3634**: Even, Odd & Periodic Functions (`func-even-odd-period`)

---

### 🌀 13. Complex Numbers (`id: "complex-numbers"`, Lines 3726 – 3867)
- **Line 3744**: Forms, Modulus, Argument & Conjugate (`complex-forms`)
- **Line 3805**: De Moivre’s Theorem & Cube Roots of Unity (`complex-roots-unity`)

---

### 🧬 14. Sequence & Series (`id: "sequence-series"`, Lines 3868 – 4096)
- **Line 3888**: Maclaurin & Binomial Expansions ($e^x, \ln(1+x), \sin x, \cos x$) (`series-expansions`)
- **Line 4055**: Arithmetic-Geometric Progression (AGP) (`series-agp`)
- **Line 4071**: Telescoping Series & Partial Fractions (`series-telescoping`)

---

### 📊 15. Statistics (`id: "statistics"`, Lines 4097 – 4201)
- **Line 4115**: Measures of Central Tendency (Mean, Median, Mode) (`stats-central`)
- **Line 4130**: Variance, Standard Deviation & Coefficient of Variation (`stats-dispersion`)

---

### 🏹 16. Vectors & 3D Geometry (`id: "vectors-3d"`, Lines 4202 – 4282)
- **Line 4220**: Dot, Cross & Scalar/Vector Triple Products (`vector-products`)
- **Line 4251**: 3D Lines, Planes, Direction Cosines & Shortest Distance (`geom-3d-lines-planes`)

---

### ⚡ 17. Differential Calculus (`id: "differential-calculus"`, Lines 4283 – 4485)
- **Line 4301**: Standard Limits & L'Hôpital's Rule (`diff-limits`)
- **Line 4366**: Standard Derivatives, Product & Chain Rules (`diff-derivatives`)
- **Line 4454**: Applications of Derivatives, Tangents, Normals & Maxima/Minima (`diff-applications`)

---

### ♾️ 18. Integral Calculus (`id: "integral-calculus"`, Lines 4486 – 4643)
- **Line 4504**: Standard Indefinite Integrals (`int-standard`)
- **Line 4559**: Integration by Parts & Super Shortcuts (`int-parts-shortcuts`)
- **Line 4582**: Definite Integrals, Properties & King's Property (`int-definite-props`)

---

### 🔄 19. Differential Equations (`id: "differential-equations"`, Lines 4644 – 4694)
- **Line 4662**: Order, Degree & Linear DE (Integrating Factor) (`diffeq-basics-linear`)

---

### 🔢 20. Number System & Modular Arithmetic (`id: "number-system"`, Lines 4695 – 5202)
- **Line 4716**: 1. Divisibility Rules & Rule of 1001 (`num-divisibility`)
- **Line 4811**: 2. Unit Digit & Cyclicity (`num-unit-digit`)
- **Line 4881**: 3. GCD (HCF) & LCM — Theory & Word Problems (`num-gcd-lcm`)
- **Line 4936**: 4. Number Sets, Prime Factors & Divisors Count (`num-factors-divisors`)
- **Line 4982**: 5. Remainder Theorems & Algebraic Divisibility (`num-remainders`)
- **Line 5036**: 6. Advanced Modular Theorems (Fermat, Euler & Wilson) (`num-modular-theorems`)
- **Line 5071**: 7. Trailing Zeros & Legendre's Formula (`num-trailing-zeros`)
- **Line 5098**: 8. Number Base Conversions (`num-bases`)
- **Line 5146**: 9. NIMCET Exam Rapid Recall Summary (`num-nimcet-summary`)

---

## 3. Data Schema in Code

Each formula in `src/data/topics.ts` follows this exact TypeScript schema (from `src/types/formula.ts`):

```typescript
export interface FormulaItem {
  id: string;             // Unique formula ID (e.g., 'trig-reciprocal')
  title: string;          // Human-readable formula name
  formula: string;        // Clean plain-text representation
  latex?: string;         // Typeset LaTeX equation rendered via KaTeX
  explanation: string;    // In-depth concept explanation / proof / derivation
  mustKnow?: boolean;     // Priority badge (marked with star)
  shortcut?: string;      // Quick calculation trick or exam shortcut
  commonMistake?: string; // Common trap students fall into
  remember?: string;      // Memory aid or mnemonic
  tags?: string[];        // Search keywords (e.g. ['nimcet', 'identities'])
  table?: FormulaTable;   // Structured side-by-side comparison table
}
```

---

## 4. How the Rest of the App Uses This File

- **`src/components/TopicView.tsx`**: Renders all formulas, subcategories, shortcuts, and KaTeX LaTeX for the currently selected topic.
- **`src/components/CheatSheetModal.tsx`**: Filters all `mustKnow: true` formulas across `TOPICS_DATA` to generate the printable revision sheet.
- **`src/components/DailyPracticeModal.tsx`**: Randomly picks formulas from `TOPICS_DATA` for daily flashcard and recall tests.
- **`server.ts`**: Imports `TOPICS_DATA` to select formulas for scheduled background Web Push notifications.
- **`src/components/IndexView.tsx`**: Uses `TOPICS_DATA` to render the home screen topic cards, search filtering, and progress counters.
