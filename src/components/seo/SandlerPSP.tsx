
// This component is deprecated. Use ValuePropositionBlock instead.
import Link from "next/link";

interface SandlerPSPProps {
  pain: string;
  stakes: string;
  prescription: string;
  proof: string;
  ctaHref?: string;
  ctaText?: string;
}

export default function SandlerPSP({
  pain,
  stakes,
  prescription,
  proof,
  ctaHref = "/playbook/hub",
  ctaText = "Explore the CTO Playbook",
}: SandlerPSPProps) {
  return (
    <section className="my-16 rounded-lg border bg-card p-8 shadow-lg">
      <div className="space-y-6">
        <div>
          <p className="font-semibold text-foreground">{pain}</p>
        </div>
        <div>
          <p className="text-muted-foreground">{stakes}</p>
        </div>
        <div>
          <p className="text-muted-foreground">{prescription}</p>
        </div>
        <div>
          <p className="text-muted-foreground font-bold" dangerouslySetInnerHTML={{ __html: proof.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>') }}></p>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href={ctaHref} className="cta-button">
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
