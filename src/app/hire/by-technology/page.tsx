
import Link from 'next/link';

export default function HireByTechnologyPage() {
  const technologies = [
    'React', 'Node.js', 'Python', 'Java', '.NET', 'Go', 'Ruby on Rails', 'PHP', 'Vue.js', 'Angular', 'Swift', 'Kotlin'
  ];

  return (
    <main className="container">
       <div className="text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Technology</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire by Technology</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Build your team with engineers who have deep expertise in the specific technologies you use every day.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
        {technologies.map((tech) => (
          <Link href="#" key={tech} className="group block rounded-lg border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
            <h3 className="text-lg font-bold transition-colors group-hover:text-primary">{tech}</h3>
            <div className="mt-4 text-sm font-semibold text-primary">Find Engineers <span className="inline-block transition-transform group-hover:translate-x-1">→</span></div>
          </Link>
        ))}
      </div>
    </main>
  );
}
