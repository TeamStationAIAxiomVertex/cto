
import { CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';
import { Tooltip } from '@/components/Tooltip';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TECLA Alternative: TeamStation AI vs. TECLA for LATAM Talent',
  description: 'Evaluating TECLA? See why TeamStation AI is a strong TECLA alternative, offering an integrated platform with EOR, device management, and AI-vetting.',
};

const comparisonPoints = {
    "Operations": {
        pain: "Are you equipped to be a global employer?",
        traditional: "TECLA is a talent marketplace. They connect you with talent, but the significant burden of compliance, payroll (<a href='/services/integrated-services' class='text-primary hover:underline'><Tooltip text='Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.'>EOR</Tooltip></a>), and IT security falls squarely on you.",
        teamstation: "We are your global employer platform. We absorb all operational complexity—EOR, secure devices (<a href='/trust' class='text-primary hover:underline'><Tooltip text='Mobile Device Management: software that secures, monitors, and manages devices like laptops.'>MDM</Tooltip></a>), and insurance—into one accountable SLA.",
        proof: "1 accountable SLA"
    },
    "Vetting": {
        pain: "Is a skills test enough to de-risk a hire?",
        traditional: "Marketplace vetting is often limited to self-reported skills and basic technical challenges. This doesn't measure the deeper cognitive traits that predict success.",
        teamstation: "Our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™ Cognitive AI</a> provides peer-reviewed, scientific proof of a candidate's problem-solving ability and learning orientation.",
        proof: "Mismatch Rate ≤ 10%"
    },
    "Cost": {
        pain: "Is a placement fee the real cost?",
        traditional: "A marketplace model seems cheap upfront, but the 'hidden costs' of setting up your own EOR, IT, and legal frameworks create a massive, unpredictable <a href='/playbook/latam-economics' class='text-primary hover:underline'><Tooltip text='Total Cost of Ownership: Includes salary plus all direct and indirect costs like hiring, legal, IT, and management overhead.'>TCO</Tooltip></a>.",
        teamstation: "Our <a href='/pricing' class='text-primary hover:underline'>all-inclusive pricing</a> eliminates surprises. You get a predictable, CFO-ready TCO that is often 40-60% lower than the fully-loaded cost of the marketplace model.",
        proof: "40-60% Lower TCO"
    }
}


export default function TeclaComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>TECLA Alternative</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">TECLA Alternative: TeamStation AI</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A comparison between TeamStation AI’s integrated platform and TECLA’s talent marketplace model for hiring developers in Latin America.
        </p>
      </header>

       <div className="my-12">
        <h2 className="text-3xl font-bold text-center">The Integrated Platform vs. The Talent Marketplace</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {Object.entries(comparisonPoints).map(([key, value]) => (
            <div key={key} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
              <p className="text-sm font-semibold text-primary">{value.pain}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
              
              <div className="mt-4 flex-grow space-y-4">
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    TECLA Model
                  </h4>
                  <p className="text-sm text-muted-foreground m-0" dangerouslySetInnerHTML={{ __html: value.traditional }} />
                </div>
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    TeamStation AI Solution
                  </h4>
                   <p className="text-sm text-foreground m-0" dangerouslySetInnerHTML={{ __html: value.teamstation }} />
                </div>
              </div>
              <p className="mt-6 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {value.proof}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="prose dark:prose-invert mx-auto my-12 max-w-4xl">
        <h2 className="text-center">Analysis: The Integrated Platform vs. The Marketplace</h2>
        <p>
            TECLA operates as a talent marketplace, connecting companies with a network of developers across Latin America. While effective for sourcing candidates, their model places the significant burden of compliance, payroll, device security, and HR management squarely on the client.
        </p>
        <p>
           As a TECLA alternative, TeamStation AI provides a fully integrated platform. We don't just find talent; we provide the entire operational infrastructure. This includes <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>, secure device provisioning (<Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>), and comprehensive insurance, all bundled into a single, predictable rate. Our{' '}
            <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™ Cognitive AI</Link>
            {' '} engine also provides a layer of cognitive and bias-aware vetting that goes far beyond traditional screening.
        </p>
        <h3>Operational Responsibility: Where Does it Lie?</h3>
        <p>
            With a marketplace like TECLA, you find the talent, but then you are largely on your own. You have to figure out how to hire them compliantly, pay them, and secure their work environment. This creates significant operational overhead and legal risk. TeamStation AI absorbs this complexity. Our model is designed for CTOs who need to scale without building a global HR and legal department from scratch.
        </p>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            If you have the internal resources to manage international hiring, compliance, and IT security, a marketplace like TECLA can be a good sourcing tool. However, for companies looking for a complete, secure, and scalable solution that reduces risk and operational burden, TeamStation AI's integrated platform offers a clear advantage as a TECLA alternative.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
