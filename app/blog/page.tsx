import type { Metadata } from "next";
import { canonicalMetadata } from "@/lib/site";
import { blogIndexArticleSchema, breadcrumbListSchema } from "@/lib/json-ld-builders";
import { JsonLd } from "@/components/json-ld/json-ld";
import { Navigation } from "@/components/landing/navigation";
import { BlogHero } from "@/components/blog/blog-hero";
import { BlogListSection } from "@/components/blog/blog-list-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export const metadata: Metadata = {
  title: "Blog | CaptureAPI",
  description:
    "Product updates, API tips, and engineering notes from the CaptureAPI team.",
  ...canonicalMetadata("/blog"),
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay pt-24 md:pt-28">
      <JsonLd data={[blogIndexArticleSchema(), breadcrumbListSchema("/blog")]} />
      <Navigation />
      <BlogHero />
      <BlogListSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
