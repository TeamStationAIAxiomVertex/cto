
import Link from "next/link";

export default function FurtherReading({ country }: { country?: string }) {
  return (
    <section className="my-16 border-t border-border pt-12">
      <h2 className="text-2xl font-bold">Further Reading</h2>
      <ul className="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
        <li><Link href="/playbook/hub" className="text-primary hover:underline">CTO Playbook Hub</Link></li>
        <li><Link href="/research/hub" className="text-primary hover:underline">Research Hub</Link></li>
        {country ? (
          <li><Link href={`/hire/by-country/${country}`} className="text-primary hover:underline">
            Hire Developers in {country.charAt(0).toUpperCase() + country.slice(1)}
          </Link></li>
        ) : (
          <li><Link href="/hire/by-country/mexico" className="text-primary hover:underline">Hire Developers in Mexico</Link></li>
        )}
      </ul>
    </section>
  );
}
