// server-safe minimal tooltip shim (no 'use client')
import * as React from "react";

export function TooltipProvider({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function Tooltip({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function TooltipTrigger({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function TooltipContent({ children }: { children: React.ReactNode }) { return <>{children}</>; }

/** Minimal helper with native title attr so SSR works */
export function WithTooltip({
  content, children, as: Tag = "span", className,
}: { content: React.ReactNode; children: React.ReactNode; as?: keyof JSX.IntrinsicElements; className?: string }) {
  const title = typeof content === "string" ? content : undefined;
  return <Tag title={title} className={className} data-hint={title}>{children}</Tag>;
}

export default { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, WithTooltip };
