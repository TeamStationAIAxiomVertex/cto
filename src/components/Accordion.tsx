
"use client";

import React, { useState, useRef, useEffect, type ReactNode } from "react";
import { ChevronDown, Info } from "lucide-react";

type InfoDropdownProps = {
  title: string | ReactNode;
  children: ReactNode;
};

export const InfoDropdown = ({ title, children }: InfoDropdownProps) => {
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
    <div className="border-b border-border/50">
      <button
        className="flex w-full items-center gap-2 py-1 text-left font-medium text-muted-foreground hover:text-foreground"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <Info className="h-4 w-4 shrink-0 text-primary/80" />
        <span className="flex-grow">{title}</span>
        <ChevronDown
          className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
          }}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: '0px' }}
      >
        <div className="pb-2 pt-2 text-xs">{children}</div>
      </div>
    </div>
  );
};

export const Accordion = ({ children }: { children: ReactNode }) => {
    return <div className="space-y-2">{children}</div>;
};

// Kept for backwards compatibility if used elsewhere
export const AccordionItem = ({ title, children }: InfoDropdownProps) => {
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
    <div className="border-b border-border/50">
      <button
        className="flex w-full items-center justify-between py-4 text-left font-semibold"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown
          className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200"
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
          }}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden text-sm transition-all duration-300 ease-in-out"
        style={{ maxHeight: '0px' }}
      >
        <div className="pb-4 pt-0">{children}</div>
      </div>
    </div>
  );
};

    