"use client";
import { useMemo, useState } from "react";
import type { Scholarship } from "@/lib/research";
import { moiStatus, hasNoBond } from "@/lib/research";
import { Badge, Verified } from "./ui";

const fitTone = { high: "green", medium: "amber", low: "red" } as const;
const statusTone = { open: "green", upcoming: "blue", closed: "gray", unknown: "gray" } as const;
const fitOrder = { high: 0, medium: 1, low: 2 } as const;

type Props = { items: Scholarship[]; sources: readonly string[]; initialSource?: string; hideSourceFilter?: boolean };

export default function ScholarshipExplorer({ items, sources, initialSource = "All", hideSourceFilter }: Props) {
  const [q, setQ] = useState("");
  const [source, setSource] = useState(initialSource);
  const [fit, setFit] = useState("All");
  const [hideClosed, setHideClosed] = useState(true);
  const [moi, setMoi] = useState<"any" | "yes" | "maybe">("any");
  const [noBond, setNoBond] = useState(false);
  const [sort, setSort] = useState<"fit" | "deadline">("fit");

  const list = useMemo(() => {
    const needle = q.toLowerCase();
    return items
      .filter((s) => source === "All" || s.source === source)
      .filter((s) => fit === "All" || s.fit === fit)
      .filter((s) => !hideClosed || s.status !== "closed")
      .filter((s) => moi === "any" || moiStatus(s) === "yes" || (moi === "maybe" && moiStatus(s) === "maybe"))
      .filter((s) => !noBond || hasNoBond(s))
      .filter((s) => !needle || [s.name, s.country, s.host, s.fields, s.english, s.coverage].join(" ").toLowerCase().includes(needle))
      .sort((a, b) =>
        sort === "fit"
          ? fitOrder[a.fit] - fitOrder[b.fit] || (a.deadlineISO ?? "9").localeCompare(b.deadlineISO ?? "9")
          : (a.deadlineISO ?? "9").localeCompare(b.deadlineISO ?? "9"),
      );
  }, [items, q, source, fit, hideClosed, moi, noBond, sort]);

  const sel = "bg-card border border-line rounded-lg px-2 py-1.5 text-sm";
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 items-center">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search (e.g. AI, Korea, stipend)" className={`${sel} flex-1 min-w-48`} />
        {!hideSourceFilter && (
          <select value={source} onChange={(e) => setSource(e.target.value)} className={sel}>
            <option>All</option>
            {sources.map((s) => <option key={s}>{s}</option>)}
          </select>
        )}
        <select value={fit} onChange={(e) => setFit(e.target.value)} className={sel}>
          <option value="All">Any fit</option>
          <option value="high">High fit</option>
          <option value="medium">Medium fit</option>
          <option value="low">Low fit</option>
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value as "fit" | "deadline")} className={sel}>
          <option value="fit">Sort: best fit</option>
          <option value="deadline">Sort: deadline</option>
        </select>
      </div>
      <div className="flex flex-wrap gap-3 text-sm">
        <label className="flex items-center gap-1.5"><input type="checkbox" checked={hideClosed} onChange={(e) => setHideClosed(e.target.checked)} /> Hide closed</label>
        <select value={moi} onChange={(e) => setMoi(e.target.value as "any" | "yes" | "maybe")} className="bg-card border border-line rounded-lg px-2 py-1 text-sm">
          <option value="any">English proof: any</option>
          <option value="yes">No IELTS: MOI confirmed</option>
          <option value="maybe">No IELTS: confirmed or possible</option>
        </select>
        <label className="flex items-center gap-1.5"><input type="checkbox" checked={noBond} onChange={(e) => setNoBond(e.target.checked)} /> No return bond</label>
        <span className="text-muted">{list.length} shown</span>
      </div>

      <div className="border-t border-fg/70">
        {list.map((s) => (
          <details key={s.id} className="border-b border-line py-5 group">
            <summary className="cursor-pointer list-none grid grid-cols-[1fr_auto] gap-4">
              <div className="min-w-0">
                <div className="font-display text-lg md:text-xl font-medium tracking-tight leading-snug group-hover:text-accent transition-colors">{s.name}</div>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                  <Badge tone={fitTone[s.fit]}>{s.fit} fit</Badge>
                  <Badge tone={statusTone[s.status]}>{s.status}</Badge>
                  {moiStatus(s) === "yes" && <Badge tone="green">MOI ok</Badge>}
                  {moiStatus(s) === "maybe" && <Badge tone="amber">MOI maybe</Badge>}
                  <span className="text-xs text-muted">{s.country} · {s.source}</span>
                </div>
                <div className="text-[13px] font-medium mt-2">Deadline: {s.deadline}</div>
                <p className="text-[14px] text-muted leading-relaxed mt-1.5 max-w-3xl">{s.fitReason}</p>
              </div>
              <span className="font-display text-2xl leading-none text-muted group-open:rotate-45 transition-transform select-none" aria-hidden>+</span>
            </summary>
            <div className="mt-5 grid md:grid-cols-2 gap-x-8 gap-y-3 text-[14px] leading-relaxed bg-card border border-line rounded-lg p-5">
              <Field k="Host" v={s.host} />
              <Field k="Coverage" v={s.coverage} />
              <Field k="Amount" v={s.amount} />
              <Field k="Fields" v={s.fields} />
              <Field k="Eligibility" v={s.eligibility} />
              <Field k="English" v={s.english} />
              <Field k="GRE" v={s.gre} />
              <Field k="Bond / obligation" v={s.bond} />
            </div>
            {s.steps.length > 0 && (
              <div className="mt-4">
                <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-muted mb-2">How to apply</div>
                <ol className="list-decimal pl-5 text-sm space-y-1">{s.steps.map((st, i) => <li key={i}>{st}</li>)}</ol>
              </div>
            )}
            <div className="mt-4 flex items-center gap-4">
              <a href={s.url} target="_blank" rel="noreferrer" className="text-sm text-accent">Official page ↗</a>
              <Verified ok={s.verified} />
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

function Field({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted mb-0.5">{k}</div>
      <div>{v}</div>
    </div>
  );
}
