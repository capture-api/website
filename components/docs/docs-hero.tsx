export function DocsHero() {
  return (
    <header className="mb-12 lg:mb-16 pb-10 border-b border-foreground/10">
      <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
        Documentation
      </span>
      <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-foreground mb-4 leading-[1.05]">
        CaptureAPI Documentation
      </h1>
      <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
        Generate website screenshots using a fast and developer-friendly API.
      </p>
    </header>
  );
}
