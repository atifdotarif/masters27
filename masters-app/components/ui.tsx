import { ReactNode } from "react";

export function Page({ title, intro, eyebrow, children }: { title: string; intro?: ReactNode; eyebrow?: string; children: ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-10 pt-10 md:pt-16 pb-20">
      <header className="pb-8 mb-10 border-b border-line">
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <h1 className="font-display text-[2.1rem] md:text-5xl leading-[1.05] tracking-tight font-medium mt-2">{title}</h1>
        {intro && <div className="mt-4 text-[15px] md:text-base leading-relaxed text-muted max-w-2xl">{intro}</div>}
      </header>
      <div className="space-y-12">{children}</div>
    </div>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`text-[11px] font-semibold uppercase tracking-[0.14em] text-muted ${className}`}>{children}</div>;
}

/** A titled block. Plain by default (heading + hairline); `boxed` gives a quiet panel. */
export function Card({ title, children, className = "", boxed = true }: { title?: ReactNode; children: ReactNode; className?: string; boxed?: boolean }) {
  return (
    <section className={`${boxed ? "bg-card border border-line rounded-lg p-5 md:p-6" : ""} ${className}`}>
      {title && <h2 className="font-display text-xl md:text-[1.35rem] font-medium tracking-tight mb-4">{title}</h2>}
      {children}
    </section>
  );
}

const dot: Record<string, string> = {
  green: "bg-good",
  amber: "bg-warn",
  red: "bg-bad",
  blue: "bg-info",
  gray: "bg-muted/50",
};
const text: Record<string, string> = {
  green: "text-good",
  amber: "text-warn",
  red: "text-bad",
  blue: "text-info",
  gray: "text-muted",
};

/** Quiet status label: coloured dot + text, no pill. */
export function Badge({ tone = "gray", children }: { tone?: string; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-medium whitespace-nowrap ${text[tone] ?? text.gray}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${dot[tone] ?? dot.gray}`} />
      {children}
    </span>
  );
}

export function Verified({ ok }: { ok: boolean }) {
  return ok ? <Badge tone="green">Verified</Badge> : <Badge tone="amber">Unverified</Badge>;
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-sm border-collapse tabular-nums">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th key={i} className="text-left text-[11px] font-semibold uppercase tracking-[0.1em] text-muted border-b border-fg/70 px-2 pb-2 whitespace-nowrap">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="align-top">
              {r.map((c, j) => <td key={j} className="border-b border-line px-2 py-3 leading-snug">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 text-[14.5px] leading-relaxed">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-accent select-none mt-[1px]">–</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

/** 5-segment meter, e.g. English-only job market. */
export function Meter({ value, label }: { value: number; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-muted" title={`${label}: ${value}/5`}>
      <span className="inline-flex gap-[3px]">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className={`h-2.5 w-1.5 rounded-[1px] ${i <= value ? "bg-fg/80" : "bg-line"}`} />
        ))}
      </span>
      {label}
    </span>
  );
}

/** Big editorial number with a small label. */
export function Stat({ value, label, note }: { value: ReactNode; label: string; note?: ReactNode }) {
  return (
    <div>
      <div className="font-display text-4xl md:text-5xl font-medium tracking-tight tabular-nums leading-none">{value}</div>
      <Eyebrow className="mt-2">{label}</Eyebrow>
      {note && <div className="text-sm text-muted mt-1">{note}</div>}
    </div>
  );
}

export function LinkArrow({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} className="group inline-flex items-center gap-1.5 text-sm font-medium text-accent">
      {children}
      <span className="transition-transform group-hover:translate-x-0.5">→</span>
    </a>
  );
}
