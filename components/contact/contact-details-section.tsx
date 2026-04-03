import { Clock, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

type ContactDetailsSectionProps = {
  className?: string;
};

export function ContactDetailsSection({ className }: ContactDetailsSectionProps) {
  return (
    <section
      className={cn(
        "relative py-16 lg:py-20 border-b border-foreground/10 bg-foreground/[0.02]",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10 max-w-4xl">
          <a
            href="mailto:support@captureapi.net"
            className="bg-background p-8 lg:p-10 flex flex-col gap-4 transition-colors hover:bg-foreground/[0.02] group"
          >
            <Mail className="w-8 h-8 text-foreground shrink-0" strokeWidth={1.25} />
            <h2 className="font-display text-xl lg:text-2xl text-foreground tracking-tight">
              Email us
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For billing, technical questions, or partnerships.
            </p>
            <span className="text-sm font-mono text-foreground underline-offset-4 group-hover:underline">
              support@captureapi.net
            </span>
          </a>
          <div className="bg-background p-8 lg:p-10 flex flex-col gap-4">
            <Clock className="w-8 h-8 text-foreground shrink-0" strokeWidth={1.25} />
            <h2 className="font-display text-xl lg:text-2xl text-foreground tracking-tight">
              Response time
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              We typically reply within one business day. Priority support is available on
              higher plans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
