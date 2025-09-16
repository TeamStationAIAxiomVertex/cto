
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import Footer from '@/components/Footer';
import AppProviders from '@/providers/app-providers';
import './globals.css';
import placeholderImages from '@/app/lib/placeholder-images.json';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

const siteName = 'TeamStation AI';
const siteDescription =
  'The definitive, research-backed hub for CTOs evaluating nearshore software development, LATAM engineering, AI-driven hiring, and vendor choices like Bairesdev alternatives.';
const siteUrl = 'https://cto.teamstation.dev';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Nearshore Software Development & Staff Augmentation`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  openGraph: {
    title: {
      default: `${siteName} | Nearshore Software Development & Staff Augmentation`,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    url: siteUrl,
    siteName,
    images: [
      {
        url: placeholderImages.metaCard.src.url,
        width: placeholderImages.metaCard.src.width,
        height: placeholderImages.metaCard.src.height,
        alt: placeholderImages.metaCard.alt,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: `${siteName} | Nearshore Software Development & Staff Augmentation`,
      template: `%s | ${siteName}`,
    },
    description: siteDescription,
    images: [placeholderImages.metaCard.src.url],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${poppins.variable} font-sans bg-background text-foreground`}>
        <AppProviders>
          <Header />
          <main id="main-content" className="pt-16">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
