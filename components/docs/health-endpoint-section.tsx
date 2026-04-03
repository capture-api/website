import { DocsCodeBlock } from "./docs-code-block";
import { EXAMPLE_HEALTH_JSON } from "@/lib/docs-health-example";

export function HealthEndpointSection() {
  return (
    <section id="health" className="scroll-mt-28 border-b border-foreground/10 py-16 lg:py-20">
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-2">
        Health check
      </h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Health check endpoint to verify API status. No authentication required.
      </p>

      <div className="inline-flex items-center gap-3 rounded-lg border border-foreground/15 bg-foreground/[0.03] px-4 py-3 mb-6">
        <span className="font-mono text-xs uppercase tracking-wider text-foreground">GET</span>
        <code className="font-mono text-sm text-foreground">/health</code>
      </div>

      <h3 className="text-sm font-medium text-foreground mb-3">Endpoint</h3>
      <DocsCodeBlock className="mb-8">{`https://api.captureapi.net/health`}</DocsCodeBlock>

      <h3 className="text-sm font-medium text-foreground mb-3">Example response</h3>
      <DocsCodeBlock title="JSON" className="mb-8">
        {EXAMPLE_HEALTH_JSON}
      </DocsCodeBlock>

      <h3 className="text-sm font-medium text-foreground mb-3">Example request</h3>
      <DocsCodeBlock title="cURL">{`curl "https://api.captureapi.net/health"`}</DocsCodeBlock>
    </section>
  );
}
