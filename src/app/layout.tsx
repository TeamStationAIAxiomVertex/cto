
import './globals.css';
import { Inter, Poppins, Source_Code_Pro } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Header } from '@/components/layout/Header';
import Footer from '@/components/Footer';
import AppProviders from '@/providers/app-providers';
import { teamStationAI } from '@/lib/schema';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cto.teamstation.dev'),
  title: {
    default: 'TeamStation AI',
    template: '%s | TeamStation AI',
  },
  description: 'Distributed Engineering OS and CTO Playbook for nearshore execution.',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico'
  }
};

export const viewport: Viewport = {
  themeColor: '#0ea5e9',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const deliveryAssuranceServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Nearshore Engineering Delivery Assurance',
    provider: {
      '@type': 'Organization',
      name: 'TeamStation AI',
      url: 'https://teamstation.dev',
    },
    areaServed: 'US',
    serviceType: 'Nearshore engineering assessment and delivery assurance',
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${poppins.variable} ${sourceCodePro.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(teamStationAI) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(deliveryAssuranceServiceSchema),
          }}
        />
      </head>
      <body className={`${inter.className} font-sans`}>
        <AppProviders>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </AppProviders>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-V34G5KN3W4"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-V34G5KN3W4');
          `}
        </Script>
      </body>
    </html>
  );
}
