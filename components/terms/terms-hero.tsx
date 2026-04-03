import { cn } from "@/lib/utils";

type TermsHeroProps = {
  className?: string;
};

export function TermsHero({ className }: TermsHeroProps) {
  return (
    <section
      className={cn(
        "relative pt-4 pb-12 lg:pb-16 border-b border-foreground/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          Legal
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-8 max-w-3xl leading-[1.05]">
          Terms of{" "}
          <span className="text-stroke">Service</span>
        </h1>
        <div className="max-w-3xl space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            These Terms of Service govern your use of CaptureAPI, operated by Peta Bytes, Inc.
          </p>
          <p>
            By using our service, you agree to the terms below.
          </p>
        </div>
      </div>
    </section>
  );
}
