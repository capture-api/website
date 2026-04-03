export function RateLimitsSection() {
  const rows = [
    { plan: "Free", rpm: "5" },
    { plan: "Pro", rpm: "40" },
    { plan: "Elite", rpm: "100" },
  ];

  return (
    <section id="rate-limits" className="scroll-mt-28 border-b border-foreground/10 py-16 lg:py-20">
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-4">
        Rate limits
      </h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Rate limits depend on your plan. Limits are applied per API key and reset each minute.
      </p>
      <div className="overflow-x-auto rounded-lg border border-foreground/10 max-w-lg">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="border-b border-foreground/10 bg-foreground/[0.03]">
              <th className="px-4 py-3 font-medium text-foreground">Plan</th>
              <th className="px-4 py-3 font-medium text-foreground">Requests / minute</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.plan} className={i % 2 === 1 ? "bg-foreground/[0.02]" : ""}>
                <td className="px-4 py-3 font-medium text-foreground">{r.plan}</td>
                <td className="px-4 py-3 font-mono text-muted-foreground">{r.rpm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
