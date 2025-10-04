
'use client';

import * as Tooltip from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';

export type WithTooltipProps = {
  content: ReactNode;
  children: ReactNode;
  delayDuration?: number;
  side?: 'top'|'right'|'bottom'|'left';
  align?: 'start'|'center'|'end';
};

export function WithTooltip({
  content,
  children,
  delayDuration = 200,
  side = 'top',
  align = 'center',
}: WithTooltipProps) {
  return (
    <Tooltip.Provider delayDuration={delayDuration}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side={side}
            align={align}
            className="rounded-md border bg-card px-2 py-1 text-xs shadow"
          >
            {content}
            <Tooltip.Arrow className="fill-current" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}

export default WithTooltip;
