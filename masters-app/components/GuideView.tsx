import type { Guide } from "@/lib/research";
import { Card, Badge, Bullets, Verified } from "./ui";

export default function GuideView({ guide }: { guide: Guide }) {
  const total = guide.sections.reduce((n, s) => n + s.steps.length, 0);
  return (
    <div className="space-y-6">
      <Card>
        <p className="text-sm">{guide.summary}</p>
        <p className="text-xs text-muted mt-2">{guide.sections.length} stages · {total} steps. Steps marked <Badge tone="amber">unverified</Badge> come from secondary sources, so check the linked page before paying for anything.</p>
        <nav className="mt-3 flex flex-wrap gap-2">
          {guide.sections.map((s, i) => (
            <a key={s.heading} href={`#s${i}`} className="text-xs border border-line rounded-full px-2.5 py-1 hover:border-accent">{s.heading}</a>
          ))}
        </nav>
      </Card>

      {guide.sections.map((s, i) => (
        <section key={s.heading} id={`s${i}`} className="scroll-mt-4">
          <div className="flex items-baseline gap-3 mb-2">
            <h2 className="font-semibold text-lg">{s.heading}</h2>
            {s.when && <span className="text-xs text-muted">{s.when}</span>}
          </div>
          <div className="space-y-3">
            {s.steps.map((st) => (
              <details key={st.title} className="bg-card border border-line rounded-xl p-4 group" open={s.steps.length <= 2}>
                <summary className="cursor-pointer list-none flex flex-wrap items-center gap-2">
                  <span className="text-accent group-open:rotate-90 transition-transform">▸</span>
                  <span className="font-medium">{st.title}</span>
                  {st.cost && <Badge tone="blue">{st.cost}</Badge>}
                  {st.time && <Badge tone="gray">{st.time}</Badge>}
                  {st.verified !== undefined && <Verified ok={st.verified} />}
                </summary>
                <div className="mt-3 pl-5">
                  <Bullets items={st.detail} />
                  {st.url && (
                    <a href={st.url} target="_blank" rel="noreferrer" className="text-sm text-accent mt-2 inline-block break-all">{st.url} ↗</a>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Tips"><Bullets items={guide.tips} /></Card>
        <Card title="Pitfalls to avoid"><Bullets items={guide.pitfalls} /></Card>
      </div>
    </div>
  );
}
