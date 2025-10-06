// src/components/VerdictTable.tsx

import React from 'react';

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
  <svg className="w-5 h-5 text-green-500 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const XIcon: React.FC = () => (
  <svg className="w-5 h-5 text-red-500 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

/**
 * Renders an enterprise-grade verdict table for competitor analysis pages.
 * It's structured semantically to reinforce E-E-A-T and competitive advantage.
 */
const VerdictTable: React.FC<VerdictTableProps> = ({ title, rows, competitorName, className = '' }) => {
  return (
    <div className={`bg-white shadow-xl rounded-lg overflow-hidden border border-gray-100 ${className}`}>
      <h2 className="text-2xl font-bold p-4 bg-gray-50 text-gray-800 border-b">
        {title}
      </h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-gray-50">
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
              Evaluation Criterion
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider w-1/3">
              TeamStation AI Verdict
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">
              {competitorName}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {rows.map((row) => (
            <tr key={row.id} className={row.isWinningRow ? 'bg-blue-50/50 hover:bg-blue-100' : 'hover:bg-gray-50'}>
              <th scope="row" className="px-6 py-4 font-semibold text-gray-900 align-top">
                {row.criterion}
              </th>
              <td className="px-6 py-4 text-sm text-gray-900 font-medium align-top">
                <CheckIcon />
                {row.teamstationVerdict}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 align-top">
                {/* Conditionally show X icon for losing rows, but default to simple text */}
                {!row.isWinningRow && <XIcon />}
                {row.competitorVerdict}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VerdictTable;