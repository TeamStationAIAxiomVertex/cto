
'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { SpotifyIcon } from '@/components/SpotifyIcon';
import { NAV } from '@/config/nav';

export default function Footer() {
  const year = new Date().getFullYear();

  const links = {
    "Playbook": NAV.Playbook,
    "What's Included": NAV["What's Included"],
    "Comparisons": NAV.Comparisons,
    "Company": NAV.Company,
  };

  return (
    <footer className="mt-32 border-t border-border bg-card py-16 text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-foreground">TeamStation AI</h3>
            <p className="mt-2 text-sm">The integrated platform for building and scaling elite nearshore engineering teams.</p>
          </div>

          {Object.entries(links).map(([title, linkItems]) => (
            <div key={title}>
              <h4 className="font-semibold text-foreground">{title}</h4>
              <ul className="mt-4 space-y-3">
                {linkItems.map((link, i) => (
                  <li key={i} className="text-sm">
                    <Link href={link.href} className="transition-colors hover:text-foreground flex items-center" target={link.href.startsWith('http') ? '_blank' : '_self'} rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}>
                      <span>{link.label}</span>
                      {link.icon ? (
                        <span aria-hidden="true" className="ml-1">
                          <link.icon className="h-4 w-4 inline-block" />
                        </span>
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-sm">
          <p>© {year} TeamStation AI — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
