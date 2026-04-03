import { cn } from "@/lib/utils";

type AboutPetaBytesSectionProps = {
  className?: string;
};

export function AboutPetaBytesSection({ className }: AboutPetaBytesSectionProps) {
  return (
    <section
      className={cn(
        "relative py-24 lg:py-32 border-t border-foreground/10 bg-foreground/[0.02]",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          About Peta Bytes
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-8 max-w-3xl">
          Powered by{" "}
          <span className="text-stroke">Peta Bytes, Inc</span>
        </h2>
        <div className="max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            CaptureAPI is a product of Peta Bytes, Inc, a technology company focused on building
            scalable developer tools and automation platforms.
          </p>
          <p>
            Our team focuses on creating simple, powerful APIs that help developers build faster and
            automate complex processes.
          </p>
        </div>
      </div>
    </section>
  );
}
