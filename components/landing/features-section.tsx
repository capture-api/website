"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Instant Website Screenshots",
    description: "Capture full-page screenshots of any website instantly using our powerful screenshot API. Simply send a URL and receive high-quality images in seconds.",
    visual: "capture",
  },
  {
    number: "02",
    title: "Full Page & Device Rendering",
    description: "Render websites exactly as users see them. Capture screenshots in desktop, tablet, or mobile view with full-page support.",
    visual: "devices",
  },
  {
    number: "03",
    title: "Multiple Output Formats",
    description: "Convert URLs into PNG, JPG, or PDF screenshots with a simple API request. Perfect for automation, monitoring, and SEO tools.",
    visual: "formats",
  },
  {
    number: "04",
    title: "Fast & Scalable API",
    description: "Generate screenshots quickly with our reliable infrastructure designed to scale for high-volume screenshot automation.",
    visual: "speed",
  },
];

function ScreenshotCaptureVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">

      {/* browser window */}
      <rect x="40" y="30" width="120" height="80" rx="6"
        fill="none" stroke="currentColor" strokeWidth="2"/>

      {/* browser buttons */}
      <circle cx="55" cy="40" r="3" fill="currentColor"/>
      <circle cx="65" cy="40" r="3" fill="currentColor"/>
      <circle cx="75" cy="40" r="3" fill="currentColor"/>

      {/* camera lens */}
      <circle cx="100" cy="75" r="12"
        fill="none" stroke="currentColor" strokeWidth="2">
        <animate attributeName="r" values="12;15;12" dur="2s" repeatCount="indefinite"/>
      </circle>

      {/* shutter flash */}
      <circle cx="100" cy="75" r="4" fill="currentColor">
        <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite"/>
      </circle>

    </svg>
  );
}

/** Stable string coords for SVG — avoids SSR/client float serialization mismatches. */
function svgCoord(n: number): string {
  return n.toFixed(4);
}

function DeviceRenderVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">

      {/* desktop */}
      <rect x="30" y="40" width="90" height="55"
        rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>

      <rect x="65" y="95" width="20" height="8"
        fill="currentColor"/>

      {/* mobile */}
      <rect x="135" y="45" width="28" height="60"
        rx="6" fill="none" stroke="currentColor" strokeWidth="2"/>

      {/* loading animation */}
      <circle cx="150" cy="75" r="3" fill="currentColor">
        <animate attributeName="cy" values="70;80;70" dur="1.5s" repeatCount="indefinite"/>
      </circle>

    </svg>
  );
}

function OutputFormatsVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">

      {/* base screenshot */}
      <rect x="70" y="40" width="60" height="50"
        rx="4" fill="none" stroke="currentColor" strokeWidth="2"/>

      {/* arrow */}
      <line x1="100" y1="90" x2="100" y2="110"
        stroke="currentColor" strokeWidth="2"/>

      <polygon points="95,110 105,110 100,120"
        fill="currentColor"/>

      {/* files */}
      <rect x="40" y="120" width="25" height="20"
        rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>

      <rect x="85" y="120" width="25" height="20"
        rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>

      <rect x="130" y="120" width="25" height="20"
        rx="3" fill="none" stroke="currentColor" strokeWidth="2"/>

    </svg>
  );
}

function ApiSpeedVisual() {
  return (
    <svg viewBox="0 0 200 160" className="w-full h-full">

      {/* center API */}
      <circle cx="100" cy="80" r="12"
        fill="currentColor"/>

      {/* nodes */}
      {[0,1,2,3].map((i)=>{
        const angle = i * 90 * Math.PI / 180
        const x = 100 + Math.cos(angle)*50
        const y = 80 + Math.sin(angle)*50

        return (
          <g key={i}>
            <line
              x1="100"
              y1="80"
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="2"
              opacity="0.4"
            />
            <circle cx={x} cy={y} r="6"
              fill="none" stroke="currentColor" strokeWidth="2">
              <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite"/>
            </circle>
          </g>
        )
      })}

    </svg>
  );
}

function AnimatedVisual({ type }: { type: string }) {
  switch (type) {
    case "capture":
      return <ScreenshotCaptureVisual />;
    case "devices":
      return <DeviceRenderVisual />;
    case "formats":
      return <OutputFormatsVisual />;
    case "speed":
      return <ApiSpeedVisual />;
    default:
      return <ScreenshotCaptureVisual />;
  }
}

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`group relative transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 py-8 sm:py-12 lg:py-20 border-b border-foreground/10">
        {/* Number */}
        <div className="shrink-0">
          <span className="font-mono text-sm text-muted-foreground">{feature.number}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center min-w-0">
          <div className="min-w-0">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display mb-3 sm:mb-4 group-hover:translate-x-2 transition-transform duration-500">
              {feature.title}
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
          
          {/* Visual */}
          <div className="flex justify-center lg:justify-end shrink-0">
            <div className="w-40 h-32 sm:w-48 sm:h-40 text-foreground max-w-full">
              <AnimatedVisual type={feature.visual} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative z-10 bg-background py-16 sm:py-24 lg:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-16 lg:mb-24">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-4 sm:mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Capabilities
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Capture Website Screenshots Instantly
            <br />
            <span className="text-muted-foreground">Using a Powerful Screenshot API.</span>
          </h2>
        </div>

        {/* Features List */}
        <div>
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
