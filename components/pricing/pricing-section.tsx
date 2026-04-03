import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    description: "For individuals and small projects",
    price: { monthly: 0 },
    features: [
      "200 screenshots / month",
      "5 req/min",
      "PNG format",
      "3 days retention",
      "1 API key",
    ],
    cta: "Start free",
    popular: false,
  },
  {
    name: "Solo",
    description: "For growing teams and businesses",
    price: { monthly: 9 },
    features: [
      "1,000 screenshots / month",
      "40 req/min",
      "PNG, JPG, WebP",
      "30 days retention",
      "Remove popups",
      "5 API keys"
    ],
    cta: "Start trial",
    popular: true,
  },
  {
    name: "Elite",
    description: "For large-scale operations",
    price: { monthly: 29 },
    features: [
      "4000 screenshots / month",
      "100 req/min",
      "PNG, JPG, WebP, PDF",
      "Priority rendering",
      "90 days retention",
      "Unlimited API keys",
      "Priority support",
    ],
    cta: "Get Elite Plan",
    popular: false,
  },
];

type PricingSectionProps = {
  className?: string;
};

export function PricingSection({ className }: PricingSectionProps) {
  return (
    <section
      id="pricing"
      className={cn("relative py-32 lg:py-40 border-t border-foreground/10", className)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Pricing
          </span>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground mb-6">
          Simple, transparent 
            <br />
            <span className="text-stroke">Screenshot API pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {plans.map((plan, idx) => (
            <div
              key={plan.name}
              className={`relative p-8 lg:p-12 bg-background ${
                plan.popular ? "md:-my-4 md:py-12 lg:py-16 border-2 border-foreground" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-8 px-3 py-1 bg-foreground text-primary-foreground text-xs font-mono uppercase tracking-widest">
                  Best Value
                </span>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-3xl text-foreground mt-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-foreground/10">
                {plan.price.monthly !== null ? (
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-5xl lg:text-6xl text-foreground">
                      ${plan.price.monthly}
                    </span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                ) : (
                  <span className="font-display text-4xl text-foreground">Custom</span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-foreground mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`w-full py-4 flex items-center justify-center gap-2 text-sm font-medium transition-all group ${
                  plan.popular
                    ? "bg-foreground text-primary-foreground hover:bg-foreground/90"
                    : "border border-foreground/20 text-foreground hover:border-foreground hover:bg-foreground/5"
                }`}
              >
                {plan.cta}
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p className="mt-12 text-center text-sm text-muted-foreground">
        Start free. No credit card required.
        </p>
      </div>
    </section>
  );
}
