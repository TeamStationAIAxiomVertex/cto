
import { CheckCircle, XCircle, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { InfoDropdown } from '@/components/Accordion';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terminal Alternative: TeamStation AI vs. Terminal.io',
    description: 'Looking for a Terminal.io alternative? Compare TeamStation AI\'s integrated nearshore platform with Terminal\'s EOR-plus-recruiter model for building remote dev teams.'
};

const comparisonPoints = {
    "Operations": {
        pain: "Are you just solving payroll, or the entire operational stack?",
        traditional: "Terminal is an <InfoDropdown title={<span class='border-b border-dashed'>EOR</span>}>Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.</InfoDropdown>-plus-recruiter. They handle hiring and payroll, but they do not provide secure devices, <InfoDropdown title={<span class='border-b border-dashed'>MDM</span>}>Mobile Device Management: software that secures, monitors, and manages devices like laptops.</InfoDropdown>, or insurance, leaving critical security and governance gaps.",
        teamstation: "We are a complete, software-defined operating model. Our integrated platform bundles all 'run-state' services—devices, MDM, offices, compliance, and insurance—under a single, predictable SLA.",
        proof: "1 accountable SLA"
    },
    "Vetting": {
        pain: "Is your vetting process based on science or just a series of interviews?",
        traditional: "Terminal's recruiting service is effective at sourcing, but it relies on traditional interview methods that are susceptible to bias and don't measure deep cognitive abilities.",
        teamstation: "Our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™ Cognitive AI</a> de-risks hiring through scientific, peer-reviewed validation of a candidate's problem-solving skills, not just their resume.",
        proof: "Mismatch Rate ≤ 10%"
    },
    "Cost": {
        pain: "Are you paying for a recruiter or an end-to-end platform?",
        traditional: "An EOR-plus-recruiter model has significant hidden costs. You still need to budget for IT, security, and compliance management, increasing your <a href='/playbook/latam-economics' class='text-primary hover:underline'><InfoDropdown title={<span class='border-b border-dashed'>TCO</span>}>Total Cost of Ownership: Includes salary plus all direct and indirect costs like hiring, legal, IT, and management overhead.</InfoDropdown></a>.",
        teamstation: "Our transparent, <a href='/pricing' class='text-primary hover:underline'>all-inclusive pricing</a> provides a lower and more predictable TCO by bundling all services, eliminating the need for multiple vendors and hidden fees.",
        proof: "40-60% Lower TCO"
    }
}


export default function TerminalComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Terminal</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">TeamStation AI vs. Terminal</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          An analysis of TeamStation AI’s integrated Nearshore IT Co-Pilot™ versus Terminal’s EOR-plus-recruiter model.
        </p>
      </header>

      <div className="my-12">
        <h2 className="text-3xl font-bold text-center">The Integrated Co-Pilot vs. The EOR-Plus-Recruiter</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {Object.entries(comparisonPoints).map(([key, value]) => (
            <div key={key} className="rounded-lg border bg-card p-6 flex flex-col shadow-lg">
              <p className="text-sm font-semibold text-primary">{value.pain}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
              
              <div className="mt-4 flex-grow space-y-4">
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    Terminal Model
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
        <h2 className="text-center">Analysis: The Integrated Co-Pilot vs. The EOR-Plus-Recruiter</h2>
        <p>
            <a href="https://terminal.io/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold inline-flex items-center gap-1">Terminal <ExternalLink className="h-4 w-4" /></a> builds remote engineering teams and can act as an <InfoDropdown title={<span class='border-b border-dashed'>EOR</span>}>Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.</InfoDropdown>, handling payroll and benefits. They offer a valuable service by removing many of the initial hurdles of hiring globally.
        </p>
        <p>
           However, their model stops there, leaving critical operational and security gaps. They do not provide a productized cognitive AI for talent validation, nor do they bundle secure devices, <InfoDropdown title={<span class='border-b border-dashed'>MDM</span>}>Mobile Device Management: software that secures, monitors, and manages devices like laptops.</InfoDropdown>, or cyber insurance. This means the client must still assemble and manage multiple vendors to cover their operational and security needs, increasing Total Cost of Ownership (TCO) and risk.
        </p>
        <h3>The Governance & Validation Gap</h3>
        <p>
           TeamStation AI provides a complete, software-defined operating model. Our <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™ Cognitive AI</Link> engine de-risks hiring through scientific validation, while our integrated platform bundles all necessary "run-state" services—devices, MDM, offices, compliance, and insurance—under a single, predictable SLA. This is the fundamental difference: Terminal is an EOR-plus-recruiter; TeamStation is a scientific nearshore platform that runs the whole loop from discovery to delivery.
        </p>
         <h3>Buyer's Checklist</h3>
        <ul>
            <li>Need scientific, model-based proof of talent capability beyond a resume? <strong>Choose TeamStation.</strong></li>
            <li>Need only EOR services, using your own internal tech and security stack? <strong>Terminal may suffice.</strong></li>
            <li>Need a fully-managed security posture with device fleets and controlled workspaces from day one? <strong>Choose TeamStation.</strong></li>
        </ul>
      </div>

      <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p className="mt-2 mx-auto max-w-2xl text-muted-foreground">
            For companies that just need to solve hiring and payroll, Terminal is a capable partner. For CTOs who require an end-to-end, secure, and scientifically-validated platform for their entire nearshore operation, TeamStation AI offers a far more comprehensive and integrated solution.
        </p>
        <Link href="/comparisons" className="cta-button mt-6">Back to All Comparisons</Link>
      </div>
    </main>
  );
}
