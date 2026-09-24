/**
 * Converts mathematical plain text strings into clean KaTeX LaTeX syntax.
 */
export function autoConvertToLatex(text: string): string {
  if (!text) return '';

  let s = text.trim();

  // If already standard LaTeX command, return as is
  if (s.includes('\\frac') || s.includes('\\int') || s.includes('\\sum') || s.includes('\\sqrt') || s.includes('\\begin')) {
    return s;
  }

  // 1. Unicode Greek letters
  s = s.replace(/θ/g, ' \\theta ')
       .replace(/α/g, ' \\alpha ')
       .replace(/β/g, ' \\beta ')
       .replace(/γ/g, ' \\gamma ')
       .replace(/λ/g, ' \\lambda ')
       .replace(/μ/g, ' \\mu ')
       .replace(/π/g, ' \\pi ')
       .replace(/σ/g, ' \\sigma ')
       .replace(/ω/g, ' \\omega ')
       .replace(/Δ/g, ' \\Delta ')
       .replace(/Σ/g, ' \\sum ');

  // 2. Mathematical operators and sets
  s = s.replace(/±/g, ' \\pm ')
       .replace(/∓/g, ' \\mp ')
       .replace(/≠/g, ' \\neq ')
       .replace(/≤/g, ' \\le ')
       .replace(/≥/g, ' \\ge ')
       .replace(/⇒/g, ' \\implies ')
       .replace(/⇔/g, ' \\iff ')
       .replace(/∈/g, ' \\in ')
       .replace(/∉/g, ' \\notin ')
       .replace(/∪/g, ' \\cup ')
       .replace(/∩/g, ' \\cap ')
       .replace(/⊂/g, ' \\subset ')
       .replace(/⊆/g, ' \\subseteq ')
       .replace(/∅/g, ' \\emptyset ')
       .replace(/∞/g, ' \\infty ')
       .replace(/·/g, ' \\cdot ')
       .replace(/×/g, ' \\times ')
       .replace(/∫/g, ' \\int ')
       .replace(/ℝ/g, ' \\mathbb{R} ')
       .replace(/ℤ/g, ' \\mathbb{Z} ')
       .replace(/ℕ/g, ' \\mathbb{N} ')
       .replace(/ℚ/g, ' \\mathbb{Q} ')
       .replace(/ℂ/g, ' \\mathbb{C} ');

  // 3. Superscripts
  s = s.replace(/²/g, '^2')
       .replace(/³/g, '^3')
       .replace(/⁴/g, '^4')
       .replace(/⁵/g, '^5')
       .replace(/⁶/g, '^6')
       .replace(/ⁿ/g, '^n')
       .replace(/ˣ/g, '^x')
       .replace(/⁺/g, '^+')
       .replace(/⁻/g, '^-');

  // 4. Subscripts
  s = s.replace(/ₙ/g, '_n')
       .replace(/₀/g, '_0')
       .replace(/₁/g, '_1')
       .replace(/₂/g, '_2')
       .replace(/₃/g, '_3')
       .replace(/₄/g, '_4')
       .replace(/ᵢ/g, '_i')
       .replace(/ᵣ/g, '_r')
       .replace(/ₖ/g, '_k')
       .replace(/ₘ/g, '_m');

  // 5. Standard trig and math functions
  s = s.replace(/\bsin\b/g, '\\sin ')
       .replace(/\bcos\b/g, '\\cos ')
       .replace(/\btan\b/g, '\\tan ')
       .replace(/\bcot\b/g, '\\cot ')
       .replace(/\bsec\b/g, '\\sec ')
       .replace(/\bcosec\b/g, '\\csc ')
       .replace(/\blim\b/g, '\\lim ')
       .replace(/\blog\b/g, '\\log ')
       .replace(/\bln\b/g, '\\ln ')
       .replace(/\bdet\b/g, '\\det ');

  // 6. Common fractions conversion
  // Matches expressions like (n / 2) or (a / b)
  s = s.replace(/\(\s*([a-zA-Z0-9+\-*^]+)\s*\/\s*([a-zA-Z0-9+\-*^]+)\s*\)/g, '\\frac{$1}{$2}');
  // Matches simple numeric fractions like 1/2, 1/3, 1/4
  s = s.replace(/\b([0-9]+)\s*\/\s*([0-9]+)\b/g, '\\frac{$1}{$2}');

  // 7. Square roots: √(expr) -> \sqrt{expr}
  s = s.replace(/√\(([^)]+)\)/g, '\\sqrt{$1}');
  s = s.replace(/√([a-zA-Z0-9]+)/g, '\\sqrt{$1}');

  return s;
}
