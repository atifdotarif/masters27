import Link from "next/link";
import { erasmusGuide, scholarships } from "@/lib/research";
import { Page } from "@/components/ui";
import GuideView from "@/components/GuideView";
import ScholarshipExplorer from "@/components/ScholarshipExplorer";

export default function ErasmusSteps() {
  const em = scholarships.filter((s) => s.source === "Erasmus Mundus");
  return (
    <Page eyebrow="Route 01 · Erasmus Mundus" title={erasmusGuide.title} intro={<>Exact application steps (DEAI&apos;s come from its official Application Manual), what happens after selection, and the visa for your first-semester country. The overview is on the <Link href="/erasmus" className="text-accent">Erasmus Mundus</Link> page.</>}>
      <GuideView guide={erasmusGuide} />
      <section className="space-y-3">
        <h2 className="font-display text-2xl font-medium tracking-tight">All Erasmus Mundus programmes checked ({em.length})</h2>
        <ScholarshipExplorer items={em} sources={["Erasmus Mundus"]} hideSourceFilter />
      </section>
    </Page>
  );
}
