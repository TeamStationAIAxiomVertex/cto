
import Link from 'next/link';
import { ArrowRight, Building, Check, Languages, School, UserCheck } from 'lucide-react';
import type { Metadata } from 'next';
import SeoSafeImage from "../../../components/seo/SeoSafeImage";
import { countries } from "../../../lib/countries";
import placeholderImages from "../../lib/placeholder-images.json";
import FurtherReading from "../../../components/seo/FurtherReading";
import CardGuidanceTooltip from "../../../components/ui/card-guidance-tooltip";
import { InfoDropdown } from "../../../components/client/info-dropdown";
import CTOFieldManualBlock from "../../../components/seo/CTOFieldManualBlock";

export const metadata: Metadata = {
  title: { absolute: 'Hire LATAM Engineers by Country | TeamStation AI' },
  description: 'Stop losing a day to time zones. Hire elite, vetted engineers from top LATAM tech hubs like Mexico, Brazil, and Colombia.',
  keywords: 'hire nearshore by country, latam tech hubs, hire mexico developers, hire colombia developers, hire brazil developers, hire argentina developers',
};

export default function HireByCountryPage() {

  return (
    <main className="manual-page content-shell py-10">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Country</span>
      </div>
      <header className="glass-panel hero-depth system-grid text-center my-8 rounded-2xl p-6 md:p-8">
        <h1 className="text-5xl font-extrabold tracking-tight text-foreground">Stop Losing a Full Day to Time Zones.</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          You're here because the 12-hour lag with your offshore team is killing your velocity. A simple question takes a full day to answer. Our nearshore model gives you access to elite talent in your time zone, enabling the real-time collaboration that agile development demands.
      </p>
       <div className="mt-4 flex justify-center">
        <InfoDropdown label="How this page helps">
          <p>This country map helps you choose overlap speed, communication fit, and delivery stability before you commit to sourcing.</p>
        </InfoDropdown>
      </div>
       <nav className="mt-6 flex justify-center gap-4 text-sm">
            <Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook</Link>
            <Link href="/comparisons" className="text-primary hover:underline">Vendor Comparisons</Link>
            <Link href="/research/hub" className="text-primary hover:underline">Our Research</Link>
        </nav>
      </header>

       <div className="glass-panel my-12 rounded-2xl p-6 md:p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <p className="text-sm font-semibold text-primary">Tired of insecure home offices and spotty Wi-Fi?</p>
                <h2 className="text-3xl font-bold flex items-center gap-3 mt-3">
                    <Building className="h-8 w-8 text-primary" />
                    Secure, Professional Workspaces
                </h2>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-sm text-muted-foreground">In partnership with</span> <Link href="https://www.wework.com" target="_blank" rel="noopener noreferrer" className="font-bold text-lg text-foreground hover:underline">WeWork</Link>
                </div>
                <p className="mt-4 text-muted-foreground">
                    Because of WeWork, we always access the most safe, secure, and most advanced office and IT infrastructure, which comes included into our price. This provides a cost-effective solution for CTOs to meet with their teams in Latin America where their pods and squads are based on their team topologies without spending more of their budget. Some limits may apply <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">book a demo</Link> for more details.
                </p>
                 <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">One less vendor to manage</p>
            </div>
            <div className="flex justify-center">
                <SeoSafeImage 
                    src={placeholderImages.weworkOffice.src.url}
                    alt={placeholderImages.weworkOffice.alt}
                    width={placeholderImages.weworkOffice.src.width}
                    height={placeholderImages.weworkOffice.src.height}
                    className="rounded-lg shadow-lg aspect-video object-cover" 
                    data-ai-hint={placeholderImages.weworkOffice.aiHint}
                />
            </div>
        </div>
      </div>

      <div className="my-16">
        <h2 className="text-center text-3xl font-bold">Explore Our Premier LATAM Engineering Hubs</h2>
        <div className="card-grid-tight-3 mt-8">
            {countries.map((country) => (
                <div key={country.slug} className="glass-panel gradient-ring rounded-2xl group relative mx-auto w-full max-w-sm flex flex-col p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm font-semibold text-primary">{country.pain}</p>
                      <CardGuidanceTooltip
                        issue={country.pain}
                        solution={country.solution}
                        proof={country.kpi}
                      />
                    </div>
                    <div className="mt-3 flex items-center gap-3">
                        <h3 className="text-xl font-bold text-foreground">{country.name}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground flex-grow">{country.solution}</p>
                    <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">{country.kpi}</p>
                    <Link href={`/hire/by-country/${country.slug}`} className="mt-6 flex items-center text-sm font-semibold text-primary stretched-link">
                        Explore Talent in {country.name} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            ))}
        </div>
      </div>

      <section className="glass-panel my-10 rounded-2xl p-6 md:p-8">
        <h2 className="text-2xl font-bold">Country Selection Framework for CTO and CIO teams</h2>
        <div className="mt-4 space-y-5 text-muted-foreground leading-7">
          <h3 className="text-lg font-semibold text-foreground">Select country by operating fit not headline rate</h3>
          <p>
            Country choice should support your delivery model. If your team depends on same day architecture
            review, optimize for overlap and communication fluency first. If your team depends on niche stack
            depth, optimize for talent concentration in that stack. If your team is in regulated environments,
            optimize for operational maturity and governance discipline. This avoids the common mistake of
            selecting location for short term cost while increasing long term delivery drag.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Use overlap metrics to protect feedback loop speed.</li>
            <li>Use specialization depth to protect technical quality.</li>
            <li>Use governance readiness to protect compliance outcomes.</li>
          </ul>

          <h3 className="text-lg font-semibold text-foreground">Interlink mesh for geography and execution planning</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li><Link href="/hire/by-role" className="text-primary hover:underline">role planning guide for capability mapping</Link></li>
            <li><Link href="/hire/by-technology" className="text-primary hover:underline">technology planning guide for stack fit</Link></li>
            <li><Link href="/playbook/hub" className="text-primary hover:underline">playbook hub for leadership decision sequencing</Link></li>
            <li><Link href="/playbook/nearshore-vs-offshore" className="text-primary hover:underline">nearshore versus offshore guide for strategic fit</Link></li>
            <li><Link href="/research/hub" className="text-primary hover:underline">research hub for evidence based policy</Link></li>
            <li><a href="https://engineering.teamstation.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">engineering doctrine for distributed execution standards</a></li>
            <li><a href="https://research.teamstation.dev/protocols/governance" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">governance protocols for multi country operations</a></li>
            <li><a href="https://hire.teamstation.dev/latam" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">LATAM market overview for buyer alignment</a></li>
          </ul>
        </div>
      </section>

      <CTOFieldManualBlock
        title="Country Strategy Field Manual for Nearshore Execution"
        focus="country selection and collaboration model integrity"
      />

       <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Ready to build your real-time team?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss how our nearshore talent and integrated WeWork infrastructure can accelerate your roadmap.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
      <FurtherReading />
    </main>
  );
}
