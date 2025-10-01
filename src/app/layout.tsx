
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
  // ✅ U.S. Geo Targeting + Hreflang
  alternates: {
    canonical: 'https://teamstation.dev/cto',
    languages: {
      'en-US': 'https://cto.teamstation.dev',
    },
  },
  other: {
    'geo.region': 'US',
    'geo.placename': 'United States',
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
        
        {/* Organization & Website Schema */}
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
                "https://teamstation.dev",
                "https://cto.teamstation.dev",
                "https://scholar.google.com/citations?user=aNol-ycAAAAJ&hl=en",
                "https://www.linkedin.com/company/teamstation"
              ]
            })
          }}
        />
         <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                "url": "https://cto.teamstation.dev",
                "name": "TeamStation AI CTO Playbook",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://cto.teamstation.dev/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
            })
          }}
        />
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
