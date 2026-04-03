import { DocsCodeBlock } from "./docs-code-block";
import { EXAMPLE_ACCOUNT_SUMMARY_JSON } from "@/lib/docs-account-summary-example";

export function AccountSummarySection() {
  return (
    <section
      id="account-summary"
      className="scroll-mt-28 border-b border-foreground/10 py-16 lg:py-20"
    >
      <h2 className="font-display text-3xl lg:text-4xl tracking-tight text-foreground mb-2">
        Account summary
      </h2>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Retrieve your account information including full name, email, usage summary, rate limits,
        plan information, and plan features.
      </p>

      <div className="inline-flex items-center gap-3 rounded-lg border border-foreground/15 bg-foreground/[0.03] px-4 py-3 mb-6">
        <span className="font-mono text-xs uppercase tracking-wider text-foreground">GET</span>
        <code className="font-mono text-sm text-foreground">/account/summary</code>
      </div>

      <h3 className="text-sm font-medium text-foreground mb-3">Endpoint</h3>
      <DocsCodeBlock className="mb-10">{`https://api.captureapi.net/account/summary`}</DocsCodeBlock>

      <h3 className="text-sm font-medium text-foreground mb-3">Query parameters</h3>
      <div className="overflow-x-auto rounded-lg border border-foreground/10 mb-10 max-w-2xl">
        <table className="w-full min-w-[400px] text-sm text-left">
          <thead>
            <tr className="border-b border-foreground/10 bg-foreground/[0.03]">
              <th className="px-4 py-3 font-medium text-foreground">Parameter</th>
              <th className="px-4 py-3 font-medium text-foreground">Type</th>
              <th className="px-4 py-3 font-medium text-foreground">Required</th>
              <th className="px-4 py-3 font-medium text-foreground">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 font-mono text-foreground">api_key</td>
              <td className="px-4 py-3 text-muted-foreground">string</td>
              <td className="px-4 py-3 text-muted-foreground">Yes</td>
              <td className="px-4 py-3 text-muted-foreground">
                Your API key for authentication
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-sm font-medium text-foreground mb-3">Response</h3>
      <p className="text-muted-foreground mb-4 max-w-3xl text-sm leading-relaxed">
        The response includes:
      </p>
      <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground mb-8 max-w-3xl">
        <li>
          <code className="font-mono text-foreground">full_name</code>: Your full name
        </li>
        <li>
          <code className="font-mono text-foreground">email</code>: Your email address
        </li>
        <li>
          <code className="font-mono text-foreground">usage_summary</code>: Current month usage,
          remaining quota, usage percentage, average response time, and usage by API key
        </li>
        <li>
          <code className="font-mono text-foreground">rate_limits</code>: Requests per minute and
          monthly limits
        </li>
        <li>
          <code className="font-mono text-foreground">plan_name</code>: Name of your current
          subscription plan
        </li>
        <li>
          <code className="font-mono text-foreground">plan_display_name</code>: Display name of your
          subscription plan
        </li>
        <li>
          <code className="font-mono text-foreground">plan_features</code>: Available features for
          your plan (formats, custom_resolution, full_page, etc.)
        </li>
      </ul>

      <h3 className="text-sm font-medium text-foreground mb-3">Example response</h3>
      <DocsCodeBlock title="JSON" className="mb-10">
        {EXAMPLE_ACCOUNT_SUMMARY_JSON}
      </DocsCodeBlock>

      <h3 className="text-sm font-medium text-foreground mb-3">Example request</h3>
      <DocsCodeBlock title="cURL">
        {`curl "https://api.captureapi.net/account/summary?api_key=YOUR_API_KEY"`}
      </DocsCodeBlock>
    </section>
  );
}
