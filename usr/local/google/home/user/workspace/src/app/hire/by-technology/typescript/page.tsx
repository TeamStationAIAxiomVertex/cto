
import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle, AlertTriangle } from 'lucide-react';
import { WithTooltip } from '@/components/ui/tooltip';
import { allTech } from '@/lib/tech';
import { JsonLd } from '@/components/seo/JsonLd';
import TypeScriptPSPSection from '@/components/seo/sections/TypeScriptPSPSection';

export const metadata = { title: `Hire Nearshore TypeScript Developers`, description: `Hire elite, pre-vetted LATAM engineers with expertise in TypeScript. Our scientific evaluation de-risks hiring for critical roles.`, keywords: `hire nearshore TypeScript developers, latam TypeScript engineers, TypeScript staff augmentation` };

export default function TechPage() {
  const tech = allTech['typescript'];
  const siteUrl = "https://cto.teamstation.dev";
  
  if (!tech) { return <main className="container max-w-5xl py-12"><p>Technology not found.</p></main> }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Hire", "item": `${siteUrl}/hire` },
      { "@type": "ListItem", "position": 2, "name": "By Technology", "item": `${siteUrl}/hire/by-technology` },
      { "@type": "ListItem", "position": 3, "name": tech.name, "item": `${siteUrl}/hire/by-technology/typescript` }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "IT Staff Augmentation",
    "provider": { "@type": "Organization", "name": "TeamStation AI" },
    "areaServed": { "@type": "Country", "name": "LATAM" },
    "description": `Hire elite, pre-vetted LATAM engineers with expertise in ${tech.name}.`,
    "name": `Hire ${tech.name} Developers`,
    "offers": { "@type": "Offer", "price": "Contact for pricing" }
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <main className="container max-w-5xl py-12">
        <div className="text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground">Home</Link> / 
          <Link href="/hire" className="hover:text-foreground">Hire</Link> / 
          <Link href="/hire/by-technology" className="hover:text-foreground">By Technology</Link> / 
          <span>{tech.name}</span>
        </div>
        <header className="my-12">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire for {tech.name} Mastery</h1>
          <p className="mt-4 text-lg text-muted-foreground">
              {tech.intro}
          </p>
        </header>

        {tech.pains && tech.pains.length > 0 && (
          <section className="my-16">
              <h2 className="text-center text-3xl font-bold">Sound Familiar?</h2>
              <p className="mt-2 max-w-2xl mx-auto text-center text-muted-foreground">Common problems we solve by providing true {tech.name} experts.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  {tech.pains.map((item) => {
                    const Icon = item.icon;
                    return(
                      <div key={item.pain} className="rounded-lg border bg-card p-6 flex flex-col">
                          <p className="text-sm font-semibold text-primary">{item.pain}</p>
                          <div className="flex items-center gap-3 mt-3">
                              <Icon className="h-8 w-8 text-primary" />
                              <h3 className="text-lg font-semibold text-foreground">The Problem</h3>
                          </div>
                          <p className="mt-4 text-sm text-muted-foreground ">{item.problem}</p>
                          
                          <div className="mt-4 border-t border-border pt-4">
                              <h4 className="font-semibold text-primary">The TeamStation AI Solution</h4>
                              <p className="text-sm text-foreground m-0">{item.solution}</p>
                          </div>
                          <div className="flex-grow"></div>
                          <div className="mt-6">
                              <p className="text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">Proof: {item.kpi}</p>
                          </div>
                      </div>
                    )
                  })}
              </div>
          </section>
        )}


        <div className="my-16 rounded-lg border bg-card p-8">
          <h2 className="text-center text-3xl font-bold">Our Evaluation Approach for {tech.name}</h2>
          <div className="mt-2 max-w-3xl mx-auto text-center text-muted-foreground">
            For roles requiring deep {tech.name} expertise, our <WithTooltip content={<span>Our proprietary Cognitive AI engine for talent evaluation.</span>}><Link href="/technical-interview-evaluation" className='text-primary hover:underline'>Axiom Cortex™ evaluation</Link></WithTooltip> focuses on practical application and deep system understanding, not just trivia. We assess candidates on:
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-8 max-w-2xl mx-auto">
              {tech.evaluation.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-1" />
                      <span className='text-muted-foreground'>{point}</span>
                  </li>
              ))}
          </ul>
          <div className="text-center mt-8">
              <Link href={`/hire/by-role/${tech.categorySlug}`} className="font-semibold text-primary hover:underline">
                  Explore Related Role: {tech.category} <ArrowRight className="inline h-4 w-4" />
              </Link>
          </div>
        </div>
        
        <div className="text-center rounded-lg bg-primary/10 p-8">
          <h2 className="text-2xl font-bold">Ready to Hire Elite {tech.name} Talent?</h2>
          <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Stop sifting through unqualified resumes. Let us provide you with a shortlist of 2-3 elite, pre-vetted candidates with proven {tech.name} mastery.
          </p>
          <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a No-Obligation Strategy Call</Link>
        </div>
        
        <TypeScriptPSPSection />

      </main>
    </>
  );
}
