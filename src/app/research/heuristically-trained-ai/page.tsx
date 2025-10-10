
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import ScholarlyArticleSchema from "@/components/ScholarlyArticleSchema";

const pageInfo = {
  slug: "heuristically-trained-ai",
  title: "Heuristically Trained AI Models for Technical Evaluation | TeamStation AI Research",
  description: "Explores heuristic-guided model training for evaluating software engineers. Balances statistical robustness with domain-specific interpretability.",
  canonical: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5165433",
  summary: [
    "Traditional AI models often lack transparency in candidate evaluation. This paper introduces heuristic training methods that combine domain expertise with machine learning.",
    "The approach ensures interpretability, fairness, and adaptability while preserving predictive strength — critical factors for CTOs seeking reliable AI-driven evaluation systems."
  ],
  datePublished: "2025-05-10" // From original schema
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

export default function ResearchPaperPage() {
  return (
    <>
      <ScholarlyArticleSchema
        title={pageInfo.title.split(' | ')[0]}
        description={pageInfo.description}
        url={`/research/${pageInfo.slug}`}
        authorName="TeamStation AI Research"
        datePublished={pageInfo.datePublished}
      />
      <main className="container max-w-4xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> /
          <Link href="/research/hub" className="hover:text-foreground">Research</Link> /
          <span>Heuristically Trained AI</span>
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
              <li><Link href="/playbook/build-vs-buy" className="text-primary hover:underline">Playbook: Build vs Buy</Link></li>
              <li><Link href="/case-studies" className="text-primary hover:underline">Case Studies</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
