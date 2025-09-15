
'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-popover';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
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

// Forwarding exports for direct use if needed
export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
export { Popover as TooltipArrow } from '@radix-ui/react-popover';

const TooltipDefault = ({
  children,
  content,
  ...rest
}: { children: React.ReactNode; content?: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>) => {
  const titleAttr = typeof content === 'string' ? content : undefined;
  return (
    <span title={titleAttr} {...rest}>
      {children}
    </span>
  );
};
export default TooltipDefault;
