"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { messageFromApiError } from "@/lib/contact-errors";

type ContactFormSectionProps = {
  className?: string;
};

export function ContactFormSection({ className }: ContactFormSectionProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      company: (form.elements.namedItem("company") as HTMLInputElement).value.trim(),
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      const raw = await res.text();
      let payload: unknown = null;
      try {
        payload = raw.trim() ? JSON.parse(raw) : null;
      } catch {
        setStatus("error");
        setErrorMessage(
          "Invalid response from server. Please try again or email support@captureapi.net."
        );
        return;
      }

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(messageFromApiError(payload));
        return;
      }

      if (payload && typeof payload === "object" && payload !== null && "error" in payload) {
        setStatus("error");
        setErrorMessage(messageFromApiError(payload));
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again or email us directly.");
    }
  }

  return (
    <section id="contact-form" className={cn("relative py-32 lg:py-40", className)}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mb-12 lg:mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-6">
            Send a message
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-4">
            Tell us what you <span className="text-stroke">need</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Fill out the form below and our team will follow up by email.
          </p>
        </div>

        <div className="max-w-xl border border-foreground/10 bg-background p-8 lg:p-10">
          {status === "success" ? (
            <div className="py-8 text-center">
              <p className="font-display text-2xl text-foreground mb-3">Message sent</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Thanks for reaching out. We&apos;ll reply as soon as we can.
              </p>
              <Button
                type="button"
                variant="outline"
                className="mt-8 rounded-full"
                onClick={() => setStatus("idle")}
              >
                Send another message
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-2">
                <Label htmlFor="contact-name">Name</Label>
                <Input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="h-12 rounded-md"
                  placeholder="Jane Doe"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="h-12 rounded-md"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-company">Company (optional)</Label>
                <Input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="h-12 rounded-md"
                  placeholder="Acme Inc."
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Message</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  className="min-h-[140px] rounded-md resize-y"
                  placeholder="How can we help?"
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-destructive" role="alert">
                  {errorMessage}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full sm:w-auto bg-foreground hover:bg-foreground/90 text-background px-8 h-12 text-base rounded-full group"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin shrink-0" aria-hidden />
                    Sending
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
