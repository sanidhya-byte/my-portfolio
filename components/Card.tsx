interface CardProps {
  title: string;
  value: string;
  change?: string;
  positive?: boolean;
}

export function Card({ title, value, change, positive }: CardProps) {
  return (
    <div
      className="p-5 rounded-lg border transition-all duration-300 hover:border-accent"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <p className="text-xs mb-3 uppercase tracking-widest" style={{ color: "var(--text-muted)", fontFamily: "var(--mono)" }}>
        {title}
      </p>
      <p className="font-serif text-3xl mb-2" style={{ fontStyle: "italic" }}>{value}</p>
      {change && (
        <p className="text-xs" style={{ color: positive ? "#50fa7b" : "var(--accent-2)", fontFamily: "var(--mono)" }}>
          {positive ? "↑" : "↓"} {change}
        </p>
      )}
    </div>
  );
}
