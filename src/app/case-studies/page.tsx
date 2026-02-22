import Link from 'next/link';
import { getAllCaseStudies } from '../../lib/case-studies';
import { ArrowRight, Award, AlertTriangle, Shield, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import FurtherReading from '../../components/seo/FurtherReading';
import CTOFieldManualBlock from '../../components/seo/CTOFieldManualBlock';

export const metadata: Metadata = {
  title: 'Nearshore IT Staff Augmentation Case Studies',
  description: 'Evidence of impact. See how our elite nearshore LATAM teams solve critical business problems for our clients.',
};

export default async function CaseStudiesPage() {
  const caseStudies = await getAllCaseStudies();

  return (
    <main className="manual-page container py-10">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>Case Studies</span>
      </div>
      <header className="glass-panel hero-depth system-grid text-center my-8 rounded-2xl p-6 md:p-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">Evidence of Impact</h1>
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

      <section className="glass-panel my-12 rounded-2xl p-6 md:p-8">
        <h2 className="text-3xl font-bold text-center">How to Read Operational Proof</h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-7">
          <p>
            A case study is only useful when it maps directly to an operating constraint. Start with the context and
            identify the delivery risk that existed before intervention. Then inspect the solution pattern and confirm
            what changed in execution behavior, not just what tooling was added.
          </p>
          <p>
            Use this sequence with related pages so decision quality stays high. Review the{' '}
            <Link href="/playbook/hub" className="text-primary hover:underline">CTO playbook hub</Link>, then compare cost structure in the{' '}
            <Link href="/playbook/latam-economics" className="text-primary hover:underline">LATAM economics guide</Link>, and validate measurement logic in the{' '}
            <Link href="/research/framework-for-measuring-capacity" className="text-primary hover:underline">capacity framework</Link>.
          </p>
          <p>
            For cross domain navigation, connect evidence from this page with{' '}
            <a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">engineering.teamstation.dev</a>{' '}
            and{' '}
            <a href="https://research.teamstation.dev/research" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">research.teamstation.dev/research</a>.
            This keeps leadership evaluation focused on risk reduction, delivery control, and measurable outcomes.
          </p>
        </div>
      </section>

      <CTOFieldManualBlock
        title="CTO Field Manual for Evidence Based Vendor Decisions"
        focus="case study analysis, delivery risk diagnosis, and operating model proof"
      />
      <FurtherReading />
    </main>
  );
}
