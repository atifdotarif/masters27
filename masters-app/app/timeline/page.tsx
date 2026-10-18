import { timeline } from "@/lib/data";
import { Page, Card } from "@/components/ui";
import Deadlines from "@/components/Deadlines";

export default function Timeline() {
  return (
    <Page title="Timeline" intro="Both tracks month by month, from now until you fly. The countdown list updates automatically.">
      <Card title="All upcoming deadlines"><Deadlines /></Card>
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
