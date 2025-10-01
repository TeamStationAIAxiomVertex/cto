
'use client';

import * as React from 'react';
import * as Popover from '@radix-ui/react-popover';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';


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
          className={['inline-flex items-center align-baseline text-muted-foreground hover:text-foreground', className]
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
          className="z-50 max-w-xs rounded-md border bg-popover p-3 text-sm text-popover-foreground shadow-md"
        >
          {children}
          <Popover.Arrow className="fill-border" width={10} height={5} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
