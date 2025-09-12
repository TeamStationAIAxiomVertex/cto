'use client';
import Link from 'next/link';
import { ThemeToggle } from '@/components/ThemeToggle';

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-line bg-bg/95 backdrop-blur">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-bold text-lg">CTO Playbook</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/playbook" className="text-mute hover:text-text transition-colors">Playbook</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}