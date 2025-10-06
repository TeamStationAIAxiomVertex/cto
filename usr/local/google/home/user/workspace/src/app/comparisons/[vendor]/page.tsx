
// src/app/comparisons/[vendor]/page.tsx

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { getComparisonData, getComparisonSlugs, generateFaqSchema, generateComparisonVerdictRows } from '@/lib/programmatic-data'; 
import Breadcrumbs from '@/components/Breadcrumbs';

const VerdictTable = dynamic(() => import('@/components/VerdictTable'), { ssr: true });
const ProgrammaticContent = dynamic(() => import('@/components/ProgrammaticContent'), { ssr: true });

export const revalidate = 3600;

// --- 1. NEXT.JS STATIC PARAMS GENERATION ---
export async function generateStaticParams() {
  const slugs = await getComparisonSlugs();
  return slugs.map(slug => ({ vendor: slug }));
}

// --- 2. DYNAMIC METADATA GENERATION (SEO) ---
export async function generateMetadata({ params }: { params: { vendor: string } }): Promise<Metadata> {
  const data = await getComparisonData(params.vendor);

  if (!data) {
    return {}; // Should be handled by notFound, but good practice
  }

  return {
    title: data.title, // Corrected access
    description: data.meta, // Corrected access
    alternates: {
        canonical: `https://cto.teamstation.dev/comparisons/${params.vendor}`,
    },
  };
}

// --- 3. MAIN PAGE COMPONENT ---
export default async function ComparisonPage({ params }: { params: { vendor: string } }) {
  const data = await getComparisonData(params.vendor);

  if (!data) {
    notFound();
  }

  const { competitorName, h1, faqs, internal_links, comparison_claims } = data;
  
  const verdictRows = generateComparisonVerdictRows(data);
  const faqSchema = generateFaqSchema(faqs);

  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[
            { label: 'Home', path: '/' },
            { label: 'Comparisons', path: '/comparisons' },
            { label: competitorName, path: `/comparisons/${params.vendor}` },
        ]} />

        <h1 className="text-4xl font-extrabold text-gray-900 mt-6 mb-4">{h1}</h1>
      
        <section className="prose lg:prose-xl max-w-none">
            <ProgrammaticContent slug={params.vendor} contentType="comparisons" /> 
        </section>

        <section className="mt-12">
            <VerdictTable 
                title={`TeamStation AI vs. ${competitorName}: Feature & Service-Level Comparison`}
                rows={verdictRows}
                competitorName={competitorName}
            />
        </section>

        <section className="mt-12 border-t pt-8">
            <h2 className="text-xl font-semibold mb-4">Explore Related Engineering Strategy Hubs</h2>
            <div className="flex flex-wrap gap-3">
                {internal_links.slice(0, 6).map((link, index) => (
                    <a key={index} href={link.url} className="px-3 py-1 bg-gray-100 text-sm text-gray-700 rounded-full hover:bg-blue-500 hover:text-white transition-colors">
                    {link.text}
                    </a>
                ))}
            </div>
      </section>

    </main>
  );
}
