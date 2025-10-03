import dynamic from 'next/dynamic';
import type { WithTooltipProps } from '@/components/client/Tooltip';

const TooltipIsland = dynamic(
  () => import('@/components/client/Tooltip').then(m => m.WithTooltip ?? m.default),
  { ssr: false }
);

export function WithTooltip(props: WithTooltipProps) {
  return <TooltipIsland {...props} />;
}
