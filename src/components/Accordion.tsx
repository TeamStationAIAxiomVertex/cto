"use client";

import React, { useState, useRef, useEffect, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

const AccordionItem = ({ title, children }: AccordionItemProps) => {
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
    <div className="border-b">
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

export default AccordionItem;
