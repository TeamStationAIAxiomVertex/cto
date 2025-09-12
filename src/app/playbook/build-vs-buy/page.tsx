import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function BuildVsBuyPage() {
  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/playbook">CTO Playbook</Link> / Build vs. Buy
      </div>
      <h1 className="h1">Build vs. Buy: A Framework for Scaling Your Team</h1>
      <p className="lead">
        Should you build a nearshore operation from scratch or "buy" into an integrated platform? This playbook models the trade-offs in terms of cost, speed, and risk.
      </p>

      <div className="section my-12">
        <h2 className="h2 mt-0">The True Cost of "Building" a Nearshore Operation</h2>
        <p className="lead" style={{fontSize: '1rem', marginBottom: '1rem'}}>
          Building an in-house team in a new region involves far more than just salaries. These are the hidden costs—the "gotchas" that sink budgets and timelines. See our <Link href="/comparisons">vendor comparison</Link> for how this plays out with specific providers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
                <h3 className="h3 mt-0">Direct & Indirect Costs</h3>
                <ul className="list-none p-0 m-0 text-sm space-y-2">
                    <li className="flex items-start gap-2"><XCircle className="text-warn-custom flex-shrink-0 mt-1" size={16} /><span>Recruitment fees or internal recruiter salaries.</span></li>
                    <li className="flex items-start gap-2"><XCircle className="text-warn-custom flex-shrink-0 mt-1" size={16} /><span>Legal fees for setting up a local entity.</span></li>
                    <li className="flex items-start gap-2"><XCircle className="text-warn-custom flex-shrink-0 mt-1" size={16} /><span>HR and payroll administration costs.</span></li>
                    <li className="flex items-start gap-2"><XCircle className="text-warn-custom flex-shrink-0 mt-1" size={16} /><span>Hardware procurement and IT setup.</span></li>
                    <li className="flex items-start gap-2"><XCircle className="text-warn-custom flex-shrink-0 mt-1" size={16} /><span>Office space and associated overhead.</span></li>
                     <li className="flex items-start gap-2"><XCircle className="text-warn-custom flex-shrink-0 mt-1" size={16} /><span>Time spent by your existing team on interviewing and onboarding.</span></li>
                </ul>
            </div>
             <div className="card">
                <h3 className="h3 mt-0">Risks & Liabilities</h3>
                <ul className="list-none p-0 m-0 text-sm space-y-2">
                    <li className="flex items-start gap-2"><XCircle className="text-warn-custom flex-shrink-0 mt-1" size={16} /><span>Compliance risk with local labor laws.</span></li>
                    <li className="flex items-start gap-2"><XCircle className="text-warn-custom flex-shrink-0 mt-1" size={16} /><span>High cost of a mis-hire (often 6-12 months of salary).</span></li>
                    <li className="flex items-start gap-2"><XCircle className="text-warn-custom flex-shrink-0 mt-1" size={16} /><span>Security risk from unmanaged devices.</span></li>
                    <li className="flex items-start gap-2"><XCircle className="text-warn-custom flex-shrink-0 mt-1" size={16} /><span>Slow time-to-market as you build the team.</span></li>
                </ul>
            </div>
        </div>
      </div>

       <div className="section my-12">
        <h2 className="h2 mt-0">The Value of "Buying" into a Nearshore Co-Pilot</h2>
        <p className="lead" style={{fontSize: '1rem', marginBottom: '1rem'}}>
          Partnering with TeamStation AI abstracts away the complexity and risk, allowing you to focus on building your product. Our <Link href="/process">process</Link> is engineered for this.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card">
                <h3 className="h3 mt-0">What You Get</h3>
                <ul className="list-none p-0 m-0 text-sm space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="text-accent-custom flex-shrink-0 mt-1" size={16} /><span>Access to a 2.6M+ talent graph, vetted by cognitive AI.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-accent-custom flex-shrink-0 mt-1" size={16} /><span>One simple, all-inclusive monthly rate.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-accent-custom flex-shrink-0 mt-1" size={16} /><span>EOR, payroll, and local compliance handled for you.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-accent-custom flex-shrink-0 mt-1" size={16} /><span>Secure, MDM-managed devices for all team members.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-accent-custom flex-shrink-0 mt-1" size={16} /><span>Cyber & E&O insurance included.</span></li>
                     <li className="flex items-start gap-2"><CheckCircle className="text-accent-custom flex-shrink-0 mt-1" size={16} /><span>Faster time-to-market (Time-to-Offer ≈ 9 days).</span></li>
                </ul>
            </div>
             <div className="card">
                <h3 className="h3 mt-0">Your Responsibilities</h3>
                <ul className="list-none p-0 m-0 text-sm space-y-2">
                    <li className="flex items-start gap-2"><CheckCircle className="text-accent-custom flex-shrink-0 mt-1" size={16} /><span>Define the role and technical requirements.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-accent-custom flex-shrink-0 mt-1" size={16} /><span>Conduct the final interviews from our curated shortlist.</span></li>
                    <li className="flex items-start gap-2"><CheckCircle className="text-accent-custom flex-shrink-0 mt-1" size={16} /><span>Manage the day-to-day work of your new team members.</span></li>
                </ul>
            </div>
        </div>
      </div>
      
      <div className="prose my-8">
        <h2 className="h2">The Verdict</h2>
        <p>
            For most companies, especially those in the growth stage, the "Build" model presents significant hidden costs, risks, and delays. Our analysis of the <Link href="/playbook/latam-economics">economics of nearshoring</Link> shows this clearly. The "Buy" model, offered by an integrated platform like TeamStation AI, provides a faster, safer, and more cost-effective path to scaling your engineering team. It allows you to leverage world-class talent without the operational headache of building a global HR and legal infrastructure from scratch.
        </p>
      </div>

       <div className="section my-8 text-center">
          <h2 className="h2 mt-0">Ready to Scale the Smart Way?</h2>
          <p className="lead" style={{marginBottom: '24px'}}>Let us handle the operations so you can focus on shipping product.</p>
          <Link href="/hire" className="cta">
            Book a Strategy Call
          </Link>
      </div>
    </main>
  );
}
