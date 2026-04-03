"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { pricingFaqs } from "@/lib/pricing-faqs";
import { cn } from "@/lib/utils";

type FaqSectionProps = {
  className?: string;
};

export function FaqSection({ className }: FaqSectionProps) {
  return (
    <section
      id="faq"
      className={cn("relative py-32 lg:py-40 border-t border-foreground/10", className)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            FAQs
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Frequently asked
            <br />
            <span className="text-stroke">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Everything you need to know about quotas, billing, and how CaptureAPI works.
          </p>
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="grid gap-px bg-foreground/10 border border-foreground/10">
            {pricingFaqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="border-0 bg-background px-6 lg:px-8 data-[state=open]:bg-foreground/[0.02]"
              >
                <AccordionTrigger className="text-base lg:text-lg font-display text-foreground tracking-tight py-6 hover:no-underline [&[data-state=open]]:text-foreground">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm lg:text-base text-muted-foreground leading-relaxed pb-6 pt-0">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
