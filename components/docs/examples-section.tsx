import { DocsCodeBlock } from "./docs-code-block";

export function ExamplesSection() {
  return (
    <section id="examples" className="scroll-mt-28 border-b border-foreground/10 py-16 lg:py-20">
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-2">
        Examples
      </h2>
      <p className="text-muted-foreground mb-10 max-w-3xl">
        Use any HTTP client. Replace <code className="font-mono text-sm">YOUR_API_KEY</code> with
        a key from your dashboard.
      </p>

      <h3 className="text-lg font-display text-foreground mb-3">JavaScript</h3>
      <DocsCodeBlock title="fetch">
        {`const url = "https://api.captureapi.net/screenshot?url=https://example.com&api_key=YOUR_API_KEY";

const response = await fetch(url);
const data = await response.json();

console.log(data.screenshot_url);`}
      </DocsCodeBlock>

      <h3 className="text-lg font-display text-foreground mt-12 mb-3">Python</h3>
      <DocsCodeBlock title="requests">
        {`import requests

params = {
  "url": "https://example.com",
  "api_key": "YOUR_API_KEY"
}

response = requests.get(
  "https://api.captureapi.net/screenshot",
  params=params
)

print(response.json())`}
      </DocsCodeBlock>

      <h3 className="font-display text-2xl lg:text-3xl tracking-tight text-foreground mt-16 mb-4">
        Screenshot options
      </h3>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Combine query parameters to control capture behavior.
      </p>

      <h4 className="text-sm font-medium text-foreground mb-2">Full page screenshot</h4>
      <DocsCodeBlock className="mb-8">
        {`https://api.captureapi.net/screenshot?url=https://example.com&full_page=true`}
      </DocsCodeBlock>

      <h4 className="text-sm font-medium text-foreground mb-2">Custom resolution</h4>
      <DocsCodeBlock className="mb-8">
        {`https://api.captureapi.net/screenshot?url=https://example.com&width=1280&height=720`}
      </DocsCodeBlock>

      <h4 className="text-sm font-medium text-foreground mb-2">Remove popups</h4>
      <DocsCodeBlock>
        {`https://api.captureapi.net/screenshot?url=https://example.com&remove_popups=true`}
      </DocsCodeBlock>
    </section>
  );
}
