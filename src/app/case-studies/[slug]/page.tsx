import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Award, Briefcase, Handshake, Target, CheckCircle, ShieldCheck, Rocket, BrainCircuit } from 'lucide-react';

// Helper to extract sections from markdown
const getSection = (content: string, title: string) => {
    const regex = new RegExp(`---[^]*?## ${title}\\n\\n(.*?)(?=\\n## |$)`, 's');
    const match = content.match(regex);
    if (!match) return null;

    const listItems = match[1].split('\n- ').filter(line => line.trim() !== '').map(line => {
      const cleanedLine = line.replace(/^-/, '').trim();
      // Handle nested items if any, for now just taking the main point
      const mainPoint = cleanedLine.split('\n')[0];
      const [strong, ...rest] = mainPoint.split(':** ');
      return {
        title: strong,
        description: rest.join(':** ')
      }
    });
    return listItems;
};


export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'content/case-studies', `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // This will be used for any remaining prose sections
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  const summaryPoints = data.summary.split(', ').map((point: string) => point.charAt(0).toUpperCase() + point.slice(1));
  const challenges = getSection(fileContents, 'The Challenge');
  const solutions = getSection(fileContents, 'Why TeamStation AI');
  const outcomes = getSection(fileContents, 'Outcomes');


  const SectionCard = ({ title, items, icon }: { title: string, items: any[] | null, icon: React.ReactNode }) => {
    if (!items) return null;
    return (
        <div className="my-12">
            <div className="flex items-center gap-3 mb-4">
                {icon}
                <h2 className="h2 m-0 text-2xl">{title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                    <div className="icon-card" key={index}>
                        <CheckCircle className="text-accent-custom mt-1 flex-shrink-0" />
                        <div>
                            <h3 className="h3 mt-0 text-base font-semibold">{item.title}</h3>
                            <p className="text-sm text-mute m-0">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
  }

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
          
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent.split('---')[0] }} />

          <SectionCard title="The Challenge" items={challenges} icon={<Target className="icon h-8 w-8" />} />
          <SectionCard title="The Solution" items={solutions} icon={<BrainCircuit className="icon h-8 w-8" />} />
          <SectionCard title="The Outcomes" items={outcomes} icon={<Rocket className="icon h-8 w-8" />} />
          
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: htmlContent.split('---').slice(4).join('---') }} />

        </article>

        <aside className="lg:col-span-1 space-y-6 lg:sticky top-24 self-start">
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="icon" />
              <h3 className="h3 mt-0 mb-0">Client</h3>
            </div>
            <p className='font-semibold text-lg'>{data.clientName}</p>
          </div>
          <div className="card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="icon" />
              <h3 className="h3 mt-0 mb-0">Key Outcomes</h3>
            </div>
            <ul className='list-none p-0 m-0 text-sm space-y-3'>
              {summaryPoints.map((point: string) => (
                <li key={point} className='flex gap-2 font-semibold'>
                  <span className='text-accent-custom'>✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
           <div className="card p-6">
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
