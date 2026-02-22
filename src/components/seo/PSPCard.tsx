// server component
import type { ReactNode } from 'react';
import CardGuidanceTooltip from "@/components/ui/card-guidance-tooltip";

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

const toPlainText = (value: string) => value.replace(/<[^>]+>/g, "");

export function PSPCard({ title, icon, body }: PSPCardProps) {
  return (
    <div key={title} className="glass-panel gradient-ring rounded-2xl border border-border/70 p-6 shadow-lg flex flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
            {icon}
          </div>
          <h2 className="text-xl font-bold text-foreground">{title}</h2>
        </div>
        <CardGuidanceTooltip
          issue={toPlainText(body.problem)}
          solution={toPlainText(body.prescription)}
          proof={toPlainText(body.proof)}
        />
      </div>
      <div className="mt-4 space-y-3 text-sm text-muted-foreground flex-grow">
        <p><strong className="text-foreground">Operating reality.</strong> <span dangerouslySetInnerHTML={{ __html: body.problem }} /></p>
        <p><strong className="text-foreground">Business impact.</strong> <span dangerouslySetInnerHTML={{ __html: body.stakes }} /></p>
        <p><strong className="text-foreground">Operating response.</strong> <span dangerouslySetInnerHTML={{ __html: body.prescription }} /></p>
        <p><strong className="text-primary">Evidence.</strong> <span className="text-foreground/90" dangerouslySetInnerHTML={{ __html: body.proof }} /></p>
      </div>
      <div className="mt-4 pt-4 border-t border-border/50">
        <p className="text-sm italic text-primary/90"><strong className="not-italic">Decision summary.</strong> <span dangerouslySetInnerHTML={{ __html: body.recap }} /></p>
      </div>
    </div>
  );
}
