
import Link from 'next/link';

export default function HireByRolePage() {
  const roles = [
    { name: 'Frontend Engineer', slug: 'frontend' },
    { name: 'Backend Engineer', slug: 'backend' },
    { name: 'Full-Stack Engineer', slug: 'full-stack' },
    { name: 'DevOps Engineer', slug: 'devops' },
    { name: 'Data Scientist', slug: 'data-scientist' },
    { name: 'QA Engineer', slug: 'qa-engineer' },
    { name: 'AI/ML Engineer', slug: 'ai-ml-engineer' },
    { name: 'Cloud Engineer', slug: 'cloud-engineer' },
  ];

  return (
    <main className="container">
      <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Role</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire by Role</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Find elite, pre-vetted LATAM talent for your specific engineering needs. We provide dedicated engineers who integrate seamlessly with your team.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
        {roles.map((role) => (
          <Link href="#" key={role.slug} className="group block rounded-lg border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
            <h3 className="text-lg font-bold transition-colors group-hover:text-primary">{role.name}</h3>
            <div className="mt-4 text-sm font-semibold text-primary">View Talent <span className="inline-block transition-transform group-hover:translate-x-1">→</span></div>
          </Link>
        ))}
      </div>
    </main>
  );
}
