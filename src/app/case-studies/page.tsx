
import Link from 'next/link';
import { getAllCaseStudies } from '@/lib/case-studies';
import { ArrowRight } from 'lucide-react';

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Case Studies</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Evidence of Impact</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          From resolving critical SSO failures for enterprise clients to scaling monolithic platforms for 15,000+ users, our nearshore squads deliver results. Here’s the evidence.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {caseStudies.map((study) => (
          <Link href={`/case-studies/${study.slug}`} key={study.slug} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
            <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{study.clientName}</h3>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary my-3">{study.industry}</span>
            <p className="text-sm text-muted-foreground flex-grow">
              {study.summary}
            </p>
            <div className="mt-6 flex items-center text-sm font-semibold text-primary">Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
          </Link>
        ))}
      </div>
    </main>
  );
}
