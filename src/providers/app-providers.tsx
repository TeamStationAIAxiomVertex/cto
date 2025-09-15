
'use client';

import { ThemeProvider } from 'next-themes';
import { TooltipProvider } from '@/components/ui/tooltip-primitives';

type Props = { children: React.ReactNode };

export default function AppProviders({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider delayDuration={120} skipDelayDuration={250}>
        {children}
      </TooltipProvider>
    </ThemeProvider>
  );
}
