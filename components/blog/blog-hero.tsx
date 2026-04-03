import { cn } from "@/lib/utils";

type BlogHeroProps = {
  className?: string;
};

export function BlogHero({ className }: BlogHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-4 pb-16 lg:pb-20 border-b border-foreground/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          Blog
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6 max-w-4xl leading-[1.05]">
          Ideas &amp; <span className="text-stroke">updates</span>
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Product news, API tips, and engineering notes from the CaptureAPI team.
        </p>
      </div>
    </section>
  );
}
