import { cn } from "@/lib/utils";

type DocsCodeBlockProps = {
  children: string;
  className?: string;
  title?: string;
};

export function DocsCodeBlock({ children, className, title }: DocsCodeBlockProps) {
  return (
    <div className={cn("rounded-lg border border-foreground/10 bg-foreground/[0.03] overflow-hidden", className)}>
      {title ? (
        <div className="px-4 py-2 border-b border-foreground/10 font-mono text-xs text-muted-foreground">
          {title}
        </div>
      ) : null}
      <pre className="p-4 lg:p-5 overflow-x-auto text-sm leading-relaxed font-mono text-foreground/90">
        <code>{children.trim()}</code>
      </pre>
    </div>
  );
}
