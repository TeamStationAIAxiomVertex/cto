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
        <a href="/">Home</a> / Case Studies
      </div>
      <h1 className="h1">Case Studies: Evidence of Impact</h1>
      <p className="lead">
        From resolving critical SSO failures for enterprise clients to scaling monolithic platforms for 15,000+ users, our nearshore squads deliver results. Here’s the evidence.
      </p>

      <div className="grid grid-2" style={{ marginTop: '24px' }}>
        {caseStudies.map((study) => (
          <div key={study.slug} className="card">
            <h3 className="h3" style={{ marginTop: 0 }}>{study.clientName}</h3>
            <span className="badge">{study.industry}</span>
            <p className="lead" style={{ fontSize: '1rem', margin: '12px 0' }}>
              {study.summary}
            </p>
            <Link href={`/case-studies/${study.slug}`}>Read Case Study →</Link>
          </div>
        ))}
      </div>
    </main>
  );
}
