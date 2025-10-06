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
      
      {/* Optional: Add a call-to-action to download the Playbook PDF */}
      <div className="mt-6 pt-4 border-t border-gray-100">
        <a 
          href="/request-playbook-pdf" 
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0-3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0-3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0-3a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          Download Playbook PDF
        </a>
      </div>
    </div>
  );
};

export default TableOfContents;