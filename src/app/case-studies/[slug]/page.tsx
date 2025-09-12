
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Target, Telescope, Shield, Briefcase, Award, Handshake } from 'lucide-react';
import { markdownToHtml } from '@/lib/markdown-parser';
import { Fragment } from 'react';

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = await getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const contentHtml = await markdownToHtml(study.content);

  return (
    <main className="container max-w-7xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link> / <span>{study.clientName}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content */}
            <div className="lg:col-span-8 space-y-12">
                <header>
                    <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                        {study.title}
                    </h1>
                </header>

                <article className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />

            </div>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-4 lg:sticky top-24 self-start space-y-8">
                <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-lg">
                    <h3 className="text-xl font-bold flex items-center gap-3"><Briefcase className="h-6 w-6 text-primary" />Client Snapshot</h3>
                    <div className="mt-4 space-y-3 text-sm">
                        <p><strong>Client:</strong> {study.clientName}</p>
                        <p><strong>Industry:</strong> {study.industry}</p>
                    </div>
                </div>
                 <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-lg">
                    <h3 className="text-xl font-bold flex items-center gap-3"><Award className="h-6 w-6 text-primary" />Key Summary</h3>
                     <p className="mt-4 text-sm text-muted-foreground">{study.summary}</p>
                </div>

                <div className="text-center rounded-lg bg-primary/10 p-8">
                    <h2 className="text-xl font-bold">Ready to Build Your Elite Team?</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Let TeamStation AI provide the talent, governance, and infrastructure you need to ship faster and more securely.
                    </p>
                    <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/YOUR_APPOINTMENT_SLOT_HERE" target="_blank" rel="noopener noreferrer" className="cta-button mt-6 text-sm">
                        Book a Strategy Call
                    </Link>
                </div>
            </aside>
        </div>
    </main>
  );
}

export async function generateStaticParams() {
  const studies = await getAllCaseStudies();
  return studies.map(study => ({
    slug: study.slug,
  }));
}
