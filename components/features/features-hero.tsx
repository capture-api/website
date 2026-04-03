import { cn } from "@/lib/utils";

type FeaturesHeroProps = {
  className?: string;
};

export function FeaturesHero({ className }: FeaturesHeroProps) {
  return (
    <section
      className={cn("relative pt-4 pb-20 lg:pb-28 border-b border-foreground/10", className)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          Features
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6 max-w-5xl leading-[1.05]">
          Powerful features <br/><span className="text-stroke">for capturing websites with API</span>
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Explore CaptureAPI features including full-page screenshots, popup removal,
          multiple formats, and fast screenshot rendering with a simple API.
        </p>
      </div>
    </section>
  );
}
