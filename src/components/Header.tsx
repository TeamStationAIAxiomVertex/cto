'use client';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { MobileNav } from './MobileNav';
import { DesktopNav } from './DesktopNav';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold text-foreground">
          TeamStation AI
        </Link>
        
        {/* Desktop Navigation */}
        <DesktopNav />

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link href="https://app.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hidden sm:inline-flex">Sign In</Link>
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button hidden sm:inline-flex">Book a Call</Link>
          
          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
