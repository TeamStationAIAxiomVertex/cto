import Link from 'next/link';
import { playbookData } from '@/lib/data';

export default function HomePage() {
  return (
    <section className="py-12">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-accent-custom leading-tight">CTO Playbook</h1>
        <p className="mt-4 text-lg text-mute max-w-2xl mx-auto">The definitive, research-backed hub for CTOs evaluating nearshore LATAM engineering, AI-driven hiring, and vendor choices.</p>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {playbookData.map(post => (
          <Link key={post.slug} href={`/playbook/${post.slug}/`} className="card p-6 hover:bg-surface-2 transition-colors">
            <h3 className="text-xl font-semibold">{post.title}</h3>
            <p className="text-mute mt-1 text-sm">{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
