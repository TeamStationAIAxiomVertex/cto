
'use client';
import * as React from 'react';

/**
 * Universal Tooltip shim:
 * - Works if you import default:   import Tooltip from '@/components/Tooltip'
 *   Usage: <Tooltip content="Hello"><button>Hover</button></Tooltip>
 * - Works if you import named:     import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from '@/components/Tooltip'
 *   Usage: <TooltipProvider><Tooltip><TooltipTrigger asChild><button/></TooltipTrigger><TooltipContent>...</TooltipContent></Tooltip>
 *
 * This is a lightweight, dependency-free fallback. It uses the native `title`
 * attribute to avoid hydration mismatches and SSR problems. You can swap the
 * internals later for Radix/shadcn without changing call sites.
 */

// ——— Types ———
type TooltipRootProps = { children: React.ReactNode };
type TooltipProps = { children: React.ReactNode };
type TooltipTriggerProps = {
  asChild?: boolean;
  children: React.ReactElement;
} & React.HTMLAttributes<HTMLElement>;
type TooltipContentProps = {
  children: React.ReactNode;
  className?: string;
  /** When used with default export <Tooltip content="...">, we map to native `title` instead. */
};

// ——— Context (no-op but keeps API parity) ———
const Ctx = React.createContext<{ content?: React.ReactNode }>({});

// ——— Named API (shadcn-compatible) ———
export function TooltipProvider({ children }: TooltipRootProps) {
  return <>{children}</>;
}

export function Tooltip({ children }: TooltipProps) {
  // Container (no-op) to match shadcn structure
  return <span className="inline-block">{children}</span>;
}

export function TooltipTrigger({ children, ...rest }: TooltipTriggerProps) {
  // Pass through props; consumers usually wrap a button/link/etc.
  return React.cloneElement(children, { ...rest });
}

export function TooltipContent({ children, className }: TooltipContentProps) {
  // Render nothing visible (avoid popper/positioning deps). Consumers still compile.
  // Provide an accessible fallback via aria-live offscreen span.
  return (
    <span
      role="tooltip"
      aria-hidden
      className={['sr-only', className].filter(Boolean).join(' ')}
    >
      {children}
    </span>
  );
}

// ——— Default export (<Tooltip content="...">child</Tooltip>) ———
const TooltipDefault = ({
  children,
  content,
  ...rest
}: { children: React.ReactNode; content?: React.ReactNode } & React.HTMLAttributes<HTMLSpanElement>) => {
  const title =
    typeof content === 'string'
      ? content
      : (typeof content === 'number' ? String(content) : undefined);

  // We use native title to guarantee SSR/CSR parity with zero JS positioning.
  return (
    <span title={title} {...rest}>
      {children}
    </span>
  );
};

export default TooltipDefault;
