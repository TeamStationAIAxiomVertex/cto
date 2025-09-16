// server wrapper – no 'use client'
import dynamic from 'next/dynamic';

export const Accordion = dynamic(
  () => import('@/components/client/Accordion').then(m => m.Accordion),
  { ssr: false }
);

export const AccordionItem = dynamic(
  () => import('@/components/client/Accordion').then(m => m.AccordionItem),
  { ssr: false }
);
