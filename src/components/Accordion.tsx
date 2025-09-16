// server wrapper – no 'use client'
import dynamic from 'next/dynamic';
import type { ComponentProps } from 'react';

// Dynamically import the client components
const DynamicAccordion = dynamic(() => import('@/components/client/Accordion').then(m => m.Accordion), { ssr: false });
const DynamicAccordionItem = dynamic(() => import('@/components/client/Accordion').then(m => m.AccordionItem), { ssr: false });

// Export types directly from the client component module
export type { AccordionProps, AccordionItemProps } from '@/components/client/Accordion';

// Create server-safe wrappers
export const Accordion = (props: ComponentProps<typeof DynamicAccordion>) => <DynamicAccordion {...props} />;
export const AccordionItem = (props: ComponentProps<typeof DynamicAccordionItem>) => <DynamicAccordionItem {...props} />;
