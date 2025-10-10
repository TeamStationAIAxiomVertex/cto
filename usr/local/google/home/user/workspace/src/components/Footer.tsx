// NO 'use client' — Footer stays a Server Component
import Link from 'next/link';
import type { ReactNode } from 'react';

import { roleCategories } from '@/lib/roles';
import { techCategories } from '@/lib/tech-categories';
import { countries } from '@/lib/countries';
import SpotifyIcon from '@/components/SpotifyIcon';

type LinkItem = {
  href: string;
  label: string | ReactNode;
  icon?: ReactNode;
};

// Playbook Section
const playbookLinks: LinkItem[] = [
  { href: '/playbook/hub', label: 'CTO Playbook Hub' },
  { href: '/playbook/nearshore-vs-offshore', label: 'Nearshore vs Offshore Guide' },
  { href: '/playbook/latam-economics', label: 'LATAM Software Talent Economics' },
  { href: '/playbook/build-vs-buy', label: 'Build vs Buy Analysis' },
  { href: '/playbook/bias-free-technical-hiring-axiom-cortex', label: 'Bias-Free Hiring with Axiom Cortex™' },
  { href: '/playbook/tco-model', label: 'TCO Model for Engineering Teams' },
  { href: '/faq', label: 'FAQ for CTOs' },
];

// Company Section
const companyLinks: LinkItem[] = [
  { href: '/about', label: 'About TeamStation AI' },
  { href: '/research/hub', label: 'Research Hub' },
  { href: '/trust', label: 'Trust & Compliance Center' },
  { href: '/case-studies', label: 'Case Studies & Proof' },
  { href: '/pricing', label: 'Pricing & Engagement Models' },
  { href: 'https://teamstation.dev/home/platforming-nearshore-it-staff-augmentation-book', label: 'Nearshore IT Platformed Book' },
  { href: 'https://scholar.google.com/citations?user=aNol-ycAAAAJ&hl=en', label: 'Google Scholar Research' },
  { href: 'https://www.linkedin.com/company/teamstation', label: 'TeamStation LinkedIn' },
];

// Research Section
const researchLinks: LinkItem[] = [
  { href: '/research/axiom-cortex-scientific-report', label: 'AxiomCortex™ R&D Report' },
  { href: '/research/heuristically-trained-ai', label: 'Heuristically Trained AI Whitepaper' },
  { href: '/research/framework-for-measuring-capacity', label: 'Framework for Measuring Engineering Capacity' },
  { href: '/research/performance-metrics-in-ai-age', label: 'Performance Metrics in the AI Age' },
  {
    href: '/research/hub#podcast',
    label: (
      <>
        TeamStation Podcast <SpotifyIcon className="h-4 w-4 inline-block ml-1 align-text-bottom" />
      </>
    ),
  },
];

// Programmatic Links
const hireByRoleLinks: LinkItem[] = (roleCategories || []).map((r) => ({
  href: `/hire/by-role/${r.slug}`,
  label: `Hire ${r.name} engineers`,
}));

const hireByCountryLinks: LinkItem[] = countries.map((c) => ({
  href: `/hire/by-country/${c.slug}`,
  label: `Hire software developers in ${c.name}`,
}));

const popularTechLinks: LinkItem[] = [
  'react','node','python','java','go','net','aws','kubernetes','dbt','snowflake','pytorch','transformers','langchain','nextjs',
].map((slug) => {
  const tech = techCategories.flatMap((c) => c.tech).find((t) => t.slug === slug);
  return { href: `/hire/by-technology/${slug}`, label: `Hire ${tech?.name || slug} developers` };
});

// Utility Section
const utilityLinks: LinkItem[] = [
  { href: '/faq', label: 'CTO FAQs' },
  { href: '/sitemap', label: 'HTML Sitemap' },
  { href: '/sitemap.xml', label: 'XML Sitemap' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-service', label: 'Terms of Service' },
];

function LinkColumn({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <nav aria-label={title}>
      <h4 className="font-semibold text-foreground tracking-wider uppercase text-sm">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href} className="text-sm">
            <Link
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground flex items-center"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-border bg-card py-16 text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-12">
          <div className="col-span-2 md:col-span-3">
            <h3 className="text-lg font-bold text-foreground">TeamStation AI</h3>
            <p className="mt-2 text-sm">The integrated platform for building and scaling elite nearshore engineering teams.</p>
            <address className="mt-4 text-sm not-italic">
              One Seaport Square, 77 Sleeper St<br />
              5830 E 2nd St, Ste 7000 #14687<br />
              Boston, MA 02210
            </address>
            <div className="mt-4">
              <Link href="https://app.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:text-primary/80 a11y-tap-target">
                Sign In to Platform
              </Link>
            </div>
            <div className="mt-8">
              <LinkColumn title="Scientific Research" links={researchLinks} />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <LinkColumn title="Playbook" links={playbookLinks} />
            <div className="mt-8">
              <LinkColumn title="Company" links={companyLinks} />
            </div>
          </div>

          <div className="col-span-1 md:col-span-2">
            <LinkColumn title="Hire by Role" links={hireByRoleLinks.slice(0, 11)} />
          </div>

          <div className="col-span-1 md:col-span-2">
            <LinkColumn title="Hire by Country" links={hireByCountryLinks} />
          </div>

          <div className="col-span-1 md:col-span-3">
            <LinkColumn title="Popular Technologies" links={popularTechLinks} />
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-sm">
          <p>© {year} TeamStation AI — All rights reserved.</p>
          <p className="mt-2">
            Part of the TeamStation AI network — visit our corporate site at{' '}
            <a href="https://teamstation.dev" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary hover:underline a11y-tap-target">
              teamstation.dev
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4">
            {utilityLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground a11y-tap-target">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
