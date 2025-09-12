
import { CheckCircle, XCircle } from 'lucide-react';
import { Tooltip } from '@/components/Tooltip';
import Link from 'next/link';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive AI Validation (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: 'Specific Focus on LATAM Nearshore', teamstation: true, competitor: false },
    { feature: 'Bundled hardware, offices, and cyber insurance', teamstation: true, competitor: false },
    { feature: 'Global Talent Cloud (less LATAM focus)', teamstation: false, competitor: true },
    { feature: 'Client handles compliance, devices, security', teamstation: false, competitor: true },
];


export default function AndelaComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Andela</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">TeamStation AI vs. Andela</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A comparison between TeamStation AI’s LATAM-focused integrated platform and Andela’s global talent cloud.
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8 my-12">
        <div className="rounded-lg border-2 border-primary/50 flex-1 p-8 bg-card">
          <h2 className="text-2xl font-bold text-center text-foreground">TeamStation AI</h2>
          <p className="text-center text-sm text-muted-foreground mb-6">The Integrated Nearshore IT Co-Pilot™</p>
          <div className="space-y-3">
            {comparisonData.map(item => (
              <div key={item.feature} className="flex items-start gap-3">
                {item.teamstation ? <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} /> : <XCircle className="text-red-500 flex-shrink-0 mt-1" size={16} />}
                <span className="text-sm text-muted-foreground">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg border bg-card flex-1 p-8">
          <h2 className="text-2xl font-bold text-center text-foreground">Andela</h2>
           <p className="text-center text-sm text-muted-foreground mb-6">Global Talent Cloud</p>
           <div className="space-y-3">
            {comparisonData.map(item => (
               <div key={item.feature} className="flex items-start gap-3">
                {item.competitor ? <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} /> : <XCircle className="text-red-500 flex-shrink-0 mt-1" size={16} />}
                 <span className="text-sm text-muted-foreground">{item.feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="prose dark:prose-invert mx-auto my-12 max-w-4xl">
        <h2 className="text-center">Analysis: The Nearshore Specialist vs. The Global Generalist</h2>
        <p>
            Andela operates a large, AI-powered global "talent cloud" that connects companies with technologists from around the world. Their strength is their breadth and scale. However, their model does not include bundled <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>, devices, or insurance, leaving the client to manage these critical operational components.
        </p>
        <p>
           TeamStation AI has a more specialized focus: building elite nearshore engineering teams specifically within Latin America. This focus allows us to provide a deeply integrated operational platform that is tailored to the unique legal, cultural, and logistical nuances of the region. While Andela helps you find talent, our platform provides the entire security and compliance wrapper—EOR, <Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>-managed devices, insurance—that is critical for a secure nearshore operation.
        </p>
        <h3>Depth vs. Breadth</h3>
        <p>
            The choice between TeamStation AI and Andela is one of depth versus breadth. Andela offers a massive, geographically diverse talent pool. TeamStation AI offers a deep, operationally-integrated solution specifically for the nearshore (LATAM) time zones. Our vetting process, powered by the{' '}
            <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link>
            , is also uniquely designed to provide a deeper cognitive and bias-aware assessment than traditional screening methods.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            For companies looking to source talent globally from a wide range of regions, Andela is a powerful platform. For CTOs who want to specifically leverage the benefits of the nearshore model—time-zone alignment, cultural affinity, and real-time collaboration—and require a fully secure and managed operational platform, TeamStation AI is the more specialized and integrated choice.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
