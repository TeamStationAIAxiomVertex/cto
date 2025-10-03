"use client";
import * as React from "react";

export function Accordion(props: React.HTMLAttributes<HTMLDivElement>) { return <div {...props} />; }
export function AccordionItem({ children, value }: { children: React.ReactNode; value: string }) {
  return <section data-accordion-item={value}>{children}</section>;
}
export function AccordionTrigger({ children }: { children: React.ReactNode }) {
  return <div role="button" tabIndex={0}>{children}</div>;
}
export function AccordionContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}
export default { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
