import { getSiteUrl } from "@/lib/site";
import { pricingFaqs } from "@/lib/pricing-faqs";

function abs(path: string): string {
  const base = getSiteUrl();
  if (path === "/" || path === "") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
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
