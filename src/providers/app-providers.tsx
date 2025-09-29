'use client';

import { ThemeProvider } from 'next-themes';


type Props = { children: React.ReactNode };

export default function AppProviders({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      
        {children}
      
    </ThemeProvider>
  );
}
