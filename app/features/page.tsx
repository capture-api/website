import type { Metadata } from "next";
import { seoPageMetadata } from "@/lib/site-metadata";
import { breadcrumbListSchema, featuresSoftwareApplicationSchema } from "@/lib/json-ld-builders";
import { JsonLd } from "@/components/json-ld/json-ld";
import { Navigation } from "@/components/landing/navigation";
import { FeaturesHero } from "@/components/features/features-hero";
import { CoreFeaturesSection } from "@/components/features/core-features-section";
import { DeveloperFeaturesSection } from "@/components/features/developer-features-section";
import { UseCasesSection } from "@/components/features/use-cases-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = seoPageMetadata({
  title: "Screenshot API Features – Powerful Website Capture | CaptureAPI",
  description:
    "Explore CaptureAPI features including full-page screenshots, popup removal, multiple formats, and fast screenshot rendering with a simple API.",
  pathname: "/features",
});

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay pt-24 md:pt-28">
      <JsonLd data={[featuresSoftwareApplicationSchema(), breadcrumbListSchema("/features")]} />
      <Navigation />
      <FeaturesHero />
      <CoreFeaturesSection className="border-t-0" />
      <DeveloperFeaturesSection />
      <UseCasesSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
