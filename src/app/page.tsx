import Link from 'next/link';
import { playbookData } from '@/lib/data';

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-7xl px-6 py-12">
      <section className="py-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-accent-custom leading-tight">The CTO Playbook</h1>
        <p className="mt-4 text-lg text-mute max-w-3xl mx-auto">The definitive, research-backed hub for CTOs evaluating nearshore LATAM engineering, AI-driven hiring, and vendor choices.</p>
        <div className="mt-8">
            <a href="/hire" className="cta">Book a Strategy Call</a>
        </div>
      </section>
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center mb-8">Explore the Playbook</h2>
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
    </div>
  );
}
