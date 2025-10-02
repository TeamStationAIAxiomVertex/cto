
// This component is deprecated. Use ValuePropositionBlock instead.
import Link from "next/link";

interface ValuePropositionBlockProps {
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
}: ValuePropositionBlockProps) {
  return (
    <section className="my-16 rounded-lg border bg-card p-8 shadow-lg">
       <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-primary">The Pain</h3>
          <p className="text-muted-foreground">{pain}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">The Stakes</h3>
          <p className="text-muted-foreground">{stakes}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">The Prescription</h3>
          <p className="text-muted-foreground">{prescription}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-primary">The Proof</h3>
          <p className="font-bold text-muted-foreground" dangerouslySetInnerHTML={{ __html: proof.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-primary hover:underline">$1</a>') }}></p>
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
