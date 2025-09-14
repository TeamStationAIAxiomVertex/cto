
import { getPlaybookBySlug, getAllPlaybookSlugs } from '@/lib/playbook';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { markdownToHtml } from '@/lib/markdown-parser';
import Link from 'next/link';

export async function generateStaticParams() {
  // This will be populated later when we create the articles
  return [];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPlaybookBySlug(params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} | CTO Playbook`,
    description: post.description,
  };
}

export default async function PlaybookArticlePage({ params }: { params: { slug: string } }) {
  const post = await getPlaybookBySlug(params.slug);
  if (!post) {
    notFound();
  }
  
  const contentHtml = await markdownToHtml(post.content || '');

  return (
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / 
        <Link href="/playbook" className="hover:text-foreground">CTO Playbook</Link> / 
        <Link href="/playbook/articles" className="hover:text-foreground">Articles</Link> / 
        <span>{post.title}</span>
      </div>

      <header className="my-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
      </header>
      
      <article className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />

    </main>
  );
}

    