
// Server-safe stubs so imports from "@/components/ui/tooltip" always compile
import * as React from 'react';

export function TooltipProvider({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function Tooltip({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function TooltipTrigger({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function TooltipContent({ children }: { children: React.ReactNode }) { return <>{children}</>; }

/** Optional SSR-friendly helper: shows native title on hover/focus */
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
