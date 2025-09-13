
import Link from 'next/link';
import { getAllCaseStudies } from '@/lib/case-studies';
import { ArrowRight, Award } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nearshore IT Staff Augmentation Case Studies | TeamStation AI',
  description: 'Evidence of Impact: See how our elite nearshore LATAM engineering teams solve critical problems, from scaling monoliths to resolving enterprise SSO failures.',
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover.text-foreground">Home</Link> / <span>Case Studies</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Evidence of Impact</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          From resolving critical SSO failures for enterprise clients to scaling monolithic platforms for 15,000+ users, our nearshore squads deliver results. Here’s the evidence.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {caseStudies.map((study) => (
          <div key={study.slug} className="group relative flex flex-col rounded-lg overflow-hidden border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4">
                    <Award className="h-8 w-8 text-primary" />
                    <div>
                        <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{study.clientName}</h3>
                        <span className="text-xs font-medium text-muted-foreground">{study.industry}</span>
                    </div>
                </div>
                <p className="text-sm text-muted-foreground flex-grow my-4">
                {study.summary}
                </p>

                {study.techStack && study.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.techStack.map((tech) => (
                      <Link key={tech.name} href={tech.link} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/20 hover:text-primary">
                        {tech.name}
                      </Link>
                    ))}
                  </div>
                )}

                <div className="mt-auto">
                    <Link href={`/case-studies/${study.slug}`} className="flex items-center text-sm font-semibold text-primary stretched-link">
                        Read Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
