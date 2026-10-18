import type { Guide } from "@/lib/research";
import { Card, Badge, Bullets, Verified, Eyebrow } from "./ui";

export default function GuideView({ guide }: { guide: Guide }) {
  const total = guide.sections.reduce((n, s) => n + s.steps.length, 0);
  return (
    <div className="space-y-14">
      <div className="grid md:grid-cols-[1fr_16rem] gap-8">
        <div>
          <p className="text-[15px] leading-relaxed">{guide.summary}</p>
          <p className="text-[13px] text-muted mt-3">
            {guide.sections.length} stages · {total} steps. Items marked <Badge tone="amber">Unverified</Badge> come from secondary sources, so check the linked page before paying for anything.
          </p>
        </div>
        <nav className="md:border-l md:border-line md:pl-6">
          <Eyebrow className="mb-2">Stages</Eyebrow>
          <ol className="space-y-1">
            {guide.sections.map((s, i) => (
              <li key={s.heading}>
                <a href={`#s${i}`} className="text-[13px] text-fg/80 hover:text-accent leading-snug block">{s.heading}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {guide.sections.map((s, i) => (
        <section key={s.heading} id={`s${i}`} className="scroll-mt-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 pb-3 border-b border-fg/70">
            <h2 className="font-display text-2xl font-medium tracking-tight">{s.heading}</h2>
            {s.when && <span className="text-[13px] text-muted">{s.when}</span>}
          </div>
          {s.steps.map((st) => (
            <details key={st.title} className="border-b border-line py-4 group" open={s.steps.length <= 2}>
              <summary className="cursor-pointer list-none grid grid-cols-[1fr_auto] gap-4">
                <div className="min-w-0">
                  <div className="text-[15.5px] font-medium leading-snug group-hover:text-accent transition-colors">{st.title}</div>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                    {st.cost && <Badge tone="blue">{st.cost}</Badge>}
                    {st.time && <Badge tone="gray">{st.time}</Badge>}
                    {st.verified !== undefined && <Verified ok={st.verified} />}
                  </div>
                </div>
                <span className="font-display text-2xl leading-none text-muted group-open:rotate-45 transition-transform select-none" aria-hidden>+</span>
              </summary>
              <div className="mt-4 max-w-3xl">
                <Bullets items={st.detail} />
                {st.url && (
                  <a href={st.url} target="_blank" rel="noreferrer" className="text-[13px] text-accent mt-3 inline-block break-all">{st.url} ↗</a>
                )}
              </div>
            </details>
          ))}
        </section>
      ))}

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Tips"><Bullets items={guide.tips} /></Card>
        <Card title="Pitfalls to avoid"><Bullets items={guide.pitfalls} /></Card>
      </div>
    </div>
  );
}
