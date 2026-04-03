"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const items: { label: string; href: string }[] = [
  { label: "Overview", href: "#overview" },
  { label: "Quickstart", href: "#quickstart" },
  { label: "API Reference", href: "#api-reference" },
  { label: "Parameters", href: "#parameters" },
  { label: "Response", href: "#response" },
  { label: "Health", href: "#health" },
  { label: "Account summary", href: "#account-summary" },
  { label: "Errors", href: "#errors" },
  { label: "Rate Limits", href: "#rate-limits" },
  { label: "Examples", href: "#examples" },
  { label: "Support", href: "/contact" },
];

const SECTION_IDS = items
  .filter((item) => item.href.startsWith("#"))
  .map((item) => item.href.slice(1));

/** Pixels from top of viewport — section tops above this count as “passed” (below fixed header). */
const HEADER_OFFSET = 132;

function computeActiveSectionId(): string {
  const scrollY = window.scrollY;
  const doc = document.documentElement;
  const nearBottom =
    window.innerHeight + scrollY >= doc.scrollHeight - 48;

  if (nearBottom && SECTION_IDS.length > 0) {
    return SECTION_IDS[SECTION_IDS.length - 1];
  }

  let active = SECTION_IDS[0] ?? "overview";
  for (const id of SECTION_IDS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + scrollY;
    if (top <= scrollY + HEADER_OFFSET) {
      active = id;
    }
  }
  return active;
}

export function DocsSidebar() {
  const [activeId, setActiveId] = useState<string>(SECTION_IDS[0] ?? "overview");

  const updateActive = useCallback(() => {
    setActiveId(computeActiveSectionId());
  }, []);

  useEffect(() => {
    updateActive();
    const schedule = () => {
      requestAnimationFrame(updateActive);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("hashchange", updateActive);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", updateActive);
    };
  }, [updateActive]);

  return (
    <aside className="w-full lg:w-56 shrink-0">
      <div className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto pb-8 lg:py-0">
        <nav aria-label="Documentation">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-4 hidden lg:block">
            On this page
          </p>
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-0 lg:space-y-1">
            {items.map((item) => {
              const hashId = item.href.startsWith("#") ? item.href.slice(1) : null;
              const isActive = hashId !== null && activeId === hashId;

              const className = cn(
                "text-sm transition-colors rounded-md px-3 py-2 lg:px-2 lg:py-1.5 -mx-2 block border-l-2 border-transparent",
                isActive
                  ? "text-foreground font-medium bg-foreground/10 lg:border-foreground lg:bg-foreground/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-foreground/5",
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
                  <a
                    href={item.href}
                    className={className}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
