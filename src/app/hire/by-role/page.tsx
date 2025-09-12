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
       <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/hire">Hire</a> / By Role
      </div>
      <h1 className="h1">Hire Nearshore Talent by Role</h1>
      <p className="lead">
        Find elite, pre-vetted LATAM talent for your specific engineering needs. We provide dedicated engineers who integrate seamlessly with your team.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
        {roles.map((role) => (
          <div key={role.slug} className="card p-6 text-center hover:bg-surface-2 transition-colors">
            <h3 className="h3 mt-0 text-lg">{role.name}</h3>
            {/* This would eventually link to /roles/[role]/senior etc. */}
            <p className="text-accent-custom text-sm font-semibold mt-4">View Available Talent →</p>
          </div>
        ))}
      </div>
    </main>
  );
}
