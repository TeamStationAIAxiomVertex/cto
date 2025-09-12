import { playbookData } from '@/lib/data';
import { markdownToHtml } from '@/lib/markdown-parser';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

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

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
        <div className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/playbook">Playbook</Link> / {postData.title}
        </div>
        <article className="prose prose-lg mx-auto mt-8">
            <h1>{postData.title}</h1>
            <p className="lead !my-2">{postData.description}</p>
            <hr className="my-8 border-line"/>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </div>
  );
}
