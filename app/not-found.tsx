import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-xs tracking-widest uppercase mb-6" style={{ color: "var(--accent)", fontFamily: "var(--mono)" }}>
        404
      </p>
      <h1 className="font-serif mb-4" style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", fontStyle: "italic" }}>
        Page not found.
      </h1>
      <p className="text-sm mb-8" style={{ color: "var(--text-muted)", fontFamily: "var(--mono)" }}>
        The route you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="px-5 py-2.5 rounded-md text-sm border transition-all duration-200"
        style={{ borderColor: "var(--border)", color: "var(--text)", fontFamily: "var(--mono)", background: "var(--surface)" }}>
        ← back home
      </Link>
    </main>
  );
}
