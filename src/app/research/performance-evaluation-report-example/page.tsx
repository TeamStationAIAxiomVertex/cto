
import Link from 'next/link';
import type { Metadata } from 'next';
import { Check, Square, CheckSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sample Performance Evaluation Report | TeamStation AI',
  description: 'An example of our Day-30 Onboarding Check, a BARS-based diagnostic to ensure engineer success and client-partner alignment.',
};

const activities = [
    { title: "Property Navigator – Fix print layout", type: "UI fix", outcome: "Fixed print layout according to the customer’s feedback." },
    { title: "Property Navigator - Implement CSV Export", type: "Backend bugfix & UI fix", outcome: "Task is completed, being able to export search results." },
    { title: "Property Navigator – Missing sales record", type: "Procedure/process", outcome: "Stored procedure updated to include correct mappings and missing results." },
    { title: "Property Navigator – Missing data points", type: "Backend bugfix", outcome: "Modified stored procedure and backend code to properly map missing records in NY area." }
];

const indicators = [
    { category: "Access & Setup", score: 4, example: "Due to the project complexity sometimes required to repeat some of the items." },
    { category: "Clarity & Enablement", score: 5, example: "" },
    { category: "Early Wins & Delivery Rhythm", score: 4, example: "" },
    { category: "Team Integration & Communication", score: 4, example: "" }
];

const Rating = ({ score, value }: { score: number, value: number }) => (
    <div className="flex items-center gap-1">
        {score === value ? <CheckSquare className="h-4 w-4 text-primary" /> : <Square className="h-4 w-4 text-muted-foreground/50" />}
        <span>{value}</span>
    </div>
);

export default function PerformanceReportExamplePage() {
  return (
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / 
        <Link href="/research/hub" className="hover:text-foreground">Research</Link> / 
        <span>Sample Performance Report</span>
      </div>

      <div className="rounded-lg border bg-card shadow-lg p-8">
        <header className="text-center border-b border-border pb-6">
            <h1 className="text-3xl font-bold text-foreground">TeamStation × [Client] — Day-30 Onboarding Check (BARS)</h1>
            <p className="text-muted-foreground mt-2">This is an anonymized example of our 30-day diagnostic review. Its purpose is to capture what actually happened during onboarding and create a practical plan for the next 30 days.</p>
        </header>

        <section className="py-6 border-b border-border">
            <h2 className="font-bold text-lg text-primary">Who & When</h2>
            <div className="grid grid-cols-2 gap-4 text-sm mt-2">
                <p><strong>Engineer:</strong> Jorge V.</p>
                <p><strong>Role:</strong> Senior Full‑Stack .NET Developer</p>
                <p><strong>Location:</strong> Obregón, Mexico</p>
                <p><strong>Start Date:</strong> [YYYY-MM-DD]</p>
                <p><strong>Review Window:</strong> [Start Date] – [End Date]</p>
                <p><strong>Evaluator(s):</strong> [Client Technical Lead]</p>
            </div>
        </section>

        <section className="py-6 border-b border-border">
            <h2 className="font-bold text-lg text-primary">Activity Summary (Past 30 Days)</h2>
            <div className="space-y-4 mt-2">
                {activities.map((act, i) => (
                    <div key={i} className="p-4 rounded-lg bg-background">
                        <p className="font-semibold text-foreground">{i + 1}. {act.title}</p>
                        <p className="text-sm text-muted-foreground"><strong className="text-foreground">Type:</strong> {act.type}</p>
                        <p className="text-sm text-muted-foreground"><strong className="text-foreground">Outcome:</strong> {act.outcome}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="py-6 border-b border-border">
            <h2 className="font-bold text-lg text-primary">Onboarding Indicators (BARS)</h2>
             <div className="space-y-4 mt-2">
                {indicators.map(ind => (
                    <div key={ind.category} className="p-4 rounded-lg bg-background">
                        <p className="font-semibold text-foreground">{ind.category}</p>
                        <div className="flex items-center space-x-4 my-2">
                            <Rating score={ind.score} value={1} />
                            <Rating score={ind.score} value={2} />
                            <Rating score={ind.score} value={3} />
                            <Rating score={ind.score} value={4} />
                            <Rating score={ind.score} value={5} />
                        </div>
                        {ind.example && <p className="text-xs text-muted-foreground italic"><strong>Example:</strong> {ind.example}</p>}
                    </div>
                ))}
            </div>
        </section>

        <section className="py-6 border-b border-border grid md:grid-cols-2 gap-8">
            <div>
                <h2 className="font-bold text-lg text-primary">Blockers & Support</h2>
                <div className="mt-2 space-y-2 text-sm">
                    <p><strong className="text-foreground">Biggest blocker:</strong> The main blocker is the complexity of the project and the need to handle some tasks independently.</p>
                    <p><strong className="text-foreground">How to unlock impact:</strong> Deeper hands-on work with the code and exploration of the existing application would unlock greater impact.</p>
                </div>
            </div>
             <div>
                <h2 className="font-bold text-lg text-primary">Next 30 Days Focus</h2>
                <ul className="mt-2 list-disc list-inside text-sm space-y-1">
                    <li>Becoming able to complete entire tasks independently.</li>
                    <li>Gaining a solid understanding of the legacy project to independently identify details.</li>
                    <li>Developing a clear understanding of the database structure.</li>
                </ul>
            </div>
        </section>
        
        <section className="py-6">
            <h2 className="font-bold text-lg text-primary">Snapshot</h2>
            <div className="mt-2 text-sm">
                <p><strong className="text-foreground">Overall:</strong> Meets Expectations</p>
                <p><strong className="text-foreground">Top two strengths:</strong> 1) Ability to listen and understand context, 2) Technical skills.</p>
                <p className="text-xs text-muted-foreground mt-4"><strong>Evaluator:</strong> [Client Technical Lead], [Date]</p>
            </div>
        </section>

         <footer className="text-center border-t border-border pt-6 mt-6">
            <h3 className="font-bold text-foreground">Why We Use BARS For Onboarding</h3>
            <p className="text-xs text-muted-foreground mt-2 max-w-2xl mx-auto">BARS (behaviorally anchored rating scales) keep this fair and useful by tying each score to visible behaviors. For onboarding, that means we judge what actually happened—setup and access, clarity and enablement, early delivery, and team integration—with a quick example for context. That produces cleaner signal, less bias, and a practical next-30-days plan that increases Jorge’s value on your roadmap.</p>
            <p className="text-xs text-muted-foreground mt-4">Confidential — Client use only. © {new Date().getFullYear()} TeamStation AI™. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
