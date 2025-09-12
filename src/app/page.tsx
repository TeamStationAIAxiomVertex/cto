import Link from 'next/link';
import { playbookData } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="container">
      <section className="text-center my-12">
        <h1 className="h1">The CTO Playbook</h1>
        <p className="lead max-w-3xl mx-auto">
            The definitive, research-backed hub for CTOs evaluating nearshore LATAM engineering, AI-driven hiring, and vendor choices.
        </p>
        <div className="mt-8">
            <Link href="/hire" className="cta">Book a Strategy Call</Link>
        </div>
      </section>
      
      <div className="my-16">
        <h2 className="h2 text-center mb-8">Explore the Playbook</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {playbookData.map(post => (
            <Link key={post.slug} href={`/playbook/${post.slug}/`} className="card block p-6 hover:bg-surface-2 transition-colors">
                <h3 className="h3 mt-0">{post.title}</h3>
                <p className="text-mute mt-2 text-sm">{post.description}</p>
                 <div className="mt-4 text-sm font-semibold text-accent-custom">Read Chapter →</div>
            </Link>
            ))}
        </div>
      </div>
    </main>
  );
}
