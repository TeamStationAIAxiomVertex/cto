
import Link from 'next/link';
import type { Metadata } from 'next';
import ScholarlyArticleSchema from "@/components/ScholarlyArticleSchema";

const pageInfo = {
    slug: "framework-for-measuring-capacity",
    title: "Framework for Measuring Engineering Capacity | TeamStation AI Research",
    description: "Proposes a quantitative model for capacity planning in distributed engineering teams. Incorporates psychometric and economic factors for predictable delivery.",
    canonical: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5188490",
    summary: [
        "This paper addresses a fundamental challenge for CTOs: how to accurately measure and forecast the productive capacity of a distributed engineering team. Traditional headcount-based planning is flawed, as it fails to account for critical variables that impact real-world output.",
        "We propose a new quantitative model that incorporates not only team size but also psychometric data (from our AxiomCortex™ engine), operational friction (e.g., time-zone latency), and economic factors (like the 'Vacancy Tax'). The framework provides a more accurate, multi-dimensional view of team capacity, enabling leaders to make data-driven decisions about team composition, resource allocation, and strategic investments for predictable delivery."
    ],
    datePublished: "2025-06-20" // From original schema
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
      <main className="manual-page container max-w-4xl py-10">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / 
          <Link href="/research/hub" className="hover:text-foreground">Research</Link> / 
          <span>Measuring Engineering Capacity</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>{pageInfo.title.split(' | ')[0]}</h1>
          {pageInfo.summary.map((p, i) => <p key={i}>{p}</p>)}
          <a href={pageInfo.canonical} target="_blank" rel="noopener noreferrer" className="cta-button mt-4 inline-flex items-center">
            Read full paper on SSRN →
          </a>
          <nav className="mt-12 border-t border-border pt-6 text-sm">
            <h3 className="font-semibold text-foreground">Related Content:</h3>
            <ul className="list-none p-0 space-y-2">
              <li><Link href="/hire/by-role" className="text-primary hover:underline">Explore All Vetted Roles →</Link></li>
              <li><Link href="/research/hub" className="text-primary hover:underline">Review All Research & Whitepapers →</Link></li>
            </ul>
          </nav>
        </article>
      </main>
    </>
  );
}
