"use client";

import React, { useState, useRef, useEffect, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItemProps = {
  title: string;
  children: ReactNode;
};

export const AccordionItem = ({ title, children }: AccordionItemProps) => {
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
    <div className="accordion-item">
      <button
        className="accordion-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <ChevronDown
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "transform 0.3s",
          }}
        />
      </button>
      <div ref={contentRef} className="accordion-content">
        {children}
      </div>
    </div>
  );
};
