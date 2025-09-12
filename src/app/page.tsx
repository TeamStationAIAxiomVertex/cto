import Link from 'next/link';
import { playbookData } from '@/lib/data';

export default function HomePage() {
  return (
    <main>
      <section className="text-center py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-text leading-tight">
          The CTO Playbook for {' '}
          <span className="text-accent-custom">Nearshore Engineering</span>
        </h1>
        <p className="mt-4 text-lg text-mute max-w-3xl mx-auto">
          The definitive, research-backed hub for CTOs evaluating nearshore LATAM engineering, AI-driven hiring, and vendor choices. One platform to hire and run your team.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link href="/playbook" className="cta">
            Read the Playbook
          </Link>
          <Link href="/hire" className="cta" style={{backgroundColor: 'transparent', border: '1px solid hsl(var(--line))'}}>
            Book a Strategy Call
          </Link>
        </div>
      </section>

      <section className="py-12">
         <h2 className="text-3xl font-bold text-center mb-8">Playbook Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {playbookData.map(post => (
            <Link key={post.slug} href={`/playbook/${post.slug}/`} className="card hover:bg-surface-2 transition-colors">
              <h3 className="h3 mt-0">{post.title}</h3>
              <p className="text-mute mt-1 text-sm">{post.description}</p>
              <div className="mt-4 text-sm font-semibold text-accent-custom">Read Now →</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
