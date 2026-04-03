import { cn } from "@/lib/utils";

type PrivacyHeroProps = {
  className?: string;
};

export function PrivacyHero({ className }: PrivacyHeroProps) {
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
          Privacy{" "}
          <span className="text-stroke">Policy</span>
        </h1>
        <div className="max-w-3xl space-y-4 text-lg text-muted-foreground leading-relaxed">
          <p>
            CaptureAPI (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is operated by Peta Bytes,
            Inc.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, and protect information when you use
            the CaptureAPI service and website.
          </p>
        </div>
      </div>
    </section>
  );
}
