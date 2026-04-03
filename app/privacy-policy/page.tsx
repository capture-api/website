import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { PrivacyHero } from "@/components/privacy/privacy-hero";
import { PrivacyPolicySections } from "@/components/privacy/privacy-policy-sections";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Privacy Policy | CaptureAPI",
  description:
    "How CaptureAPI collects, uses, and protects information when you use our website screenshot API and services. Operated by Peta Bytes, Inc.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay pt-24 md:pt-28">
      <Navigation />
      <PrivacyHero />
      <PrivacyPolicySections />
      <FooterSection />
    </main>
  );
}
