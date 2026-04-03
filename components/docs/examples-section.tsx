import { DocsHttpExamplesTabs, DocsUrlOptionsTabs } from "./docs-example-code-tabs";

export function ExamplesSection() {
  return (
    <section id="examples" className="scroll-mt-28 border-b border-foreground/10 py-16 lg:py-20">
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-2">
        Examples
      </h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Use any HTTP client. Replace <code className="font-mono text-sm">YOUR_API_KEY</code> with
        a key from your dashboard.
      </p>

      <DocsHttpExamplesTabs />

      <h3 className="font-display text-2xl lg:text-3xl tracking-tight text-foreground mt-14 mb-4">
        Screenshot options
      </h3>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Combine query parameters to control capture behavior.
      </p>

      <DocsUrlOptionsTabs />
    </section>
  );
}
