import { DocsCodeBlock } from "./docs-code-block";

const BASE = "https://api.captureapi.net/screenshot";

export function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-28 border-b border-foreground/10 pb-16 lg:pb-20">
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-6">
        Overview
      </h2>
      <div className="space-y-6 text-muted-foreground leading-relaxed max-w-3xl">
        <p>
          CaptureAPI allows developers to generate screenshots of any website using a simple
          HTTP API request. The API renders the page in a secure browser environment and returns
          a screenshot URL along with metadata.
        </p>
      </div>
      <div className="mt-8 space-y-4">
        <h3 className="text-sm font-medium text-foreground">Base endpoint</h3>
        <DocsCodeBlock>{BASE}</DocsCodeBlock>
        <h3 className="text-sm font-medium text-foreground pt-2">Supported formats</h3>
        <ul className="flex flex-wrap gap-2">
          {["PNG", "JPG", "WebP", "PDF"].map((fmt) => (
            <li
              key={fmt}
              className="px-3 py-1.5 rounded-full border border-foreground/15 text-sm font-mono text-foreground"
            >
              {fmt}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
