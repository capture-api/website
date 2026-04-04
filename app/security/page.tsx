import type { Metadata } from "next";
import { canonicalMetadata } from "@/lib/site";
import { breadcrumbListSchema } from "@/lib/json-ld-builders";
import { JsonLd } from "@/components/json-ld/json-ld";
import { Navigation } from "@/components/landing/navigation";
import { SecurityHero } from "@/components/security/security-hero";
import { SecuritySections } from "@/components/security/security-sections";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Security | CaptureAPI",
  description:
    "How CaptureAPI secures API access, encryption, isolated rendering, infrastructure, and responsible disclosure.",
  ...canonicalMetadata("/security"),
};

export default function SecurityPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay pt-24 md:pt-28">
      <JsonLd data={breadcrumbListSchema("/security")} />
      <Navigation />
      <SecurityHero />
      <SecuritySections />
      <FooterSection />
    </main>
  );
}
