import Link from 'next/link';
import { ArrowRight, Building, Check, Languages, School, UserCheck } from 'lucide-react';
import type { Metadata } from 'next';
import SeoSafeImage from '@/components/seo/SeoSafeImage';
import { countries } from '@/lib/countries';
import placeholderImages from '@/app/lib/placeholder-images.json';

export const metadata: Metadata = {
  title: 'Hire Nearshore Engineers by Country | Top LATAM Hubs',
  description: 'Stop losing a day to time zones. Hire elite, vetted engineers from top LATAM tech hubs like Mexico, Brazil, and Colombia.',
  keywords: 'hire nearshore by country, latam tech hubs, hire mexico developers, hire colombia developers, hire brazil developers, hire argentina developers',
};

export default function HireByCountryPage() {

  return (
    <main className="container py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Country</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Stop Losing a Full Day to Time Zones.</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          You're here because the 12-hour lag with your offshore team is killing your velocity. A simple question takes a full day to answer. Our nearshore model gives you access to elite talent in your time zone, enabling the real-time collaboration that agile development demands.
      </p>
      </header>

       <div className="my-16 rounded-lg border bg-card p-8 md:p-12 shadow-lg">
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
                    Because of WeWork, we always access the most safe, secure, and most advanced office and IT infrastructure, which comes included into our price. This provides a cost-effective solution for CTOs to meet with their teams in Latin America where their pods and squads are based on their team topologies without spending more of their budget. Some limits may apply—<Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">book a demo</Link> for more details.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {countries.map((country) => (
                <div key={country.slug} className="group flex flex-col rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 shadow-lg">
                    <p className="text-sm font-semibold text-primary">{country.pain}</p>
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

       <div className="text-center rounded-lg bg-primary/10 p-8 shadow-lg">
        <h2 className="text-2xl font-bold">Ready to build your real-time team?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss how our nearshore talent and integrated WeWork infrastructure can accelerate your roadmap.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
