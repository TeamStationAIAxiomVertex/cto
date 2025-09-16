'use client';

import * as React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  Cell,
} from 'recharts';

type Datum = { name: string; value: number; label: string };
type Props = {
  data: Datum[];
  height?: number; // px
};

export default function TrustByNumbersChart({ data, height = 320 }: Props) {
  const fills = ['hsl(var(--primary))', 'hsl(var(--chart-2))', 'hsl(var(--foreground))'];

  return (
    <div
      className="w-full"
      style={{ height }}
      aria-label="Trust by Numbers chart showing key performance indicators"
      role="img"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 24, left: 12, bottom: 8 }}
        >
          <XAxis type="number" hide />
          <YAxis dataKey="label" type="category" hide />
          <RechartsTooltip
            cursor={{ fill: 'hsla(var(--card))' }}
            contentStyle={{
              background: 'hsl(var(--popover))',
              borderColor: 'hsl(var(--border))',
              color: 'hsl(var(--popover-foreground))',
              borderRadius: 'var(--radius)',
            }}
          />
          <Bar dataKey="value" radius={[0, 8, 8, 0]}>
            {data.map((_, i) => (
              <Cell key={i} fill={fills[i % fills.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
