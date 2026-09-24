import { TopicData } from '../types/formula';

export const CATEGORY_GROUPS = [
  'All',
  'Trigonometry',
  'Algebra',
  'Calculus',
  'Coordinate Geometry',
  'Vectors & 3D',
  'Discrete & Modern',
  'Applied & Stats',
] as const;

export const TOPICS_DATA: TopicData[] = [
  {
    "id": "trigonometry",
    "slug": "trigonometry",
    "name": "Trigonometry",
    "shortName": "Trig",
    "icon": "📐",
    "categoryGroup": "Trigonometry",
    "gradient": "from-violet-600 to-indigo-600",
    "accentColor": "border-violet-500 text-violet-600",
    "bgTint": "bg-violet-500/10 text-violet-600",
    "description": "Identities, allied angles, compound, double, half-angles, general solutions, properties of triangles & shortcuts.",
    "examWeightage": "Very High (NIMCET ~6-8 Qs)",
    "quickTips": [
      "Remember cos(A-B) has a plus sign: cosA cosB + sinA sinB.",
      "For general solutions, check domain restrictions (e.g. tanθ undefined at (2n+1)π/2).",
      "In a triangle, A+B+C = π ⇒ tanA + tanB + tanC = tanA·tanB·tanC."
    ],
    "categories": [
      {
        "id": "trig-basic",
        "name": "Basic & Reciprocal Identities",
        "formulas": [
          {
            "id": "trig-reciprocal",
            "title": "Reciprocal Identities",
            "formula": "sinθ = 1/cosecθ  |  cosθ = 1/secθ  |  tanθ = 1/cotθ",
            "explanation": "Fundamental reciprocal relations defined for all real values where denominator ≠ 0.",
            "mustKnow": true,
            "remember": "cosecθ·sinθ = 1, secθ·cosθ = 1, tanθ·cotθ = 1.",
            "latex": "\\sin\\theta = \\frac{1}{\\csc\\theta}, \\quad \\cos\\theta = \\frac{1}{\\sec\\theta}, \\quad \\tan\\theta = \\frac{1}{\\cot\\theta}"
          },
          {
            "id": "trig-quotient",
            "title": "Quotient Identities",
            "formula": "tanθ = sinθ / cosθ  |  cotθ = cosθ / sinθ",
            "explanation": "Relates tangent and cotangent directly to sine and cosine.",
            "mustKnow": true,
            "latex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}, \\quad \\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}"
          }
        ]
      },
      {
        "id": "trig-pythagorean",
        "name": "Pythagorean Identities",
        "formulas": [
          {
            "id": "trig-pyth-1",
            "title": "Fundamental Pythagorean",
            "formula": "sin²θ + cos²θ = 1",
            "explanation": "Primary circular identity valid for all real angles θ.",
            "mustKnow": true,
            "shortcut": "🎯 Shortcut: 1 − sin²θ = cos²θ, 1 − cos²θ = sin²θ.",
            "latex": "\\sin^2\\theta + \\cos^2\\theta = 1"
          },
          {
            "id": "trig-pyth-2",
            "title": "Secant & Tangent Form",
            "formula": "sec²θ − tan²θ = 1  ⇒  (secθ − tanθ)(secθ + tanθ) = 1",
            "explanation": "Directly implies (secθ − tanθ) and (secθ + tanθ) are reciprocal pairs.",
            "mustKnow": true,
            "shortcut": "🎯 Exam Trick: If secθ + tanθ = k, then secθ − tanθ = 1/k. Hence 2secθ = k + 1/k.",
            "remember": "Valid for θ ≠ (2n+1)π/2.",
            "latex": "\\sec^2\\theta - \\tan^2\\theta = 1 \\implies (\\sec\\theta - \\tan\\theta)(\\sec\\theta + \\tan\\theta) = 1"
          },
          {
            "id": "trig-pyth-3",
            "title": "Cosecant & Cotangent Form",
            "formula": "cosec²θ − cot²θ = 1  ⇒  (cosecθ − cotθ)(cosecθ + cotθ) = 1",
            "explanation": "Reciprocal conjugate pair identity for cosecant and cotangent.",
            "mustKnow": true,
            "shortcut": "🎯 Exam Trick: If cosecθ + cotθ = m, then cosecθ − cotθ = 1/m.",
            "latex": "\\csc^2\\theta - \\cot^2\\theta = 1 \\implies (\\csc\\theta - \\cot\\theta)(\\csc\\theta + \\cot\\theta) = 1"
          }
        ]
      },
      {
        "id": "trig-compound",
        "name": "Compound & Allied Angles",
        "formulas": [
          {
            "id": "trig-sin-compound",
            "title": "sin(A ± B)",
            "formula": "sin(A ± B) = sinA cosB ± cosA sinB",
            "explanation": "Expansion for sine of sum or difference of two angles.",
            "mustKnow": true,
            "latex": "\\sin(A \\pm B) = \\sin A \\cos B \\pm \\cos A \\sin B"
          },
          {
            "id": "trig-cos-compound",
            "title": "cos(A ± B)",
            "formula": "cos(A ± B) = cosA cosB ∓ sinA sinB",
            "explanation": "Sign alternates: plus becomes minus, minus becomes plus.",
            "mustKnow": true,
            "commonMistake": "⚠️ Sign inversion trap: cos(A+B) has a minus sign, cos(A-B) has a plus sign!",
            "latex": "\\cos(A \\pm B) = \\cos A \\cos B \\mp \\sin A \\sin B"
          },
          {
            "id": "trig-tan-compound",
            "title": "tan(A ± B)",
            "formula": "tan(A ± B) = (tanA ± tanB) / (1 ∓ tanA tanB)",
            "explanation": "Used frequently in slope calculations and coordinate geometry angle between lines.",
            "mustKnow": true,
            "shortcut": "🎯 Special form: tan(π/4 + θ) = (1 + tanθ)/(1 − tanθ) = (cosθ + sinθ)/(cosθ − sinθ).",
            "latex": "\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A \\tan B}"
          },
          {
            "id": "trig-sin-product-identity",
            "title": "sin(A+B)·sin(A−B)",
            "formula": "sin(A+B) sin(A−B) = sin²A − sin²B = cos²B − cos²A",
            "explanation": "Very high frequency identity in competitive simplification.",
            "mustKnow": true,
            "latex": "\\sin (A+B) \\sin (A−B) = \\sin ^2A − \\sin ^2B = \\cos ^2B − \\cos ^2A"
          },
          {
            "id": "trig-cos-product-identity",
            "title": "cos(A+B)·cos(A−B)",
            "formula": "cos(A+B) cos(A−B) = cos²A − sin²B = cos²B − sin²A",
            "explanation": "Mixed quadratic trigonometric product.",
            "mustKnow": true,
            "latex": "\\cos (A+B) \\cos (A−B) = \\cos ^2A − \\sin ^2B = \\cos ^2B − \\sin ^2A"
          }
        ]
      },
      {
        "id": "trig-multiple",
        "name": "Double, Triple & Half Angles",
        "formulas": [
          {
            "id": "trig-sin-2a",
            "title": "Double Angle: sin2θ",
            "formula": "sin2θ = 2 sinθ cosθ = (2 tanθ) / (1 + tan²θ)",
            "explanation": "Expressible in product form or rational tan form.",
            "mustKnow": true,
            "latex": "\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = \\frac{2\\tan\\theta}{1 + \\tan^2\\theta}"
          },
          {
            "id": "trig-cos-2a",
            "title": "Double Angle: cos2θ (4 forms)",
            "formula": "cos2θ = cos²θ − sin²θ = 2cos²θ − 1 = 1 − 2sin²θ = (1 − tan²θ) / (1 + tan²θ)",
            "explanation": "Crucial power-reduction formulas: 1 + cos2θ = 2cos²θ, 1 − cos2θ = 2sin²θ.",
            "mustKnow": true,
            "shortcut": "🎯 Integration Trick: Replace sin²θ with (1−cos2θ)/2 and cos²θ with (1+cos2θ)/2.",
            "latex": "\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta = \\frac{1 - \\tan^2\\theta}{1 + \\tan^2\\theta}"
          },
          {
            "id": "trig-tan-2a",
            "title": "Double Angle: tan2θ",
            "formula": "tan2θ = (2 tanθ) / (1 − tan²θ)",
            "explanation": "Denominator has minus (unlike sin2θ which has plus in denominator).",
            "mustKnow": true,
            "commonMistake": "⚠️ Do not confuse tan2θ = 2t/(1−t²) with sin2θ = 2t/(1+t²).",
            "latex": "\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}"
          },
          {
            "id": "trig-triple",
            "title": "Triple Angles: sin3θ & cos3θ",
            "formula": "sin3θ = 3sinθ − 4sin³θ  |  cos3θ = 4cos³θ − 3cosθ",
            "explanation": "Memory cue: sin3θ is \"34\" (3 - 4*cube), cos3θ is \"43\" (4*cube - 3).",
            "mustKnow": true,
            "shortcut": "🎯 Formula: tan3θ = (3tanθ − tan³θ) / (1 − 3tan²θ).",
            "latex": "sin3 \\theta  = 3sin \\theta  − 4sin^3 \\theta   |  cos3 \\theta  = 4cos^3 \\theta  − 3cos \\theta "
          }
        ]
      },
      {
        "id": "trig-trans",
        "name": "Transformation (Product ↔ Sum)",
        "formulas": [
          {
            "id": "trig-cd-formulas",
            "title": "C-D Sum to Product Formulas",
            "formula": "sinC + sinD = 2 sin((C+D)/2) cos((C−D)/2)\nsinC − sinD = 2 cos((C+D)/2) sin((C−D)/2)\ncosC + cosD = 2 cos((C+D)/2) cos((C−D)/2)\ncosC − cosD = 2 sin((C+D)/2) sin((D−C)/2) = −2 sin((C+D)/2) sin((C−D)/2)",
            "explanation": "Converts sums/differences of wave terms into factored products.",
            "mustKnow": true,
            "commonMistake": "⚠️ For cosC − cosD, notice the angle order inside the second sine is (D−C)/2 or a negative sign outside!",
            "latex": "\\begin{aligned} sinC + sinD = 2 \\sin ((C+D)/2) \\cos ((C−D)/2) \\\\ sinC − sinD = 2 \\cos ((C+D)/2) \\sin ((C−D)/2) \\\\ cosC + cosD = 2 \\cos ((C+D)/2) \\cos ((C−D)/2) \\\\ cosC − cosD = 2 \\sin ((C+D)/2) \\sin ((D−C)/2) = −2 \\sin ((C+D)/2) \\sin ((C−D)/2) \\end{aligned}"
          },
          {
            "id": "trig-prod-to-sum",
            "title": "Product to Sum Formulas",
            "formula": "2 sinA cosB = sin(A+B) + sin(A−B)\n2 cosA sinB = sin(A+B) − sin(A−B)\n2 cosA cosB = cos(A+B) + cos(A−B)\n2 sinA sinB = cos(A−B) − cos(A+B)",
            "explanation": "Standard integration tool to linearize multiplied sine/cosine.",
            "mustKnow": true,
            "latex": "\\begin{aligned} 2\\sin A\\cos B &= \\sin(A+B) + \\sin(A-B) \\\\ 2\\cos A\\sin B &= \\sin(A+B) - \\sin(A-B) \\\\ 2\\cos A\\cos B &= \\cos(A+B) + \\cos(A-B) \\\\ 2\\sin A\\sin B &= \\cos(A-B) - \\cos(A+B) \\end{aligned}"
          }
        ]
      },
      {
        "id": "trig-general",
        "name": "General Solutions",
        "formulas": [
          {
            "id": "trig-gen-sin",
            "title": "sinθ = sinα",
            "formula": "θ = nπ + (−1)ⁿ α,   n ∈ ℤ",
            "explanation": "Alternates sign depending on whether n is even or odd.",
            "mustKnow": true,
            "latex": " \\theta  = n \\pi  + (−1)^n  \\alpha ,   n  \\in  ℤ"
          },
          {
            "id": "trig-gen-cos",
            "title": "cosθ = cosα",
            "formula": "θ = 2nπ ± α,   n ∈ ℤ",
            "explanation": "Symmetric around multiples of 2π.",
            "mustKnow": true,
            "latex": " \\theta  = 2n \\pi   \\pm   \\alpha ,   n  \\in  ℤ"
          },
          {
            "id": "trig-gen-tan",
            "title": "tanθ = tanα",
            "formula": "θ = nπ + α,   n ∈ ℤ",
            "explanation": "Simplest period: tan repeats every π radians.",
            "mustKnow": true,
            "latex": " \\theta  = n \\pi  +  \\alpha ,   n  \\in  ℤ"
          },
          {
            "id": "trig-gen-squares",
            "title": "sin²θ = sin²α | cos²θ = cos²α | tan²θ = tan²α",
            "formula": "θ = nπ ± α,   n ∈ ℤ",
            "explanation": "All three squared trigonometric equations have the exact same unified general solution.",
            "mustKnow": true,
            "shortcut": "🎯 Huge time-saver: If any squared trig ratio equals squared alpha, answer is always nπ ± α.",
            "latex": " \\theta  = n \\pi   \\pm   \\alpha ,   n  \\in  ℤ"
          }
        ]
      },
      {
        "id": "trig-properties-triangles",
        "name": "Properties of Triangles (SOT)",
        "formulas": [
          {
            "id": "trig-sine-rule",
            "title": "Sine Rule",
            "formula": "a / sinA = b / sinB = c / sinC = 2R",
            "explanation": "Relates sides to opposite angles, where R is the circumradius of the triangle.",
            "mustKnow": true,
            "shortcut": "🎯 Area Δ = abc / (4R) = r·s (where s = (a+b+c)/2, r is inradius).",
            "latex": "\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R"
          },
          {
            "id": "trig-cosine-rule",
            "title": "Cosine Rule",
            "formula": "cosA = (b² + c² − a²) / (2bc)\ncosB = (a² + c² − b²) / (2ac)\ncosC = (a² + b² − c²) / (2ab)",
            "explanation": "Used when 3 sides are known or 2 sides and included angle are known.",
            "mustKnow": true,
            "latex": "\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}, \\quad a^2 = b^2 + c^2 - 2bc\\cos A"
          },
          {
            "id": "trig-projection-rule",
            "title": "Projection Formulae",
            "formula": "a = b cosC + c cosB\nb = c cosA + a cosC\nc = a cosB + b cosA",
            "explanation": "Projecting adjacent sides onto the base side.",
            "mustKnow": false,
            "latex": "\\begin{aligned} a = b cosC + c cosB \\\\ b = c cosA + a cosC \\\\ c = a cosB + b cosA \\end{aligned}"
          },
          {
            "id": "trig-napier-analogy",
            "title": "Napier's Analogy (Tangent Rule)",
            "formula": "tan((B − C) / 2) = ((b − c) / (b + c)) · cot(A / 2)",
            "explanation": "Converts difference of two angles to side ratio and half-angle cotangent.",
            "mustKnow": false,
            "latex": "\\tan ((B − C) / 2) = ((b − c) / (b + c))  \\cdot  \\cot \\frac{A}{2}"
          }
        ]
      },
      {
        "id": "trig-shortcuts",
        "name": "Competitive Exam Shortcuts & Super Tricks",
        "formulas": [
          {
            "id": "trig-trick-60",
            "title": "Special Product: θ, (60°−θ), (60°+θ)",
            "formula": "sinθ · sin(60°−θ) · sin(60°+θ) = ¼ sin3θ\ncosθ · cos(60°−θ) · cos(60°+θ) = ¼ cos3θ\ntanθ · tan(60°−θ) · tan(60°+θ) = tan3θ",
            "explanation": "Most frequently repeated NIMCET/JEE question shortcut (e.g. sin20° sin40° sin80° = 1/4 sin60° = √3/16).",
            "mustKnow": true,
            "shortcut": "🎯 Direct formula: Evaluates products of 3 angles spaced by 60° instantly in 3 seconds!",
            "latex": "\\begin{aligned} \\sin\\theta \\cdot \\sin(60^\\circ - \\theta) \\cdot \\sin(60^\\circ + \\theta) &= \\frac{1}{4}\\sin 3\\theta \\\\ \\cos\\theta \\cdot \\cos(60^\\circ - \\theta) \\cdot \\cos(60^\\circ + \\theta) &= \\frac{1}{4}\\cos 3\\theta \\\\ \\tan\\theta \\cdot \\tan(60^\\circ - \\theta) \\cdot \\tan(60^\\circ + \\theta) &= \\tan 3\\theta \\end{aligned}"
          },
          {
            "id": "trig-max-min",
            "title": "Maximum & Minimum of a sinθ + b cosθ",
            "formula": "Range = [−√(a² + b²),  +√(a² + b²)]",
            "explanation": "Maximum value is +√(a²+b²), minimum value is −√(a²+b²).",
            "mustKnow": true,
            "shortcut": "🎯 Example: Range of 3sinθ + 4cosθ is [−5, +5]. Range of 3sinθ + 4cosθ + 7 is [2, 12].",
            "latex": "-\\sqrt{a^2 + b^2} \\le a\\sin\\theta + b\\cos\\theta \\le \\sqrt{a^2 + b^2}"
          },
          {
            "id": "trig-triangle-tan-identity",
            "title": "Conditional Identity in ΔABC (A+B+C=180°)",
            "formula": "tanA + tanB + tanC = tanA · tanB · tanC\ncotA cotB + cotB cotC + cotC cotA = 1",
            "explanation": "Sum of tangents equals product of tangents in any plane triangle.",
            "mustKnow": true,
            "latex": "\\begin{aligned} \\tan A + \\tan B + \\tan C &= \\tan A\\tan B\\tan C \\\\ \\cot A\\cot B + \\cot B\\cot C + \\cot C\\cot A &= 1 \\end{aligned}"
          }
        ]
      }
    ]
  },
  {
    "id": "probability",
    "slug": "probability",
    "name": "Probability",
    "shortName": "Prob",
    "icon": "🎲",
    "categoryGroup": "Applied & Stats",
    "gradient": "from-pink-500 to-rose-600",
    "accentColor": "border-pink-500 text-pink-600",
    "bgTint": "bg-pink-500/10 text-pink-600",
    "description": "Classical, conditional, Bayes’ theorem, independent events, binomial distribution, expectation & variance.",
    "examWeightage": "Very High (NIMCET ~5-7 Qs)",
    "quickTips": [
      "P(A ∪ B) = P(A) + P(B) − P(A ∩ B). If mutually exclusive, P(A ∩ B) = 0.",
      "For independent events: P(A ∩ B) = P(A) · P(B).",
      "Odds in favour of event A = P(A) : P(A'). Odds against A = P(A') : P(A)."
    ],
    "categories": [
      {
        "id": "prob-fundamentals",
        "name": "Basic Probability & Addition Theorem",
        "formulas": [
          {
            "id": "prob-classical",
            "title": "Classical Probability & Range",
            "formula": "P(E) = n(E) / n(S),   0 ≤ P(E) ≤ 1\nP(E') = 1 − P(E)",
            "explanation": "Ratio of favourable elementary outcomes to total sample space size.",
            "mustKnow": true,
            "latex": "P(E) = \\frac{n(E)}{n(S)}, \\quad 0 \\le P(E) \\le 1, \\quad P(E') = 1 - P(E)"
          },
          {
            "id": "prob-addition-2",
            "title": "Addition Theorem (2 Events)",
            "formula": "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
            "explanation": "If A and B are mutually exclusive (disjoint), P(A ∩ B) = 0 ⇒ P(A ∪ B) = P(A) + P(B).",
            "mustKnow": true,
            "shortcut": "🎯 Exactly one of A or B occurs = P(A ∪ B) − P(A ∩ B) = P(A) + P(B) − 2P(A ∩ B).",
            "latex": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
          },
          {
            "id": "prob-addition-3",
            "title": "Addition Theorem (3 Events)",
            "formula": "P(A∪B∪C) = P(A) + P(B) + P(C) − [P(A∩B) + P(B∩C) + P(C∩A)] + P(A∩B∩C)",
            "explanation": "Inclusion-Exclusion principle for three arbitrary events.",
            "mustKnow": true,
            "latex": "P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - [P(A \\cap B) + P(B \\cap C) + P(C \\cap A)] + P(A \\cap B \\cap C)"
          }
        ]
      },
      {
        "id": "prob-conditional",
        "name": "Conditional Probability & Independence",
        "formulas": [
          {
            "id": "prob-cond-def",
            "title": "Conditional Probability P(A | B)",
            "formula": "P(A | B) = P(A ∩ B) / P(B),   where P(B) > 0",
            "explanation": "Probability of event A occurring given that event B has already occurred.",
            "mustKnow": true,
            "latex": "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(B) > 0"
          },
          {
            "id": "prob-independent",
            "title": "Independent Events Condition",
            "formula": "P(A ∩ B) = P(A) · P(B)   ⇔   P(A | B) = P(A)",
            "explanation": "Occurrence of B gives no information regarding the likelihood of A.",
            "mustKnow": true,
            "commonMistake": "⚠️ Mutually exclusive ≠ Independent! Two non-empty events cannot be both simultaneously.",
            "latex": "P(A \\cap B) = P(A) \\cdot P(B) \\iff P(A \\mid B) = P(A)"
          },
          {
            "id": "prob-at-least-one",
            "title": "At Least One Event Occurring (Independent)",
            "formula": "P(at least one of A₁, A₂, ..., Aₙ) = 1 − P(A₁') · P(A₂') · ... · P(Aₙ')",
            "explanation": "Essential competitive shortcut: complement of \"none occurs\".",
            "mustKnow": true,
            "shortcut": "🎯 High-yield trick: Whenever question asks \"at least one\", always calculate 1 − P(None)!",
            "latex": "P(\\text{at least one of } A_1, \\dots, A_n) = 1 - P(A_1')P(A_2')\\dots P(A_n')"
          }
        ]
      },
      {
        "id": "prob-total-bayes",
        "name": "Total Probability & Bayes’ Theorem",
        "formulas": [
          {
            "id": "prob-total-law",
            "title": "Law of Total Probability",
            "formula": "P(A) = ∑ [P(Eᵢ) · P(A | Eᵢ)]   for partition {E₁, E₂, ..., Eₙ}",
            "explanation": "Weighted sum of probabilities across mutually exclusive exhaustive states.",
            "mustKnow": true,
            "latex": "P(A) = ∑ [P(E_i)  \\cdot  P(A | E_i)]   for partition {E_1, E_2, ..., E_n}"
          },
          {
            "id": "prob-bayes",
            "title": "Bayes' Theorem (Reverse Probability)",
            "formula": "P(Eₖ | A) = [P(Eₖ) · P(A | Eₖ)] / (∑ [P(Eᵢ) · P(A | Eᵢ)])",
            "explanation": "Updates prior probability P(Eₖ) into posterior probability after evidence A is observed.",
            "mustKnow": true,
            "shortcut": "🎯 Template: Posterior = (Path probability of interest) / (Sum of all possible paths).",
            "latex": "P(A_k \\mid B) = \\frac{P(A_k)P(B \\mid A_k)}{\\sum_{i=1}^n P(A_i)P(B \\mid A_i)}"
          }
        ]
      },
      {
        "id": "prob-distributions",
        "name": "Random Variables & Binomial Distribution",
        "formulas": [
          {
            "id": "prob-expectation-variance",
            "title": "Expectation E(X) & Variance Var(X)",
            "formula": "E(X) = μ = ∑ xᵢ P(xᵢ)\nVar(X) = σ² = E(X²) − [E(X)]² = ∑ xᵢ² P(xᵢ) − μ²",
            "explanation": "Measures central location and dispersion of a discrete random variable.",
            "mustKnow": true,
            "shortcut": "🎯 Linear properties: E(aX + b) = a E(X) + b  |  Var(aX + b) = a² Var(X).",
            "latex": "\\begin{aligned} E(X) =  \\mu  = ∑ x_i P(x_i) \\\\ Var(X) = σ^2 = E(X^2) − [E(X)]^2 = ∑ x_i^2 P(x_i) −  \\mu ^2 \\end{aligned}"
          },
          {
            "id": "prob-binomial-dist",
            "title": "Binomial Distribution B(n, p)",
            "formula": "P(X = r) = ⁿCᵣ · pʳ · qⁿ⁻ʳ,   where q = 1 − p\nMean = n·p  |  Variance = n·p·q  |  SD = √(n·p·q)",
            "explanation": "Applies to n independent Bernoulli trials with constant probability p.",
            "mustKnow": true,
            "shortcut": "🎯 Fact: For binomial distribution, Mean > Variance (since q < 1).",
            "latex": "\\begin{aligned} P(X = r) = ^nC_r  \\cdot  pʳ  \\cdot  q^n⁻ʳ,   where q = 1 − p \\\\ Mean = n \\cdot p  |  Variance = n \\cdot p \\cdot q  |  SD = \\sqrt{n \\cdot p \\cdot q} \\end{aligned}"
          }
        ]
      }
    ]
  },
  {
    "id": "quadratic",
    "slug": "quadratic",
    "name": "Quadratic Equations",
    "shortName": "Quad",
    "icon": "⚡",
    "categoryGroup": "Algebra",
    "gradient": "from-amber-500 to-orange-600",
    "accentColor": "border-amber-500 text-amber-600",
    "bgTint": "bg-amber-500/10 text-amber-600",
    "description": "Roots, discriminant, Vieta’s formulas, common roots, location of roots & vertex geometry.",
    "examWeightage": "High (NIMCET ~4-5 Qs)",
    "quickTips": [
      "Sum of roots α + β = −b/a, Product αβ = c/a, Difference |α − β| = √D / |a|.",
      "If coefficients are rational and D > 0 not a perfect square, roots occur in conjugate surd pairs (p ± √q).",
      "For ax² + bx + c = 0 to have roots of opposite signs: c/a < 0."
    ],
    "categories": [
      {
        "id": "quad-basics",
        "name": "Discriminant & Nature of Roots",
        "formulas": [
          {
            "id": "quad-formula",
            "title": "Quadratic Formula & Discriminant",
            "formula": "x = (−b ± √D) / (2a),   where D = b² − 4ac",
            "explanation": "Roots of standard equation ax² + bx + c = 0 (a ≠ 0).",
            "mustKnow": true,
            "latex": "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad D = b^2 - 4ac"
          },
          {
            "id": "quad-nature",
            "title": "Nature of Roots based on D",
            "formula": "D > 0: Real and distinct roots\nD = 0: Real and equal roots (x = −b/2a)\nD < 0: Complex conjugate roots (p ± iq)\nD is perfect square (rational coeffs): Rational roots",
            "explanation": "Key determinant of root multiplicity and real/complex nature.",
            "mustKnow": true,
            "latex": "\\begin{aligned} D &> 0 \\implies \\text{Real and distinct} \\\\ D &= 0 \\implies \\text{Real and equal } \\left(x = -\\frac{b}{2a}\\right) \\\\ D &< 0 \\implies \\text{Complex conjugates } (p \\pm iq) \\end{aligned}"
          },
          {
            "id": "quad-vieta",
            "title": "Vieta's Relations (Roots & Coeffs)",
            "formula": "α + β = −b/a  |  α · β = c/a  |  |α − β| = √D / |a|",
            "explanation": "Symmetric root relations that avoid solving the actual quadratic.",
            "mustKnow": true,
            "shortcut": "🎯 Useful identities: α² + β² = (α+β)² − 2αβ  |  α³ + β³ = (α+β)³ − 3αβ(α+β).",
            "latex": "\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}, \\quad |\\alpha - \\beta| = \\frac{\\sqrt{D}}{|a|}"
          }
        ]
      },
      {
        "id": "quad-formation-common",
        "name": "Formation & Common Roots",
        "formulas": [
          {
            "id": "quad-formation",
            "title": "Formation of Equation from Roots",
            "formula": "x² − (Sum of Roots)·x + (Product of Roots) = 0  ⇒  x² − S·x + P = 0",
            "explanation": "Equation with roots α and β.",
            "mustKnow": true,
            "latex": "x^2 - (\\alpha + \\beta)x + \\alpha\\beta = 0 \\implies x^2 - Sx + P = 0"
          },
          {
            "id": "quad-one-common",
            "title": "Condition for ONE Common Root",
            "formula": "(c₁a₂ − c₂a₁)² = (a₁b₂ − a₂b₁)(b₁c₂ − b₂c₁)",
            "explanation": "Cross-multiplication condition between a₁x²+b₁x+c₁=0 and a₂x²+b₂x+c₂=0.",
            "mustKnow": true,
            "shortcut": "🎯 Easy method: Subtract the two equations after making x² coefficients equal to find common x!",
            "latex": "(c_1a_2 - c_2a_1)^2 = (a_1b_2 - a_2b_1)(b_1c_2 - b_2c_1)"
          },
          {
            "id": "quad-both-common",
            "title": "Condition for BOTH Common Roots",
            "formula": "a₁ / a₂ = b₁ / b₂ = c₁ / c₂",
            "explanation": "Two equations are proportional (identical curves).",
            "mustKnow": true,
            "latex": "\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}"
          }
        ]
      },
      {
        "id": "quad-vertex-location",
        "name": "Vertex Geometry & Location of Roots",
        "formulas": [
          {
            "id": "quad-vertex",
            "title": "Vertex of Parabola y = ax² + bx + c",
            "formula": "Vertex V = (−b / (2a),   −D / (4a))\nIf a > 0: Minimum value is −D / (4a)\nIf a < 0: Maximum value is −D / (4a)",
            "explanation": "Extremum coordinates of the quadratic polynomial curve.",
            "mustKnow": true,
            "shortcut": "🎯 Axis of symmetry is always vertical line x = −b/(2a).",
            "latex": "y_{\\min} = -\\frac{D}{4a} \\text{ at } x = -\\frac{b}{2a} \\quad (a > 0)"
          },
          {
            "id": "quad-location-k",
            "title": "Both Roots Greater Than a Number k",
            "formula": "Conditions: (1) D ≥ 0,  (2) a · f(k) > 0,  (3) −b/(2a) > k",
            "explanation": "Guarantees real roots exist and lie strictly to the right of vertical boundary k.",
            "mustKnow": true,
            "latex": "Conditions: (1) D  \\ge  0,  (2) a  \\cdot  f(k) > 0,  (3) −b/(2a) > k"
          },
          {
            "id": "quad-k-between",
            "title": "Number k Lies Between Roots",
            "formula": "Condition: a · f(k) < 0",
            "explanation": "Sufficient and necessary single test condition (automatically forces D > 0).",
            "mustKnow": true,
            "shortcut": "🎯 If leading coefficient a > 0, simply test f(k) < 0!",
            "latex": "Condition: a  \\cdot  f(k) < 0"
          }
        ]
      }
    ]
  },
  {
    "id": "progressions",
    "slug": "progressions",
    "name": "Progressions (AP, GP, HP)",
    "shortName": "Prog",
    "icon": "📈",
    "categoryGroup": "Algebra",
    "gradient": "from-emerald-500 to-teal-600",
    "accentColor": "border-emerald-500 text-emerald-600",
    "bgTint": "bg-emerald-500/10 text-emerald-600",
    "description": "Arithmetic, Geometric, Harmonic progressions, AM-GM-HM inequality & sum of special series.",
    "examWeightage": "Very High (NIMCET ~4-6 Qs)",
    "quickTips": [
      "AM ≥ GM ≥ HM holds for any positive real numbers. Equality holds iff all numbers are equal.",
      "If a, b, c in AP ⇒ 2b = a + c. If in GP ⇒ b² = ac. If in HP ⇒ b = 2ac/(a+c).",
      "For infinite GP to converge: |r| < 1, and S_∞ = a / (1 − r)."
    ],
    "categories": [
      {
        "id": "prog-ap",
        "name": "Arithmetic Progression (AP)",
        "formulas": [
          {
            "id": "ap-nth",
            "title": "n-th Term of AP",
            "formula": "Tₙ = a + (n − 1)d",
            "explanation": "Where a is first term, d is common difference, n is term index.",
            "mustKnow": true,
            "latex": "T_n = a + (n - 1)d"
          },
          {
            "id": "ap-sum",
            "title": "Sum of First n Terms (Sₙ)",
            "formula": "Sₙ = (n / 2) · [2a + (n − 1)d] = (n / 2) · [a + l]",
            "explanation": "Where l = Tₙ is the last term.",
            "mustKnow": true,
            "shortcut": "🎯 Term extraction: Tₙ = Sₙ − Sₙ₋₁  |  d = Tₙ − Tₙ₋₁.",
            "latex": "S_n = \\frac{n}{2}\\left[2a + (n - 1)d\\right] = \\frac{n}{2}(a + l)"
          },
          {
            "id": "ap-am",
            "title": "Arithmetic Mean (AM)",
            "formula": "Single AM of a and b: A = (a + b) / 2\nSum of n AMs between a and b: ∑ Aᵢ = n · ((a + b) / 2)",
            "explanation": "Sum of n arithmetic means inserted between a and b equals n times their single AM.",
            "mustKnow": true,
            "latex": "A = \\frac{a + b}{2}, \\quad \\sum_{i=1}^n A_i = n\\left(\\frac{a + b}{2}\\right)"
          }
        ]
      },
      {
        "id": "prog-gp",
        "name": "Geometric Progression (GP)",
        "formulas": [
          {
            "id": "gp-nth",
            "title": "n-th Term of GP",
            "formula": "Tₙ = a · rⁿ⁻¹",
            "explanation": "Where a is first term and r is common ratio.",
            "mustKnow": true,
            "latex": "T_n = a \\cdot r^{n-1}"
          },
          {
            "id": "gp-sum",
            "title": "Sum of First n Terms (Sₙ)",
            "formula": "Sₙ = a(1 − rⁿ) / (1 − r) = a(rⁿ − 1) / (r − 1),   r ≠ 1",
            "explanation": "Finite geometric series summation formula.",
            "mustKnow": true,
            "latex": "S_n = \\frac{a(1 - r^n)}{1 - r} = \\frac{a(r^n - 1)}{r - 1} \\quad (r \\neq 1)"
          },
          {
            "id": "gp-infinite",
            "title": "Sum of Infinite GP (S_∞)",
            "formula": "S_∞ = a / (1 − r),   valid strictly for |r| < 1",
            "explanation": "Crucial for recurring decimals and infinite geometric steps.",
            "mustKnow": true,
            "commonMistake": "⚠️ Invalid when |r| ≥ 1! Series diverges.",
            "latex": "S_\\infty = \\frac{a}{1 - r} \\quad (|r| < 1)"
          },
          {
            "id": "gp-gm",
            "title": "Geometric Mean (GM)",
            "formula": "Single GM of positive a, b: G = √(ab)\nProduct of n GMs inserted: ∏ Gᵢ = (√(ab))ⁿ = Gⁿ",
            "explanation": "Product of n inserted GMs equals the n-th power of their single GM.",
            "mustKnow": true,
            "latex": "G = \\sqrt{ab}, \\quad \\prod_{i=1}^n G_i = (\\sqrt{ab})^n"
          }
        ]
      },
      {
        "id": "prog-hp-ineq",
        "name": "Harmonic Progression & AM-GM-HM",
        "formulas": [
          {
            "id": "hp-def",
            "title": "Harmonic Progression (HP)",
            "formula": "Sequence a₁, a₂, ... is in HP ⇔ 1/a₁, 1/a₂, ... is in AP\nHarmonic Mean of a and b: H = (2ab) / (a + b)",
            "explanation": "Never use direct formulas on HP; always invert terms into AP first!",
            "mustKnow": true,
            "latex": "T_n = \\frac{1}{a + (n - 1)d}, \\quad H = \\frac{2ab}{a + b}"
          },
          {
            "id": "prog-am-gm-hm",
            "title": "AM-GM-HM Master Inequality",
            "formula": "A ≥ G ≥ H   and   G² = A · H (for 2 positive numbers)",
            "explanation": "Extremely popular for finding minimum/maximum values of algebraic expressions.",
            "mustKnow": true,
            "shortcut": "🎯 Optimization Shortcut: Minimum value of (x + k/x) for x > 0 is 2√k (by AM ≥ GM).",
            "latex": "AM \\ge GM \\ge HM \\implies \\frac{a + b}{2} \\ge \\sqrt{ab} \\ge \\frac{2ab}{a + b}, \\quad G^2 = A \\cdot H"
          }
        ]
      },
      {
        "id": "prog-special-series",
        "name": "Sum of Special Series (Sigma Formulas)",
        "formulas": [
          {
            "id": "sigma-n",
            "title": "Sum of First n Natural Numbers (∑n)",
            "formula": "∑n = 1 + 2 + 3 + ... + n = [n(n + 1)] / 2",
            "explanation": "Triangular numbers summation.",
            "mustKnow": true,
            "latex": "∑n = 1 + 2 + 3 + ... + n = [n(n + 1)] / 2"
          },
          {
            "id": "sigma-n2",
            "title": "Sum of Squares (∑n²)",
            "formula": "∑n² = 1² + 2² + ... + n² = [n(n + 1)(2n + 1)] / 6",
            "explanation": "Sum of first n squares.",
            "mustKnow": true,
            "latex": "∑n^2 = 1^2 + 2^2 + ... + n^2 = [n(n + 1)(2n + 1)] / 6"
          },
          {
            "id": "sigma-n3",
            "title": "Sum of Cubes (∑n³)",
            "formula": "∑n³ = 1³ + 2³ + ... + n³ = [[n(n + 1)] / 2]² = (∑n)²",
            "explanation": "Exact square of the sum of first n numbers!",
            "mustKnow": true,
            "shortcut": "🎯 Remember: 1³ + 2³ + ... + n³ is simply (∑n)².",
            "latex": "∑n^3 = 1^3 + 2^3 + ... + n^3 = [[n(n + 1)] / 2]^2 = (∑n)^2"
          }
        ]
      }
    ]
  },
  {
    "id": "logarithms",
    "slug": "logarithms",
    "name": "Logarithms",
    "shortName": "Log",
    "icon": "🪵",
    "categoryGroup": "Algebra",
    "gradient": "from-cyan-500 to-blue-600",
    "accentColor": "border-cyan-500 text-cyan-600",
    "bgTint": "bg-cyan-500/10 text-cyan-600",
    "description": "Properties, change of base, characteristic & mantissa, log inequalities and domains.",
    "examWeightage": "Medium-High (NIMCET ~2-3 Qs)",
    "quickTips": [
      "For log_a(x) to exist: x > 0, a > 0, and a ≠ 1.",
      "If base a > 1, log_a(x) is monotonically increasing. If 0 < a < 1, inequality flips!",
      "a^(log_b(c)) = c^(log_b(a))."
    ],
    "categories": [
      {
        "id": "log-laws",
        "name": "Fundamental Laws & Base Change",
        "formulas": [
          {
            "id": "log-def",
            "title": "Logarithm Definition & Conditions",
            "formula": "y = logₐ(x)  ⇔  aʸ = x,   where x > 0, a > 0, a ≠ 1",
            "explanation": "Inverse of exponential function with strict domain restrictions.",
            "mustKnow": true,
            "commonMistake": "⚠️ Domain error: Forgetting base a ≠ 1 leads to extraneous roots!",
            "latex": "b^y = x \\iff y = \\log_b x \\quad (x > 0, \\, b > 0, \\, b \\neq 1)"
          },
          {
            "id": "log-product-quotient",
            "title": "Product & Quotient Rules",
            "formula": "logₐ(mn) = logₐ(m) + logₐ(n)\nlogₐ(m / n) = logₐ(m) − logₐ(n)",
            "explanation": "Transforms multiplication/division into addition/subtraction.",
            "mustKnow": true,
            "latex": "\\begin{aligned} \\log ₐ(mn) = \\log ₐ(m) + \\log ₐ(n) \\\\ \\log ₐ\\frac{m}{n} = \\log ₐ(m) − \\log ₐ(n) \\end{aligned}"
          },
          {
            "id": "log-power-base",
            "title": "Power Rules (Argument & Base)",
            "formula": "logₐ(xⁿ) = n · logₐ(x)   |   log_{aᵏ}(x) = (1/k) · logₐ(x)\nGeneral: log_{aᵏ}(xⁿ) = (n / k) · logₐ(x)",
            "explanation": "Powers of base come out as reciprocal multipliers.",
            "mustKnow": true,
            "latex": "\\begin{aligned} \\log ₐ(x^n) = n  \\cdot  \\log ₐ(x)   |   log_{aᵏ}(x) = \\frac{1}{k}  \\cdot  \\log ₐ(x) \\\\ General: log_{aᵏ}(x^n) = \\frac{n}{k}  \\cdot  \\log ₐ(x) \\end{aligned}"
          },
          {
            "id": "log-base-change",
            "title": "Base Change Theorem",
            "formula": "logₐ(b) = (log_c b) / (log_c a) = (ln b) / (ln a) = 1 / log_b(a)",
            "explanation": "Crucial for changing unknown bases to common base e or 10.",
            "mustKnow": true,
            "shortcut": "🎯 Reciprocal base: logₐ(b) · log_b(a) = 1.",
            "latex": "\\log ₐ(b) = (log_c b) / (log_c a) = (\\ln  b) / (\\ln  a) = 1 / log_b(a)"
          },
          {
            "id": "log-power-swap",
            "title": "Power Swap Property",
            "formula": "a^(log_b c) = c^(log_b a)",
            "explanation": "Allows exchanging base and argument in exponentiated logarithms.",
            "mustKnow": true,
            "shortcut": "🎯 Frequently tested simplification trick: 2^(log₂ 5) = 5.",
            "latex": "a^(log_b c) = c^(log_b a)"
          }
        ]
      },
      {
        "id": "log-inequalities",
        "name": "Logarithmic Inequalities & Digits",
        "formulas": [
          {
            "id": "log-ineq-base-gt-1",
            "title": "Inequality with Base a > 1 (Increasing)",
            "formula": "logₐ(x) > logₐ(y)  ⇔  x > y > 0",
            "explanation": "Inequality sign is preserved.",
            "mustKnow": true,
            "latex": "\\log ₐ(x) > \\log ₐ(y)   \\iff   x > y > 0"
          },
          {
            "id": "log-ineq-base-lt-1",
            "title": "Inequality with Base 0 < a < 1 (Decreasing)",
            "formula": "logₐ(x) > logₐ(y)  ⇔  0 < x < y",
            "explanation": "Inequality sign FLIPS because function is strictly decreasing.",
            "mustKnow": true,
            "commonMistake": "⚠️ Crucial exam trap: When base is between 0 and 1, flip the inequality sign!",
            "latex": "\\log ₐ(x) > \\log ₐ(y)   \\iff   0 < x < y"
          },
          {
            "id": "log-digits-number",
            "title": "Number of Digits in N = aⁿ",
            "formula": "Number of digits = [n · log₁₀(a)] + 1",
            "explanation": "Where [x] denotes the greatest integer function (floor).",
            "mustKnow": true,
            "shortcut": "🎯 Example: Number of digits in 2¹⁰⁰ = [100 · 0.3010] + 1 = [30.1] + 1 = 31.",
            "latex": "\\text{Number of digits} = \\lfloor n \\cdot \\log_{10} a \\rfloor + 1"
          }
        ]
      }
    ]
  },
  {
    "id": "binomial",
    "slug": "binomial",
    "name": "Binomial Theorem",
    "shortName": "Binom",
    "icon": "🧱",
    "categoryGroup": "Algebra",
    "gradient": "from-blue-600 to-indigo-700",
    "accentColor": "border-blue-600 text-blue-600",
    "bgTint": "bg-blue-600/10 text-blue-600",
    "description": "General term, middle term, binomial coefficient identities, greatest term & remainder problems.",
    "examWeightage": "High (NIMCET ~3-5 Qs)",
    "quickTips": [
      "Total number of terms in (x + y)ⁿ is n + 1.",
      "Sum of all binomial coefficients: C₀ + C₁ + ... + Cₙ = 2ⁿ.",
      "Sum of odd coefficients = Sum of even coefficients = 2ⁿ⁻¹."
    ],
    "categories": [
      {
        "id": "binom-expansion",
        "name": "General & Middle Terms",
        "formulas": [
          {
            "id": "binom-gen-term",
            "title": "General Term T_{r+1}",
            "formula": "In expansion of (a + b)ⁿ:\nT_{r+1} = ⁿCᵣ · aⁿ⁻ʳ · bʳ,   r = 0, 1, ..., n",
            "explanation": "Base building block used to find coefficients or independent terms.",
            "mustKnow": true,
            "shortcut": "🎯 Term independent of x: Set net exponent of x in T_{r+1} equal to 0 and solve for r.",
            "latex": "\\begin{aligned} In expansion of (a + b)^n: \\\\ T_{r+1} = ^nC_r  \\cdot  a^n⁻ʳ  \\cdot  bʳ,   r = 0, 1, ..., n \\end{aligned}"
          },
          {
            "id": "binom-middle-term",
            "title": "Middle Term(s) in (x + y)ⁿ",
            "formula": "If n is even: Only 1 middle term at T_{(n/2)+1}\nIf n is odd: 2 middle terms at T_{(n+1)/2} and T_{(n+3)/2}",
            "explanation": "Middle terms possess the largest binomial coefficient ⁿC_{n/2}.",
            "mustKnow": true,
            "latex": "r = \\frac{n}{2} \\implies T_{\\frac{n}{2} + 1} = \\binom{n}{n/2} x^{n/2} y^{n/2} \\quad (n \\text{ even})"
          }
        ]
      },
      {
        "id": "binom-coefficients",
        "name": "Binomial Coefficient Identities",
        "formulas": [
          {
            "id": "binom-sum-all",
            "title": "Sum of All Coefficients",
            "formula": "C₀ + C₁ + C₂ + ... + Cₙ = 2ⁿ\nC₀ + C₂ + C₄ + ... = C₁ + C₃ + C₅ + ... = 2ⁿ⁻¹",
            "explanation": "Obtained by putting x = 1, y = 1 and x = 1, y = −1.",
            "mustKnow": true,
            "latex": "\\begin{aligned} C_0 + C_1 + C_2 + ... + C_n = 2^n \\\\ C_0 + C_2 + C₄ + ... = C_1 + C_3 + C₅ + ... = 2^n⁻¹ \\end{aligned}"
          },
          {
            "id": "binom-weighted-sum",
            "title": "Weighted Sum: ∑ r · ⁿCᵣ",
            "formula": "1·C₁ + 2·C₂ + 3·C₃ + ... + n·Cₙ = n · 2ⁿ⁻¹\n∑ r² · ⁿCᵣ = n(n + 1) · 2ⁿ⁻²",
            "explanation": "Calculated using differentiation of (1 + x)ⁿ or algebraic substitution.",
            "mustKnow": true,
            "shortcut": "🎯 Shortcut formula: ∑ (r + 1) · ⁿCᵣ = (n + 2) · 2ⁿ⁻¹.",
            "latex": "\\begin{aligned} 1 \\cdot C_1 + 2 \\cdot C_2 + \\dots + n \\cdot C_n &= n \\cdot 2^{n-1} \\\\ \\sum_{r=1}^n r^2 \\binom{n}{r} &= n(n+1) \\cdot 2^{n-2} \\end{aligned}"
          },
          {
            "id": "binom-fraction-sum",
            "title": "Fractional Sum: ∑ Cᵣ / (r + 1)",
            "formula": "C₀/1 + C₁/2 + C₂/3 + ... + Cₙ/(n+1) = (2ⁿ⁺¹ − 1) / (n + 1)",
            "explanation": "Obtained by integrating (1 + x)ⁿ from 0 to 1.",
            "mustKnow": true,
            "latex": "C_0/1 + C_1/2 + C_2/3 + ... + C_n/(n+1) = (2^n⁺¹ − 1) / (n + 1)"
          },
          {
            "id": "binom-pascal-sum",
            "title": "Vandermonde & Pascal's Identity",
            "formula": "ⁿCᵣ + ⁿC_{r−1} = ⁿ⁺¹Cᵣ   (Pascal)\nC₀² + C₁² + C₂² + ... + Cₙ² = ²ⁿCₙ = (2n)! / (n!)²",
            "explanation": "Sum of squares of binomial coefficients equals ²ⁿCₙ.",
            "mustKnow": true,
            "latex": "\\begin{aligned} \\binom{n}{r} + \\binom{n}{r-1} &= \\binom{n+1}{r} \\\\ C_0^2 + C_1^2 + \\dots + C_n^2 &= \\binom{2n}{n} = \\frac{(2n)!}{(n!)^2} \\end{aligned}"
          }
        ]
      }
    ]
  },
  {
    "id": "permutations-combinations",
    "slug": "permutations-combinations",
    "name": "Permutation & Combination",
    "shortName": "P&C",
    "icon": "🔀",
    "categoryGroup": "Discrete & Modern",
    "gradient": "from-purple-600 to-fuchsia-600",
    "accentColor": "border-purple-600 text-purple-600",
    "bgTint": "bg-purple-600/10 text-purple-600",
    "description": "Fundamental counting, arrangements, selections, circular permutations, derangements & group divisions.",
    "examWeightage": "Very High (NIMCET ~5-7 Qs)",
    "quickTips": [
      "Order matters ⇒ Permutation (ⁿPᵣ). Order does NOT matter ⇒ Combination (ⁿCᵣ).",
      "ⁿPᵣ = n! / (n−r)!,  ⁿCᵣ = n! / [r! (n−r)!],  ⁿPᵣ = r! · ⁿCᵣ.",
      "Circular permutations of n distinct items = (n − 1)! (or (n−1)!/2 if clockwise/anticlockwise indistinguishable like garlands)."
    ],
    "categories": [
      {
        "id": "pnc-core",
        "name": "Arrangements (Permutations) & Selections",
        "formulas": [
          {
            "id": "pnc-npr-ncr",
            "title": "ⁿPᵣ and ⁿCᵣ Formulas",
            "formula": "ⁿPᵣ = n! / (n − r)!  |  ⁿCᵣ = n! / [r!(n − r)!]\nⁿCᵣ = ⁿC_{n−r}  |  ⁿC₀ = ⁿCₙ = 1",
            "explanation": "Core mathematical combinatorial operations.",
            "mustKnow": true,
            "latex": "\\begin{aligned} ^nP_r = n! / (n − r)!  |  ^nC_r = n! / [r!(n − r)!] \\\\ ^nC_r = ^nC_{n−r}  |  ^nC_0 = ^nC_n = 1 \\end{aligned}"
          },
          {
            "id": "pnc-identical",
            "title": "Permutations of Objects Not All Distinct",
            "formula": "Total ways = n! / (p! · q! · r!)",
            "explanation": "Arranging n objects where p are of one type, q of second, r of third.",
            "mustKnow": true,
            "shortcut": "🎯 Example: Arrangements of word \"MATHEMATICS\" = 11! / (2! 2! 2!).",
            "latex": "Total ways = n! / (p!  \\cdot  q!  \\cdot  r!)"
          },
          {
            "id": "pnc-circular",
            "title": "Circular Permutations",
            "formula": "Around a circular table: (n − 1)!\nBeads in necklace / flowers in garland: ½ (n − 1)!",
            "explanation": "Fixing one reference item removes n rotational symmetries.",
            "mustKnow": true,
            "latex": "(n - 1)! \\quad (\\text{beads/garland: } \\frac{(n - 1)!}{2})"
          }
        ]
      },
      {
        "id": "pnc-advanced-distribution",
        "name": "Distributions, Derangements & Sum of Numbers",
        "formulas": [
          {
            "id": "pnc-stars-bars",
            "title": "Distribution of Identical Items (Stars & Bars)",
            "formula": "Ways to distribute n identical items into r distinct boxes:\n(1) Non-negative (xᵢ ≥ 0): ⁿ⁺ʳ⁻¹C_{r−1}\n(2) Positive integers (xᵢ ≥ 1): ⁿ⁻¹C_{r−1}",
            "explanation": "Solves number of solutions to x₁ + x₂ + ... + xᵣ = n.",
            "mustKnow": true,
            "shortcut": "🎯 High frequency question in MCA entrance exams.",
            "latex": "\\begin{aligned} Ways to distribute n identical items into r distinct boxes: \\\\ (1) Non-negative (x_i  \\ge  0): ^n⁺ʳ⁻¹C_{r−1} \\\\ (2) Positive integers (x_i  \\ge  1): ^n⁻¹C_{r−1} \\end{aligned}"
          },
          {
            "id": "pnc-derangement",
            "title": "Derangements Dₙ (No item in its own spot)",
            "formula": "Dₙ = n! · [1 − 1/1! + 1/2! − 1/3! + ... + (−1)ⁿ/n!]\nD₁ = 0, D₂ = 1, D₃ = 2, D₄ = 9, D₅ = 44",
            "explanation": "Letters going into wrong envelopes formula.",
            "mustKnow": true,
            "shortcut": "🎯 Memorize: D₃ = 2, D₄ = 9, D₅ = 44 saves 2 full minutes in exam.",
            "latex": "D_n = n! \\left[1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right]"
          },
          {
            "id": "pnc-sum-of-digits",
            "title": "Sum of All Numbers Formed by Digits",
            "formula": "Sum = (Sum of given digits) · (n − 1)! · (111... n times)",
            "explanation": "For n distinct non-zero digits taken all at a time.",
            "mustKnow": true,
            "latex": "Sum = (Sum of given digits)  \\cdot  (n − 1)!  \\cdot  (111... n times)"
          },
          {
            "id": "pnc-handshakes-diagonals",
            "title": "Diagonals in Polygon & Handshakes",
            "formula": "Number of diagonals in n-sided polygon = [n(n − 3)] / 2\nNumber of handshakes among n people = ⁿC₂ = [n(n − 1)] / 2",
            "explanation": "Direct geometry shortcuts.",
            "mustKnow": true,
            "latex": "\\begin{aligned} Number of diagonals in n-sided polygon = [n(n − 3)] / 2 \\\\ Number of handshakes among n people = ^nC_2 = [n(n − 1)] / 2 \\end{aligned}"
          }
        ]
      }
    ]
  },
  {
    "id": "matrices-determinants",
    "slug": "matrices-determinants",
    "name": "Matrices & Determinants",
    "shortName": "Matrices",
    "icon": "▦",
    "categoryGroup": "Algebra",
    "gradient": "from-emerald-600 to-green-700",
    "accentColor": "border-emerald-600 text-emerald-600",
    "bgTint": "bg-emerald-600/10 text-emerald-600",
    "description": "Matrix algebra, properties of determinants, adjoint & inverse, Cramer’s rule & system of equations.",
    "examWeightage": "Very High (NIMCET ~5-6 Qs)",
    "quickTips": [
      "|adj(A)| = |A|ⁿ⁻¹, where n is the order of matrix A.",
      "|A · B| = |A| · |B|, |k·A| = kⁿ · |A|.",
      "A · adj(A) = adj(A) · A = |A| · Iₙ."
    ],
    "categories": [
      {
        "id": "mat-properties",
        "name": "Properties of Determinants",
        "formulas": [
          {
            "id": "det-scale-product",
            "title": "Scalar Multiplication & Product Property",
            "formula": "|k · A| = kⁿ · |A|   (where n is order of square matrix A)\n|A · B| = |A| · |B|  |  |Aᵀ| = |A|  |  |A⁻¹| = 1 / |A|",
            "explanation": "Scalar factored out is raised to the dimension power n.",
            "mustKnow": true,
            "commonMistake": "⚠️ Do not write |kA| = k|A|! It is k raised to order n.",
            "latex": "\\begin{aligned} |k  \\cdot  A| = k^n  \\cdot  |A|   (where n is order of square matrix A) \\\\ |A  \\cdot  B| = |A|  \\cdot  |B|  |  |Aᵀ| = |A|  |  |A⁻¹| = 1 / |A| \\end{aligned}"
          },
          {
            "id": "det-zero-conditions",
            "title": "Conditions for Determinant = 0",
            "formula": "|A| = 0 if:\n(1) Any row or column has all zero entries\n(2) Any two rows or columns are identical or proportional",
            "explanation": "Singular matrix condition.",
            "mustKnow": true,
            "latex": "\\begin{aligned} |A| = 0 if: \\\\ (1) Any row or column has all zero entries \\\\ (2) Any two rows or columns are identical or proportional \\end{aligned}"
          },
          {
            "id": "det-skew-symmetric",
            "title": "Skew-Symmetric Matrix Determinant",
            "formula": "If A is skew-symmetric (Aᵀ = −A) of ODD order n: |A| = 0\nIf of EVEN order: |A| is always a perfect square",
            "explanation": "Classic competitive objective shortcut question.",
            "mustKnow": true,
            "latex": "\\begin{aligned} If A is skew-symmetric (Aᵀ = −A) of ODD order n: |A| = 0 \\\\ If of EVEN order: |A| is always a perfect square \\end{aligned}"
          }
        ]
      },
      {
        "id": "mat-adjoint-inverse",
        "name": "Adjoint & Inverse Formulas",
        "formulas": [
          {
            "id": "mat-inverse-formula",
            "title": "Matrix Inverse A⁻¹",
            "formula": "A⁻¹ = adj(A) / |A|,   provided |A| ≠ 0",
            "explanation": "Inverse exists if and only if matrix is non-singular (|A| ≠ 0).",
            "mustKnow": true,
            "latex": "A⁻¹ = adj(A) / |A|,   provided |A|  \\neq  0"
          },
          {
            "id": "mat-adj-properties",
            "title": "Adjoint Master Identities",
            "formula": "(1) A · adj(A) = |A| · Iₙ\n(2) |adj(A)| = |A|ⁿ⁻¹\n(3) adj(adj(A)) = |A|ⁿ⁻² · A\n(4) |adj(adj(A))| = |A|^{(n−1)²}",
            "explanation": "Most frequent determinant-matrix exam identities.",
            "mustKnow": true,
            "shortcut": "🎯 For 3×3 matrix (n=3): |adj(A)| = |A|²  and  |adj(adj(A))| = |A|⁴.",
            "latex": "\\begin{aligned} A \\cdot \\text{adj}(A) &= \\det(A) I_n \\\\ |\\text{adj}(A)| &= |A|^{n-1} \\\\ \\text{adj}(\\text{adj}(A)) &= |A|^{n-2} A \\\\ |\\text{adj}(\\text{adj}(A))| &= |A|^{(n-1)^2} \\end{aligned}"
          },
          {
            "id": "mat-2x2-shortcut",
            "title": "2×2 Inverse Shortcut",
            "formula": "For A = [[a, b], [c, d]]:\nA⁻¹ = (1 / (ad − bc)) · [[d, −b], [−c, a]]",
            "explanation": "Swap main diagonal elements, negate off-diagonal elements, divide by |A|.",
            "mustKnow": true,
            "shortcut": "🎯 Swap a & d, put minus on b & c in 5 seconds!",
            "latex": "\\begin{aligned} For A = [[a, b], [c, d]]: \\\\ A⁻¹ = (1 / (ad − bc))  \\cdot  [[d, −b], [−c, a]] \\end{aligned}"
          }
        ]
      },
      {
        "id": "mat-system-equations",
        "name": "Cramer's Rule & System Consistency",
        "formulas": [
          {
            "id": "mat-cramer",
            "title": "Cramer's Rule",
            "formula": "x = D₁/D,  y = D₂/D,  z = D₃/D,   where D ≠ 0",
            "explanation": "Direct determinant evaluation for non-homogeneous linear systems.",
            "mustKnow": true,
            "latex": "x = \\frac{\\Delta_x}{\\Delta}, \\quad y = \\frac{\\Delta_y}{\\Delta}, \\quad z = \\frac{\\Delta_z}{\\Delta} \\quad (\\Delta \\neq 0)"
          },
          {
            "id": "mat-consistency",
            "title": "Consistency Criteria for System of Equations",
            "formula": "(1) Unique Solution: D ≠ 0 (Consistent)\n(2) Infinite Solutions: D = D₁ = D₂ = D₃ = 0 (Consistent)\n(3) No Solution: D = 0 and at least one Dᵢ ≠ 0 (Inconsistent)",
            "explanation": "Crucial for finding parameter values (λ, μ) for solvability.",
            "mustKnow": true,
            "latex": "\\begin{aligned} (1) Unique Solution: D  \\neq  0 (Consistent) \\\\ (2) Infinite Solutions: D = D_1 = D_2 = D_3 = 0 (Consistent) \\\\ (3) No Solution: D = 0 and at least one D_i  \\neq  0 (Inconsistent) \\end{aligned}"
          }
        ]
      }
    ]
  },
  {
    "id": "coordinate-geometry",
    "slug": "coordinate-geometry",
    "name": "Coordinate Geometry (Lines & Circles)",
    "shortName": "Coord",
    "icon": "📍",
    "categoryGroup": "Coordinate Geometry",
    "gradient": "from-orange-500 to-rose-600",
    "accentColor": "border-orange-500 text-orange-600",
    "bgTint": "bg-orange-500/10 text-orange-600",
    "description": "Distance, section, straight line forms, perpendicular distance, angle between lines & circles.",
    "examWeightage": "Very High (NIMCET ~6-8 Qs)",
    "quickTips": [
      "Perpendicular distance from (x₁, y₁) to ax + by + c = 0 is |ax₁ + by₁ + c| / √(a² + b²).",
      "Distance between parallel lines ax+by+c₁=0 and ax+by+c₂=0 is |c₁ − c₂| / √(a² + b²).",
      "Circle x² + y² + 2gx + 2fy + c = 0 has centre (−g, −f) and radius √(g² + f² − c)."
    ],
    "categories": [
      {
        "id": "coord-lines",
        "name": "Straight Lines & Distance Formulas",
        "formulas": [
          {
            "id": "line-forms",
            "title": "Standard Forms of Straight Line",
            "formula": "(1) Slope-intercept: y = mx + c\n(2) Point-slope: y − y₁ = m(x − x₁)\n(3) Intercept: x/a + y/b = 1\n(4) Normal form: x cosα + y sinα = p",
            "explanation": "Core algebraic representations of straight lines.",
            "mustKnow": true,
            "latex": "\\begin{aligned} (1) Slope-intercept: y = mx + c \\\\ (2) Point-slope: y − y_1 = m(x − x_1) \\\\ (3) Intercept: x/a + y/b = 1 \\\\ (4) Normal form: x \\cos  \\alpha  + y \\sin  \\alpha  = p \\end{aligned}"
          },
          {
            "id": "line-perp-dist",
            "title": "Perpendicular Distance from Point to Line",
            "formula": "d = |a x₁ + b y₁ + c| / √(a² + b²)",
            "explanation": "Shortest Euclidean distance from point (x₁, y₁) to line ax + by + c = 0.",
            "mustKnow": true,
            "latex": "d = |a x_1 + b y_1 + c| / \\sqrt{a^2 + b^2}"
          },
          {
            "id": "line-parallel-dist",
            "title": "Distance Between Two Parallel Lines",
            "formula": "d = |c₁ − c₂| / √(a² + b²)",
            "explanation": "Ensure coefficients a and b are identical in both equations before applying!",
            "mustKnow": true,
            "commonMistake": "⚠️ Normalize coefficients of x and y first if equations are given with different multipliers.",
            "latex": "d = |c_1 − c_2| / \\sqrt{a^2 + b^2}"
          },
          {
            "id": "line-angle-between",
            "title": "Angle Between Two Lines (Slopes m₁, m₂)",
            "formula": "tanθ = |(m₁ − m₂) / (1 + m₁ m₂)|\nParallel: m₁ = m₂  |  Perpendicular: m₁ · m₂ = −1",
            "explanation": "Calculates acute angle between two intersecting lines.",
            "mustKnow": true,
            "latex": "\\begin{aligned} \\tan  \\theta  = |(m_1 − m_2) / (1 + m_1 m_2)| \\\\ Parallel: m_1 = m_2  |  Perpendicular: m_1  \\cdot  m_2 = −1 \\end{aligned}"
          }
        ]
      },
      {
        "id": "coord-circles",
        "name": "Circles & Tangents",
        "formulas": [
          {
            "id": "circle-standard-general",
            "title": "Standard & General Circle Equations",
            "formula": "Standard: (x − h)² + (y − k)² = r²\nGeneral: x² + y² + 2gx + 2fy + c = 0\nCentre = (−g, −f)  |  Radius r = √(g² + f² − c)",
            "explanation": "Valid real circle requires g² + f² − c ≥ 0.",
            "mustKnow": true,
            "latex": "\\begin{aligned} Standard: (x − h)^2 + (y − k)^2 = r^2 \\\\ General: x^2 + y^2 + 2gx + 2fy + c = 0 \\\\ Centre = (−g, −f)  |  Radius r = \\sqrt{g^2 + f^2 − c} \\end{aligned}"
          },
          {
            "id": "circle-tangent-slope",
            "title": "Tangent to Circle x² + y² = r² (Slope Form)",
            "formula": "y = m x ± r √(1 + m²)",
            "explanation": "Condition of tangency: c² = r²(1 + m²).",
            "mustKnow": true,
            "shortcut": "🎯 Length of tangent from external point (x₁, y₁) to general circle = √S₁ = √(x₁² + y₁² + 2gx₁ + 2fy₁ + c).",
            "latex": "y = m x  \\pm  r \\sqrt{1 + m^2}"
          },
          {
            "id": "circle-orthogonal",
            "title": "Condition for Orthogonal Circles",
            "formula": "2(g₁ g₂ + f₁ f₂) = c₁ + c₂",
            "explanation": "Two circles intersect at right angles (tangents at intersection are perpendicular).",
            "mustKnow": true,
            "latex": "2(g_1 g_2 + f_1 f_2) = c_1 + c_2"
          }
        ]
      }
    ]
  },
  {
    "id": "conic-sections",
    "slug": "conic-sections",
    "name": "Conic Sections (Parabola, Ellipse, Hyperbola)",
    "shortName": "Conics",
    "icon": "🪐",
    "categoryGroup": "Coordinate Geometry",
    "gradient": "from-amber-600 to-red-600",
    "accentColor": "border-amber-600 text-amber-600",
    "bgTint": "bg-amber-600/10 text-amber-600",
    "description": "Parabola, ellipse, hyperbola standard equations, eccentricity, tangents, director circles & asymptotes.",
    "examWeightage": "High (NIMCET ~4-5 Qs)",
    "quickTips": [
      "Eccentricity e: Parabola e = 1, Ellipse 0 < e < 1, Hyperbola e > 1, Circle e = 0.",
      "Tangent to y² = 4ax with slope m: y = mx + a/m.",
      "Director circle is the locus of perpendicular tangents (radius √(a²+b²) for ellipse, √(a²−b²) for hyperbola)."
    ],
    "categories": [
      {
        "id": "conic-parabola",
        "name": "Parabola (y² = 4ax)",
        "formulas": [
          {
            "id": "parabola-standard",
            "title": "Standard Parabola Features (y² = 4ax)",
            "formula": "Focus: (a, 0)  |  Directrix: x = −a  |  Axis: y = 0\nLatus Rectum: 4a  |  Parametric: (at², 2at)",
            "explanation": "Symmetric about x-axis with vertex at origin (0, 0).",
            "mustKnow": true,
            "latex": "\\begin{aligned} Focus: (a, 0)  |  Directrix: x = −a  |  Axis: y = 0 \\\\ Latus Rectum: 4a  |  Parametric: (at^2, 2at) \\end{aligned}"
          },
          {
            "id": "parabola-tangent",
            "title": "Tangent in Slope Form to y² = 4ax",
            "formula": "y = m x + a/m   (m ≠ 0)\nPoint of contact: (a/m², 2a/m)",
            "explanation": "Condition for line y = mx + c to touch parabola is c = a/m.",
            "mustKnow": true,
            "shortcut": "🎯 Direct exam question: If line y = mx + c touches y² = 4ax, then c = a/m.",
            "latex": "\\begin{aligned} y = m x + a/m   (m  \\neq  0) \\\\ Point of contact: (a/m^2, 2a/m) \\end{aligned}"
          }
        ]
      },
      {
        "id": "conic-ellipse",
        "name": "Ellipse (x²/a² + y²/b² = 1, a > b)",
        "formulas": [
          {
            "id": "ellipse-standard",
            "title": "Standard Ellipse Features",
            "formula": "Eccentricity: e = √(1 − b²/a²)  ⇒  b² = a²(1 − e²)\nFoci: (±ae, 0)  |  Directrices: x = ±a/e\nLatus Rectum = 2b²/a  |  Director Circle: x² + y² = a² + b²",
            "explanation": "Sum of focal distances to any point P on ellipse: SP + S'P = 2a (major axis).",
            "mustKnow": true,
            "latex": "\\begin{aligned} Eccentricity: e = \\sqrt{1 − b^2/a^2}   \\implies   b^2 = a^2(1 − e^2) \\\\ Foci: ( \\pm ae, 0)  |  Directrices: x =  \\pm a/e \\\\ Latus Rectum = 2b^2/a  |  Director Circle: x^2 + y^2 = a^2 + b^2 \\end{aligned}"
          },
          {
            "id": "ellipse-tangent",
            "title": "Tangent in Slope Form to Ellipse",
            "formula": "y = m x ± √(a² m² + b²)",
            "explanation": "Condition of tangency: c² = a²m² + b².",
            "mustKnow": true,
            "latex": "y = m x  \\pm  \\sqrt{a^2 m^2 + b^2}"
          }
        ]
      },
      {
        "id": "conic-hyperbola",
        "name": "Hyperbola (x²/a² − y²/b² = 1)",
        "formulas": [
          {
            "id": "hyperbola-standard",
            "title": "Standard Hyperbola Features",
            "formula": "Eccentricity: e = √(1 + b²/a²)  ⇒  b² = a²(e² − 1)\nFoci: (±ae, 0)  |  Directrices: x = ±a/e\nLatus Rectum = 2b²/a  |  Director Circle: x² + y² = a² − b²",
            "explanation": "Difference of focal distances: |SP − S'P| = 2a (transverse axis).",
            "mustKnow": true,
            "latex": "\\begin{aligned} Eccentricity: e = \\sqrt{1 + b^2/a^2}   \\implies   b^2 = a^2(e^2 − 1) \\\\ Foci: ( \\pm ae, 0)  |  Directrices: x =  \\pm a/e \\\\ Latus Rectum = 2b^2/a  |  Director Circle: x^2 + y^2 = a^2 − b^2 \\end{aligned}"
          },
          {
            "id": "hyperbola-rect-asymp",
            "title": "Rectangular Hyperbola & Asymptotes",
            "formula": "Asymptotes of x²/a² − y²/b² = 1:  y = ± (b/a) x\nRectangular hyperbola: a = b ⇒ e = √2\nRotated form: xy = c²  (Asymptotes are coordinate axes, e = √2)",
            "explanation": "Rectangular hyperbola has perpendicular asymptotes and fixed eccentricity e = √2.",
            "mustKnow": true,
            "shortcut": "🎯 Key fact: Eccentricity of every rectangular hyperbola is always √2.",
            "latex": "\\begin{aligned} Asymptotes of x^2/a^2 − y^2/b^2 = 1:  y =  \\pm  \\frac{b}{a} x \\\\ Rectangular hyperbola: a = b  \\implies  e = \\sqrt{2} \\\\ Rotated form: xy = c^2  (Asymptotes are coordinate axes, e = \\sqrt{2}) \\end{aligned}"
          }
        ]
      }
    ]
  },
  {
    "id": "sets-relations",
    "slug": "sets-relations",
    "name": "Sets, Relations & Boolean Algebra",
    "shortName": "Sets",
    "icon": "🔗",
    "categoryGroup": "Discrete & Modern",
    "gradient": "from-blue-500 to-teal-500",
    "accentColor": "border-blue-500 text-blue-500",
    "bgTint": "bg-blue-500/10 text-blue-500",
    "description": "De Morgan’s laws, Cartesian products, equivalence relations, number of relations & Boolean algebra.",
    "examWeightage": "High (NIMCET ~4-5 Qs)",
    "quickTips": [
      "Number of subsets of a set with n elements is 2ⁿ. Number of proper subsets is 2ⁿ − 1.",
      "Total relations from set A (|A|=m) to B (|B|=n) is 2^(m·n).",
      "Reflexive, Symmetric, and Transitive together form an Equivalence Relation."
    ],
    "categories": [
      {
        "id": "sets-algebra",
        "name": "Set Operations & Cardinality",
        "formulas": [
          {
            "id": "set-demorgan",
            "title": "De Morgan's Laws",
            "formula": "(A ∪ B)' = A' ∩ B'  |  (A ∩ B)' = A' ∪ B'",
            "explanation": "Complement swaps union and intersection operators.",
            "mustKnow": true,
            "latex": "(A \\cup B)' = A' \\cap B', \\quad (A \\cap B)' = A' \\cup B'"
          },
          {
            "id": "set-cardinality",
            "title": "Cardinality of Union & Symmetric Difference",
            "formula": "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)\nn(A Δ B) = n(A) + n(B) − 2n(A ∩ B) = n(A − B) + n(B − A)",
            "explanation": "Symmetric difference A Δ B contains elements in either A or B but not both.",
            "mustKnow": true,
            "latex": "\\begin{aligned} n(A  \\cup  B) = n(A) + n(B) − n(A  \\cap  B) \\\\ n(A  \\Delta  B) = n(A) + n(B) − 2n(A  \\cap  B) = n(A − B) + n(B − A) \\end{aligned}"
          }
        ]
      },
      {
        "id": "relations-types",
        "name": "Types of Relations & Counting Formulas",
        "formulas": [
          {
            "id": "rel-definitions",
            "title": "Reflexive, Symmetric, Transitive Definitions",
            "formula": "Reflexive: (a, a) ∈ R for all a ∈ A\nSymmetric: (a, b) ∈ R ⇒ (b, a) ∈ R\nTransitive: (a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R\nEquivalence: Reflexive + Symmetric + Transitive",
            "explanation": "Fundamental properties determining relationship structure.",
            "mustKnow": true,
            "latex": "\\begin{aligned} Reflexive: (a, a)  \\in  R for all a  \\in  A \\\\ Symmetric: (a, b)  \\in  R  \\implies  (b, a)  \\in  R \\\\ Transitive: (a, b)  \\in  R and (b, c)  \\in  R  \\implies  (a, c)  \\in  R \\\\ Equivalence: Reflexive + Symmetric + Transitive \\end{aligned}"
          },
          {
            "id": "rel-counting-formulas",
            "title": "Number of Specific Relations on Set with n Elements",
            "formula": "Total relations: 2^(n²)\nReflexive relations: 2^(n² − n)\nSymmetric relations: 2^[n(n + 1) / 2]\nReflexive & Symmetric: 2^[n(n − 1) / 2]",
            "explanation": "Extremely popular direct counting formulas in MCA and computer science math.",
            "mustKnow": true,
            "shortcut": "🎯 Direct formula question: For n=3 elements, Reflexive = 2^(9-3) = 2⁶ = 64.",
            "latex": "\\begin{aligned} Total relations: 2^(n^2) \\\\ Reflexive relations: 2^(n^2 − n) \\\\ Symmetric relations: 2^[n(n + 1) / 2] \\\\ Reflexive & Symmetric: 2^[n(n − 1) / 2] \\end{aligned}"
          }
        ]
      },
      {
        "id": "boolean-algebra-laws",
        "name": "Boolean Algebra Laws",
        "formulas": [
          {
            "id": "bool-laws",
            "title": "Fundamental Boolean Identities",
            "formula": "Idempotent: A + A = A,  A · A = A\nAbsorption: A + A·B = A,  A · (A + B) = A\nDistributive: A + B·C = (A + B)(A + C)\nInvolution: (A')' = A  |  A + A' = 1,  A · A' = 0",
            "explanation": "Logical equivalence rules for simplifying circuits and Boolean equations.",
            "mustKnow": true,
            "latex": "\\begin{aligned} Idempotent: A + A = A,  A  \\cdot  A = A \\\\ Absorption: A + A \\cdot B = A,  A  \\cdot  (A + B) = A \\\\ Distributive: A + B \\cdot C = (A + B)(A + C) \\\\ Involution: (A')' = A  |  A + A' = 1,  A  \\cdot  A' = 0 \\end{aligned}"
          }
        ]
      }
    ]
  },
  {
    "id": "functions",
    "slug": "functions",
    "name": "Functions & Mappings",
    "shortName": "Func",
    "icon": "ƒ",
    "categoryGroup": "Calculus",
    "gradient": "from-indigo-500 to-purple-600",
    "accentColor": "border-indigo-500 text-indigo-500",
    "bgTint": "bg-indigo-500/10 text-indigo-500",
    "description": "Domain & range, injective/surjective/bijective mappings, composite & inverse functions, periodicity.",
    "examWeightage": "High (NIMCET ~4-5 Qs)",
    "quickTips": [
      "f is one-one (injective) if f(x₁) = f(x₂) ⇒ x₁ = x₂ (Horizontal line test intersects at most once).",
      "f is onto (surjective) if Range = Codomain.",
      "Inverse f⁻¹ exists if and only if f is bijective (both one-one and onto)."
    ],
    "categories": [
      {
        "id": "func-types",
        "name": "Types of Functions & Mapping Counts",
        "formulas": [
          {
            "id": "func-injective-surjective",
            "title": "Injective, Surjective & Bijective",
            "formula": "Injective (One-One): x₁ ≠ x₂ ⇒ f(x₁) ≠ f(x₂)\nSurjective (Onto): Range(f) = Codomain\nBijective: One-One and Onto simultaneously",
            "explanation": "Criteria for invertible mathematical transformations.",
            "mustKnow": true,
            "latex": "\\begin{aligned} Injective (One-One): x_1  \\neq  x_2  \\implies  f(x_1)  \\neq  f(x_2) \\\\ Surjective (Onto): Range(f) = Codomain \\\\ Bijective: One-One and Onto simultaneously \\end{aligned}"
          },
          {
            "id": "func-counting",
            "title": "Counting Functions (from |A|=m to |B|=n)",
            "formula": "Total functions: nᵐ\nOne-One functions: ⁿPₘ (if m ≤ n, else 0)\nBijective functions (m = n): n!",
            "explanation": "Standard combinatorics of function spaces.",
            "mustKnow": true,
            "shortcut": "🎯 If m > n, number of one-one functions is strictly 0 (Pigeonhole principle).",
            "latex": "\\begin{aligned} Total functions: nᵐ \\\\ One-One functions: ^nPₘ (if m  \\le  n, else 0) \\\\ Bijective functions (m = n): n! \\end{aligned}"
          }
        ]
      },
      {
        "id": "func-even-odd-period",
        "name": "Even, Odd & Periodic Functions",
        "formulas": [
          {
            "id": "func-even-odd",
            "title": "Even & Odd Functions",
            "formula": "Even: f(−x) = f(x)  (Symmetric about y-axis)\nOdd: f(−x) = −f(x)  (Symmetric about origin)\nEvery function can be uniquely decomposed: f(x) = [f(x)+f(−x)]/2 + [f(x)−f(−x)]/2",
            "explanation": "Even parts cancel under symmetric integration: ∫₋ₐᵃ (odd) dx = 0.",
            "mustKnow": true,
            "latex": "\\begin{aligned} Even: f(−x) = f(x)  (Symmetric about y-axis) \\\\ Odd: f(−x) = −f(x)  (Symmetric about origin) \\\\ Every function can be uniquely decomposed: f(x) = [f(x)+f(−x)]/2 + [f(x)−f(−x)]/2 \\end{aligned}"
          },
          {
            "id": "func-periodic",
            "title": "Periodic Functions & Periods",
            "formula": "If f(x) has period T, then f(ax + b) has period T / |a|\nsin(x), cos(x), sec(x), cosec(x) have period 2π\ntan(x), cot(x) have period π\n|sin x|, |cos x| have period π",
            "explanation": "Fundamental period of composite arguments.",
            "mustKnow": true,
            "latex": "\\begin{aligned} If f(x) has period T, then f(ax + b) has period T / |a| \\\\ \\sin (x), \\cos (x), \\sec (x), \\csc (x) have period 2 \\pi  \\\\ \\tan (x), \\cot (x) have period  \\pi  \\\\ |\\sin  x|, |\\cos  x| have period  \\pi  \\end{aligned}"
          }
        ]
      }
    ]
  },
  {
    "id": "complex-numbers",
    "slug": "complex-numbers",
    "name": "Complex Numbers",
    "shortName": "Complex",
    "icon": "🔮",
    "categoryGroup": "Algebra",
    "gradient": "from-violet-500 to-fuchsia-600",
    "accentColor": "border-violet-500 text-violet-500",
    "bgTint": "bg-violet-500/10 text-violet-500",
    "description": "Modulus & argument, polar & Euler forms, De Moivre’s theorem, cube roots of unity 1, ω, ω² & geometry.",
    "examWeightage": "High (NIMCET ~4-5 Qs)",
    "quickTips": [
      "Cube roots of unity: 1 + ω + ω² = 0, and ω³ = 1.",
      "|z₁ + z₂| ≤ |z₁| + |z₂| (Triangle Inequality).",
      "arg(z₁ · z₂) = arg(z₁) + arg(z₂),  arg(z₁ / z₂) = arg(z₁) − arg(z₂)."
    ],
    "categories": [
      {
        "id": "complex-forms",
        "name": "Forms, Modulus & Conjugate",
        "formulas": [
          {
            "id": "complex-algebraic-polar",
            "title": "Algebraic, Polar & Euler Form",
            "formula": "Cartesian: z = x + i y\nPolar: z = r(cosθ + i sinθ),   where r = |z| = √(x² + y²)\nEuler: z = r e^(iθ)",
            "explanation": "Euler form turns multiplication and powers into simple angle arithmetic.",
            "mustKnow": true,
            "latex": "\\begin{aligned} Cartesian: z = x + i y \\\\ Polar: z = r(\\cos  \\theta  + i \\sin  \\theta ),   where r = |z| = \\sqrt{x^2 + y^2} \\\\ Euler: z = r e^(i \\theta ) \\end{aligned}"
          },
          {
            "id": "complex-conjugate-modulus",
            "title": "Properties of Conjugate & Modulus",
            "formula": "z · z̄ = |z|²  |  |z̄| = |z| = |−z|\n|z₁ · z₂| = |z₁| · |z₂|  |  |z₁ / z₂| = |z₁| / |z₂|\n|z₁ + z₂|² + |z₁ − z₂|² = 2(|z₁|² + |z₂|²)",
            "explanation": "Parallelogram law of complex vectors.",
            "mustKnow": true,
            "shortcut": "🎯 Parallelogram law connects diagonal lengths to side lengths in Argand plane.",
            "latex": "\\begin{aligned} z  \\cdot  z̄ = |z|^2  |  |z̄| = |z| = |−z| \\\\ |z_1  \\cdot  z_2| = |z_1|  \\cdot  |z_2|  |  |z_1 / z_2| = |z_1| / |z_2| \\\\ |z_1 + z_2|^2 + |z_1 − z_2|^2 = 2(|z_1|^2 + |z_2|^2) \\end{aligned}"
          }
        ]
      },
      {
        "id": "complex-roots-unity",
        "name": "De Moivre’s Theorem & Cube Roots of Unity",
        "formulas": [
          {
            "id": "complex-demoivre",
            "title": "De Moivre's Theorem",
            "formula": "(cosθ + i sinθ)ⁿ = cos(nθ) + i sin(nθ) = e^(i nθ)",
            "explanation": "Valid for all rational values of n.",
            "mustKnow": true,
            "latex": "(\\cos  \\theta  + i \\sin  \\theta )^n = \\cos (n \\theta ) + i \\sin (n \\theta ) = e^(i n \\theta )"
          },
          {
            "id": "complex-cube-roots",
            "title": "Cube Roots of Unity (1, ω, ω²)",
            "formula": "ω = (−1 + i√3)/2  |  ω² = (−1 − i√3)/2\nKey Properties:\n(1) 1 + ω + ω² = 0\n(2) ω³ = 1  (and ω³ᵏ = 1, ω³ᵏ⁺¹ = ω, ω³ᵏ⁺² = ω²)\n(3) ω̄ = ω² and (ω²)̄ = ω",
            "explanation": "Crucial for factoring: a³ + b³ = (a+b)(a+bω)(a+bω²), a³+b³+c³−3abc = (a+b+c)(a+bω+cω²)(a+bω²+cω).",
            "mustKnow": true,
            "shortcut": "🎯 High-yield algebra simplification: 1 + ωⁿ + ω²ⁿ = 3 (if n multiple of 3), else 0.",
            "latex": "\\begin{aligned} \\omega &= \\frac{-1 + i\\sqrt{3}}{2}, \\quad \\omega^2 = \\frac{-1 - i\\sqrt{3}}{2} \\\\ 1 + \\omega + \\omega^2 &= 0, \\quad \\omega^3 = 1 \\\\ \\omega^{3k} &= 1, \\quad \\omega^{3k+1} = \\omega, \\quad \\omega^{3k+2} = \\omega^2 \\end{aligned}"
          }
        ]
      }
    ]
  },
  {
    "id": "sequence-series",
    "slug": "sequence-series",
    "name": "Sequence & Series",
    "shortName": "Series",
    "icon": "∑",
    "categoryGroup": "Algebra",
    "gradient": "from-teal-600 to-cyan-700",
    "accentColor": "border-teal-600 text-teal-600",
    "bgTint": "bg-teal-600/10 text-teal-600",
    "description": "Telescoping series, method of differences, arithmetic-geometric series (AGP) & summation tricks.",
    "examWeightage": "Medium-High (NIMCET ~3-4 Qs)",
    "quickTips": [
      "For telescoping series: express Tₙ = Vₙ − Vₙ₋₁ so terms collapse upon summation.",
      "For AGP: Sₙ = a + (a+d)r + (a+2d)r² + ... Multiply by r, shift one term right, and subtract.",
      "Sum of infinite AGP: S_∞ = a/(1−r) + (d·r)/(1−r)² for |r| < 1."
    ],
    "categories": [
      {
        "id": "series-agp",
        "name": "Arithmetic-Geometric Progression (AGP)",
        "formulas": [
          {
            "id": "agp-infinite",
            "title": "Sum of Infinite AGP (|r| < 1)",
            "formula": "S_∞ = a / (1 − r) + (d · r) / (1 − r)²",
            "explanation": "Series where each term is the product of corresponding AP and GP terms.",
            "mustKnow": true,
            "shortcut": "🎯 Example: 1 + 2/3 + 3/9 + 4/27 + ... has a=1, d=1, r=1/3 ⇒ S_∞ = 1/(2/3) + (1/3)/(4/9) = 3/2 + 3/4 = 9/4.",
            "latex": "S_ \\infty  = a / (1 − r) + (d  \\cdot  r) / (1 − r)^2"
          }
        ]
      },
      {
        "id": "series-telescoping",
        "name": "Telescoping & Partial Fractions",
        "formulas": [
          {
            "id": "telescope-fraction",
            "title": "Standard Telescoping Fraction",
            "formula": "1 / [n(n + 1)] = 1/n − 1/(n + 1)\n∑_{n=1}^k 1/[n(n+1)] = 1 − 1/(k + 1) = k / (k + 1)",
            "explanation": "Interior terms cancel out in adjacent pairs leaving only first and last boundary terms.",
            "mustKnow": true,
            "latex": "\\begin{aligned} 1 / [n(n + 1)] = 1/n − 1/(n + 1) \\\\ ∑_{n=1}^k 1/[n(n+1)] = 1 − 1/(k + 1) = k / (k + 1) \\end{aligned}"
          },
          {
            "id": "telescope-three",
            "title": "Telescoping with 3 Linear Factors",
            "formula": "1 / [n(n+1)(n+2)] = ½ [ 1/(n(n+1)) − 1/((n+1)(n+2)) ]",
            "explanation": "Splitting into difference of products of 2 consecutive factors.",
            "mustKnow": true,
            "latex": "1 / [n(n+1)(n+2)] = ½ [ 1/(n(n+1)) − 1/((n+1)(n+2)) ]"
          }
        ]
      }
    ]
  },
  {
    "id": "statistics",
    "slug": "statistics",
    "name": "Statistics",
    "shortName": "Stats",
    "icon": "📊",
    "categoryGroup": "Applied & Stats",
    "gradient": "from-sky-500 to-indigo-600",
    "accentColor": "border-sky-500 text-sky-500",
    "bgTint": "bg-sky-500/10 text-sky-500",
    "description": "Mean, median, mode, variance, standard deviation, coefficient of variation & shift of origin/scale.",
    "examWeightage": "High (NIMCET ~3-4 Qs)",
    "quickTips": [
      "Empirical relation: Mode ≈ 3 · Median − 2 · Mean.",
      "Shift of origin: Adding/subtracting a constant changes mean, but DOES NOT change variance or standard deviation!",
      "Change of scale: Multiplying by k multiplies SD by |k|, and multiplies variance by k²."
    ],
    "categories": [
      {
        "id": "stats-central",
        "name": "Measures of Central Tendency",
        "formulas": [
          {
            "id": "stats-mean-empirical",
            "title": "Mean & Empirical Relation",
            "formula": "Mean x̄ = (∑ xᵢ) / n\nEmpirical Relation: Mode = 3 · Median − 2 · Mean",
            "explanation": "Applies to moderately skewed unimodal frequency distributions.",
            "mustKnow": true,
            "shortcut": "🎯 Memory aid: \"Mode = 3 Median − 2 Mean\" (Alphabetical: 3 before 2, Median has more letters than Mean).",
            "latex": "\\begin{aligned} Mean x̄ = (∑ x_i) / n \\\\ Empirical Relation: Mode = 3  \\cdot  Median − 2  \\cdot  Mean \\end{aligned}"
          }
        ]
      },
      {
        "id": "stats-dispersion",
        "name": "Variance, Standard Deviation & CV",
        "formulas": [
          {
            "id": "stats-variance-formula",
            "title": "Variance (σ²) & Standard Deviation (σ)",
            "formula": "σ² = (∑ xᵢ² / n) − (x̄)² = (∑ (xᵢ − x̄)²) / n\nStandard Deviation σ = √(Variance)",
            "explanation": "Mean of squares minus square of mean.",
            "mustKnow": true,
            "shortcut": "🎯 Variance of first n natural numbers = (n² − 1) / 12.",
            "latex": "\\begin{aligned} σ^2 = (∑ x_i^2 / n) − (x̄)^2 = (∑ (x_i − x̄)^2) / n \\\\ Standard Deviation σ = \\sqrt{Variance} \\end{aligned}"
          },
          {
            "id": "stats-scale-origin",
            "title": "Shift of Origin & Scale on Variance",
            "formula": "If yᵢ = a xᵢ + b:\nMean ȳ = a x̄ + b\nSD σ_y = |a| · σ_x\nVariance σ_y² = a² · σ_x²",
            "explanation": "Adding b has ZERO effect on dispersion; only multiplier a impacts variance as a².",
            "mustKnow": true,
            "commonMistake": "⚠️ Common trap: If 5 is subtracted from each observation, variance remains 100% UNCHANGED!",
            "latex": "\\begin{aligned} If y_i = a x_i + b: \\\\ Mean ȳ = a x̄ + b \\\\ SD σ_y = |a|  \\cdot  σ_x \\\\ Variance σ_y^2 = a^2  \\cdot  σ_x^2 \\end{aligned}"
          },
          {
            "id": "stats-cv",
            "title": "Coefficient of Variation (CV)",
            "formula": "CV = (σ / x̄) · 100%",
            "explanation": "Measures relative dispersion. Series with lower CV is more consistent and stable.",
            "mustKnow": true,
            "latex": "CV = (σ / x̄)  \\cdot  100%"
          }
        ]
      }
    ]
  },
  {
    "id": "vectors-3d",
    "slug": "vectors-3d",
    "name": "Vectors & 3D Geometry",
    "shortName": "Vectors",
    "icon": "🧭",
    "categoryGroup": "Vectors & 3D",
    "gradient": "from-teal-500 to-emerald-600",
    "accentColor": "border-teal-500 text-teal-500",
    "bgTint": "bg-teal-500/10 text-teal-500",
    "description": "Dot & cross product, scalar & vector triple product, 3D line equations, planes & shortest distance.",
    "examWeightage": "Very High (NIMCET ~6-8 Qs)",
    "quickTips": [
      "a · b = |a||b| cosθ. If a · b = 0, vectors are perpendicular (for non-zero vectors).",
      "a × b = |a||b| sinθ n̂. If a × b = 0, vectors are collinear/parallel.",
      "Scalar Triple Product [a b c] = a · (b × c) represents volume of parallelepiped. If [a b c] = 0, vectors are coplanar."
    ],
    "categories": [
      {
        "id": "vector-products",
        "name": "Dot, Cross & Triple Products",
        "formulas": [
          {
            "id": "vec-dot-projection",
            "title": "Dot Product & Projection",
            "formula": "a · b = a₁b₁ + a₂b₂ + a₃b₃ = |a| |b| cosθ\nProjection of a on b = (a · b) / |b|",
            "explanation": "Scalar quantity representing directional overlap.",
            "mustKnow": true,
            "latex": "\\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta = a_1b_1 + a_2b_2 + a_3b_3, \\quad \\text{Proj}_{\\vec{b}}\\vec{a} = \\frac{\\vec{a} \\cdot \\vec{b}}{|\\vec{b}|}"
          },
          {
            "id": "vec-cross-product",
            "title": "Cross Product & Area",
            "formula": "a × b = |(i, j, k), (a₁, a₂, a₃), (b₁, b₂, b₃)|\nArea of parallelogram with adjacent sides a, b = |a × b|\nArea of triangle = ½ |a × b|",
            "explanation": "Vector perpendicular to both a and b with magnitude equal to spanned area.",
            "mustKnow": true,
            "latex": "\\vec{a} \\times \\vec{b} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\end{vmatrix}, \\quad |\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta"
          },
          {
            "id": "vec-stp-vtp",
            "title": "Scalar & Vector Triple Product",
            "formula": "Scalar Triple: [a b c] = a · (b × c) = det([a₁, a₂, a₃], [b₁, b₂, b₃], [c₁, c₂, c₃])\nCoplanar condition: [a b c] = 0\nVector Triple: a × (b × c) = (a · c)b − (a · b)c   (BAC − CAB rule)",
            "explanation": "BAC-CAB mnemonic for vector triple product expansion.",
            "mustKnow": true,
            "shortcut": "🎯 Remember \"BAC minus CAB\": a × (b × c) = b(a·c) − c(a·b).",
            "latex": "[\\vec{a} \\, \\vec{b} \\, \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c}), \\quad \\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}"
          }
        ]
      },
      {
        "id": "geom-3d-lines-planes",
        "name": "3D Lines, Planes & Shortest Distance",
        "formulas": [
          {
            "id": "3d-line-eq",
            "title": "Equation of Line in 3D",
            "formula": "Vector: r = a + λ b\nCartesian: (x − x₁) / a = (y − y₁) / b = (z − z₁) / c",
            "explanation": "Passes through (x₁, y₁, z₁) along direction ratios (a, b, c).",
            "mustKnow": true,
            "latex": "\\vec{r} = \\vec{a} + \\lambda \\vec{b} \\iff \\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}"
          },
          {
            "id": "3d-shortest-dist",
            "title": "Shortest Distance Between Skew Lines",
            "formula": "d = |(a₂ − a₁) · (b₁ × b₂)| / |b₁ × b₂|",
            "explanation": "For lines r = a₁ + λ b₁ and r = a₂ + μ b₂. If d = 0, lines intersect.",
            "mustKnow": true,
            "latex": "d = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}"
          },
          {
            "id": "3d-plane-eq",
            "title": "Plane Equation & Perpendicular Distance",
            "formula": "r · n = d   or   a x + b y + c z + d = 0\nDistance from (x₁, y₁, z₁) to plane = |a x₁ + b y₁ + c z₁ + d| / √(a² + b² + c²)",
            "explanation": "Normal vector n = (a, b, c).",
            "mustKnow": true,
            "latex": "ax + by + cz + d = 0, \\quad d = \\frac{|ax_1 + by_1 + cz_1 + d|}{\\sqrt{a^2 + b^2 + c^2}}"
          }
        ]
      }
    ]
  },
  {
    "id": "differential-calculus",
    "slug": "differential-calculus",
    "name": "Differential Calculus",
    "shortName": "Diff Calc",
    "icon": "∂",
    "categoryGroup": "Calculus",
    "gradient": "from-rose-500 to-red-600",
    "accentColor": "border-rose-500 text-rose-600",
    "bgTint": "bg-rose-500/10 text-rose-600",
    "description": "Limits, continuity, differentiability, standard derivatives, chain rule, tangents & maxima/minima.",
    "examWeightage": "Very High (NIMCET ~6-8 Qs)",
    "quickTips": [
      "L'Hôpital's Rule: For 0/0 or ∞/∞, lim f(x)/g(x) = lim f'(x)/g'(x).",
      "For 1^∞ limits: lim [f(x)]^(g(x)) = e^{lim g(x) [f(x) − 1]}.",
      "First derivative test: f'(x) > 0 ⇒ strictly increasing. Maxima at f'(x)=0 with f''(x) < 0."
    ],
    "categories": [
      {
        "id": "diff-limits",
        "name": "Standard Limits & Indeterminate Forms",
        "formulas": [
          {
            "id": "limit-standard-trig",
            "title": "Standard Trigonometric Limits",
            "formula": "lim_{x→0} (sin x / x) = 1  |  lim_{x→0} (tan x / x) = 1\nlim_{x→0} (1 − cos x) / x² = ½",
            "explanation": "Fundamental limits (x in radians).",
            "mustKnow": true,
            "shortcut": "🎯 Extremely fast: Replace 1 − cos x with x²/2 when x → 0!",
            "latex": "\\begin{aligned} lim_{x→0} (\\sin  x / x) = 1  |  lim_{x→0} (\\tan  x / x) = 1 \\\\ lim_{x→0} (1 − \\cos  x) / x^2 = ½ \\end{aligned}"
          },
          {
            "id": "limit-exp-log",
            "title": "Exponential & Logarithmic Limits",
            "formula": "lim_{x→0} (eˣ − 1) / x = 1  |  lim_{x→0} (aˣ − 1) / x = ln a\nlim_{x→0} ln(1 + x) / x = 1",
            "explanation": "First-order Taylor expansion approximations.",
            "mustKnow": true,
            "latex": "\\begin{aligned} lim_{x→0} (e^x − 1) / x = 1  |  lim_{x→0} (a^x − 1) / x = \\ln  a \\\\ lim_{x→0} \\ln (1 + x) / x = 1 \\end{aligned}"
          },
          {
            "id": "limit-1-power-inf",
            "title": "1^∞ Indeterminate Form",
            "formula": "If lim f(x) = 1 and lim g(x) = ∞, then:\nlim [f(x)]^(g(x)) = e^{lim g(x) · [f(x) − 1]}",
            "explanation": "The most common limit type in competitive exams.",
            "mustKnow": true,
            "shortcut": "🎯 Super trick: lim_{x→0} (1 + kx)^(1/x) = eᵏ.",
            "latex": "\\begin{aligned} If lim f(x) = 1 and lim g(x) =  \\infty , then: \\\\ lim [f(x)]^(g(x)) = e^{lim g(x)  \\cdot  [f(x) − 1]} \\end{aligned}"
          }
        ]
      },
      {
        "id": "diff-derivatives",
        "name": "Standard Derivatives & Rules",
        "formulas": [
          {
            "id": "deriv-rules",
            "title": "Product, Quotient & Chain Rules",
            "formula": "Product: (u · v)' = u' v + u v'\nQuotient: (u / v)' = (u' v − u v') / v²\nChain: d/dx [f(g(x))] = f'(g(x)) · g'(x)",
            "explanation": "Foundational operational calculus theorems.",
            "mustKnow": true,
            "latex": "\\begin{aligned} Product: (u  \\cdot  v)' = u' v + u v' \\\\ Quotient: \\frac{u}{v}' = (u' v − u v') / v^2 \\\\ Chain: d/dx [f(g(x))] = f'(g(x))  \\cdot  g'(x) \\end{aligned}"
          },
          {
            "id": "deriv-inverse-trig",
            "title": "Derivatives of Inverse Trigonometric Functions",
            "formula": "d/dx(sin⁻¹x) = 1 / √(1 − x²)\nd/dx(cos⁻¹x) = −1 / √(1 − x²)\nd/dx(tan⁻¹x) = 1 / (1 + x²)\nd/dx(sec⁻¹x) = 1 / [|x| √(x² − 1)]",
            "explanation": "Standard derivative formulas used in integration reversibility.",
            "mustKnow": true,
            "latex": "\\begin{aligned} d/dx(\\sin ⁻¹x) = 1 / \\sqrt{1 − x^2} \\\\ d/dx(\\cos ⁻¹x) = −1 / \\sqrt{1 − x^2} \\\\ d/dx(\\tan ⁻¹x) = 1 / (1 + x^2) \\\\ d/dx(\\sec ⁻¹x) = 1 / [|x| \\sqrt{x^2 − 1}] \\end{aligned}"
          }
        ]
      },
      {
        "id": "diff-applications",
        "name": "Tangents, Normals & Extrema",
        "formulas": [
          {
            "id": "app-tangent-normal",
            "title": "Equations of Tangent & Normal at (x₁, y₁)",
            "formula": "Tangent: y − y₁ = m · (x − x₁),   where m = dy/dx |_{(x₁, y₁)}\nNormal: y − y₁ = (−1 / m) · (x − x₁)",
            "explanation": "Slope of normal is the negative reciprocal of tangent slope.",
            "mustKnow": true,
            "latex": "y - y_1 = m(x - x_1) \\quad \\text{where } m = \\left.\\frac{dy}{dx}\\right|_{(x_1, y_1)}, \\quad \\text{Normal: } y - y_1 = -\\frac{1}{m}(x - x_1)"
          },
          {
            "id": "app-extrema-tests",
            "title": "Maxima & Minima Criteria",
            "formula": "Critical point: f'(c) = 0 or f'(c) does not exist\n(1) Local Minimum: f'(c) = 0 and f''(c) > 0\n(2) Local Maximum: f'(c) = 0 and f''(c) < 0\n(3) Inconclusive: f''(c) = 0 (use higher derivatives or sign change)",
            "explanation": "Second derivative test for concavity and local extrema.",
            "mustKnow": true,
            "latex": "\\begin{aligned} Critical point: f'(c) = 0 or f'(c) does not exist \\\\ (1) Local Minimum: f'(c) = 0 and f''(c) > 0 \\\\ (2) Local Maximum: f'(c) = 0 and f''(c) < 0 \\\\ (3) Inconclusive: f''(c) = 0 (use higher derivatives or sign change) \\end{aligned}"
          },
          {
            "id": "app-rolle-lmvt",
            "title": "Rolle's & Lagrange's Mean Value Theorem",
            "formula": "Rolle's: If f(a)=f(b) on [a, b], then ∃ c ∈ (a, b) such that f'(c) = 0\nLMVT: ∃ c ∈ (a, b) such that f'(c) = [f(b) − f(a)] / (b − a)",
            "explanation": "Connects instantaneous slope to average slope over an interval.",
            "mustKnow": true,
            "latex": "\\text{LMVT: } \\exists c \\in (a, b) \\implies f'(c) = \\frac{f(b) - f(a)}{b - a}"
          }
        ]
      }
    ]
  },
  {
    "id": "integral-calculus",
    "slug": "integral-calculus",
    "name": "Integral Calculus",
    "shortName": "Integrals",
    "icon": "∫",
    "categoryGroup": "Calculus",
    "gradient": "from-red-600 to-pink-600",
    "accentColor": "border-red-600 text-red-600",
    "bgTint": "bg-red-600/10 text-red-600",
    "description": "Standard integrals, integration by parts (ILATE), King’s property, Newton-Leibniz & area under curves.",
    "examWeightage": "Very High (NIMCET ~6-8 Qs)",
    "quickTips": [
      "King's Property: ∫_a^b f(x) dx = ∫_a^b f(a + b − x) dx.",
      "∫ eˣ [f(x) + f'(x)] dx = eˣ · f(x) + C.",
      "Area between y² = 4ax and x² = 4by is 16ab / 3."
    ],
    "categories": [
      {
        "id": "int-standard",
        "name": "Standard Indefinite Integrals",
        "formulas": [
          {
            "id": "int-basic-powers",
            "title": "Power & Exponential Rules",
            "formula": "∫ xⁿ dx = (xⁿ⁺¹) / (n + 1) + C   (n ≠ −1)\n∫ (1/x) dx = ln|x| + C\n∫ eᵃˣ dx = (1/a) eᵃˣ + C  |  ∫ aˣ dx = aˣ / (ln a) + C",
            "explanation": "Elementary anti-derivatives.",
            "mustKnow": true,
            "latex": "\\int x^n \\, dx = \\frac{x^{n+1}}{n + 1} + C \\quad (n \\neq -1), \\quad \\int \\frac{1}{x} \\, dx = \\ln|x| + C, \\quad \\int e^{ax} \\, dx = \\frac{1}{a} e^{ax} + C"
          },
          {
            "id": "int-quadratic-radicals",
            "title": "Special Quadratic Integrals",
            "formula": "∫ dx / (x² + a²) = (1/a) tan⁻¹(x/a) + C\n∫ dx / (x² − a²) = [1 / (2a)] ln|(x − a)/(x + a)| + C\n∫ dx / √(a² − x²) = sin⁻¹(x/a) + C\n∫ dx / √(x² ± a²) = ln|x + √(x² ± a²)| + C",
            "explanation": "Crucial denominator square forms.",
            "mustKnow": true,
            "latex": "\\begin{aligned} \\int \\frac{dx}{x^2 + a^2} &= \\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right) + C \\\\ \\int \\frac{dx}{x^2 - a^2} &= \\frac{1}{2a}\\ln\\left|\\frac{x - a}{x + a}\\right| + C \\\\ \\int \\frac{dx}{\\sqrt{a^2 - x^2}} &= \\sin^{-1}\\left(\\frac{x}{a}\\right) + C \\\\ \\int \\frac{dx}{\\sqrt{x^2 \\pm a^2}} &= \\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right| + C \\end{aligned}"
          }
        ]
      },
      {
        "id": "int-parts-shortcuts",
        "name": "Integration by Parts & Super Shortcuts",
        "formulas": [
          {
            "id": "int-by-parts",
            "title": "Integration by Parts (ILATE Rule)",
            "formula": "∫ u v dx = u ∫ v dx − ∫ [u' (∫ v dx)] dx",
            "explanation": "Priority order for first function u: Inverse trig, Logarithmic, Algebraic, Trigonometric, Exponential.",
            "mustKnow": true,
            "latex": "\\int u \\, v \\, dx = u \\int v \\, dx - \\int \\left[ u' \\left(\\int v \\, dx\\right) \\right] dx"
          },
          {
            "id": "int-ex-f-fprime",
            "title": "Shortcut: ∫ eˣ [f(x) + f'(x)] dx",
            "formula": "∫ eˣ [f(x) + f'(x)] dx = eˣ · f(x) + C\nGeneral: ∫ e^{kx} [k f(x) + f'(x)] dx = e^{kx} · f(x) + C",
            "explanation": "Appears in virtually every MCA entrance paper.",
            "mustKnow": true,
            "shortcut": "🎯 Exam Question: ∫ eˣ (tan x + sec² x) dx = eˣ tan x + C in 1 second!",
            "latex": "\\int e^x \\left[ f(x) + f'(x) \\right] dx = e^x f(x) + C, \\quad \\int e^{kx} \\left[ k f(x) + f'(x) \\right] dx = e^{kx} f(x) + C"
          }
        ]
      },
      {
        "id": "int-definite-props",
        "name": "Definite Integrals & King’s Property",
        "formulas": [
          {
            "id": "int-kings-property",
            "title": "King's Property (Most Powerful)",
            "formula": "∫_a^b f(x) dx = ∫_a^b f(a + b − x) dx\nSpecial case (0 to a): ∫_0^a f(x) dx = ∫_0^a f(a − x) dx",
            "explanation": "Adding the original integral to the transformed integral usually cancels out complicated denominators!",
            "mustKnow": true,
            "shortcut": "🎯 Integral of form ∫_a^b [f(x) / (f(x) + f(a+b−x))] dx = (b − a) / 2.",
            "latex": "\\int_a^b f(x) \\, dx = \\int_a^b f(a + b - x) \\, dx, \\quad \\int_0^a f(x) \\, dx = \\int_0^a f(a - x) \\, dx"
          },
          {
            "id": "int-newton-leibniz",
            "title": "Newton-Leibniz Formula (Derivative of Integral)",
            "formula": "d/dx [∫_{u(x)}^{v(x)} f(t) dt] = f(v(x)) · v'(x) − f(u(x)) · u'(x)",
            "explanation": "Differentiating an integral with variable limits without evaluating the integral.",
            "mustKnow": true,
            "latex": "\\frac{d}{dx}\\left[\\int_{u(x)}^{v(x)} f(t) \\, dt\\right] = f(v(x))v'(x) - f(u(x))u'(x)"
          },
          {
            "id": "int-area-shortcuts",
            "title": "Area Bounded by Curves (Shortcuts)",
            "formula": "Area between y² = 4ax and x² = 4by = 16ab / 3\nArea bounded by y² = 4ax and y = mx = 8a² / (3m³)\nArea of ellipse x²/a² + y²/b² = 1 is π · a · b",
            "explanation": "Bypasses lengthy double integrations in competitive exams.",
            "mustKnow": true,
            "shortcut": "🎯 Direct formula: Area between y² = 4x and x² = 4y has a=1, b=1 ⇒ Area = 16(1)(1)/3 = 16/3.",
            "latex": "\\begin{aligned} \\text{Area between } y^2 = 4ax \\text{ and } x^2 = 4by &= \\frac{16ab}{3} \\\\ \\text{Area between } y^2 = 4ax \\text{ and } y = mx &= \\frac{8a^2}{3m^3} \\\\ \\text{Area of Ellipse } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 &= \\pi a b \\end{aligned}"
          }
        ]
      }
    ]
  },
  {
    "id": "differential-equations",
    "slug": "differential-equations",
    "name": "Differential Equations",
    "shortName": "Diff Eq",
    "icon": "⚡",
    "categoryGroup": "Calculus",
    "gradient": "from-orange-600 to-rose-700",
    "accentColor": "border-orange-600 text-orange-600",
    "bgTint": "bg-orange-600/10 text-orange-600",
    "description": "Order & degree, variable separable, homogeneous, linear differential equations & integrating factors.",
    "examWeightage": "Medium-High (NIMCET ~3-4 Qs)",
    "quickTips": [
      "Order is the highest derivative. Degree is the power of the highest derivative (when equation is polynomial in derivatives).",
      "For dy/dx + P(x) y = Q(x): Integrating Factor IF = e^{∫ P dx}.",
      "General solution: y · IF = ∫ (Q · IF) dx + C."
    ],
    "categories": [
      {
        "id": "diffeq-basics-linear",
        "name": "Order, Degree & Linear DE (Integrating Factor)",
        "formulas": [
          {
            "id": "diffeq-order-degree",
            "title": "Order and Degree of Differential Equation",
            "formula": "Order: Highest derivative order present\nDegree: Exponent of highest order derivative after making it free from radicals/fractions in derivatives",
            "explanation": "Degree is undefined if equation cannot be written as polynomial in derivatives (e.g. sin(dy/dx)).",
            "mustKnow": true,
            "commonMistake": "⚠️ If equation contains e^(dy/dx) or sin(dy/dx), degree is NOT defined!",
            "latex": "\\begin{aligned} Order: Highest derivative order present \\\\ Degree: Exponent of highest order derivative after making it free from radicals/fractions in derivatives \\end{aligned}"
          },
          {
            "id": "diffeq-linear-if",
            "title": "First-Order Linear Differential Equation",
            "formula": "Standard Form: dy/dx + P(x) · y = Q(x)\nIntegrating Factor IF = e^{∫ P(x) dx}\nSolution: y · (IF) = ∫ [Q(x) · (IF)] dx + C",
            "explanation": "The most commonly tested differential equation archetype.",
            "mustKnow": true,
            "latex": "\\begin{aligned} Standard Form: dy/dx + P(x)  \\cdot  y = Q(x) \\\\ Integrating Factor IF = e^{ \\int  P(x) dx} \\\\ Solution: y  \\cdot  (IF) =  \\int  [Q(x)  \\cdot  (IF)] dx + C \\end{aligned}"
          },
          {
            "id": "diffeq-homogeneous",
            "title": "Homogeneous Differential Equation",
            "formula": "dy/dx = f(y / x)\nSubstitution: Put y = v x  ⇒  dy/dx = v + x (dv/dx)",
            "explanation": "Transforms homogeneous equation into variable separable form.",
            "mustKnow": true,
            "latex": "\\begin{aligned} dy/dx = f\\frac{y}{x} \\\\ Substitution: Put y = v x   \\implies   dy/dx = v + x \\frac{dv}{dx} \\end{aligned}"
          }
        ]
      }
    ]
  },
  {
    "id": "number-system",
    "slug": "number-system",
    "name": "Number System & Modular Arithmetic",
    "shortName": "Numbers",
    "icon": "🔢",
    "categoryGroup": "Discrete & Modern",
    "gradient": "from-amber-600 to-yellow-600",
    "accentColor": "border-amber-600 text-amber-600",
    "bgTint": "bg-amber-600/10 text-amber-600",
    "description": "Divisibility rules, GCD/LCM, unit digits cyclicity, Euler’s totient φ(n), Fermat’s theorem & remainder rules.",
    "examWeightage": "Medium-High (NIMCET ~3-5 Qs)",
    "quickTips": [
      "Product of two numbers = LCM × GCD (HCF).",
      "Cyclicity of powers: 2, 3, 7, 8 have cyclicity 4. 4 and 9 have cyclicity 2. 0, 1, 5, 6 have cyclicity 1.",
      "Fermat's Little Theorem: If p is prime and gcd(a, p) = 1, then a^{p−1} ≡ 1 (mod p)."
    ],
    "categories": [
      {
        "id": "num-divisibility-gcd",
        "name": "Divisibility Rules & GCD/LCM",
        "formulas": [
          {
            "id": "num-gcd-lcm-relation",
            "title": "Product Formula for GCD and LCM",
            "formula": "a · b = GCD(a, b) · LCM(a, b)\nFor fractions: GCD(a/b, c/d) = GCD(a, c) / LCM(b, d)\nLCM(a/b, c/d) = LCM(a, c) / GCD(b, d)",
            "explanation": "LCM of fractions is LCM of numerators divided by GCD of denominators.",
            "mustKnow": true,
            "latex": "\\begin{aligned} a  \\cdot  b = GCD(a, b)  \\cdot  LCM(a, b) \\\\ For fractions: GCD(a/b, c/d) = GCD(a, c) / LCM(b, d) \\\\ LCM(a/b, c/d) = LCM(a, c) / GCD(b, d) \\end{aligned}"
          },
          {
            "id": "num-divisibility-7-11-13",
            "title": "Divisibility Rules for 7, 11, and 13",
            "formula": "Rule of 1001: Group number into blocks of 3 digits from right; alternating sum of blocks must be divisible by 7, 11, or 13.\nRule of 11: (Sum of digits at odd places) − (Sum of digits at even places) is multiple of 11.",
            "explanation": "Rapid competitive test for large numbers.",
            "mustKnow": true,
            "latex": "\\begin{aligned} Rule of 1001: Group number into blocks of 3 digits from right; alternating sum of blocks must be divisible by 7, 11, or 13. \\\\ Rule of 11: (Sum of digits at odd places) − (Sum of digits at even places) is multiple of 11. \\end{aligned}"
          }
        ]
      },
      {
        "id": "num-mod-theorems",
        "name": "Remainders & Cyclicity Shortcuts",
        "formulas": [
          {
            "id": "num-cyclicity",
            "title": "Unit Digit Cyclicity Rule",
            "formula": "Cycle of 4 for {2, 3, 7, 8}: Divide power by 4, remainder gives index.\nIf power divisible by 4 (remainder 0):\n2⁴ → 6,  3⁴ → 1,  7⁴ → 1,  8⁴ → 6",
            "explanation": "Solves unit digit of large powers aᵇ instantly.",
            "mustKnow": true,
            "shortcut": "🎯 Example: Unit digit of 7⁹⁵ = 7^{4×23 + 3} = unit digit of 7³ = 343 ⇒ 3.",
            "latex": "\\begin{aligned} Cycle of 4 for {2, 3, 7, 8}: Divide power by 4, remainder gives index. \\\\ If power divisible by 4 (remainder 0): \\\\ 2^4 → 6,  3^4 → 1,  7^4 → 1,  8^4 → 6 \\end{aligned}"
          },
          {
            "id": "num-fermat-euler",
            "title": "Fermat's Little Theorem & Euler's Totient",
            "formula": "Fermat: a^{p−1} ≡ 1 (mod p)   where p is prime, gcd(a, p) = 1\nEuler: a^{φ(n)} ≡ 1 (mod n)   where gcd(a, n) = 1\nTotient: φ(n) = n · ∏ (1 − 1/pᵢ)",
            "explanation": "Solves massive remainder problems like (2¹⁰² mod 101) = 2^{100}·2² ≡ 1·4 = 4.",
            "mustKnow": true,
            "shortcut": "🎯 When divisor is prime p, power can be reduced modulo (p − 1)!",
            "latex": "\\begin{aligned} Fermat: a^{p−1} ≡ 1 (mod p)   where p is prime, gcd(a, p) = 1 \\\\ Euler: a^{φ(n)} ≡ 1 (mod n)   where gcd(a, n) = 1 \\\\ Totient: φ(n) = n  \\cdot  ∏ (1 − 1/p_i) \\end{aligned}"
          }
        ]
      }
    ]
  }
];
