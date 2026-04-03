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

export function SecuritySections() {
  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-12 py-16 lg:py-20 pb-24">
      <section className="mb-16 scroll-mt-28" id="overview">
        <SectionTitle>Overview</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Security is a core priority for CaptureAPI.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Our infrastructure and systems are designed to ensure secure API requests and safe
          screenshot processing.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="secure-api-access">
        <SectionTitle>Secure API access</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          All API requests require authentication using a unique API key.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">
          API keys should be kept confidential and never exposed publicly.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="encryption">
        <SectionTitle>Encryption</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          All communication with CaptureAPI is encrypted using HTTPS / TLS encryption.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="isolated-rendering">
        <SectionTitle>Isolated rendering environment</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Screenshots are generated using isolated browser environments to prevent cross-request
          interference.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="data-protection">
        <SectionTitle>Data protection</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          We follow industry-standard practices to protect infrastructure and user data.
        </p>
      </section>

      <section className="mb-16 border-t border-foreground/10 pt-16 scroll-mt-28" id="infrastructure-security">
        <SectionTitle>Infrastructure security</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4 mb-4">
          CaptureAPI runs on secure cloud infrastructure with protections including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground leading-relaxed">
          <li>Network isolation</li>
          <li>Firewall protections</li>
          <li>DDoS mitigation</li>
          <li>Access controls</li>
        </ul>
      </section>

      <section className="border-t border-foreground/10 pt-16 scroll-mt-28" id="responsible-disclosure">
        <SectionTitle>Responsible disclosure</SectionTitle>
        <p className="text-muted-foreground leading-relaxed mt-4">
          If you discover a security vulnerability, please report it responsibly.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-4">Contact:</p>
        <p className="mt-2">
          <a
            href="mailto:security@captureapi.net"
            className="font-mono text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
          >
            security@captureapi.net
          </a>
        </p>
      </section>
    </article>
  );
}
