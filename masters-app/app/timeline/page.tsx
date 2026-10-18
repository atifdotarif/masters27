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
    <Page title="Timeline" intro="Both tracks month by month, from now until you fly. The countdown lists update automatically.">
      <Card title="Your plan's deadlines"><Deadlines /></Card>
      <Card title={`Scholarship deadlines (high and medium fit, ${scholarshipDeadlines.length})`}><Deadlines items={scholarshipDeadlines} /></Card>
      <Card title="Month by month">
        <div className="space-y-3">
          {timeline.map((t) => (
            <div key={t.month} className="grid md:grid-cols-[9rem_1fr_1fr] gap-2 md:gap-4 border-b border-line pb-3 last:border-0">
              <div className="font-semibold text-sm">{t.month}</div>
              <div className="text-sm"><span className="text-xs font-medium text-sky-700 dark:text-sky-400 block">Germany</span>{t.germany || "—"}</div>
              <div className="text-sm"><span className="text-xs font-medium text-emerald-700 dark:text-emerald-400 block">Erasmus Mundus</span>{t.erasmus || "—"}</div>
            </div>
          ))}
        </div>
      </Card>
    </Page>
  );
}
