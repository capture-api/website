import type { Metadata } from "next";

/** Public site origin, no trailing slash. Override with NEXT_PUBLIC_SITE_URL in production. */
export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://captureapi.net").replace(/\/$/, "");
}

/** Relative canonical path for Next.js metadata (requires metadataBase on root layout). */
export function canonicalMetadata(path: string): Pick<Metadata, "alternates"> {
  const canonical =
    path === "" || path === "/" ? "/" : path.startsWith("/") ? path : `/${path}`;
  return {
    alternates: {
      canonical: canonical,
    },
  };
}
