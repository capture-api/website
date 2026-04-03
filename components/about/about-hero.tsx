import { cn } from "@/lib/utils";

type AboutHeroProps = {
  className?: string;
};

export function AboutHero({ className }: AboutHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-4 pb-16 lg:pb-24 border-b border-foreground/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          About
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-8 max-w-4xl leading-[1.05]">
          Built by developers,
          <br />
          <span className="text-stroke">for developers.</span>
        </h1>
      </div>
    </section>
  );
}
