
import Link from 'next/link';
import { getAllResearchSlugs, getResearchBySlug } from '@/lib/research';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Research Hub: The Science of Predictable Nearshore Results | TeamStation AI',
  description: 'Explore our peer-reviewed research on AI technical interviews, software engineering performance telemetry, and bias-free hiring for LATAM engineering teams.',
};

export default async function ResearchPage() {
  const slugs = await getAllResearchSlugs();
  const papers = await Promise.all(slugs.map(slug => getResearchBySlug(slug)));

  return (
    <main className="container max-w-4xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Research</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Our Research: The Science Behind Predictable Results</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We don't rely on buzzwords; we rely on evidence. Our platform is built on a foundation of peer-reviewed research to de-risk your most critical decisions around hiring, performance, and security.
        </p>
      </header>
      <div className="space-y-8">
        {papers.map(paper => {
          if (!paper) return null;
          return (
            <Link key={paper.slug} href={paper.href} className="group block rounded-lg border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50">
              <h2 className="text-2xl font-bold text-foreground group-hover:text-primary">{paper.title}</h2>
              <p className="mt-2 text-muted-foreground">{paper.description}</p>
              <div className="mt-4 flex items-center text-sm font-semibold text-primary">
                Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}

    
