'use client';

import * as React from 'react';
import * as RT from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from './tooltip-primitives';

type Side = 'top' | 'right' | 'bottom' | 'left';
type Align = 'start' | 'center' | 'end';

export type WithTooltipProps = {
  /** Preferred prop */
  content?: ReactNode;
  /** Back-compat alias for older callers */
  label?: ReactNode;
  children: ReactNode;
  side?: Side;
  align?: Align;
  /** Optional: delay before showing (ms) */
  delayDuration?: number;
};

/** Small convenience wrapper you can drop around any child */
export function WithTooltip({
  children,
  content,
  label,
  side = 'top',
  align = 'center',
  delayDuration = 150,
}: WithTooltipProps) {
  const node = content ?? label;
  if (!node) return <>{children}</>;

  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <RT.Portal>
          <TooltipContent side={side} align={align}>
            {node}
          </TooltipContent>
        </RT.Portal>
      </Tooltip>
    </TooltipProvider>
  );
}

export default WithTooltip;
