import Link from "next/link";
import { germanyGuide, scholarships } from "@/lib/research";
import { Page, Card } from "@/components/ui";
import GuideView from "@/components/GuideView";
import ScholarshipExplorer from "@/components/ScholarshipExplorer";

export default function GermanySteps() {
  const de = scholarships.filter((s) => s.source === "Germany & EU");
  return (
    <Page eyebrow="Route 02 · Germany" title={germanyGuide.title} intro={<>Every step from Karachi to your first semester, with costs, timings and official links. The overview is on the <Link href="/germany" className="text-accent">Germany plan</Link> page.</>}>
      <Card title="Check first: do you need a MOFA apostille for Germany?">
        <p className="text-sm">German universities don&apos;t ask for one, and Germany may have objected to Pakistan joining the Apostille Convention. If so, a Pakistani apostille has no legal effect in Germany. Check the <a className="text-accent" href="https://www.hcch.net/en/instruments/conventions/status-table/?cid=41" target="_blank" rel="noreferrer">HCCH status table</a> before paying. HEC attestation is still needed.</p>
      </Card>
      <GuideView guide={germanyGuide} />
      <section className="space-y-3">
        <h2 className="font-display text-2xl font-medium tracking-tight">German &amp; EU scholarships ({de.length})</h2>
        <ScholarshipExplorer items={de} sources={["Germany & EU"]} hideSourceFilter />
      </section>
    </Page>
  );
}
