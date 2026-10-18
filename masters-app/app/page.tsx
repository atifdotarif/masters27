import Link from "next/link";
import { profile, thisWeek } from "@/lib/data";
import { Page, Card, Badge, Bullets } from "@/components/ui";
import Deadlines from "@/components/Deadlines";

export default function Home() {
  return (
    <Page
      title="Your master's abroad plan"
      intro="Everything researched so far, in one place. Main plan: a tuition-free German public university. Free extra shot: Erasmus Mundus scholarships (DEAI, MAIA). Backup: a Gulf job, then reapply for 2028."
    >
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Plan A: Erasmus Mundus" className="border-emerald-300 dark:border-emerald-800">
          <p className="text-sm text-muted">Fully funded (€1,400/month + tuition). Low odds, costs only effort.</p>
          <p className="text-sm mt-2"><b>DEAI</b> by 11 Jan 2027 · <b>MAIA</b> Nov–Feb</p>
          <Link href="/erasmus" className="text-sm text-accent mt-3 inline-block">Open →</Link>
        </Card>
        <Card title="Main plan: Germany" className="border-sky-300 dark:border-sky-800">
          <p className="text-sm text-muted">Tuition-free; fits PKR 45–55 lakh. 10 programmes accept your MOI letter with no GRE.</p>
          <p className="text-sm mt-2">Applications <b>Mar – Jul 2027</b></p>
          <Link href="/germany" className="text-sm text-accent mt-3 inline-block">Open →</Link>
        </Card>
        <Card title="Backup: Gulf → 2028" className="border-amber-300 dark:border-amber-800">
          <p className="text-sm text-muted">No admission or visa by mid-2027? Work in Dubai/Riyadh (save ≈ PKR 45 lakh+/yr), then reapply for Fall 2028.</p>
          <Link href="/countries" className="text-sm text-accent mt-3 inline-block">Why →</Link>
        </Card>
      </div>

      <Card title="New from the deep research">
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <div><b>IPCVai</b> (Erasmus Mundus, computer vision + AI): MOI accepted, deadline 2 Feb 2027</div>
          <div><b>Stipendium Hungaricum</b>: fully funded Hungary via HEC, ~15 Jan 2027</div>
          <div><b>relAI / ELIZA</b>: German AI-school stipends for master&apos;s students (relAI accepts MOI)</div>
          <div><b>Deutschlandstipendium</b>: €300/month, apply after admission (Darmstadt Sep–Oct, Dortmund Aug–Sep)</div>
          <div><b>Aga Khan Foundation</b>: 50% grant / 50% loan, ~Mar 2027. <b>Rotary Global Grant</b>: US$30k+, approach Karachi clubs now</div>
          <div><b>France</b>: €3,950/yr public tuition, €615/month visa funds; Eiffel needs a university nomination, so contact programmes now</div>
          <div className="md:col-span-2 text-muted">Decision worth reconsidering: <b>one IELTS (7.0)</b> would unlock KAUST (full fellowship, 3 Jan 2027), MBZUAI (15 Dec), HBKU (1 Feb), Khalifa and more Erasmus programmes. The DAAD master&apos;s scholarship is <b>not</b> open to Pakistanis this cycle.</div>
        </div>
        <Link href="/scholarships" className="text-sm text-accent mt-3 inline-block">Browse all scholarships →</Link>
      </Card>

      <div className="grid md:grid-cols-5 gap-4">
        <Card title="Do this week" className="md:col-span-2">
          <Bullets items={thisWeek} />
          <Link href="/checklist" className="text-sm text-accent mt-4 inline-block">Full checklist →</Link>
        </Card>
        <Card title="Upcoming deadlines" className="md:col-span-3">
          <Deadlines limit={8} />
          <Link href="/timeline" className="text-sm text-accent mt-3 inline-block">Month-by-month timeline →</Link>
        </Card>
      </div>

      <Card title="Your profile & constraints">
        <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
          <div><dt className="text-muted">Degree</dt><dd>{profile.degree}</dd></div>
          <div><dt className="text-muted">CGPA</dt><dd>{profile.cgpa}</dd></div>
          <div><dt className="text-muted">Job</dt><dd>{profile.job}</dd></div>
          <div><dt className="text-muted">Budget</dt><dd>{profile.budget}</dd></div>
          <div><dt className="text-muted">Intake</dt><dd>{profile.intake}</dd></div>
          <div><dt className="text-muted">Goal</dt><dd>{profile.goal}</dd></div>
        </dl>
        <div className="flex flex-wrap gap-2 mt-3">{profile.constraints.map((c) => <Badge key={c} tone="blue">{c}</Badge>)}</div>
      </Card>

      <p className="text-xs text-muted">
        Facts marked <Badge tone="green">verified</Badge> were checked on official pages on 18 Oct 2026. Most 2027 dates follow last year&apos;s pattern, so re-check them in January 2027. Rate used: €1 = PKR 320.
      </p>
    </Page>
  );
}
