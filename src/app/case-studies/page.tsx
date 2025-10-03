
import Link from 'next/link';
import { getAllCaseStudies } from '../../lib/case-studies';
import { ArrowRight, Award, AlertTriangle, Shield, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import FurtherReading from '../../components/seo/FurtherReading';

export const metadata: Metadata = {
  title: 'Nearshore IT Staff Augmentation Case Studies',
  description: 'Evidence of impact. See how our elite nearshore LATAM teams solve critical business problems for our clients.',
};

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
         <nav className="mt-6 flex justify-center gap-4 text-sm">
            <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
            <Link href="/comparisons" className="text-primary hover:underline">Vendor Comparisons</Link>
            <Link href="/hire" className="text-primary hover:underline">Hire Talent</Link>
        </nav>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        {caseStudies.map((study) => (
          <div key={study.slug} className="group relative flex flex-col rounded-lg overflow-hidden border bg-card transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 shadow-lg">
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start gap-4">
                    <Award className="h-8 w-8 text-primary mt-1" />
                    <div>
                        <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{study.clientName}</h3>
                        <span className="text-xs font-medium text-muted-foreground">{study.industry}</span>
                    </div>
                </div>

                <div className="mt-4 space-y-4 flex-grow">
                  {study.challenge && (
                    <div>
                      <h4 className="font-semibold text-sm flex items-center gap-2 text-destructive">
                        <AlertTriangle className="h-4 w-4" />
                        Pain
                      </h4>
                      <p className="text-sm text-muted-foreground m-0">{study.challenge.split('\n')[0].replace(/^-/, '').trim()}</p>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-sm flex items-center gap-2 text-primary">
                        <Shield className="h-4 w-4" />
                        Solution
                    </h4>
                     <p className="text-sm text-foreground m-0">{study.summary}</p>
                  </div>
                  {study.outcomes && (
                    <div>
                       <h4 className="font-semibold text-sm flex items-center gap-2 text-green-500">
                        <CheckCircle className="h-4 w-4" />
                        Proof
                      </h4>
                       <p className="text-sm text-muted-foreground m-0">{study.outcomes.split('\n')[0].replace(/^-/, '').trim()}</p>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                    <Link href={`/case-studies/${study.slug}`} className="flex items-center text-sm font-semibold text-primary stretched-link">
                        Read Full Case Study <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
          </div>
        ))}
      </div>
      <FurtherReading />
    </main>
  );
}
