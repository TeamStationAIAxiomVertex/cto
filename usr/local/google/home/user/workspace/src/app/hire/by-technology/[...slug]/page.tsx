
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

// This is a placeholder component to restore the route.
// A more detailed implementation can be added later based on the specific slug.
export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  const slug = params.slug?.join('/') || '';
  const techName = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: `Hire ${techName} Developers`,
    description: `Information about hiring ${techName} developers.`,
  };
}

export default function HireByTechnologyDynamicPage({ params }: { params: { slug: string[] } }) {
  const slug = params.slug?.join('/') || '';
  const techName = slug.charAt(0).toUpperCase() + slug.slice(1);

  if (!slug) {
    notFound();
  }

  return (
    <main className="container py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / 
        <Link href="/hire" className="hover:text-foreground">Hire</Link> / 
        <Link href="/hire/by-technology" className="hover:text-foreground">By Technology</Link> / 
        <span>{techName}</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-4xl font-bold">Hire {techName} Developers</h1>
        <p className="mt-4 text-lg text-muted-foreground">This page is for hiring {techName} developers. The full content will be restored shortly.</p>
      </header>
    </main>
  );
}

// Optional: If you want to pre-generate some pages at build time
// export async function generateStaticParams() {
//   // Example: const techs = await getAllTechSlugs();
//   // return techs.map(tech => ({ slug: [tech.slug] }));
//   return [];
// }
