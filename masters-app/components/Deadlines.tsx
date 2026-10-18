"use client";
import { useEffect, useState } from "react";
import { deadlines, Deadline, Track } from "@/lib/data";
import { Badge } from "./ui";

const trackTone: Record<Track, string> = { Germany: "blue", Erasmus: "green", Ireland: "amber", Italy: "red", Docs: "gray" };

export default function Deadlines({ limit, items = deadlines }: { limit?: number; items?: Deadline[] }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);
  const sorted = [...items].sort((a, b) => a.date.localeCompare(b.date));
  const upcoming = now ? sorted.filter((d) => new Date(d.date + "T23:59:59") >= now) : sorted;
  const list = limit ? upcoming.slice(0, limit) : upcoming;
  return (
    <ul className="divide-y divide-line">
      {list.map((d) => {
        const days = now ? Math.ceil((new Date(d.date + "T23:59:59").getTime() - now.getTime()) / 86400000) : null;
        return (
          <li key={d.date + d.title} className="py-2.5 flex gap-3 items-start">
            <div className="w-14 shrink-0 text-right">
              <div className={`text-lg font-semibold leading-none ${days !== null && days <= 30 ? "text-rose-600 dark:text-rose-400" : ""}`}>{days ?? "–"}</div>
              <div className="text-[11px] text-muted">days</div>
            </div>
            <div className="min-w-0">
              <div className="text-sm font-medium">{d.title}</div>
              <div className="text-xs text-muted mt-0.5 flex flex-wrap gap-2 items-center">
                <span>{new Date(d.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                <Badge tone={trackTone[d.track]}>{d.track}</Badge>
                {!d.verified && <Badge tone="amber">date unverified</Badge>}
                <span>{d.note}</span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
