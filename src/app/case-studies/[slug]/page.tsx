
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Briefcase, Award, CheckCircle } from 'lucide-react';
import { markdownToHtml } from '@/lib/markdown-parser';
import type { Metadata } from 'next';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = await getCaseStudyBySlug(params.slug);
  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  return {
    title: study.title,
    description: study.summary,
    alternates: {
      canonical: study.canonical,
    },
    openGraph: {
      title: study.title,
      description: study.summary,
      url: study.canonical,
      images: [
        {
          url: study.ogImage.src.url,
          width: 1200,
          height: 630,
          alt: study.title,
        },
      ],
    },
     twitter: {
      card: 'summary_large_image',
      title: study.title,
      description: study.summary,
      images: [study.ogImage.src.url],
    },
  };
}

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
                     <div className="relative h-96 w-full my-8 rounded-lg overflow-hidden border">
                        <Image 
                            src={study.ogImage.src.url}
                            alt={`Hero image for ${study.clientName} case study`}
                            fill
                            className="object-cover"
                            priority
                            data-ai-hint={study.ogImage.aiHint}
                        />
                    </div>
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
                
                {study.challenge && (
                    <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-lg">
                        <h3 className="text-xl font-bold flex items-center gap-3">The Challenge</h3>
                        <p className="mt-4 text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                )}
                
                {study.why && (
                     <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-lg">
                        <h3 className="text-xl font-bold flex items-center gap-3">Why TeamStation AI</h3>
                        <p className="mt-4 text-sm text-muted-foreground">{study.why}</p>
                    </div>
                )}

                {study.outcomes && (
                    <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-lg">
                        <h3 className="text-xl font-bold flex items-center gap-3">Outcomes</h3>
                         <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                            {study.outcomes.split('\n').map((item, index) => (
                                item.trim() && (
                                    <div key={index} className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 mt-1 shrink-0 text-primary"/>
                                        <span>{item.replace(/^-/, '').trim()}</span>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                )}

                <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
                    <h2 className="text-xl font-bold">Ready to Build Your Elite Team?</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Let TeamStation AI provide the talent, governance, and infrastructure you need to ship faster and more securely.
                    </p>
                    <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6 text-sm">
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
