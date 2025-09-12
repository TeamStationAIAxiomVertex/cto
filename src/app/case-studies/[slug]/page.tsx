
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Target, Telescope, Shield, Briefcase, Award, Handshake } from 'lucide-react';
import { markdownToHtml } from '@/lib/markdown-parser';
import { Fragment } from 'react';


function SectionCard({ title, content, icon }: { title: string, content: string, icon: React.ReactNode }) {
    // Split content by bullet points, assuming they start with '*' or '-'
    const items = content.split(/\s*[\*\-]\s+/).filter(item => item.trim() !== '');

    return (
        <div className="rounded-xl border bg-card text-card-foreground shadow-lg">
            <div className="flex items-center gap-4 border-b p-6">
                {icon}
                <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
            </div>
            <div className="p-6 grid md:grid-cols-2 gap-6">
                {items.map((item, index) => {
                    const [heading, ...rest] = item.split(/:\s+/);
                    const description = rest.join(': ');
                    return (
                        <div key={index} className="flex items-start gap-3">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <div>
                                <h3 className="font-semibold text-foreground">{heading.replace(/__/g, '')}</h3>
                                <p className="text-sm text-muted-foreground">{description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = await getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const sections = [
    { title: 'The Challenge', content: study.challenge, icon: <Target className="h-8 w-8 text-primary" /> },
    { title: 'Why TeamStation AI', content: study.why, icon: <Telescope className="h-8 w-8 text-primary" /> },
    { title: 'Outcomes', content: study.outcomes, icon: <Award className="h-8 w-8 text-primary" /> },
    { title: 'Product Insights', content: study.insights, icon: <Handshake className="h-8 w-8 text-primary" /> },
  ];

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

                <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />

                {sections.map(section => (
                    <SectionCard key={section.title} title={section.title} icon={section.icon} content={section.content} />
                ))}

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
                    <h3 className="text-xl font-bold flex items-center gap-3"><Award className="h-6 w-6 text-primary" />Key Outcomes</h3>
                    <ul className="mt-4 space-y-3">
                         {study.summary.split(', ').map((item, index) => (
                           <li key={index} className="flex items-start gap-3 text-sm">
                               <CheckCircle className="h-4 w-4 mt-1 shrink-0 text-primary" />
                               <span>{item}</span>
                           </li>
                         ))}
                    </ul>
                </div>

                <div className="text-center rounded-lg bg-primary/10 p-8">
                    <h2 className="text-xl font-bold">Ready to Build Your Elite Team?</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Let TeamStation AI provide the talent, governance, and infrastructure you need to ship faster and more securely.
                    </p>
                    <Link href="/hire" className="cta-button mt-6 text-sm">
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
