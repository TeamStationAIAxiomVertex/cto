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
           <Link href="/hire" className="text-mute hover:text-text transition-colors">
              Hire
            </Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/hire" className="cta hidden sm:inline-block">Book a Call</Link>
        </div>
      </div>
    </header>
  );
}
