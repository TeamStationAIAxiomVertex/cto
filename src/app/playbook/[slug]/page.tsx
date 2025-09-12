import { playbookData } from '@/lib/data';
import { markdownToHtml } from '@/lib/markdown-parser';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

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
    title: postData.title,
    description: postData.description,
  };
}

export default async function PlaybookPost({ params }: { params: { slug: string } }) {
  const postData = await getPostData(params.slug);
  if (!postData) {
    notFound();
  }

  return (
    <article className="prose prose-lg mx-auto">
      <h1>{postData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
}