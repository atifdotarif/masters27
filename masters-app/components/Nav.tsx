"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Overview" },
  { href: "/countries", label: "Country selection" },
  { href: "/germany", label: "Germany plan" },
  { href: "/universities", label: "German universities" },
  { href: "/erasmus", label: "Erasmus Mundus" },
  { href: "/italy", label: "Italy" },
  { href: "/timeline", label: "Timeline" },
  { href: "/checklist", label: "Checklist" },
  { href: "/reports", label: "Full reports" },
];

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
          const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
          return (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-2 text-sm ${active ? "bg-accent-soft text-accent font-medium" : "text-fg hover:bg-accent-soft/60"}`}
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
