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
          <tr className="border-b border-purple-300/80 dark:border-purple-400/30">
            <th
              scope="col"
              className={`font-heading font-bold uppercase tracking-wider border-r border-purple-300/80 dark:border-purple-400/30 ${
                compact ? 'px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs w-2/5 min-w-[75px]' : 'px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-[13px] w-1/3 min-w-[85px] sm:min-w-[130px]'
              }`}
              style={{ backgroundColor: '#c3b1fb', color: '#9700fd' }}
            >
              {featureHeader}
            </th>
            <th
              scope="col"
              className={`font-heading font-bold uppercase tracking-wider ${
                compact ? 'px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs' : 'px-2.5 sm:px-3.5 py-2 sm:py-2.5 text-[13px]'
              }`}
              style={{ backgroundColor: '#c3b1fb', color: '#9700fd' }}
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
                  className={`font-normal text-[var(--ink)] bg-slate-500/[0.02] border-r border-[var(--border)] align-middle leading-snug break-words ${
                    compact ? 'px-2.5 sm:px-3 py-2' : 'px-2.5 sm:px-3.5 py-2.5 sm:py-3'
                  }`}
                  style={{ fontSize: '16px', fontWeight: 'normal' }}
                >
                  <FormattedText text={row.feature} className="text-[16px] font-normal" />
                </td>

                {/* Formula / Value Column */}
                <td
                  className={`text-[var(--ink)] align-middle select-all leading-normal break-words ${
                    compact ? 'px-2.5 sm:px-3 py-1.5 text-base' : 'px-2.5 sm:px-3.5 py-2.5 sm:py-3 text-[21px]'
                  }`}
                  style={{ fontSize: '21px' }}
                >
                  {row.latex ? (
                    <div className="overflow-x-auto py-0.5 max-w-full min-w-0" style={{ fontSize: '21px' }}>
                      <MathRenderer
                        latex={row.latex}
                        math={row.value}
                        displayMode={false}
                        className="inline-block text-left text-[21px]"
                      />
                    </div>
                  ) : (
                    <div className="overflow-x-auto py-0.5 max-w-full min-w-0 font-mono text-[16px]" style={{ fontSize: '16px' }}>
                      <FormattedText text={row.value} className="text-[16px]" />
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
