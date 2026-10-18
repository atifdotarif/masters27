"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const groups = [
  {
    label: "Plan",
    links: [
      { href: "/", label: "Overview" },
      { href: "/timeline", label: "Timeline" },
      { href: "/checklist", label: "Checklist" },
    ],
  },
  {
    label: "Routes",
    links: [
      { href: "/germany", label: "Germany" },
      { href: "/germany/steps", label: "Exact steps", sub: true },
      { href: "/universities", label: "Universities", sub: true },
      { href: "/erasmus", label: "Erasmus Mundus" },
      { href: "/erasmus/steps", label: "Steps & programmes", sub: true },
      { href: "/italy", label: "Italy" },
      { href: "/europe", label: "Other Europe" },
    ],
  },
  {
    label: "Research",
    links: [
      { href: "/countries", label: "Country selection" },
      { href: "/scholarships", label: "All scholarships" },
      { href: "/reports", label: "Full reports" },
    ],
  },
];
const all = groups.flatMap((g) => g.links);

// Highlight the most specific matching link only.
function activeHref(path: string) {
  return all
    .filter((l) => (l.href === "/" ? path === "/" : path === l.href || path.startsWith(l.href + "/")))
    .sort((a, b) => b.href.length - a.href.length)[0]?.href;
}

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const current = activeHref(path);
  return (
    <nav className="md:w-64 md:shrink-0 md:border-r border-line md:min-h-screen md:sticky md:top-0 md:h-screen md:overflow-y-auto">
      <div className="flex items-center justify-between px-6 py-5 md:pt-10 md:pb-8 md:block border-b border-line md:border-0">
        <Link href="/" className="block">
          <div className="font-display text-[1.35rem] font-medium tracking-tight leading-none">Masters Abroad</div>
          <div className="hidden md:block text-xs text-muted mt-2">Atif Arif · Fall 2027 · updated 18 Oct 2026</div>
        </Link>
        <button className="md:hidden text-sm border border-line rounded-md px-3 py-1.5" onClick={() => setOpen(!open)} aria-expanded={open}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <div className={`${open ? "block" : "hidden"} md:block px-6 pb-8 pt-4 md:pt-0 space-y-7`}>
        {groups.map((g) => (
          <div key={g.label}>
            <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted mb-2">{g.label}</div>
            <ul className="space-y-0.5">
              {g.links.map((l) => {
                const active = current === l.href;
                return (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={`relative block py-1.5 text-[14px] transition-colors ${l.sub ? "pl-4 text-[13px]" : ""} ${
                        active ? "text-accent font-medium" : "text-fg/80 hover:text-fg"
                      }`}
                    >
                      {active && <span className="absolute -left-6 top-1/2 -translate-y-1/2 h-4 w-[3px] bg-accent rounded-r" />}
                      {l.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}
