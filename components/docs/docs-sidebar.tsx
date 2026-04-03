"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

const items: { label: string; href: string }[] = [
  { label: "Overview", href: "#overview" },
  { label: "Quickstart", href: "#quickstart" },
  { label: "API Reference", href: "#api-reference" },
  { label: "Parameters", href: "#parameters" },
  { label: "Response", href: "#response" },
  { label: "Errors", href: "#errors" },
  { label: "Rate Limits", href: "#rate-limits" },
  { label: "Examples", href: "#examples" },
  { label: "Support", href: "/contact" },
];

export function DocsSidebar() {
  return (
    <aside className="lg:w-56 shrink-0">
      <nav
        aria-label="Documentation"
        className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto pb-8 lg:pb-0"
      >
        <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4 hidden lg:block">
          On this page
        </p>
        <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-0 lg:space-y-1">
          {items.map((item) => {
            const className = cn(
              "text-sm transition-colors rounded-md px-3 py-2 lg:px-2 lg:py-1.5 -mx-2 block",
              "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
              "lg:w-full lg:text-left"
            );
            if (item.href.startsWith("/")) {
              return (
                <li key={item.label}>
                  <Link href={item.href} className={className}>
                    {item.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <a href={item.href} className={className}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
