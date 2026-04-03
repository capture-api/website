"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

const httpExamples = [
  {
    label: "JavaScript",
    code: `const url = "https://api.captureapi.net/screenshot?url=https://example.com&api_key=YOUR_API_KEY";

const response = await fetch(url);
const data = await response.json();

console.log(data.screenshot_url);`,
  },
  {
    label: "Python",
    code: `import requests

params = {
  "url": "https://example.com",
  "api_key": "YOUR_API_KEY"
}

response = requests.get(
  "https://api.captureapi.net/screenshot",
  params=params
)

print(response.json())`,
  },
];

const urlOptionExamples = [
  {
    label: "Full page",
    code: `https://api.captureapi.net/screenshot?url=https://example.com&full_page=true`,
  },
  {
    label: "Custom resolution",
    code: `https://api.captureapi.net/screenshot?url=https://example.com&width=1280&height=720`,
  },
  {
    label: "Remove popups",
    code: `https://api.captureapi.net/screenshot?url=https://example.com&remove_popups=true`,
  },
];

function CodeTabs({
  examples,
  "aria-label": ariaLabel = "Code example",
}: {
  examples: { label: string; code: string }[];
  "aria-label"?: string;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(examples[activeTab].code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="border border-foreground/10">
      <div
        className="flex items-center border-b border-foreground/10 overflow-x-auto"
        role="tablist"
        aria-label={ariaLabel}
      >
        {examples.map((example, idx) => (
          <button
            key={example.label}
            type="button"
            role="tab"
            aria-selected={activeTab === idx}
            onClick={() => setActiveTab(idx)}
            className={`shrink-0 px-4 sm:px-6 py-4 text-sm font-mono transition-colors relative ${
              activeTab === idx
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {example.label}
            {activeTab === idx && (
              <span className="absolute bottom-0 left-0 right-0 h-px bg-foreground" />
            )}
          </button>
        ))}
        <div className="flex-1 min-w-[1rem]" />
        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 px-4 py-4 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-600" aria-hidden />
          ) : (
            <Copy className="w-4 h-4" aria-hidden />
          )}
        </button>
      </div>

      <div
        className="p-6 lg:p-8 font-mono text-sm bg-foreground/[0.01] min-h-[160px] overflow-x-auto"
        role="tabpanel"
      >
        <pre className="text-foreground/80 whitespace-pre-wrap break-words">
          {examples[activeTab].code}
        </pre>
      </div>
    </div>
  );
}

export function DocsHttpExamplesTabs() {
  return <CodeTabs examples={httpExamples} aria-label="HTTP client examples" />;
}

export function DocsUrlOptionsTabs() {
  return <CodeTabs examples={urlOptionExamples} aria-label="Screenshot URL examples" />;
}
