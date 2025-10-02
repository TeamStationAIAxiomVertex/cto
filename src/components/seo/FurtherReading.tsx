
import Link from "next/link";

function formatCountryName(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function FurtherReading({ country }: { country?: string }) {
  return (
    <section className="my-16 border-t border-border pt-12">
      <h2 className="text-2xl font-bold">Further Reading</h2>
      <ul className="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
        <li>
          <Link href="/playbook/hub" className="text-primary hover:underline">
            CTO Playbook Hub
          </Link>
        </li>
        <li>
          <Link href="/research/hub" className="text-primary hover:underline">
            Research Hub
          </Link>
        </li>
        <li>
          <Link href="/comparisons" className="text-primary hover:underline">
            Vendor Comparisons
          </Link>
        </li>
        <li>
          <Link
            href={`/hire/by-country/${country ?? "mexico"}`}
            className="text-primary hover:underline"
          >
            Hire Developers in {formatCountryName(country ?? "mexico")}
          </Link>
        </li>
      </ul>
    </section>
  );
}
