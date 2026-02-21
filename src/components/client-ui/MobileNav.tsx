
'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { NAV, simpleNavItems } from "../../config/nav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";


export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(!isOpen)} className="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-transparent text-muted-foreground" aria-label="Open mobile menu">
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-full max-w-sm bg-background p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-2">
                <Accordion type="multiple" className="w-full">
                  {Object.entries(NAV).map(([title, items]) => (
                    <AccordionItem value={title} key={title}>
                      <AccordionTrigger className="text-lg font-semibold">{title}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4">
                          {items.map(({ href, label }) => (
                            <Link key={href} href={href} className="block py-2 text-muted-foreground hover:text-primary" onClick={handleLinkClick} target={href.startsWith('http') ? '_blank' : '_self'} rel={href.startsWith('http') ? 'noopener noreferrer' : ''}>
                                {label}
                            </Link>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {simpleNavItems.map(item => (
                    <Link key={item.href} href={item.href} className="block py-2 text-lg font-semibold text-foreground hover:text-primary" onClick={handleLinkClick} target={item.href.startsWith('http') ? '_blank' : '_self'} rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''}>
                        {item.label}
                    </Link>
                ))}
                <Link href="https://app.teamstation.dev" target="_blank" rel="noopener noreferrer" className="block py-2 text-lg font-semibold text-foreground hover:text-primary" onClick={handleLinkClick}>
                    Sign In
                </Link>
                 <Link href="https://hire.teamstation.dev/contact" target="_blank" rel="noopener noreferrer" className="cta-button w-full mt-4" onClick={handleLinkClick}>Book a Call</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
