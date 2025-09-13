
import Link from 'next/link';
import { getAllPlaybookSlugs } from '@/lib/playbook';
import { getPlaybookBySlug } from '@/lib/playbook';
import { ArrowRight, BookOpen } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The CTO Playbook for Nearshore Software Development | TeamStation AI',
  description: 'The CTO Playbook: Deep-dive guides for building and scaling high-performance nearshore engineering teams in LATAM. Covering economics, security, and hiring.',
};

export default async function PlaybookHub() {
  const slugs = await getAllPlaybookSlugs();
  const posts = await Promise.all(slugs.map(slug => getPlaybookBySlug(slug)));

  // Manually define the order
  const orderedSlugs = [
    'nearshore-vs-offshore',
    'latam-economics',
    'build-vs-buy',
    'bias-free-technical-hiring-axiom-cortex',
    'security-compliance', // This now links to /trust
  ];

  const sortedPosts = posts.filter(p => p).sort((a, b) => {
    const aIndex = orderedSlugs.indexOf(a!.slug);
    const bIndex = orderedSlugs.indexOf(b!.slug);
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  });

  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <span>CTO Playbook</span>
      </div>
      <header className="text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">The CTO Playbook</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">A series of battle-tested, data-driven guides for building and scaling high-performance nearshore engineering teams. This is the strategic framework for de-risking your roadmap and out-maneuvering the competition.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedPosts.map(post => {
            if (!post) return null;
            // Handle the security-compliance case to link to /trust
            const href = post.slug === 'security-compliance' ? '/trust' : `/playbook/${post.slug}`;
            return (
              <Link key={post.slug} href={href} className="group flex flex-col rounded-lg border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">{post.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-4 flex-grow">{post.description}</p>
                <div className="mt-6 flex items-center text-sm font-semibold text-primary">Read Chapter <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
              </Link>
            );
        })}
      </div>
    </main>
  );
}
