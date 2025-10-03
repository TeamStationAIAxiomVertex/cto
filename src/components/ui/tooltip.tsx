// Server-safe fallbacks so Server Components can import from "@/components/ui/tooltip"
import * as React from 'react';

type WithTooltipProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export function WithTooltip({ content, children, as: Tag = 'span', className }: WithTooltipProps) {
  // Accessible SSR fallback: browsers show `title` on hover/focus
  const title = typeof content === 'string' ? content : undefined;
  return (
    <Tag title={title} className={className} data-hint={title}>
      {children}
    </Tag>
  );
}

// No-op providers/primitives to satisfy client imports without requiring "use client"
export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
export function Tooltip({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
export function TooltipTrigger({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
export function TooltipContent({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
