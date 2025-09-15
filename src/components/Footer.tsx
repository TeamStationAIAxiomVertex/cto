
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
  { name: 'Product, Design & Growth', slug: 'product-design-growth' },
  { name: 'QA / Quality Engineering', slug: 'qa-quality-engineering' },
  { name: 'Mobile / Cross-Platform', slug: 'mobile-cross-platform' },
  { name: 'IT / Enterprise Ops', slug: 'it-enterprise-ops' },
  { name: 'FinOps / BizTech', slug: 'finops-biztech' }
];

const countries = [
    { name: 'Mexico', slug: 'mexico' },
    { name: 'Colombia', slug: 'colombia' },
    { name: 'Brazil', slug: 'brazil' },
    { name: 'Argentina', slug: 'argentina' },
    { name: 'Chile', slug: 'chile' },
    { name: 'Peru', slug: 'peru' },
    { name: 'Costa Rica', slug: 'costa-rica' },
    { name: 'Uruguay', slug: 'uruguay' },
    { name: 'Ecuador', slug: 'ecuador' },
    { name: 'Guatemala', slug: 'guatemala' },
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
  "Hire by Role": roleCategories.map(role => ({ href: `/hire/by-role/${role.slug}`, label: role.name })),
  "Hire by Country": countries.map(country => ({ href: `/hire/by-country/${country.slug}`, label: country.name })),
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/research/hub', label: 'Research Hub' },
    { href: '/trust', label: 'Trust Center' },
    { href: '/hire', label: 'Hire Talent' },
    { href: '/research/hub#podcast', label: 'Podcast', icon: <SpotifyIcon className="h-4 w-4 inline-block ml-1" /> },
  ],
  'Main Site': [
    { href: 'https://teamstation.dev', label: 'Main Home' },
    { href: 'https://teamstation.dev/nearshore-it-staff-augmentation-pricing', label: 'Main Site Pricing' },
    { href: 'https://teamstation.dev/nearshore-integrated-services', label: 'Main Site Platform' },
    { href: 'https://teamstation.dev/home/platforming-nearshore-it-staff-augmentation-book', label: 'Book' },
    { href: 'https://app.teamstation.dev', label: 'Sign In' },
  ],
  'Scientific Research': [
      { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5433397", label: "AxiomCortex™ R&D Report" },
      { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5165433", label: "Heuristically Trained AI" },
      { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5188490", label: "Framework for Measuring Capacity" },
      { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5253470", label: "Performance Metrics in AI Age" },
  ]
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
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 md:col-span-6 lg:col-span-1">
            <h3 className="text-lg font-bold text-foreground">TeamStation AI</h3>
            <p className="mt-2 text-sm">
              The integrated platform for building and scaling elite nearshore engineering teams.
            </p>
          </div>

          {Object.entries(links).map(([title, maybeList]) => {
            const list = toSafeList(maybeList, title);
            // Don't render empty sections
            if (list.length === 0) return null;
            return (
              <div key={title} className="col-span-1">
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
