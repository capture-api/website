import { getSiteUrl } from "@/lib/site";
import { pricingFaqs } from "@/lib/pricing-faqs";

function abs(path: string): string {
  const base = getSiteUrl();
  if (path === "/" || path === "") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Human-readable labels for URL segments (BreadcrumbList JSON-LD only; no UI). */
const BREADCRUMB_SEGMENT_LABELS: Record<string, string> = {
  about: "About",
  blog: "Blog",
  contact: "Contact",
  docs: "Documentation",
  features: "Features",
  pricing: "Pricing",
  "privacy-policy": "Privacy Policy",
  security: "Security",
  "terms-of-service": "Terms of Service",
};

function labelForBreadcrumbSegment(segment: string): string {
  if (BREADCRUMB_SEGMENT_LABELS[segment]) return BREADCRUMB_SEGMENT_LABELS[segment];
  return segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/**
 * Schema.org BreadcrumbList for the current route (JSON-LD only).
 * @param path - App pathname, e.g. `/`, `/about`, `/privacy-policy`
 */
export function breadcrumbListSchema(path: string) {
  const base = getSiteUrl().replace(/\/$/, "");
  const normalized =
    path === "/" || path === "" ? "/" : path.startsWith("/") ? path.replace(/\/$/, "") || "/" : `/${path}`.replace(/\/$/, "") || "/";
  const segments = normalized === "/" ? [] : normalized.split("/").filter(Boolean);

  type ListItem = {
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  };

  const itemListElement: ListItem[] = [{ "@type": "ListItem", position: 1, name: "Home", item: `${base}/` }];

  if (segments.length === 0) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement,
    };
  }

  let acc = "";
  let position = 2;
  for (const seg of segments) {
    acc += `/${seg}`;
    itemListElement.push({
      "@type": "ListItem",
      position: position++,
      name: labelForBreadcrumbSegment(seg),
      item: `${base}${acc}`,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CaptureAPI",
    url: abs("/"),
    logo: abs("/logo.png"),
    description: "Website Screenshot API for developers.",
    sameAs: ["https://www.linkedin.com/company/captureapi"],
    parentOrganization: {
      "@type": "Organization",
      name: "Peta Bytes, Inc",
    },
  };
}

export function aboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About CaptureAPI",
    url: abs("/about"),
    description: "CaptureAPI is a website screenshot API built for developers.",
    mainEntity: {
      "@type": "Organization",
      name: "CaptureAPI",
      url: abs("/"),
      logo: abs("/logo.png"),
      founder: {
        "@type": "Organization",
        name: "Peta Bytes, Inc",
      },
      sameAs: [
        "https://www.linkedin.com/company/captureapi",
        "https://github.com/capture-api",
      ],
    },
  };
}

export function softwareApplicationHomeSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CaptureAPI",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    description:
      "Capture website screenshots instantly using a fast and developer-friendly API.",
    url: abs("/"),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };
}

export function pricingProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "CaptureAPI Screenshot API",
    description: "API for capturing website screenshots programmatically.",
    brand: {
      "@type": "Brand",
      name: "CaptureAPI",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "9",
      availability: "https://schema.org/InStock",
      url: abs("/pricing"),
    },
  };
}

export function pricingFaqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.trim(),
      },
    })),
  };
}

export function docsTechArticleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "CaptureAPI Documentation",
    description: "Documentation for the CaptureAPI screenshot API.",
    author: {
      "@type": "Organization",
      name: "CaptureAPI",
    },
    publisher: {
      "@type": "Organization",
      name: "CaptureAPI",
    },
  };
}

export function featuresSoftwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CaptureAPI",
    applicationCategory: "DeveloperApplication",
    featureList: [
      "Full page screenshots",
      "Multiple output formats",
      "Popup removal",
      "Custom resolution",
    ],
  };
}

/** Placeholder for future blog posts; index page uses a generic Article. */
export function blogIndexArticleSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Capture Website Screenshots Using an API",
    author: {
      "@type": "Organization",
      name: "CaptureAPI",
    },
    publisher: {
      "@type": "Organization",
      name: "CaptureAPI",
    },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact CaptureAPI",
    url: abs("/contact"),
  };
}
