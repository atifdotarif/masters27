// Loads the deep-research JSON files in /data (written by research agents, 18 Oct 2026).
import germanyEu from "@/data/scholarships-germany-eu.json";
import erasmusS from "@/data/scholarships-erasmus.json";
import europeOther from "@/data/scholarships-europe-other.json";
import asiaGulf from "@/data/scholarships-asia-gulf.json";
import globalS from "@/data/scholarships-global.json";
import countriesEurope from "@/data/countries-europe.json";
import guideGermany from "@/data/guide-germany.json";
import guideErasmus from "@/data/guide-erasmus.json";

export type Fit = "high" | "medium" | "low";
export type Status = "open" | "upcoming" | "closed" | "unknown";

export type Scholarship = {
  id: string;
  name: string;
  country: string;
  region: string;
  host: string;
  coverage: string;
  amount: string;
  level: string;
  fields: string;
  eligibility: string;
  english: string;
  gre: string;
  deadline: string;
  deadlineISO: string | null;
  status: Status;
  bond: string;
  fit: Fit;
  fitReason: string;
  steps: string[];
  url: string;
  verified: boolean;
  source: string;
};

export type GuideStep = { title: string; detail: string[]; cost?: string; time?: string; url?: string; verified?: boolean };
export type Guide = {
  id: string;
  title: string;
  summary: string;
  sections: { heading: string; when?: string; steps: GuideStep[] }[];
  tips: string[];
  pitfalls: string[];
};

export type CountryOption = {
  id: string;
  country: string;
  region: string;
  route: string;
  tuition: string;
  living: string;
  visaFunds: string;
  english: string;
  postStudy: string;
  jobsEnglishOnly: number;
  scholarships: string[];
  fitsBudget: "yes" | "borderline" | "no";
  fit: Fit;
  fitReason: string;
  keyDeadlines: string;
  programmes: string[];
  url: string;
  verified: boolean;
};

// Same scholarship researched twice; keep the more detailed copy.
const DUPLICATES = new Set(["hec-stipendium-hungaricum"]);

const tag = (rows: unknown[], source: string) =>
  (rows as Omit<Scholarship, "source">[]).map((r) => ({ ...r, source }));

export const SOURCES = ["Erasmus Mundus", "Germany & EU", "Other Europe", "Gulf & Asia", "Global & Pakistan"] as const;

export const scholarships: Scholarship[] = [
  ...tag(erasmusS, "Erasmus Mundus"),
  ...tag(germanyEu, "Germany & EU"),
  ...tag(europeOther, "Other Europe"),
  ...tag(asiaGulf, "Gulf & Asia"),
  ...tag(globalS, "Global & Pakistan"),
].filter((s) => !DUPLICATES.has(s.id));

export const countries = countriesEurope as CountryOption[];
export const germanyGuide = (guideGermany as Guide[])[0];
export const erasmusGuide = (guideErasmus as Guide[])[0];

// Hand-checked from each entry's English rules (18 Oct 2026).
// "yes" = official page accepts an MOI letter (or needs no English test);
// "maybe" = depends on university/programme or is unconfirmed.
const MOI_YES = new Set([
  "emjm-deai", "emjm-maia", "emjm-ipcvai", "emjm-cyberus", "emjm-ifros", "emjm-neurodata",
  "schwarzman-scholars", "eth-esop", "relai-zuse-school-msc-scholarship", "gks-university-track-2027",
]);
const MOI_MAYBE = new Set([
  "kaist-international-graduate", "hkust-mphil-pgs", "hku-mphil-pgs", "csc-china-university-type-b",
  "taiwan-top-university-scholarships", "malaysia-international-scholarship", "mext-university-recommendation-2027",
  "adb-jsp-ait", "emjm-smaccs", "emjm-emildai", "stipendium-hungaricum-2027", "hec-chinese-government-scholarship",
  "paris-saclay-imsp", "eiffel-excellence-2027", "goi-ies-2027", "akf-international-scholarship-programme",
  "commonwealth-shared", "chevening-2028", "epfl-excellence-fellowship", "daad-epos-development-related",
  "hbku-cse-ms", "eliza-zuse-school-master-scholarship", "hpi-computer-science-msc-scholarship",
]);

export type Moi = "yes" | "maybe" | "no";
export function moiStatus(s: Scholarship): Moi {
  return MOI_YES.has(s.id) ? "yes" : MOI_MAYBE.has(s.id) ? "maybe" : "no";
}

export function hasNoBond(s: Scholarship) {
  return /none found|^none|no bond|no return/i.test(s.bond);
}
