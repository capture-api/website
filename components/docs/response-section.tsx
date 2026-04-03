import { DocsCodeBlock } from "./docs-code-block";

export function ResponseSection() {
  return (
    <section id="response" className="scroll-mt-28 border-b border-foreground/10 py-16 lg:py-20">
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-8">
        Example response
      </h2>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Successful responses include a hosted screenshot URL, format, dimensions, and timing
        metadata.
      </p>
      <DocsCodeBlock title="JSON">
        {`{
  "success": true,
  "screenshot_url": "https://captureapi.s3.amazonaws.com/user_1/screenshots/uuid.png",
  "format": "png",
  "width": 1920,
  "height": 1080,
  "response_time_ms": 2345
}`}
      </DocsCodeBlock>
    </section>
  );
}
