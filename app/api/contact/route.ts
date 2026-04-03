import { NextRequest, NextResponse } from "next/server";

const API_V1_BASE = (
  process.env.API_V1_URL || "https://api-v1.captureapi.net"
).replace(/\/$/, "");

const GENERIC_UPSTREAM_ERROR =
  "We couldn’t send your message right now. Please try again in a moment or email support@captureapi.net.";

function safeJsonFromUpstream(text: string, httpStatus: number): Record<string, unknown> {
  const trimmed = text.trim();
  if (!trimmed) {
    return {
      error:
        httpStatus >= 500
          ? "The service is temporarily unavailable. Please try again later."
          : "Request failed. Please check your input and try again.",
    };
  }

  const probablyHtml =
    trimmed.startsWith("<!") ||
    trimmed.toLowerCase().startsWith("<html") ||
    (trimmed.startsWith("<") && httpStatus >= 400);

  if (probablyHtml) {
    return {
      error:
        httpStatus >= 500
          ? "The server returned an error page. Please try again later."
          : GENERIC_UPSTREAM_ERROR,
    };
  }

  try {
    const parsed: unknown = JSON.parse(trimmed);
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed as Record<string, unknown>;
    }
    return { error: GENERIC_UPSTREAM_ERROR };
  } catch {
    return {
      error:
        httpStatus >= 500
          ? "The service returned an unexpected response. Please try again later."
          : GENERIC_UPSTREAM_ERROR,
    };
  }
}

/**
 * Server-side proxy to Django: POST /api/contact/ on api-v1.
 * Always responds with JSON so the contact form never renders HTML as text.
 */
export async function POST(request: NextRequest) {
  const body = await request.text();

  let upstream: Response;
  try {
    upstream = await fetch(`${API_V1_BASE}/api/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": request.headers.get("content-type") || "application/json",
        Accept: "application/json",
      },
      body,
      cache: "no-store",
    });
  } catch (e) {
    console.error("[api/contact] proxy fetch failed:", e);
    return NextResponse.json(
      { error: "Unable to reach our servers. Check your connection and try again." },
      { status: 502 }
    );
  }

  const text = await upstream.text();
  const payload = safeJsonFromUpstream(text, upstream.status);

  return NextResponse.json(payload, { status: upstream.status });
}
