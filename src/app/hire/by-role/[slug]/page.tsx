
import Link from 'next/link';

const roleCategoryData: { [key: string]: { name: string; description: string; roles: string[] } } = {
  'data-ai-quantum': {
    name: 'Data, AI & Quantum',
    description: 'Hire top pre-vetted professionals focused on data, artificial intelligence, and quantum computing.',
    roles: [
      'Quantum Software Engineers', 'Artificial Intelligence Engineers', 'Data Scientists',
      'Data Engineers', 'DBA Engineers and Analysts', 'Business Intelligence', 'Data Testers'
    ]
  },
  'software-engineering': {
    name: 'Software Engineering',
    description: 'Hire top pre-vetted software engineers for any part of your stack.',
    roles: [
      'Architects', 'Salesforce Architects', 'Machine Learning',
      'Full Stack', 'Front End', 'Back End'
    ]
  },
  'product-management': {
    name: 'Product Management',
    description: 'Hire top pre-vetted professionals to drive your product strategy and execution.',
    roles: [
      'Product Managers', 'Product Designers', 'Product Owners',
      'UX / UI Designers', 'Scrum Masters', 'Business Analysts'
    ]
  },
  'mobile-development': {
    name: 'Mobile Development',
    description: 'Hire top pre-vetted developers to build world-class mobile experiences.',
    roles: [
      'Architects', 'Technical Leads', 'Engineers',
      'Testers', 'Cross-Platform', 'Designers'
    ]
  },
  'devops': {
    name: 'DevOps & Cloud Engineering',
    description: 'Hire top pre-vetted engineers to build and maintain your infrastructure.',
    roles: [
      'DevOps Evangelists, Engineers & Testers', 'DevSec Engineers', 'Cloud Engineers', 'Release Managers'
    ]
  },
  'quality-assurance': {
    name: 'Quality Assurance & Testing',
    description: 'Hire top pre-vetted QA and testing engineers to ensure your product is flawless.',
    roles: [
      'QA Automation Engineers', 'QA Manual Testers', 'QA Lead',
      'Test Lead', 'SDET', 'Usability Test Engineers'
    ]
  }
};


export default function RoleCategoryPage({ params }: { params: { slug: string } }) {
  const category = roleCategoryData[params.slug] || { name: 'Role Category', description: '', roles: [] };

  return (
    <main className="container max-w-5xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <Link href="/hire/by-role" className="hover:text-foreground">By Role</Link> / <span>{category.name}</span>
      </div>
      <header className="my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">{category.name}</h1>
        <p className="mt-4 text-lg text-muted-foreground">{category.description}</p>
      </header>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
        {category.roles.map(role => (
          <div key={role} className="rounded-lg border bg-card p-4 text-center">
            <h3 className="font-semibold text-foreground">{role}</h3>
          </div>
        ))}
      </div>

      <div className="prose dark:prose-invert max-w-none mx-auto my-16">
        <h2 className="text-center">Our Evaluation Approach for {category.name}</h2>
        <p>
            For roles in <strong>{category.name}</strong>, we understand that "good enough" is a recipe for disaster. You need engineers with not just the right technical skills, but the right cognitive abilities to solve complex problems under pressure. That's why our Axiom Cortex™ evaluation for this domain goes beyond simple coding tests.
        </p>
        <p>
            We blueprint the specific competencies required, from architectural instinct to problem-solving agility. We then run structured, evidence-based interviews designed to test these traits in scenarios relevant to the {category.name} field.
        </p>
        <ul>
            <li><strong>Competency Blueprinting:</strong> We define what "excellence" means for each role, from a Data Scientist's statistical rigor to a DevSec engineer's security-first mindset.</li>
            <li><strong>Scenario-Based Testing:</strong> We present candidates with real-world problems they would face in your environment, evaluating their thought process, not just their final answer.</li>
            <li><strong>Cognitive Trait Analysis:</strong> Our AI engine analyzes the interview to provide a deep, evidence-backed report on the candidate's core cognitive abilities, ensuring they are a true fit for your team.</li>
        </ul>
         <p>
           This means you get a candidate who is not only technically proficient but is also a proven problem-solver, a strong collaborator, and ready to contribute from day one. You're not just hiring a resume; you're hiring a pre-validated, high-impact team member.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to Hire Elite {category.name} Talent?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
          Stop sifting through unqualified resumes. Let us provide you with a shortlist of 2-3 elite, pre-vetted candidates ready to make an impact.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a No-Obligation Strategy Call</Link>
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  return Object.keys(roleCategoryData).map(slug => ({ slug }));
}


