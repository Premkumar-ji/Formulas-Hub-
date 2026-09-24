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
      return katex.renderToString(sourceLatex, {
        displayMode,
        throwOnError: false,
        strict: false,
        trust: true,
        output: 'htmlAndMathml',
      });
    } catch {
      return null;
    }
  }, [math, latex, displayMode]);

  if (!renderedHtml) {
    return (
      <div className={`font-mono text-sm leading-relaxed overflow-x-auto ${className}`}>
        {math || latex}
      </div>
    );
  }

  return (
    <div
      className={`katex-container overflow-x-auto py-1.5 select-all text-center sm:text-left ${
        displayMode ? 'my-1 text-base sm:text-lg min-h-[2.5rem] flex items-center' : 'inline-block text-sm'
      } ${className}`}
      dangerouslySetInnerHTML={{ __html: renderedHtml }}
    />
  );
};

export const FormattedText: React.FC<{ text: string; className?: string }> = ({
  text,
  className = '',
}) => {
  const parts = useMemo(() => {
    if (!text) return [];
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g;
    return text.split(regex);
  }, [text]);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        if (part.startsWith('$$') && part.endsWith('$$')) {
          const expr = part.slice(2, -2);
          return <MathRenderer key={index} latex={expr} displayMode={true} />;
        }
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          const expr = part.slice(1, -1);
          return <MathRenderer key={index} latex={expr} displayMode={false} />;
        }
        return <React.Fragment key={index}>{part}</React.Fragment>;
      })}
    </span>
  );
};
