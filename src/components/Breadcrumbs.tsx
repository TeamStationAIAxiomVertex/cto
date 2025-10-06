// src/components/Breadcrumbs.tsx

import React from 'react';
import Link from 'next/link';

// Define the structure for a single breadcrumb item
interface BreadcrumbItem {
  label: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Renders a standard breadcrumb navigation component.
 * This component is essential for user experience and implements
 * the necessary structure for the JSON-LD BreadcrumbList Schema.
 */
const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      {/* NOTE: For SEO, the JSON-LD BreadcrumbList Schema should be included 
        in the page's <script type="application/ld+json"> tag. 
        This JSX provides the visual structure for the user.
      */}
      <ol role="list" className="flex items-center space-x-2 text-sm text-gray-500">
        
        {/* Always start with the Home link */}
        <li>
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Home
          </Link>
        </li>
        
        {/* Render all dynamic items */}
        {items.map((item, index) => {
          const isCurrentPage = index === items.length - 1;
          
          return (
            <li key={item.path} className="flex items-center">
              {/* Separator icon */}
              <svg 
                className="flex-shrink-0 w-4 h-4 text-gray-400" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                aria-hidden="true"
              >
                <path d="M5.555 17.776l8.807-8.807a1 1 0 000-1.414l-8.807-8.807z" clipRule="evenodd" fillRule="evenodd" />
              </svg>

              {isCurrentPage ? (
                // Current item (not a link)
                <span className="ml-2 font-medium text-gray-700" aria-current="page">
                  {item.label}
                </span>
              ) : (
                // Intermediate item (link)
                <Link href={item.path} className="ml-2 hover:text-blue-600 transition-colors">
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;