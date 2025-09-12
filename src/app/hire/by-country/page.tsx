import Link from 'next/link';

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
    <main className="container">
       <div className="breadcrumb">
        <a href="/">Home</a> / <a href="/hire">Hire</a> / By Country
      </div>
      <h1 className="h1">Hire Nearshore Talent by Country</h1>
      <p className="lead">
       Tap into the top engineering talent pools across Latin America, perfectly aligned with your time zone.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {countries.map((country) => (
          <div key={country.slug} className="card p-6 hover:bg-surface-2 transition-colors">
            <h3 className="h3 mt-0 text-xl">{country.name}</h3>
            <p className="text-mute text-sm">{country.cities}</p>
            {/* This would eventually link to /latam/[country]/... pages */}
            <p className="text-accent-custom text-sm font-semibold mt-4">Explore {country.name} →</p>
          </div>
        ))}
      </div>
    </main>
  );
}
