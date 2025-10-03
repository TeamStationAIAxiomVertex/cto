// src/components/ui/accordion.tsx
// Server-safe stubs; replace with client islands later if you need interactivity.
import * as React from 'react';

export function Accordion({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...rest}>{children}</div>;
}
export function AccordionItem({ children, value }: { children: React.ReactNode; value: string }) {
  return <section data-accordion-item={value}>{children}</section>;
}
export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return <div role="button" tabIndex={0}>{children}</div>;
}
export function AccordionContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
