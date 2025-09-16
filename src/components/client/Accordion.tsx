'use client';

import * as React from 'react';
import { ChevronDown } from 'lucide-react';

export type AccordionProps = {
  children: React.ReactNode;
  className?: string;
};

export type AccordionItemProps = {
  title: React.ReactNode;
  defaultOpen?: boolean;
  children: React.ReactNode;
  className?: string;
};

export function Accordion({ children, className }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<AccordionItemProps>(child)) {
          return React.cloneElement(child, {
            isOpen: openItems.includes(index),
            toggle: () => toggleItem(index),
          });
        }
        return child;
      })}
    </div>
  );
}

// Internal AccordionItem that receives isOpen and toggle from Accordion
type InternalAccordionItemProps = AccordionItemProps & {
  isOpen?: boolean;
  toggle?: () => void;
};

export function AccordionItem({ title, children, className, isOpen, toggle }: InternalAccordionItemProps) {
  const contentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isOpen
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isOpen]);

  return (
    <div className={className}>
      <button
        type="button"
        onClick={toggle}
        className="flex w-full items-center justify-between py-4 text-left font-semibold"
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
}