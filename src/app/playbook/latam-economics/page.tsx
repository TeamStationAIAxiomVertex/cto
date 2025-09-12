import { DollarSign, UserCheck, TrendingUp } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

export default function LatamEconomicsPage() {
    const factors = [
        {
            icon: <DollarSign size={24} className="icon" />,
            title: 'Salary is Only the Start',
            description: 'Competitive salaries are the entry point, but the real savings come from abstracting away massive hidden costs in legal, compliance, and administrative overhead.',
        },
        {
            icon: <UserCheck size={24} className="icon" />,
            title: 'High Talent Density → Faster Hiring',
            description: 'High-concentration talent pools in Brazil, Mexico, and Colombia mean faster sourcing, reducing the "vacancy tax" you pay for every day a role stays open.',
        },
        {
            icon: <TrendingUp size={24} className="icon" />,
            title: 'Focus on Total Cost of Ownership (TCO)',
            description: 'True cost isn\'t just salary. It\'s the cost of hiring, legal, devices, and management. Our integrated platform significantly lowers TCO compared to DIY.',
        },
    ];

  return (
    <main className="container">
      <div className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/playbook">CTO Playbook</Link> / LATAM Economics
      </div>
      <header className="text-center my-8">
        <h1 className="h1">LATAM Economics for CTOs: A CFO-Ready Framework</h1>
        <p className="lead max-w-3xl mx-auto">
            Stop guessing with hourly rates. This is a playbook for modeling the Total Cost of Ownership (TCO) of a nearshore engineering team, accounting for the hidden risks and productivity multipliers.
        </p>
      </header>

      <div className="section my-12">
        <h2 className="h2 mt-0 text-center">The Three Levers of Nearshore Financial Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {factors.map((item) => (
            <div className="card p-6" key={item.title}>
                <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="h3 m-0 text-lg">{item.title}</h3>
                </div>
                <p className="text-sm mt-3 text-mute">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">Modeling the True Cost: A Tale of Two Budgets</h2>
        <p>
            An engineer’s salary is just the tip of the iceberg. A CTO who presents a plan based solely on salary comparisons is walking into a financial trap. Below, we model the true <Tooltip text="Total Cost of Ownership includes salary plus all 'hidden' costs like recruitment, legal, benefits, hardware, and administrative overhead.">TCO</Tooltip> for a senior engineer, comparing the risky <Link href="/playbook/build-vs-buy">"Do-It-Yourself"</Link> approach with TeamStation AI's predictable, all-in-one platform model.
        </p>
      </div>

      <div className="overflow-x-auto my-12">
          <table className="table">
            <thead>
              <tr>
                <th>Cost Component</th>
                <th className='text-center'>DIY "Build" Model (Annual Estimate)</th>
                <th className='text-center'>TeamStation AI "Buy" Model</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Senior Engineer Salary (Mexico)</td>
                <td className='text-center'>~$85,000</td>
                <td className='text-center font-semibold text-accent-custom' rowSpan={7}>
                    All-inclusive in one rate<br/>
                    (e.g., L3 Senior @ $83,040/yr)<br/>
                    <Link href="/pricing" className="text-sm font-normal underline hover:no-underline">See all pricing tiers</Link>
                </td>
              </tr>
              <tr>
                <td>Recruitment & Agency Fees (15-20%)</td>
                <td className='text-center text-warn-custom'>~$17,000</td>
              </tr>
              <tr>
                <td>Legal, <Tooltip text="Employer of Record: A third-party organization that legally employs workers on behalf of another company, handling payroll, taxes, and compliance.">EOR</Tooltip> & Payroll Admin</td>
                <td className='text-center text-warn-custom'>~$12,000</td>
              </tr>
              <tr>
                <td>Hardware, <Tooltip text="Mobile Device Management: Software to secure, monitor, and manage devices like laptops.">MDM</Tooltip> & Security Tools</td>
                <td className='text-center text-warn-custom'>~$3,500</td>
              </tr>
              <tr>
                <td>Benefits & Statutory Costs (~20%)</td>
                <td className='text-center text-warn-custom'>~$17,000</td>
              </tr>
              <tr>
                <td>Management & HR Overhead</td>
                <td className='text-center text-warn-custom'>~$5,000</td>
              </tr>
              <tr className='border-t-2 border-line bg-surface-1'>
                <td className='font-bold text-text'>True TCO (Estimated)</td>
                <td className='text-center font-bold text-2xl text-warn-custom'>~$139,500</td>
                <td className='text-center font-bold text-2xl text-accent-custom'>~$83,040</td>
              </tr>
            </tbody>
          </table>
          <p className='text-xs text-mute text-center mt-2'>Estimates are for illustrative purposes. Actual costs vary by country and role complexity.</p>
        </div>


      <div className="prose my-8">
        <h2 className="h2 text-center">The "Vacancy Tax": How Slow Hiring Burns Your Budget</h2>
        <p>
            Beyond direct costs, there's a powerful hidden cost: the value you lose every day a critical role sits empty. We call this the Vacancy Tax. Faster, more accurate hiring doesn't just save time; it pulls future revenue forward.
        </p>
        <div className="text-center mt-6 bg-surface-1 p-6 rounded-lg max-w-2xl mx-auto card">
            <h3 className='h3 mt-0'>Example: The Cost of a 36-Day Delay</h3>
            <p className="font-mono text-sm md:text-base">
                (36 days saved / 365) * $1,000,000 ARR = <span className="font-bold text-accent-custom">$98,630</span>
            </p>
            <p className="text-xs text-mute mt-1">ARR pulled forward by hiring in 9 days vs. the industry average of 45.</p>
        </div>
      </div>

      <div className="prose mx-auto my-12">
        <h2 className="h2 text-center">Productivity: The Ultimate Economic Lever</h2>
        <p>
            The final piece of the economic puzzle is productivity. <Link href="/playbook/nearshore-vs-offshore">Time-zone alignment</Link> is not a "nice-to-have"; it's a direct multiplier on output. A nearshore team operating in real-time with your U.S. engineers eliminates the communication lags that kill velocity in offshore models.
        </p>
        <ul>
            <li><strong>Reduced Latency:</strong> Real-time pairing and problem-solving cut down on blocked tasks and accelerate development cycles.</li>
            <li><strong>Higher Fidelity Communication:</strong> Fewer misunderstandings from asynchronous handoffs mean less rework and higher quality code.</li>
            <li><strong>Lower Management Overhead:</strong> Your leadership spends less time managing communication friction and more time on strategic work.</li>
        </ul>
        <p>
            When you present your budget, the story isn't just "we're saving money on salaries." It's "we are investing in a model that maximizes output per dollar by optimizing for TCO, hiring velocity, and real-time productivity."
        </p>
      </div>

      <div className="section my-8 text-center">
          <h2 className="h2 mt-0">Ready for a Transparent, Predictable Cost Model?</h2>
          <p className="lead max-w-2xl mx-auto" style={{marginBottom: '24px'}}>See our all-inclusive pricing tiers that eliminate hidden costs and simplify your budget.
          </p>
          <Link href="/pricing" className="cta">
            Explore Our Pricing
          </Link>
      </div>
    </main>
  );
}
