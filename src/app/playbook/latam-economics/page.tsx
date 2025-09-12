import { DollarSign, UserCheck, TrendingUp } from 'lucide-react';
import Tooltip from '@/components/Tooltip';
import Link from 'next/link';

export default function LatamEconomicsPage() {
    const factors = [
        {
            icon: <DollarSign size={24} className="text-primary" />,
            title: 'Salary is Only the Start',
            description: 'Competitive salaries are the entry point, but the real savings come from abstracting away massive hidden costs in legal, compliance, and administrative overhead.',
        },
        {
            icon: <UserCheck size={24} className="text-primary" />,
            title: 'High Talent Density → Faster Hiring',
            description: 'High-concentration talent pools in Brazil, Mexico, and Colombia mean faster sourcing, reducing the "vacancy tax" you pay for every day a role stays open.',
        },
        {
            icon: <TrendingUp size={24} className="text-primary" />,
            title: 'Focus on Total Cost of Ownership (TCO)',
            description: 'True cost isn\'t just salary. It\'s the cost of hiring, legal, devices, and management. Our integrated platform significantly lowers TCO compared to DIY.',
        },
    ];

  return (
    <main className="container max-w-4xl py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/playbook" className="hover:text-foreground">CTO Playbook</Link> / <span>LATAM Economics</span>
      </div>
      <header className="my-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-5xl">LATAM Economics for CTOs: A CFO-Ready Framework</h1>
        <p className="lead max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
            Stop guessing with hourly rates. This is a playbook for modeling the Total Cost of Ownership (TCO) of a nearshore engineering team, accounting for the hidden risks and productivity multipliers.
        </p>
      </header>

      <section className="my-16">
        <h2 className="text-3xl font-bold text-center">The Three Levers of Nearshore Financial Strategy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {factors.map((item) => (
            <div className="rounded-lg border bg-card p-6" key={item.title}>
                <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm mt-3 text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <article className="prose dark:prose-invert max-w-none mx-auto my-12">
        <h2 className="text-center">Modeling the True Cost: A Tale of Two Budgets</h2>
        <p>
            An engineer’s salary is just the tip of the iceberg. A CTO who presents a plan based solely on salary comparisons is walking into a financial trap. Below, we model the true <Tooltip text="Total Cost of Ownership includes salary plus all 'hidden' costs like recruitment, legal, benefits, hardware, and administrative overhead.">TCO</Tooltip> for a senior engineer, comparing the risky <Link href="/playbook/build-vs-buy">"Do-It-Yourself"</Link> approach with TeamStation AI's predictable, all-in-one platform model.
        </p>
      </article>

      <div className="overflow-x-auto my-12">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-foreground">Cost Component</th>
                <th className='px-4 py-3 text-center font-semibold text-foreground'>DIY "Build" Model (Annual Estimate)</th>
                <th className='px-4 py-3 text-center font-semibold text-foreground'>TeamStation AI "Buy" Model</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-foreground">Senior Engineer Salary (Mexico)</td>
                <td className='px-4 py-3 text-center text-muted-foreground'>~$85,000</td>
                <td className='px-4 py-3 text-center font-semibold text-primary' rowSpan={7}>
                    All-inclusive in one rate<br/>
                    (e.g., L3 Senior @ $83,040/yr)<br/>
                    <Link href="/pricing" className="text-sm font-normal underline hover:no-underline">See all pricing tiers</Link>
                </td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-foreground">Recruitment & Agency Fees (15-20%)</td>
                <td className='px-4 py-3 text-center text-yellow-400'>~$17,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-foreground">Legal, <Tooltip text="Employer of Record: A third-party organization that legally employs workers on behalf of another company, handling payroll, taxes, and compliance.">EOR</Tooltip> & Payroll Admin</td>
                <td className='px-4 py-3 text-center text-yellow-400'>~$12,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-foreground">Hardware, <Tooltip text="Mobile Device Management: Software to secure, monitor, and manage devices like laptops.">MDM</Tooltip> & Security Tools</td>
                <td className='px-4 py-3 text-center text-yellow-400'>~$3,500</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-foreground">Benefits & Statutory Costs (~20%)</td>
                <td className='px-4 py-3 text-center text-yellow-400'>~$17,000</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-3 font-medium text-foreground">Management & HR Overhead</td>
                <td className='px-4 py-3 text-center text-yellow-400'>~$5,000</td>
              </tr>
              <tr className='border-t-2 bg-card'>
                <td className='px-4 py-4 font-bold text-foreground'>True TCO (Estimated)</td>
                <td className='px-4 py-4 text-center font-bold text-2xl text-red-400'>~$139,500</td>
                <td className='px-4 py-4 text-center font-bold text-2xl text-green-400'>~$83,040</td>
              </tr>
            </tbody>
          </table>
          <p className='text-xs text-muted-foreground text-center mt-2'>Estimates are for illustrative purposes. Actual costs vary by country and role complexity.</p>
        </div>


      <div className="prose dark:prose-invert max-w-none mx-auto my-8">
        <h2 className="text-center">The "Vacancy Tax": How Slow Hiring Burns Your Budget</h2>
        <p>
            Beyond direct costs, there's a powerful hidden cost: the value you lose every day a critical role sits empty. We call this the Vacancy Tax. Faster, more accurate hiring doesn't just save time; it pulls future revenue forward.
        </p>
        <div className="text-center my-6 bg-card border p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className='font-semibold text-foreground'>Example: The Cost of a 36-Day Delay</h3>
            <p className="font-mono text-lg md:text-xl text-muted-foreground mt-2">
                (36 days saved / 365) * $1,000,000 ARR = <span className="font-bold text-green-400">$98,630</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">ARR pulled forward by hiring in 9 days vs. the industry average of 45.</p>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none mx-auto my-12">
        <h2 className="text-center">Productivity: The Ultimate Economic Lever</h2>
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

      <div className="text-center rounded-lg bg-primary/10 p-8">
          <h2 className="text-2xl font-bold">Ready for a Transparent, Predictable Cost Model?</h2>
          <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">See our all-inclusive pricing tiers that eliminate hidden costs and simplify your budget.
          </p>
          <Link href="/pricing" className="cta-button mt-6">
            Explore Our Pricing
          </Link>
      </div>
    </main>
  );
}
