'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { SpotifyIcon } from '@/components/SpotifyIcon';

type LinkItem = {
  href: string;
  label: string;
  icon?: ReactNode;
};

// Compile-time: enforce exactly "string -> LinkItem[]" and make it immutable.
const links = Object.freeze({
  Playbook: [
    { href: '/playbook/hub', label: 'Playbook Hub' },
    { href: '/playbook/nearshore-vs-offshore', label: 'Nearshore vs. Offshore' },
    { href: '/playbook/latam-economics', label: 'LATAM Economics' },
    { href: '/playbook/build-vs-buy', label: 'Build vs. Buy' },
    { href: '/playbook/bias-free-technical-hiring-axiom-cortex', label: 'Bias-Free Hiring' },
    { href: '/playbook/tco-model', label: 'TCO Model' },
  ],
  "What's Included": [
    { href: '/platform', label: 'Platform' },
    { href: '/process', label: 'Our Process' },
    { href: '/technical-interview-evaluation', label: 'Talent Evaluations' },
    { href: '/research/performance-evaluation-framework', label: 'Performance Framework' },
    { href: '/services/integrated-services', label: 'Integrated Services' },
    { href: '/services/talent-onboarding', label: 'Talent Onboarding' },
  ],
  Comparisons: [
    { href: '/comparisons', label: 'All Comparisons' },
    { href: '/comparisons/bairesdev', label: 'vs. BairesDev' },
    { href: '/comparisons/globant', label: 'vs. Globant' },
    { href: '/comparisons/toptal', label: 'vs. Toptal' },
  ],
} satisfies Record<string, LinkItem[]>);

// Runtime: guarantee array-ness before .map()
function toSafeList(val: unknown, title: string): LinkItem[] {
  if (Array.isArray(val) && val.every(v => v && typeof v.href === 'string' && typeof v.label === 'string')) {
    return val as LinkItem[];
  }
  // Surface the issue in dev tools without crashing prod UI
  if (process.env.NODE_ENV !== 'production') {
    // eslint-disable-next-line no-console
    console.warn('[Footer] Invalid links for section:', title, val);
  }
  return [];
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-border bg-card py-16 text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-foreground">TeamStation AI</h3>
            <p className="mt-2 text-sm">
              The integrated platform for building and scaling elite nearshore engineering teams.
            </p>
          </div>

          {Object.entries(links).map(([title, maybeList]) => {
            const list = toSafeList(maybeList, title);
            return (
              <div key={title}>
                <h4 className="font-semibold text-foreground">{title}</h4>
                <ul className="mt-4 space-y-3">
                  {list.map((link, i) => (
                    <li key={i} className="text-sm">
                      <Link
                        href={link.href}
                        className="transition-colors hover:text-foreground flex items-center"
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        <span>{link.label}</span>
                        {link.icon ? <span aria-hidden="true" className="ml-1">{link.icon}</span> : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-sm">
          <p>© {year} TeamStation AI — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
