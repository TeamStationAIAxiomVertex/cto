
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { comparisonPages, getComparisonPage } from '@/lib/comparisonPages';
import type { Metadata } from 'next';
import ComparisonProse from '@/components/ComparisonProse';
import Link from 'next/link'; // <-- CORRECTIVE ACTION: Import the Link component.

const VerdictTable = dynamic(() => import('@/components/VerdictTable'), { ssr: true });
// CORRECTIVE ACTION: Explicitly resolve the named export 'ProgrammaticContent'
const ProgrammaticContent = dynamic(() => import('@/components/ProgrammaticContent').then(mod => mod.ProgrammaticContent), { ssr: true });


// --- 1. NEXT.JS STATIC PARAMS GENERATION ---
export async function generateStaticParams() {
  return comparisonPages.map((p) => ({ vendor: p.slug }));
}

// --- 2. NEXT.JS METADATA GENERATION ---
export async function generateMetadata({ params }: { params: { vendor: string } }): Promise<Metadata> {
  const page = getComparisonPage(params.vendor);
  if (!page) {
    return {
      title: "Comparison Not Found",
      description: "This vendor comparison is not available.",
    }
  }
  return {
    title: page.pageSEO.title,
    description: page.pageSEO.description,
    alternates: {
      canonical: page.pageSEO.canonical,
    },
  };
}

// --- 3. THE PAGE COMPONENT ---
export default function VendorComparisonPage({ params }: { params: { vendor: string } }) {
  const page = getComparisonPage(params.vendor);

  if (!page) {
    notFound();
  }

  return (
    <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground">Home</Link> / 
            <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / 
            <span>{page.vendorName}</span>
        </div>
        
        <header className="my-12">
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                {page.h1}
            </h1>
            <p className="mt-4 text-lg text-muted-foreground" dangerouslySetInnerHTML={{ __html: page.intro }}/>
        </header>

        <VerdictTable scores={page.scores} />

        <div className="prose dark:prose-invert max-w-none mt-12">
            <ComparisonProse content={page.prose} />
        </div>
        
        {/* Placeholder for Further Reading or other components */}

    </main>
  );
}
