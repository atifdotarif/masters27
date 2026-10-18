import Link from "next/link";
import { reports } from "@/lib/data";
import { Page, Card } from "@/components/ui";

export default function Reports() {
  return (
    <Page eyebrow="Research" title="Full reports" intro="The complete written reports with every source link. They're read from the reports/ folder, so edits there show up here.">
      <div className="grid md:grid-cols-3 gap-4">
        {reports.map((r) => (
          <Link key={r.slug} href={`/reports/${r.slug}`}>
            <Card title={r.title} className="h-full hover:border-accent transition-colors">
              <p className="text-sm text-muted">{r.desc}</p>
            </Card>
          </Link>
        ))}
      </div>
    </Page>
  );
}
