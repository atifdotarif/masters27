import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Masters Abroad Plan",
  description: "Atif's master's abroad research: country selection, Germany plan, Erasmus Mundus and timeline.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="md:flex min-h-screen">
        <Nav />
        <main className="flex-1 min-w-0">{children}</main>
      </body>
    </html>
  );
}
