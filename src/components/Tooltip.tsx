import React, { type ReactNode } from 'react';

type TooltipProps = {
  children: ReactNode;
  text: string;
};

export const Tooltip = ({ children, text }: TooltipProps) => {
  return (
    <span className="tooltip">
      {children}
      <span className="tooltiptext">{text}</span>
    </span>
  );
};
