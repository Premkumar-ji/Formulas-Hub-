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
            "latex": "\\sin\\theta = \\frac{1}{\\csc\\theta}, \\quad \\cos\\theta = \\frac{1}{\\sec\\theta}, \\quad \\tan\\theta = \\frac{1}{\\cot\\theta}",
            "table": {
              "headers": [
                "Trigonometric Function",
                "Reciprocal / Quotient Identity"
              ],
              "rows": [
                {
                  "feature": "Cosecant (csc θ)",
                  "value": "1 / sin θ",
                  "latex": "\\csc\\theta = \\frac{1}{\\sin\\theta}"
                },
                {
                  "feature": "Secant (sec θ)",
                  "value": "1 / cos θ",
                  "latex": "\\sec\\theta = \\frac{1}{\\cos\\theta}"
                },
                {
                  "feature": "Cotangent (cot θ)",
                  "value": "1 / tan θ",
                  "latex": "\\cot\\theta = \\frac{1}{\\tan\\theta}"
                },
                {
                  "feature": "Tangent Quotient",
                  "value": "sin θ / cos θ",
                  "latex": "\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}"
                },
                {
                  "feature": "Cotangent Quotient",
                  "value": "cos θ / sin θ",
                  "latex": "\\cot\\theta = \\frac{\\cos\\theta}{\\sin\\theta}"
                }
              ]
            }
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
            "latex": "\\begin{aligned} sinC + sinD = 2 \\sin ((C+D)/2) \\cos ((C−D)/2) \\\\ sinC − sinD = 2 \\cos ((C+D)/2) \\sin ((C−D)/2) \\\\ cosC + cosD = 2 \\cos ((C+D)/2) \\cos ((C−D)/2) \\\\ cosC − cosD = 2 \\sin ((C+D)/2) \\sin ((D−C)/2) = −2 \\sin ((C+D)/2) \\sin ((C−D)/2) \\end{aligned}",
            "table": {
              "headers": [
                "Sum / Difference of Waves",
                "Factored Product Formula"
              ],
              "rows": [
                {
                  "feature": "sin C + sin D",
                  "value": "2 sin((C + D)/2) cos((C - D)/2)",
                  "latex": "2\\sin\\left(\\frac{C + D}{2}\\right)\\cos\\left(\\frac{C - D}{2}\\right)"
                },
                {
                  "feature": "sin C - sin D",
                  "value": "2 cos((C + D)/2) sin((C - D)/2)",
                  "latex": "2\\cos\\left(\\frac{C + D}{2}\\right)\\sin\\left(\\frac{C - D}{2}\\right)"
                },
                {
                  "feature": "cos C + cos D",
                  "value": "2 cos((C + D)/2) cos((C - D)/2)",
                  "latex": "2\\cos\\left(\\frac{C + D}{2}\\right)\\cos\\left(\\frac{C - D}{2}\\right)"
                },
                {
                  "feature": "cos C - cos D",
                  "value": "-2 sin((C + D)/2) sin((C - D)/2) = 2 sin((C + D)/2) sin((D - C)/2)",
                  "latex": "-2\\sin\\left(\\frac{C + D}{2}\\right)\\sin\\left(\\frac{C - D}{2}\\right) = 2\\sin\\left(\\frac{C + D}{2}\\right)\\sin\\left(\\frac{D - C}{2}\\right)"
                }
              ]
            }
          },
          {
            "id": "trig-prod-to-sum",
            "title": "Product to Sum Formulas",
            "formula": "2 sinA cosB = sin(A+B) + sin(A−B)\n2 cosA sinB = sin(A+B) − sin(A−B)\n2 cosA cosB = cos(A+B) + cos(A−B)\n2 sinA sinB = cos(A−B) − cos(A+B)",
            "explanation": "Standard integration tool to linearize multiplied sine/cosine.",
            "mustKnow": true,
            "latex": "\\begin{aligned} 2\\sin A\\cos B &= \\sin(A+B) + \\sin(A-B) \\\\ 2\\cos A\\sin B &= \\sin(A+B) - \\sin(A-B) \\\\ 2\\cos A\\cos B &= \\cos(A+B) + \\cos(A-B) \\\\ 2\\sin A\\sin B &= \\cos(A-B) - \\cos(A+B) \\end{aligned}",
            "table": {
              "headers": [
                "Product Expression",
                "Sum / Difference Representation"
              ],
              "rows": [
                {
                  "feature": "2 sin A cos B",
                  "value": "sin(A + B) + sin(A - B)",
                  "latex": "\\sin(A + B) + \\sin(A - B)"
                },
                {
                  "feature": "2 cos A sin B",
                  "value": "sin(A + B) - sin(A - B)",
                  "latex": "\\sin(A + B) - \\sin(A - B)"
                },
                {
                  "feature": "2 cos A cos B",
                  "value": "cos(A + B) + cos(A - B)",
                  "latex": "\\cos(A + B) + \\cos(A - B)"
                },
                {
                  "feature": "2 sin A sin B",
                  "value": "cos(A - B) - cos(A + B)",
                  "latex": "\\cos(A - B) - \\cos(A + B)"
                }
              ]
            }
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
    "description": "Classical & axiomatic probability, deck & dice facts, conditional probability, Bayes’ theorem, independence, binomial & discrete distributions.",
    "examWeightage": "Very High (NIMCET ~5-7 Qs)",
    "quickTips": [
      "Two dice sum shortcut: For sum 2 ≤ S ≤ 7, ways = S − 1; for 8 ≤ S ≤ 12, ways = 13 − S. Sum 7 has peak probability 6/36 = 1/6.",
      "P(A ∪ B) = P(A) + P(B) − P(A ∩ B). If mutually exclusive, P(A ∩ B) = 0.",
      "For independent events: P(A ∩ B) = P(A) · P(B) and P(at least one) = 1 − ∏[1 − P(Aᵢ)].",
      "Deck of 52 cards = 26 Red + 26 Black = 4 suits × 13 ranks. 12 Face cards (4K, 4Q, 4J) and 16 Honor cards (4A + 12 Face).",
      "Binomial B(n, p): Mean = np, Var = npq. Mean > Variance always. Max variance = n/4 when p = q = 1/2."
    ],
    "categories": [
      {
        "id": "prob-fundamentals",
        "name": "Classical Probability, Sample Spaces & Addition Theorems",
        "formulas": [
          {
            "id": "prob-classical",
            "title": "Classical Probability & Range",
            "formula": "P(E) = n(E) / n(S),   0 ≤ P(E) ≤ 1\nP(E') = 1 − P(E)",
            "explanation": "n(E) = favourable elementary outcomes, n(S) = total outcomes in sample space S. Impossible event: P(∅) = 0, Sure event: P(S) = 1.",
            "mustKnow": true,
            "remember": "Memory: Favourable ÷ Total outcomes; Total certainty = 1.",
            "shortcut": "🎯 Worked Example: Roll a fair 6-sided die. P(even) = 3/6 = 1/2 for favourable set {2, 4, 6}.",
            "latex": "P(E) = \\frac{n(E)}{n(S)}, \\quad 0 \\le P(E) \\le 1, \\quad P(E') = 1 - P(E)"
          },
          {
            "id": "prob-sample-spaces",
            "title": "Sample Space Sizes n(S) (NIMCET Add)",
            "formula": "2 coins → 4  |  3 coins → 8  |  1 die → 6  |  2 dice → 36  |  deck → 52",
            "explanation": "Standard total sample space sizes n(S) that appear repeatedly in MCA entrance and competitive exams — memorise cold instead of recomputing under pressure.",
            "mustKnow": true,
            "remember": "Memory: Know these values cold — saves critical seconds under pressure.",
            "shortcut": "🎯 Shortcut: Rolling 2 dice has 36 outcomes. Sum 7 has 6 favourable pairs → P(Sum=7) = 6/36 = 1/6.",
            "latex": "n(S)_{\\text{coins}} = 2^n, \\quad n(S)_{\\text{dice}} = 6^n, \\quad n(S)_{\\text{deck}} = 52",
            "table": {
              "headers": [
                "Random Experiment / Trial",
                "Sample Space Size n(S)"
              ],
              "rows": [
                {
                  "feature": "Single Fair Coin Toss",
                  "value": "n(S) = 2¹ = 2 ({H, T})",
                  "latex": "n(S) = 2^1 = 2 \\quad \\{H, T\\}"
                },
                {
                  "feature": "Toss of 2 Coins (or 1 Coin Twice)",
                  "value": "n(S) = 2² = 4 ({HH, HT, TH, TT})",
                  "latex": "n(S) = 2^2 = 4 \\quad \\{HH, HT, TH, TT\\}"
                },
                {
                  "feature": "Toss of 3 Coins",
                  "value": "n(S) = 2³ = 8",
                  "latex": "n(S) = 2^3 = 8"
                },
                {
                  "feature": "Toss of n Coins (General)",
                  "value": "n(S) = 2ⁿ",
                  "latex": "n(S) = 2^n"
                },
                {
                  "feature": "Single 6-Sided Die Roll",
                  "value": "n(S) = 6¹ = 6 ({1, 2, 3, 4, 5, 6})",
                  "latex": "n(S) = 6^1 = 6 \\quad \\{1, 2, 3, 4, 5, 6\\}"
                },
                {
                  "feature": "Pair of 2 Dice Rolled",
                  "value": "n(S) = 6² = 36 ({ (1,1), ..., (6,6) })",
                  "latex": "n(S) = 6^2 = 36 \\quad \\{(1,1), \\dots, (6,6)\\}"
                },
                {
                  "feature": "Rolling of n Dice",
                  "value": "n(S) = 6ⁿ",
                  "latex": "n(S) = 6^n"
                },
                {
                  "feature": "Standard Deck of Playing Cards",
                  "value": "n(S) = 52 cards",
                  "latex": "n(S) = 52 \\text{ cards}"
                }
              ]
            }
          },
          {
            "id": "prob-deck-cards",
            "title": "Deck of 52 Cards Facts & Breakdown (NIMCET Add)",
            "formula": "52 Cards = 26 Red + 26 Black | 4 Suits × 13 Cards | 12 Face Cards",
            "explanation": "Standard 52-card playing deck breakdown essential for solving playing cards probability problems in competitive exams.",
            "mustKnow": true,
            "remember": "Memory: 52 = 4 × 13; Face cards = 3 × 4 = 12; Honor cards = 4 × 4 = 16.",
            "shortcut": "🎯 Quick Values: P(Face Card) = 12/52 = 3/13 | P(Red Honor) = 8/52 = 2/13 | P(Spade or Ace) = (13 + 3)/52 = 4/13.",
            "latex": "N = 52, \\quad \\text{Suits} = 4 \\times 13, \\quad \\text{Face} = 12, \\quad \\text{Honor} = 16",
            "table": {
              "headers": [
                "Card Category / Property",
                "Count & Mathematical Breakdown"
              ],
              "rows": [
                {
                  "feature": "Total Pack Size",
                  "value": "52 cards (4 suits of 13 cards each)",
                  "latex": "52 \\text{ cards} \\quad (4 \\times 13)"
                },
                {
                  "feature": "Color Breakdown",
                  "value": "26 Red (Hearts ♥, Diamonds ♦) and 26 Black (Spades ♠, Clubs ♣)",
                  "latex": "26 \\text{ Red } (\\heartsuit, \\diamondsuit), \\quad 26 \\text{ Black } (\\spadesuit, \\clubsuit)"
                },
                {
                  "feature": "Four Suits (13 cards each)",
                  "value": "13 Spades (♠), 13 Clubs (♣), 13 Hearts (♥), 13 Diamonds (♦)",
                  "latex": "13\\spadesuit, \\quad 13\\clubsuit, \\quad 13\\heartsuit, \\quad 13\\diamondsuit"
                },
                {
                  "feature": "Face (Court) Cards",
                  "value": "12 cards (4 Kings, 4 Queens, 4 Jacks) — 6 Red, 6 Black",
                  "latex": "12 \\text{ cards } (4K, 4Q, 4J) \\implies P = \\frac{12}{52} = \\frac{3}{13}"
                },
                {
                  "feature": "Honor Cards (Aces + Face Cards)",
                  "value": "16 cards (4 Aces + 12 Face Cards)",
                  "latex": "16 \\text{ cards } (4A + 4K + 4Q + 4J) \\implies P = \\frac{16}{52} = \\frac{4}{13}"
                },
                {
                  "feature": "Numbered (Pip) Cards",
                  "value": "36 cards (numbers 2 through 10 in each of 4 suits)",
                  "latex": "36 \\text{ cards } (9 \\times 4) \\implies P = \\frac{36}{52} = \\frac{9}{13}"
                },
                {
                  "feature": "Non-Face Cards",
                  "value": "40 cards (36 numbered cards + 4 Aces)",
                  "latex": "40 \\text{ cards} \\implies P = \\frac{40}{52} = \\frac{10}{13}"
                },
                {
                  "feature": "Aces Count",
                  "value": "4 cards (1 per suit: 2 Red, 2 Black)",
                  "latex": "4 \\text{ Aces} \\implies P(\\text{Ace}) = \\frac{4}{52} = \\frac{1}{13}"
                }
              ]
            }
          },
          {
            "id": "prob-dice-sums",
            "title": "Two Dice Sums Frequency & Shortcut Table (NIMCET Add)",
            "formula": "Sum 2 to 12 on 2 Dice | Peak at Sum 7 (P = 6/36 = 1/6) | Symmetric",
            "explanation": "High-yield distribution of sums when two fair dice are thrown. The outcomes form a triangular distribution symmetric about sum 7.",
            "mustKnow": true,
            "remember": "Memory: Symmetric pyramid centered at 7. Peak frequency is 6.",
            "shortcut": "🎯 Shortcut Count Rule: For sum 2 ≤ S ≤ 7, ways = S − 1. For sum 8 ≤ S ≤ 12, ways = 13 − S.",
            "latex": "P(S) = \\begin{cases} \\frac{S - 1}{36} & 2 \\le S \\le 7 \\\\[4pt] \\frac{13 - S}{36} & 8 \\le S \\le 12 \\end{cases}",
            "table": {
              "headers": [
                "Sum on 2 Dice (S)",
                "Favourable Pairs & Exact Probability"
              ],
              "rows": [
                {
                  "feature": "Sum = 2 or 12",
                  "value": "1 pair: (1,1) or (6,6) → P = 1/36",
                  "latex": "1 \\text{ pair} \\implies P = \\frac{1}{36}"
                },
                {
                  "feature": "Sum = 3 or 11",
                  "value": "2 pairs: (1,2),(2,1) or (5,6),(6,5) → P = 2/36 = 1/18",
                  "latex": "2 \\text{ pairs} \\implies P = \\frac{2}{36} = \\frac{1}{18}"
                },
                {
                  "feature": "Sum = 4 or 10",
                  "value": "3 pairs: (1,3),(2,2),(3,1) or (4,6),(5,5),(6,4) → P = 3/36 = 1/12",
                  "latex": "3 \\text{ pairs} \\implies P = \\frac{3}{36} = \\frac{1}{12}"
                },
                {
                  "feature": "Sum = 5 or 9",
                  "value": "4 pairs → P = 4/36 = 1/9",
                  "latex": "4 \\text{ pairs} \\implies P = \\frac{4}{36} = \\frac{1}{9}"
                },
                {
                  "feature": "Sum = 6 or 8",
                  "value": "5 pairs → P = 5/36",
                  "latex": "5 \\text{ pairs} \\implies P = \\frac{5}{36}"
                },
                {
                  "feature": "Sum = 7 (Maximum Frequency)",
                  "value": "6 pairs: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) → P = 6/36 = 1/6",
                  "latex": "6 \\text{ pairs (Peak)} \\implies P = \\frac{6}{36} = \\frac{1}{6}"
                },
                {
                  "feature": "Any Doublet (Equal Numbers)",
                  "value": "6 pairs: (1,1),(2,2),(3,3),(4,4),(5,5),(6,6) → P = 6/36 = 1/6",
                  "latex": "6 \\text{ pairs} \\implies P(\\text{Doublet}) = \\frac{6}{36} = \\frac{1}{6}"
                }
              ]
            }
          },
          {
            "id": "prob-addition-2",
            "title": "Addition Theorem (2 Events) & Set Relations",
            "formula": "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
            "explanation": "Axiomatic probability relations for union, intersection, symmetric difference, and complement of two arbitrary events.",
            "mustKnow": true,
            "remember": "Memory: Add both individual probabilities, then subtract overlap once.",
            "shortcut": "🎯 Exactly one of A or B occurs = P(A ∪ B) − P(A ∩ B) = P(A) + P(B) − 2P(A ∩ B).",
            "latex": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
            "table": {
              "headers": [
                "Event Set Condition / Description",
                "Mathematical Formula"
              ],
              "rows": [
                {
                  "feature": "General Union (At least one occurs)",
                  "value": "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
                  "latex": "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"
                },
                {
                  "feature": "Mutually Exclusive Events (A ∩ B = ∅)",
                  "value": "P(A ∪ B) = P(A) + P(B)  (since P(A ∩ B) = 0)",
                  "latex": "P(A \\cup B) = P(A) + P(B) \\quad (P(A \\cap B) = 0)"
                },
                {
                  "feature": "Only Event A Occurs (A − B)",
                  "value": "P(A ∩ B') = P(A) − P(A ∩ B)",
                  "latex": "P(A \\cap B') = P(A) - P(A \\cap B)"
                },
                {
                  "feature": "Only Event B Occurs (B − A)",
                  "value": "P(B ∩ A') = P(B) − P(A ∩ B)",
                  "latex": "P(B \\cap A') = P(B) - P(A \\cap B)"
                },
                {
                  "feature": "Exactly One of A or B Occurs",
                  "value": "P(A Δ B) = P(A) + P(B) − 2P(A ∩ B)",
                  "latex": "P(A \\Delta B) = P(A) + P(B) - 2P(A \\cap B)"
                },
                {
                  "feature": "Neither A nor B Occurs (De Morgan's)",
                  "value": "P(A' ∩ B') = 1 − P(A ∪ B)",
                  "latex": "P(A' \\cap B') = 1 - P(A \\cup B)"
                },
                {
                  "feature": "At Least One Does Not Occur",
                  "value": "P(A' ∪ B') = 1 − P(A ∩ B)",
                  "latex": "P(A' \\cup B') = 1 - P(A \\cap B)"
                }
              ]
            }
          },
          {
            "id": "prob-addition-3",
            "title": "Addition Theorem (3 Events) & Multi-Set Relations",
            "formula": "P(A∪B∪C) = ∑P(A) − ∑P(A∩B) + P(A∩B∩C)",
            "explanation": "Inclusion-Exclusion theorem and partition breakdowns for three arbitrary events.",
            "mustKnow": true,
            "remember": "Memory: + (Singles) − (Pairs) + (Triple overlap).",
            "latex": "P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - [P(A \\cap B) + P(B \\cap C) + P(C \\cap A)] + P(A \\cap B \\cap C)",
            "table": {
              "headers": [
                "Three-Event Condition",
                "Mathematical Formula"
              ],
              "rows": [
                {
                  "feature": "At Least One of A, B, C Occurs",
                  "value": "P(A ∪ B ∪ C) = ∑P(A) − ∑P(A ∩ B) + P(A ∩ B ∩ C)",
                  "latex": "P(A \\cup B \\cup C) = \\sum P(A) - \\sum P(A \\cap B) + P(A \\cap B \\cap C)"
                },
                {
                  "feature": "Exactly One of A, B, C Occurs",
                  "value": "∑P(A) − 2∑P(A ∩ B) + 3P(A ∩ B ∩ C)",
                  "latex": "\\sum P(A) - 2\\sum P(A \\cap B) + 3P(A \\cap B \\cap C)"
                },
                {
                  "feature": "Exactly Two of A, B, C Occur",
                  "value": "∑P(A ∩ B) − 3P(A ∩ B ∩ C)",
                  "latex": "\\sum P(A \\cap B) - 3P(A \\cap B \\cap C)"
                },
                {
                  "feature": "At Least Two of A, B, C Occur",
                  "value": "∑P(A ∩ B) − 2P(A ∩ B ∩ C)",
                  "latex": "\\sum P(A \\cap B) - 2P(A \\cap B \\cap C)"
                },
                {
                  "feature": "None of the Three Occurs",
                  "value": "P(A' ∩ B' ∩ C') = 1 − P(A ∪ B ∪ C)",
                  "latex": "P(A' \\cap B' \\cap C') = 1 - P(A \\cup B \\cup C)"
                }
              ]
            }
          },
          {
            "id": "prob-odds",
            "title": "Odds in Favour & Odds Against (NIMCET Add)",
            "formula": "Odds in favour = P(E)/P(E') = m/n  ⇒  P(E) = m/(m+n)\nOdds against = P(E')/P(E) = n/m  ⇒  P(E) = m/(m+n)",
            "explanation": "Conversion between competitive exam odds ratios and exact probability values.",
            "mustKnow": true,
            "remember": "Memory: Favour = for ÷ against; Against = against ÷ for. Total parts = sum of ratio numbers.",
            "shortcut": "🎯 Trick: If odds against solving a problem are 3 to 2, then favourable = 2, unfavourable = 3, so P = 2/(2+3) = 2/5.",
            "latex": "\\text{Odds in Favour} = \\frac{P(E)}{P(E')} = \\frac{m}{n} \\implies P(E) = \\frac{m}{m + n}, \\quad P(E') = \\frac{n}{m + n}",
            "table": {
              "headers": [
                "Odds Concept / Expression",
                "Formula & Exact Probability"
              ],
              "rows": [
                {
                  "feature": "Definition of Odds in Favour",
                  "value": "Ratio of favourable outcomes to unfavourable outcomes: m/n",
                  "latex": "\\text{Odds in Favour} = \\frac{P(E)}{P(E')} = \\frac{m}{n}"
                },
                {
                  "feature": "Probability from Odds in Favour (m : n)",
                  "value": "P(E) = m / (m + n),  P(E') = n / (m + n)",
                  "latex": "P(E) = \\frac{m}{m+n}, \\quad P(E') = \\frac{n}{m+n}"
                },
                {
                  "feature": "Definition of Odds Against",
                  "value": "Ratio of unfavourable outcomes to favourable outcomes: a/b",
                  "latex": "\\text{Odds Against} = \\frac{P(E')}{P(E)} = \\frac{a}{b}"
                },
                {
                  "feature": "Probability from Odds Against (a : b)",
                  "value": "P(E) = b / (a + b),  P(E') = a / (a + b)",
                  "latex": "P(E) = \\frac{b}{a+b}, \\quad P(E') = \\frac{a}{a+b}"
                },
                {
                  "feature": "Fundamental Reciprocal Property",
                  "value": "Odds in Favour × Odds Against = 1",
                  "latex": "\\text{Odds in Favour}(E) \\times \\text{Odds Against}(E) = 1"
                }
              ]
            }
          }
        ]
      },
      {
        "id": "prob-conditional",
        "name": "Conditional Probability & Independence",
        "formulas": [
          {
            "id": "prob-cond-def",
            "title": "Conditional Probability & Multiplication Theorem",
            "formula": "P(A | B) = P(A ∩ B) / P(B),   P(B) > 0\nP(A ∩ B) = P(B) · P(A | B) = P(A) · P(B | A)",
            "explanation": "Probability of event A occurring given that event B has already occurred. Occurrence of condition B shrinks the entire sample space down to event B.",
            "mustKnow": true,
            "remember": "Memory: Condition shrinks the universe from S down to B.",
            "shortcut": "🎯 Three events multiplication rule: P(A ∩ B ∩ C) = P(A) · P(B | A) · P(C | A ∩ B).",
            "latex": "P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)}, \\quad P(A \\cap B) = P(B) P(A \\mid B) = P(A) P(B \\mid A)"
          },
          {
            "id": "prob-independent",
            "title": "Independent Events & Associated Theorems",
            "formula": "P(A ∩ B) = P(A) · P(B)   ⇔   P(A | B) = P(A)",
            "explanation": "Occurrence of event B provides zero information regarding event A. Crucial theorem: If A and B are independent, so are (A, B'), (A', B), and (A', B').",
            "mustKnow": true,
            "remember": "Memory: If events don't affect each other, probabilities multiply directly.",
            "commonMistake": "⚠️ Mutually Exclusive ≠ Independent! Two non-empty events cannot be both simultaneously. If disjoint, P(A ∩ B) = 0 ≠ P(A)·P(B).",
            "latex": "P(A \\cap B) = P(A) \\cdot P(B) \\iff P(A \\mid B) = P(A)",
            "table": {
              "headers": [
                "Independence Feature / Theorem",
                "Mathematical Expression"
              ],
              "rows": [
                {
                  "feature": "Definition Condition",
                  "value": "P(A ∩ B) = P(A) · P(B)",
                  "latex": "P(A \\cap B) = P(A) \\cdot P(B) \\iff P(A \\mid B) = P(A)"
                },
                {
                  "feature": "Complement Theorem 1",
                  "value": "If A, B are independent ⇒ A and B' are independent",
                  "latex": "P(A \\cap B') = P(A) P(B') = P(A)[1 - P(B)]"
                },
                {
                  "feature": "Complement Theorem 2",
                  "value": "If A, B are independent ⇒ A' and B' are independent",
                  "latex": "P(A' \\cap B') = P(A') P(B') = [1 - P(A)][1 - P(B)]"
                },
                {
                  "feature": "At Least One of Two Independent Events",
                  "value": "P(A ∪ B) = 1 − P(A')·P(B')",
                  "latex": "P(A \\cup B) = 1 - P(A')P(B') = 1 - [1 - P(A)][1 - P(B)]"
                },
                {
                  "feature": "Exactly One of Two Independent Events",
                  "value": "P(A)·P(B') + P(A')·P(B)",
                  "latex": "P(A)(1 - P(B)) + P(B)(1 - P(A))"
                },
                {
                  "feature": "Mutually Exclusive vs Independent",
                  "value": "If P(A)>0, P(B)>0: Disjoint events (P(A∩B)=0) are NEVER independent",
                  "latex": "P(A \\cap B) = 0 \\implies P(A \\cap B) \\ne P(A)P(B)"
                }
              ]
            }
          },
          {
            "id": "prob-at-least-one",
            "title": "At Least One Event Occurring (n Independent Events)",
            "formula": "P(at least one of A₁, A₂, ..., Aₙ) = 1 − P(A₁') · P(A₂') · ... · P(Aₙ')",
            "explanation": "Premier competitive exam shortcut: Always solve \"at least one\" via the complement of \"none occurs\".",
            "mustKnow": true,
            "remember": "Memory: At least one = 1 − None.",
            "shortcut": "🎯 Example: Toss n coins. P(at least 1 head) = 1 − P(no heads) = 1 − (1/2)ⁿ.",
            "latex": "P(\\text{at least one}) = 1 - \\prod_{i=1}^n [1 - P(A_i)] = 1 - P(A_1')P(A_2')\\dots P(A_n')"
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
            "explanation": "Weighted sum of probabilities across mutually exclusive and exhaustive partition states E₁, E₂, ..., Eₙ of sample space S.",
            "mustKnow": true,
            "remember": "Memory: Sum of all path probabilities leading to target outcome A.",
            "latex": "P(A) = \\sum_{i=1}^n P(E_i) \\cdot P(A \\mid E_i) \\quad \\text{where } \\bigcup_{i=1}^n E_i = S, \\; E_i \\cap E_j = \\emptyset"
          },
          {
            "id": "prob-bayes",
            "title": "Bayes' Theorem (Reverse / Inverse Probability)",
            "formula": "P(Eₖ | A) = [P(Eₖ) · P(A | Eₖ)] / (∑ [P(Eᵢ) · P(A | Eᵢ)])",
            "explanation": "Computes posterior probability of cause Eₖ given that evidence or effect A has occurred.",
            "mustKnow": true,
            "remember": "Memory: Posterior = (Target path) ÷ (Sum of all possible paths).",
            "shortcut": "🎯 Template: P(Eₖ | A) = (Prior × Likelihood) / (Total Evidence P(A)).",
            "latex": "P(E_k \\mid A) = \\frac{P(E_k) \\cdot P(A \\mid E_k)}{\\sum_{i=1}^n P(E_i) \\cdot P(A \\mid E_i)}",
            "table": {
              "headers": [
                "Bayes' Component / Step",
                "Mathematical Interpretation"
              ],
              "rows": [
                {
                  "feature": "Prior Probability: P(Eₖ)",
                  "value": "Initial probability of hypothesis/cause before observing evidence A",
                  "latex": "P(E_k) \\quad (\\text{Prior Belief})"
                },
                {
                  "feature": "Likelihood: P(A | Eₖ)",
                  "value": "Probability that evidence A occurs given hypothesis Eₖ is true",
                  "latex": "P(A \\mid E_k) \\quad (\\text{Likelihood})"
                },
                {
                  "feature": "Total Evidence (Denominator)",
                  "value": "Sum of all path probabilities leading to A: ∑ P(Eᵢ)·P(A|Eᵢ)",
                  "latex": "P(A) = \\sum_{i=1}^n P(E_i) P(A \\mid E_i)"
                },
                {
                  "feature": "Posterior Probability: P(Eₖ | A)",
                  "value": "Updated probability of cause Eₖ after evidence A is witnessed",
                  "latex": "P(E_k \\mid A) = \\frac{P(E_k) P(A \\mid E_k)}{P(A)}"
                }
              ]
            }
          }
        ]
      },
      {
        "id": "prob-distributions",
        "name": "Random Variables & Probability Distributions",
        "formulas": [
          {
            "id": "prob-expectation-variance",
            "title": "Expectation E(X), Variance Var(X) & Linear Properties",
            "formula": "E(X) = μ = ∑ xᵢ P(xᵢ)\nVar(X) = σ² = E(X²) − [E(X)]² = ∑ xᵢ² P(xᵢ) − μ²\nSD = σ = √(Var(X))",
            "explanation": "Fundamental moments measuring central tendency and dispersion of a discrete random variable with PMF P(X = xᵢ).",
            "mustKnow": true,
            "remember": "Memory: Mean shifts with addition, variance scales only with multiplication.",
            "shortcut": "🎯 Adding a constant shifts mean: E(X+b) = E(X)+b, but does NOT alter spread: Var(X+b) = Var(X).",
            "latex": "\\mu = E(X) = \\sum x_i P(x_i), \\quad \\sigma^2 = \\text{Var}(X) = E(X^2) - [E(X)]^2, \\quad \\sigma = \\sqrt{\\text{Var}(X)}",
            "table": {
              "headers": [
                "Property / Transformation",
                "Mathematical Formula"
              ],
              "rows": [
                {
                  "feature": "Expected Value (Mean μ)",
                  "value": "E(X) = ∑ xᵢ P(xᵢ)",
                  "latex": "E(X) = \\mu = \\sum_{i} x_i P(x_i)"
                },
                {
                  "feature": "Variance (σ²)",
                  "value": "Var(X) = E(X²) − [E(X)]²",
                  "latex": "\\text{Var}(X) = \\sigma^2 = E(X^2) - [E(X)]^2"
                },
                {
                  "feature": "Standard Deviation (σ)",
                  "value": "SD(X) = √(Var(X))",
                  "latex": "\\sigma = \\sqrt{\\text{Var}(X)}"
                },
                {
                  "feature": "Expectation of Linear Function",
                  "value": "E(aX + b) = a·E(X) + b",
                  "latex": "E(aX + b) = a E(X) + b"
                },
                {
                  "feature": "Variance of Linear Function",
                  "value": "Var(aX + b) = a²·Var(X)",
                  "latex": "\\text{Var}(aX + b) = a^2 \\text{Var}(X)"
                },
                {
                  "feature": "SD of Linear Function",
                  "value": "SD(aX + b) = |a|·SD(X)",
                  "latex": "\\text{SD}(aX + b) = |a| \\text{SD}(X)"
                },
                {
                  "feature": "Sum of Independent Variables",
                  "value": "Var(X ± Y) = Var(X) + Var(Y)  (if X, Y independent)",
                  "latex": "\\text{Var}(X \\pm Y) = \\text{Var}(X) + \\text{Var}(Y)"
                },
                {
                  "feature": "Product of Independent Variables",
                  "value": "E(XY) = E(X) · E(Y)  (if X, Y independent)",
                  "latex": "E(XY) = E(X) \\cdot E(Y)"
                }
              ]
            }
          },
          {
            "id": "prob-binomial-dist",
            "title": "Binomial Distribution B(n, p)",
            "formula": "P(X = r) = ⁿCᵣ · pʳ · qⁿ⁻ʳ,   q = 1 − p\nMean = n·p  |  Variance = n·p·q  |  SD = √(n·p·q)",
            "explanation": "Probability of obtaining exactly r successes in n independent and identically distributed Bernoulli trials with constant success probability p.",
            "mustKnow": true,
            "remember": "Memory: Mean > Variance always! Max variance = n/4 when p = 1/2.",
            "shortcut": "🎯 Mode: If (n+1)p is an integer m, bimodal at m and m−1. If (n+1)p is not integer, single mode at ⌊(n+1)p⌋.",
            "latex": "P(X = r) = \\binom{n}{r} p^r q^{n-r}, \\quad \\mu = np, \\quad \\sigma^2 = npq, \\quad \\sigma = \\sqrt{npq}",
            "table": {
              "headers": [
                "Distribution Feature / Parameter",
                "Mathematical Expression"
              ],
              "rows": [
                {
                  "feature": "Probability Mass Function (PMF)",
                  "value": "P(X = r) = ⁿCᵣ · pʳ · qⁿ⁻ʳ",
                  "latex": "P(X = r) = \\binom{n}{r} p^r q^{n-r} \\quad (r = 0, 1, \\dots, n)"
                },
                {
                  "feature": "Complement Probability (q)",
                  "value": "q = 1 - p",
                  "latex": "q = 1 - p"
                },
                {
                  "feature": "Expected Value (Mean μ)",
                  "value": "n · p",
                  "latex": "\\mu = E(X) = n p"
                },
                {
                  "feature": "Variance (σ²)",
                  "value": "n · p · q",
                  "latex": "\\sigma^2 = \\text{Var}(X) = n p q"
                },
                {
                  "feature": "Standard Deviation (σ)",
                  "value": "√(n · p · q)",
                  "latex": "\\sigma = \\sqrt{n p q}"
                },
                {
                  "feature": "Mean vs Variance Relation",
                  "value": "Mean > Variance always (since 0 < q < 1)",
                  "latex": "\\text{Mean} > \\text{Variance} \\quad (q < 1)"
                },
                {
                  "feature": "Maximum Variance",
                  "value": "n / 4 (achieved when p = q = 1/2)",
                  "latex": "\\text{Var}_{\\max} = \\frac{n}{4} \\quad \\left(p = q = \\frac{1}{2}\\right)"
                },
                {
                  "feature": "Mode Determination",
                  "value": "If (n+1)p = m (integer) → two modes: m and m−1; Else → ⌊(n+1)p⌋",
                  "latex": "\\text{Mode} = \\begin{cases} m \\text{ and } m - 1 & (n+1)p = m \\in \\mathbb{Z} \\\\[2pt] \\lfloor(n+1)p\\rfloor & (n+1)p \\notin \\mathbb{Z} \\end{cases}"
                },
                {
                  "feature": "Consecutive Terms Ratio",
                  "value": "P(X = r+1) / P(X = r) = [(n − r)/(r + 1)] · (p / q)",
                  "latex": "\\frac{P(X = r+1)}{P(X = r)} = \\frac{n - r}{r + 1} \\cdot \\frac{p}{q}"
                }
              ]
            }
          },
          {
            "id": "prob-poisson-geometric",
            "title": "Poisson & Geometric Distributions (NIMCET Add)",
            "formula": "Poisson: P(X = r) = (e^(−λ) · λʳ) / r!,  Mean = Var = λ\nGeometric: P(X = k) = q^(k−1) · p,  Mean = 1/p",
            "explanation": "Special discrete distributions frequently tested in NIMCET and advanced MCA entrance exams.",
            "mustKnow": false,
            "remember": "Memory: Poisson has Mean = Variance = λ. Geometric models trial of first success.",
            "shortcut": "🎯 Poisson is the limiting form of Binomial B(n, p) when n → ∞, p → 0, and np = λ (finite).",
            "latex": "P_{\\text{Poisson}}(X = r) = \\frac{e^{-\\lambda} \\lambda^r}{r!}, \\quad P_{\\text{Geometric}}(X = k) = q^{k-1} p",
            "table": {
              "headers": [
                "Distribution & Property",
                "Formula / Mathematical Value"
              ],
              "rows": [
                {
                  "feature": "Poisson PMF",
                  "value": "P(X = r) = (e^(−λ) · λʳ) / r!",
                  "latex": "P(X = r) = \\frac{e^{-\\lambda} \\lambda^r}{r!} \\quad (r = 0, 1, 2, \\dots)"
                },
                {
                  "feature": "Poisson Mean & Variance",
                  "value": "Mean = λ,  Variance = λ (Mean = Variance)",
                  "latex": "\\mu = \\lambda, \\quad \\sigma^2 = \\lambda \\quad (\\text{Mean} = \\text{Variance})"
                },
                {
                  "feature": "Poisson as Limit of Binomial",
                  "value": "n → ∞,  p → 0,  with λ = n·p (constant)",
                  "latex": "n \\to \\infty, \\quad p \\to 0, \\quad \\lambda = n p"
                },
                {
                  "feature": "Geometric Distribution PMF",
                  "value": "P(X = k) = q^(k−1) · p (First success on k-th trial)",
                  "latex": "P(X = k) = q^{k-1} p \\quad (k = 1, 2, 3, \\dots)"
                },
                {
                  "feature": "Geometric Mean (Expected Trials)",
                  "value": "E(X) = 1 / p",
                  "latex": "E(X) = \\frac{1}{p}"
                },
                {
                  "feature": "Geometric Variance",
                  "value": "Var(X) = q / p²",
                  "latex": "\\text{Var}(X) = \\frac{q}{p^2} = \\frac{1 - p}{p^2}"
                }
              ]
            }
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
            "latex": "\\begin{aligned} D &> 0 \\implies \\text{Real and distinct} \\\\ D &= 0 \\implies \\text{Real and equal } \\left(x = -\\frac{b}{2a}\\right) \\\\ D &< 0 \\implies \\text{Complex conjugates } (p \\pm iq) \\end{aligned}",
            "table": {
              "headers": [
                "Condition on D = b² - 4ac",
                "Nature of Roots"
              ],
              "rows": [
                {
                  "feature": "D > 0 (Non-square, rational coeffs)",
                  "value": "Real, distinct, and irrational (conjugate surd pair p ± √q)",
                  "latex": "\\text{Real, distinct, irrational } (p \\pm \\sqrt{q})"
                },
                {
                  "feature": "D > 0 (Perfect square, rational coeffs)",
                  "value": "Real, distinct, and rational",
                  "latex": "\\text{Real, distinct, and rational}"
                },
                {
                  "feature": "D = 0",
                  "value": "Real, equal, and repeated (x = -b / (2a))",
                  "latex": "\\text{Real, equal, repeated } \\left(x = -\\frac{b}{2a}\\right)"
                },
                {
                  "feature": "D < 0 (Real coeffs)",
                  "value": "Complex conjugate pair (p ± iq)",
                  "latex": "\\text{Complex conjugates } (p \\pm iq)"
                }
              ]
            }
          },
          {
            "id": "quad-vieta",
            "title": "Vieta's Relations (Roots & Coeffs)",
            "formula": "α + β = −b/a  |  α · β = c/a  |  |α − β| = √D / |a|",
            "explanation": "Symmetric root relations that avoid solving the actual quadratic.",
            "mustKnow": true,
            "shortcut": "🎯 Useful identities: α² + β² = (α+β)² − 2αβ  |  α³ + β³ = (α+β)³ − 3αβ(α+β).",
            "latex": "\\alpha + \\beta = -\\frac{b}{a}, \\quad \\alpha\\beta = \\frac{c}{a}, \\quad |\\alpha - \\beta| = \\frac{\\sqrt{D}}{|a|}",
            "table": {
              "headers": [
                "Root Relation (Roots α, β)",
                "Formula / Value"
              ],
              "rows": [
                {
                  "feature": "Sum of Roots (α + β)",
                  "value": "-b / a",
                  "latex": "\\alpha + \\beta = -\\frac{b}{a}"
                },
                {
                  "feature": "Product of Roots (α · β)",
                  "value": "c / a",
                  "latex": "\\alpha\\beta = \\frac{c}{a}"
                },
                {
                  "feature": "Difference of Roots (|α - β|)",
                  "value": "√D / |a|",
                  "latex": "|\\alpha - \\beta| = \\frac{\\sqrt{D}}{|a|}"
                },
                {
                  "feature": "Sum of Squares (α² + β²)",
                  "value": "(α + β)² - 2αβ = (b² - 2ac) / a²",
                  "latex": "\\alpha^2 + \\beta^2 = \\frac{b^2 - 2ac}{a^2}"
                },
                {
                  "feature": "Sum of Cubes (α³ + β³)",
                  "value": "(α + β)³ - 3αβ(α + β)",
                  "latex": "\\alpha^3 + \\beta^3 = (\\alpha+\\beta)^3 - 3\\alpha\\beta(\\alpha+\\beta)"
                }
              ]
            }
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
            "latex": "y_{\\min} = -\\frac{D}{4a} \\text{ at } x = -\\frac{b}{2a} \\quad (a > 0)",
            "table": {
              "headers": [
                "Geometrical Feature of y = ax² + bx + c",
                "Coordinates / Value"
              ],
              "rows": [
                {
                  "feature": "Vertex Coordinates (V)",
                  "value": "(-b / (2a), -D / (4a))",
                  "latex": "V = \\left(-\\frac{b}{2a}, -\\frac{D}{4a}\\right)"
                },
                {
                  "feature": "Axis of Symmetry",
                  "value": "x = -b / (2a)",
                  "latex": "x = -\\frac{b}{2a}"
                },
                {
                  "feature": "Minimum Value (if a > 0)",
                  "value": "-D / (4a) at x = -b / (2a)",
                  "latex": "y_{\\min} = -\\frac{D}{4a} \\quad \\left(\\text{at } x = -\\frac{b}{2a}\\right)"
                },
                {
                  "feature": "Maximum Value (if a < 0)",
                  "value": "-D / (4a) at x = -b / (2a)",
                  "latex": "y_{\\max} = -\\frac{D}{4a} \\quad \\left(\\text{at } x = -\\frac{b}{2a}\\right)"
                },
                {
                  "feature": "Curve Opening Direction",
                  "value": "Concave upward if a > 0; downward if a < 0",
                  "latex": "a > 0 \\implies \\cup, \\quad a < 0 \\implies \\cap"
                }
              ]
            }
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
            "latex": "AM \\ge GM \\ge HM \\implies \\frac{a + b}{2} \\ge \\sqrt{ab} \\ge \\frac{2ab}{a + b}, \\quad G^2 = A \\cdot H",
            "table": {
              "headers": [
                "Mean Type / Property",
                "Formula / Expression"
              ],
              "rows": [
                {
                  "feature": "Arithmetic Mean (AM)",
                  "value": "(a + b) / 2",
                  "latex": "AM = \\frac{a + b}{2}"
                },
                {
                  "feature": "Geometric Mean (GM)",
                  "value": "√(ab) (for a, b > 0)",
                  "latex": "GM = \\sqrt{ab}"
                },
                {
                  "feature": "Harmonic Mean (HM)",
                  "value": "2ab / (a + b)",
                  "latex": "HM = \\frac{2ab}{a + b}"
                },
                {
                  "feature": "Order of Inequality",
                  "value": "AM ≥ GM ≥ HM",
                  "latex": "AM \\ge GM \\ge HM"
                },
                {
                  "feature": "Equality Condition",
                  "value": "AM = GM = HM ⇔ a = b",
                  "latex": "a = b"
                },
                {
                  "feature": "Product Relation",
                  "value": "GM² = AM · HM",
                  "latex": "GM^2 = AM \\cdot HM"
                }
              ]
            }
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
            "formula": "\\sum_{k=1}^n k = \\frac{n(n + 1)}{2}",
            "explanation": "Triangular numbers summation.",
            "mustKnow": true,
            "latex": "\\sum_{k=1}^n k = 1 + 2 + \\dots + n = \\frac{n(n + 1)}{2}"
          },
          {
            "id": "sigma-n2",
            "title": "Sum of Squares (∑n²)",
            "formula": "\\sum_{k=1}^n k^2 = \\frac{n(n + 1)(2n + 1)}{6}",
            "explanation": "Sum of first n squares.",
            "mustKnow": true,
            "latex": "\\sum_{k=1}^n k^2 = 1^2 + 2^2 + \\dots + n^2 = \\frac{n(n + 1)(2n + 1)}{6}"
          },
          {
            "id": "sigma-n3",
            "title": "Sum of Cubes (∑n³)",
            "formula": "\\sum_{k=1}^n k^3 = \\left[ \\frac{n(n + 1)}{2} \\right]^2 = \\left( \\sum_{k=1}^n k \\right)^2",
            "explanation": "Exact square of the sum of first n numbers!",
            "mustKnow": true,
            "shortcut": "🎯 Remember: 1³ + 2³ + ... + n³ is simply (∑n)².",
            "latex": "\\sum_{k=1}^n k^3 = 1^3 + 2^3 + \\dots + n^3 = \\left[ \\frac{n(n + 1)}{2} \\right]^2 = \\left( \\sum_{k=1}^n k \\right)^2"
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
            "formula": "\\frac{C_0}{1} + \\frac{C_1}{2} + \\frac{C_2}{3} + \\dots + \\frac{C_n}{n+1} = \\frac{2^{n+1} - 1}{n + 1}",
            "explanation": "Obtained by integrating (1 + x)ⁿ from 0 to 1.",
            "mustKnow": true,
            "latex": "\\frac{C_0}{1} + \\frac{C_1}{2} + \\frac{C_2}{3} + \\dots + \\frac{C_n}{n+1} = \\frac{2^{n+1} - 1}{n + 1}"
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
            "latex": "D_n = n! \\left[1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right]",
            "table": {
              "headers": [
                "Items Count (n)",
                "Number of Derangements Dₙ"
              ],
              "rows": [
                {
                  "feature": "n = 1",
                  "value": "0",
                  "latex": "D_1 = 0"
                },
                {
                  "feature": "n = 2",
                  "value": "1",
                  "latex": "D_2 = 1"
                },
                {
                  "feature": "n = 3",
                  "value": "2",
                  "latex": "D_3 = 2"
                },
                {
                  "feature": "n = 4",
                  "value": "9",
                  "latex": "D_4 = 9"
                },
                {
                  "feature": "n = 5",
                  "value": "44",
                  "latex": "D_5 = 44"
                },
                {
                  "feature": "General Formula for Dₙ",
                  "value": "n! · [1 - 1/1! + 1/2! - 1/3! + ... + (-1)ⁿ/n!]",
                  "latex": "D_n = n!\\left[1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right]"
                },
                {
                  "feature": "Recurrence Relation",
                  "value": "Dₙ = (n - 1)(Dₙ₋₁ + Dₙ₋₂)",
                  "latex": "D_n = (n - 1)(D_{n-1} + D_{n-2})"
                }
              ]
            }
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
    "description": "Complete NIMCET revision: types, basic properties, transformations, special forms, matrix–determinant links, adjoint/inverse & high-speed shortcuts.",
    "examWeightage": "Very High (NIMCET ~5-6 Qs)",
    "quickTips": [
      "Three operations distinction: Rᵢ → Rᵢ + kRⱼ leaves D unchanged; Rᵢ → kRᵢ multiplies D by k; Rᵢ ↔ Rⱼ changes sign to −D.",
      "|kA| = kⁿ|A| for n×n matrix. |AB| = |A||B| = |BA| even though AB ≠ BA.",
      "|adj(A)| = |A|ⁿ⁻¹, |adj(adj(A))| = |A|^{(n−1)²}, and A·adj(A) = |A|Iₙ.",
      "Reversal law: (AB)ᵀ = BᵀAᵀ and (AB)⁻¹ = B⁻¹A⁻¹. For equations: AX = B ⇒ X = A⁻¹B, while XA = B ⇒ X = BA⁻¹.",
      "Odd-order skew-symmetric matrix has |A| = 0. If row or column sum is constant/zero, factor out sum immediately."
    ],
    "categories": [
      {
        "id": "mat-cat-types",
        "name": "(A) Types & Classifications of Matrices & Determinants",
        "formulas": [
          {
            "id": "mat-matrix-types",
            "title": "Types of Matrices (Comprehensive Classification)",
            "formula": "A = [aᵢⱼ]_{m×n}: Row, Column, Square, Zero, Diagonal, Scalar, Identity, Triangular, Symmetric, Skew-Symmetric, Orthogonal",
            "explanation": "Essential definitions of matrix types and structures tested in NIMCET conceptual and objective questions.",
            "mustKnow": true,
            "remember": "Memory: Triangular → multiply diagonal; Skew-symmetric → main diagonal is all zeroes.",
            "shortcut": "🎯 Check order first: For product A_{m×n} B_{n×p}, inner dimensions must match, outer give product order m×p.",
            "latex": "A = [a_{ij}]_{m \\times n}, \\quad A^T = A \\;(\\text{Symmetric}), \\quad A^T = -A \\;(\\text{Skew-Symmetric}), \\quad A^T A = I \\;(\\text{Orthogonal})",
            "table": {
              "headers": [
                "Matrix Type",
                "Defining Mathematical Condition / Example"
              ],
              "rows": [
                {
                  "feature": "Row Matrix",
                  "value": "Only 1 row (Order 1 × n)",
                  "latex": "[1 \\quad 2 \\quad 3] \\quad (1 \\times 3)"
                },
                {
                  "feature": "Column Matrix",
                  "value": "Only 1 column (Order m × 1)",
                  "latex": "\\begin{bmatrix} 1 \\\\ 2 \\\\ 3 \\end{bmatrix} \\quad (3 \\times 1)"
                },
                {
                  "feature": "Square Matrix",
                  "value": "Number of rows = Number of columns (n × n)",
                  "latex": "m = n \\quad (n \\times n)"
                },
                {
                  "feature": "Zero / Null Matrix (O)",
                  "value": "Every element is 0 (aᵢⱼ = 0 for all i, j)",
                  "latex": "O = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}"
                },
                {
                  "feature": "Diagonal Matrix",
                  "value": "All non-diagonal elements are 0 (aᵢⱼ = 0 for i ≠ j)",
                  "latex": "\\text{diag}(d_1, d_2, \\dots, d_n) = \\begin{bmatrix} d_1 & 0 & 0 \\\\ 0 & d_2 & 0 \\\\ 0 & 0 & d_3 \\end{bmatrix}"
                },
                {
                  "feature": "Scalar Matrix",
                  "value": "Diagonal matrix with all diagonal elements equal",
                  "latex": "A = k I_n = \\begin{bmatrix} k & 0 & 0 \\\\ 0 & k & 0 \\\\ 0 & 0 & k \\end{bmatrix}"
                },
                {
                  "feature": "Identity / Unit Matrix (I)",
                  "value": "Diagonal elements = 1, all other elements = 0",
                  "latex": "I_n = [\\delta_{ij}] \\implies AI = IA = A"
                },
                {
                  "feature": "Upper Triangular Matrix",
                  "value": "All entries below main diagonal are 0 (aᵢⱼ = 0 for i > j)",
                  "latex": "\\begin{bmatrix} a & * & * \\\\ 0 & b & * \\\\ 0 & 0 & c \\end{bmatrix}"
                },
                {
                  "feature": "Lower Triangular Matrix",
                  "value": "All entries above main diagonal are 0 (aᵢⱼ = 0 for i < j)",
                  "latex": "\\begin{bmatrix} a & 0 & 0 \\\\ * & b & 0 \\\\ * & * & c \\end{bmatrix}"
                },
                {
                  "feature": "Symmetric Matrix",
                  "value": "Aᵀ = A (satisfies aᵢⱼ = aⱼᵢ)",
                  "latex": "A^T = A \\iff a_{ij} = a_{ji}"
                },
                {
                  "feature": "Skew-Symmetric Matrix",
                  "value": "Aᵀ = −A (satisfies aᵢⱼ = −aⱼᵢ; all diagonal entries aᵢᵢ = 0)",
                  "latex": "A^T = -A \\implies a_{ii} = 0, \\; a_{ij} = -a_{ji}"
                },
                {
                  "feature": "Singular Matrix",
                  "value": "|A| = 0 (Matrix inverse A⁻¹ does NOT exist)",
                  "latex": "|A| = 0 \\implies A^{-1} \\text{ does not exist}"
                },
                {
                  "feature": "Non-Singular Matrix",
                  "value": "|A| ≠ 0 (Matrix inverse A⁻¹ exists)",
                  "latex": "|A| \\neq 0 \\implies A^{-1} \\text{ exists}"
                },
                {
                  "feature": "Orthogonal Matrix",
                  "value": "Aᵀ A = A Aᵀ = I (A⁻¹ = Aᵀ and |A| = ±1)",
                  "latex": "A^T A = I \\implies A^{-1} = A^T, \\quad |A| = \\pm 1"
                }
              ]
            }
          },
          {
            "id": "det-types-orders",
            "title": "Types & Orders of Determinants",
            "formula": "Order 1: |a| = a  |  Order 2: |[a,b;c,d]| = ad − bc  |  Triangular: |A| = a₁₁·a₂₂···aₙₙ",
            "explanation": "Standard determinant forms and orders evaluated in NIMCET examinations.",
            "mustKnow": true,
            "remember": "Memory: Main diagonal product − other diagonal product; Triangular = multiply diagonal.",
            "latex": "|a| = a, \\quad \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc, \\quad |A_{\\text{triangular}}| = \\prod_{i=1}^n a_{ii}",
            "table": {
              "headers": [
                "Determinant Order / Form",
                "Evaluation Formula / Value"
              ],
              "rows": [
                {
                  "feature": "Order 1 Determinant",
                  "value": "|a| = a (e.g. |5| = 5, |−7| = −7)",
                  "latex": "|a| = a"
                },
                {
                  "feature": "Order 2 Determinant",
                  "value": "ad − bc (Main diagonal − Off diagonal)",
                  "latex": "\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc"
                },
                {
                  "feature": "Order 3 Determinant",
                  "value": "Cofactor expansion along any row/column or Sarrus rule",
                  "latex": "\\begin{vmatrix} a & b & c \\\\ d & e & f \\\\ g & h & i \\end{vmatrix} = a(ei - fh) - b(di - fg) + c(dh - eg)"
                },
                {
                  "feature": "Diagonal Determinant",
                  "value": "Product of diagonal entries: a · b · c",
                  "latex": "\\begin{vmatrix} a & 0 & 0 \\\\ 0 & b & 0 \\\\ 0 & 0 & c \\end{vmatrix} = abc"
                },
                {
                  "feature": "Upper Triangular Determinant",
                  "value": "Product of diagonal entries: a · b · c",
                  "latex": "\\begin{vmatrix} a & * & * \\\\ 0 & b & * \\\\ 0 & 0 & c \\end{vmatrix} = abc"
                },
                {
                  "feature": "Lower Triangular Determinant",
                  "value": "Product of diagonal entries: a · b · c",
                  "latex": "\\begin{vmatrix} a & 0 & 0 \\\\ * & b & 0 \\\\ * & * & c \\end{vmatrix} = abc"
                },
                {
                  "feature": "Singular Determinant",
                  "value": "|A| = 0",
                  "latex": "|A| = 0"
                },
                {
                  "feature": "Non-Singular Determinant",
                  "value": "|A| ≠ 0 (Invertible)",
                  "latex": "|A| \\neq 0"
                }
              ]
            }
          },
          {
            "id": "mat-equality-trace",
            "title": "Equality of Matrices & Trace Properties",
            "formula": "A = B ⇔ aᵢⱼ = bᵢⱼ  |  tr(A) = ∑ aᵢᵢ\ntr(A + B) = tr(A) + tr(B)  |  tr(AB) = tr(BA)",
            "explanation": "Trace is the sum of main diagonal entries of a square matrix. It possesses cyclical commutative invariance.",
            "mustKnow": true,
            "remember": "Memory: Trace is linear and cyclically commutative (tr(AB) = tr(BA)).",
            "latex": "\\text{tr}(A) = \\sum_{i=1}^n a_{ii}, \\quad \\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B), \\quad \\text{tr}(AB) = \\text{tr}(BA)",
            "table": {
              "headers": [
                "Equality / Trace Property",
                "Mathematical Expression"
              ],
              "rows": [
                {
                  "feature": "Equality Criterion (A = B)",
                  "value": "Orders are identical and corresponding elements are equal: aᵢⱼ = bᵢⱼ",
                  "latex": "A = B \\iff a_{ij} = b_{ij} \\quad \\forall i, j"
                },
                {
                  "feature": "Trace Definition: tr(A)",
                  "value": "Sum of diagonal elements: a₁₁ + a₂₂ + ··· + aₙₙ",
                  "latex": "\\text{tr}(A) = a_{11} + a_{22} + \\dots + a_{nn} = \\sum_{i=1}^n a_{ii}"
                },
                {
                  "feature": "Trace of Sum",
                  "value": "tr(A + B) = tr(A) + tr(B)",
                  "latex": "\\text{tr}(A + B) = \\text{tr}(A) + \\text{tr}(B)"
                },
                {
                  "feature": "Trace of Scalar Multiple",
                  "value": "tr(kA) = k · tr(A)",
                  "latex": "\\text{tr}(kA) = k \\cdot \\text{tr}(A)"
                },
                {
                  "feature": "Trace Commutative Invariance",
                  "value": "tr(AB) = tr(BA) (even if AB ≠ BA)",
                  "latex": "\\text{tr}(AB) = \\text{tr}(BA)"
                },
                {
                  "feature": "Trace of Transpose",
                  "value": "tr(Aᵀ) = tr(A)",
                  "latex": "\\text{tr}(A^T) = \\text{tr}(A)"
                }
              ]
            }
          }
        ]
      },
      {
        "id": "mat-cat-basic-properties",
        "name": "(B) Basic Operations & Fundamental Properties",
        "formulas": [
          {
            "id": "mat-addition-scalar",
            "title": "Matrix Addition, Subtraction & Scalar Multiplication",
            "formula": "A ± B = [aᵢⱼ ± bᵢⱼ]  |  kA = [k·aᵢⱼ]\nA + B = B + A  |  k(A + B) = kA + kB",
            "explanation": "Addition requires matrices of the same order. Scalar multiplication multiplies every entry by k.",
            "mustKnow": true,
            "remember": "Memory: Addition is entry-wise and commutative; scalar multiplication scales every element.",
            "latex": "A + B = B + A, \\quad (A + B) + C = A + (B + C), \\quad k(A + B) = kA + kB, \\quad k(lA) = (kl)A"
          },
          {
            "id": "mat-multiplication-props",
            "title": "Matrix Multiplication & Core Properties",
            "formula": "(A_{m×n})(B_{n×p}) = C_{m×p}  |  AB ≠ BA (Generally)\nAB = O does NOT imply A = O or B = O",
            "explanation": "Row by column dot product multiplication. Fundamental distinction: Matrix multiplication is associative and distributive, but generally NOT commutative.",
            "mustKnow": true,
            "remember": "Memory: Inside same → outside gives answer (m×n)(n×p) → m×p. AB ≠ BA!",
            "commonMistake": "⚠️ AB = O does not mean A = O or B = O! Two non-zero matrices can have zero product.",
            "latex": "c_{ij} = \\sum_{k=1}^n a_{ik} b_{kj}, \\quad (AB)C = A(BC), \\quad A(B + C) = AB + AC, \\quad AB \\neq BA",
            "table": {
              "headers": [
                "Multiplication Property",
                "Mathematical Expression & Meaning"
              ],
              "rows": [
                {
                  "feature": "Dimension Compatibility Rule",
                  "value": "Columns of A must equal rows of B: (m×n) · (n×p) → (m×p)",
                  "latex": "(m \\times n) \\times (n \\times p) \\longrightarrow m \\times p"
                },
                {
                  "feature": "Associative Law",
                  "value": "(AB)C = A(BC)",
                  "latex": "(AB)C = A(BC)"
                },
                {
                  "feature": "Distributive Laws",
                  "value": "A(B + C) = AB + AC  and  (A + B)C = AC + BC",
                  "latex": "A(B + C) = AB + AC, \\quad (A + B)C = AC + BC"
                },
                {
                  "feature": "Non-Commutative Nature",
                  "value": "Generally AB ≠ BA (Order of factors matters critically)",
                  "latex": "AB \\neq BA \\quad (\\text{Generally})"
                },
                {
                  "feature": "Zero Divisors Possibility",
                  "value": "AB = O is possible even when A ≠ O and B ≠ O",
                  "latex": "AB = O \\not\\implies A = O \\text{ or } B = O"
                },
                {
                  "feature": "Multiplicative Identity",
                  "value": "AI = IA = A",
                  "latex": "AI = IA = A"
                },
                {
                  "feature": "Zero Matrix Annihilation",
                  "value": "AO = OA = O",
                  "latex": "AO = OA = O"
                }
              ]
            }
          },
          {
            "id": "det-fundamental-properties",
            "title": "Fundamental Properties of Determinants",
            "formula": "Rᵢ ↔ Rⱼ ⇒ D' = −D  |  Rᵢ = Rⱼ ⇒ D = 0  |  Rᵢ = kRⱼ ⇒ D = 0  |  Zero row ⇒ D = 0",
            "explanation": "Core axiomatic determinant behaviors under row/column interchange, equality, and proportionality.",
            "mustKnow": true,
            "remember": "Memory: Swap → sign changes; Equal or proportional rows → determinant is 0.",
            "shortcut": "🎯 Quick Check: If you spot identical rows or proportional rows, write D = 0 immediately without expansion.",
            "latex": "\\begin{aligned} R_i \\leftrightarrow R_j &\\implies D' = -D \\\\ R_i = R_j &\\implies D = 0 \\\\ R_i = k R_j &\\implies D = 0 \\\\ \\text{Zero row/col} &\\implies D = 0 \\end{aligned}",
            "table": {
              "headers": [
                "Determinant Condition / Operation",
                "Effect on Determinant Value"
              ],
              "rows": [
                {
                  "feature": "Interchanging Two Rows (Rᵢ ↔ Rⱼ)",
                  "value": "Sign of determinant changes: D' = −D",
                  "latex": "R_i \\leftrightarrow R_j \\implies D' = -D"
                },
                {
                  "feature": "Interchanging Two Columns (Cᵢ ↔ Cⱼ)",
                  "value": "Sign of determinant changes: D' = −D",
                  "latex": "C_i \\leftrightarrow C_j \\implies D' = -D"
                },
                {
                  "feature": "Two Rows Identical (Rᵢ = Rⱼ)",
                  "value": "Determinant value is 0",
                  "latex": "R_i = R_j \\implies D = 0"
                },
                {
                  "feature": "Two Columns Identical (Cᵢ = Cⱼ)",
                  "value": "Determinant value is 0",
                  "latex": "C_i = C_j \\implies D = 0"
                },
                {
                  "feature": "Two Rows Proportional (Rᵢ = k·Rⱼ)",
                  "value": "Determinant value is 0",
                  "latex": "R_i = k R_j \\implies D = 0"
                },
                {
                  "feature": "Two Columns Proportional (Cᵢ = k·Cⱼ)",
                  "value": "Determinant value is 0",
                  "latex": "C_i = k C_j \\implies D = 0"
                },
                {
                  "feature": "All Elements of a Row/Column Zero",
                  "value": "Determinant value is 0",
                  "latex": "D = 0"
                }
              ]
            }
          },
          {
            "id": "det-cofactor-expansion",
            "title": "Cofactor Expansion & Checkerboard Sign Pattern",
            "formula": "D = aᵢ₁ Cᵢ₁ + aᵢ₂ Cᵢ₂ + ··· + aᵢₙ Cᵢₙ = |A|\naᵢ₁ Cⱼ₁ + aᵢ₂ Cⱼ₂ + ··· + aᵢₙ Cⱼₙ = 0  (for i ≠ j)",
            "explanation": "Expanding along any row/column gives |A|. Multiplying elements of one row by cofactors of another row yields 0.",
            "mustKnow": true,
            "remember": "Memory: Checkerboard signs: + − + / − + − / + − +. Same row → |A|, other row → 0.",
            "latex": "C_{ij} = (-1)^{i+j} M_{ij}, \\quad \\sum_{k=1}^n a_{ik} C_{jk} = \\begin{cases} |A| & i = j \\\\ 0 & i \\neq j \\end{cases}"
          }
        ]
      },
      {
        "id": "mat-cat-row-col-ops",
        "name": "(C) Row & Column Operations & Transformations",
        "formulas": [
          {
            "id": "det-row-col-transformations",
            "title": "Row & Column Operations on Determinants",
            "formula": "Rᵢ → Rᵢ + kRⱼ ⇒ D' = D (No Change)\nRᵢ → kRᵢ ⇒ D' = k·D  |  Common factor from row comes outside once",
            "explanation": "The mathematical rules governing determinant changes under elementary row and column operations.",
            "mustKnow": true,
            "remember": "Memory: Add/subtract multiples → NO CHANGE. Multiply single row → D multiplied by k.",
            "shortcut": "🎯 Adding a multiple of another row creates zeroes without altering D — the single fastest determinant evaluation tool.",
            "latex": "R_i \\to R_i + k R_j \\implies D' = D, \\quad R_i \\to k R_i \\implies D' = kD, \\quad R_i \\to \\frac{R_i}{k} \\implies D' = \\frac{D}{k}",
            "table": {
              "headers": [
                "Transformation Operation",
                "Effect on Determinant (D')"
              ],
              "rows": [
                {
                  "feature": "Add Multiple of Another Row: Rᵢ → Rᵢ + kRⱼ",
                  "value": "Determinant does NOT change: D' = D",
                  "latex": "R_i \\to R_i + k R_j \\implies D' = D"
                },
                {
                  "feature": "Add Multiple of Another Col: Cᵢ → Cᵢ + kCⱼ",
                  "value": "Determinant does NOT change: D' = D",
                  "latex": "C_i \\to C_i + k C_j \\implies D' = D"
                },
                {
                  "feature": "Multiply Single Row by k: Rᵢ → kRᵢ",
                  "value": "Determinant multiplied by k: D' = k · D",
                  "latex": "R_i \\to k R_i \\implies D' = k D"
                },
                {
                  "feature": "Divide Single Row by k: Rᵢ → Rᵢ / k",
                  "value": "Determinant divided by k: D' = D / k",
                  "latex": "R_i \\to \\frac{R_i}{k} \\implies D' = \\frac{D}{k}"
                },
                {
                  "feature": "Common Factor from a Row",
                  "value": "Comes outside the determinant once: |[ka, kb; c, d]| = k·|[a, b; c, d]|",
                  "latex": "\\begin{vmatrix} ka & kb \\\\ c & d \\end{vmatrix} = k \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}"
                },
                {
                  "feature": "Row Swap: Rᵢ ↔ Rⱼ",
                  "value": "Determinant sign reverses: D' = −D",
                  "latex": "R_i \\leftrightarrow R_j \\implies D' = -D"
                }
              ]
            }
          },
          {
            "id": "mat-elementary-ops-rank",
            "title": "Elementary Matrix Operations & Rank of a Matrix",
            "formula": "Operations: Rᵢ ↔ Rⱼ, Rᵢ → kRᵢ, Rᵢ → Rᵢ + kRⱼ\nrank(A) ≤ min(m, n)  |  |A| ≠ 0 ⇔ rank(A) = n",
            "explanation": "Rank is the maximum number of linearly independent rows or columns. Inversion is performed via [A | I] → [I | A⁻¹].",
            "mustKnow": true,
            "remember": "Memory: Non-singular n×n matrix always has full rank n.",
            "latex": "\\text{rank}(A) \\le \\min(m, n), \\quad |A| \\neq 0 \\iff \\text{rank}(A) = n, \\quad [A \\mid I] \\xrightarrow{\\text{row ops}} [I \\mid A^{-1}]",
            "table": {
              "headers": [
                "Matrix Property / Method",
                "Mathematical Fact / Condition"
              ],
              "rows": [
                {
                  "feature": "Elementary Operation 1 (Interchange)",
                  "value": "Swap two rows: Rᵢ ↔ Rⱼ",
                  "latex": "R_i \\leftrightarrow R_j"
                },
                {
                  "feature": "Elementary Operation 2 (Scaling)",
                  "value": "Multiply row by non-zero scalar: Rᵢ → kRᵢ (k ≠ 0)",
                  "latex": "R_i \\to k R_i \\quad (k \\neq 0)"
                },
                {
                  "feature": "Elementary Operation 3 (Linear Combo)",
                  "value": "Add multiple of another row: Rᵢ → Rᵢ + kRⱼ",
                  "latex": "R_i \\to R_i + k R_j"
                },
                {
                  "feature": "Rank Bound (m × n Matrix)",
                  "value": "rank(A) ≤ min(m, n)",
                  "latex": "\\text{rank}(A) \\le \\min(m, n)"
                },
                {
                  "feature": "Rank of Non-Singular Matrix",
                  "value": "|A| ≠ 0 ⇔ rank(A) = n (Full Rank)",
                  "latex": "|A| \\neq 0 \\iff \\text{rank}(A) = n"
                },
                {
                  "feature": "Matrix Inversion via Gauss-Jordan",
                  "value": "[A | I] transformed by row operations into [I | A⁻¹]",
                  "latex": "[A \\mid I] \\longrightarrow [I \\mid A^{-1}]"
                }
              ]
            }
          }
        ]
      },
      {
        "id": "mat-cat-special-forms",
        "name": "(D) Special Matrix Forms & Factor Theorems",
        "formulas": [
          {
            "id": "mat-transpose-properties",
            "title": "Transpose Properties & Reversal Law",
            "formula": "(Aᵀ)ᵀ = A  |  (A ± B)ᵀ = Aᵀ ± Bᵀ  |  (kA)ᵀ = kAᵀ\n(AB)ᵀ = BᵀAᵀ (Order Reverses!)  |  |Aᵀ| = |A|",
            "explanation": "Transpose swaps rows and columns: (Aᵀ)ᵢⱼ = aⱼᵢ. Crucial rule: Product transpose reverses matrix order.",
            "mustKnow": true,
            "remember": "Memory: Transpose preserves determinant: |Aᵀ| = |A|. Reversal: (AB)ᵀ = BᵀAᵀ.",
            "latex": "(A^T)^T = A, \\quad (AB)^T = B^T A^T, \\quad |A^T| = |A|, \\quad (A + B)^T = A^T + B^T",
            "table": {
              "headers": [
                "Transpose Property",
                "Mathematical Expression"
              ],
              "rows": [
                {
                  "feature": "Involution (Double Transpose)",
                  "value": "(Aᵀ)ᵀ = A",
                  "latex": "(A^T)^T = A"
                },
                {
                  "feature": "Linearity (Sum / Difference)",
                  "value": "(A ± B)ᵀ = Aᵀ ± Bᵀ",
                  "latex": "(A \\pm B)^T = A^T \\pm B^T"
                },
                {
                  "feature": "Scalar Invariance",
                  "value": "(kA)ᵀ = k · Aᵀ",
                  "latex": "(kA)^T = k A^T"
                },
                {
                  "feature": "Product Reversal Law",
                  "value": "(AB)ᵀ = Bᵀ · Aᵀ (Order reverses)",
                  "latex": "(AB)^T = B^T A^T"
                },
                {
                  "feature": "Multiple Product Reversal",
                  "value": "(ABC)ᵀ = Cᵀ Bᵀ Aᵀ",
                  "latex": "(ABC)^T = C^T B^T A^T"
                },
                {
                  "feature": "Determinant Transpose Invariance",
                  "value": "|Aᵀ| = |A|",
                  "latex": "|A^T| = |A|"
                }
              ]
            }
          },
          {
            "id": "mat-symmetric-skew",
            "title": "Symmetric, Skew-Symmetric & Orthogonal Matrices",
            "formula": "A = (A + Aᵀ)/2 + (A − Aᵀ)/2\nSkew-symmetric: aᵢᵢ = 0  |  Odd order: |A| = 0  |  Orthogonal: |A| = ±1",
            "explanation": "Every square matrix is uniquely decomposable into symmetric and skew-symmetric components. Odd-order skew-symmetric determinants are always zero.",
            "mustKnow": true,
            "remember": "Memory: Skew-symmetric: diagonal = 0; odd order |A| = 0; orthogonal |A| = ±1 and A⁻¹ = Aᵀ.",
            "shortcut": "🎯 Any 3×3 skew-symmetric matrix has |A| = 0 immediately without calculating.",
            "latex": "A = \\frac{A + A^T}{2} + \\frac{A - A^T}{2}, \\quad |A_{\\text{odd skew}}| = 0, \\quad A^T A = I \\implies |A| = \\pm 1",
            "table": {
              "headers": [
                "Special Matrix Property",
                "Mathematical Expression & Characteristic"
              ],
              "rows": [
                {
                  "feature": "Symmetric Matrix Definition",
                  "value": "Aᵀ = A (Satisfies aᵢⱼ = aⱼᵢ)",
                  "latex": "A^T = A \\iff a_{ij} = a_{ji}"
                },
                {
                  "feature": "Skew-Symmetric Matrix Definition",
                  "value": "Aᵀ = −A (Satisfies aᵢⱼ = −aⱼᵢ and diagonal elements aᵢᵢ = 0)",
                  "latex": "A^T = -A \\implies a_{ii} = 0"
                },
                {
                  "feature": "Odd-Order Skew-Symmetric Determinant",
                  "value": "|A| = 0 for any odd order n (e.g., 3×3)",
                  "latex": "|A| = 0 \\quad (n = 1, 3, 5, \\dots)"
                },
                {
                  "feature": "Even-Order Skew-Symmetric Determinant",
                  "value": "|A| is always a perfect square",
                  "latex": "|A| = k^2 \\quad (n = 2, 4, \\dots)"
                },
                {
                  "feature": "Canonical Decomposition Theorem",
                  "value": "A = (A + Aᵀ)/2 (Symmetric) + (A − Aᵀ)/2 (Skew-Symmetric)",
                  "latex": "A = \\underbrace{\\frac{A + A^T}{2}}_{\\text{Symmetric}} + \\underbrace{\\frac{A - A^T}{2}}_{\\text{Skew-Symmetric}}"
                },
                {
                  "feature": "Orthogonal Matrix Definition",
                  "value": "Aᵀ A = A Aᵀ = I",
                  "latex": "A^T A = I \\implies A^{-1} = A^T"
                },
                {
                  "feature": "Orthogonal Determinant",
                  "value": "|A| = ±1 (Since |Aᵀ||A| = |A|² = 1)",
                  "latex": "|A| = \\pm 1"
                }
              ]
            }
          },
          {
            "id": "mat-eigenvalues-properties",
            "title": "Eigenvalues, Trace & Determinant Properties",
            "formula": "|A − λI| = 0  |  ∑ λᵢ = tr(A)  |  ∏ λᵢ = |A|\nEigenvalues of A⁻¹ are 1/λᵢ  |  Eigenvalues of Aᵏ are λᵢᵏ",
            "explanation": "Eigenvalues are roots of the characteristic polynomial |A − λI| = 0. The sum of eigenvalues equals the trace, and their product equals the determinant.",
            "mustKnow": true,
            "remember": "Memory: Sum of eigenvalues = trace; product of eigenvalues = determinant.",
            "shortcut": "🎯 Quick verification: If matrix has trace = 5 and determinant = 6, eigenvalues must be 2 and 3 because 2+3=5 and 2×3=6.",
            "latex": "|A - \\lambda I| = 0, \\quad \\sum_{i=1}^n \\lambda_i = \\text{tr}(A), \\quad \\prod_{i=1}^n \\lambda_i = |A|",
            "table": {
              "headers": [
                "Eigenvalue Property",
                "Mathematical Formula (Eigenvalues λ₁, ..., λₙ)"
              ],
              "rows": [
                {
                  "feature": "Characteristic Equation",
                  "value": "|A − λI| = 0 (Roots are eigenvalues λᵢ)",
                  "latex": "|A - \\lambda I| = 0"
                },
                {
                  "feature": "Sum of Eigenvalues",
                  "value": "λ₁ + λ₂ + ··· + λₙ = tr(A) (Sum of diagonal elements)",
                  "latex": "\\sum_{i=1}^n \\lambda_i = \\text{tr}(A)"
                },
                {
                  "feature": "Product of Eigenvalues",
                  "value": "λ₁ · λ₂ ··· λₙ = |A| (Determinant of matrix)",
                  "latex": "\\prod_{i=1}^n \\lambda_i = |A|"
                },
                {
                  "feature": "Eigenvalues of Matrix Inverse A⁻¹",
                  "value": "1/λ₁, 1/λ₂, ..., 1/λₙ (for invertible A)",
                  "latex": "\\frac{1}{\\lambda_1}, \\; \\frac{1}{\\lambda_2}, \\; \\dots, \\; \\frac{1}{\\lambda_n}"
                },
                {
                  "feature": "Eigenvalues of Matrix Power Aᵏ",
                  "value": "λ₁ᵏ, λ₂ᵏ, ..., λₙᵏ",
                  "latex": "\\lambda_1^k, \\; \\lambda_2^k, \\; \\dots, \\; \\lambda_n^k"
                },
                {
                  "feature": "Eigenvalues of Scalar Multiple kA",
                  "value": "kλ₁, kλ₂, ..., kλₙ",
                  "latex": "k\\lambda_1, \\; k\\lambda_2, \\; \\dots, \\; k\\lambda_n"
                },
                {
                  "feature": "Eigenvalues of Shifted Matrix A + cI",
                  "value": "λ₁ + c, λ₂ + c, ..., λₙ + c",
                  "latex": "\\lambda_1 + c, \\; \\lambda_2 + c, \\; \\dots, \\; \\lambda_n + c"
                },
                {
                  "feature": "Eigenvalues of Transpose Aᵀ",
                  "value": "Same eigenvalues as A (since |Aᵀ − λI| = |A − λI|)",
                  "latex": "\\lambda(A^T) = \\lambda(A)"
                }
              ]
            }
          },
          {
            "id": "mat-cayley-hamilton",
            "title": "Cayley–Hamilton Theorem (Why It's Useful, How to Use It & Examples)",
            "formula": "|A − λI| = 0  ⇒  A² − tr(A)·A + |A|·I = O  (for 2×2)\nA² = tr(A)·A − |A|·I  |  A⁻¹ = (tr(A)·I − A) / |A|",
            "explanation": "Every square matrix satisfies its own characteristic polynomial equation. Instead of performing tedious matrix multiplications, Cayley-Hamilton lets you reduce high matrix powers (A³, A⁴, A¹⁰) to linear terms (pA + qI) and compute inverses A⁻¹ without finding adjoints.",
            "mustKnow": true,
            "remember": "Memory: Replace λ with A and constant c with cI. For 2×2: A² − tr(A)A + |A|I = O always.",
            "shortcut": "🎯 Worked Example: Let A = [[2, 3], [1, 2]]. Here tr(A) = 4, |A| = 1.\n1. Equation: A² − 4A + I = O ⇒ A² = 4A − I.\n2. Inverse in 3 seconds: Multiply by A⁻¹ ⇒ A − 4I + A⁻¹ = O ⇒ A⁻¹ = 4I − A = [[2, −3], [−1, 2]].\n3. High Powers: A³ = A(4A − I) = 4A² − A = 4(4A − I) − A = 15A − 4I = [[26, 45], [15, 26]].",
            "latex": "P(\\lambda) = |A - \\lambda I| = 0 \\implies P(A) = O, \\quad A^2 - \\text{tr}(A)A + |A|I = O, \\quad A^{-1} = \\frac{\\text{tr}(A)I - A}{|A|}",
            "table": {
              "headers": [
                "Cayley–Hamilton Step / Application",
                "Method, Formula & Step-by-Step Worked Example"
              ],
              "rows": [
                {
                  "feature": "Theorem Statement",
                  "value": "Every square matrix A satisfies its characteristic equation: P(A) = O",
                  "latex": "|A - \\lambda I| = 0 \\implies P(A) = O"
                },
                {
                  "feature": "Standard 2×2 Characteristic Equation",
                  "value": "A² − tr(A)·A + |A|·I = O (Replace λ → A and constant c → cI)",
                  "latex": "A^2 - \\text{tr}(A)A + |A|I = O"
                },
                {
                  "feature": "Step 1: How to Set It Up",
                  "value": "Compute tr(A) = a₁₁ + a₂₂ and |A| = ad − bc. Substitute directly into A² − tr(A)A + |A|I = O.",
                  "latex": "\\text{tr}(A) = a_{11} + a_{22}, \\quad |A| = ad - bc"
                },
                {
                  "feature": "Why Useful #1: Higher Powers (A³, A⁴, A¹⁰)",
                  "value": "Rearrange to A² = tr(A)·A − |A|·I. Multiply by A iteratively to reduce any power to linear pA + qI.",
                  "latex": "A^2 = \\text{tr}(A)A - |A|I \\implies A^3 = \\text{tr}(A)A^2 - |A|A"
                },
                {
                  "feature": "Why Useful #2: Instant Inverse A⁻¹",
                  "value": "Multiply A² − tr(A)·A + |A|·I = O by A⁻¹ to get A⁻¹ = (tr(A)·I − A) / |A| without any cofactors!",
                  "latex": "A^{-1} = \\frac{\\text{tr}(A)I - A}{|A|} \\quad (|A| \\neq 0)"
                },
                {
                  "feature": "Why Useful #3: Polynomial Evaluation",
                  "value": "Given large polynomial f(A), divide by characteristic polynomial P(A). The remainder R(A) gives the exact value.",
                  "latex": "f(A) = Q(A) \\cdot P(A) + R(A) = R(A) \\quad (\\text{since } P(A) = O)"
                },
                {
                  "feature": "Concrete Worked Example: Matrix A",
                  "value": "Let A = [[2, 3], [1, 2]] ⇒ tr(A) = 4, |A| = 4 − 3 = 1 ⇒ A² − 4A + I = O",
                  "latex": "A = \\begin{bmatrix} 2 & 3 \\\\ 1 & 2 \\end{bmatrix} \\implies A^2 - 4A + I = O"
                },
                {
                  "feature": "Example Application: Finding A⁻¹",
                  "value": "A − 4I + A⁻¹ = O ⇒ A⁻¹ = 4I − A = [[2, −3], [−1, 2]] in seconds!",
                  "latex": "A^{-1} = 4I - A = \\begin{bmatrix} 2 & -3 \\\\ -1 & 2 \\end{bmatrix}"
                },
                {
                  "feature": "Example Application: Finding A³",
                  "value": "A³ = 4A² − A = 4(4A − I) − A = 15A − 4I = [[26, 45], [15, 26]]",
                  "latex": "A^3 = 15A - 4I = \\begin{bmatrix} 26 & 45 \\\\ 15 & 26 \\end{bmatrix}"
                }
              ]
            }
          }
        ]
      },
      {
        "id": "mat-cat-det-properties",
        "name": "(E) Matrix–Determinant Properties & Connections",
        "formulas": [
          {
            "id": "mat-det-master-properties",
            "title": "Master Matrix–Determinant Connections",
            "formula": "|kA| = kⁿ·|A|  |  |AB| = |A|·|B| = |BA|  |  |Aᵐ| = |A|ᵐ  |  |A⁻¹| = 1/|A|  |  |I| = 1",
            "explanation": "The core matrix-determinant identities evaluated most frequently in NIMCET examination papers.",
            "mustKnow": true,
            "remember": "Memory: Entire matrix scaled by k → kⁿ factor out! Product determinant is commutative: |AB| = |BA|.",
            "commonMistake": "⚠️ For 3×3 matrix: |2A| = 2³|A| = 8|A|, NOT 2|A|! Scaling one row gives 2|A|; scaling entire matrix gives 8|A|.",
            "latex": "|kA| = k^n |A|, \\quad |AB| = |A||B| = |BA|, \\quad |A^m| = |A|^m, \\quad |A^{-1}| = \\frac{1}{|A|}, \\quad |I| = 1",
            "table": {
              "headers": [
                "Matrix–Determinant Property",
                "Identity Formula (Order n)"
              ],
              "rows": [
                {
                  "feature": "Scalar Multiple of Matrix: |kA|",
                  "value": "kⁿ · |A| (k is raised to matrix dimension n)",
                  "latex": "|kA| = k^n |A|"
                },
                {
                  "feature": "Product Property: |AB|",
                  "value": "|A| · |B|",
                  "latex": "|AB| = |A| \\cdot |B|"
                },
                {
                  "feature": "Product Commutativity of Determinant",
                  "value": "|AB| = |BA| (Holds even though AB ≠ BA!)",
                  "latex": "|AB| = |A||B| = |B||A| = |BA|"
                },
                {
                  "feature": "Matrix Power Property: |Aᵐ|",
                  "value": "|A|ᵐ",
                  "latex": "|A^m| = |A|^m"
                },
                {
                  "feature": "Inverse Matrix Determinant: |A⁻¹|",
                  "value": "1 / |A| = |A|⁻¹ (Provided |A| ≠ 0)",
                  "latex": "|A^{-1}| = \\frac{1}{|A|} = |A|^{-1}"
                },
                {
                  "feature": "Identity Matrix Determinant: |I|",
                  "value": "|I| = 1 (Since AI = A ⇒ |A||I| = |A|)",
                  "latex": "|I| = 1"
                },
                {
                  "feature": "Transpose Determinant: |Aᵀ|",
                  "value": "|Aᵀ| = |A|",
                  "latex": "|A^T| = |A|"
                },
                {
                  "feature": "Invertibility Condition",
                  "value": "A is invertible ⇔ |A| ≠ 0 (Non-singular)",
                  "latex": "|A| \\neq 0 \\iff A^{-1} \\text{ exists}"
                }
              ]
            }
          }
        ]
      },
      {
        "id": "mat-cat-adjoint-inverse",
        "name": "(F) Adjoint, Inverse & Systems of Linear Equations",
        "formulas": [
          {
            "id": "mat-adjoint-master-identities",
            "title": "Adjoint Master Identities",
            "formula": "A·adj(A) = |A|·Iₙ  |  |adj(A)| = |A|ⁿ⁻¹  |  adj(adj(A)) = |A|ⁿ⁻²·A\n|adj(adj(A))| = |A|^{(n−1)²}  |  adj(kA) = kⁿ⁻¹·adj(A)",
            "explanation": "Master adjoint identities that appear in almost every competitive MCA entrance exam.",
            "mustKnow": true,
            "remember": "Memory: For 3×3 (n=3): |adj A| = |A|², |adj(adj A)| = |A|⁴, adj(kA) = k² adj(A).",
            "shortcut": "🎯 If |A| = 3 for 3×3 matrix: |adj A| = 3² = 9, |adj(adj A)| = 3⁴ = 81. Solved in 3 seconds!",
            "latex": "A \\cdot \\text{adj}(A) = |A| I_n, \\quad |\\text{adj}(A)| = |A|^{n-1}, \\quad |\\text{adj}(\\text{adj}(A))| = |A|^{(n-1)^2}, \\quad \\text{adj}(kA) = k^{n-1} \\text{adj}(A)",
            "table": {
              "headers": [
                "Adjoint Identity (Square Matrix A of order n)",
                "Mathematical Expression"
              ],
              "rows": [
                {
                  "feature": "Fundamental Adjoint Equation",
                  "value": "A · adj(A) = (adj A) · A = |A| · Iₙ",
                  "latex": "A \\cdot \\text{adj}(A) = (\\text{adj} A) \\cdot A = |A| \\cdot I_n"
                },
                {
                  "feature": "Determinant of Adjoint",
                  "value": "|adj(A)| = |A|ⁿ⁻¹ (For 3×3: |A|²)",
                  "latex": "|\\text{adj}(A)| = |A|^{n-1}"
                },
                {
                  "feature": "Adjoint of Adjoint Matrix",
                  "value": "adj(adj(A)) = |A|ⁿ⁻² · A (For 3×3: |A| · A)",
                  "latex": "\\text{adj}(\\text{adj}(A)) = |A|^{n-2} \\cdot A"
                },
                {
                  "feature": "Determinant of Double Adjoint",
                  "value": "|adj(adj(A))| = |A|^{(n−1)²} (For 3×3: |A|⁴)",
                  "latex": "|\\text{adj}(\\text{adj}(A))| = |A|^{(n-1)^2}"
                },
                {
                  "feature": "Adjoint of Scalar Multiple: adj(kA)",
                  "value": "kⁿ⁻¹ · adj(A) (For 3×3: k² · adj(A))",
                  "latex": "\\text{adj}(kA) = k^{n-1} \\text{adj}(A)"
                },
                {
                  "feature": "Adjoint of Product (Reversal Law)",
                  "value": "adj(AB) = adj(B) · adj(A)",
                  "latex": "\\text{adj}(AB) = \\text{adj}(B) \\cdot \\text{adj}(A)"
                },
                {
                  "feature": "Adjoint of Inverse",
                  "value": "adj(A⁻¹) = A / |A| = (adj A)⁻¹",
                  "latex": "\\text{adj}(A^{-1}) = \\frac{A}{|A|} = (\\text{adj} A)^{-1}"
                },
                {
                  "feature": "Transpose of Adjoint",
                  "value": "adj(Aᵀ) = (adj A)ᵀ",
                  "latex": "\\text{adj}(A^T) = (\\text{adj} A)^T"
                }
              ]
            }
          },
          {
            "id": "mat-inverse-equations",
            "title": "Inverse Formula, Properties & Matrix Equations",
            "formula": "A⁻¹ = adj(A)/|A|  |  (AB)⁻¹ = B⁻¹A⁻¹  |  (Aᵀ)⁻¹ = (A⁻¹)ᵀ\nAX = B ⇒ X = A⁻¹B  |  XA = B ⇒ X = BA⁻¹",
            "explanation": "Matrix inverse exists if and only if |A| ≠ 0. Watch out for multiplication direction in matrix equations!",
            "mustKnow": true,
            "remember": "Memory: 2×2: swap diagonal, negate off-diagonal, divide by det. Inverse reverses order: (AB)⁻¹ = B⁻¹A⁻¹.",
            "commonMistake": "⚠️ AX = B gives X = A⁻¹B (left multiply). Do NOT write X = BA⁻¹! For XA = B, multiply from right: X = BA⁻¹.",
            "latex": "A^{-1} = \\frac{\\text{adj}(A)}{|A|}, \\quad (AB)^{-1} = B^{-1} A^{-1}, \\quad AX = B \\implies X = A^{-1} B, \\quad XA = B \\implies X = B A^{-1}",
            "table": {
              "headers": [
                "Inverse Property / Equation",
                "Mathematical Formula & Procedure"
              ],
              "rows": [
                {
                  "feature": "Inverse Definition",
                  "value": "A · A⁻¹ = A⁻¹ · A = I (Requires |A| ≠ 0)",
                  "latex": "A A^{-1} = A^{-1} A = I \\quad (|A| \\neq 0)"
                },
                {
                  "feature": "Inverse Calculation Formula",
                  "value": "A⁻¹ = adj(A) / |A|",
                  "latex": "A^{-1} = \\frac{\\text{adj}(A)}{|A|}"
                },
                {
                  "feature": "2×2 Fast Inverse Shortcut",
                  "value": "Swap a & d, negate b & c, divide by (ad − bc)",
                  "latex": "\\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}^{-1} = \\frac{1}{ad - bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}"
                },
                {
                  "feature": "Double Inverse",
                  "value": "(A⁻¹)⁻¹ = A",
                  "latex": "(A^{-1})^{-1} = A"
                },
                {
                  "feature": "Product Inverse (Reversal)",
                  "value": "(AB)⁻¹ = B⁻¹ · A⁻¹ (Order reverses)",
                  "latex": "(AB)^{-1} = B^{-1} A^{-1}"
                },
                {
                  "feature": "Transpose of Inverse",
                  "value": "(Aᵀ)⁻¹ = (A⁻¹)ᵀ",
                  "latex": "(A^T)^{-1} = (A^{-1})^T"
                },
                {
                  "feature": "Scalar Multiple Inverse",
                  "value": "(kA)⁻¹ = (1/k) · A⁻¹ (k ≠ 0)",
                  "latex": "(kA)^{-1} = \\frac{1}{k} A^{-1}"
                },
                {
                  "feature": "Matrix Power Inverse",
                  "value": "(Aⁿ)⁻¹ = (A⁻¹)ⁿ = A⁻ⁿ",
                  "latex": "(A^n)^{-1} = (A^{-1})^n = A^{-n}"
                },
                {
                  "feature": "Solving AX = B",
                  "value": "X = A⁻¹ · B (Pre-multiply by A⁻¹)",
                  "latex": "AX = B \\implies X = A^{-1} B"
                },
                {
                  "feature": "Solving XA = B",
                  "value": "X = B · A⁻¹ (Post-multiply by A⁻¹)",
                  "latex": "XA = B \\implies X = B A^{-1}"
                }
              ]
            }
          },
          {
            "id": "mat-cramer-consistency",
            "title": "Cramer's Rule & Consistency of Linear Equations",
            "formula": "x = D₁/D, y = D₂/D, z = D₃/D  (where D = |A| ≠ 0)\nD ≠ 0 ⇒ Unique  |  D = 0 & all Dᵢ = 0 ⇒ Infinite  |  D = 0 & any Dᵢ ≠ 0 ⇒ No Solution",
            "explanation": "Determinant criterion for solvability and consistency of non-homogeneous linear systems AX = B.",
            "mustKnow": true,
            "remember": "Memory: D ≠ 0 → unique; D = 0 and all zeroes → infinite; D = 0 and non-zero numerator → no solution.",
            "shortcut": "🎯 Parameters question (λ, μ): Set D = 0 to find critical λ for non-uniqueness, then test D₁, D₂ for μ.",
            "latex": "x_i = \\frac{D_i}{D}, \\quad D = |A|, \\quad \\begin{cases} D \\neq 0 & \\text{Unique Solution (Consistent)} \\\\ D = 0, D_i = 0 & \\text{Infinitely Many Solutions (Consistent)} \\\\ D = 0, \\exists D_i \\neq 0 & \\text{No Solution (Inconsistent)} \\end{cases}",
            "table": {
              "headers": [
                "Cramer's Determinant Conditions",
                "System Nature & Solutions"
              ],
              "rows": [
                {
                  "feature": "D ≠ 0",
                  "value": "Consistent with Unique Solution: x = D₁/D, y = D₂/D, z = D₃/D",
                  "latex": "\\text{Unique Solution } \\left(x_i = \\frac{D_i}{D}\\right) \\quad [\\text{Consistent}]"
                },
                {
                  "feature": "D = 0 and D₁ = D₂ = D₃ = 0",
                  "value": "Consistent with Infinitely Many Solutions (Dependent planes)",
                  "latex": "\\text{Infinitely Many Solutions } [\\text{Consistent}]"
                },
                {
                  "feature": "D = 0 and at least one Dᵢ ≠ 0",
                  "value": "Inconsistent with No Solution (Parallel / intersecting planes with no common point)",
                  "latex": "\\text{No Solution } [\\text{Inconsistent}]"
                },
                {
                  "feature": "Homogeneous System (AX = O): D ≠ 0",
                  "value": "Trivial Solution only: x = y = z = 0",
                  "latex": "D \\neq 0 \\implies x = y = z = 0 \\quad (\\text{Trivial})"
                },
                {
                  "feature": "Homogeneous System (AX = O): D = 0",
                  "value": "Non-Trivial (Infinite) Solutions exist",
                  "latex": "D = 0 \\implies \\text{Non-Trivial Solutions Exist}"
                }
              ]
            }
          }
        ]
      },
      {
        "id": "mat-cat-nimcet-shortcuts",
        "name": "(G) NIMCET High-Yield Patterns & Shortcuts",
        "formulas": [
          {
            "id": "mat-three-operations-distinction",
            "title": "The Three Fundamental Operations Distinction",
            "formula": "Rᵢ → Rᵢ + kRⱼ ⇒ D unchanged\nRᵢ → kRᵢ ⇒ D → kD\nRᵢ ↔ Rⱼ ⇒ D → −D",
            "explanation": "The three operations must NEVER be confused under exam pressure. They are the bedrock of determinant shortcuts.",
            "mustKnow": true,
            "remember": "Memory: Addition → SAME; Multiply single row → ×k; Swap → NEGATIVE.",
            "shortcut": "🎯 Never confuse scaling one row vs scaling entire matrix: |kA| = kⁿ|A|, but R₁ → kR₁ gives k|A|.",
            "latex": "\\begin{aligned} R_i \\to R_i + k R_j &\\implies D' = D \\quad (\\text{Unchanged}) \\\\ R_i \\to k R_i &\\implies D' = kD \\quad (\\times k) \\\\ R_i \\leftrightarrow R_j &\\implies D' = -D \\quad (\\text{Sign changes}) \\\\ A \\to kA &\\implies |kA| = k^n |A| \\quad (\\text{Entire } n\\times n \\text{ matrix}) \\end{aligned}",
            "table": {
              "headers": [
                "Operation Type",
                "Exact Effect on Determinant Value"
              ],
              "rows": [
                {
                  "feature": "Type 1: Row Addition (Rᵢ → Rᵢ + kRⱼ)",
                  "value": "D' = D (Value remains completely unchanged)",
                  "latex": "D' = D \\quad (\\text{Unchanged})"
                },
                {
                  "feature": "Type 2: Row Scaling (Rᵢ → kRᵢ)",
                  "value": "D' = k · D (Multiplied by k)",
                  "latex": "D' = kD \\quad (\\text{Scaled by } k)"
                },
                {
                  "feature": "Type 3: Row Interchange (Rᵢ ↔ Rⱼ)",
                  "value": "D' = −D (Sign flips to negative)",
                  "latex": "D' = -D \\quad (\\text{Sign Inverted})"
                },
                {
                  "feature": "Matrix Scaling: A → kA (Order n)",
                  "value": "|kA| = kⁿ · |A| (Every row contributes a factor k)",
                  "latex": "|kA| = k^n |A|"
                }
              ]
            }
          },
          {
            "id": "mat-speed-eval-tricks",
            "title": "High-Speed Determinant Evaluation Tricks",
            "formula": "Row sum = S ⇒ C₁ → C₁ + C₂ + ··· + Cₙ factors S out\nRow sum = 0 ⇒ D = 0  |  Make 2 rows equal ⇒ D = 0  |  Make row 0 ⇒ D = 0",
            "explanation": "High-speed shortcuts designed to evaluate competitive NIMCET determinant problems in under 30 seconds without cofactor expansion.",
            "mustKnow": true,
            "remember": "Memory: Row sum constant → add all columns to C₁ and take constant out. Row sum zero → D = 0 immediately.",
            "shortcut": "🎯 If every row sums to the same constant S, replace C₁ → C₁ + C₂ + C₃. First column becomes S, factor it out!",
            "latex": "\\sum_{j=1}^n a_{ij} = 0 \\implies |A| = 0, \\quad \\sum_{j=1}^n a_{ij} = S \\implies |A| = S \\begin{vmatrix} 1 & a_{12} & \\dots \\\\ 1 & a_{22} & \\dots \\\\ 1 & a_{32} & \\dots \\end{vmatrix}",
            "table": {
              "headers": [
                "NIMCET Shortcut / Pattern",
                "Exam Action & Instant Result"
              ],
              "rows": [
                {
                  "feature": "Row Sum Constant (∑ aᵢⱼ = S)",
                  "value": "Apply C₁ → C₁ + C₂ + ··· + Cₙ. First column becomes [S, S, ..., S]ᵀ. Factor S out.",
                  "latex": "C_1 \\to \\sum C_j \\implies \\text{Factor out } S"
                },
                {
                  "feature": "Row Sum Zero (∑ aᵢⱼ = 0)",
                  "value": "Apply C₁ → C₁ + C₂ + ··· + Cₙ. First column becomes all zeroes ⇒ |A| = 0 instantly!",
                  "latex": "\\sum_{j=1}^n a_{ij} = 0 \\implies |A| = 0"
                },
                {
                  "feature": "Column Sum Zero (∑ aᵢⱼ = 0)",
                  "value": "Apply R₁ → R₁ + R₂ + ··· + Rₙ. First row becomes all zeroes ⇒ |A| = 0 instantly!",
                  "latex": "\\sum_{i=1}^n a_{ij} = 0 \\implies |A| = 0"
                },
                {
                  "feature": "Make Two Rows Equal",
                  "value": "If one row operation yields R₂ = R₃, then D = 0 immediately.",
                  "latex": "R_2 = R_3 \\implies D = 0"
                },
                {
                  "feature": "Make an Entire Row Zero",
                  "value": "If an operation creates [0, 0, 0], then D = 0 immediately.",
                  "latex": "R_i = [0 \\; 0 \\; 0] \\implies D = 0"
                },
                {
                  "feature": "Odd-Order Skew-Symmetric",
                  "value": "Any 3×3 with aᵢⱼ = −aⱼᵢ and zeroes on diagonal has |A| = 0 in 1 second.",
                  "latex": "|A_{3\\times3}| = 0 \\quad (A^T = -A)"
                },
                {
                  "feature": "Fast 2×2 Inverse",
                  "value": "Swap diagonal, negate off-diagonal, divide by ad − bc.",
                  "latex": "A^{-1} = \\frac{1}{ad-bc} \\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}"
                },
                {
                  "feature": "Order Reversal Checklist",
                  "value": "(AB)ᵀ = BᵀAᵀ  and  (AB)⁻¹ = B⁻¹A⁻¹  and  adj(AB) = adj(B)adj(A)",
                  "latex": "(AB)^{-1} = B^{-1} A^{-1}, \\quad (AB)^T = B^T A^T"
                },
                {
                  "feature": "Cayley–Hamilton Shortcut (Powers & Inverse)",
                  "value": "For 2×2: A² = tr(A)A − |A|I and A⁻¹ = (tr(A)I − A)/|A|. High powers A³ = tr(A)A² − |A|A without manual products.",
                  "latex": "A^2 = \\text{tr}(A)A - |A|I, \\quad A^{-1} = \\frac{\\text{tr}(A)I - A}{|A|}"
                }
              ]
            }
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
            "latex": "\\begin{aligned} (1) Slope-intercept: y = mx + c \\\\ (2) Point-slope: y − y_1 = m(x − x_1) \\\\ (3) Intercept: x/a + y/b = 1 \\\\ (4) Normal form: x \\cos  \\alpha  + y \\sin  \\alpha  = p \\end{aligned}",
            "table": {
              "headers": [
                "Line Form",
                "Standard Equation"
              ],
              "rows": [
                {
                  "feature": "Slope-Intercept Form",
                  "value": "y = mx + c",
                  "latex": "y = mx + c"
                },
                {
                  "feature": "Point-Slope Form",
                  "value": "y - y_1 = m(x - x_1)",
                  "latex": "y - y_1 = m(x - x_1)"
                },
                {
                  "feature": "Two-Point Form",
                  "value": "y - y_1 = ((y_2 - y_1)/(x_2 - x_1))(x - x_1)",
                  "latex": "y - y_1 = \\frac{y_2 - y_1}{x_2 - x_1}(x - x_1)"
                },
                {
                  "feature": "Intercept Form",
                  "value": "x/a + y/b = 1",
                  "latex": "\\frac{x}{a} + \\frac{y}{b} = 1"
                },
                {
                  "feature": "Normal / Perpendicular Form",
                  "value": "x cosα + y sinα = p",
                  "latex": "x\\cos\\alpha + y\\sin\\alpha = p"
                },
                {
                  "feature": "Parametric / Symmetric Form",
                  "value": "(x - x_1)/cosθ = (y - y_1)/sinθ = r",
                  "latex": "\\frac{x - x_1}{\\cos\\theta} = \\frac{y - y_1}{\\sin\\theta} = r"
                },
                {
                  "feature": "General Algebraic Form",
                  "value": "ax + by + c = 0",
                  "latex": "ax + by + c = 0"
                }
              ]
            }
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
            "latex": "\\begin{aligned} Standard: (x − h)^2 + (y − k)^2 = r^2 \\\\ General: x^2 + y^2 + 2gx + 2fy + c = 0 \\\\ Centre = (−g, −f)  |  Radius r = \\sqrt{g^2 + f^2 − c} \\end{aligned}",
            "table": {
              "headers": [
                "Circle Property",
                "Formula / Value"
              ],
              "rows": [
                {
                  "feature": "Standard Equation",
                  "value": "(x - h)^2 + (y - k)^2 = r^2",
                  "latex": "(x - h)^2 + (y - k)^2 = r^2"
                },
                {
                  "feature": "Standard Centre & Radius",
                  "value": "Centre (h, k), Radius r",
                  "latex": "\\text{Centre } (h, k), \\quad \\text{Radius } r"
                },
                {
                  "feature": "General Equation",
                  "value": "x^2 + y^2 + 2gx + 2fy + c = 0",
                  "latex": "x^2 + y^2 + 2gx + 2fy + c = 0"
                },
                {
                  "feature": "General Centre",
                  "value": "(-g, -f)",
                  "latex": "(-g, -f)"
                },
                {
                  "feature": "General Radius",
                  "value": "r = √(g^2 + f^2 - c)",
                  "latex": "r = \\sqrt{g^2 + f^2 - c}"
                },
                {
                  "feature": "Real Circle Condition",
                  "value": "g^2 + f^2 - c > 0",
                  "latex": "g^2 + f^2 - c > 0"
                },
                {
                  "feature": "Point Circle Condition",
                  "value": "g^2 + f^2 - c = 0",
                  "latex": "g^2 + f^2 - c = 0"
                },
                {
                  "feature": "Intercept on x-axis",
                  "value": "2√(g^2 - c)",
                  "latex": "2\\sqrt{g^2 - c}"
                },
                {
                  "feature": "Intercept on y-axis",
                  "value": "2√(f^2 - c)",
                  "latex": "2\\sqrt{f^2 - c}"
                }
              ]
            }
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
            "latex": "\\begin{aligned} Focus: (a, 0)  |  Directrix: x = −a  |  Axis: y = 0 \\\\ Latus Rectum: 4a  |  Parametric: (at^2, 2at) \\end{aligned}",
            "table": {
              "headers": [
                "Feature",
                "Formula / Value"
              ],
              "rows": [
                {
                  "feature": "Standard Equation",
                  "value": "y^2 = 4ax",
                  "latex": "y^2 = 4ax"
                },
                {
                  "feature": "Vertex",
                  "value": "(0, 0)",
                  "latex": "(0, 0)"
                },
                {
                  "feature": "Focus",
                  "value": "(a, 0)",
                  "latex": "(a, 0)"
                },
                {
                  "feature": "Directrix",
                  "value": "x = -a",
                  "latex": "x = -a"
                },
                {
                  "feature": "Axis of Symmetry",
                  "value": "y = 0",
                  "latex": "y = 0"
                },
                {
                  "feature": "Length of Latus Rectum",
                  "value": "4a",
                  "latex": "4a"
                },
                {
                  "feature": "Parametric Coordinates",
                  "value": "(at^2, 2at)",
                  "latex": "(at^2, 2at)"
                },
                {
                  "feature": "Symmetry",
                  "value": "About the x-axis",
                  "latex": "\\text{About the } x\\text{-axis}"
                },
                {
                  "feature": "Focal Distance of (x, y)",
                  "value": "x + a",
                  "latex": "x + a"
                }
              ]
            }
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
            "latex": "\\begin{aligned} Eccentricity: e = \\sqrt{1 − b^2/a^2}   \\implies   b^2 = a^2(1 − e^2) \\\\ Foci: ( \\pm ae, 0)  |  Directrices: x =  \\pm a/e \\\\ Latus Rectum = 2b^2/a  |  Director Circle: x^2 + y^2 = a^2 + b^2 \\end{aligned}",
            "table": {
              "headers": [
                "Feature",
                "Formula / Value"
              ],
              "rows": [
                {
                  "feature": "Standard Equation",
                  "value": "x^2/a^2 + y^2/b^2 = 1",
                  "latex": "\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\quad (a > b)"
                },
                {
                  "feature": "Centre",
                  "value": "(0, 0)",
                  "latex": "(0, 0)"
                },
                {
                  "feature": "Vertices",
                  "value": "(±a, 0)",
                  "latex": "(\\pm a, 0)"
                },
                {
                  "feature": "Foci",
                  "value": "(±ae, 0)",
                  "latex": "(\\pm ae, 0)"
                },
                {
                  "feature": "Directrices",
                  "value": "x = ±a/e",
                  "latex": "x = \\pm \\frac{a}{e}"
                },
                {
                  "feature": "Eccentricity (e)",
                  "value": "e = √(1 - b^2/a^2)",
                  "latex": "e = \\sqrt{1 - \\frac{b^2}{a^2}}"
                },
                {
                  "feature": "Relation between Axes",
                  "value": "b^2 = a^2(1 - e^2)",
                  "latex": "b^2 = a^2(1 - e^2)"
                },
                {
                  "feature": "Length of Major Axis",
                  "value": "2a",
                  "latex": "2a"
                },
                {
                  "feature": "Length of Minor Axis",
                  "value": "2b",
                  "latex": "2b"
                },
                {
                  "feature": "Length of Latus Rectum",
                  "value": "2b^2/a",
                  "latex": "\\frac{2b^2}{a}"
                },
                {
                  "feature": "Director Circle",
                  "value": "x^2 + y^2 = a^2 + b^2",
                  "latex": "x^2 + y^2 = a^2 + b^2"
                },
                {
                  "feature": "Focal Distance Property",
                  "value": "SP + S'P = 2a",
                  "latex": "SP + S'P = 2a"
                }
              ]
            }
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
            "latex": "\\begin{aligned} Eccentricity: e = \\sqrt{1 + b^2/a^2}   \\implies   b^2 = a^2(e^2 − 1) \\\\ Foci: ( \\pm ae, 0)  |  Directrices: x =  \\pm a/e \\\\ Latus Rectum = 2b^2/a  |  Director Circle: x^2 + y^2 = a^2 − b^2 \\end{aligned}",
            "table": {
              "headers": [
                "Feature",
                "Formula / Value"
              ],
              "rows": [
                {
                  "feature": "Standard Equation",
                  "value": "x^2/a^2 - y^2/b^2 = 1",
                  "latex": "\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1"
                },
                {
                  "feature": "Centre",
                  "value": "(0, 0)",
                  "latex": "(0, 0)"
                },
                {
                  "feature": "Vertices",
                  "value": "(±a, 0)",
                  "latex": "(\\pm a, 0)"
                },
                {
                  "feature": "Foci",
                  "value": "(±ae, 0)",
                  "latex": "(\\pm ae, 0)"
                },
                {
                  "feature": "Directrices",
                  "value": "x = ±a/e",
                  "latex": "x = \\pm \\frac{a}{e}"
                },
                {
                  "feature": "Eccentricity (e)",
                  "value": "e = √(1 + b^2/a^2)",
                  "latex": "e = \\sqrt{1 + \\frac{b^2}{a^2}}"
                },
                {
                  "feature": "Relation between Axes",
                  "value": "b^2 = a^2(e^2 - 1)",
                  "latex": "b^2 = a^2(e^2 - 1)"
                },
                {
                  "feature": "Transverse Axis Length",
                  "value": "2a",
                  "latex": "2a"
                },
                {
                  "feature": "Conjugate Axis Length",
                  "value": "2b",
                  "latex": "2b"
                },
                {
                  "feature": "Length of Latus Rectum",
                  "value": "2b^2/a",
                  "latex": "\\frac{2b^2}{a}"
                },
                {
                  "feature": "Director Circle",
                  "value": "x^2 + y^2 = a^2 - b^2 (a > b)",
                  "latex": "x^2 + y^2 = a^2 - b^2 \\quad (a > b)"
                },
                {
                  "feature": "Focal Distance Property",
                  "value": "|SP - S'P| = 2a",
                  "latex": "|SP - S'P| = 2a"
                }
              ]
            }
          },
          {
            "id": "hyperbola-rect-asymp",
            "title": "Rectangular Hyperbola & Asymptotes",
            "formula": "Asymptotes of x²/a² − y²/b² = 1:  y = ± (b/a) x\nRectangular hyperbola: a = b ⇒ e = √2\nRotated form: xy = c²  (Asymptotes are coordinate axes, e = √2)",
            "explanation": "Rectangular hyperbola has perpendicular asymptotes and fixed eccentricity e = √2.",
            "mustKnow": true,
            "shortcut": "🎯 Key fact: Eccentricity of every rectangular hyperbola is always √2.",
            "latex": "\\begin{aligned} Asymptotes of x^2/a^2 − y^2/b^2 = 1:  y =  \\pm  \\frac{b}{a} x \\\\ Rectangular hyperbola: a = b  \\implies  e = \\sqrt{2} \\\\ Rotated form: xy = c^2  (Asymptotes are coordinate axes, e = \\sqrt{2}) \\end{aligned}",
            "table": {
              "headers": [
                "Feature / Property",
                "Formula / Value"
              ],
              "rows": [
                {
                  "feature": "Standard Asymptotes",
                  "value": "y = ±(b/a)x",
                  "latex": "y = \\pm \\frac{b}{a}x"
                },
                {
                  "feature": "Angle between Asymptotes",
                  "value": "2 tan^-1(b/a)",
                  "latex": "2\\tan^{-1}\\left(\\frac{b}{a}\\right)"
                },
                {
                  "feature": "Rectangular Hyperbola Condition",
                  "value": "a = b  ⇒  x^2 - y^2 = a^2",
                  "latex": "a = b \\implies x^2 - y^2 = a^2"
                },
                {
                  "feature": "Rectangular Eccentricity",
                  "value": "e = √2",
                  "latex": "e = \\sqrt{2}"
                },
                {
                  "feature": "Asymptotes Angle (Rectangular)",
                  "value": "90° (Perpendicular)",
                  "latex": "90^\\circ \\quad (\\text{Perpendicular})"
                },
                {
                  "feature": "Rotated Form",
                  "value": "xy = c^2",
                  "latex": "xy = c^2"
                },
                {
                  "feature": "Rotated Form Asymptotes",
                  "value": "Coordinate axes (x = 0, y = 0)",
                  "latex": "x = 0, \\quad y = 0"
                },
                {
                  "feature": "Rotated Form Vertices",
                  "value": "(c, c) and (-c, -c)",
                  "latex": "(c, c), \\quad (-c, -c)"
                }
              ]
            }
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
            "latex": "\\begin{aligned} Reflexive: (a, a)  \\in  R for all a  \\in  A \\\\ Symmetric: (a, b)  \\in  R  \\implies  (b, a)  \\in  R \\\\ Transitive: (a, b)  \\in  R and (b, c)  \\in  R  \\implies  (a, c)  \\in  R \\\\ Equivalence: Reflexive + Symmetric + Transitive \\end{aligned}",
            "table": {
              "headers": [
                "Relation Type on Set A",
                "Formal Definition"
              ],
              "rows": [
                {
                  "feature": "Reflexive",
                  "value": "(a, a) ∈ R for all a ∈ A",
                  "latex": "\\forall a \\in A, \\quad (a, a) \\in R"
                },
                {
                  "feature": "Symmetric",
                  "value": "(a, b) ∈ R ⇒ (b, a) ∈ R",
                  "latex": "(a, b) \\in R \\implies (b, a) \\in R"
                },
                {
                  "feature": "Transitive",
                  "value": "(a, b) ∈ R and (b, c) ∈ R ⇒ (a, c) ∈ R",
                  "latex": "(a, b) \\in R \\land (b, c) \\in R \\implies (a, c) \\in R"
                },
                {
                  "feature": "Anti-Symmetric",
                  "value": "(a, b) ∈ R and (b, a) ∈ R ⇒ a = b",
                  "latex": "(a, b) \\in R \\land (b, a) \\in R \\implies a = b"
                },
                {
                  "feature": "Equivalence Relation",
                  "value": "Simultaneously Reflexive, Symmetric, and Transitive",
                  "latex": "\\text{Reflexive} + \\text{Symmetric} + \\text{Transitive}"
                }
              ]
            }
          },
          {
            "id": "rel-counting-formulas",
            "title": "Number of Specific Relations on Set with n Elements",
            "formula": "Total relations: 2^(n²)\nReflexive relations: 2^(n² − n)\nSymmetric relations: 2^[n(n + 1) / 2]\nReflexive & Symmetric: 2^[n(n − 1) / 2]",
            "explanation": "Extremely popular direct counting formulas in MCA and computer science math.",
            "mustKnow": true,
            "shortcut": "🎯 Direct formula question: For n=3 elements, Reflexive = 2^(9-3) = 2⁶ = 64.",
            "latex": "\\begin{aligned} Total relations: 2^(n^2) \\\\ Reflexive relations: 2^(n^2 − n) \\\\ Symmetric relations: 2^[n(n + 1) / 2] \\\\ Reflexive & Symmetric: 2^[n(n − 1) / 2] \\end{aligned}",
            "table": {
              "headers": [
                "Type of Relation on Set with n Elements",
                "Total Count Formula"
              ],
              "rows": [
                {
                  "feature": "Total Binary Relations",
                  "value": "2^(n²)",
                  "latex": "2^{n^2}"
                },
                {
                  "feature": "Reflexive Relations",
                  "value": "2^(n² - n) = 2^[n(n - 1)]",
                  "latex": "2^{n(n - 1)} = 2^{n^2 - n}"
                },
                {
                  "feature": "Symmetric Relations",
                  "value": "2^[n(n + 1) / 2]",
                  "latex": "2^{\\frac{n(n + 1)}{2}}"
                },
                {
                  "feature": "Reflexive & Symmetric Relations",
                  "value": "2^[n(n - 1) / 2]",
                  "latex": "2^{\\frac{n(n - 1)}{2}}"
                },
                {
                  "feature": "Anti-Symmetric Relations",
                  "value": "2ⁿ · 3^[n(n - 1) / 2]",
                  "latex": "2^n \\cdot 3^{\\frac{n(n - 1)}{2}}"
                }
              ]
            }
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
            "latex": "\\begin{aligned} Idempotent: A + A = A,  A  \\cdot  A = A \\\\ Absorption: A + A \\cdot B = A,  A  \\cdot  (A + B) = A \\\\ Distributive: A + B \\cdot C = (A + B)(A + C) \\\\ Involution: (A')' = A  |  A + A' = 1,  A  \\cdot  A' = 0 \\end{aligned}",
            "table": {
              "headers": [
                "Boolean Law Name",
                "Algebraic Identities"
              ],
              "rows": [
                {
                  "feature": "Idempotent Laws",
                  "value": "A + A = A,  A · A = A",
                  "latex": "A + A = A, \\quad A \\cdot A = A"
                },
                {
                  "feature": "Identity Laws",
                  "value": "A + 0 = A,  A · 1 = A",
                  "latex": "A + 0 = A, \\quad A \\cdot 1 = A"
                },
                {
                  "feature": "Dominance / Boundedness",
                  "value": "A + 1 = 1,  A · 0 = 0",
                  "latex": "A + 1 = 1, \\quad A \\cdot 0 = 0"
                },
                {
                  "feature": "Complement Laws",
                  "value": "A + A' = 1,  A · A' = 0",
                  "latex": "A + A' = 1, \\quad A \\cdot A' = 0"
                },
                {
                  "feature": "Involution (Double Negation)",
                  "value": "(A')' = A",
                  "latex": "(A')' = A"
                },
                {
                  "feature": "Absorption Laws",
                  "value": "A + A · B = A,  A · (A + B) = A",
                  "latex": "A + A \\cdot B = A, \\quad A \\cdot (A + B) = A"
                },
                {
                  "feature": "De Morgan's Laws",
                  "value": "(A + B)' = A' · B',  (A · B)' = A' + B'",
                  "latex": "(A + B)' = A' \\cdot B', \\quad (A \\cdot B)' = A' + B'"
                }
              ]
            }
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
            "latex": "\\begin{aligned} Total functions: nᵐ \\\\ One-One functions: ^nPₘ (if m  \\le  n, else 0) \\\\ Bijective functions (m = n): n! \\end{aligned}",
            "table": {
              "headers": [
                "Function Mapping Type (|A|=m to |B|=n)",
                "Number of Possible Functions"
              ],
              "rows": [
                {
                  "feature": "Total Functions",
                  "value": "nᵐ",
                  "latex": "n^m"
                },
                {
                  "feature": "One-to-One (Injective) Functions",
                  "value": "ⁿPₘ if m ≤ n; 0 if m > n",
                  "latex": "\\begin{cases} {}^nP_m = \\frac{n!}{(n-m)!} & (m \\le n) \\\\ 0 & (m > n) \\end{cases}"
                },
                {
                  "feature": "Bijective (One-One & Onto, m = n)",
                  "value": "n!",
                  "latex": "n!"
                },
                {
                  "feature": "Constant Functions",
                  "value": "n",
                  "latex": "n"
                }
              ]
            }
          }
        ]
      },
      {
        "id": "func-even-odd-period",
        "name": "Even, Odd & Periodic Functions",
        "formulas": [
          {
            "id": "func-even-odd",
            "title": "Even & Odd Functions & Unique Decomposition",
            "formula": "Even function:\nf(−x) = f(x)\n→ Symmetric about the y-axis\n\nOdd function:\nf(−x) = −f(x)\n→ Symmetric about the origin\n\nEvery function f(x) can be uniquely decomposed into:\nf(x) = [f(x) + f(−x)]/2 + [f(x) − f(−x)]/2\n\nwhere\n\nEven part = [f(x) + f(−x)]/2\nOdd part  = [f(x) − f(−x)]/2",
            "explanation": "Every real function f(x) with symmetric domain can be uniquely split into an even component f_e(x) = [f(x)+f(-x)]/2 and an odd component f_o(x) = [f(x)-f(-x)]/2.",
            "mustKnow": true,
            "remember": "🎯 Memory: Even part = Average [f(x) + f(-x)]/2; Odd part = Half difference [f(x) - f(-x)]/2.",
            "shortcut": "🎯 Quick Check: For e^x, Even part = (e^x + e^(-x))/2 = cosh x, and Odd part = (e^x - e^(-x))/2 = sinh x.",
            "latex": "\\begin{aligned} &\\textbf{Even function:} \\quad f(-x) = f(x) \\implies \\text{Symmetric about the } y\\text{-axis} \\\\[4pt] &\\textbf{Odd function:} \\quad f(-x) = -f(x) \\implies \\text{Symmetric about the origin} \\\\[8pt] &\\textbf{Unique Decomposition:} \\\\[2pt] &f(x) = \\frac{f(x) + f(-x)}{2} + \\frac{f(x) - f(-x)}{2} \\\\[6pt] &\\text{where} \\quad \\text{Even part} = \\frac{f(x) + f(-x)}{2}, \\quad \\text{Odd part} = \\frac{f(x) - f(-x)}{2} \\end{aligned}",
            "table": {
              "headers": [
                "Component / Function",
                "Definition & Characteristic"
              ],
              "rows": [
                {
                  "feature": "Even Function",
                  "value": "f(−x) = f(x)",
                  "latex": "f(-x) = f(x) \\quad (\\text{Symmetric about } y\\text{-axis, e.g. } x^2, \\cos x)"
                },
                {
                  "feature": "Odd Function",
                  "value": "f(−x) = −f(x)",
                  "latex": "f(-x) = -f(x) \\quad (\\text{Symmetric about origin, e.g. } x^3, \\sin x, \\tan x)"
                },
                {
                  "feature": "Even Part f_e(x)",
                  "value": "[f(x) + f(−x)] / 2",
                  "latex": "f_e(x) = \\frac{f(x) + f(-x)}{2} \\implies f_e(-x) = f_e(x)"
                },
                {
                  "feature": "Odd Part f_o(x)",
                  "value": "[f(x) − f(−x)] / 2",
                  "latex": "f_o(x) = \\frac{f(x) - f(-x)}{2} \\implies f_o(-x) = -f_o(x)"
                }
              ]
            }
          },
          {
            "id": "func-periodic",
            "title": "Periodic Functions & Periods",
            "formula": "If f(x) has period T, then f(ax + b) has period T / |a|\nsin(x), cos(x), sec(x), cosec(x) have period 2π\ntan(x), cot(x) have period π\n|sin x|, |cos x| have period π",
            "explanation": "Fundamental period of composite arguments.",
            "mustKnow": true,
            "latex": "\\begin{aligned} If f(x) has period T, then f(ax + b) has period T / |a| \\\\ \\sin (x), \\cos (x), \\sec (x), \\csc (x) have period 2 \\pi  \\\\ \\tan (x), \\cot (x) have period  \\pi  \\\\ |\\sin  x|, |\\cos  x| have period  \\pi  \\end{aligned}",
            "table": {
              "headers": [
                "Trigonometric / Compound Function",
                "Fundamental Period (T)"
              ],
              "rows": [
                {
                  "feature": "sin x, cos x, sec x, csc x",
                  "value": "2π",
                  "latex": "2\\pi"
                },
                {
                  "feature": "tan x, cot x",
                  "value": "π",
                  "latex": "\\pi"
                },
                {
                  "feature": "|sin x|, |cos x|, |tan x|",
                  "value": "π",
                  "latex": "\\pi"
                },
                {
                  "feature": "f(ax + b) where f(x) has period T",
                  "value": "T / |a|",
                  "latex": "\\frac{T}{|a|}"
                },
                {
                  "feature": "sinⁿ x, cosⁿ x (n is even integer)",
                  "value": "π",
                  "latex": "\\pi"
                },
                {
                  "feature": "sinⁿ x, cosⁿ x (n is odd integer)",
                  "value": "2π",
                  "latex": "2\\pi"
                }
              ]
            }
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
            "latex": "\\begin{aligned} Cartesian: z = x + i y \\\\ Polar: z = r(\\cos  \\theta  + i \\sin  \\theta ),   where r = |z| = \\sqrt{x^2 + y^2} \\\\ Euler: z = r e^(i \\theta ) \\end{aligned}",
            "table": {
              "headers": [
                "Representation Form",
                "Formula / Coordinate Expression"
              ],
              "rows": [
                {
                  "feature": "Cartesian / Algebraic Form",
                  "value": "z = x + i y",
                  "latex": "z = x + iy"
                },
                {
                  "feature": "Modulus |z| (Distance from origin)",
                  "value": "r = √(x² + y²)",
                  "latex": "r = |z| = \\sqrt{x^2 + y^2}"
                },
                {
                  "feature": "Argument θ (Principal value)",
                  "value": "θ = Arg(z) = tan⁻¹(y / x)",
                  "latex": "\\theta = \\operatorname{Arg}(z) = \\tan^{-1}\\left(\\frac{y}{x}\\right)"
                },
                {
                  "feature": "Polar / Trigonometric Form",
                  "value": "z = r(cos θ + i sin θ)",
                  "latex": "z = r(\\cos\\theta + i\\sin\\theta)"
                },
                {
                  "feature": "Euler's Exponential Form",
                  "value": "z = r · e^(iθ)",
                  "latex": "z = r e^{i\\theta}"
                },
                {
                  "feature": "Complex Conjugate z̄",
                  "value": "z̄ = x - i y = r · e^(-iθ)",
                  "latex": "\\bar{z} = x - iy = r e^{-i\\theta}"
                }
              ]
            }
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
            "latex": "\\begin{aligned} \\omega &= \\frac{-1 + i\\sqrt{3}}{2}, \\quad \\omega^2 = \\frac{-1 - i\\sqrt{3}}{2} \\\\ 1 + \\omega + \\omega^2 &= 0, \\quad \\omega^3 = 1 \\\\ \\omega^{3k} &= 1, \\quad \\omega^{3k+1} = \\omega, \\quad \\omega^{3k+2} = \\omega^2 \\end{aligned}",
            "table": {
              "headers": [
                "Property / Feature",
                "Exact Mathematical Value"
              ],
              "rows": [
                {
                  "feature": "Definition of Complex Root ω",
                  "value": "(-1 + i√3) / 2",
                  "latex": "\\omega = \\frac{-1 + i\\sqrt{3}}{2}"
                },
                {
                  "feature": "Square Root of Root ω²",
                  "value": "(-1 - i√3) / 2",
                  "latex": "\\omega^2 = \\frac{-1 - i\\sqrt{3}}{2}"
                },
                {
                  "feature": "Sum of Roots Property",
                  "value": "1 + ω + ω² = 0",
                  "latex": "1 + \\omega + \\omega^2 = 0"
                },
                {
                  "feature": "Product & Power Periodicity",
                  "value": "ω³ = 1  ⇒  ω³ᵏ = 1, ω³ᵏ⁺¹ = ω, ω³ᵏ⁺² = ω²",
                  "latex": "\\omega^3 = 1 \\implies \\omega^{3k} = 1, \\; \\omega^{3k+1} = \\omega, \\; \\omega^{3k+2} = \\omega^2"
                },
                {
                  "feature": "Reciprocal Relation",
                  "value": "1 / ω = ω²,  1 / ω² = ω",
                  "latex": "\\frac{1}{\\omega} = \\omega^2, \\quad \\frac{1}{\\omega^2} = \\omega"
                },
                {
                  "feature": "Conjugate Property",
                  "value": "ω̄ = ω²,  (ω²)̄ = ω",
                  "latex": "\\bar{\\omega} = \\omega^2, \\quad \\overline{\\omega^2} = \\omega"
                }
              ]
            }
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
    "description": "Maclaurin & binomial expansions in correct order, telescoping series, method of differences & AGP.",
    "examWeightage": "High Frequency (NIMCET ~4-5 Qs)",
    "quickTips": [
      "Maclaurin Patterns: e^x (+ + + + +), e^(-x) (+ − + − +), log(1+x) (+ − + − +), log(1-x) (− − − − −).",
      "log(1+x) − log(1-x) = 2(x + x³/3 + x⁵/5 + ...): ODD POWERS ONLY (all +).",
      "log(1+x) + log(1-x) = −(x² + x⁴/2 + x⁶/3 + ...): EVEN POWERS ONLY (all −).",
      "sin x: ODD powers alternating; cos x: EVEN powers alternating; tan x: ODD powers all +.",
      "1/(1+x): (+ − + − +); 1/(1-x): (+ + + + +); a^x = e^(x log a); (1+x)ⁿ: Binomial Expansion."
    ],
    "categories": [
      {
        "id": "series-expansions",
        "name": "MACLAURIN / BINOMIAL EXPANSIONS — CORRECT ORDER",
        "badge": "13 Core Expansions",
        "formulas": [
          {
            "id": "exp-ex",
            "title": "1. e^x",
            "formula": "e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\frac{x^4}{4!} + \\frac{x^5}{5!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{x^n}{n!}",
            "explanation": "Standard exponential Maclaurin series expansion. Valid and convergent for all real numbers x ∈ ℝ.",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: e^x → + + + + + (All positive signs, every power xⁿ divided by n!).",
            "remember": "Sum starts at n = 0 with 0! = 1. Value at x = 1 gives Euler's number e ≈ 2.71828.",
            "latex": "\\begin{aligned} e^x &= 1+x+\\frac{x^2}{2!}+\\frac{x^3}{3!}+\\frac{x^4}{4!}+\\frac{x^5}{5!}+\\cdots \\\\[6pt] e^x &= \\sum_{n=0}^{\\infty}\\frac{x^n}{n!} \\end{aligned}"
          },
          {
            "id": "exp-e-minus-x",
            "title": "2. e^(-x)",
            "formula": "e^{-x} = 1 - x + \\frac{x^2}{2!} - \\frac{x^3}{3!} + \\frac{x^4}{4!} - \\frac{x^5}{5!} + \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^n}{n!}",
            "explanation": "Alternating exponential expansion obtained by replacing x with (-x) in e^x. Converges for all x ∈ ℝ.",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: e^(-x) → + − + − + (Alternating signs; odd powers negative, even powers positive).",
            "remember": "Adding gives e^x + e^(-x) = 2(1 + x²/2! + x⁴/4! + ...); Subtracting gives e^x - e^(-x) = 2(x + x³/3! + x⁵/5! + ...).",
            "latex": "\\begin{aligned} e^{-x} &= 1-x+\\frac{x^2}{2!}-\\frac{x^3}{3!}+\\frac{x^4}{4!}-\\frac{x^5}{5!}+\\cdots \\\\[6pt] e^{-x} &= \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^n}{n!} \\end{aligned}"
          },
          {
            "id": "exp-log-1-plus-x",
            "title": "3. log(1+x)",
            "formula": "\\log(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\frac{x^5}{5} - \\cdots = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1} x^n}{n}",
            "explanation": "Natural logarithm (base e) series. Essential distinction: denominators are plain integers n (NO factorials!).",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: log(1+x) → + − + − + (No factorials in denominator, starts with +x).",
            "remember": "Condition: -1 < x ≤ 1. At x = 1: log(2) = 1 - 1/2 + 1/3 - 1/4 + 1/5 - ...",
            "latex": "\\begin{aligned} \\log(1+x) &= x-\\frac{x^2}{2}+\\frac{x^3}{3}-\\frac{x^4}{4}+\\frac{x^5}{5}-\\cdots \\\\[6pt] \\log(1+x) &= \\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}x^n}{n} \\\\[6pt] &\\text{Condition: } -1 < x \\le 1 \\end{aligned}"
          },
          {
            "id": "exp-log-1-minus-x",
            "title": "4. log(1-x)",
            "formula": "\\log(1-x) = -x - \\frac{x^2}{2} - \\frac{x^3}{3} - \\frac{x^4}{4} - \\frac{x^5}{5} - \\cdots = -\\sum_{n=1}^{\\infty} \\frac{x^n}{n}",
            "explanation": "Formed by substituting (-x) into log(1+x). Crucial visual cue: EVERY single term is strictly negative.",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: log(1-x) → − − − − − (ALL NEGATIVE terms, no factorials).",
            "remember": "Condition: |x| < 1 (strictly -1 ≤ x < 1). Useful form: -log(1-x) = x + x²/2 + x³/3 + x⁴/4 + ...",
            "latex": "\\begin{aligned} \\log(1-x) &= -x-\\frac{x^2}{2}-\\frac{x^3}{3}-\\frac{x^4}{4}-\\frac{x^5}{5}-\\cdots \\\\[6pt] \\log(1-x) &= -\\sum_{n=1}^{\\infty} \\frac{x^n}{n} \\\\[6pt] &\\text{Condition: } |x| < 1 \\end{aligned}"
          },
          {
            "id": "exp-log-diff",
            "title": "5. log(1+x) - log(1-x)",
            "formula": "log(1+x) - log(1-x) = 2(x + x³/3 + x⁵/5 + x⁷/7 + ...) = 2 ∑_{n=0}^∞ [x^(2n+1) / (2n+1)]",
            "explanation": "Subtracting log(1-x) cancels all even powers, leaving twice each odd power. Identical to log((1+x)/(1-x)).",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: log(1+x) − log(1-x) → ODD POWERS ONLY, ALL +",
            "remember": "Condition: |x| < 1. NIMCET classic for calculating numerical logs (e.g. put x = 1/3 for log 2).",
            "latex": "\\begin{aligned} \\log(1+x)-\\log(1-x) &= 2x+\\frac{2x^3}{3}+\\frac{2x^5}{5}+\\frac{2x^7}{7}+\\cdots \\\\[8pt] \\text{or} \\quad &\\boxed{\\log(1+x)-\\log(1-x) = 2\\left(x+\\frac{x^3}{3}+\\frac{x^5}{5}+\\frac{x^7}{7}+\\cdots\\right)} \\\\[8pt] \\text{General form:} \\quad &\\boxed{\\log(1+x)-\\log(1-x) = 2\\sum_{n=0}^{\\infty}\\frac{x^{2n+1}}{2n+1}} \\end{aligned}"
          },
          {
            "id": "exp-log-sum",
            "title": "6. log(1+x) + log(1-x)",
            "formula": "log(1+x) + log(1-x) = -(x² + x⁴/2 + x⁶/3 + x⁸/4 + ...) = -∑_{n=1}^∞ [x^(2n) / n]",
            "explanation": "Adding both logarithm expansions cancels all odd powers, leaving the negative sum of even powers. Equal to log(1 - x²).",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: log(1+x) + log(1-x) → EVEN POWERS ONLY, ALL −",
            "remember": "Condition: |x| < 1. Note: Denominators are 1, 2, 3, 4 (corresponding to index n, where power is 2n).",
            "latex": "\\begin{aligned} \\log(1+x)+\\log(1-x) &= -x^2-\\frac{x^4}{2}-\\frac{x^6}{3}-\\frac{x^8}{4}-\\cdots \\\\[8pt] \\text{or} \\quad &\\boxed{\\log(1+x)+\\log(1-x) = -\\left(x^2+\\frac{x^4}{2}+\\frac{x^6}{3}+\\frac{x^8}{4}+\\cdots\\right)} \\\\[8pt] \\text{General form:} \\quad &\\boxed{\\log(1+x)+\\log(1-x) = -\\sum_{n=1}^{\\infty}\\frac{x^{2n}}{n}} \\end{aligned}"
          },
          {
            "id": "exp-sin-x",
            "title": "7. sin x",
            "formula": "\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\frac{x^7}{7!} + \\frac{x^9}{9!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!}",
            "explanation": "Sine is an odd function; its Maclaurin series features ONLY odd powers of x with factorial denominators and alternating signs.",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: sin x → ODD POWERS, ALTERNATING (+ - + -)",
            "remember": "Limits shortcut: sin x ≈ x - x³/6. Used for lim[x→0] (x - sin x)/x³ = 1/6.",
            "latex": "\\begin{aligned} \\sin x &= x-\\frac{x^3}{3!}+\\frac{x^5}{5!}-\\frac{x^7}{7!}+\\frac{x^9}{9!}-\\cdots \\\\[6pt] \\sin x &= \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n+1}}{(2n+1)!} \\end{aligned}"
          },
          {
            "id": "exp-cos-x",
            "title": "8. cos x",
            "formula": "\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\frac{x^8}{8!} - \\cdots = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}",
            "explanation": "Cosine is an even function; its Maclaurin series features ONLY even powers of x with factorial denominators and alternating signs, starting with 1.",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: cos x → EVEN POWERS, ALTERNATING (+ - + -)",
            "remember": "Limits shortcut: cos x ≈ 1 - x²/2. Used for lim[x→0] (1 - cos x)/x² = 1/2.",
            "latex": "\\begin{aligned} \\cos x &= 1-\\frac{x^2}{2!}+\\frac{x^4}{4!}-\\frac{x^6}{6!}+\\frac{x^8}{8!}-\\cdots \\\\[6pt] \\cos x &= \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!} \\end{aligned}"
          },
          {
            "id": "exp-tan-x",
            "title": "9. tan x",
            "formula": "tan x = x + x³/3 + 2x⁵/15 + 17x⁷/315 + 62x⁹/2835 + ...",
            "explanation": "Tangent expansion contains odd powers with strictly POSITIVE coefficients. Essential coefficients for NIMCET: 1, 1/3, 2/15, 17/315.",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: tan x → ODD POWERS, ALL + (Coefficients: 1, 1/3, 2/15, 17/315).",
            "remember": "Limits shortcut: tan x ≈ x + x³/3. Used for lim[x→0] (tan x - x)/x³ = 1/3 and lim[x→0] (tan x - sin x)/x³ = 1/2.",
            "latex": "\\begin{aligned} \\tan x &= x+\\frac{x^3}{3}+\\frac{2x^5}{15}+\\frac{17x^7}{315}+\\frac{62x^9}{2835}+\\cdots \\\\[8pt] \\text{For quick NIMCET revision:} \\quad &\\boxed{\\tan x = x+\\frac{x^3}{3}+\\frac{2x^5}{15}+\\frac{17x^7}{315}+\\cdots} \\end{aligned}"
          },
          {
            "id": "exp-one-plus-x-inv",
            "title": "10. (1+x)^(-1)",
            "formula": "(1+x)^(-1) = 1 - x + x² - x³ + x⁴ - x⁵ + ... = ∑_{n=0}^∞ (-1)ⁿ xⁿ   (|x| < 1)",
            "explanation": "Binomial expansion for negative integer exponent -1. Forms an infinite geometric progression with common ratio (-x).",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: 1/(1+x) → + − + − + (Alternating signs, all coefficients are 1).",
            "remember": "Condition: |x| < 1. If denominator is (1+x), signs alternate.",
            "latex": "\\begin{aligned} (1+x)^{-1} &= 1-x+x^2-x^3+x^4-x^5+\\cdots \\\\[8pt] \\text{General form:} \\quad &\\boxed{(1+x)^{-1} = \\sum_{n=0}^{\\infty}(-1)^n x^n} \\\\[8pt] \\text{Condition:} \\quad &|x| < 1 \\end{aligned}"
          },
          {
            "id": "exp-one-minus-x-inv",
            "title": "11. (1-x)^(-1)",
            "formula": "(1-x)^(-1) = 1 + x + x² + x³ + x⁴ + x⁵ + ... = ∑_{n=0}^∞ xⁿ   (|x| < 1)",
            "explanation": "Standard infinite geometric series 1/(1-r) with r = x. All signs are strictly positive and all coefficients equal 1.",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: 1/(1-x) → + + + + + (ALL POSITIVE terms, all coefficients are 1).",
            "remember": "Condition: |x| < 1. If denominator is (1-x), all signs are positive.",
            "latex": "\\begin{aligned} (1-x)^{-1} &= 1+x+x^2+x^3+x^4+x^5+\\cdots \\\\[8pt] \\text{General form:} \\quad &\\boxed{(1-x)^{-1} = \\sum_{n=0}^{\\infty}x^n} \\\\[8pt] \\text{Condition:} \\quad &|x| < 1 \\end{aligned}"
          },
          {
            "id": "exp-a-power-x",
            "title": "12. a^x",
            "formula": "a^x = 1 + x log a + [x²(log a)²]/2! + [x³(log a)³]/3! + ... = ∑_{n=0}^∞ [xⁿ(log a)ⁿ / n!]   (a > 0)",
            "explanation": "Since a^x = e^(x log a), substituting u = x log a into the e^u series yields powers of (x log a) divided by factorials.",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: a^x → e^(x log a) (Same as e^x with x replaced by x log a).",
            "remember": "Condition: a > 0. Verified by differentiation: d/dx(a^x) = a^x · log a.",
            "latex": "\\begin{aligned} \\text{Since } a^x &= e^{x\\log a} \\text{ therefore:} \\\\[6pt] a^x &= 1+x\\log a+\\frac{x^2(\\log a)^2}{2!}+\\frac{x^3(\\log a)^3}{3!}+\\frac{x^4(\\log a)^4}{4!}+\\cdots \\\\[8pt] \\text{General form:} \\quad &\\boxed{a^x = \\sum_{n=0}^{\\infty}\\frac{x^n(\\log a)^n}{n!}} \\\\[8pt] \\text{Condition:} \\quad &a > 0 \\end{aligned}"
          },
          {
            "id": "exp-binomial-general",
            "title": "13. (1+x)^n",
            "formula": "(1+x)ⁿ = 1 + nx + [n(n-1)/2!]x² + [n(n-1)(n-2)/3!]x³ + ... = ∑_{r=0}^∞ C(n,r) xʳ",
            "explanation": "General Binomial Theorem for any rational/real index n. Terminates at (n+1) terms if n ∈ ℕ; infinite series if n ∉ ℕ.",
            "mustKnow": true,
            "shortcut": "🎯 Quick Pattern Revision: (1+x)^n → BINOMIAL EXPANSION (Terminates at n if n is a positive integer).",
            "remember": "Condition for infinite series: |x| < 1. General term: T_(r+1) = [n(n-1)...(n-r+1) / r!] · x^r.",
            "latex": "\\begin{aligned} (1+x)^n &= 1+nx+\\frac{n(n-1)}{2!}x^2+\\frac{n(n-1)(n-2)}{3!}x^3+\\frac{n(n-1)(n-2)(n-3)}{4!}x^4+\\cdots \\\\[8pt] \\text{General form:} \\quad &\\boxed{(1+x)^n = \\sum_{r=0}^{\\infty}\\binom{n}{r}x^r} \\quad \\text{where } \\binom{n}{r} = \\frac{n(n-1)(n-2)\\cdots(n-r+1)}{r!} \\\\[8pt] \\text{For positive integer } n: \\quad &\\boxed{(1+x)^n = \\sum_{r=0}^{n}\\binom{n}{r}x^r} \\end{aligned}"
          },
          {
            "id": "exp-quick-pattern-revision",
            "title": "QUICK PATTERN REVISION (NIMCET Master Table)",
            "formula": "e^x (+ + + + +) | e^(-x) (+ − + − +) | log(1+x) (+ − + − +) | log(1-x) (− − − − −) | sin x (ODD, ALT) | cos x (EVEN, ALT) | tan x (ODD, ALL +)",
            "explanation": "Comparative pattern table for instant recall of signs, powers, factorials and conditions for all 13 expansions.",
            "mustKnow": true,
            "shortcut": "🎯 1-Second Exam Scan: Check if powers are odd/even, signs alternate or stay all (+/-), and if denominators have factorials or not.",
            "latex": "\\begin{aligned} e^x &\\longrightarrow +\\;+\\;+\\;+\\;+ \\\\[2pt] e^{-x} &\\longrightarrow +\\;-\\;+\\;-\\;+ \\\\[2pt] \\log(1+x) &\\longrightarrow +\\;-\\;+\\;-\\;+ \\\\[2pt] \\log(1-x) &\\longrightarrow -\\;-\\;-\\;-\\;- \\\\[2pt] \\log(1+x) - \\log(1-x) &\\longrightarrow \\text{ODD POWERS ONLY, ALL } + \\\\[2pt] \\log(1+x) + \\log(1-x) &\\longrightarrow \\text{EVEN POWERS ONLY, ALL } - \\\\[2pt] \\sin x &\\longrightarrow \\text{ODD POWERS, ALTERNATING} \\\\[2pt] \\cos x &\\longrightarrow \\text{EVEN POWERS, ALTERNATING} \\\\[2pt] \\tan x &\\longrightarrow \\text{ODD POWERS, ALL } + \\\\[2pt] (1+x)^{-1} &\\longrightarrow +\\;-\\;+\\;-\\;+ \\\\[2pt] (1-x)^{-1} &\\longrightarrow +\\;+\\;+\\;+\\;+ \\\\[2pt] a^x &\\longrightarrow e^{(x\\log a)} \\\\[2pt] (1+x)^n &\\longrightarrow \\text{BINOMIAL EXPANSION} \\end{aligned}",
            "table": {
              "headers": [
                "Series Expansion",
                "Sign & Power Quick Pattern"
              ],
              "rows": [
                { "feature": "e^x", "value": "+ + + + + (All positive terms, with factorials)", "latex": "e^x \\longrightarrow +\\;+\\;+\\;+\\;+" },
                { "feature": "e^(-x)", "value": "+ − + − + (Alternating signs, with factorials)", "latex": "e^{-x} \\longrightarrow +\\;-\\;+\\;-\\;+" },
                { "feature": "log(1+x)", "value": "+ − + − + (Alternating signs, no factorials)", "latex": "\\log(1+x) \\longrightarrow +\\;-\\;+\\;-\\;+" },
                { "feature": "log(1-x)", "value": "− − − − − (ALL NEGATIVE terms, no factorials)", "latex": "\\log(1-x) \\longrightarrow -\\;-\\;-\\;-\\;-" },
                { "feature": "log(1+x) − log(1-x)", "value": "ODD POWERS ONLY, ALL + (Factor of 2 outside)", "latex": "\\log(1+x) - \\log(1-x) \\longrightarrow \\text{ODD POWERS, ALL } +" },
                { "feature": "log(1+x) + log(1-x)", "value": "EVEN POWERS ONLY, ALL − (Negative of even sum)", "latex": "\\log(1+x) + \\log(1-x) \\longrightarrow \\text{EVEN POWERS, ALL } -" },
                { "feature": "sin x", "value": "ODD POWERS, ALTERNATING (+ − + − ...)", "latex": "\\sin x \\longrightarrow \\text{ODD POWERS, ALTERNATING}" },
                { "feature": "cos x", "value": "EVEN POWERS, ALTERNATING (+ − + − ...)", "latex": "\\cos x \\longrightarrow \\text{EVEN POWERS, ALTERNATING}" },
                { "feature": "tan x", "value": "ODD POWERS, ALL + (Coefficients: 1, 1/3, 2/15, 17/315)", "latex": "\\tan x \\longrightarrow \\text{ODD POWERS, ALL } +" },
                { "feature": "1/(1+x) = (1+x)^(-1)", "value": "+ − + − + (Alternating signs, all coeff 1)", "latex": "(1+x)^{-1} \\longrightarrow +\\;-\\;+\\;-\\;+" },
                { "feature": "1/(1-x) = (1-x)^(-1)", "value": "+ + + + + (ALL POSITIVE terms, all coeff 1)", "latex": "(1-x)^{-1} \\longrightarrow +\\;+\\;+\\;+\\;+" },
                { "feature": "a^x", "value": "e^(x log a) (Powers of (x log a) with factorials)", "latex": "a^x \\longrightarrow e^{(x\\log a)}" },
                { "feature": "(1+x)^n", "value": "BINOMIAL EXPANSION (Terminates at n if n ∈ ℕ)", "latex": "(1+x)^n \\longrightarrow \\text{BINOMIAL EXPANSION}" }
              ]
            }
          }
        ]
      },
      {
        "id": "series-agp",
        "name": "Arithmetic-Geometric Progression (AGP)",
        "formulas": [
          {
            "id": "agp-infinite",
            "title": "Sum of Infinite AGP (|r| < 1)",
            "formula": "S_∞ = \\frac{a}{1 - r} + \\frac{d \\cdot r}{(1 - r)^2}",
            "explanation": "Series where each term is the product of corresponding AP and GP terms.",
            "mustKnow": true,
            "shortcut": "🎯 Example: 1 + 2/3 + 3/9 + 4/27 + ... has a=1, d=1, r=1/3 ⇒ S_∞ = 1/(2/3) + (1/3)/(4/9) = 3/2 + 3/4 = 9/4.",
            "remember": "Sum exists if and only if |r| < 1.",
            "latex": "S_\\infty = \\frac{a}{1 - r} + \\frac{d \\cdot r}{(1 - r)^2} \\quad (|r| < 1)"
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
            "formula": "\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}, \\quad \\sum_{n=1}^k \\frac{1}{n(n+1)} = \\frac{k}{k + 1}",
            "explanation": "Interior terms cancel out in adjacent pairs leaving only first and last boundary terms.",
            "mustKnow": true,
            "shortcut": "🎯 Shortcut: Sum of 1/[n(n+1)] up to k terms is always k/(k+1). As k → ∞, sum = 1.",
            "latex": "\\begin{aligned} \\frac{1}{n(n + 1)} &= \\frac{1}{n} - \\frac{1}{n + 1} \\\\[6pt] \\sum_{n=1}^k \\frac{1}{n(n+1)} &= 1 - \\frac{1}{k + 1} = \\frac{k}{k + 1} \\end{aligned}"
          },
          {
            "id": "telescope-three",
            "title": "Telescoping with 3 Linear Factors",
            "formula": "\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2} \\left[ \\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)} \\right]",
            "explanation": "Splitting into difference of products of 2 consecutive factors using 1/(difference of first & last factor).",
            "mustKnow": true,
            "shortcut": "🎯 General Rule: 1/[n(n+1)...(n+r)] = 1/r · [1/(n...(n+r-1)) - 1/((n+1)...(n+r))].",
            "latex": "\\frac{1}{n(n+1)(n+2)} = \\frac{1}{2} \\left[ \\frac{1}{n(n+1)} - \\frac{1}{(n+1)(n+2)} \\right]"
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
            "latex": "\\begin{aligned} If y_i = a x_i + b: \\\\ Mean ȳ = a x̄ + b \\\\ SD σ_y = |a|  \\cdot  σ_x \\\\ Variance σ_y^2 = a^2  \\cdot  σ_x^2 \\end{aligned}",
            "table": {
              "headers": [
                "Statistical Measure under yᵢ = axᵢ + b",
                "Transformation Formula / Effect"
              ],
              "rows": [
                {
                  "feature": "Mean (ȳ)",
                  "value": "a · x̄ + b (Affected by both origin b and scale a)",
                  "latex": "\\bar{y} = a\\bar{x} + b"
                },
                {
                  "feature": "Median",
                  "value": "a · Median(x) + b",
                  "latex": "\\text{Median}(y) = a \\cdot \\text{Median}(x) + b"
                },
                {
                  "feature": "Mode",
                  "value": "a · Mode(x) + b",
                  "latex": "\\text{Mode}(y) = a \\cdot \\text{Mode}(x) + b"
                },
                {
                  "feature": "Standard Deviation (σ_y)",
                  "value": "|a| · σ_x (Affected ONLY by scale |a|, INDEPENDENT of b)",
                  "latex": "\\sigma_y = |a| \\cdot \\sigma_x"
                },
                {
                  "feature": "Variance (σ_y²)",
                  "value": "a² · σ_x² (Affected ONLY by scale a², INDEPENDENT of b)",
                  "latex": "\\sigma_y^2 = a^2 \\cdot \\sigma_x^2"
                },
                {
                  "feature": "Range / Mean Deviation",
                  "value": "|a| · Range(x) / |a| · MD(x)",
                  "latex": "\\text{Dispersion}_y = |a| \\cdot \\text{Dispersion}_x"
                }
              ]
            }
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
            "latex": "\\begin{aligned} lim_{x→0} (\\sin  x / x) = 1  |  lim_{x→0} (\\tan  x / x) = 1 \\\\ lim_{x→0} (1 − \\cos  x) / x^2 = ½ \\end{aligned}",
            "table": {
              "headers": [
                "Limit Expression (as x → 0)",
                "Evaluation Result"
              ],
              "rows": [
                {
                  "feature": "lim_{x→0} (sin x / x)",
                  "value": "1",
                  "latex": "\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1"
                },
                {
                  "feature": "lim_{x→0} (tan x / x)",
                  "value": "1",
                  "latex": "\\lim_{x \\to 0} \\frac{\\tan x}{x} = 1"
                },
                {
                  "feature": "lim_{x→0} (sin⁻¹ x / x)",
                  "value": "1",
                  "latex": "\\lim_{x \\to 0} \\frac{\\sin^{-1} x}{x} = 1"
                },
                {
                  "feature": "lim_{x→0} (tan⁻¹ x / x)",
                  "value": "1",
                  "latex": "\\lim_{x \\to 0} \\frac{\\tan^{-1} x}{x} = 1"
                },
                {
                  "feature": "lim_{x→0} (1 - cos x) / x²",
                  "value": "1 / 2",
                  "latex": "\\lim_{x \\to 0} \\frac{1 - \\cos x}{x^2} = \\frac{1}{2}"
                }
              ]
            }
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
            "latex": "\\begin{aligned} Product: (u  \\cdot  v)' = u' v + u v' \\\\ Quotient: \\frac{u}{v}' = (u' v − u v') / v^2 \\\\ Chain: d/dx [f(g(x))] = f'(g(x))  \\cdot  g'(x) \\end{aligned}",
            "table": {
              "headers": [
                "Differentiation Rule",
                "Derivative Formula"
              ],
              "rows": [
                {
                  "feature": "Product Rule",
                  "value": "d/dx [u · v] = u' · v + u · v'",
                  "latex": "\\frac{d}{dx}(u \\cdot v) = u'v + uv'"
                },
                {
                  "feature": "Quotient Rule",
                  "value": "d/dx [u / v] = (u' · v - u · v') / v²",
                  "latex": "\\frac{d}{dx}\\left(\\frac{u}{v}\\right) = \\frac{u'v - uv'}{v^2}"
                },
                {
                  "feature": "Chain Rule",
                  "value": "d/dx [f(g(x))] = f'(g(x)) · g'(x)",
                  "latex": "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)"
                },
                {
                  "feature": "Reciprocal Rule",
                  "value": "d/dx [1 / v] = -v' / v²",
                  "latex": "\\frac{d}{dx}\\left(\\frac{1}{v}\\right) = -\\frac{v'}{v^2}"
                }
              ]
            }
          },
          {
            "id": "deriv-inverse-trig",
            "title": "Derivatives of Inverse Trigonometric Functions",
            "formula": "d/dx(sin⁻¹x) = 1 / √(1 − x²)\nd/dx(cos⁻¹x) = −1 / √(1 − x²)\nd/dx(tan⁻¹x) = 1 / (1 + x²)\nd/dx(sec⁻¹x) = 1 / [|x| √(x² − 1)]",
            "explanation": "Standard derivative formulas used in integration reversibility.",
            "mustKnow": true,
            "latex": "\\begin{aligned} d/dx(\\sin ⁻¹x) = 1 / \\sqrt{1 − x^2} \\\\ d/dx(\\cos ⁻¹x) = −1 / \\sqrt{1 − x^2} \\\\ d/dx(\\tan ⁻¹x) = 1 / (1 + x^2) \\\\ d/dx(\\sec ⁻¹x) = 1 / [|x| \\sqrt{x^2 − 1}] \\end{aligned}",
            "table": {
              "headers": [
                "Inverse Trig Function",
                "Derivative d/dx with Domain Restriction"
              ],
              "rows": [
                {
                  "feature": "sin⁻¹ x",
                  "value": "1 / √(1 - x²)",
                  "latex": "\\frac{d}{dx}(\\sin^{-1}x) = \\frac{1}{\\sqrt{1 - x^2}} \\quad (|x| < 1)"
                },
                {
                  "feature": "cos⁻¹ x",
                  "value": "-1 / √(1 - x²)",
                  "latex": "\\frac{d}{dx}(\\cos^{-1}x) = -\\frac{1}{\\sqrt{1 - x^2}} \\quad (|x| < 1)"
                },
                {
                  "feature": "tan⁻¹ x",
                  "value": "1 / (1 + x²)",
                  "latex": "\\frac{d}{dx}(\\tan^{-1}x) = \\frac{1}{1 + x^2} \\quad (x \\in \\mathbb{R})"
                },
                {
                  "feature": "cot⁻¹ x",
                  "value": "-1 / (1 + x²)",
                  "latex": "\\frac{d}{dx}(\\cot^{-1}x) = -\\frac{1}{1 + x^2} \\quad (x \\in \\mathbb{R})"
                },
                {
                  "feature": "sec⁻¹ x",
                  "value": "1 / [|x| √(x² - 1)]",
                  "latex": "\\frac{d}{dx}(\\sec^{-1}x) = \\frac{1}{|x|\\sqrt{x^2 - 1}} \\quad (|x| > 1)"
                },
                {
                  "feature": "csc⁻¹ x",
                  "value": "-1 / [|x| √(x² - 1)]",
                  "latex": "\\frac{d}{dx}(\\csc^{-1}x) = -\\frac{1}{|x|\\sqrt{x^2 - 1}} \\quad (|x| > 1)"
                }
              ]
            }
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
            "latex": "\\begin{aligned} \\int \\frac{dx}{x^2 + a^2} &= \\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right) + C \\\\ \\int \\frac{dx}{x^2 - a^2} &= \\frac{1}{2a}\\ln\\left|\\frac{x - a}{x + a}\\right| + C \\\\ \\int \\frac{dx}{\\sqrt{a^2 - x^2}} &= \\sin^{-1}\\left(\\frac{x}{a}\\right) + C \\\\ \\int \\frac{dx}{\\sqrt{x^2 \\pm a^2}} &= \\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right| + C \\end{aligned}",
            "table": {
              "headers": [
                "Integrand Form ∫ f(x) dx",
                "Standard Anti-Derivative Result"
              ],
              "rows": [
                {
                  "feature": "∫ dx / (x² + a²)",
                  "value": "(1/a) tan⁻¹(x/a) + C",
                  "latex": "\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\tan^{-1}\\left(\\frac{x}{a}\\right) + C"
                },
                {
                  "feature": "∫ dx / (x² - a²)",
                  "value": "[1 / (2a)] ln|(x - a) / (x + a)| + C",
                  "latex": "\\int \\frac{dx}{x^2 - a^2} = \\frac{1}{2a}\\ln\\left|\\frac{x - a}{x + a}\\right| + C"
                },
                {
                  "feature": "∫ dx / (a² - x²)",
                  "value": "[1 / (2a)] ln|(a + x) / (a - x)| + C",
                  "latex": "\\int \\frac{dx}{a^2 - x^2} = \\frac{1}{2a}\\ln\\left|\\frac{a + x}{a - x}\\right| + C"
                },
                {
                  "feature": "∫ dx / √(a² - x²)",
                  "value": "sin⁻¹(x/a) + C",
                  "latex": "\\int \\frac{dx}{\\sqrt{a^2 - x^2}} = \\sin^{-1}\\left(\\frac{x}{a}\\right) + C"
                },
                {
                  "feature": "∫ dx / √(x² ± a²)",
                  "value": "ln|x + √(x² ± a²)| + C",
                  "latex": "\\int \\frac{dx}{\\sqrt{x^2 \\pm a^2}} = \\ln\\left|x + \\sqrt{x^2 \\pm a^2}\\right| + C"
                }
              ]
            }
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
            "latex": "\\begin{aligned} \\text{Area between } y^2 = 4ax \\text{ and } x^2 = 4by &= \\frac{16ab}{3} \\\\ \\text{Area between } y^2 = 4ax \\text{ and } y = mx &= \\frac{8a^2}{3m^3} \\\\ \\text{Area of Ellipse } \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 &= \\pi a b \\end{aligned}",
            "table": {
              "headers": [
                "Intersecting Curves / Enclosed Region",
                "Bounded Area Formula"
              ],
              "rows": [
                {
                  "feature": "Between y² = 4ax and x² = 4by",
                  "value": "16ab / 3",
                  "latex": "\\text{Area} = \\frac{16ab}{3}"
                },
                {
                  "feature": "Between parabola y² = 4ax and line y = mx",
                  "value": "8a² / (3m³)",
                  "latex": "\\text{Area} = \\frac{8a^2}{3m^3}"
                },
                {
                  "feature": "Ellipse x²/a² + y²/b² = 1",
                  "value": "π · a · b",
                  "latex": "\\text{Area} = \\pi a b"
                },
                {
                  "feature": "Between y² = 4ax and its Latus Rectum x = a",
                  "value": "8a² / 3",
                  "latex": "\\text{Area} = \\frac{8a^2}{3}"
                }
              ]
            }
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
            "latex": "\\begin{aligned} a  \\cdot  b = GCD(a, b)  \\cdot  LCM(a, b) \\\\ For fractions: GCD(a/b, c/d) = GCD(a, c) / LCM(b, d) \\\\ LCM(a/b, c/d) = LCM(a, c) / GCD(b, d) \\end{aligned}",
            "table": {
              "headers": [
                "Number / Fraction Operation",
                "Exact Mathematical Formula"
              ],
              "rows": [
                {
                  "feature": "Product of Two Numbers",
                  "value": "a · b = GCD(a, b) · LCM(a, b)",
                  "latex": "a \\cdot b = \\gcd(a, b) \\cdot \\operatorname{lcm}(a, b)"
                },
                {
                  "feature": "GCD (HCF) of Fractions",
                  "value": "GCD(numerators) / LCM(denominators)",
                  "latex": "\\gcd\\left(\\frac{a}{b}, \\frac{c}{d}\\right) = \\frac{\\gcd(a, c)}{\\operatorname{lcm}(b, d)}"
                },
                {
                  "feature": "LCM of Fractions",
                  "value": "LCM(numerators) / GCD(denominators)",
                  "latex": "\\operatorname{lcm}\\left(\\frac{a}{b}, \\frac{c}{d}\\right) = \\frac{\\operatorname{lcm}(a, c)}{\\gcd(b, d)}"
                }
              ]
            }
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
            "latex": "\\begin{aligned} Cycle of 4 for {2, 3, 7, 8}: Divide power by 4, remainder gives index. \\\\ If power divisible by 4 (remainder 0): \\\\ 2^4 → 6,  3^4 → 1,  7^4 → 1,  8^4 → 6 \\end{aligned}",
            "table": {
              "headers": [
                "Base Last Digit",
                "Power Cyclicity Pattern (Unit Digit of aⁿ)"
              ],
              "rows": [
                {
                  "feature": "0, 1, 5, 6",
                  "value": "Cyclicity 1: Always constant (ends in 0, 1, 5, 6)",
                  "latex": "\\text{Always ends in same digit: } 0, 1, 5, 6"
                },
                {
                  "feature": "4",
                  "value": "Cyclicity 2: 4 (odd power) or 6 (even power)",
                  "latex": "4^1 = 4, \\; 4^2 = 6 \\implies \\begin{cases} 4 & (n \\text{ odd}) \\\\ 6 & (n \\text{ even}) \\end{cases}"
                },
                {
                  "feature": "9",
                  "value": "Cyclicity 2: 9 (odd power) or 1 (even power)",
                  "latex": "9^1 = 9, \\; 9^2 = 1 \\implies \\begin{cases} 9 & (n \\text{ odd}) \\\\ 1 & (n \\text{ even}) \\end{cases}"
                },
                {
                  "feature": "2",
                  "value": "Cyclicity 4: Sequence 2, 4, 8, 6",
                  "latex": "2^1=2, \\; 2^2=4, \\; 2^3=8, \\; 2^4=6"
                },
                {
                  "feature": "3",
                  "value": "Cyclicity 4: Sequence 3, 9, 7, 1",
                  "latex": "3^1=3, \\; 3^2=9, \\; 3^3=7, \\; 3^4=1"
                },
                {
                  "feature": "7",
                  "value": "Cyclicity 4: Sequence 7, 9, 3, 1",
                  "latex": "7^1=7, \\; 7^2=9, \\; 7^3=3, \\; 7^4=1"
                },
                {
                  "feature": "8",
                  "value": "Cyclicity 4: Sequence 8, 4, 2, 6",
                  "latex": "8^1=8, \\; 8^2=4, \\; 8^3=2, \\; 8^4=6"
                }
              ]
            }
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
