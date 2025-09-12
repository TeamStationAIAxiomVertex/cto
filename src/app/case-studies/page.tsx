import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function CaseStudiesPage() {
  const caseStudiesDir = path.join(process.cwd(), 'content/case-studies');
  const filenames = fs.readdirSync(caseStudiesDir);

  const caseStudies = filenames.map((filename) => {
    const filePath = path.join(caseStudiesDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug: data.slug,
      title: data.title,
      clientName: data.clientName,
      industry: data.industry,
      summary: data.summary,
    };
  });

  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / Case Studies
      </div>
      <header className="text-center my-12">
        <h1 className="h1">Case Studies: Evidence of Impact</h1>
        <p className="lead max-w-3xl mx-auto">
          From resolving critical SSO failures for enterprise clients to scaling monolithic platforms for 15,000+ users, our nearshore squads deliver results. Here’s the evidence.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
        {caseStudies.map((study) => (
          <Link href={`/case-studies/${study.slug}`} key={study.slug} className="card block p-8 hover:bg-surface-2 transition-colors group">
            <h3 className="h3 mt-0 group-hover:text-accent-custom transition-colors">{study.clientName}</h3>
            <span className="badge">{study.industry}</span>
            <p className="text-mute mt-4 mb-6">
              {study.summary}
            </p>
            <div className="font-semibold text-accent-custom">Read Case Study →</div>
          </Link>
        ))}
      </div>
    </main>
  );
}
