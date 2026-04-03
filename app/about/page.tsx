import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { AboutHero } from "@/components/about/about-hero";
import { AboutWhatIsSection } from "@/components/about/about-what-is-section";
import { AboutMissionSection } from "@/components/about/about-mission-section";
import { AboutBuiltForDevelopersSection } from "@/components/about/about-built-for-developers-section";
import { AboutPetaBytesSection } from "@/components/about/about-peta-bytes-section";
import { AboutWhySection } from "@/components/about/about-why-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "About CaptureAPI – Screenshot API for Developers",
  description:
    "Learn about CaptureAPI, a powerful website screenshot API built by developers at Peta Bytes, Inc to simplify automated website capture.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay pt-24 md:pt-28">
      <Navigation />
      <AboutHero />
      <AboutWhatIsSection className="border-t-0" />
      <AboutMissionSection />
      <AboutBuiltForDevelopersSection />
      <AboutPetaBytesSection />
      <AboutWhySection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
