
import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';
import { Header } from "../components/layout/Header";
import Footer from "../components/Footer";
import AppProviders from "../providers/app-providers";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'TeamStation AI',
  description: 'Nearshore IT Co-Pilot and CTO Playbook',
  manifest: '/manifest.webmanifest',
  themeColor: '#0F172A',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
