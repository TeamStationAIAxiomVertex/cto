'use server';

import Link from 'next/link';
import { getAllResearchSlugs, getResearchBySlug } from '@/lib/research';
import { ArrowRight } from 'lucide-react';

export default async function ResearchPage() {
  const slugs = await getAllResearchSlugs();
  const papers = await Promise.all(slugs.map(slug => getResearchBySlug(slug)));

  return (
    <main className="container max-w-6xl py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Research</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Our Research</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
        We are a research-driven organization committed to advancing the science of talent evaluation and team performance. Our work is grounded in data, cognitive science, and a deep understanding of the modern software development lifecycle.
        </p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {papers.map(paper => (
          paper && (
            <Link key={paper.href} href={paper.href} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
              <h2 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{paper.title}</h2>
              <p className="mt-2 text-muted-foreground flex-grow">{paper.description}</p>
               <div className="mt-6 flex items-center text-sm font-semibold text-primary">Read Research <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
            </Link>
          )
        ))}
      </div>
    </main>
  );
}
