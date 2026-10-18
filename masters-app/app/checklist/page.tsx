"use client";
import { useEffect, useState } from "react";
import { checklist } from "@/lib/data";
import { Page, Card } from "@/components/ui";

const KEY = "masters-checklist-v1";

export default function Checklist() {
  const [done, setDone] = useState<Record<string, boolean>>({});
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setDone(JSON.parse(raw));
    } catch {}
  }, []);
  const toggle = (k: string) => {
    const next = { ...done, [k]: !done[k] };
    setDone(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
  };
  const all = Object.values(checklist).flat();
  const count = all.filter((i) => done[i]).length;
  return (
    <Page eyebrow="Plan" title="Checklist" intro={`Tick items as you finish them. Progress is saved in this browser. ${count} of ${all.length} done.`}>
      <div className="h-1 bg-line rounded-full overflow-hidden">
        <div className="h-full bg-accent transition-all" style={{ width: `${(count / all.length) * 100}%` }} />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(checklist).map(([group, items]) => (
          <Card key={group} title={group}>
            <ul className="space-y-2">
              {items.map((i) => (
                <li key={i}>
                  <label className="flex gap-2 items-start text-sm cursor-pointer">
                    <input type="checkbox" className="mt-0.5" checked={!!done[i]} onChange={() => toggle(i)} />
                    <span className={done[i] ? "line-through text-muted" : ""}>{i}</span>
                  </label>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Page>
  );
}
