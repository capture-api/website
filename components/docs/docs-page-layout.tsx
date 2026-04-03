import type { ReactNode } from "react";
import { DocsSidebar } from "./docs-sidebar";

type DocsPageLayoutProps = {
  children: ReactNode;
};

export function DocsPageLayout({ children }: DocsPageLayoutProps) {
  return (
    <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 xl:gap-24">
        <DocsSidebar />
        <div className="min-w-0 flex-1 max-w-4xl">{children}</div>
      </div>
    </div>
  );
}
