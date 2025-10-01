
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

const pageInfo = {
    slug: "axiom-cortex-scientific-report",
    title: "AxiomCortex™ Scientific Report | TeamStation AI Research",
    description: "Bias-free hiring through neuro-psychometric calculus. Cognitive AI vetting that predicts engineering success with 27% higher accuracy than legacy vendor methods.",
    canonical: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5433397",
    summary: [
        "This paper introduces the AxiomCortex™ engine, a proprietary cognitive AI framework designed to de-risk technical hiring by moving beyond traditional, biased evaluation methods. It details the application of neuro-psychometric calculus to analyze conversational data from structured interviews, generating a quantitative 'Cognitive Fingerprint' of a candidate's problem-solving abilities.",
        "The research demonstrates that by focusing on latent traits such as Architectural Instinct and Problem-Solving Agility, the AxiomCortex™ model achieves a 27% improvement in predictive accuracy for long-term success compared to legacy vendor assessments that rely on keyword matching and unstructured interviews. The paper provides a foundational look at the mathematical models and bias mitigation strategies that make this possible."
    ]
};

export const metadata: Metadata = {
  title: pageInfo.title,
  description: pageInfo.description,
  alternates: {
    canonical: pageInfo.canonical,
  },
  openGraph: {
    title: pageInfo.title,
    description: pageInfo.description,
    url: `https://cto.teamstation.dev/research/${pageInfo.slug}`,
    type: 'article',
    images: [
        {
          url: '/og-research.png',
          width: 1200,
          height: 630,
          alt: pageInfo.title,
        },
      ],
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
  "headline": "AxiomCortex™ Scientific Report",
  "author": { "@type": "Organization", "name": "TeamStation AI" },
  "publisher": { "@type": "Organization", "name": "Social Science Research Network (SSRN)" },
  "url": `https://cto.teamstation.dev/research/${pageInfo.slug}`,
  "sameAs": pageInfo.canonical,
  "abstract": pageInfo.description,
};

export default function ResearchPaperPage() {
  return (
    <>
      <JsonLd data={schema} />
      <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / 
          <Link href="/research/hub" className="hover:text-foreground">Research</Link> / 
          <span>AxiomCortex™ Report</span>
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
              <li><Link href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline">Playbook: Bias-Free Hiring</Link></li>
              <li><Link href="/case-studies" className="text-primary hover:underline">Case Studies</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
