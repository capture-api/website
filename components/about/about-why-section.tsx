import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const benefits = [
  "A simple REST API",
  "Reliable screenshot rendering",
  "Scalable infrastructure",
  "Fast integration",
];

type AboutWhySectionProps = {
  className?: string;
};

export function AboutWhySection({ className }: AboutWhySectionProps) {
  return (
    <section
      className={cn("relative py-24 lg:py-32 border-t border-foreground/10", className)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          Why CaptureAPI
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-8 max-w-3xl">
          Ship features,{" "}
          <span className="text-stroke">not browsers</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
          We built CaptureAPI because generating screenshots at scale often requires complex
          infrastructure, browser automation, and heavy maintenance.
        </p>
        <p className="text-sm font-medium text-foreground mb-4">CaptureAPI removes that complexity and provides:</p>
        <ul className="space-y-3 max-w-2xl mb-10">
          {benefits.map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          So developers can focus on building products instead of managing infrastructure.
        </p>
      </div>
    </section>
  );
}
