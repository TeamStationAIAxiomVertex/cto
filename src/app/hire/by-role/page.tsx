
import Link from 'next/link';

const roleCategories = {
  "Data, AI & Quantum": [
    "Quantum Software Engineers", "Artificial Intelligence Engineers", "Data Scientists", 
    "Data Engineers", "DBA Engineers and Analysts", "Business Intelligence", "Data Testers"
  ],
  "Software": [
    "Architects", "Salesforce Architects", "Machine Learning", 
    "Full Stack", "Front End", "Back End"
  ],
  "Product": [
    "Product Managers", "Product Designers", "Product Owners", 
    "UX / UI Designers", "Scrum Masters", "Business Analysts"
  ],
  "Mobile": [
    "Architects", "Technical Leads", "Engineers", 
    "Testers", "Cross-Platform", "Designers"
  ],
  "DevOps": [
    "Evangelist, Engineers & Testers", "DevSec", "Cloud Engineers", "Release Managers"
  ],
  "Testing": [
    "QA Automation Engineers", "QA Manual Testers", "QA Lead", 
    "Test Lead", "SDET", "Usability Test Engineers"
  ]
};

export default function HireByRolePage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Role</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Find the Exact Expertise You Need</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            You wouldn't hire a cardiologist to perform brain surgery. Why settle for a generic "Full Stack Developer" when what you really need is a "DevSec Engineer" with cloud experience? We provide elite, pre-vetted LATAM talent matched to the specific competencies your business demands.
        </p>
      </header>

      <div className="space-y-16 my-12">
        {Object.entries(roleCategories).map(([category, roles]) => (
          <div key={category}>
            <h2 className="text-3xl font-bold text-foreground mb-6">{category}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {roles.map((role) => (
                <Link href="#" key={role} className="group block rounded-lg border bg-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
                  <h3 className="text-lg font-bold transition-colors group-hover:text-primary">{role}</h3>
                  <div className="mt-4 flex items-center justify-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    View Talent
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
