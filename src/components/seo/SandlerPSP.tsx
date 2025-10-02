
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
      <h2 className="text-2xl font-bold text-primary">Sandler PSP Framework</h2>
      <div className="mt-6 space-y-6">
        
        <div>
          <h3 className="font-semibold text-foreground">Pain</h3>
          <p className="text-muted-foreground">{pain}</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-foreground">Stakes</h3>
          <p className="text-muted-foreground">{stakes}</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-foreground">Prescription</h3>
          <p className="text-muted-foreground">{prescription}</p>
        </div>
        
        <div>
          <h3 className="font-semibold text-foreground">Proof</h3>
          <p className="text-muted-foreground">{proof}</p>
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
