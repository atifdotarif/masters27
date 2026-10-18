"use client";
import { useState } from "react";
import { universities, ruledOut } from "@/lib/data";
import { Page, Card, Badge, Table, Meter } from "@/components/ui";

const moiTone = { yes: "green", partial: "amber", likely: "amber" } as const;
const moiLabel = { yes: "MOI accepted", partial: "MOI partial", likely: "MOI likely" } as const;

export default function Universities() {
  const [hubOnly, setHubOnly] = useState(false);
  const [moiOnly, setMoiOnly] = useState(false);
  const list = universities.filter((u) => (!hubOnly || u.jobs >= 3) && (!moiOnly || u.moi === "yes"));
  return (
    <Page eyebrow="Route 02 · Germany"
      title="German universities"
      intro="Tuition-free (or close), English-taught, accepts your FAST MOI letter, no GRE. Ranked by fit, nearby job market and how early the deadline is (earlier is better for the visa)."
    >
      <div className="flex flex-wrap gap-3 text-sm">
        <label className="flex items-center gap-2 bg-card border border-line rounded-lg px-3 py-2">
          <input type="checkbox" checked={hubOnly} onChange={(e) => setHubOnly(e.target.checked)} /> Good job market only
        </label>
        <label className="flex items-center gap-2 bg-card border border-line rounded-lg px-3 py-2">
          <input type="checkbox" checked={moiOnly} onChange={(e) => setMoiOnly(e.target.checked)} /> MOI clearly accepted
        </label>
        <span className="text-muted self-center">{list.length} of {universities.length}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {list.map((u) => (
          <Card key={u.name}>
            <div className="flex items-start gap-3">
              <span className="font-display text-3xl font-medium text-muted leading-none tabular-nums">{u.rank}</span>
              <div className="min-w-0">
                <h2 className="font-display text-xl font-medium tracking-tight">{u.name}</h2>
                <p className="text-sm">{u.programme}</p>
                <p className="text-xs text-muted">{u.city}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              <Badge tone={moiTone[u.moi]}>{moiLabel[u.moi]}</Badge>
              <Meter value={u.jobs} label="Job market" />
            </div>
            <dl className="text-sm mt-3 space-y-1">
              <div><dt className="inline text-muted">Deadline: </dt><dd className="inline font-medium">{u.deadline}</dd></div>
              <div><dt className="inline text-muted">Apply: </dt><dd className="inline">{u.apply}</dd></div>
              <div><dt className="inline text-muted">Fees: </dt><dd className="inline">{u.fee}</dd></div>
            </dl>
            <div className="grid sm:grid-cols-2 gap-3 mt-3 text-sm">
              <ul className="space-y-1">{u.pros.map((p) => <li key={p} className="text-good">+ {p}</li>)}</ul>
              <ul className="space-y-1">{u.cons.map((c) => <li key={c} className="text-bad">− {c}</li>)}</ul>
            </div>
            <a href={u.url} target="_blank" rel="noreferrer" className="text-sm text-accent mt-3 inline-block">Official page ↗</a>
          </Card>
        ))}
      </div>

      <Card title="Suggested application set">
        <p className="text-sm">TU Darmstadt, HPI/Potsdam, TU Dortmund, Göttingen, Hildesheim, Würzburg, Frankfurt UAS, plus Passau as a safety. THI and Chemnitz are backups. uni-assist costs €75 for the first application and €30 for each extra one.</p>
      </Card>

      <Card title="Ruled out (and why)">
        <Table head={["University", "Reason"]} rows={ruledOut.map(([n, r]) => [<b key="n">{n}</b>, r])} />
        <p className="text-sm text-muted mt-3">Duolingo is not accepted anywhere checked. One PTE test (not IELTS) would add TU Dresden CMS (60), Bonn-Rhein-Sieg (71; window 15 Nov – 15 Feb), and Bonn and OVGU (76).</p>
      </Card>
    </Page>
  );
}
