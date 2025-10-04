import * as React from "react";
export function TooltipProvider({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function Tooltip({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function TooltipTrigger({ children }: { children: React.ReactNode }) { return <>{children}</>; }
export function TooltipContent({ children }: { children: React.ReactNode }) { return <>{children}</>; }
/** Accept both 'content' and 'label' */
export function WithTooltip(props: {
  content?: React.ReactNode; label?: React.ReactNode; children: React.ReactNode; as?: keyof JSX.IntrinsicElements; className?: string;
}) {
  const { content, label, children, as: Tag = "span", className } = props as any;
  const title = typeof (content ?? label) === "string" ? (content ?? label) : undefined;
  // Ensure the wrapping tag is a span, not a p, to prevent nesting errors.
  return <Tag title={title} className={className} data-hint={title}>{children}</Tag>;
}
export default { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent, WithTooltip };
