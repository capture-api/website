import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const useCases = [
  "SEO monitoring tools",
  "Website change detection",
  "Automated reporting systems",
  "Link preview generation",
  "Testing and automation platforms",
];

type AboutBuiltForDevelopersSectionProps = {
  className?: string;
};

export function AboutBuiltForDevelopersSection({
  className,
}: AboutBuiltForDevelopersSectionProps) {
  return (
    <section
      className={cn("relative py-24 lg:py-32 border-t border-foreground/10", className)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          Built for developers
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-8 max-w-3xl">
          Automation you can{" "}
          <span className="text-stroke">trust</span>
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-8">
          CaptureAPI is designed specifically for developers who need reliable screenshot automation.
        </p>
        <p className="text-sm font-medium text-foreground mb-4">It is commonly used for:</p>
        <ul className="space-y-3 max-w-2xl mb-10">
          {useCases.map((item) => (
            <li key={item} className="flex items-start gap-3 text-muted-foreground">
              <Check className="w-5 h-5 text-foreground shrink-0 mt-0.5" strokeWidth={1.5} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Every feature of CaptureAPI is designed to reduce complexity and speed up development
          workflows.
        </p>
      </div>
    </section>
  );
}
