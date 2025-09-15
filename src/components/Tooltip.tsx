
'use client';
import * as React from 'react';

// types
type TooltipRootProps = { children: React.ReactNode };
type TooltipProps = { children: React.ReactNode };
type TooltipTriggerProps = {
  asChild?: boolean;
  children: React.ReactElement;
} & React.HTMLAttributes<HTMLElement>;
type TooltipContentProps = {
  children: React.ReactNode;
  className?: string;
};

// context (no-op)
const Ctx = React.createContext<{ content?: React.ReactNode }>({});

// named API (shadcn-compatible)
export function TooltipProvider({ children }: TooltipRootProps) {
  return <>{children}</>;
}
export function Tooltip({ children }: TooltipProps) {
  return <span className="inline-block">{children}</span>;
}
export function TooltipTrigger({ children, ...rest }: TooltipTriggerProps) {
  return React.cloneElement(children, { ...rest });
}
export function TooltipContent({ children, className }: TooltipContentProps) {
  return (
    <span role="tooltip" aria-hidden className={['sr-only', className].filter(Boolean).join(' ')}>
      {children}
    </span>
  );
}

// default API: <Tooltip content="...">child</Tooltip>
const TooltipDefault = ({
  children,
  content,
  ...rest
}: { children: React.ReactNode; content?: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>) => {
  const title =
    typeof content === 'string' ? content : typeof content === 'number' ? String(content) : undefined;
  return (
    <span title={title} {...rest}>
      {children}
    </span>
  );
};
export default TooltipDefault;
