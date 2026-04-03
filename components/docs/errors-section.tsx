import { DocsCodeBlock } from "./docs-code-block";

export function ErrorsSection() {
  const rows = [
    { error: "Invalid API key", desc: "API key is incorrect" },
    { error: "Missing URL", desc: "URL parameter required" },
    { error: "Rate limit exceeded", desc: "Too many requests" },
  ];

  return (
    <section id="errors" className="scroll-mt-28 border-b border-foreground/10 py-16 lg:py-20">
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-8">
        Error responses
      </h2>
      <p className="text-muted-foreground mb-6 max-w-3xl">
        Errors return JSON with <code className="font-mono text-sm text-foreground">success: false</code>{" "}
        and an error message.
      </p>
      <DocsCodeBlock title="Example">
        {`{
  "success": false,
  "error": "Invalid API key"
}`}
      </DocsCodeBlock>

      <h3 className="text-sm font-medium text-foreground mt-10 mb-4">Common errors</h3>
      <div className="overflow-x-auto rounded-lg border border-foreground/10">
        <table className="w-full min-w-[480px] text-sm text-left">
          <thead>
            <tr className="border-b border-foreground/10 bg-foreground/[0.03]">
              <th className="px-4 py-3 font-medium text-foreground">Error</th>
              <th className="px-4 py-3 font-medium text-foreground">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.error} className={i % 2 === 1 ? "bg-foreground/[0.02]" : ""}>
                <td className="px-4 py-3 font-mono text-foreground">{r.error}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
