import { Code2, Workflow } from "lucide-react";
import { cn } from "@/lib/utils";

const developerFeatures = [
  {
    keyword: "screenshot api for developers",
    title: "Simple REST API",
    description:
      "Use our developer-friendly REST API with any programming language including Node.js, Python, PHP, and Java.",
    icon: Code2,
  },
  {
    keyword: "screenshot automation API",
    title: "Scalable Screenshot Automation",
    description:
      "Generate thousands of screenshots programmatically for monitoring, SEO tools, automation platforms, and analytics systems.",
    icon: Workflow,
  },
];

type DeveloperFeaturesSectionProps = {
  className?: string;
};

export function DeveloperFeaturesSection({ className }: DeveloperFeaturesSectionProps) {
  return (
    <section
      id="developer-features"
      className={cn("relative py-32 lg:py-40 border-t border-foreground/10", className)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Developer features
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Built for
            <br />
            <span className="text-stroke">developers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Integrate once and scale screenshot workloads across your stack.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {developerFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="bg-background p-8 lg:p-12 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 text-foreground">
                  <Icon className="w-6 h-6 shrink-0" strokeWidth={1.5} />
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                    {feature.keyword}
                  </p>
                </div>
                <h3 className="font-display text-2xl lg:text-3xl text-foreground tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
