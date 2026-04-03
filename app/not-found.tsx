import Link from "next/link";
import type { Metadata } from "next";
import { Navigation } from "@/components/landing/navigation";
import { FooterSection } from "@/components/landing/footer-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page not found | CaptureAPI",
  description:
    "The page you are looking for does not exist or may have been moved. Return home or browse our documentation.",
};

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay pt-24 md:pt-28 flex flex-col">
      <Navigation />
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 md:py-28 lg:py-32 max-w-2xl mx-auto w-full text-center">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
          404
        </span>
        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6 leading-[1.05]">
          Page not{" "}
          <span className="text-stroke">found</span>
        </h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Try the links below
          or head back home.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background px-8 h-12 rounded-full w-full sm:w-auto"
          >
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="h-12 px-8 rounded-full w-full sm:w-auto border-foreground/20">
            <Link href="/docs">Documentation</Link>
          </Button>
        </div>
      </div>
      <FooterSection />
    </main>
  );
}
