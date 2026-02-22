// src/components/PlaybookAuthor.tsx

import React from 'react';
import { Author } from '@/lib/playbook-data'; 

interface PlaybookAuthorProps {
  author: Author;
}

/**
 * Renders a factual attribution card for playbook content.
 * Do not fabricate personal credentials or profile links.
 */
const PlaybookAuthor: React.FC<PlaybookAuthorProps> = ({ author }) => {
  const initials = author.name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase() ?? '')
    .join('');

  return (
    <div className="rounded-xl border border-border/70 bg-background/70 p-4">
      <h3 className="border-b border-border/60 pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
        Editorial Attribution
      </h3>
      
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/10 text-sm font-bold text-primary">
          {initials || 'TS'}
        </div>
        
        <div>
          <p className="text-sm font-semibold leading-snug text-foreground">{author.name}</p>
          <p className="text-xs text-muted-foreground">{author.title}</p>
        </div>
      </div>
      
      <div className="mt-4 border-t border-border/60 pt-3">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-foreground/80">
          Review Basis
        </p>
        <p className="text-xs leading-5 text-muted-foreground">
          {author.credentials}
        </p>
      </div>
    </div>
  );
};

export default PlaybookAuthor;
