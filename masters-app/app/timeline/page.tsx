import { timeline, Deadline } from "@/lib/data";
import { scholarships } from "@/lib/research";
import { Page, Card } from "@/components/ui";
import Deadlines from "@/components/Deadlines";

// Scholarship deadlines for options that fit (high/medium) and aren't closed.
const scholarshipDeadlines: Deadline[] = scholarships
  .filter((s) => s.deadlineISO && s.status !== "closed" && s.fit !== "low")
  .map((s) => ({ date: s.deadlineISO as string, title: s.name, track: "Scholarship", note: `${s.fit} fit · ${s.country}`, verified: s.verified }));

export default function Timeline() {
  return (
    <Page eyebrow="Plan" title="Timeline" intro="Both tracks month by month, from now until you fly. The countdown lists update automatically.">
      <Card title="Your plan's deadlines"><Deadlines /></Card>
      <Card title={`Scholarship deadlines (high and medium fit, ${scholarshipDeadlines.length})`}><Deadlines items={scholarshipDeadlines} /></Card>
      <Card title="Month by month">
        <div className="hidden md:grid grid-cols-[9rem_1fr_1fr] gap-6 pb-2 border-b border-fg/70 text-[11px] font-semibold uppercase tracking-[0.1em] text-muted">
          <div>Month</div><div>Germany</div><div>Erasmus Mundus</div>
        </div>
        {timeline.map((t) => (
          <div key={t.month} className="grid md:grid-cols-[9rem_1fr_1fr] gap-2 md:gap-6 border-b border-line py-4">
            <div className="font-display text-lg font-medium leading-tight">{t.month}</div>
            <div className="text-[14.5px] leading-relaxed"><span className="md:hidden text-[11px] uppercase tracking-[0.1em] text-muted block">Germany</span>{t.germany || <span className="text-muted">—</span>}</div>
            <div className="text-[14.5px] leading-relaxed"><span className="md:hidden text-[11px] uppercase tracking-[0.1em] text-muted block">Erasmus</span>{t.erasmus || <span className="text-muted">—</span>}</div>
          </div>
        ))}
      </Card>
    </Page>
  );
}
