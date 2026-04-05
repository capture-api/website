import type { MetadataRoute } from "next"
import { getSiteUrl } from "@/lib/site"

/** Required for `output: "export"` (static HTML export). */
export const dynamic = "force-static"

/** Marketing routes — keep in sync with `app/` pages. */
const PATHS = [
  "",
  "/about",
  "/blog",
  "/contact",
  "/docs",
  "/features",
  "/pricing",
  "/privacy-policy",
  "/security",
  "/terms-of-service",
] as const

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()

  return PATHS.map((path) => {
    const url = path === "" ? base : `${base}${path}`
    return {
      url,
      lastModified: new Date(),
      changeFrequency: path === "" ? "weekly" : "monthly",
      priority: path === "" ? 1 : 0.8,
    }
  })
}
