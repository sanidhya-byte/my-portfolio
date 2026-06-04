import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

// Simple Edge-compatible hash helper using native Web Crypto API
export async function getSessionToken(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const salt = "antigravity-secure-salt-2026";
  const data = encoder.encode(password + salt);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export async function verifySession(): Promise<boolean> {
  const sessionCookie = cookies().get("admin_session")?.value;
  if (!sessionCookie) return false;

  const expectedToken = await getSessionToken(ADMIN_PASSWORD);
  return sessionCookie === expectedToken;
}

export async function login(password: string): Promise<boolean> {
  if (password === ADMIN_PASSWORD) {
    const token = await getSessionToken(ADMIN_PASSWORD);
    cookies().set("admin_session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });
    return true;
  }
  return false;
}

export async function logout() {
  cookies().set("admin_session", "", {
    httpOnly: true,
    expires: new Date(0),
    path: "/",
  });
}
