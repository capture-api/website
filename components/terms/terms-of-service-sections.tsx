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

export function TermsOfServiceSections() {
  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-20 pb-24">
      <section className="mb-16 scroll-mt-28" id="acceptance-of-terms">
        <SectionTitle>Acceptance of terms</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          By accessing or using CaptureAPI, you agree to these Terms of Service.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          If you do not agree with these terms, you may not use the service.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="service-description">
        <SectionTitle>Service description</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          CaptureAPI provides an API that generates screenshots of websites submitted by users.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="account-responsibilities">
        <SectionTitle>Account responsibilities</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
          Users are responsible for:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
          <li>Securing their API keys</li>
          <li>Ensuring lawful use of the API</li>
          <li>Managing API usage within plan limits</li>
        </ul>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="acceptable-use">
        <SectionTitle>Acceptable use</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
          Users may not use CaptureAPI to:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
          <li>Capture illegal or harmful content</li>
          <li>Violate privacy laws</li>
          <li>Perform abusive automated activity</li>
          <li>Overload or disrupt the service</li>
        </ul>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="rate-limits">
        <SectionTitle>Rate limits</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          API usage is subject to rate limits and plan quotas. Exceeding limits may result in
          request rejection.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="payments-and-billing">
        <SectionTitle>Payments and billing</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Paid plans are billed through Stripe on a recurring basis.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Subscriptions renew automatically unless cancelled before the next billing cycle.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="service-availability">
        <SectionTitle>Service availability</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          We aim to provide reliable uptime but do not guarantee uninterrupted service.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="limitation-of-liability">
        <SectionTitle>Limitation of liability</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          CaptureAPI and Peta Bytes, Inc. are not liable for damages resulting from service
          interruptions, data loss, or misuse of the API.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="termination">
        <SectionTitle>Termination</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          We reserve the right to suspend or terminate accounts that violate these terms.
        </p>
      </section>

      <section className="border-t border-foreground/10 pt-16 scroll-mt-28" id="changes-to-terms">
        <SectionTitle>Changes to terms</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          These terms may be updated periodically. Continued use of the service constitutes
          acceptance of updated terms.
        </p>
      </section>
    </article>
  );
}
