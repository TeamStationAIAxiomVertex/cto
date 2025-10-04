'use client';

import React from 'react';
import { ThemeProvider } from '../components/theme-provider'; // Using reliable RELATIVE path
import { TooltipProvider } from '../components/client/tooltip-provider'; // Using reliable RELATIVE path

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <TooltipProvider delayDuration={0}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </TooltipProvider>
  );
}
