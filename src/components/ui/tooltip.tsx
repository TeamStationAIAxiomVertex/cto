'use client';

import * as React from 'react';
import * as RT from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';

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
    <RT.Provider delayDuration={delayDuration}>
      <RT.Root>
        <RT.Trigger asChild>{children}</RT.Trigger>
        <RT.Portal>
          <RT.Content
            side={side}
            align={align}
            className="rounded-md px-2 py-1 text-xs bg-black text-white shadow-md"
          >
            {node}
            <RT.Arrow className="fill-black" />
          </RT.Content>
        </RT.Portal>
      </RT.Root>
    </RT.Provider>
  );
}

/** Re-export Radix parts so `<Tooltip.Provider>` etc. work */
export const TooltipProvider = RT.Provider;
export const TooltipRoot = RT.Root;
export const TooltipTrigger = RT.Trigger;
export const TooltipPortal = RT.Portal;
export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof RT.Content>,
  React.ComponentPropsWithoutRef<typeof RT.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <RT.Content
    ref={ref}
    sideOffset={sideOffset}
    className={`z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-xs text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 ${className}`}
    {...props}
  />
));
TooltipContent.displayName = RT.Content.displayName;

/** Back-compat sugar: <Tooltip content="...">{child}</Tooltip> */
export const Tooltip = WithTooltip;
export default WithTooltip;
