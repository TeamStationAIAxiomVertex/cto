'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { DisclosureDrawer } from './DisclosureDrawer';

const navItems = {
  'CTO Playbook': [
    { href: '/playbook/hub', title: 'The CTO Playbook' },
    { href: '/playbook/nearshore-vs-offshore', title: 'Nearshore vs. Offshore' },
    { href: '/playbook/latam-economics', title: 'LATAM Economics' },
    { href: '/playbook/build-vs-buy', title: 'Build vs. Buy' },
    { href: '/playbook/bias-free-technical-hiring-axiom-cortex', title: 'Bias-Free Hiring' },
    { href: '/playbook/tco-model', title: 'TCO Model' },
  ],
  'What\'s Included': [
    { href: 'https://teamstation.dev/platform', title: 'Our Platform'},
    { href: 'https://teamstation.dev/nearshore-it-staff-augmentation-process', title: 'Our Process' },
    { href: 'https://teamstation.dev/technical-interview-evaluation', title: 'Talent Evaluations' },
    { href: 'https://teamstation.dev/talent-performance-evaluations', title: 'Performance Framework' },
    { href: 'https://teamstation.dev/nearshore-it-talent-onboarding', title: 'Talent Onboarding' },
    { href: 'https://teamstation.dev/nearshore-integrated-services', title: 'Integrated Services' },
    { href: '/trust', title: 'Trust Center' },
  ],
  'Comparisons': [
      { href: '/comparisons', title: 'All Comparisons' },
      { href: '/comparisons/bairesdev', title: 'vs. BairesDev' },
      { href: '/comparisons/globant', title: 'vs. Globant' },
      { href: '/comparisons/toptal', title: 'vs. Toptal' },
  ],
};

const simpleNavItems = [
    { href: '/case-studies', title: 'Case Studies' },
    { href: 'https://teamstation.dev/nearshore-it-staff-augmentation-pricing', title: 'Pricing' },
    { href: 'https://teamstation.dev/latam-talent', title: 'Hire' },
    { href: '/research/hub', title: 'Research'},
    { href: '/about', title: 'About' },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-transparent text-muted-foreground" aria-label="Open mobile menu">
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-full max-w-sm bg-background p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-2">
                {Object.entries(navItems).map(([title, items]) => (
                  <DisclosureDrawer
                    key={title}
                    title={title}
                    items={items.map(({ href, title }) => ({ href, title }))}
                    onLinkClick={handleLinkClick}
                  />
                ))}
                {simpleNavItems.map(item => (
                    <Link key={item.href} href={item.href} className="block py-2 text-lg font-semibold text-foreground hover:text-primary" onClick={handleLinkClick} target={item.href.startsWith('http') ? '_blank' : '_self'} rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}>
                        {item.title}
                    </Link>
                ))}
                <Link href="https://app.teamstation.dev" target="_blank" rel="noopener noreferrer" className="block py-2 text-lg font-semibold text-foreground hover:text-primary" onClick={handleLinkClick}>
                    Sign In
                </Link>
                 <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button w-full mt-4">Book a Call</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
