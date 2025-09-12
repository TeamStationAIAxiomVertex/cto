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
          <Link href="/comparisons" className="text-mute hover:text-text transition-colors">Comparisons</Link>
          <Link href="/process" className="text-mute hover:text-text transition-colors">Process</Link>
          <Link href="/pricing" className="text-mute hover:text-text transition-colors">Pricing</Link>
          <Link href="/trust" className="text-mute hover:text-text transition-colors">Trust Center</Link>
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle />
           <a href="/hire" className="cta-sm">Book a Call</a>
        </div>
      </div>
    </header>
  );
}
