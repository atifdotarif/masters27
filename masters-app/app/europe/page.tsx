import { countries } from "@/lib/research";
import { Page, Card, Badge, Bullets, Verified } from "@/components/ui";

const fitTone = { high: "green", medium: "amber", low: "red" } as const;
const budgetTone = { yes: "green", borderline: "amber", no: "red" } as const;
const order = { high: 0, medium: 1, low: 2 } as const;

export default function Europe() {
  const list = [...countries].sort((a, b) => order[a.fit] - order[b.fit] || b.jobsEnglishOnly - a.jobsEnglishOnly);
  return (
    <Page
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
          <details key={c.id} className="bg-card border border-line rounded-xl p-4 group">
            <summary className="cursor-pointer list-none">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-accent group-open:rotate-90 transition-transform">▸</span>
                <h2 className="font-semibold">{c.country}</h2>
                <Badge tone={fitTone[c.fit]}>{c.fit} fit</Badge>
                <Badge tone={budgetTone[c.fitsBudget]}>budget: {c.fitsBudget}</Badge>
                <Badge tone="blue">EN jobs {"★".repeat(c.jobsEnglishOnly)}{"☆".repeat(Math.max(0, 5 - c.jobsEnglishOnly))}</Badge>
              </div>
              <p className="text-sm text-muted mt-1 pl-5">{c.route}</p>
              <p className="text-sm mt-1 pl-5">{c.fitReason}</p>
            </summary>
            <dl className="mt-3 pl-5 space-y-2 text-sm">
              <Row k="Tuition" v={c.tuition} />
              <Row k="Living" v={c.living} />
              <Row k="Visa funds" v={c.visaFunds} />
              <Row k="English proof" v={c.english} />
              <Row k="After graduating" v={c.postStudy} />
              <Row k="Deadlines" v={c.keyDeadlines} />
              {c.programmes.length > 0 && <Row k="Programmes" v={c.programmes.join(" · ")} />}
              {c.scholarships.length > 0 && <Row k="Scholarships" v={c.scholarships.join(" · ")} />}
            </dl>
            <div className="mt-3 pl-5 flex items-center gap-3">
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
      <dt className="text-xs text-muted">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
