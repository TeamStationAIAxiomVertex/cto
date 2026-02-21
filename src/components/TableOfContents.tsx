// src/components/TableOfContents.tsx

import React from 'react';
// Import the TocItem type from the data utility file
import { TocItem } from '@/lib/playbook-data'; 

interface TableOfContentsProps {
  items: TocItem[];
}

/**
 * Renders a sticky Table of Contents for long-form Playbook articles.
 * It uses nested list items and distinct styling for H2 vs H3 items.
 */
const TableOfContents: React.FC<TableOfContentsProps> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-4 border-b pb-2">
        Table of Contents
      </h3>
      
      <nav aria-label="Table of Contents">
        <ul className="space-y-2">
          {items.map((item) => {
            const isH2 = item.level === 2;
            const linkClass = isH2 
              ? 'font-bold text-gray-900 hover:text-blue-600 transition-colors' 
              : 'font-medium text-gray-600 hover:text-blue-600 transition-colors ml-4 text-sm';

            return (
              <li key={item.id} className={isH2 ? 'pt-1' : ''}>
                <a 
                  href={`#${item.id}`} // Standard jump-link to the section ID
                  className={linkClass}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
