
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

const pageInfo = {
    slug: "performance-metrics-in-ai-age",
    title: "Performance Metrics in the AI Age | TeamStation AI Research",
    description: "Defines new KPIs for measuring engineering performance under AI-augmented workflows. Highlights reduction of latency tax and vacancy overhead in nearshore IT.",
    canonical: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5253470",
    summary: [
        "This paper argues that traditional software engineering metrics like 'lines of code' or 'story points' are obsolete in an AI-augmented world. It proposes a new set of Key Performance Indicators (KPIs) designed to measure what truly matters: business impact and system health.",
        "We introduce metrics such as 'Latency Tax Reduction' (quantifying the value of time-zone alignment) and 'Vacancy Overhead Mitigation' (measuring the financial impact of faster hiring). The framework provides CTOs with a new vocabulary to articulate engineering's value in financial terms, shifting the conversation from a cost center to a value driver."
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
  "headline": "Nearshore IT Talent Performance Metrics in the Age of AI",
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
          <span>Performance Metrics in AI Age</span>
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
              <li><Link href="/playbook/tco-model" className="text-primary hover:underline">Playbook: TCO Model</Link></li>
              <li><Link href="/case-studies" className="text-primary hover:underline">Case Studies</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
