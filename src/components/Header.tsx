'use client';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

export function Header() {
  const navItems = [
    { href: '/playbook', label: 'CTO Playbook' },
    { href: '/research', label: 'Research' },
    { href: '/comparisons', label: 'Comparisons' },
    { href: '/process', label: 'Process' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/trust', label: 'Trust Center' },
  ];

  const [isHireMenuOpen, setHireMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-bg/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-bold text-lg">TeamStation AI</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-mute hover:text-text transition-colors">
              {item.label}
            </Link>
          ))}
           <div className="relative" onMouseEnter={() => setHireMenuOpen(true)} onMouseLeave={() => setHireMenuOpen(false)}>
            <button className="flex items-center gap-1 text-mute hover:text-text transition-colors">
              Hire
              <ChevronDown size={16} />
            </button>
            {isHireMenuOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-surface-1 border border-line rounded-lg shadow-lg">
                <ul className="py-1">
                  <li>
                    <Link href="/hire/by-role" className="block px-4 py-2 text-sm text-mute hover:bg-surface-2 hover:text-text">
                      By Role
                    </Link>
                  </li>
                  <li>
                    <Link href="/hire/by-technology" className="block px-4 py-2 text-sm text-mute hover:bg-surface-2 hover:text-text">
                      By Technology
                    </Link>
                  </li>
                  <li>
                    <Link href="/hire/by-country" className="block px-4 py-2 text-sm text-mute hover:bg-surface-2 hover:text-text">
                      By Country
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="/hire" className="cta hidden sm:inline-block">Book a Call</a>
        </div>
      </div>
    </header>
  );
}
