
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

const pageInfo = {
  slug: "axiom-cortex-scientific-report",
  title: "Bias-Free Technical Hiring with AxiomCortex™ | TeamStation AI Research",
  description: "Presents the AxiomCortex™ neuro-psychometric model for evaluating software engineers. Eliminates bias, improves predictive validity, and enables audit-ready hiring.",
  canonical: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5433397",
  summary: [
    "Hiring technical talent is often plagued by bias and unreliable signals. This paper introduces AxiomCortex™, a novel cognitive-science-based evaluation framework.",
    "It integrates structured interviews, psychometric calibration, and technical work samples to ensure reproducibility and fairness in hiring decisions. Results demonstrate measurable improvements in predictive validity and audit compliance."
  ]
};

export const metadata: Metadata = {
  title: pageInfo.title,
  description: pageInfo.description,
  alternates: { canonical: pageInfo.canonical },
  openGraph: {
    title: pageInfo.title,
    description: pageInfo.description,
    url: `https://cto.teamstation.dev/research/${pageInfo.slug}`,
    type: 'article',
    images: [{ url: '/og-research.png', width: 1200, height: 630, alt: pageInfo.title }],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageInfo.title,
    description: pageInfo.description,
    images: ['/og-research.png'],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  "headline": pageInfo.title,
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "Social Science Research Network (SSRN)" },
  "url": `https://cto.teamstation.dev/research/${pageInfo.slug}`,
  "sameAs": pageInfo.canonical,
  "abstract": pageInfo.description,
  "datePublished": "2025-07-15",
  "dateModified": "2025-07-15"
};

export default function ResearchPaperPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> /
          <Link href="/research/hub" className="hover:text-foreground">Research</Link> /
          <span>AxiomCortex™ Scientific Report</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{pageInfo.title.split(' | ')[0]}</h1>
          {pageInfo.summary.map((p, i) => <p key={i}>{p}</p>)}
          <a href={pageInfo.canonical} target="_blank" rel="noopener noreferrer" className="cta-button mt-4 inline-flex items-center">
            <BookOpen className="mr-2 h-4 w-4" />
            Read full paper on SSRN →
          </a>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3 className="font-semibold text-foreground">Explore More:</h3>
            <ul className="list-none p-0 space-y-2">
              <li><Link href="/research/hub" className="text-primary hover:underline">Research Hub</Link></li>
              <li><Link href="/playbook/nearshore-vs-offshore" className="text-primary hover:underline">Playbook: Nearshore vs Offshore</Link></li>
              <li><Link href="/case-studies" className="text-primary hover:underline">Case Studies</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
