import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: 'TeamStation AI | The CTO Playbook for Nearshore Engineering',
  description: 'The definitive, research-backed hub for CTOs evaluating nearshore LATAM engineering, AI-driven hiring, and vendor choices.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main className="pt-8">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
