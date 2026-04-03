import { BarChart3, Eye, LayoutDashboard, Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

const useCases = [
  {
    title: "SEO monitoring",
    description: "Capture screenshots of search results or competitor websites.",
    icon: BarChart3,
  },
  {
    title: "Website monitoring",
    description: "Track visual changes on websites automatically.",
    icon: Eye,
  },
  {
    title: "Automation platforms",
    description: "Generate screenshots programmatically for reports and dashboards.",
    icon: LayoutDashboard,
  },
  {
    title: "Website previews",
    description: "Create previews or thumbnails for links and web content.",
    icon: Link2,
  },
];

type UseCasesSectionProps = {
  className?: string;
};

export function UseCasesSection({ className }: UseCasesSectionProps) {
  return (
    <section
      id="use-cases"
      className={cn("relative py-32 lg:py-40 border-t border-foreground/10", className)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Use cases
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Ship faster
            <br />
            <span className="text-stroke">everywhere</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Common ways teams use CaptureAPI in production.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-foreground/10 border border-foreground/10">
          {useCases.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="bg-background p-8 lg:p-10 flex flex-col gap-4 min-h-[200px]"
              >
                <Icon className="w-8 h-8 text-foreground shrink-0" strokeWidth={1.25} />
                <h3 className="font-display text-xl lg:text-2xl text-foreground tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
