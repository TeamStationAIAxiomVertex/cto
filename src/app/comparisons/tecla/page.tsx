
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';

const comparisonData = [
    { feature: 'Integrated Platform (EOR, Devices, MDM, Insurance)', teamstation: true, competitor: false },
    { feature: 'Cognitive AI Validation (Axiom Cortex™)', teamstation: true, competitor: false },
    { feature: '2.6M+ LATAM Talent Graph (Nebula™)', teamstation: true, competitor: false },
    { feature: 'Transparent, All-Inclusive Pricing', teamstation: true, competitor: false },
    { feature: 'Marketplace model, client handles operations', teamstation: false, competitor: true },
];


export default function TeclaComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>TECLA</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold text-foreground md:text-5xl">TeamStation AI vs. TECLA</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A comparison between TeamStation AI’s integrated platform and TECLA’s talent marketplace model.
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
          <h2 className="text-2xl font-bold text-center text-foreground">TECLA</h2>
           <p className="text-center text-sm text-muted-foreground mb-6">LATAM Talent Marketplace</p>
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
        <h2 className="text-center">Analysis: The Integrated Platform vs. The Marketplace</h2>
        <p>
            TECLA operates as a talent marketplace, connecting companies with a network of developers across Latin America. While effective for sourcing candidates, their model places the significant burden of compliance, payroll, device security, and HR management squarely on the client.
        </p>
        <p>
           TeamStation AI provides a fully integrated platform. We don't just find talent; we provide the entire operational infrastructure. This includes <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>, secure device provisioning (<Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>), and comprehensive insurance, all bundled into a single, predictable rate. Our{' '}
            <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™</Link>
            {' '} engine also provides a layer of cognitive and bias-aware vetting that goes far beyond traditional screening.
        </p>
        <h3>Operational Responsibility: Where Does it Lie?</h3>
        <p>
            With a marketplace like TECLA, you find the talent, but then you are largely on your own. You have to figure out how to hire them compliantly, pay them, and secure their work environment. This creates significant operational overhead and legal risk. TeamStation AI absorbs this complexity. Our model is designed for CTOs who need to scale without building a global HR and legal department from scratch.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            If you have the internal resources to manage international hiring, compliance, and IT security, a marketplace like TECLA can be a good sourcing tool. However, for companies looking for a complete, secure, and scalable solution that reduces risk and operational burden, TeamStation AI's integrated platform offers a clear advantage.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
