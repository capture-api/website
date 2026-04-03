export function ParametersSection() {
  const rows = [
    {
      param: "url",
      type: "string",
      required: "Yes",
      default: "—",
      desc: "Website URL to screenshot",
    },
    {
      param: "api_key",
      type: "string",
      required: "Yes",
      default: "—",
      desc: "Your API key",
    },
    {
      param: "width",
      type: "integer",
      required: "No",
      default: "1920",
      desc: "Screenshot width",
    },
    {
      param: "height",
      type: "integer",
      required: "No",
      default: "1080",
      desc: "Screenshot height",
    },
    {
      param: "full_page",
      type: "boolean",
      required: "No",
      default: "false",
      desc: "Capture full page",
    },
    {
      param: "format",
      type: "string",
      required: "No",
      default: "png",
      desc: "png, jpg, webp, pdf",
    },
    {
      param: "remove_popups",
      type: "boolean",
      required: "No",
      default: "false",
      desc: "Remove cookie banners and popups",
    },
  ];

  return (
    <section id="parameters" className="scroll-mt-28 border-b border-foreground/10 py-16 lg:py-20">
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-8">
        Query parameters
      </h2>
      <div className="overflow-x-auto rounded-lg border border-foreground/10">
        <table className="w-full min-w-[640px] text-sm text-left">
          <thead>
            <tr className="border-b border-foreground/10 bg-foreground/[0.03]">
              <th className="px-4 py-3 font-medium text-foreground">Parameter</th>
              <th className="px-4 py-3 font-medium text-foreground">Type</th>
              <th className="px-4 py-3 font-medium text-foreground">Required</th>
              <th className="px-4 py-3 font-medium text-foreground">Default</th>
              <th className="px-4 py-3 font-medium text-foreground">Description</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.param}
                className={i % 2 === 1 ? "bg-foreground/[0.02]" : ""}
              >
                <td className="px-4 py-3 font-mono text-foreground">{r.param}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.type}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.required}</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">{r.default}</td>
                <td className="px-4 py-3 text-muted-foreground">{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
