import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { DocsPageLayout } from "@/components/docs/docs-page-layout";
import { DocsHero } from "@/components/docs/docs-hero";
import { OverviewSection } from "@/components/docs/overview-section";
import { QuickstartSection } from "@/components/docs/quickstart-section";
import { ApiReferenceSection } from "@/components/docs/api-reference-section";
import { ParametersSection } from "@/components/docs/parameters-section";
import { ResponseSection } from "@/components/docs/response-section";
import { ErrorsSection } from "@/components/docs/errors-section";
import { RateLimitsSection } from "@/components/docs/rate-limits-section";
import { ExamplesSection } from "@/components/docs/examples-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "CaptureAPI Documentation – Screenshot API Guide",
  description:
    "Learn how to use CaptureAPI to generate website screenshots with a simple API request. Complete documentation, parameters, and examples.",
};

export default function DocsPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay pt-24 md:pt-28 pb-24">
      <Navigation />
      <DocsPageLayout>
        <DocsHero />
        <OverviewSection />
        <QuickstartSection />
        <ApiReferenceSection />
        <ParametersSection />
        <ResponseSection />
        <ErrorsSection />
        <RateLimitsSection />
        <ExamplesSection />
      </DocsPageLayout>
      <FooterSection />
    </main>
  );
}
