'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { SpotifyIcon } from '@/components/SpotifyIcon';

type LinkItem = {
  href: string;
  label: string;
  icon?: ReactNode;           // <- optional field, single shape
};

type FooterLinks = {
  "Playbook": LinkItem[];
  "What's Included": LinkItem[];
  "Comparisons": LinkItem[];
  "Company": LinkItem[];
};

export default function Footer() {
  const year = new Date().getFullYear();

  // EXPLICIT annotation prevents per-array union inference
  const links: FooterLinks = {
    "Playbook": [
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
    "Comparisons": [
      { href: '/comparisons', label: 'All Comparisons' },
      { href: '/comparisons/bairesdev', label: 'vs. BairesDev' },
      { href: '/comparisons/globant', label: 'vs. Globant' },
      { href: '/comparisons/toptal', label: 'vs. Toptal' },
    ],
    "Company": [
      { href: '/about', label: 'About Us' },
      { href: '/research/hub', label: 'Research' },
      { href: '/trust', label: 'Trust Center' },
      { href: '/hire', label: 'Hire Talent' },
      { href: '/research/hub#podcast', label: 'Podcast', icon: <SpotifyIcon className="h-4 w-4 inline-block ml-1" /> },
    ]
  };

  return (
    <footer className="mt-32 border-t border-border py-16 text-muted-foreground">
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
                    <Link href={link.href} className="transition-colors hover:text-foreground flex items-center">
                      <span>{link.label}</span>
                      {link.icon ? (
                        <span aria-hidden="true" className="ml-1">{link.icon}</span>
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
