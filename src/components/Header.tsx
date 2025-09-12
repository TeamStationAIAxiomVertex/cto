
'use client';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { ChevronDown } from 'lucide-react';

export function Header() {
  const navItems = {
    'Playbook': [
      { href: '/playbook/nearshore-vs-offshore', title: 'Nearshore vs. Offshore', description: 'Diagnose the true cost of your global talent strategy.' },
      { href: '/playbook/latam-economics', title: 'LATAM Economics', description: 'A CFO-ready framework for modeling nearshore TCO.' },
      { href: '/playbook/build-vs-buy', title: 'Build vs. Buy', description: 'The trade-offs of building a nearshore operation from scratch.' },
      { href: '/playbook/security-compliance', title: 'Security & Compliance', description: 'The playbook for audit-ready nearshore operations.' },
      { href: '/playbook/bias-free-technical-hiring-axiom-cortex', title: 'Bias-Free Hiring', description: 'How to use Axiom Cortex™ for fairer, more accurate hiring.' },
    ],
    'Services': [
      { href: '/process', title: 'Our Process', description: 'A single, measurable SLA for hiring, EOR, and compliance.' },
      { href: '/technical-interview-evaluation', title: 'Talent Evaluations', description: 'A deep dive into the Axiom Cortex™ evaluation process.' },
      { href: '/nearshore-it-talent-onboarding', title: 'Talent Onboarding', description: 'How we ensure new hires are productive from day one.' },
      { href: '/nearshore-integrated-services', title: 'Integrated Services', description: 'A single SLA for your entire nearshore operation.' },
    ],
    'Comparisons': [
        { href: '/comparisons', title: 'All Comparisons', description: 'A comparative analysis of features, cost, and risk.' },
        { href: '/comparisons/bairesdev', title: 'vs. BairesDev', description: 'The Co-Pilot vs. The "Top 1%" Vendor.' },
        { href: '/comparisons/globant', title: 'vs. Globant', description: 'The Co-Pilot vs. The Systems Integrator.' },
        { href: '/comparisons/toptal', title: 'vs. Toptal', description: 'Integrated Teams vs. Elite Freelancers.' },
    ],
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-foreground">
          TeamStation AI
        </Link>
        <nav className="hidden items-center gap-4 text-sm md:flex">
          {Object.entries(navItems).map(([title, items]) => (
            <Popover key={title}>
              <PopoverTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
                {title} <ChevronDown className="h-4 w-4" />
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="grid gap-4">
                  {items.map(item => (
                    <Link key={item.href} href={item.href} className="-m-3 flex items-start rounded-lg p-3 hover:bg-accent">
                      <div className="ml-4">
                        <p className="text-sm font-medium text-foreground">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          ))}
           <Link href="/case-studies" className="text-muted-foreground transition-colors hover:text-foreground">
              Case Studies
            </Link>
          <Link href="/pricing" className="text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="/hire" className="cta-button hidden sm:inline-flex">Book a Call</Link>
        </div>
      </div>
    </header>
  );
}
