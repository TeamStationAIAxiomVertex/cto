
'use client';

import * as React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ');
}

/** Primitives (Radix-style) */
export const TooltipProvider = RadixTooltip.Provider;
export const TooltipRoot = RadixTooltip.Root;
export const TooltipTrigger = RadixTooltip.Trigger;
export const TooltipPortal = RadixTooltip.Portal;

export const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof RadixTooltip.Content> & { className?: string }
>(function TooltipContent({ className, sideOffset = 6, ...props }, ref) {
  return (
    <RadixTooltip.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cx(
        'z-50 rounded-lg border bg-black/90 text-white px-3 py-2 text-xs shadow-md',
        'backdrop-blur supports-[backdrop-filter]:bg-black/70',
        className
      )}
      {...props}
    />
  );
});

/** Friendly wrapper: <WithTooltip content="...">...</WithTooltip> */
export function WithTooltip({
  content,
  children,
  side = 'top',
  align = 'center',
}: {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: React.ComponentProps<typeof TooltipContent>['side'];
  align?: React.ComponentProps<typeof TooltipContent>['align'];
}) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipPortal>
          <TooltipContent side={side} align={align}>
            {content}
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  );
}

/** Back-compat sugar: <Tooltip content="...">{child}</Tooltip> */
export const Tooltip = WithTooltip;
export default WithTooltip;
