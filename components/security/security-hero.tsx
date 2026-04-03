import { cn } from "@/lib/utils";

type SecurityHeroProps = {
  className?: string;
};

export function SecurityHero({ className }: SecurityHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-4 pb-12 lg:pb-16 border-b border-foreground/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          Trust
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-8 max-w-3xl leading-[1.05]">
          <span className="text-stroke">Security</span>
        </h1>
      </div>
    </section>
  );
}
