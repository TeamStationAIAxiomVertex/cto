
import Link from 'next/link';
import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { teamStationAI } from '@/lib/schema';
import dynamic from 'next/dynamic';

const ClientJsonLd = dynamic(() => import('@/components/seo/JsonLd'), { ssr: false });

const papers = [
  {
    slug: "axiom-cortex-scientific-report",
    title: "Bias-Free Technical Hiring with AxiomCortex™",
    description: "Presents the AxiomCortex™ neuro-psychometric model for evaluating software engineers. Eliminates bias, improves predictive validity, and enables audit-ready hiring.",
    canonical: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5433397",
  },
  {
    slug: "heuristically-trained-ai",
    title: "Heuristically Trained AI Models for Technical Evaluation",
    description: "Explores heuristic-guided model training for evaluating software engineers. Balances statistical robustness with domain-specific interpretability.",
    canonical: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5165433",
  },
  {
    slug: "framework-for-measuring-capacity",
    title: "Framework for Measuring Engineering Capacity",
    description: "Proposes a quantitative model for capacity planning in distributed engineering teams. Incorporates psychometric and economic factors for predictable delivery.",
    canonical: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5188490",
  },
  {
    slug: "performance-metrics-in-ai-age",
    title: "Performance Metrics in the AI Age",
    description: "Redefines productivity and performance metrics for engineering teams using AI-assisted workflows. Proposes new measurement models aligned with modern delivery.",
    canonical: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5253470",
  }
];

export const metadata: Metadata = {
  title: "Research Hub | TeamStation AI",
  description: "Explore TeamStation AI’s peer-reviewed research on cognitive AI hiring, engineering capacity, and performance metrics. Published on SSRN and Google Scholar.",
  alternates: {
    canonical: "https://cto.teamstation.dev/research/hub",
  },
  openGraph: {
    title: "Research Hub | TeamStation AI",
    description: "Explore TeamStation AI’s peer-reviewed research on cognitive AI hiring, engineering capacity, and performance metrics. Published on SSRN and Google Scholar.",
    url: "https://cto.teamstation.dev/research/hub",
    type: "website",
    images: [{ url: "/og-research.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Hub | TeamStation AI",
    description: "Peer-reviewed research for CTOs: AI hiring, engineering capacity, and performance metrics.",
    images: ["/og-research.png"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "TeamStation AI Research Papers",
  "description": "Peer-reviewed and preprint research published by TeamStation AI and available on SSRN.",
  "provider": {
    "@type": "Organization",
    "name": teamStationAI.name,
    "url": teamStationAI.url
  },
  "itemListElement": papers.map((paper, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "ScholarlyArticle",
      "headline": paper.title,
      "url": `https://cto.teamstation.dev/research/${paper.slug}`,
      "sameAs": paper.canonical,
      "author": { "@type": "Organization", "name": teamStationAI.name },
      "publisher": { "@type": "Organization", "name": "Social Science Research Network (SSRN)" },
    }
  }))
};

export default function ResearchHubPage() {
  return (
    <>
      <ClientJsonLd data={schema} />
      <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / 
          <span>Research Hub</span>
        </div>
        <article className="prose dark:prose-invert max-w-none">
          <h1>Research Hub</h1>
          <p>
            TeamStation AI is the only nearshore technology partner publishing 
            peer-reviewed and preprint research on <strong>cognitive AI hiring</strong>, 
            <strong> engineering capacity</strong>, and <strong>performance metrics</strong>. 
            All papers are indexed on <a href="https://scholar.google.com/citations?user=aNol-ycAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">Google Scholar</a> 
            and published on <a href="https://papers.ssrn.com/" target="_blank" rel="noopener noreferrer">SSRN</a>.
          </p>
           <nav className="not-prose mt-6 mb-12 flex justify-center gap-4 text-sm">
                <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
                <Link href="/comparisons" className="text-primary hover:underline">Vendor Comparisons</Link>
                <Link href="/hire" className="text-primary hover:underline">Hire Talent</Link>
            </nav>

          <ul className="list-none p-0 space-y-6">
            {papers.map((paper) => (
              <li key={paper.slug} className="border rounded-lg p-6 hover:shadow-md transition">
                <h2 className="text-xl font-semibold">
                  <Link href={`/research/${paper.slug}`} className="hover:underline">
                    {paper.title}
                  </Link>
                </h2>
                <p className="mt-2 text-muted-foreground">{paper.description}</p>
                <div className="mt-4 flex gap-4">
                  <Link 
                    href={`/research/${paper.slug}`} 
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    <BookOpen className="mr-2 h-4 w-4" />
                    Read Summary
                  </Link>
                  <a 
                    href={paper.canonical} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline"
                  >
                    View on SSRN →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </article>
      </main>
    </>
  );
}
