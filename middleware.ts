import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

// Standard Web Crypto API hashing helper
async function getSessionToken(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const salt = "antigravity-secure-salt-2026";
  const data = encoder.encode(password + salt);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  // Protect all routes starting with /dashboard
  if (path.startsWith("/dashboard")) {
    const sessionCookie = request.cookies.get("admin_session")?.value;
    const expectedToken = await getSessionToken(ADMIN_PASSWORD);

    if (!sessionCookie || sessionCookie !== expectedToken) {
      // Redirect to /login and preserve the callback path
      const url = new URL("/login", request.url);
      url.searchParams.set("callbackUrl", path);
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Run middleware only on /dashboard page routes
  matcher: ["/dashboard/:path*"],
};
