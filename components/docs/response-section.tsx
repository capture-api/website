import { EXAMPLE_SCREENSHOT_RESPONSE_JSON } from "@/lib/docs-example-response";
import { DocsCodeBlock } from "./docs-code-block";

export function ResponseSection() {
  return (
    <section id="response" className="scroll-mt-28 border-b border-foreground/10 py-16 lg:py-20">
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-8">
        Example response
      </h2>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Successful responses include the screenshot URL, id, format, dimensions, flags, file size,
        timestamps, and <code className="font-mono text-sm">response_time_ms</code>.
      </p>
      <DocsCodeBlock title="JSON">{EXAMPLE_SCREENSHOT_RESPONSE_JSON}</DocsCodeBlock>
    </section>
  );
}
