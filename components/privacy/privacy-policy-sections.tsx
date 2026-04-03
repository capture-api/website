import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

function SectionTitle({
  children,
  as: Tag = "h2",
  className,
}: {
  children: ReactNode;
  as?: "h2" | "h3";
  className?: string;
}) {
  const TagName = Tag;
  return (
    <TagName
      className={cn(
        Tag === "h2"
          ? "font-display text-2xl md:text-3xl tracking-tight text-foreground"
          : "text-base font-semibold text-foreground mt-8 mb-3",
        className
      )}
    >
      {children}
    </TagName>
  );
}

export function PrivacyPolicySections() {
  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-20 pb-24">
      <section className="mb-16 scroll-mt-28" id="information-we-collect">
        <SectionTitle>Information we collect</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4 mb-6">
          We may collect the following information:
        </p>

        <SectionTitle as="h3">Account information</SectionTitle>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed mt-3 mb-8">
          <li>Email address</li>
          <li>Name (if provided)</li>
          <li>Billing details via Stripe</li>
        </ul>

        <SectionTitle as="h3">API usage data</SectionTitle>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed mt-3 mb-8">
          <li>API requests</li>
          <li>URLs submitted for screenshots</li>
          <li>Request metadata (timestamps, parameters)</li>
        </ul>

        <SectionTitle as="h3">Technical data</SectionTitle>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed mt-3">
          <li>IP address</li>
          <li>Browser type</li>
          <li>Device information</li>
          <li>Log data</li>
        </ul>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="how-we-use">
        <SectionTitle>How we use information</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
          We use collected information to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
          <li>Provide and operate the CaptureAPI service</li>
          <li>Process payments via Stripe</li>
          <li>Improve API performance</li>
          <li>Prevent abuse and unauthorized access</li>
          <li>Provide customer support</li>
        </ul>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="screenshot-data">
        <SectionTitle>Screenshot data</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Screenshots generated through the API are temporarily stored to deliver the screenshot URL.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Screenshots are automatically deleted after the retention period associated with your plan.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="payments">
        <SectionTitle>Payments</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Payments are processed securely through Stripe.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          We do not store credit card details on our servers.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="data-security">
        <SectionTitle>Data security</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          We implement industry-standard security measures to protect user data and API requests.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="third-parties">
        <SectionTitle>Third-party services</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
          We may use trusted third-party services including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
          <li>Stripe (payments)</li>
          <li>Cloud infrastructure providers</li>
          <li>Analytics tools</li>
        </ul>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="your-rights">
        <SectionTitle>Your rights</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4 mb-4">You may request to:</p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed mb-4">
          <li>Access your data</li>
          <li>Delete your account</li>
          <li>Remove stored information</li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Contact us for requests regarding your data.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="changes">
        <SectionTitle>Changes</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          We may update this policy from time to time. Updates will be reflected on this page.
        </p>
      </section>

      <section className="border-t border-foreground/10 pt-16 scroll-mt-28" id="contact">
        <SectionTitle>Contact</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          If you have questions about this Privacy Policy, contact:
        </p>
        <p className="mt-4">
          <a
            href="mailto:support@captureapi.net"
            className="font-mono text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            support@captureapi.net
          </a>
        </p>
      </section>
    </article>
  );
}
