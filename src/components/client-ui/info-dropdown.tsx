
'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Info } from 'lucide-react';


type InfoDropdownProps = {
  label: string;                 // accessible name for the trigger
  children: React.ReactNode;     // dropdown content (panel)
  className?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
};

export function InfoDropdown({
  label,
  children,
  className,
  side = 'top',
  align = 'center',
  sideOffset = 6,
}: InfoDropdownProps) {
  return (
    <Popover.Root>
      {/* asChild ensures no extra <div> wrapper; we control the element */}
      <Popover.Trigger asChild>
        <button
          type="button"
          aria-label={label}
          title={label} /* graceful native tooltip fallback */
          className={['inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-primary/10 align-baseline text-primary hover:bg-primary/20', className]
            .filter(Boolean)
            .join(' ')}
        >
          <Info aria-hidden className="h-4 w-4" />
        </button>
      </Popover.Trigger>

      {/* The content is PORTALED to <body>, so it's not inside <p> */}
      <Popover.Portal>
        <Popover.Content
          side={side}
          align={align}
          sideOffset={sideOffset}
          className="z-50 max-w-sm rounded-lg border bg-popover/95 p-4 text-sm text-popover-foreground shadow-xl backdrop-blur"
        >
          {children}
          <Popover.Arrow className="fill-border" width={10} height={5} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
