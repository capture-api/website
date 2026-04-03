/**
 * Safe user-facing messages from API JSON (DRF / Django proxy).
 * Never surfaces raw HTML or huge debug payloads.
 */

const FALLBACK =
  "Something went wrong. Please try again or email support@captureapi.net.";

function looksLikeHtml(s: string): boolean {
  const t = s.slice(0, 200).trim().toLowerCase();
  return (
    t.startsWith("<!doctype") ||
    t.startsWith("<html") ||
    t.includes("<body") ||
    t.includes("<head")
  );
}

function sanitizeSnippet(s: string, maxLen = 280): string {
  const trimmed = s.trim();
  if (looksLikeHtml(trimmed)) return FALLBACK;
  if (trimmed.length > maxLen) return `${trimmed.slice(0, maxLen)}…`;
  return trimmed;
}

/**
 * Turn DRF / common API error JSON into a single string for the form.
 */
export function messageFromApiError(data: unknown): string {
  if (data == null) return FALLBACK;

  if (typeof data === "string") {
    return sanitizeSnippet(data);
  }

  if (typeof data !== "object" || Array.isArray(data)) {
    return FALLBACK;
  }

  const o = data as Record<string, unknown>;

  if (typeof o.error === "string" && o.error.length > 0) {
    return sanitizeSnippet(o.error);
  }

  if (typeof o.detail === "string" && o.detail.length > 0) {
    return sanitizeSnippet(o.detail);
  }

  if (Array.isArray(o.detail) && o.detail.length > 0) {
    const parts = o.detail.map((x) => String(x)).filter(Boolean);
    return sanitizeSnippet(parts.join(" "));
  }

  if (typeof o.detail === "object" && o.detail !== null) {
    try {
      const s = JSON.stringify(o.detail);
      return sanitizeSnippet(s);
    } catch {
      return FALLBACK;
    }
  }

  if (Array.isArray(o.non_field_errors) && o.non_field_errors.length > 0) {
    return sanitizeSnippet(
      o.non_field_errors.map((x) => String(x)).join(" ")
    );
  }

  const fieldMessages: string[] = [];
  for (const [key, val] of Object.entries(o)) {
    if (key === "error" || key === "detail" || key === "ok") continue;
    if (Array.isArray(val)) {
      fieldMessages.push(...val.map((x) => String(x)));
    } else if (typeof val === "string") {
      fieldMessages.push(val);
    }
  }
  if (fieldMessages.length > 0) {
    return sanitizeSnippet(fieldMessages.join(" "));
  }

  return FALLBACK;
}
