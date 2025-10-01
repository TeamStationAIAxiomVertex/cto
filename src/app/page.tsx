
import { ArrowRight, BookOpen, BarChart, FileSearch, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { WithTooltip } from '@/components/client/tooltip';
import SafeImage from '@/components/SafeImage';
import placeholderImages from '@/app/lib/placeholder-images.json';
import { HeroKpi } from '@/components/metrics/HeroKpis';
import dynamic from 'next/dynamic';

const HeroKpis = dynamic(() => import('@/components/metrics/HeroKpis'), { ssr: false });

const kpis: HeroKpi[] = [
  { id: 'tto', label: 'Time-to-Offer', value: 9, unit: 'd', target: 14, desire: 'down', max: 30 },
  { id: 'ret', label: '90-Day Retention', value: 96, unit: '%', target: 95, desire: 'up' },
  { id: 'tco', label: 'TCO Reduction', value: 54, unit: '%', target: 40, desire: 'up' },
  { id: 'overlap', label: 'Workday Overlap', value: 7, unit: 'h', target: 6, desire: 'up', max: 8 },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="relative bg-background text-foreground py-20 md:py-32">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                Stop Gambling on Talent.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                You’re here because hiring is a high-stakes gamble. Our integrated platform for{' '}
                <WithTooltip
                  label="Latin America"
                  content="LATAM has a massive, highly-skilled talent pool in US-aligned time zones."
                >
                  <span className="border-b border-dashed">nearshore LATAM</span>
                </WithTooltip>{' '}
                teams uses Cognitive AI to de-risk your hiring, delivering{' '}
                <WithTooltip
                  label="Day-1 Ready"
                  content="Engineers come with secure, MDM-managed devices and are onboarded with a 30-60-90 day plan."
                >
                  <span className="border-b border-dashed">Day-1-ready</span>
                </WithTooltip>{' '}
                engineers so you can ship faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  Book a Discovery Call
                </Link>
                <Link
                  href="/playbook/hub"
                  className="inline-flex items-center justify-center rounded-md border bg-transparent px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                >
                  <BookOpen className="mr-2 h-4 w-4" /> The CTO's Playbook
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="rounded-xl border bg-card p-6 shadow-lg">
                <HeroKpis items={kpis} />
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-card border-y">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                    <p className="text-sm font-semibold uppercase tracking-wider text-primary">The New Standard for Nearshore</p>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">One Platform for Talent, Security & Compliance</h2>
                    <p className="mt-4 text-muted-foreground">
                        Traditional staff augmentation just gives you a person. We give you a complete, managed operating system for your nearshore team, bundling everything you need into a single, accountable SLA.
                    </p>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
                    <div className="p-6">
                        <FileSearch className="h-10 w-10 mx-auto text-primary" />
                        <h3 className="text-lg font-bold mt-4">Evidence-Based Vetting</h3>
                        <p className="text-sm text-muted-foreground mt-2">Our Axiom Cortex™ AI provides scientific proof of a candidate’s problem-solving ability, not just keywords on a resume.</p>
                    </div>
                     <div className="p-6">
                        <ShieldCheck className="h-10 w-10 mx-auto text-primary" />
                        <h3 className="text-lg font-bold mt-4">Audit-Ready Security</h3>
                        <p className="text-sm text-muted-foreground mt-2">Every engineer gets a managed, secure laptop. Our process is SOC 2 aligned, so you pass enterprise security reviews.</p>
                    </div>
                     <div className="p-6">
                        <BarChart className="h-10 w-10 mx-auto text-primary" />
                        <h3 className="text-lg font-bold mt-4">Predictable TCO</h3>
                        <p className="text-sm text-muted-foreground mt-2">Our all-inclusive rate eliminates hidden costs, providing a clear Total Cost of Ownership that's 40-60% lower than a US hire.</p>
                    </div>
                </div>
                <div className="text-center mt-12">
                     <Link href="/platform" className="cta-button">
                        Explore the Platform <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>

        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
               <p className="text-sm font-semibold uppercase tracking-wider text-primary">Stop building blind</p>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 text-foreground">A Scientific Approach to Hiring</h2>
              <p className="mt-4 text-muted-foreground">
                Traditional hiring is broken—it’s biased, slow, and relies on gut feel. Our process is different. We use our proprietary Axiom Cortex™ Cognitive AI to measure the specific traits that predict on-the-job success, like architectural instinct and problem-solving agility.
              </p>
              <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                      <span className="h-5 w-5 flex-shrink-0 text-primary">✓</span>
                      <span><strong className="text-foreground">Reduce Mis-Hire Risk by &gt;90%:</strong> Make data-driven decisions based on an auditable "Evidence Locker," not just a resume.</span>
                  </li>
                   <li className="flex items-start gap-3">
                      <span className="h-5 w-5 flex-shrink-0 text-primary">✓</span>
                      <span><strong className="text-foreground">Cut Time-to-Offer to ≈9 Days:</strong> Our high-signal process means you spend less time interviewing and more time building.</span>
                  </li>
              </ul>
              <div className="mt-8">
                <Link href="/playbook/bias-free-technical-hiring-axiom-cortex" className="font-semibold text-primary hover:underline">
                  Read the Playbook on Bias-Free Hiring <ArrowRight className="inline h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden border shadow-xl">
                 <SafeImage
                    src={placeholderImages.heroTeam.src.url}
                    alt={placeholderImages.heroTeam.alt}
                    fill
                    className="object-cover"
                    priority
                    data-ai-hint={placeholderImages.heroTeam.aiHint}
                  />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
