
'use client';

import React, { useState, useRef, useEffect, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type DisclosureDrawerProps = {
  title: string;
  children: ReactNode;
};

export const DisclosureDrawer = ({ title, children }: DisclosureDrawerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className="mt-8 border-t border-border">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-semibold text-primary"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown
          className="h-5 w-5 transition-transform duration-300"
          style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: "0px" }}
      >
        <div className="pb-4 prose-sm dark:prose-invert max-w-none">{children}</div>
      </div>
    </div>
  );
};

    