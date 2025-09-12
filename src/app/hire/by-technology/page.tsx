import Link from 'next/link';

export default function HireByTechnologyPage() {
  const technologies = [
    'React', 'Node.js', 'Python', 'Java', '.NET', 'Go', 'Ruby on Rails', 'PHP', 'Vue.js', 'Angular', 'Swift', 'Kotlin'
  ];

  return (
    <main className="container">
       <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/hire">Hire</a> / By Technology
      </div>
      <h1 className="h1">Hire Nearshore Talent by Technology</h1>
      <p className="lead">
        Build your team with engineers who have deep expertise in the specific technologies you use every day.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-12">
        {technologies.map((tech) => (
          <div key={tech} className="card p-6 text-center hover:bg-surface-2 transition-colors">
            <h3 className="h3 mt-0 text-lg">{tech}</h3>
            {/* This would eventually link to /hire/[tech]-engineers-in-[city] */}
             <p className="text-accent-custom text-sm font-semibold mt-4">Find {tech} Engineers →</p>
          </div>
        ))}
      </div>
    </main>
  );
}
