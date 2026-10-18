import Link from "next/link";
import { profile, thisWeek } from "@/lib/data";
import { scholarships } from "@/lib/research";
import { Page, Card, Eyebrow, Stat, LinkArrow } from "@/components/ui";
import Deadlines from "@/components/Deadlines";
import NextDeadline from "@/components/NextDeadline";

const routes = [
  {
    n: "01",
    name: "Erasmus Mundus",
    role: "Free extra shot",
    body: "Fully funded: €1,400/month plus tuition, with no bond to return home. Low odds, so it costs only effort.",
    when: "DEAI 11 Jan · IPCVai 2 Feb · MAIA Nov–Feb",
    href: "/erasmus",
  },
  {
    n: "02",
    name: "Germany",
    role: "Main plan",
    body: "Tuition-free public universities that fit PKR 45–55 lakh. Ten programmes accept your MOI letter with no GRE.",
    when: "Applications Mar – Jul 2027",
    href: "/germany",
  },
  {
    n: "03",
    name: "Gulf, then 2028",
    role: "Backup",
    body: "No admission or visa by mid-2027? Work in Dubai or Riyadh (saving ≈ PKR 45 lakh+ a year), then reapply for Fall 2028.",
    when: "Decide by 30 Jun 2027",
    href: "/countries",
  },
];

const finds = [
  ["IPCVai", "Erasmus Mundus in computer vision + AI. Accepts your MOI letter; deadline 2 Feb 2027."],
  ["Stipendium Hungaricum", "Fully funded master's in Hungary via HEC, ~15 Jan 2027."],
  ["relAI · ELIZA", "German AI-school stipends for master's students; relAI accepts MOI."],
  ["Deutschlandstipendium", "€300/month, applied for after admission (Darmstadt Sep–Oct, Dortmund Aug–Sep)."],
  ["Aga Khan · Rotary", "50% grant / 50% loan (~Mar 2027) and a US$30k+ global grant via Karachi clubs."],
  ["France", "€3,950/yr public tuition and €615/month visa funds. Eiffel needs a university nomination, so contact programmes now."],
];

export default function Home() {
  return (
    <Page
      eyebrow="Fall 2027 plan"
      title="Three routes, one deadline at a time."
      intro="Everything researched so far, in one place: a tuition-free German master's as the main plan, Erasmus Mundus as a free extra shot, and a Gulf job as the fallback."
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
        <NextDeadline />
        <Stat value="45–55" label="Budget, PKR lakh" note="Blocked account + costs" />
        <Stat value="10" label="German programmes" note="MOI accepted, no GRE" />
        <Stat value={scholarships.length} label="Scholarships researched" note="Europe, Gulf, Asia, global" />
      </div>

      <section>
        <Eyebrow className="mb-4">The routes</Eyebrow>
        <div className="grid md:grid-cols-3 border-t border-fg/70">
          {routes.map((r, i) => (
            <Link
              key={r.n}
              href={r.href}
              className={`group block py-6 md:px-6 ${i > 0 ? "border-t md:border-t-0 md:border-l border-line" : "md:pl-0"} hover:bg-card/60 transition-colors`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm text-muted tabular-nums">{r.n}</span>
                <span className="text-[11px] uppercase tracking-[0.12em] text-accent font-semibold">{r.role}</span>
              </div>
              <h3 className="font-display text-2xl font-medium tracking-tight mt-3 group-hover:text-accent transition-colors">{r.name}</h3>
              <p className="text-[14.5px] leading-relaxed text-muted mt-2">{r.body}</p>
              <p className="text-[13px] font-medium mt-4">{r.when}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-[1fr_1.25fr] gap-10">
        <section>
          <Eyebrow className="mb-4">Do this week</Eyebrow>
          <ol className="border-t border-line">
            {thisWeek.map((t, i) => (
              <li key={i} className="flex gap-4 py-3 border-b border-line text-[14.5px] leading-relaxed">
                <span className="font-display text-muted tabular-nums w-5 shrink-0">{i + 1}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
          <div className="mt-4"><LinkArrow href="/checklist">Full checklist</LinkArrow></div>
        </section>
        <section>
          <Eyebrow className="mb-4">Upcoming deadlines</Eyebrow>
          <Deadlines limit={7} />
          <div className="mt-4"><LinkArrow href="/timeline">Month-by-month timeline</LinkArrow></div>
        </section>
      </div>

      <Card title="New from the deep research">
        <dl className="grid md:grid-cols-2 gap-x-10">
          {finds.map(([k, v]) => (
            <div key={k} className="py-3 border-b border-line">
              <dt className="font-medium text-[14.5px]">{k}</dt>
              <dd className="text-[14px] text-muted leading-relaxed mt-0.5">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="text-[14px] leading-relaxed mt-5 pl-4 border-l-2 border-accent">
          <span className="font-medium">Worth reconsidering:</span> one IELTS sitting (7.0) would unlock KAUST (full fellowship, 3 Jan 2027),
          MBZUAI (15 Dec), HBKU (1 Feb), Khalifa and more Erasmus programmes. The DAAD master&apos;s scholarship is not open to Pakistanis this cycle.
        </p>
        <div className="mt-5"><LinkArrow href="/scholarships">Browse all scholarships</LinkArrow></div>
      </Card>

      <section>
        <Eyebrow className="mb-4">Profile &amp; constraints</Eyebrow>
        <dl className="grid sm:grid-cols-2 md:grid-cols-3 border-t border-line">
          {[
            ["Degree", profile.degree],
            ["CGPA", profile.cgpa],
            ["Work", profile.job],
            ["Budget", profile.budget],
            ["Intake", profile.intake],
            ["Goal", profile.goal],
          ].map(([k, v]) => (
            <div key={k} className="py-3 pr-4 border-b border-line">
              <dt className="text-[11px] uppercase tracking-[0.12em] text-muted">{k}</dt>
              <dd className="text-[14.5px] mt-1">{v}</dd>
            </div>
          ))}
        </dl>
        <p className="text-sm text-muted mt-3">{profile.constraints.join(" · ")}</p>
      </section>

      <p className="text-xs text-muted">
        Facts were checked on official pages on 18 Oct 2026 where marked. Most 2027 dates follow last year&apos;s pattern, so re-check them in January 2027. €1 = PKR 320.
      </p>
    </Page>
  );
}
