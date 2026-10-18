import Link from "next/link";
import { erasmus, erasmusRoadmap } from "@/lib/data";
import { Page, Card, Badge, Table } from "@/components/ui";

const tone = { keep: "green", add: "green", maybe: "amber", drop: "red" } as const;
const label = { keep: "Keep", add: "Added", maybe: "Maybe", drop: "Dropped" } as const;

export default function Erasmus() {
  const active = erasmus.filter((e) => e.status !== "drop");
  const dropped = erasmus.filter((e) => e.status === "drop");
  return (
    <Page eyebrow="Route 01 · Free extra shot"
      title="Erasmus Mundus (Plan A)"
      intro="Fully funded: tuition + insurance + €1,400/month for up to 24 months, with no bond requiring you to return home. Odds are low (DEAI gave ~25 scholarships from ~3,000 applicants), so it's a free extra shot alongside Germany, not a replacement."
    >
      <Link href="/erasmus/steps" className="block border-l-2 border-accent pl-4 py-1 text-[15px] text-accent font-medium hover:underline">
        Exact application steps (DEAI manual, MAIA, visas for Belgium/Spain) + all 22 Erasmus Mundus programmes checked →
      </Link>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {active.map((e) => (
          <Card key={e.name}>
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-display text-xl font-medium tracking-tight">{e.name}</h2>
              <Badge tone={tone[e.status]}>{label[e.status]}</Badge>
            </div>
            <p className="text-sm text-muted">{e.full}</p>
            <dl className="text-sm mt-3 space-y-2">
              <div><dt className="text-muted text-xs">Route</dt><dd>{e.route}</dd></div>
              <div><dt className="text-muted text-xs">Deadline</dt><dd className="font-medium">{e.deadline}</dd></div>
              <div><dt className="text-muted text-xs">English</dt><dd>{e.english}</dd></div>
            </dl>
            <p className="text-sm mt-3">{e.why}</p>
            {e.url && <a href={e.url} target="_blank" rel="noreferrer" className="text-sm text-accent mt-2 inline-block">Official page ↗</a>}
          </Card>
        ))}
      </div>

      <Card title="Roadmap">
        <ol className="relative border-l border-line ml-2 space-y-4">
          {erasmusRoadmap.map((r) => (
            <li key={r.when} className="ml-4">
              <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-accent" />
              <div className="text-sm font-medium">{r.when}</div>
              <div className="text-sm text-muted">{r.what}</div>
            </li>
          ))}
        </ol>
      </Card>

      <Card title="DEAI tips">
        <ul className="text-sm space-y-1.5 list-disc pl-5">
          <li>Fill the self-evaluation Excel exactly as instructed. <b>Altering it means automatic exclusion.</b></li>
          <li>Referees are scored on their reputation and H-index. Pick a FAST professor who publishes.</li>
          <li>Submit by mid-December. Early files are checked and you&apos;re told about missing documents.</li>
          <li>Your work experience earns points; lead with production LLM/RAG systems in the cover letter.</li>
          <li>For MAIA, centre the motivation letter on your retinal-imaging project, and put it on arXiv first.</li>
        </ul>
      </Card>

      <Card title="Dropped from the original Plan A">
        <Table
          head={["Programme", "Why dropped"]}
          rows={dropped.map((e) => [<span key="n"><b>{e.name}</b> <span className="text-muted">{e.full}</span></span>, <span key="w">{e.why} <span className="text-muted">({e.english})</span></span>])}
        />
      </Card>
    </Page>
  );
}
