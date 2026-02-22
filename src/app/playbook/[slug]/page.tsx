// src/app/playbook/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// --- Placeholder Data/Utility Imports (MUST be created) ---
import { getPlaybookData, getPlaybookSlugs, PlaybookFactPack } from '@/lib/playbook-data'; 

// --- Component Imports (Placeholders) ---
import Breadcrumbs from '@/components/Breadcrumbs'; 
// E-E-A-T Signal: Explicitly attribute the content to an expert
import PlaybookAuthor from '@/components/PlaybookAuthor'; 
import TableOfContents from '@/components/TableOfContents'; 
import CTOFieldManualBlock from '@/components/seo/CTOFieldManualBlock';

// The content renderer will handle MDX/HTML rendering for the NCLA v7 prose
const PlaybookContentRenderer = dynamic(() => import('@/components/PlaybookContentRenderer'), { ssr: true });

// --- 1. NEXT.JS STATIC PARAMS GENERATION ---
// Pre-render the core Playbook chapters at build time (ISR/SSG)
export async function generateStaticParams() {
  const slugs = await getPlaybookSlugs(); 
  return slugs.map(slug => ({ slug }));
}

// --- 2. DYNAMIC METADATA GENERATION (E-E-A-T) ---
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await getPlaybookData(params.slug);

  if (!data) {
    return {};
  }

  // Use a strong, authoritative title/meta for Pillar Content
  return {
    title: data.title, 
    description: data.meta,
    alternates: {
        canonical: `https://cto.teamstation.dev/playbook/${params.slug}`,
    },
    keywords: data.keywords.join(', '),
  };
}


// --- 3. MAIN PAGE COMPONENT ---

export default async function PlaybookChapterPage({ params }: { params: { slug: string } }) {
  const data = await getPlaybookData(params.slug);

  if (!data) {
    notFound(); 
  }

  const { title, date, author, toc, keywords } = data;
  
  // NOTE: This template is designed for long-form, high-E-E-A-T content (1200-5000 words).

  return (
    <main className="manual-page container mx-auto max-w-7xl px-4 py-8">

      {/* JSON-LD Schema: Article or TechArticle Schema must be added here */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ /* Article Schema here */ }) }} 
      />


      <Breadcrumbs items={[
        { label: 'Playbook', path: '/playbook' },
        { label: title, path: `/playbook/${params.slug}` },
      ]} />

      <article className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-10">
        
        {/* Left Column: Author, TOC, and Sticky Navigation */}
        <aside className="lg:col-span-1">
          <div className="space-y-6 lg:sticky lg:top-8">
             {/* E-E-A-T SIGNAL: Explicitly tie content to an expert author */}
             <div className="glass-panel rounded-2xl p-4">
               <PlaybookAuthor author={author} />
             </div>
             <div className="glass-panel rounded-2xl p-4">
               <TableOfContents items={toc} />
             </div>
          </div>
        </aside>

        {/* Right Column: Main Content */}
        <div className="lg:col-span-3">
          <header className="glass-panel hero-depth system-grid mb-8 rounded-2xl p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">CTO Playbook Chapter</p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight text-foreground md:text-5xl">{title}</h1>
            <p className="mt-3 text-sm text-muted-foreground">
              Published: <time dateTime={date}>{date}</time> • By: {author.name}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {keywords.slice(0, 4).map((kw, idx) => (
                <span key={`${kw}-${idx}`} className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  {kw}
                </span>
              ))}
            </div>
          </header>

          {/* -------------------- CORE CONTENT (NCLA v7 PROSE) -------------------- */}
          <section className="glass-panel rounded-2xl p-6 md:p-8">
            <div className="prose prose-xl max-w-none dark:prose-invert">
            {/* Content is loaded via a dedicated renderer component, assumed to be NCLA v7-compliant */}
              <PlaybookContentRenderer slug={params.slug} /> 
            </div>
          </section>

          {/* -------------------- INTERNAL LINK MESH (Related Chapters) -------------------- */}
          <section className="glass-panel mt-10 rounded-2xl p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Further Reading and Related Strategy</h2>
            <div className="flex flex-wrap gap-3">
                {/* Internal links ensure link equity flows to other high-E-E-A-T pages */}
                {keywords.slice(0, 5).map((kw, index) => (
                    <a key={index} href={`/playbook?tag=${kw}`} className="rounded-full border border-border/70 bg-background/70 px-3 py-1 text-sm text-foreground transition-colors hover:bg-primary hover:text-primary-foreground">
                      {kw}
                    </a>
                ))}
            </div>
          </section>

          <div className="mt-10">
            <CTOFieldManualBlock
              title={`CTO Playbook Field Manual Extension: ${title}`}
              focus={`operating doctrine and execution controls for playbook implementation`}
            />
          </div>
        </div>

      </article>
      
    </main>
  );
}
