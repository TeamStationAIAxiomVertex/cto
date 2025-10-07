// src/components/command-menu.tsx
// FINAL CRITICAL FIX: The component's content is now placed inside a dedicated element 
// to satisfy the strict CommandDialogProps type definition.

'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Book, Code, FileText, Moon, Sun, Users } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandList,
  CommandItem,
  CommandSeparator,
} from '@/components/ui/command';

const navLinks = [
  // ... (navLinks array remains the same)
  {
    heading: 'Documentation',
    items: [
      { title: 'Playbook Overview', href: '/playbook', icon: <Book className="mr-2 h-4 w-4" /> },
      { title: 'API Reference', href: '/api', icon: <Code className="mr-2 h-4 w-4" /> },
      { title: 'Case Studies', href: '/case-studies', icon: <FileText className="mr-2 h-4 w-4" /> },
    ],
  },
  {
    heading: 'Company',
    items: [
      { title: 'About Us', href: '/about', icon: <Users className="mr-2 h-4 w-4" /> },
      { title: 'Pricing', href: '/pricing', icon: <Book className="mr-2 h-4 w-4" /> },
    ],
  },
];

export default function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      // Toggle on Cmd+K or Ctrl+K
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    []
  );

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          'relative w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64'
        )}
        onClick={() => setOpen(true)}
      >
        <Search className="h-4 w-4 shrink-0 opacity-50" />
        <span className="ml-2 hidden lg:inline-flex">Search documentation...</span>
        <span className="ml-2 inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-1/2 hidden h-5 -translate-y-1/2 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      
      {/* The only way to resolve this persistent type error is to use the spread operator 
        to ensure the command dialog's content is passed as part of the children object 
        in a way the type checker expects. We revert the Fragment and rely on the correct JSX structure.
      */}
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          
          {navLinks.map((section) => (
            <CommandGroup key={section.heading} heading={section.heading}>
              {section.items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={item.title}
                  onSelect={() => runCommand(() => router.push(item.href))}
                >
                  {item.icon}
                  <span>{item.title}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}

          <CommandSeparator />

          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme('light'))}>
              <Sun className="mr-2 h-4 w-4" />
              <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('dark'))}>
              <Moon className="mr-2 h-4 w-4" />
              <span>Dark</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme('system'))}>
              <Users className="mr-2 h-4 w-4" />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}