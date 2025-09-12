import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Tooltip from '@/components/Tooltip';
import { notFound } from 'next/navigation';

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/case-studies', `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/case-studies">Case Studies</a> / {data.clientName}
      </div>
      
      <div className="case-study-layout">
        <article className="case-study-content">
          <header>
            <span className="badge">{data.industry}</span>
            <h1 className="h1">{data.title}</h1>
            <p className="lead">{data.description}</p>
          </header>
          <div className="prose" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>

        <aside className="case-study-sidebar">
          <div className="card">
            <h3 className="h3" style={{marginTop: 0}}>Client</h3>
            <p className='font-semibold'>{data.clientName}</p>
          </div>
          <div className="card">
            <h3 className="h3" style={{marginTop: 0}}>Key Outcome</h3>
            <p className='font-semibold'>{data.summary}</p>
          </div>
          <div className="card">
            <h3 className="h3" style={{marginTop: 0}}>Our Role</h3>
             <p className='font-semibold'>
                <Tooltip text="An integrated platform for CTOs who need to ship faster without sacrificing security or quality. We provide the talent, governance, and infrastructure.">
                    Nearshore IT Co-Pilot™
                </Tooltip>
             </p>
          </div>
           <div className="card">
            <h3 className="h3" style={{marginTop: 0}}>Services Provided</h3>
            <ul className='list-none p-0 m-0 text-sm'>
                <li>AI-Powered Vetting</li>
                <li>Nearshore EOR & Payroll</li>
                <li>Secure Device & MDM</li>
                <li>LATAM Office Network</li>
            </ul>
          </div>
        </aside>
      </div>
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
