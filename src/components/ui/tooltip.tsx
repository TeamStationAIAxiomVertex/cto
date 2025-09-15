'use client';
import * as React from 'react';

// Types
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
type WithTooltipProps = {
  label?: React.ReactNode;       // string/number -> native title
  title?: string;                // alias for label
  children: React.ReactNode;
  asChild?: boolean;             // if true, clone child instead of wrapping
  className?: string;
};

// Named API (shadcn-compatible skeleton)
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
  // screen-reader only; avoids popper deps and SSR issues
  return (
    <span role="tooltip" aria-hidden className={['sr-only', className].filter(Boolean).join(' ')}>
      {children}
    </span>
  );
}

// Default export: <TooltipDefault content="...">child</TooltipDefault>
const TooltipDefault = ({
  children,
  content,
  ...rest
}: { children: React.ReactNode; content?: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>) => {
  const title =
    typeof content === 'string' ? content
    : typeof content === 'number' ? String(content)
    : undefined;

  return (
    <span title={title} {...rest}>
      {children}
    </span>
  );
};
export default TooltipDefault;

// Convenience helper used by your page: <WithTooltip label="...">child</WithTooltip>
export function WithTooltip({ label, title, children, asChild, className }: WithTooltipProps) {
  const tip =
    typeof label === 'string' ? label
    : typeof label === 'number' ? String(label)
    : typeof title === 'string' ? title
    : undefined;

  if (asChild && React.isValidElement(children)) {
    const prev = (children.props?.className as string) || '';
    return React.cloneElement(children as React.ReactElement, {
      title: tip,
      className: [prev, className].filter(Boolean).join(' '),
    });
  }

  return (
    <span title={tip} className={className}>
      {children}
    </span>
  );
}
