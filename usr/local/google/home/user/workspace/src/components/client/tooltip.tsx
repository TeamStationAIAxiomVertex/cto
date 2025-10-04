
'use client';

import * as React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@radix-ui/react-tooltip';

/**
 * Client Component wrapper for Radix Tooltip primitives.
 */
interface WithTooltipProps {
  children: React.ReactNode; // The element being hovered over
  content: React.ReactNode;  // The content displayed in the tooltip
  side?: 'top' | 'right' | 'bottom' | 'left';
}

export function WithTooltip({ children, content, side = 'top' }: WithTooltipProps) {
  return (
    <Tooltip>
      {/* asChild ensures this component uses the children directly, preventing extra wrapper divs/p's */}
      <TooltipTrigger asChild>{children}</TooltipTrigger> 
      
      {/* Ensure the Tooltip Content does not add unnecessary wrappers. */}
      <TooltipContent side={side} className="z-50 max-w-xs overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
        {content} {/* Render content directly, assuming it's correctly structured (e.g., inside a <span> or <div>) */}
      </TooltipContent>
    </Tooltip>
  );
}
