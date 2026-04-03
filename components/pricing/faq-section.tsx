"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "How are screenshots counted?",
    answer:
      "Every successful screenshot generated through the API counts toward your monthly quota.",
  },
  {
    question: "What happens if I exceed my monthly limit?",
    answer:
      "If you reach your limit, additional requests will return a limit error. You can upgrade your plan anytime to increase your quota.",
  },
  {
    question: "Do unused screenshots roll over?",
    answer:
      "No. Screenshot quotas reset at the beginning of each billing cycle.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel your subscription anytime through the billing portal. ",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We generally do not offer refunds, but if you experience issues with the service our support team will help resolve them.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. Our Free plan includes a limited number of screenshots each month so you can test the API before upgrading.",
  },
  {
    question: "How fast are screenshots generated?",
    answer:
      "Most screenshots are generated within 1–5 seconds, depending on the complexity of the website.",
  },
  {
    question: "Are screenshots stored permanently?",
    answer:
      "Screenshots are stored temporarily and automatically deleted after the retention period defined by your plan.",
  },
];

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
            {faqs.map((faq, i) => (
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
