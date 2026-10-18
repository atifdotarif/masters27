import Link from "next/link";
import { budget, process, work } from "@/lib/data";
import { Page, Card, Table, Bullets, Verified } from "@/components/ui";

export default function Germany() {
  return (
    <Page
      title="Germany plan"
      intro="Tuition-free public universities and an English-taught 2-year master's (some take 1.5 years), paid for with a blocked account in year 1 and a working-student job in year 2."
    >
      <Link href="/germany/steps" className="block bg-accent-soft text-accent rounded-xl px-5 py-3 font-medium">
        Exact step-by-step guide (17 stages: HEC, uni-assist, blocked account, Karachi visa, arrival, jobs, Blue Card) + German scholarships →
      </Link>
      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Blocked account">
          <ul className="space-y-3 text-sm">
            {budget.blocked.map((b) => (
              <li key={b.label}>
                <div className="flex justify-between gap-2"><span>{b.label}</span><Verified ok={b.verified} /></div>
                <div className="text-lg font-semibold">{b.eur} <span className="text-muted text-sm font-normal">{b.pkr}</span></div>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted mt-3">This is your own living money, paid back to you monthly. If it ends up above PKR 40 lakh, top it up from the expenses budget.</p>
        </Card>
        <Card title={`One-time costs: ${budget.oneTimeTotal} PKR`}>
          <Table head={["Item", "PKR lakh"]} rows={budget.oneTime.map((o) => [o.item, o.pkr])} />
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Monthly reality"><p className="text-sm">{budget.monthly}</p></Card>
        <Card title="Year 2"><p className="text-sm">{budget.year2}</p></Card>
      </div>

      <Card title="Application process, step by step">
        <ol className="grid md:grid-cols-2 gap-4">
          {process.map((p, i) => (
            <li key={p.step} className="border border-line rounded-lg p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-accent font-semibold">{i + 1}.</span>
                <span className="font-medium">{p.step}</span>
                <span className="text-xs text-muted ml-auto">{p.when}</span>
              </div>
              <div className="mt-2"><Bullets items={p.items} /></div>
            </li>
          ))}
        </ol>
      </Card>

      <Card title="Working in Germany">
        <Bullets items={work.rules} />
        <div className="mt-4">
          <Table head={["Path", "Pay", "Value"]} rows={work.paths.map((p) => [<b key="p">{p.path}</b>, p.pay, p.value])} />
        </div>
        <p className="text-sm mt-3 text-muted">English-only jobs are concentrated in Berlin, Munich, Hamburg and Frankfurt. German A2/B1 learned during the master&apos;s roughly doubles your options.</p>
      </Card>

      <Card title="Main risk: the visa queue">
        <Bullets items={[
          "Sindh residents apply to the Karachi Consulate through the online Consular Services Portal",
          "Applications are handled in the order received; reported waits range from weeks to 12+ months",
          "So prefer early-deadline programmes and submit the visa application the day you get an offer",
          "If it's too late, ask the university to switch you to April 2028 (the embassy suggests this)",
          "No APS certificate is needed for Pakistan (only China, India, Vietnam, Mongolia)",
        ]} />
        <Link href="/universities" className="text-sm text-accent mt-3 inline-block">See the university shortlist →</Link>
      </Card>
    </Page>
  );
}
