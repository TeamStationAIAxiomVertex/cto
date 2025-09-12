
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HireByCountryPage() {
  const countries = [
    { name: 'Mexico', slug: 'mexico', cities: 'Guadalajara, Monterrey, Mexico City' },
    { name: 'Colombia', slug: 'colombia', cities: 'Bogotá, Medellín' },
    { name: 'Brazil', slug: 'brazil', cities: 'São Paulo, Rio de Janeiro' },
    { name: 'Argentina', slug: 'argentina', cities: 'Buenos Aires' },
    { name: 'Chile', slug: 'chile', cities: 'Santiago' },
    { name: 'Peru', slug: 'peru', cities: 'Lima' },
    { name: 'Costa Rica', slug: 'costa-rica', cities: 'San José' },
    { name: 'Uruguay', slug: 'uruguay', cities: 'Montevideo' },
    { name: 'Ecuador', slug: 'ecuador', cities: 'Quito, Guayaquil' },
    { name: 'Guatemala', slug: 'guatemala', cities: 'Guatemala City' },
  ];

  return (
    <main className="container py-12">
       <div className="text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">Home</Link> / <Link href="/hire" className="hover:text-foreground">Hire</Link> / <span>By Country</span>
      </div>
      <header className="text-center my-12">
        <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Hire by Country</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
       Tap into the top engineering talent pools across Latin America, perfectly aligned with your time zone.
      </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        {countries.map((country) => (
          <Link href="#" key={country.slug} className="group block rounded-lg border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10">
            <h3 className="text-xl font-bold transition-colors group-hover:text-primary">{country.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{country.cities}</p>
            <div className="mt-4 flex items-center text-sm font-semibold text-primary">Explore Talent <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
          </Link>
        ))}
      </div>
    </main>
  );
}
