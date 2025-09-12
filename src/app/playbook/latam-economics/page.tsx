import { DollarSign, UserCheck, TrendingUp } from 'lucide-react';

export default function LatamEconomicsPage() {
    const factors = [
        {
            icon: <DollarSign size={24} className="text-green-400" />,
            title: 'Competitive Salary Bands',
            description: 'Salaries for senior engineers in LATAM are competitive, but the real saving comes from reduced overhead. Our model includes all costs—EOR, benefits, devices—in one transparent rate.',
        },
        {
            icon: <UserCheck size={24} className="text-blue-400" />,
            title: 'High Talent Density',
            description: 'Countries like Brazil, Mexico, Argentina, and Colombia have a high concentration of skilled engineers, particularly in modern technologies like React, Node.js, Python, and .NET.',
        },
        {
            icon: <TrendingUp size={24} className="text-amber-400" />,
            title: 'Total Cost of Ownership (TCO)',
            description: 'True cost isn\'t just salary. It\'s the cost of hiring, legal, compliance, and management. Our integrated platform significantly lowers TCO compared to direct hiring or traditional outsourcing.',
        },
    ];

  return (
    <main className="container">
      <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/playbook">CTO Playbook</a> / LATAM Economics
      </div>
      <h1 className="h1">LATAM Economics for CTOs: Beyond the Hourly Rate</h1>
      <p className="lead">
        Understanding the financial landscape of Latin America is key to building a successful nearshore team. This playbook provides a strategic overview of salary bands, productivity metrics, and the true cost of scaling.
      </p>

       <div className="section my-12">
        <h2 className="h2 mt-0">The Economic Landscape: Key Factors</h2>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {factors.map((item) => (
             <div className="card" key={item.title}>
                <div className="flex items-center gap-3">
                    {item.icon}
                    <h3 className="h3 m-0 text-lg">{item.title}</h3>
                </div>
                <p className="text-sm mt-2 text-mute">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose my-8">
        <h2 className="h2">A Look at Representative Salary Bands (Senior Engineer)</h2>
        <p>
            While rates vary, here's a general guide for fully-loaded annual costs for a senior full-stack engineer. These are estimates and can change based on demand, specialty, and location. TeamStation AI provides precise, real-time data based on our 2.6M+ talent graph.
        </p>
        <ul>
            <li><strong>Brazil:</strong> $75,000 - $110,000 USD</li>
            <li><strong>Mexico:</strong> $70,000 - $105,000 USD</li>
            <li><strong>Argentina:</strong> $65,000 - $95,000 USD (Note: Highly volatile due to economic conditions)</li>
            <li><strong>Colombia:</strong> $65,000 - $100,000 USD</li>
        </ul>
        <p>
            <strong>Important:</strong> These are not just salaries. These figures represent a closer approximation of Total Cost of Ownership when working with a partner like TeamStation AI, as they factor in benefits, taxes, and operational overhead that we manage for you. Our transparent pricing tiers often provide significant savings over these direct-hire estimates.
        </p>
      </div>

      <div className="prose my-8">
        <h2 className="h2">Productivity Metrics: The Real ROI</h2>
        <p>
            The most significant economic advantage of nearshore is not a lower hourly rate, but higher productivity due to time-zone alignment.
        </p>
        <ul>
            <li><strong>Reduced Latency:</strong> Real-time collaboration eliminates the 12-hour delays common with offshore teams, directly translating to faster project velocity.</li>
            <li><strong>Higher Fidelity Communication:</strong> Overlapping work hours mean fewer misunderstandings and less rework, which is a direct cost saving.</li>
            <li><strong>Lower Management Overhead:</strong> Managing a team in a similar time zone is simply easier and requires less managerial time, freeing up your leadership to focus on strategy.</li>
        </ul>
        <p>
            When you factor in the reduced friction and increased velocity, the effective cost per feature is often significantly lower with a nearshore team, even if the on-paper hourly rate is higher than some offshore alternatives.
        </p>      </div>

      <div className="section my-8 text-center">
          <h2 className="h2 mt-0">Ready for a Transparent Cost Model?</h2>
          <p className="lead" style={{marginBottom: '24px'}}>See our all-inclusive pricing tiers that simplify your budget and maximize your ROI.</p>
          <a href="/pricing" className="cta">
            Explore Our Pricing
          </a>
      </div>
    </main>
  );
}
