import { cn } from "@/lib/utils";

type ContactHeroProps = {
  className?: string;
};

export function ContactHero({ className }: ContactHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-4 pb-16 lg:pb-20 border-b border-foreground/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          Contact
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6 max-w-4xl leading-[1.05]">
          Get in <span className="text-stroke">touch</span>
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Have a question about CaptureAPI? Send us a message and we&apos;ll get back to you
          as soon as we can.
        </p>
      </div>
    </section>
  );
}
