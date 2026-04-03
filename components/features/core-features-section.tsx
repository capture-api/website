import { cn } from "@/lib/utils";

const coreFeatures = [
  {
    keyword: "website screenshot API",
    title: "Instant Website Screenshots",
    description:
      "Capture screenshots of any website instantly using our fast and reliable screenshot API. Send a URL and receive a high-quality screenshot in seconds.",
  },
  {
    keyword: "full page screenshot API",
    title: "Full Page Screenshot Capture",
    description:
      "Capture entire webpages including dynamic content, lazy loading, and long pages with our full-page screenshot capability.",
  },
  {
    keyword: "url to image API",
    title: "Multiple Image Formats",
    description:
      "Export screenshots in multiple formats including PNG, JPG, WebP, and PDF depending on your needs.",
  },
  {
    keyword: "remove popups screenshot",
    title: "Popup & Cookie Banner Removal",
    description:
      "Automatically remove popups, cookie banners, and modal overlays to generate clean screenshots.",
  },
  {
    keyword: "website capture API",
    title: "Custom Screenshot Resolution",
    description:
      "Customize screenshot dimensions using width and height parameters to simulate different devices and viewports.",
  },
  {
    keyword: "fast screenshot API",
    title: "Fast Screenshot Rendering",
    description:
      "Our infrastructure renders websites quickly, generating screenshots in seconds even for complex pages.",
  },
];

type CoreFeaturesSectionProps = {
  className?: string;
};

export function CoreFeaturesSection({ className }: CoreFeaturesSectionProps) {
  return (
    <section
      id="core-features"
      className={cn("relative py-32 lg:py-40 border-t border-foreground/10", className)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-16 lg:mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Core features
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
            Capture & render
            <br />
            <span className="text-stroke">at scale</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Everything you need to turn URLs into production-ready screenshots.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {coreFeatures.map((feature, idx) => (
            <article
              key={feature.title}
              className="bg-background p-8 lg:p-10 flex flex-col gap-4"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wide">
                {feature.keyword}
              </p>
              <h3 className="font-display text-2xl lg:text-3xl text-foreground tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
