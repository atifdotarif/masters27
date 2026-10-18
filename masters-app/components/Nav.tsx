"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Overview" },
  { href: "/countries", label: "Country selection" },
  { href: "/germany", label: "Germany plan" },
  { href: "/germany/steps", label: "Germany: exact steps", sub: true },
  { href: "/universities", label: "German universities", sub: true },
  { href: "/erasmus", label: "Erasmus Mundus" },
  { href: "/erasmus/steps", label: "Erasmus: steps & all programmes", sub: true },
  { href: "/scholarships", label: "All scholarships" },
  { href: "/europe", label: "Other European countries" },
  { href: "/italy", label: "Italy" },
  { href: "/timeline", label: "Timeline" },
  { href: "/checklist", label: "Checklist" },
  { href: "/reports", label: "Full reports" },
];

// Highlight the most specific matching link only.
function activeHref(path: string) {
  return links
    .filter((l) => (l.href === "/" ? path === "/" : path === l.href || path.startsWith(l.href + "/")))
    .sort((a, b) => b.href.length - a.href.length)[0]?.href;
}

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <nav className="md:w-60 md:shrink-0 md:border-r border-line bg-card md:min-h-screen">
      <div className="flex items-center justify-between px-5 py-4 md:block">
        <Link href="/" className="font-semibold text-lg">Masters Abroad</Link>
        <p className="hidden md:block text-xs text-muted mt-1">Research as of 18 Oct 2026</p>
        <button className="md:hidden text-sm border border-line rounded px-3 py-1" onClick={() => setOpen(!open)}>
          {open ? "Close" : "Menu"}
        </button>
      </div>
      <ul className={`${open ? "block" : "hidden"} md:block px-3 pb-4`}>
        {links.map((l) => {
          const active = activeHref(path) === l.href;
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md py-2 text-sm ${l.sub ? "pl-7 pr-3 text-[13px]" : "px-3"} ${active ? "bg-accent-soft text-accent font-medium" : "text-fg hover:bg-accent-soft/60"}`}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
