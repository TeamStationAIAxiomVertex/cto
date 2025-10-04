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
      children: React.ReactNode; 
      content: React.ReactNode; 
      side?: 'top' | 'right' | 'bottom' | 'left';
    }

    export function WithTooltip({ children, content, side = 'top' }: WithTooltipProps) {
      return (
        <Tooltip>
          {/* asChild ensures the trigger uses the children element directly */}
          <TooltipTrigger asChild>{children}</TooltipTrigger> 
          
          {/* CRITICAL FIX: Add asChild here to eliminate any implicit wrapper */}
          <TooltipContent 
            asChild // Prevents TooltipContent from rendering its own wrapper element
            side={side} 
            className="z-50 max-w-xs overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          >
            {/* We now assume the content itself is properly structured (e.g., inside a div or span) */}
            {content}
          </TooltipContent>
        </Tooltip>
      );
    }