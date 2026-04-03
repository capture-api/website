import type { Metadata } from "next";
import { canonicalMetadata } from "@/lib/site";
import { contactPageSchema } from "@/lib/json-ld-builders";
import { JsonLd } from "@/components/json-ld/json-ld";
import { Navigation } from "@/components/landing/navigation";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactDetailsSection } from "@/components/contact/contact-details-section";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Contact Us | CaptureAPI",
  description:
    "Contact the CaptureAPI team for sales, support, or partnership questions. We typically respond within one business day.",
  ...canonicalMetadata("/contact"),
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay pt-24 md:pt-28">
      <JsonLd data={contactPageSchema()} />
      <Navigation />
      <ContactHero />
      <ContactDetailsSection />
      <ContactFormSection className="border-t border-foreground/10" />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
