// src/components/ui/tooltip.tsx
// Server-safe stubs to satisfy imports (no 'use client').
import * as React from 'react';

export function TooltipProvider({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function Tooltip({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function TooltipTrigger({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function TooltipContent({ children }: { children: React.ReactNode }) { return <>{children}</>; }

// Optional convenience wrapper so existing code can render a title attribute
export function WithTooltip({
  content,
  children,
  as: Tag = 'span',
  className,
}: {
  content: React.ReactNode; children: React.ReactNode; as?: keyof JSX.IntrinsicElements; className?: string;
}) {
  const title = typeof content === 'string' ? content : undefined;
  return <Tag title={title} className={className} data-hint={title}>{children}</Tag>;
}
