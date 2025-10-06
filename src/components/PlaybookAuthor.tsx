// src/components/PlaybookAuthor.tsx

import React from 'react';
// Import the Author type from the data utility file created in the previous step
import { Author } from '@/lib/playbook-data'; 

interface PlaybookAuthorProps {
  author: Author;
}

/**
 * Renders the author's profile card, emphasizing E-E-A-T credentials for pillar content.
 * This is designed to be sticky on the side of the main article content.
 */
const PlaybookAuthor: React.FC<PlaybookAuthorProps> = ({ author }) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-600 mb-4 border-b pb-2">
        Author & Expert
      </h3>
      
      <div className="flex items-center space-x-4">
        {/* Placeholder for the Author Image */}
        {/* In a real Next.js app, use the <Image> component */}
        <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 text-lg font-bold flex-shrink-0 overflow-hidden">
          {/* Simple initials fallback (e.g., DR for Dr. Evelyn Reed) */}
          {author.name.split(' ').map(n => n[0]).join('')}
        </div>
        
        <div>
          <p className="text-xl font-bold text-gray-900 leading-snug">{author.name}</p>
          <p className="text-sm text-gray-600 font-medium">{author.title}</p>
        </div>
      </div>
      
      {/* Credentials section, the core of the E-E-A-T signal */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-sm font-medium text-gray-800 mb-1">Key Credentials:</p>
        <p className="text-sm text-gray-600 italic">
          {author.credentials}
        </p>
      </div>

      <div className="mt-4">
        <a 
          href="/authors/evelyn-reed" 
          className="text-sm font-semibold text-blue-700 hover:text-blue-900 transition-colors"
        >
          View Full Profile & Research →
        </a>
      </div>
    </div>
  );
};

export default PlaybookAuthor;