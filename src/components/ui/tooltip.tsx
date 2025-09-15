'use client';
import * as React from 'react';

// Types
type TooltipRootProps = { children: React.ReactNode };

// Allow both patterns:
// 1) Named <Tooltip text|label|content|title="...">children</Tooltip>
// 2) Shadcn-style <Tooltip><TooltipTrigger/><TooltipContent/></Tooltip>
type TooltipProps = {
  children: React.ReactNode;
  className?: string;

  // Back-compat aliases accepted anywhere:
  text?: React.ReactNode;
  label?: React.ReactNode;
  content?: React.ReactNode;
  title?: string;
} & React.HTMLAttributes<HTMLSpanElement>;

type TooltipTriggerProps = {
  asChild?: boolean;
  children: React.ReactElement;
} & React.HTMLAttributes<HTMLElement>;

type TooltipContentProps = {
  children: React.ReactNode;
  className?: string;
};

// Helpers
const toTitle = (v: unknown): string | undefined =>
  typeof v === 'string' ? v : typeof v === 'number' ? String(v) : undefined;

// Provider (no-op placeholder)
export function TooltipProvider({ children }: TooltipRootProps) {
  return <>{children}</>;
}

// Named Tooltip: container that also supports title-based tips via props
export function Tooltip({
  children,
  className,
  text,
  label,
  content,
  title,
  ...rest
}: TooltipProps) {
  const tip =
    toTitle(text) ??
    toTitle(label) ??
    toTitle(content) ??
    (typeof title === 'string' ? title : undefined);

  return (
    <span title={tip} className={className ? String(className) : undefined} {...rest}>
      {children}
    </span>
  );
}

// Trigger passthrough (shadcn-compatible)
export function TooltipTrigger({ children, ...rest }: TooltipTriggerProps) {
  return React.cloneElement(children, { ...rest });
}

// Content placeholder: screen-reader only (no popper deps)
export function TooltipContent({ children, className }: TooltipContentProps) {
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
  const titleAttr = toTitle(content);
  return (
    <span title={titleAttr} {...rest}>
      {children}
    </span>
  );
};
export default TooltipDefault;

// Convenience helper: <WithTooltip label="...">child</WithTooltip>
export function WithTooltip({
  label,
  title,
  children,
  asChild,
  className,
}: {
  label?: React.ReactNode;
  title?: string;
  children: React.ReactNode;
  asChild?: boolean;
  className?: string;
}) {
  const tip = toTitle(label) ?? (typeof title === 'string' ? title : undefined);

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
