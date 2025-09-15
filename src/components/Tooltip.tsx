// This component is deprecated and will be removed. 
// It is replaced by the new tooltip at src/components/ui/tooltip.tsx
import React, { type ReactNode } from 'react';

type TooltipProps = {
  children: ReactNode;
  text: string;
};

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <span className="relative inline-block cursor-pointer border-b border-dashed border-primary">
      {children}
      <span className="invisible absolute bottom-full left-1/2 z-10 mb-2 w-64 max-w-xs -translate-x-1/2 whitespace-normal rounded-md bg-card p-3 text-left text-sm leading-relaxed text-foreground opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100">{text}</span>
    </span>
  );
};
