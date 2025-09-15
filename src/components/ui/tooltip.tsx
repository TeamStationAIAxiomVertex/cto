'use client';

import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '@/lib/utils';

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;

export const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> & { fallbackTitle?: string }
>(function TooltipContent({ className, sideOffset = 6, fallbackTitle, ...props }, ref) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={
          className ??
          'z-50 rounded-md border bg-popover px-2 py-1.5 text-xs text-popover-foreground shadow-md'
        }
        {...props}
      >
        {props.children ?? (fallbackTitle ? <span>{fallbackTitle}</span> : null)}
        <TooltipPrimitive.Arrow className="fill-border" width={8} height={4} />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
});

/** Convenience wrapper: if JS/provider fails, the trigger still shows a native title tooltip. */
export function WithTooltip({
  label,
  children,
}: {
  label: string;
  children: React.ReactElement<{ title?: string }>;
}) {
  const child = React.cloneElement(children, { title: label });
  return (
    <Tooltip>
      <TooltipTrigger asChild>{child}</TooltipTrigger>
      <TooltipContent fallbackTitle={label}>{label}</TooltipContent>
    </Tooltip>
  );
}
