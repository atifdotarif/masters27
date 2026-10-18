import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { reports } from "@/lib/data";

export function generateStaticParams() {
  return reports.map((r) => ({ slug: r.slug }));
}

export default async function Report({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const r = reports.find((x) => x.slug === slug);
  if (!r) notFound();
  const md = await fs.readFile(path.join(process.cwd(), "..", "reports", r.file), "utf8");
  return (
    <div className="max-w-3xl mx-auto px-4 md:px-8 py-8">
      <Link href="/reports" className="text-sm text-accent">← All reports</Link>
      <article className="prose prose-sm md:prose-base dark:prose-invert max-w-none mt-4 prose-table:block prose-table:overflow-x-auto prose-a:text-accent">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            // Keep relative links to sibling reports inside the app
            a: ({ href = "", children }) => {
              const sib = reports.find((x) => decodeURIComponent(href) === x.file);
              if (sib) return <Link href={`/reports/${sib.slug}`}>{children}</Link>;
              return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
            },
          }}
        >
          {md}
        </ReactMarkdown>
      </article>
    </div>
  );
}
