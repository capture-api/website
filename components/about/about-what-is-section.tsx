import { cn } from "@/lib/utils";

type AboutWhatIsSectionProps = {
  className?: string;
};

export function AboutWhatIsSection({ className }: AboutWhatIsSectionProps) {
  return (
    <section
      id="what-is-captureapi"
      className={cn(
        "relative py-24 lg:py-32 border-t border-foreground/10",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          Intro
        </span>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-10 max-w-3xl">
          What is{" "}
          <span className="text-stroke">CaptureAPI</span>
        </h2>
        <div className="max-w-3xl space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            CaptureAPI is a fast and reliable website screenshot API designed to help developers
            capture screenshots of any website programmatically.
          </p>
          <p>
            Built and maintained by Peta Bytes, Inc, CaptureAPI simplifies the process of generating
            website screenshots for automation, monitoring tools, analytics platforms, and other
            applications.
          </p>
          <p className="text-foreground font-medium">
            Our goal is simple: make website capture fast, scalable, and easy to integrate.
          </p>
        </div>
      </div>
    </section>
  );
}
