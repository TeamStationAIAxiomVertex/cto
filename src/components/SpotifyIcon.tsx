'use client';
import * as React from 'react';

export function SpotifyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" aria-hidden="true" focusable="false" {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity=".12" />
      <path d="M7 10c3-1 7-1 10 .5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M7 13c2.6-.8 6-.8 8.7.4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      <path d="M7 16c2-.6 4.8-.5 6.7.4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}
