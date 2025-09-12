import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/case-studies', `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return (
        <main className="container" style={{ padding: '40px' }}>
            <h1 className="h1">404 - Case Study Not Found</h1>
            <p className="lead">
                The requested case study could not be found.
            </p>
        </main>
    )
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = marked(content);

  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/case-studies">Case Studies</a> / {data.clientName}
      </div>
      <h1 className="h1">{data.title}</h1>
      <p className="lead">{data.description}</p>
      
      <div className="grid grid-3 my-8">
        <div className="card">
            <h4 className="h4 text-sm m-0 text-slate-400">Client</h4>
            <p className="m-0 font-semibold">{data.clientName}</p>
        </div>
        <div className="card">
            <h4 className="h4 text-sm m-0 text-slate-400">Industry</h4>
            <p className="m-0 font-semibold">{data.industry}</p>
        </div>
        <div className="card">
            <h4 className="h4 text-sm m-0 text-slate-400">Outcome</h4>
            <p className="m-0 font-semibold">{data.summary}</p>
        </div>
      </div>

      <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </main>
  );
}

export async function generateStaticParams() {
  const caseStudiesDir = path.join(process.cwd(), 'content/case-studies');
  const filenames = fs.readdirSync(caseStudiesDir);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}
