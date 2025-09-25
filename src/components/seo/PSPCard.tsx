// server component
import type { ReactNode } from 'react';

export type PSPBody = {
  problem: string;
  stakes: string;
  prescription: string;
  proof: string;
  recap: string;
};

type PSPCardProps = {
  title: string;
  icon: ReactNode;
  body: PSPBody;
};

export function PSPCard({ title, icon, body }: PSPCardProps) {
  return (
    <div key={title} className="rounded-lg border bg-card p-6 shadow-lg flex flex-col">
      <div className="flex items-center gap-3">
        {icon}
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
      </div>
      <div className="mt-4 space-y-3 text-sm text-muted-foreground flex-grow">
        <p><strong className="text-foreground">Problem.</strong> <span dangerouslySetInnerHTML={{ __html: body.problem }} /></p>
        <p><strong className="text-foreground">Stakes.</strong> <span dangerouslySetInnerHTML={{ __html: body.stakes }} /></p>
        <p><strong className="text-foreground">Prescription.</strong> <span dangerouslySetInnerHTML={{ __html: body.prescription }} /></p>
        <p><strong className="text-primary">Proof.</strong> <span className="text-foreground/90" dangerouslySetInnerHTML={{ __html: body.proof }} /></p>
      </div>
      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-sm italic text-primary/90"><strong className="not-italic">Recap.</strong> <span dangerouslySetInnerHTML={{ __html: body.recap }} /></p>
      </div>
    </div>
  );
}
