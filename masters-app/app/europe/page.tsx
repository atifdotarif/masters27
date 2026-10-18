import { countries } from "@/lib/research";
import { Page, Card, Badge, Bullets, Verified, Meter } from "@/components/ui";

const fitTone = { high: "green", medium: "amber", low: "red" } as const;
const budgetTone = { yes: "green", borderline: "amber", no: "red" } as const;
const order = { high: 0, medium: 1, low: 2 } as const;

export default function Europe() {
  const list = [...countries].sort((a, b) => order[a.fit] - order[b.fit] || b.jobsEnglishOnly - a.jobsEnglishOnly);
  return (
    <Page eyebrow="Alternatives"
      title="Other European countries"
      intro="Beyond Germany and Italy: tuition, living costs, visa funds, English rules, post-study work and scholarships for each country, rated for your profile and budget (≈ €14–17k)."
    >
      <Card title="Headline findings">
        <Bullets items={[
          "Hungary (Stipendium Hungaricum via HEC): free tuition + stipend + housing; ~15 Jan 2027; many universities accept MOI. Weak English-only jobs",
          "France: public tuition €3,950/yr for non-EU, visa funds only €615/month, 12-month job-search permit. Eiffel needs a university nomination (contact programmes NOW). Paris-Saclay offers €10k/yr scholarships",
          "Austria: TU Wien €726.72/semester, but visa funds jump to ~€15.7k/yr at age 24+. TU Graz rejects Pakistani MOI letters",
          "Switzerland: ETH ESOP (CHF 12k/semester + tuition), deadline 30 Nov 2026; MOI accepted with confirmation; needs a top-10% class rank (long shot)",
          "Estonia, Poland, Czechia: €2–7k/yr tuition; Estonia has the best English-only tech market of the cheap options",
          "Sweden's SI scholarship: Pakistan is NOT eligible. Netherlands, Belgium, Finland, Norway and Denmark are over budget without a big waiver",
        ]} />
      </Card>
      <div className="grid md:grid-cols-2 gap-4">
        {list.map((c) => (
          <details key={c.id} className="bg-card border border-line rounded-lg p-5 group">
            <summary className="cursor-pointer list-none grid grid-cols-[1fr_auto] gap-3">
              <div className="min-w-0">
                <h2 className="font-display text-2xl font-medium tracking-tight group-hover:text-accent transition-colors">{c.country}</h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                  <Badge tone={fitTone[c.fit]}>{c.fit} fit</Badge>
                  <Badge tone={budgetTone[c.fitsBudget]}>budget: {c.fitsBudget}</Badge>
                  <Meter value={c.jobsEnglishOnly} label="English-only jobs" />
                </div>
                <p className="text-[13px] text-muted mt-2">{c.route}</p>
                <p className="text-[14px] leading-relaxed mt-1.5">{c.fitReason}</p>
              </div>
              <span className="font-display text-2xl leading-none text-muted group-open:rotate-45 transition-transform select-none" aria-hidden>+</span>
            </summary>
            <dl className="mt-4 pt-4 border-t border-line space-y-3 text-[14px] leading-relaxed">
              <Row k="Tuition" v={c.tuition} />
              <Row k="Living" v={c.living} />
              <Row k="Visa funds" v={c.visaFunds} />
              <Row k="English proof" v={c.english} />
              <Row k="After graduating" v={c.postStudy} />
              <Row k="Deadlines" v={c.keyDeadlines} />
              {c.programmes.length > 0 && <Row k="Programmes" v={c.programmes.join(" · ")} />}
              {c.scholarships.length > 0 && <Row k="Scholarships" v={c.scholarships.join(" · ")} />}
            </dl>
            <div className="mt-4 flex items-center gap-4">
              <a href={c.url} target="_blank" rel="noreferrer" className="text-sm text-accent">Official page ↗</a>
              <Verified ok={c.verified} />
            </div>
          </details>
        ))}
      </div>
    </Page>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-muted">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
