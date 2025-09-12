
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HireByTechnologyPage() {
  const technologies = [
    'React', 'Node.js', 'Python', 'Java', '.NET', 'Go', 'Ruby on Rails', 'PHP', 'Vue.js', 'Angular', 'Swift', 'Kotlin'
  ];

  return (
    <main className="container py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Technology</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Your Stack, Their Expertise</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Finding engineers who claim experience in a technology is easy. Finding engineers with proven, deeply-rooted expertise is hard. We provide talent scientifically vetted for their ability to deliver in the specific technologies you rely on.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
        {technologies.map((tech) => (
          <Link href="#" key={tech} className="group block rounded-lg border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
            <h3 className="text-lg font-bold transition-colors group-hover:text-primary">{tech}</h3>
            <div className="mt-4 flex items-center justify-center text-sm font-semibold text-primary">Find Engineers <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
          </Link>
        ))}
      </div>
    </main>
  );
}
