import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const focusItems = [
  "Fast rendering",
  "Reliable infrastructure",
  "Developer-friendly APIs",
  "Scalable screenshot generation",
];

type AboutMissionSectionProps = {
  className?: string;
};

export function AboutMissionSection({ className }: AboutMissionSectionProps) {
  return (
    <section
      className={cn("relative py-24 lg:py-32 border-t border-foreground/10", className)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          Our mission
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-6 max-w-3xl">
          Make website capture{" "}
          <span className="text-stroke">simple</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-10">
          Generating screenshots programmatically should not be complicated. CaptureAPI provides a
          simple and powerful API that allows developers to capture websites with just a single
          request.
        </p>
        <p className="text-sm font-medium text-foreground mb-4">We focus on:</p>
        <ul className="grid sm:grid-cols-2 gap-4 max-w-2xl">
          {focusItems.map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
