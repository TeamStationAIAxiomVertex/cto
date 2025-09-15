
'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { SpotifyIcon } from '@/components/SpotifyIcon';

type LinkItem = {
  href: string;
  label: string;
  icon?: ReactNode;
};

const playbookLinks = [
  { href: '/playbook/hub', label: 'Playbook Hub' },
  { href: '/playbook/nearshore-vs-offshore', label: 'Nearshore vs. Offshore' },
  { href: '/playbook/latam-economics', label: 'LATAM Economics' },
  { href: '/playbook/build-vs-buy', label: 'Build vs. Buy' },
  { href: '/playbook/bias-free-technical-hiring-axiom-cortex', label: 'Bias-Free Hiring' },
  { href: '/playbook/tco-model', label: 'TCO Model' },
];

const hireLinks = [
    { href: '/hire/by-role', label: 'By Role' },
    { href: '/hire/by-technology', label: 'By Technology' },
    { href: '/hire/by-country', label: 'By Country' },
    { href: '/hire/by-team-topologies', label: 'By Team Topologies' }
];

const companyLinks = [
    { href: '/about', label: 'About Us' },
    { href: '/research/hub', label: 'Research Hub' },
    { href: '/trust', label: 'Trust Center' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/pricing', label: 'Pricing' },
];

const mainSiteLinks = [
    { href: 'https://teamstation.dev', label: 'TeamStation.dev Home' },
    { href: 'https://teamstation.dev/nearshore-it-staff-augmentation-pricing', label: 'Main Site Pricing' },
    { href: 'https://teamstation.dev/nearshore-integrated-services', label: 'Main Site Platform' },
    { href: "https://teamstation.dev/home/platforming-nearshore-it-staff-augmentation-book", label: "Nearshore IT Platformed Book"},
    { href: '/research/hub#podcast', label: 'Podcast', icon: <SpotifyIcon className="h-4 w-4 inline-block ml-1" /> },
];

const researchLinks = [
    { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5433397", label: "AxiomCortex™ R&D Report" },
    { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5165433", label: "Heuristically Trained AI" },
    { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5188490", label: "Framework for Measuring Capacity" },
    { href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5253470", label: "Performance Metrics in AI Age" },
];


function LinkColumn({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div>
      <h4 className="font-semibold text-foreground">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.href} className="text-sm">
            <Link
              href={link.href}
              className="transition-colors hover:text-foreground flex items-center"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              <span>{link.label}</span>
              {link.icon && <span aria-hidden="true" className="ml-1">{link.icon}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-border bg-card py-16 text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-y-10 gap-x-8 md:grid-cols-12">
          <div className="col-span-2 md:col-span-4">
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
          
          <div className="col-span-1 md:col-span-2">
            <LinkColumn title="Playbook" links={playbookLinks} />
          </div>
          <div className="col-span-1 md:col-span-2">
            <LinkColumn title="Hire" links={hireLinks} />
             <div className="mt-6">
                <LinkColumn title="Company" links={companyLinks} />
            </div>
          </div>
          <div className="col-span-2 md:col-span-2">
            <LinkColumn title="Main Site" links={mainSiteLinks} />
          </div>
          <div className="col-span-2 md:col-span-2">
            <LinkColumn title="Scientific Research" links={researchLinks} />
          </div>

        </div>

        <div className="mt-16 border-t border-border pt-8 text-center text-sm">
          <p>© {year} TeamStation AI — All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
