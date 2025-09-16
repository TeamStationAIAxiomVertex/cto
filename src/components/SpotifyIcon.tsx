'use client';
import * as React from 'react';
// This is a decorative icon. It does not require client-side interactivity.
// Removing 'use client' makes it a standard Server Component, which is safe
// to import directly into any other component, like the Footer.
export function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false" {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.234 13.945c-.375.225-.825.225-1.2 0-2.25-1.35-5.025-1.65-8.325-.9-.45.075-.825-.225-.9-.675s.225-.825.675-.9c3.6-.75 6.675-.45 9.15 1.05.375.225.45.75.225 1.125zm.825-2.7c-.45.225-.975.3-1.425.075-2.55-1.5-6.3-1.95-9.3-1.05-.525.15-.975-.225-1.125-.75s.225-.975.75-1.125c3.525-1.05 7.65-.525 10.5 1.2.45.3.6.825.3 1.275zm.15-2.775c-.525.3-1.2.375-1.725.15-3.075-1.8-8.025-2.325-11.25-1.275-.6.15-1.2-.225-1.35-.825s.225-1.2.825-1.35C7.2 4.12 12.6 4.645 16.275 6.82c.6.3.825.975.525 1.575z" fill="currentColor"/>
    </svg>
  );
}
