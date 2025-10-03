'use client';

import * as React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';

export function WithTooltip({
  content,
  children,
  delayDuration = 200,
  side = 'top',
  align = 'center',
}: {
  content: ReactNode;
  children: ReactNode;
  delayDuration?: number;
  side?: 'top'|'right'|'bottom'|'left';
  align?: 'start'|'center'|'end';
}) {
  return (
    <Tooltip.Provider delayDuration={delayDuration}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content side={side} align={align} className="rounded-md border bg-card px-2 py-1 text-xs shadow">
            {content}
            <Tooltip.Arrow className="fill-current" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

// Re-export Radix primitives (optional, handy elsewhere)
export {
  Provider as TooltipProvider,
  Root as TooltipRoot,
  Trigger as TooltipTrigger,
  Content as TooltipContent,
  Arrow as TooltipArrow,
  Portal as TooltipPortal,
} from '@radix-ui/react-tooltip';
