import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/site"

/** Shared Open Graph / Twitter image — place file at `public/captureapi-og.webp`. */
export const OG_IMAGE_PATH = "/captureapi-og.webp" as const

export const SITE_NAME = "CaptureAPI"

export const defaultTitle = "Website Screenshot API for Developers | CaptureAPI"
export const defaultDescription =
  "Capture website screenshots instantly with our fast Screenshot API. Convert URLs to images, thumbnails, or PDFs with a scalable developer API."

/** Root layout: base URL, icons, robots, and default social tags. */
export function buildRootMetadata(): Metadata {
  const base = getSiteUrl()

  return {
    metadataBase: new URL(base),
    title: {
      default: defaultTitle,
    },
    description: defaultDescription,
    applicationName: SITE_NAME,
    authors: [{ name: "Peta Bytes, Inc.", url: base }],
    creator: "Peta Bytes, Inc.",
    publisher: SITE_NAME,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [{ url: "/captureapi-icon.png", type: "image/png" }],
      shortcut: "/captureapi-icon.png",
      apple: "/apple-icon.png",
    },
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: base,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: SITE_NAME + " - Website screenshot API for developers",
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [OG_IMAGE_PATH],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  }
}

/**
 * Per-page SEO + Open Graph + Twitter (canonical URL and og:url per route).
 * Use on each route's page module so social previews match the page.
 */
function normalizePathname(pathname: string): string {
  if (pathname === "" || pathname === "/") return "/"
  return pathname.startsWith("/") ? pathname : "/" + pathname
}

export function seoPageMetadata(input: {
  title: string
  description: string
  pathname: string
}): Metadata {
  const canonical = normalizePathname(input.pathname)
  const base = getSiteUrl()
  const ogUrl = canonical === "/" ? base : base + canonical

  return {
    title: input.title,
    description: input.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: input.title,
      description: input.description,
      url: ogUrl,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: SITE_NAME + " - " + input.title,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images: [OG_IMAGE_PATH],
    },
  }
}
