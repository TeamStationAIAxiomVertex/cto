
import { CheckCircle, XCircle, BrainCircuit, FileText, ShieldCheck } from 'lucide-react';
import { Tooltip } from '@/components/Tooltip';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Andela Alternative: TeamStation AI vs. Andela',
    description: 'Looking for an Andela alternative? Compare TeamStation AI\'s integrated LATAM nearshore model to Andela\'s global talent marketplace for hiring developers.'
};

const comparisonPoints = {
    "Vetting": {
        pain: "Is your hiring process a gamble on a massive, unfiltered talent pool?",
        traditional: "Andela provides access to a vast global talent cloud, but their vetting is primarily based on resume screening and technical tests, not a deep cognitive evaluation.",
        teamstation: "Our <a href='/research/axiom-cortex-scientific-report' class='text-primary hover:underline'>Axiom Cortex™ Cognitive AI</a> provides scientific, evidence-based proof of a candidate's problem-solving ability, ensuring you hire for aptitude, not just experience.",
        proof: "Mismatch Rate ≤ 10%"
    },
    "Operations": {
        pain: "Are you prepared to manage global compliance and IT?",
        traditional: "Andela's model leaves the client responsible for critical operational components like device security, <a href='/trust' class='text-primary hover:underline'><Tooltip text='Mobile Device Management: software that secures, monitors, and manages devices like laptops.'>MDM</Tooltip></a>, and insurance, creating hidden costs and risks.",
        teamstation: "Our integrated platform is <a href='/trust' class='text-primary hover:underline'>secure by default</a>. We bundle <a href='/services/integrated-services' class='text-primary hover:underline'><Tooltip text='Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.'>EOR</Tooltip></a>, MDM-secured devices, and insurance under one SLA.",
        proof: "SOC 2 & ISO Aligned"
    },
    "Focus": {
        pain: "Do you need a nearshore specialist or a global generalist?",
        traditional: "Andela's strength is its breadth, covering many regions. This generalist approach means less specialized focus on the unique operational needs of the LATAM nearshore time zones.",
        teamstation: "We are LATAM nearshore specialists. Our entire platform is purpose-built for time-zone aligned collaboration, providing a deep, operationally-integrated solution for this specific region.",
        proof: "Time-to-Offer ≈ 9 days"
    }
}

export default function AndelaComparisonPage() {
  return (
    <main className="container py-12">
      <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/comparisons" className="hover:text-foreground">Comparisons</Link> / <span>Andela</span>
      </div>
      <header className="text-center my-8">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">TeamStation AI vs. Andela</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          A comparison between TeamStation AI’s LATAM-focused integrated platform and Andela’s global talent cloud.
        </p>
      </header>

       <div className="my-12">
        <h2 className="text-3xl font-bold text-center">The Integrated Platform vs. The Global Talent Cloud</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {Object.entries(comparisonPoints).map(([key, value]) => (
            <div key={key} className="rounded-lg border bg-card p-6 flex flex-col">
              <p className="text-sm font-semibold text-primary">{value.pain}</p>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{key}</h3>
              
              <div className="mt-4 flex-grow space-y-4">
                <div className="border-t border-border pt-4">
                  <h4 className="font-semibold text-muted-foreground flex items-center gap-2">
                    <XCircle className="h-5 w-5 text-destructive" />
                    Andela Model
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
        <h2 className="text-center">Analysis: The Nearshore Specialist vs. The Global Generalist</h2>
        <p>
            Andela operates a large, global "talent cloud" that connects companies with technologists from around the world. Their strength is their breadth and scale. However, their model does not include bundled <Tooltip text="Employer of Record: a service that allows you to legally hire employees in other countries without setting up a local entity.">EOR</Tooltip>, devices, or insurance, leaving the client to manage these critical operational components.
        </p>
        <p>
           TeamStation AI has a more specialized focus: building elite nearshore engineering teams specifically within Latin America. This focus allows us to provide a deeply integrated operational platform that is tailored to the unique legal, cultural, and logistical nuances of the region. While Andela helps you find talent, our platform provides the entire security and compliance wrapper—EOR, <Tooltip text="Mobile Device Management: software that secures, monitors, and manages devices like laptops.">MDM</Tooltip>-managed devices, insurance—that is critical for a secure nearshore operation.
        </p>
        <h3>Depth vs. Breadth</h3>
        <p>
            The choice between TeamStation AI and Andela is one of depth versus breadth. Andela offers a massive, geographically diverse talent pool. TeamStation AI offers a deep, operationally-integrated solution specifically for the nearshore (LATAM) time zones. Our vetting process, powered by the{' '}
            <Link href="/research/axiom-cortex-scientific-report">Axiom Cortex™ Cognitive AI</Link>
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
