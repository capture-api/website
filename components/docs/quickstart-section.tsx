import { EXAMPLE_SCREENSHOT_RESPONSE_JSON } from "@/lib/docs-example-response";
import { DocsCodeBlock } from "./docs-code-block";

export function QuickstartSection() {
  return (
    <section id="quickstart" className="scroll-mt-28 border-b border-foreground/10 py-16 lg:py-20">
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-2">
        Quickstart
      </h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Send a GET request with your target URL and API key. Here is the shortest path to a
        working screenshot.
      </p>

      <h3 className="text-sm font-medium text-foreground mb-3">Example request</h3>
      <DocsCodeBlock title="cURL">
        {`curl "https://api.captureapi.net/screenshot?url=https://example.com&api_key=YOUR_API_KEY"`}
      </DocsCodeBlock>

      <h3 className="text-sm font-medium text-foreground mt-10 mb-3">Example response</h3>
      <DocsCodeBlock title="JSON">{EXAMPLE_SCREENSHOT_RESPONSE_JSON}</DocsCodeBlock>
    </section>
  );
}
