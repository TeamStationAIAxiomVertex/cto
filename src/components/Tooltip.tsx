
'use client';

import React, { type ReactNode } from 'react';

type TooltipProps = {
  children: ReactNode;
  text: string;
};

export function Tooltip({ children, text }: TooltipProps) {
  return (
    <span className="tooltip inline-block">
      {children}
      <span className="tooltiptext">{text}</span>
    </span>
  );
};
