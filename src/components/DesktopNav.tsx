
'use client';
import Link from 'next/link';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/Popover';
import { ChevronDown, BookOpen } from 'lucide-react';
import { NAV, simpleNavItems, type NavItem } from '@/config/nav';

function NavLink({ href, label, description, isHubLink }: NavItem) {
    const isExternal = href.startsWith('http');
    const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
        <Link href={href} {...linkProps} className="-m-3 flex flex-col rounded-lg p-3 hover:bg-accent">
            <p className="text-sm font-medium text-foreground flex items-center">
                {isHubLink && <BookOpen className="mr-2 h-4 w-4" />}
                {label}
            </p>
            {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </Link>
    );
}

export function DesktopNav() {
  return (
    <nav className="hidden items-center gap-6 text-sm md:flex">
      {Object.entries(NAV).map(([title, items]) => (
        <Popover key={title}>
          <PopoverTrigger className="flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            {title} <ChevronDown className="h-4 w-4" />
          </PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="grid gap-4">
              {items.map(item => <NavLink key={item.href} {...item} label={item.label} />)}
            </div>
          </PopoverContent>
        </Popover>
      ))}
      {simpleNavItems.map(item => {
          const isExternal = item.href.startsWith('http');
          const linkProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};
          return (
            <Link key={item.href} href={item.href} {...linkProps} className="text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </Link>
          )
      })}
    </nav>
  );
}
