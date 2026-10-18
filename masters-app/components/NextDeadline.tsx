"use client";
import { deadlines } from "@/lib/data";
import { useNow, upcoming, daysLeft } from "./Deadlines";
import { Stat } from "./ui";

export default function NextDeadline() {
  const now = useNow();
  const next = upcoming(deadlines, now)[0];
  if (!next) return null;
  return <Stat value={daysLeft(next.date, now) ?? "–"} label="Days to next deadline" note={next.title} />;
}
