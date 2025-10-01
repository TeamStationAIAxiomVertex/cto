
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen, ArrowRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/JsonLd';

const pageInfo = {
    slug: "heuristically-trained-ai",
    title: "Heuristically Trained AI | TeamStation AI Research",
    description: "Research on heuristic-driven AI models that replicate cognitive strategy patterns, cutting brute-force inefficiencies in evaluating engineering talent.",
    canonical: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5165433",
    summary: [
        "This research paper challenges the conventional 'brute-force' approach to AI in talent evaluation. Instead of relying solely on massive datasets, it introduces a framework for 'heuristically trained' AI models. These models are designed to emulate the adaptive cognitive strategies and mental shortcuts (heuristics) used by expert human interviewers.",
        "The study demonstrates that this approach leads to a more efficient and context-aware evaluation process. By teaching the AI to recognize patterns of reasoning rather than just keywords, the system achieves higher accuracy in predicting candidate success across a wide range of engineering disciplines, even with less initial data. This marks a significant step toward more nuanced and less data-intensive AI for human capital management."
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
  "headline": "Heuristically Trained Neural AI for End-to-End Nearshore IT Staff Augmentation",
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
              <li><Link href="/playbook/bias-free-technical-hiring-axiom-cortex" className="text-primary hover:underline">Playbook: Bias-Free Hiring</Link></li>
              <li><Link href="/case-studies" className="text-primary hover:underline">Case Studies</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
