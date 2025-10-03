"use client";
import * as React from "react";

export function TooltipProvider({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function Tooltip({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function TooltipTrigger({ children }: { children: React.ReactNode }) { return <span>{children}</span>; }
export function TooltipContent({ children }: { children: React.ReactNode }) { return <span>{children}</span>; }

/** Helper that works in SSR and CSR via native title attribute */
export function WithTooltip({
  content, children, as: Tag = "span", className,
}: { content: React.ReactNode; children: React.ReactNode; as?: keyof JSX.IntrinsicElements; className?: string }) {
  const title = typeof content === "string" ? content : undefined;
  return <Tag title={title} className={className} data-hint={title}>{children}</Tag>;
}

export default { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, WithTooltip };
