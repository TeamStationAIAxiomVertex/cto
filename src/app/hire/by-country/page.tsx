
import Link from 'next/link';
import { ArrowRight, Building2 } from 'lucide-react';
import { Tooltip } from '@/components/Tooltip';
import type { Metadata } from 'next';
import Image from 'next/image';
import placeholderImages from '@/app/lib/placeholder-images.json';

export const metadata: Metadata = {
  title: 'Hire Nearshore Engineers by Country | Top LATAM Tech Hubs',
  description: 'Stop losing a day to time zones. Hire elite, vetted engineers from top LATAM tech hubs like Mexico, Brazil, Colombia, and Argentina. Real-time collaboration, secure workspaces.',
};

export default function HireByCountryPage() {
  const countries = [
    { name: 'Mexico', slug: 'mexico' as const, cities: 'Guadalajara, Monterrey, Mexico City' },
    { name: 'Colombia', slug: 'colombia' as const, cities: 'Bogotá, Medellín' },
    { name: 'Brazil', slug: 'brazil' as const, cities: 'São Paulo, Rio de Janeiro' },
    { name: 'Argentina', slug: 'argentina' as const, cities: 'Buenos Aires' },
    { name: 'Chile', slug: 'chile' as const, cities: 'Santiago' },
    { name: 'Peru', slug: 'peru' as const, cities: 'Lima' },
    { name: 'Costa Rica', slug: 'costa-rica' as const, cities: 'San José' },
    { name: 'Uruguay', slug: 'uruguay' as const, cities: 'Montevideo' },
    { name: 'Ecuador', slug: 'ecuador' as const, cities: 'Quito, Guayaquil' },
  ];

  const weworkImage = placeholderImages.weworkOffice;

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

      <div className="my-16 rounded-lg border bg-card p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                 <p className="text-sm font-semibold text-primary">Tired of insecure home offices and spotty Wi-Fi?</p>
                <h2 className="text-3xl font-bold flex items-center gap-3 mt-3">
                    <Building2 className="h-8 w-8 text-primary" />
                    Secure, Professional Workspaces Included
                </h2>
                <p className="mt-4 text-muted-foreground">
                    Your team’s productivity and security shouldn't be left to chance. Through our unique partnership with <a href="https://www.wework.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WeWork</a>, every TeamStation AI engineer has access to a secure, modern office across LATAM. This isn't an add-on; it's part of our all-inclusive service, ensuring reliable internet, a professional setting, and a secure space to work, all while maintaining <Tooltip text="SOC 2 is a compliance standard for service organizations, specifying how organizations should manage customer data.">SOC 2</Tooltip> and <Tooltip text="ISO 27001 is the international standard for information security management.">ISO</Tooltip>-aligned operational standards.
                </p>
                 <p className="mt-4 text-xs font-mono text-primary bg-primary/10 rounded px-2 py-1 inline-block self-start">One less vendor to manage</p>
            </div>
            <div className="flex justify-center">
                <Image 
                    src={weworkImage.src.url} 
                    alt={weworkImage.alt} 
                    width={weworkImage.src.width}
                    height={weworkImage.src.height}
                    className="rounded-lg shadow-lg aspect-video object-cover" 
                    data-ai-hint={weworkImage.aiHint}
                />
            </div>
        </div>
      </div>

      <div className="my-16">
        <h2 className="text-center text-3xl font-bold">Explore Our Premier LATAM Engineering Hubs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {countries.map((country) => {
              const image = placeholderImages.countries[country.slug];
              return (
                <Link href={`/hire/by-country/${country.slug}`} key={country.slug} className="group relative block rounded-lg overflow-hidden border transition-all hover:shadow-2xl hover:shadow-primary/10">
                    <Image 
                        src={image.src.url}
                        alt={image.alt}
                        width={image.src.width}
                        height={image.src.height}
                        className="aspect-video object-cover w-full transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.aiHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                        <h3 className="text-xl font-bold text-white">{country.name}</h3>
                        <p className="mt-1 text-sm text-white/80">{country.cities}</p>
                         <div className="mt-4 flex items-center text-sm font-semibold text-primary">
                            Explore Talent <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </div>
                    </div>
                </Link>
              )
            })}
        </div>
      </div>

       <div className="text-center rounded-lg bg-primary/10 p-8">
        <h2 className="text-2xl font-bold">Ready to build your real-time team?</h2>
        <p className="mt-2 mx-auto max-w-xl text-muted-foreground">
            Let's discuss how our nearshore talent and integrated WeWork infrastructure can accelerate your roadmap.
        </p>
        <Link href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1JD2e4SmSzEC82NiTvzvUJNaghMafqlUdoTB9YlWfUSsJa2fC4uqoXGoOb9XNhRIsNa-IOIXSq" target="_blank" rel="noopener noreferrer" className="cta-button mt-6">Book a Strategy Call</Link>
      </div>
    </main>
  );
}
