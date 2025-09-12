
import { getPlaybookBySlug, getAllPlaybookSlugs } from '@/lib/playbook';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PlaybookClientPage from './client';

export async function generateStaticParams() {
  const slugs = await getAllPlaybookSlugs();
  return slugs.map(slug => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPlaybookBySlug(params.slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} | CTO Playbook`,
    description: post.description,
  };
}

export default async function PlaybookPost({ params }: { params: { slug: string } }) {
  const post = await getPlaybookBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return <PlaybookClientPage post={post} />;
}
