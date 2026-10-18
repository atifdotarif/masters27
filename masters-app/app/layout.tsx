import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Masters Abroad Plan",
  description: "Atif's master's abroad research: country selection, Germany plan, Erasmus Mundus and timeline.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="md:flex min-h-screen">
        <Nav />
        <main className="flex-1 min-w-0">{children}</main>
      </body>
    </html>
  );
}
