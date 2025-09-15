
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Header } from '@/components/Header';
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
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TeamStation AI',
    url: siteUrl,
    logo: `${siteUrl}/apple-touch-icon.png`,
    sameAs: [
      'https://www.linkedin.com/company/teamstation/',
      'https://twitter.com/teamstation',
    ],
    founder: [
        {
            "@type": "Person",
            "name": "Lonnie McRorey",
            "jobTitle": "Co-Founder & CEO",
            "alumniOf": "Temple University"
        },
        {
            "@type": "Person",
            "name": "Dan Diachenko",
            "jobTitle": "Co-Founder",
            "alumniOf": "Universidad Torcuato Di Tella"
        }
    ],
    knowsAbout: [
        "Nearshore Software Development",
        "IT Staff Augmentation",
        "Cognitive AI",
        "Talent Evaluation",
        "Software Engineering Performance Metrics",
        "Bias-Free Hiring"
    ],
     publication: [
      { "@type": "Book", "name": "Platforming the Nearshore IT Staff Augmentation Industry", "url": "https://www.amazon.com/dp/B0F4TF6TWD" },
      { "@type": "ScholarlyArticle", "name": "AxiomCortex™: Scientific R&D Report — Bias-Mitigated AI Evaluation for Nearshore Software Engineering Teams", "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5433397" },
      { "@type": "ScholarlyArticle", "name": "Heuristically Trained Neural AI for End-to-End Nearshore IT Staff Augmentation", "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5165433" },
      { "@type": "ScholarlyArticle", "name": "A Scientific Framework for Measuring Human Capacity in Nearshore Software Engineering", "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5188490" },
      { "@type": "ScholarlyArticle", "name": "Nearshore IT Talent Performance Metrics in the Age of AI", "url": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5253470" }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
