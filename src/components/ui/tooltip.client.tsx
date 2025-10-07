"use client";
import * as React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";

export function WithTooltip({
  content = undefined,
  label = undefined,
  children,
}: {
  content?: React.ReactNode;
  label?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <RadixTooltip.Provider delayDuration={200}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content className="rounded-md bg-popover px-2 py-1 text-xs text-popover-foreground shadow">
            {label}
            {content}
            <RadixTooltip.Arrow className="fill-popover" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}

export default WithTooltip;
