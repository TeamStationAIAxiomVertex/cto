
'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { SpotifyIcon } from '@/components/SpotifyIcon';

type LinkItem = {
  href: string;
  label: string;
  icon?: ReactNode;
};

// Data sourced from the hire pages to avoid duplication
const roleCategories = [
  { name: 'Platform / Infra / SRE', slug: 'platform-infra-sre' },
  { name: 'Security & GRC', slug: 'security-grc' },
  { name: 'Backend / Services', slug: 'backend-services' },
  { name: 'Frontend / Web', slug: 'frontend-web' },
  { name: 'Data Engineering / Analytics', slug: 'data-engineering-analytics' },
  { name: 'ML/AI & LLM Ops', slug: 'ml-ai-llm-ops' },
];

const countries = [
    { name: 'Mexico', slug: 'mexico' },
    { name: 'Colombia', slug: 'colombia' },
    { name: 'Brazil', slug: 'brazil' },
    { name: 'Argentina', slug: 'argentina' },
    { name: 'Chile', slug: 'chile' },
    { name: 'More...', slug: '' },
];

const techCategories = [
  { name: 'APIs & Backend', slug: 'backend-services' },
  { name: 'Frontend & UI/UX', slug: 'frontend-web' },
  { name: 'Data & Databases', slug: 'data-engineering-analytics' },
  { name: 'ML/AI & LLM Ops', slug: 'ml-ai-llm-ops' },
  { name: 'Observability & SRE', slug: 'platform-infra-sre' },
  { name: 'More...', slug: '' },
];


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
  "Hire by Role": roleCategories.map(role => ({ href: `/hire/by-role/${role.slug || ''}`, label: role.name })),
  "Hire by Technology": techCategories.map(tech => ({ href: `/hire/by-role/${tech.slug || 'by-technology'}`, label: tech.name })),
  "Hire by Country": countries.map(country => ({ href: `/hire/by-country/${country.slug || ''}`, label: country.name })),
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/research/hub', label: 'Research Hub' },
    { href: '/trust', label: 'Trust Center' },
  ],
  'Main Site': [
    { href: 'https://teamstation.dev', label: 'TeamStation.dev Home' },
    { href: 'https://teamstation.dev/nearshore-it-staff-augmentation-pricing', label: 'Main Site Pricing' },
    { href: 'https://teamstation.dev/nearshore-integrated-services', label: 'Main Site Platform' },
    { href: "https://teamstation.dev/home/platforming-nearshore-it-staff-augmentation-book", label: "Nearshore IT Platformed Book"},
    { href: '/research/hub#podcast', label: 'Podcast', icon: <SpotifyIcon className="h-4 w-4 inline-block ml-1" /> },
  ],
  'Scientific Research': [
      { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5433397", label: "AxiomCortex™ R&D Report" },
      { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5165433", label: "Heuristically Trained AI" },
      { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5188490", label: "Framework for Measuring Capacity" },
      { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5253470", label: "Performance Metrics in AI Age" },
      { href: 'https://teamstation.dev/home/platforming-nearshore-it-staff-augmentation-book', label: 'Book' },
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
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-12">
          <div className="col-span-2 md:col-span-3">
            <h3 className="text-lg font-bold text-foreground">TeamStation AI</h3>
            <p className="mt-2 text-sm">
              The integrated platform for building and scaling elite nearshore engineering teams.
            </p>
            <address className="mt-4 text-sm not-italic">
                One Seaport Square, 77 Sleeper St<br />
                5830 E 2nd, St Ste 7000 #14687<br />
                Boston, MA 02210
            </address>
            <div className="mt-4">
              <Link href="https://app.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:text-primary/80">Sign In</Link>
            </div>
          </div>

          {(['Playbook', 'Hire by Role', 'Hire by Technology', 'Hire by Country', 'Company', 'Main Site', 'Scientific Research'] as const).map(title => {
              const list = toSafeList(links[title], title);
              if (list.length === 0) return null;
              
              let columnSpan = 'col-span-1 md:col-span-2';
               if (title === 'Playbook') columnSpan = 'col-span-2 md:col-span-3';
              if (title === 'Company' || title === 'Scientific Research' || title === 'Main Site') columnSpan = 'col-span-1 md:col-span-2';

              return (
                  <div key={title} className={columnSpan}>
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
              )
          })}
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-sm">
          <p>© {year} TeamStation AI — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
