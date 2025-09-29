
'use client';

import React, { useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import Link from 'next/link';

type DisclosureDrawerProps = {
  title: string;
  items: { href: string; title: string }[];
  onLinkClick: () => void;
};

export function DisclosureDrawer({ title, items, onLinkClick }: DisclosureDrawerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        className="flex w-full items-center justify-between py-2 text-lg font-semibold text-foreground"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="flex flex-col items-start space-y-2 py-2 pl-4">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground"
              onClick={onLinkClick}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
