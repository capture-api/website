/** @type {import('next').NextConfig} */
const nextConfig = {
  /** Static HTML/CSS/JS in `out/` for Cloudflare Pages and similar hosts. */
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
