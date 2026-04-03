import type { Metadata } from "next";
import { canonicalMetadata } from "@/lib/site";
import { pricingFaqPageSchema, pricingProductSchema } from "@/lib/json-ld-builders";
import { JsonLd } from "@/components/json-ld/json-ld";
import { Navigation } from "@/components/landing/navigation";
import { PricingSection } from "@/components/pricing/pricing-section";
import { FaqSection } from "@/components/pricing/faq-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Screenshot API Pricing - Plans for Every Scale | CaptureAPI",
  description:
    "Explore CaptureAPI pricing plans for website screenshots. Start free and scale with powerful screenshot API features for developers and businesses.",
  ...canonicalMetadata("/pricing"),
};

export default function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay pt-24 md:pt-28">
      <JsonLd data={[pricingProductSchema(), pricingFaqPageSchema()]} />
      <Navigation />
      <PricingSection className="border-t-0" />
      <FaqSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
