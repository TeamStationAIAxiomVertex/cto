import { playbookData } from '@/lib/data';
import { markdownToHtml } from '@/lib/markdown-parser';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';

export async function generateStaticParams() {
  return playbookData.map(post => ({
    slug: post.slug,
  }));
}

async function getPostData(slug: string) {
    const post = playbookData.find(p => p.slug === slug);
    if (!post) return null;
    const contentHtml = await markdownToHtml(post.content || '');
    return { ...post, contentHtml };
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const postData = await getPostData(params.slug);
  if (!postData) return { title: 'Not Found' };
  return {
    title: `${postData.title} | CTO Playbook`,
    description: postData.description,
  };
}

export default async function PlaybookPost({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  if (!postData) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": postData.title,
    "description": postData.description,
    "author": {
      "@type": "Organization",
      "name": "TeamStation AI"
    },
    "publisher": {
      "@type": "Organization",
      "name": "TeamStation AI",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cto.teamstation.dev/logo.png"
      }
    },
    "datePublished": new Date().toISOString()
  };

  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
        <Script id={`schema-article-${params.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        
        <div className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook" className="hover:text-foreground">Playbook</Link> / <span>{postData.title}</span>
        </div>

        <header className="my-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">{postData.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{postData.description}</p>
        </header>
        
        <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-primary prose-a:text-primary prose-strong:text-foreground">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </main>
  );
}
