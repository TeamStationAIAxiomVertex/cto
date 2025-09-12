import Link from 'next/link';
import { playbookData } from '@/lib/data';

export default function PlaybookHub() {
  return (
    <main className="container">
      <header className="text-center my-8">
        <h1 className="h1">The CTO Playbook</h1>
        <p className="lead max-w-2xl mx-auto">
          Pillars to build high-performance nearshore teams. A collection of research-backed guides for CTOs evaluating LATAM engineering, AI-driven hiring, and modern security practices.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {playbookData.map(post => (
          <Link key={post.slug} href={`/playbook/${post.slug}/`} className="card hover:bg-surface-2 transition-colors">
            <h3 className="h3 mt-0">{post.title}</h3>
            <p className="text-mute mt-1 text-sm">{post.description}</p>
            <div className="mt-4 text-sm font-semibold text-accent-custom">Read Chapter →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
