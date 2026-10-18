import { ReactNode } from "react";

export function Page({ title, intro, children }: { title: string; intro?: ReactNode; children: ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 space-y-8">
      <header>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h1>
        {intro && <div className="mt-2 text-muted max-w-3xl">{intro}</div>}
      </header>
      {children}
    </div>
  );
}

export function Card({ title, children, className = "" }: { title?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`bg-card border border-line rounded-xl p-5 ${className}`}>
      {title && <h2 className="font-semibold mb-3">{title}</h2>}
      {children}
    </section>
  );
}

const tones: Record<string, string> = {
  green: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  amber: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  red: "bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300",
  blue: "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  gray: "bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300",
};

export function Badge({ tone = "gray", children }: { tone?: keyof typeof tones | string; children: ReactNode }) {
  return <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${tones[tone] ?? tones.gray}`}>{children}</span>;
}

export function Verified({ ok }: { ok: boolean }) {
  return ok ? <Badge tone="green">verified</Badge> : <Badge tone="amber">unverified</Badge>;
}

export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto -mx-1">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>{head.map((h) => <th key={h} className="text-left font-medium text-muted border-b border-line px-2 py-2 whitespace-nowrap">{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="align-top">
              {r.map((c, j) => <td key={j} className="border-b border-line px-2 py-2">{c}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-1.5 text-sm">
      {items.map((t, i) => (
        <li key={i} className="flex gap-2"><span className="text-accent">•</span><span>{t}</span></li>
      ))}
    </ul>
  );
}
