import { italy, italyDeadlines } from "@/lib/data";
import { Page, Card, Table, Bullets, Verified } from "@/components/ui";
import Deadlines from "@/components/Deadlines";

export default function Italy() {
  return (
    <Page eyebrow="For a friend"
      title="Italy: master's guide"
      intro="A general guide for a Pakistani CS/AI graduate. Italy is one of the cheapest places in Europe to study, thanks to the need-based DSU grant. The catches are showing visa money up front and a weaker English-only job market."
    >
      <Card title="The short version"><Bullets items={italy.summary} /></Card>

      <div className="grid md:grid-cols-5 gap-4">
        <Card title="Money" className="md:col-span-2">
          <ul className="space-y-3 text-sm">
            {italy.money.map((m) => (
              <li key={m.label}>
                <div className="flex justify-between gap-2 text-muted"><span>{m.label}</span><Verified ok={m.verified} /></div>
                <div className="font-medium">{m.value}</div>
              </li>
            ))}
          </ul>
          <p className="text-xs text-muted mt-3">€1 = PKR 320. Funds must be traceable (bank history), not borrowed for a day: the embassy has flagged a rise in forged proof of funds.</p>
        </Card>
        <Card title="Upcoming Italy deadlines" className="md:col-span-3">
          <Deadlines items={italyDeadlines} />
          <p className="text-xs text-muted mt-2">Only Padova&apos;s and PoliMi&apos;s 2027/28 dates are published. The rest follow last year&apos;s pattern.</p>
        </Card>
      </div>

      <Card title="Universities (English-taught CS / AI / Data Science)">
        <Table
          head={["University", "Deadline", "English", "Selection", "Fees & scholarships", "DSU office"]}
          rows={italy.universities.map((u) => [
            <div key="n" className="min-w-40">
              <a href={u.url} target="_blank" rel="noreferrer" className="font-medium text-accent">{u.name} ↗</a>
              <div className="text-xs">{u.programme}</div>
              <div className="text-xs text-muted">{u.city}</div>
            </div>,
            u.deadline, u.english, u.selection, u.money, u.dsu,
          ])}
        />
        <p className="text-xs text-muted mt-3">No GRE needed anywhere checked. Duolingo isn&apos;t listed. IELTS or PTE is the safest English proof; only PoliMi clearly accepts an MOI letter. &quot;Pattern&quot; = last year&apos;s dates.</p>
      </Card>

      <Card title="Process, step by step">
        <ol className="grid md:grid-cols-2 gap-4">
          {italy.process.map((p, i) => (
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

      <div className="grid md:grid-cols-2 gap-4">
        <Card title="Living costs per month (estimates)">
          <Table head={["City", "Total / month"]} rows={italy.living.map(([c, v]) => [c, v])} />
          <p className="text-xs text-muted mt-2">The visa minimum (€848/month) is below real costs in Milan, Rome and Bologna.</p>
        </Card>
        <Card title="Work during & after studies"><Bullets items={italy.work} /></Card>
      </div>

      <Card title="Biggest risks">
        <Bullets items={[
          "DSU money arrives after enrolment (first payment ~Dec–Jan), so the family must show and bridge €10,180 first",
          "Padova reserves only ~7% of first-year DSU funds for non-EU freshmen, so you can be eligible but still unfunded",
          "Year 2 of DSU needs 20–30 credits passed by 10 August of year 1",
          "Some DSU offices still want income documents issued via Italian diplomatic channels; confirm whether a MOFA apostille is enough",
          "Visa slots go by Universitaly validation date: pre-enrol the day you're admitted",
        ]} />
      </Card>
    </Page>
  );
}
