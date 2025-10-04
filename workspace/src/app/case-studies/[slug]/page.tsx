
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/case-studies';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Briefcase, Award, CheckCircle, AlertTriangle, Shield } from 'lucide-react';
import type { Metadata } from 'next';
import SeoSafeImage from '@/components/seo/SeoSafeImage';
import FurtherReading from '@/components/seo/FurtherReading';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const study = await getCaseStudyBySlug(params.slug);
  if (!study) {
    return {
      title: 'Case Study Not Found',
    };
  }

  const title = (study.title ?? "Case Study").replace(/ \| TeamStation AI( Case Study)?/g, ' Case Study');
  const summary = study.summary ?? '';
  const fallbackSummary = `Case study: how TeamStation AI helped ${study.clientName ?? "a client"}${study.industry ? ` with ${study.industry} challenges` : ""}.`.trim();
  const description = summary.length > 160 ? fallbackSummary : (summary || fallbackSummary);
  
  const keywords = [
      study.clientName,
      study.industry,
      'nearshore',
      'staff augmentation',
      ...(study.techStack || []).map(t => t.name)
  ].filter(Boolean).join(', ');

  const imageUrl = study.ogImage?.src?.url;

  return {
    title: title,
    description: description,
    keywords: keywords,
    alternates: {
      canonical: study.canonical,
    },
    openGraph: {
      title: title,
      description: description,
      url: study.canonical,
      type: 'article',
      publishedTime: study.lastModified || new Date().toISOString(),
      authors: ['TeamStation AI'],
      images: imageUrl ? [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ] : [],
    },
     twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = await getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }
  
  const siteUrl = 'https://cto.teamstation.dev';
  const titleSafe = (study.title ?? "Case Study").replace(/ \| TeamStation AI( Case Study)?/g, " Case Study");
  const summarySafe = study.summary ?? '';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Case Studies',
        item: `${siteUrl}/case-studies`,
      },
       {
        '@type': 'ListItem',
        position: 3,
        name: titleSafe,
        item: `${siteUrl}/case-studies/${study.slug}`,
      },
    ],
  };

  const imageUrl = study.ogImage?.src?.url;
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': study.canonical ?? `${siteUrl}/case-studies/${study.slug}`,
    },
    headline: titleSafe,
    description: summarySafe,
    image: imageUrl ? [imageUrl] : [],
    author: {
        '@type': 'Organization',
        name: 'TeamStation AI',
        url: siteUrl,
    },
    publisher: {
        '@type': 'Organization',
        name: 'TeamStation AI',
        logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/apple-touch-icon.png`
        }
    },
    datePublished: study.lastModified || new Date().toISOString(),
  };

  const contentHtml = study.contentHtml || '';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="container max-w-7xl py-12">
          <div className="text-sm text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/case-studies" className="hover:text-foreground">Case Studies</Link> / <span>{study.clientName ?? titleSafe}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-8 space-y-12">
                  <header>
                      <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                          {titleSafe}
                      </h1>

                      {imageUrl ? (
                        <div className="relative h-96 w-full my-8 rounded-lg overflow-hidden border">
                          <SeoSafeImage
                              src={imageUrl}
                              alt={`Hero image for ${study.clientName ?? titleSafe} case study`}
                              fill
                              className="object-cover"
                              priority
                              data-ai-hint={study.ogImage?.aiHint}
                          />
                        </div>
                      ) : (
                        <div className="h-32 my-8 rounded-lg border bg-muted/30" />
                      )}
                  </header>

                  <article className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
                  <FurtherReading />

              </div>

              {/* Sticky Sidebar */}
              <aside className="lg:col-span-4 lg:sticky top-24 self-start space-y-8">
                  <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-lg">
                      <h3 className="text-xl font-bold flex items-center gap-3"><Briefcase className="h-6 w-6 text-primary" />Client Snapshot</h3>
                      <div className="mt-4 space-y-3 text-sm">
                          <p><strong>Client:</strong> {study.clientName ?? "—"}</p>
                          <p><strong>Industry:</strong> {study.industry ?? "—"}</p>
                      </div>
                  </div>
                  
                  {study.challenge && (
                      <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-lg">
                          <h3 className="text-xl font-bold flex items-center gap-3 text-destructive"><AlertTriangle className="h-6 w-6" />The Challenge</h3>
                          <p className="mt-4 text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                  )}
                  
                  <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-lg">
                      <h3 className="text-xl font-bold flex items-center gap-3 text-primary"><Shield className="h-6 w-6" />The Solution</h3>
                      <p className="mt-4 text-sm text-foreground">{summarySafe || "A comprehensive solution was implemented to address the client's challenges."}</p>
                  </div>

                  {study.outcomes && (study.outcomes.length ?? 0) > 0 && (
                      <div className="rounded-xl border bg-card text-card-foreground p-6 shadow-lg">
                          <h3 className="text-xl font-bold flex items-center gap-3 text-green-500"><CheckCircle className="h-6 w-6" />The Proof (Outcomes)</h3>
                          <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                              {(study.outcomes ?? '').split('\\n').filter(Boolean).map((item, index) => (
                                      <div key={index} className="flex items-start gap-2">
                                          <CheckCircle className="h-4 w-4 mt-1 shrink-0 text-green-500"/>
                                          <span>{item.replace(/^-/, '').trim()}</span>
                                      </div>
                              ))}
                          </div>
                      </div>
                  )}

                  <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
                      <h2 className="text-xl font-bold">Ready to Build Your Elite Team?</h2>
                      <p className="mt-2 text-sm text-muted-foreground">
                          Let TeamStation AI provide the talent, governance, and infrastructure you need to ship faster and more securely.
                      </p>
                      <Link
                        href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-button mt-6 text-sm"
                      >
                        Book a Strategy Call
                      </Link>
                  </div>
              </aside>
          </div>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  const studies = await getAllCaseStudies();
  return studies.map(study => ({
    slug: study.slug,
  }));
}
