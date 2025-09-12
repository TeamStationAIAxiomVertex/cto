import React, { type ReactNode } from 'react';

type TooltipProps = {
  children: ReactNode;
  text: string;
};

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <div className="tooltip inline-block">
      {children}
      <span className="tooltiptext">{text}</span>
    </div>
  );
};

    