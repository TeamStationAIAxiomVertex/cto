
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import Footer from '@/components/Footer';
import AppProviders from '@/providers/app-providers';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cto.teamstation.dev'),
  alternates: {
    canonical: 'https://teamstation.dev/cto',
    languages: {
      'en-US': 'https://cto.teamstation.dev', // hreflang declaration
    },
  },
  title: 'Nearshore Software Development: The CTO Playbook | TeamStation AI',
  description:
    'Audit-ready compliance, cognitive AI vetting, and daylight overlap. The CTO Playbook delivers measurable outcomes so you ship faster with predictable TCO.',
  openGraph: {
    title: 'Nearshore Software Development: The CTO Playbook | TeamStation AI',
    description:
      'Evidence-driven nearshore teams with secure devices, EOR compliance, and bias-free hiring powered by Axiom Cortex™ AI.',
    url: 'https://cto.teamstation.dev',
    siteName: 'TeamStation AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TeamStation AI – Nearshore IT Co-Pilot',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nearshore Software Development: The CTO Playbook',
    description:
      'The integrated platform for talent, security, and compliance. Built for CTOs, trusted by CFOs.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#3F83F8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://picsum.photos" />

        {/* US Geo-targeting for SEO */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />

        {/* Hreflang signal */}
        <link rel="alternate" href="https://cto.teamstation.dev" hrefLang="en-US" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TeamStation AI",
              "url": "https://teamstation.dev",
              "logo": "https://teamstation.dev/apple-touch-icon.png",
              "sameAs": [
                "https://cto.teamstation.dev",
                "https://www.linkedin.com/company/teamstation"
              ],
              "subOrganization": {
                "@type": "Organization",
                "name": "TeamStation AI — CTO Playbook",
                "url": "https://cto.teamstation.dev"
              }
            })
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
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
