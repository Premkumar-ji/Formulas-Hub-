import React from 'react';
import { FormulaTable as FormulaTableType } from '../types/formula';
import { MathRenderer, FormattedText } from './MathRenderer';

interface FormulaTableProps {
  table: FormulaTableType;
  className?: string;
  compact?: boolean;
}

export const FormulaTable: React.FC<FormulaTableProps> = ({
  table,
  className = '',
  compact = false,
}) => {
  const [featureHeader, valueHeader] = table.headers || ['Feature', 'Formula / Value'];

  return (
    <div
      className={`formula-table-wrapper w-full max-w-full my-2 sm:my-2.5 overflow-x-auto rounded-xl border border-[var(--border)] shadow-xs bg-[var(--card)] transition-colors min-w-0 ${className}`}
      style={{
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
      }}
    >
      <table className="w-full text-left border-collapse min-w-full">
        <thead>
          <tr className="bg-gradient-to-r from-purple-500/10 via-indigo-500/5 to-purple-500/10 dark:from-purple-950/40 dark:via-indigo-950/20 dark:to-purple-950/40 border-b border-[var(--border)]">
            <th
              scope="col"
              className={`font-heading font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 border-r border-[var(--border)] ${
                compact ? 'px-2.5 sm:px-3 py-1.5 sm:py-2 text-[10px] w-2/5 min-w-[75px]' : 'px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-[11px] w-1/3 min-w-[85px] sm:min-w-[130px]'
              }`}
            >
              {featureHeader}
            </th>
            <th
              scope="col"
              className={`font-heading font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 ${
                compact ? 'px-2.5 sm:px-3 py-1.5 sm:py-2 text-[10px]' : 'px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-[11px]'
              }`}
            >
              {valueHeader}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border)]">
          {table.rows.map((row, index) => {
            return (
              <tr
                key={index}
                className="hover:bg-purple-500/[0.04] dark:hover:bg-purple-500/[0.08] transition-colors"
              >
                {/* Feature Column */}
                <td
                  className={`font-medium text-[var(--ink)] bg-slate-500/[0.02] border-r border-[var(--border)] align-middle leading-snug break-words ${
                    compact ? 'px-2.5 sm:px-3 py-1.5 text-[11px]' : 'px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-[13px]'
                  }`}
                >
                  <FormattedText text={row.feature} />
                </td>

                {/* Formula / Value Column */}
                <td
                  className={`text-[var(--ink)] align-middle select-all leading-normal break-words ${
                    compact ? 'px-2.5 sm:px-3 py-1.5 text-xs' : 'px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm'
                  }`}
                >
                  {row.latex ? (
                    <div className="overflow-x-auto py-0.5 max-w-full min-w-0">
                      <MathRenderer
                        latex={row.latex}
                        math={row.value}
                        displayMode={false}
                        className="inline-block text-left"
                      />
                    </div>
                  ) : (
                    <div className="overflow-x-auto py-0.5 max-w-full min-w-0 font-mono text-xs">
                      <FormattedText text={row.value} />
                    </div>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
