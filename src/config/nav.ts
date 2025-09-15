import type { ReactNode } from 'react';
import { SpotifyIcon } from '@/components/SpotifyIcon';

export type NavItem = {
  href: `/${string}`;        // forces relative app routes at compile time
  label: string;
  icon?: ReactNode;
  description?: string;
  isHubLink?: boolean;
};

export type NavSections = {
  Playbook: NavItem[];
  "What's Included": NavItem[];
  Comparisons: NavItem[];
  Company: NavItem[];
};

export const NAV: NavSections = {
  Playbook: [
    { href: '/playbook/hub', label: 'Playbook Hub', description: 'Go to the main playbook hub.', isHubLink: true },
    { href: '/playbook/nearshore-vs-offshore', label: 'Nearshore vs. Offshore', description: 'Diagnose the true cost of your global talent strategy.' },
    { href: '/playbook/latam-economics', label: 'LATAM Economics', description: 'A CFO-ready framework for modeling nearshore TCO.' },
    { href: '/playbook/build-vs-buy', label: 'Build vs. Buy', description: 'The trade-offs of building a nearshore operation from scratch.' },
    { href: '/playbook/bias-free-technical-hiring-axiom-cortex', label: 'Bias-Free Hiring', description: 'How to use Axiom Cortex™ for fairer, more accurate hiring.' },
    { href: '/playbook/tco-model', label: 'TCO Model', description: 'A CFO-ready model for the Total Cost of Ownership.' },
  ],
  "What's Included": [
    { href: '/platform', label: 'Platform', description: 'The Nearshore IT Co-Pilot™ Platform.' },
    { href: '/process', label: 'Our Process', description: 'A single, measurable SLA for hiring, EOR, and compliance.' },
    { href: '/technical-interview-evaluation', label: 'Talent Evaluations', description: 'A deep dive into the Axiom Cortex™ evaluation process.' },
    { href: '/research/performance-evaluation-framework', label: 'Performance Framework', description: 'A data-driven framework for performance and growth.' },
    { href: '/services/integrated-services', label: 'Integrated Services', description: 'A single SLA for your entire nearshore operation.' },
    { href: '/services/talent-onboarding', label: 'Talent Onboarding', description: 'How we ensure new hires are productive from day one.' },
    { href: '/trust', label: 'Trust Center', description: 'Our commitment to security, compliance, and governance.' },
  ],
  Comparisons: [
      { href: '/comparisons', label: 'All Comparisons', description: 'A comparative analysis of features, cost, and risk.' },
      { href: '/comparisons/bairesdev', label: 'vs. BairesDev', description: 'The Co-Pilot vs. The "Top 1%" Vendor.' },
      { href: '/comparisons/globant', label: 'vs. Globant', description: 'The Co-Pilot vs. The Systems Integrator.' },
      { href: '/comparisons/toptal', label: 'vs. Toptal', description: 'Integrated Teams vs. Elite Freelancers.' },
  ],
  Company: [
    { href: '/about', label: 'About Us' },
    { href: '/research/hub', label: 'Research' },
    { href: '/trust', label: 'Trust Center' },
    { href: '/hire', label: 'Hire Talent' },
    { href: '/research/hub#podcast', label: 'Podcast', icon: SpotifyIcon },
  ],
};

export const simpleNavItems: Omit<NavItem, 'description' | 'isHubLink'>[] = [
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/hire', label: 'Hire' },
    { href: '/research/hub', label: 'Research'},
    { href: '/about', label: 'About' },
];
