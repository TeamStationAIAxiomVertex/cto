import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Tooltip from '@/components/Tooltip';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Award, Briefcase, Handshake } from 'lucide-react';

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
        <Link href="/">Home</Link> / <Link href="/case-studies">Case Studies</Link> / {data.clientName}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-8">
        <article className="lg:col-span-2">
          <header className="mb-8">
            <span className="badge mb-4">{data.industry}</span>
            <h1 className="h1 mt-0">{data.title}</h1>
            <p className="lead">{data.description}</p>
          </header>
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </article>

        <aside className="lg:col-span-1 space-y-6 lg:sticky top-24 self-start">
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="icon" />
              <h3 className="h3 mt-0 mb-0">Client</h3>
            </div>
            <p className='font-semibold text-lg'>{data.clientName}</p>
          </div>
          <div className="card">
            <div className="flex items-center gap-3 mb-4">
              <Award className="icon" />
              <h3 className="h3 mt-0 mb-0">Key Outcome</h3>
            </div>
            <p className='font-semibold'>{data.summary}</p>
          </div>
           <div className="card">
             <div className="flex items-center gap-3 mb-4">
              <Handshake className="icon" />
              <h3 className="h3 mt-0 mb-0">Services Provided</h3>
            </div>
            <ul className='list-none p-0 m-0 text-sm space-y-2'>
                <li className='flex gap-2'><span className='text-accent-custom'>✓</span> AI-Powered Vetting</li>
                <li className='flex gap-2'><span className='text-accent-custom'>✓</span> Nearshore EOR & Payroll</li>
                <li className='flex gap-2'><span className='text-accent-custom'>✓</span> Secure Device & MDM</li>
                <li className='flex gap-2'><span className='text-accent-custom'>✓</span> LATAM Office Network</li>
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
