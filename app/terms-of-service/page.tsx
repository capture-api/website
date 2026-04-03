import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { TermsHero } from "@/components/terms/terms-hero";
import { TermsOfServiceSections } from "@/components/terms/terms-of-service-sections";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Terms of Service | CaptureAPI",
  description:
    "Terms governing use of the CaptureAPI website screenshot API. Operated by Peta Bytes, Inc.",
};

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay pt-24 md:pt-28">
      <Navigation />
      <TermsHero />
      <TermsOfServiceSections />
      <FooterSection />
    </main>
  );
}
