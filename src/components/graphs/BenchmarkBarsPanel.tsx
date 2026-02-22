type BenchmarkBar = {
  label: string;
  value: number;
  target?: number;
  note?: string;
};

type BenchmarkBarsPanelProps = {
  title: string;
  subtitle?: string;
  unit?: string;
  bars: BenchmarkBar[];
  max?: number;
};

export default function BenchmarkBarsPanel({
  title,
  subtitle,
  unit = "",
  bars,
  max,
}: BenchmarkBarsPanelProps) {
  const chartMax = Math.max(max ?? 0, ...bars.map((bar) => Math.max(bar.value, bar.target ?? 0)), 1);

  return (
    <section className="glass-panel gradient-ring rounded-2xl p-5 md:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          {subtitle ? (
            <p className="mt-1 max-w-[72ch] text-sm leading-6 text-muted-foreground">{subtitle}</p>
          ) : null}
        </div>
        <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Visual planning model
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {bars.map((bar) => {
          const pct = Math.max(0, Math.min(100, (bar.value / chartMax) * 100));
          const targetPct =
            typeof bar.target === "number" ? Math.max(0, Math.min(100, (bar.target / chartMax) * 100)) : null;

          return (
            <div key={bar.label} className="rounded-xl border border-border/70 bg-background/60 p-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-sm font-medium text-foreground">{bar.label}</p>
                <p className="text-xs font-semibold text-primary">
                  {bar.value}
                  {unit}
                </p>
              </div>
              <div className="relative mt-2 h-2.5 rounded-full bg-background/80">
                <div
                  className="absolute left-0 top-0 h-2.5 rounded-full bg-gradient-to-r from-primary/80 to-cyan-300/80"
                  style={{ width: `${pct}%` }}
                />
                {targetPct !== null ? (
                  <div
                    className="absolute top-[-4px] h-4 w-[2px] rounded bg-foreground/80"
                    style={{ left: `${targetPct}%` }}
                    aria-hidden="true"
                  />
                ) : null}
              </div>
              {bar.note ? <p className="mt-2 text-xs leading-5 text-muted-foreground">{bar.note}</p> : null}
            </div>
          );
        })}
      </div>
    </section>
  );
}
