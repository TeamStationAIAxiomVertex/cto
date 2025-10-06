
// src/app/playbook/[slug]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

// --- Placeholder Data/Utility Imports (MUST be created) ---
import { getPlaybookData, getPlaybookSlugs } from '@/lib/playbook-data'; 
import type { PlaybookFactPack } from '@/lib/playbook-data'; 

// --- Component Imports (Placeholders) ---
import Breadcrumbs from '@/components/Breadcrumbs'; 
// E-E-A-T Signal: Explicitly attribute the content to an expert
import PlaybookAuthor from '@/components/PlaybookAuthor'; 
import TableOfContents from '@/components/TableOfContents'; 

// The content renderer will handle MDX/HTML rendering for the NCLA v7 prose
const PlaybookContentRenderer = dynamic(() => import('@/components/PlaybookContentRenderer'), { ssr: true });

export const revalidate = 3600; // Revalidate content every 1 hour

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
    <main className="container mx-auto px-4 py-8 max-w-7xl">

      {/* JSON-LD Schema: Article or TechArticle Schema must be added here */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ /* Article Schema here */ }) }} 
      />


      <Breadcrumbs items={[
        { label: 'Home', path: '/' },
        { label: 'Playbook', path: '/playbook/hub' },
        { label: title, path: `/playbook/${params.slug}` },
      ]} />

      <article className="grid grid-cols-1 lg:grid-cols-4 gap-12 mt-6">
        
        {/* Left Column: Author, TOC, and Sticky Navigation */}
        <aside className="lg:col-span-1">
          <div className="lg:sticky lg:top-8 space-y-8">
             {/* E-E-A-T SIGNAL: Explicitly tie content to an expert author */}
             <PlaybookAuthor author={author} /> 
             <TableOfContents items={toc} />
          </div>
        </aside>

        {/* Right Column: Main Content */}
        <div className="lg:col-span-3">
          <header className="mb-8 border-b pb-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">{title}</h1>
            <p className="text-gray-500 mt-2">Published: <time dateTime={date}>{date}</time> • By: {author.name}</p>
          </header>

          {/* -------------------- CORE CONTENT (NCLA v7 PROSE) -------------------- */}
          <section className="prose prose-xl max-w-none">
            {/* Content is loaded via a dedicated renderer component, assumed to be NCLA v7-compliant */}
            <PlaybookContentRenderer slug={params.slug} /> 
          </section>

          {/* -------------------- INTERNAL LINK MESH (Related Chapters) -------------------- */}
          <section className="mt-16 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4">Further Reading & Related Strategy</h2>
            <div className="flex flex-wrap gap-3">
                {/* Internal links ensure link equity flows to other high-E-E-A-T pages */}
                {keywords.slice(0, 5).map((kw, index) => (
                    <a key={index} href={`/playbook?tag=${kw}`} className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                      {kw}
                    </a>
                ))}
            </div>
          </section>
        </div>

      </article>
      
    </main>
  );
}
