
'use client';

import * as React from 'react';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@/components/ui/tooltip-primitives';

type WithTooltipProps = {
  label: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  children: React.ReactNode;
};

export function WithTooltip({
  label,
  side = 'top',
  align = 'center',
  children,
}: WithTooltipProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className="inline-flex items-center cursor-help focus:outline-none focus:ring-2 focus:ring-primary/40"
          tabIndex={0}
        >
          {children}
        </span>
      </TooltipTrigger>
      {/* shadcn/Radix portals to <body> by default */}
      <TooltipContent
        side={side}
        align={align}
        sideOffset={6}
        className="z-[1000] rounded-md border bg-popover px-2 py-1 text-xs text-popover-foreground shadow-md"
      >
        {label}
      </TooltipContent>
    </Tooltip>
  );
}

// Optional: re-export provider so callers don't import primitives directly
export { TooltipProvider } from '@/components/ui/tooltip-primitives';
