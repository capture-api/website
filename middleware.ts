import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** POST /contact → internal API route that proxies to Django (see app/api/contact/route.ts). */
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/contact" && request.method === "POST") {
    const url = request.nextUrl.clone();
    url.pathname = "/api/contact";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/contact", "/contact/"],
};
