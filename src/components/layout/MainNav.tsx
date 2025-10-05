// src/components/layout/MainNav.tsx
import Link from 'next/link';

// Utilities
import { cn } from '@/lib/utils'; // Corrected path based on previous steps

interface MainNavProps {
  isMobile?: boolean;
}

// Define the main navigation links for the site
const navItems = [
  {
    title: 'Playbook',
    href: '/playbook',
  },
  {
    title: 'Case Studies',
    href: '/case-studies',
  },
  {
    title: 'Pricing',
    href: '/pricing',
  },
  {
    title: 'About',
    href: '/about',
  },
];

export default function MainNav({ isMobile = false }: MainNavProps) {
  return (
    <div className="mr-4 hidden lg:flex">
      {/* Site Logo/Home Link */}
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold">CTO Playbook</span>
      </Link>
      
      {/* Navigation Links */}
      <nav className="flex items-center space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'transition-colors hover:text-foreground/80',
              'text-foreground/60'
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}