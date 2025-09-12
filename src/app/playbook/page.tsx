import Link from 'next/link';
import { playbookData } from '@/lib/data';

export default function PlaybookHub() {
  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <header className="text-center mb-12">
        <h1 className="h1">The CTO Playbook</h1>
        <p className="lead max-w-3xl mx-auto">A series of deep-dive guides for building and scaling high-performance nearshore engineering teams.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {playbookData.map(post => (
          <Link key={post.slug} href={`/playbook/${post.slug}/`} className="card p-6 hover:bg-surface-2 transition-colors">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-mute mt-2 text-sm">{post.description}</p>
            <div className="mt-4 text-sm font-semibold text-accent-custom">Read Chapter →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
