
'use client';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { ChevronDown, Menu, X, BookOpen } from 'lucide-react';
import { useState } from 'react';
import { DisclosureDrawer } from './DisclosureDrawer';

const navItems = {
  'CTO Playbook': [
    { href: '/playbook', title: 'The CTO Playbook', description: 'Go to the main playbook hub.', isHubLink: true },
    { href: '/playbook/nearshore-vs-offshore', title: 'Nearshore vs. Offshore', description: 'Diagnose the true cost of your global talent strategy.' },
    { href: '/playbook/latam-economics', title: 'LATAM Economics', description: 'A CFO-ready framework for modeling nearshore TCO.' },
    { href: '/playbook/build-vs-buy', title: 'Build vs. Buy', description: 'The trade-offs of building a nearshore operation from scratch.' },
    { href: '/playbook/bias-free-technical-hiring-axiom-cortex', title: 'Bias-Free Hiring', description: 'How to use Axiom Cortex™ for fairer, more accurate hiring.' },
    { href: '/trust', title: 'Security & Compliance', description: 'The playbook for audit-ready nearshore operations.' },
  ],
  'What\'s Included': [
    { href: '/process', title: 'Our Process', description: 'A single, measurable SLA for hiring, EOR, and compliance.' },
    { href: '/technical-interview-evaluation', title: 'Talent Evaluations', description: 'A deep dive into the Axiom Cortex™ evaluation process.' },
    { href: '/services/talent-onboarding', title: 'Talent Onboarding', description: 'How we ensure new hires are productive from day one.' },
    { href: '/services/integrated-services', title: 'Integrated Services', description: 'A single SLA for your entire nearshore operation.' },
    { href: '/trust', title: 'Trust Center', description: 'Our commitment to security, compliance, and governance.' },
  ],
  'Comparisons': [
      { href: '/comparisons', title: 'All Comparisons', description: 'A comparative analysis of features, cost, and risk.' },
      { href: '/comparisons/bairesdev', title: 'vs. BairesDev', description: 'The Co-Pilot vs. The "Top 1%" Vendor.' },
      { href: '/comparisons/globant', title: 'vs. Globant', description: 'The Co-Pilot vs. The Systems Integrator.' },
      { href: '/comparisons/toptal', title: 'vs. Toptal', description: 'Integrated Teams vs. Elite Freelancers.' },
  ],
};

const simpleNavItems = [
    { href: '/case-studies', title: 'Case Studies' },
    { href: '/pricing', title: 'Pricing' },
    { href: '/hire', title: 'Hire' },
    { href: '/research', title: 'Research'},
    { href: '/about', title: 'About' },
];

function NavLink({ href, title, description, isHubLink }: { href: string, title: string, description: string, isHubLink?: boolean }) {
    return (
        <Link href={href} className="-m-3 flex flex-col rounded-lg p-3 hover:bg-accent">
            <p className="text-sm font-medium text-foreground flex items-center">
                {isHubLink && <BookOpen className="mr-2 h-4 w-4" />}
                {title}
            </p>
            <p className="text-sm text-muted-foreground">{description}</p>
        </Link>
    );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-foreground">
          TeamStation AI
        </Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {Object.entries(navItems).map(([title, items]) => (
            <Popover key={title}>
              <PopoverTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
                {title} <ChevronDown className="h-4 w-4" />
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  {items.map(item => <NavLink key={item.href} {...item} />)}
                </div>
              </PopoverContent>
            </Popover>
          ))}
          {simpleNavItems.map(item => (
              <Link key={item.href} href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
                {item.title}
              </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
           <Link href="https://app.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex">Sign In</Link>
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button hidden sm:inline-flex">Book a Call</Link>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-transparent text-muted-foreground">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container px-4 py-4 space-y-2">
            {Object.entries(navItems).map(([title, items]) => (
              <DisclosureDrawer
                key={title}
                title={title}
                items={items.map(({ href, title }) => ({ href, title }))}
                onLinkClick={handleLinkClick}
              />
            ))}
            {simpleNavItems.map(item => (
                <Link key={item.href} href={item.href} className="block py-2 text-lg font-semibold text-foreground hover:text-primary" onClick={handleLinkClick}>
                    {item.title}
                </Link>
            ))}
            <Link href="https://app.teamstation.dev" target="_blank" rel="noopener noreferrer" className="block py-2 text-lg font-semibold text-foreground hover:text-primary" onClick={handleLinkClick}>
                Sign In
            </Link>
             <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button w-full mt-4">Book a Call</Link>
          </div>
        </div>
      )}
    </header>
  );
}
