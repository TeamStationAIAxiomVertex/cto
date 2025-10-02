
import Link from "next/link";

function formatSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function FurtherReading({
  country,
  technology,
  role,
}: {
  country?: string;
  technology?: string;
  role?: string;
}) {
  return (
    <section className="my-16 border-t border-border pt-12">
      <h2 className="text-2xl font-bold">Further Reading</h2>
      <ul className="list-disc ml-6 mt-4 space-y-2 text-muted-foreground">
        {/* Always include 3 core internal links */}
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

        {/* Country link */}
        {country && (
          <li>
            <Link
              href={`/hire/by-country/${country}`}
              className="text-primary hover:underline"
            >
              Hire Developers in {formatSlug(country)}
            </Link>
          </li>
        )}

        {/* Country + Technology link */}
        {country && technology && (
          <li>
            <Link
              href={`/hire/by-country/${country}/${technology}`}
              className="text-primary hover:underline"
            >
              Hire {formatSlug(technology)} Developers in {formatSlug(country)}
            </Link>
          </li>
        )}

        {/* Role link */}
        {role && (
          <li>
            <Link
              href={`/hire/by-role/${role}`}
              className="text-primary hover:underline"
            >
              Hire {formatSlug(role)} Engineers
            </Link>
          </li>
        )}

        {/* Technology link */}
        {technology && !country && (
          <li>
            <Link
              href={`/hire/by-technology/${technology}`}
              className="text-primary hover:underline"
            >
              Hire {formatSlug(technology)} Developers
            </Link>
          </li>
        )}
      </ul>
    </section>
  );
}
