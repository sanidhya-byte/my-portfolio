import Link from "next/link";
import { Card } from "@/components/Card";

const metrics = [
  { title: "Total Requests", value: "84.2k", change: "12% this week", positive: true },
  { title: "Response Time", value: "48ms", change: "6ms faster", positive: true },
  { title: "Error Rate", value: "0.3%", change: "0.1% up", positive: false },
  { title: "Uptime", value: "99.9%", change: "30-day window", positive: true },
];

const recentRoutes = [
  { method: "GET", path: "/api/users", status: 200, time: "22ms" },
  { method: "POST", path: "/api/auth/login", status: 201, time: "48ms" },
  { method: "GET", path: "/api/products", status: 200, time: "15ms" },
  { method: "DELETE", path: "/api/sessions/42", status: 204, time: "31ms" },
  { method: "PATCH", path: "/api/users/7", status: 200, time: "19ms" },
];

const methodColor: Record<string, string> = {
  GET: "#7c6aff",
  POST: "#50fa7b",
  DELETE: "#ff6a6a",
  PATCH: "#ffb86a",
  PUT: "#8be9fd",
};

export default function Dashboard() {
  return (
    <main className="min-h-screen" style={{ background: "var(--bg)" }}>
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="flex items-center gap-6">
          <Link href="/" className="font-serif text-lg" style={{ color: "var(--text)" }}>
            next<span style={{ color: "var(--accent)" }}>.</span>app
          </Link>
          <span className="text-xs px-2 py-1 rounded" style={{ background: "var(--surface)", color: "var(--text-muted)", fontFamily: "var(--mono)" }}>
            dashboard
          </span>
        </div>
        <Link href="/" className="text-xs" style={{ color: "var(--text-muted)", fontFamily: "var(--mono)" }}>
          ← back home
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h1 className="font-serif text-4xl mb-2" style={{ fontStyle: "italic" }}>Overview</h1>
          <p className="text-sm" style={{ color: "var(--text-muted)", fontFamily: "var(--mono)" }}>
            Sample dashboard — demonstrating App Router page structure.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {metrics.map((m) => (
            <Card key={m.title} {...m} />
          ))}
        </div>

        {/* Routes table */}
        <div className="rounded-lg border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          <div className="px-5 py-4 border-b flex items-center justify-between" style={{ borderColor: "var(--border)", background: "var(--surface-2)" }}>
            <span className="text-sm font-serif" style={{ fontStyle: "italic" }}>Recent Requests</span>
            <span className="text-xs" style={{ color: "var(--text-dim)", fontFamily: "var(--mono)" }}>live feed</span>
          </div>
          <div style={{ background: "var(--surface)" }}>
            {recentRoutes.map((r, i) => (
              <div key={i} className="flex items-center gap-4 px-5 py-3 border-b last:border-0 hover:bg-surface-2 transition-colors"
                style={{ borderColor: "var(--border)", fontFamily: "var(--mono)", fontSize: "0.8rem" }}>
                <span className="w-14 font-medium" style={{ color: methodColor[r.method] ?? "var(--text)" }}>
                  {r.method}
                </span>
                <span className="flex-1" style={{ color: "var(--text)" }}>{r.path}</span>
                <span style={{ color: r.status < 300 ? "#50fa7b" : "var(--accent-2)" }}>{r.status}</span>
                <span style={{ color: "var(--text-dim)" }}>{r.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
