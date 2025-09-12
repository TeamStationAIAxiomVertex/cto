import Link from 'next/link';
import { playbookData } from '@/lib/data';

export default function PlaybookHub() {
  return (
    <>
      <h1 className="text-4xl font-bold text-accent-custom">The CTO Playbook</h1>
      <p className="text-lg mt-2 mb-8 text-mute">Pillars to build high-performance nearshore teams.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {playbookData.map(post => (
          <Link key={post.slug} href={`/playbook/${post.slug}/`} className="card p-6 hover:bg-surface-2 transition-colors">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-mute mt-1 text-sm">{post.description}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
