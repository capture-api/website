import { DocsCodeBlock } from "./docs-code-block";

export function ApiReferenceSection() {
  return (
    <section id="api-reference" className="scroll-mt-28 border-b border-foreground/10 py-16 lg:py-20">
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-2">
        Screenshot API
      </h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Generate a screenshot of any public URL. For account and usage information, see{" "}
        <a href="#account-summary" className="text-foreground underline underline-offset-4">
          Account summary
        </a>
        .
      </p>

      <div className="inline-flex items-center gap-3 rounded-lg border border-foreground/15 bg-foreground/[0.03] px-4 py-3 mb-8">
        <span className="font-mono text-xs uppercase tracking-wider text-foreground">
          GET
        </span>
        <code className="font-mono text-sm text-foreground">/screenshot</code>
      </div>

      <p className="text-muted-foreground mb-6 max-w-3xl">
        Generate a screenshot of any website.
      </p>

      <h3 className="text-sm font-medium text-foreground mb-3">Endpoint</h3>
      <DocsCodeBlock>{`https://api.captureapi.net/screenshot`}</DocsCodeBlock>
    </section>
  );
}
