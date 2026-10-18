"use client";
import { useEffect, useState } from "react";
import { deadlines, Deadline, Track } from "@/lib/data";
import { Badge } from "./ui";

const trackTone: Record<Track, string> = { Germany: "blue", Erasmus: "green", Ireland: "amber", Italy: "red", Scholarship: "gray", Docs: "gray" };

const end = (d: string) => new Date(d + "T23:59:59");

export function useNow() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => setNow(new Date()), []);
  return now;
}

export function upcoming(items: Deadline[], now: Date | null) {
  const sorted = [...items].sort((a, b) => a.date.localeCompare(b.date));
  return now ? sorted.filter((d) => end(d.date) >= now) : sorted;
}

export function daysLeft(date: string, now: Date | null) {
  return now ? Math.ceil((end(date).getTime() - now.getTime()) / 86400000) : null;
}

export default function Deadlines({ limit, items = deadlines }: { limit?: number; items?: Deadline[] }) {
  const now = useNow();
  const list = upcoming(items, now).slice(0, limit ?? Infinity);
  return (
    <ol className="border-t border-line">
      {list.map((d) => {
        const days = daysLeft(d.date, now);
        const soon = days !== null && days <= 30;
        return (
          <li key={d.date + d.title} className="grid grid-cols-[4.5rem_1fr] gap-4 py-3.5 border-b border-line">
            <div className="text-right">
              <div className={`font-display text-[1.7rem] leading-none font-medium tabular-nums ${soon ? "text-accent" : ""}`}>{days ?? "–"}</div>
              <div className="text-[10.5px] uppercase tracking-[0.12em] text-muted mt-1">days</div>
            </div>
            <div className="min-w-0">
              <div className="text-[14.5px] font-medium leading-snug">{d.title}</div>
              <div className="text-[13px] text-muted mt-1 flex flex-wrap gap-x-3 gap-y-1 items-center">
                <span className="tabular-nums">{new Date(d.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</span>
                <Badge tone={trackTone[d.track]}>{d.track}</Badge>
                {!d.verified && <span className="italic">date unconfirmed</span>}
              </div>
              {d.note && <div className="text-[13px] text-muted mt-0.5">{d.note}</div>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
