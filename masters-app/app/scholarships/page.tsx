import { scholarships, SOURCES } from "@/lib/research";
import { Page, Card, Bullets } from "@/components/ui";
import ScholarshipExplorer from "@/components/ScholarshipExplorer";

export default function Scholarships() {
  const high = scholarships.filter((s) => s.fit === "high").length;
  return (
    <Page eyebrow="Research"
      title="All scholarships"
      intro={`${scholarships.length} scholarships and funded programmes researched across Europe, the Gulf, Asia and global/Pakistani funders. ${high} are rated a high fit for your profile. Click any one for eligibility, English rules, bonds and the exact application steps.`}
    >
      <Card title="What the deep research changed">
        <Bullets items={[
          "The usual DAAD master's scholarship is NOT open to Pakistanis this cycle. In Germany, the realistic money is AI-school stipends (relAI, ELIZA), the €300/month Deutschlandstipendium (apply after admission) and university awards",
          "One IELTS sitting (7.0) would unlock big fully funded options: KAUST (deadline 3 Jan 2027, full fellowship), MBZUAI (15 Dec), HBKU (1 Feb), Khalifa, plus EDISS/CYBERSURE in Erasmus Mundus",
          "Without IELTS, the best funded options are DEAI (11 Jan), IPCVai (EMJM, MOI accepted, 2 Feb), MAIA (opens soon), Stipendium Hungaricum (~15 Jan) and GKS (Korea, ~Feb–Mar, but a Korean language year)",
          "Top-ups for a self-funded Germany plan: Aga Khan Foundation (50% grant / 50% loan, ~Mar 2027) and Rotary Global Grant (US$30k+, approach Karachi clubs now)",
          "Chevening, Fulbright, Australia Awards and HEC overseas awards carry return-home or service bonds, which clashes with your earn-abroad goal",
        ]} />
      </Card>
      <ScholarshipExplorer items={scholarships} sources={SOURCES} />
      <p className="text-xs text-muted">&quot;MOI ok&quot; = the official page accepts an English-medium letter (or needs no English test). &quot;MOI maybe&quot; = depends on the university or is unconfirmed. Always confirm on the official page. Unverified entries come from secondary sources.</p>
    </Page>
  );
}
