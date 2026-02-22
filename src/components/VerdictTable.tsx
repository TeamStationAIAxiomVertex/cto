// src/components/VerdictTable.tsx

import React from "react";

// --- 1. TYPE DEFINITIONS ---

// Defines the structure for a single row in the verdict table
export type VerdictRow = {
  id: string; // Unique ID for keying
  criterion: string; // The feature or question being evaluated (e.g., "Talent Vetting Method")
  teamstationVerdict: string | React.ReactNode; // TeamStation's position or feature
  competitorVerdict: string | React.ReactNode; // Competitor's position or feature
  isWinningRow?: boolean; // Optional flag to highlight rows where TeamStation clearly wins
};

// Defines the props for the VerdictTable component
export interface VerdictTableProps {
  title: string;
  rows: VerdictRow[];
  competitorName: string;
  className?: string; // Optional class for external styling
}

// --- Icons for Visual Feedback (Simple Check/X for clarity) ---
const CheckIcon: React.FC = () => (
  <svg className="mr-2 inline-block h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const XIcon: React.FC = () => (
  <svg className="mr-2 inline-block h-4 w-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

/**
 * Renders an enterprise-grade verdict table for competitor analysis pages.
 * It's structured semantically to reinforce E-E-A-T and competitive advantage.
 */
const VerdictTable: React.FC<VerdictTableProps> = ({ title, rows, competitorName, className = "" }) => {
  return (
    <div className={`overflow-hidden rounded-xl border border-border/70 bg-background/70 shadow-lg ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 bg-background/50 px-4 py-4 md:px-5">
        <h2 className="text-xl font-bold text-foreground md:text-2xl">{title}</h2>
        <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Decision matrix
        </div>
      </div>
      <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-border/70">
        <thead>
          <tr className="bg-background/60">
            <th scope="col" className="w-1/3 px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground md:px-5">
              Evaluation Criterion
            </th>
            <th scope="col" className="w-1/3 px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-primary md:px-5">
              TeamStation AI Verdict
            </th>
            <th scope="col" className="w-1/3 px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-[0.12em] text-muted-foreground md:px-5">
              {competitorName}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/60">
          {rows.map((row) => (
            <tr
              key={row.id}
              className={row.isWinningRow ? "bg-primary/5 transition-colors hover:bg-primary/10" : "transition-colors hover:bg-background/60"}
            >
              <th scope="row" className="align-top px-4 py-4 text-sm font-semibold text-foreground md:px-5">
                {row.criterion}
              </th>
              <td className="align-top px-4 py-4 text-sm font-medium text-foreground md:px-5">
                <CheckIcon />
                {row.teamstationVerdict}
              </td>
              <td className="align-top px-4 py-4 text-sm text-muted-foreground md:px-5">
                {!row.isWinningRow && <XIcon />}
                {row.competitorVerdict}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default VerdictTable;
