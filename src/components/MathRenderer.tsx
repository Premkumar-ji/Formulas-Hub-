import React, { useMemo } from 'react';
import katex from 'katex';
import { autoConvertToLatex } from '../utils/mathUtils';

interface MathRendererProps {
  math?: string;
  latex?: string;
  displayMode?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  math = '',
  latex,
  displayMode = true,
  className = '',
}) => {
  const renderedHtml = useMemo(() => {
    // 1. Determine LaTeX string
    let sourceLatex = (latex && latex.trim()) ? latex.trim() : autoConvertToLatex(math);

    if (!sourceLatex) return '';

    // Strip $$ or $ if present
    if (sourceLatex.startsWith('$$') && sourceLatex.endsWith('$$')) {
      sourceLatex = sourceLatex.slice(2, -2).trim();
    } else if (sourceLatex.startsWith('$') && sourceLatex.endsWith('$') && sourceLatex.length > 2) {
      sourceLatex = sourceLatex.slice(1, -1).trim();
    }

    try {
      const rawHtml = katex.renderToString(sourceLatex, {
        displayMode,
        throwOnError: false,
        strict: false,
        trust: true,
        output: 'htmlAndMathml',
      });
      // Tag numeric digit spans so custom number font applies accurately to all numbers
      return rawHtml.replace(
        /<span class="mord([^"]*)">([0-9]+)<\/span>/g,
        '<span class="mord$1 katex-number font-numbers">$2</span>'
      );
    } catch {
      return null;
    }
  }, [math, latex, displayMode]);

  if (!renderedHtml) {
    const FallbackTag = displayMode ? 'div' : 'span';
    return (
      <FallbackTag className={`font-rounded font-medium text-xs sm:text-sm leading-relaxed overflow-x-auto ${className}`}>
        {math || latex}
      </FallbackTag>
    );
  }

  const Tag = displayMode ? 'div' : 'span';
  return (
    <Tag
      className={`katex-container font-rounded overflow-x-auto max-w-full py-1 text-left ${
        displayMode
          ? 'my-0.5 text-xs sm:text-sm md:text-base min-h-[2rem] block w-full text-left'
          : `inline-block max-w-full align-middle ${className && className.includes('text-') ? '' : 'text-xs sm:text-sm'}`
      } ${className}`}
      style={{ textAlign: 'left' }}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

export const FormattedText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = '',
}) => {
  // Helper to parse inline math ($...$), bold (**...**), and code (`...`)
  const renderInline = (str: string) => {
    if (!str) return null;
    const tokens = str.split(/(\$[^\$]+?\$|\*\*[^*]+?\*\*|`[^`]+?`)/g);
    return tokens.map((token, i) => {
      if (token.startsWith('$') && token.endsWith('$') && token.length > 2) {
        const expr = token.slice(1, -1);
        return <MathRenderer key={i} latex={expr} displayMode={false} className="inline-block" />;
      }
      if (token.startsWith('**') && token.endsWith('**') && token.length >= 4) {
        const content = token.slice(2, -2);
        return (
          <strong key={i} className="font-semibold text-[var(--ink)]">
            {renderInline(content)}
          </strong>
        );
      }
      if (token.startsWith('`') && token.endsWith('`') && token.length >= 2) {
        const content = token.slice(1, -1);
        return (
          <code key={i} className="px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-700 dark:text-purple-300 font-mono text-[11px]">
            {content}
          </code>
        );
      }
      return <React.Fragment key={i}>{token}</React.Fragment>;
    });
  };

  // If simple single-line text without display math, keep compact inline format
  if (!text.includes('\n') && !text.includes('$$')) {
    return <span className={`inline max-w-full ${className}`}>{renderInline(text)}</span>;
  }

  // Pre-split by display math blocks ($$...$$)
  const segments = text.split(/(\$\$[\s\S]*?\$\$)/g);

  return (
    <div className={`space-y-1.5 max-w-full text-left font-sans ${className}`}>
      {segments.map((seg, segIdx) => {
        if (seg.startsWith('$$') && seg.endsWith('$$')) {
          const expr = seg.slice(2, -2).trim();
          return (
            <div
              key={`math-${segIdx}`}
              className="my-2 p-2 sm:p-3 rounded-xl bg-purple-500/[0.04] border border-purple-500/20 overflow-x-auto text-left font-rounded shadow-xs"
            >
              <MathRenderer latex={expr} displayMode={true} className="text-left" />
            </div>
          );
        }

        const lines = seg.split('\n');
        return (
          <React.Fragment key={`text-${segIdx}`}>
            {lines.map((rawLine, lineIdx) => {
              const line = rawLine.trim();

              if (!line) {
                return <div key={lineIdx} className="h-1" />;
              }

              // Heading line (e.g. "### Heading" or "1. EQUATION OF THE BISECTORS:")
              const headingMatch = line.match(/^###\s+(.*)/) || line.match(/^(\d+\.\s+[A-Z\s,–—()]+:?)$/);
              if (headingMatch) {
                const titleText = headingMatch[1] || line.replace(/^###\s+/, '');
                return (
                  <div
                    key={lineIdx}
                    className="font-heading font-bold text-xs sm:text-[13px] text-purple-700 dark:text-purple-300 mt-3 mb-1.5 pt-2 border-t border-[var(--border)] first:border-t-0 first:pt-0 flex items-center gap-2 tracking-wide"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 inline-block shrink-0" />
                    <span>{renderInline(titleText)}</span>
                  </div>
                );
              }

              // Sub-headings like "**Why the rule works:**" or "**Step 1–2:**"
              if (line.startsWith('**') && line.endsWith('**') && line.length < 60) {
                return (
                  <div key={lineIdx} className="font-semibold text-xs text-purple-800 dark:text-purple-200 mt-2 mb-1">
                    {renderInline(line)}
                  </div>
                );
              }

              // Bullet item ("• ", "- ", "* ")
              if (line.startsWith('• ') || line.startsWith('- ') || line.startsWith('* ')) {
                const bulletContent = line.slice(2);
                return (
                  <div key={lineIdx} className="flex items-start gap-2 pl-2 my-1 text-xs text-[var(--ink)] leading-relaxed">
                    <span className="text-purple-600 dark:text-purple-400 mt-1.5 text-[6px] shrink-0">●</span>
                    <span className="flex-1 min-w-0">{renderInline(bulletContent)}</span>
                  </div>
                );
              }

              // Numbered step item ("1. ", "2. ")
              const stepMatch = line.match(/^(\d+)\.\s+(.*)/);
              if (stepMatch) {
                const stepNum = stepMatch[1];
                const stepContent = stepMatch[2];
                return (
                  <div key={lineIdx} className="flex items-start gap-2.5 pl-1.5 my-1.5 text-xs text-[var(--ink)] leading-relaxed">
                    <span className="w-4 h-4 rounded-full bg-purple-500/15 text-purple-700 dark:text-purple-300 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5 border border-purple-500/25">
                      {stepNum}
                    </span>
                    <span className="flex-1 min-w-0">{renderInline(stepContent)}</span>
                  </div>
                );
              }

              // Standard paragraph
              return (
                <div key={lineIdx} className="my-1 text-xs text-[var(--ink)] leading-relaxed">
                  {renderInline(line)}
                </div>
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
};
