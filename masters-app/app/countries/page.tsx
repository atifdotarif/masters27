import { countries, gulf, earnings } from "@/lib/data";
import { Page, Card, Badge, Table, Bullets } from "@/components/ui";

const tone = { best: "green", good: "blue", weak: "amber", out: "red" } as const;
const label = { best: "Top pick", good: "Good", weak: "Weak fit", out: "Ruled out" } as const;

export default function Countries() {
  return (
    <Page eyebrow="Research"
      title="Country selection"
      intro="Countries were scored on budget fit, scholarships, post-study work rights, English-only jobs, savings and visa risk for Pakistanis. After your budget update (PKR 45–55 lakh) and the no-IELTS decision, Germany became the main plan."
    >
      <Card title="Ranking for your profile">
        <Table
          head={["", "Country", "Route", "Score", "Why"]}
          rows={countries.map((c) => [
            <Badge key="b" tone={tone[c.verdict]}>{label[c.verdict]}</Badge>,
            <b key="n">{c.name}</b>,
            c.route,
            <span key="s" className="whitespace-nowrap">{c.score}</span>,
            <span key="w" className="text-muted">{c.note}</span>,
          ])}
        />
        <p className="text-xs text-muted mt-3">Scores come from the weighted scorecard in the full report (the weights are assumptions). Germany&apos;s &quot;Main plan&quot; label reflects your later budget update.</p>
      </Card>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Why visa money rules decide everything">
          <Bullets items={[
            "Germany blocked account: €11,904 (≈ PKR 38 lakh); likely ~€12.6–13k in 2027",
            "Italy study visa: €10,180 (≈ PKR 32.6 lakh)",
            "Ireland: €10,000 living + at least €6,000 of tuition paid before the visa; tuition €12–30k",
            "Canada: CAD 22,895 + tuition (≈ PKR 46 lakh+)",
            "Your budget covers Germany and Italy, not Ireland, Canada or the Netherlands without a scholarship",
          ]} />
        </Card>
        <Card title="Ireland: does it work?">
          <Bullets items={[
            "Self-funded year 1 ≈ €25–30k (PKR 80–96 lakh) at the cheapest universities, so no",
            "Only via the GOI-IES scholarship: full tuition + €10,000 stipend, ~60 awards worldwide",
            "GOI-IES 2027 expected ~Jan–Mar 2027; you need a university offer first",
            "If won: 1-year master's, 2-year job-search visa, English-only market. Better than Germany for earning",
          ]} />
        </Card>
      </div>

      <Card title="Earnings: Ireland vs Germany (estimates)">
        <Table
          head={["", "Ireland (Dublin)", "Germany (Berlin/Munich)", "Germany (cheaper city)"]}
          rows={earnings.map((e) => [<b key="l">{e.label}</b>, e.ireland, e.germany, e.germanyCheap])}
        />
        <p className="text-xs text-muted mt-3">Ireland has the higher ceiling (big tech; ~25–30% tax vs ~40% in Germany), but Dublin rent cancels much of that at entry level. Germany is the one your budget can reach.</p>
      </Card>

      <Card title={gulf.title}><Bullets items={gulf.points} /></Card>

      <Card title="Scholarships that don't fit right now">
        <Bullets items={[
          "Chevening: closed 6 Oct 2026; needs 2 yrs of post-degree work (earliest a 2029 start); 2-year return-home rule",
          "Fulbright, Australia Awards: closed for 2027 and require 2 years back in Pakistan, which clashes with earning abroad",
          "Commonwealth: needs a HAT score of 60+; only 26 national master's seats",
          "Korea GKS, Türkiye Bursları, China CSC: mandatory local-language year",
        ]} />
      </Card>
    </Page>
  );
}
