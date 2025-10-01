
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
  const faviconSvg = `
    <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="512" height="512" fill="#1A1A2E"/>
      <path d="M211 140H141V210H211V140Z" fill="#F0F8FF"/>
      <path d="M371 140H301V210H371V140Z" fill="#F0F8FF"/>
      <path d="M301 210H211V402C211 402 211 442 256 442C301 442 301 402 301 402V210Z" fill="#F0F8FF"/>
      <path d="M211 140H141V210H211V140Z" fill="url(#paint0_linear_1_2)"/>
      <path d.ts="M371 140H301V210H371V140Z" fill="url(#paint1_linear_1_2)"/>
      <path d="M301 210H211V402C211 402 211 442 256 442C301 442 301 402 301 402V210Z" fill="url(#paint2_linear_1_2)"/>
      <path d="M196 140H126V210H196V140Z" fill="#4C57D3"/>
      <path d="M356 140H286V210H356V140Z" fill="#4C57D3"/>
      <path d="M286 210H196V402C196 402 196 442 241 442C286 442 286 402 286 402V210Z" fill="#4C57D3"/>
      <path d="M181 140H111V210H181V140Z" fill="#8E99FF"/>
      <path d="M341 140H271V210H341V140Z" fill="#8E99FF"/>
      <path d="M271 210H181V402C181 402 181 442 226 442C271 442 271 402 271 402V210Z" fill="#8E99FF"/>
      <defs>
        <linearGradient id="paint0_linear_1_2" x1="176" y1="140" x2="176" y2="210" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2D3798"/>
          <stop offset="1" stop-color="#4C57D3"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_2" x1="336" y1="140" x2="336" y2="210" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2D3798"/>
          <stop offset="1" stop-color="#4C57D3"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1_2" x1="256" y1="210" x2="256" y2="442" gradientUnits="userSpaceOnUse">
          <stop stop-color="#2D3798"/>
          <stop offset="1" stop-color="#4C57D3"/>
        </linearGradient>
      </defs>
    </svg>
  `;
  const faviconDataUri = `data:image/svg+xml,${encodeURIComponent(faviconSvg)}`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#3F83F8" />
        <link rel="icon" href={faviconDataUri} type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
