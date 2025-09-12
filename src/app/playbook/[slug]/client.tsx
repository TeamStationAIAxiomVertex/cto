
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { markdownToHtml } from '@/lib/markdown-parser';
import type { PlaybookPost } from '@/lib/playbook';

export default function PlaybookClientPage({ post }: { post: PlaybookPost }) {
  const [contentHtml, setContentHtml] = useState('');

  useEffect(() => {
    async function renderMarkdown() {
      if (post.content) {
        const html = await markdownToHtml(post.content);
        setContentHtml(html);
      }
    }
    renderMarkdown();
  }, [post.content]);

  return (
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook" className="hover:text-foreground">Playbook</Link> / <span>{post.title}</span>
      </div>

      <header className="my-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">{post.title}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{post.description}</p>
      </header>
      
      {contentHtml ? (
        <article className="prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      ) : (
        <div className="prose dark:prose-invert max-w-none">
            <p>Loading content...</p>
        </div>
      )}
    </main>
  );
}
