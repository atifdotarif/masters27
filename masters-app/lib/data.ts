// All research findings as of 18 Oct 2026. "verified" = checked on an official page.
// Exchange rate used throughout: €1 = PKR 320, USD 1 = PKR 278.

export const profile = {
  name: "Atif Arif",
  degree: "BS Computer Science, FAST-NUCES Karachi",
  cgpa: "3.41 / 4 (≈ German 1.6–1.9)",
  job: "AI Software Engineer I, Imperium Dynamics",
  budget: "PKR 35–40 lakh blocked account + PKR 10–15 lakh expenses",
  intake: "Fall 2027 (October/September)",
  goal: "Earn abroad for a few years, then return to Pakistan",
  constraints: ["English only", "No IELTS (use FAST MOI letter)", "No GRE"],
};

export type Track = "Germany" | "Erasmus" | "Ireland" | "Italy" | "Docs";

export type Deadline = {
  date: string; // ISO
  title: string;
  track: Track;
  note: string;
  verified: boolean;
};

export const deadlines: Deadline[] = [
  { date: "2026-10-20", title: "DEAI application portal opens", track: "Erasmus", note: "Register and check FAST-NUCES is in the university list", verified: true },
  { date: "2026-12-15", title: "Submit DEAI (early, for the missing-file check)", track: "Erasmus", note: "Self-imposed target", verified: false },
  { date: "2027-01-11", title: "DEAI deadline, 12:00 GMT (5 PM PKT)", track: "Erasmus", note: "Strict. No fee.", verified: true },
  { date: "2027-01-18", title: "DEAI reference letters due", track: "Erasmus", note: "Referees upload them themselves", verified: true },
  { date: "2027-02-28", title: "MAIA scholarship round closes (tentative)", track: "Erasmus", note: "Exact date not posted yet; check weekly from Nov", verified: false },
  { date: "2027-03-15", title: "Würzburg MSc AI & Extended Reality", track: "Germany", note: "Earliest German deadline on the list", verified: false },
  { date: "2027-03-12", title: "Ireland GOI-IES scholarship (expected)", track: "Ireland", note: "Needs an Irish university offer first", verified: false },
  { date: "2027-04-15", title: "Frankfurt UAS High Integrity Systems", track: "Germany", note: "Via uni-assist", verified: true },
  { date: "2027-04-15", title: "Göttingen Applied Computer Science", track: "Germany", note: "Aptitude test + possible video interview", verified: false },
  { date: "2027-04-30", title: "RPTU Kaiserslautern CS (if MOI accepted)", track: "Germany", note: "Published date", verified: true },
  { date: "2027-05-15", title: "TU Dortmund Data Science (safe target)", track: "Germany", note: "Department says 15 Jun; DAAD says 15 May", verified: false },
  { date: "2027-05-31", title: "Passau CS / AI Engineering", track: "Germany", note: "Full uni-assist application", verified: false },
  { date: "2027-06-01", title: "HPI / Uni Potsdam CS closes · TU Darmstadt opens", track: "Germany", note: "Submit TU Darmstadt on day one", verified: false },
  { date: "2027-06-30", title: "Hildesheim Data Analytics", track: "Germany", note: "Places filled as applications arrive; apply in April", verified: false },
  { date: "2027-07-15", title: "TU Darmstadt · Würzburg AI · THI · TU Chemnitz", track: "Germany", note: "Darmstadt paper documents must ARRIVE by this date", verified: false },
];

export const thisWeek = [
  "Ask FAST registrar for the MOI letter: “medium of instruction and examination was exclusively (100%) English”, signed and stamped",
  "Ask for English transcripts + official course descriptions",
  "Start HEC (eDAS) + MOFA apostille attestation",
  "Register on the DEAI portal (opens 20 Oct) and check FAST-NUCES is listed",
  "Ask 3 referees (one publishing FAST professor); letters due 18 Jan",
  "Get experience letters from Imperium Dynamics and SharkStack",
];

export type Country = {
  rank: number | null;
  name: string;
  route: string;
  score: string;
  verdict: "best" | "good" | "weak" | "out";
  note: string;
};

export const countries: Country[] = [
  { rank: 1, name: "Germany", route: "Tuition-free public university + blocked account", score: "Main plan", verdict: "best", note: "Fits your updated budget (PKR 45–55 lakh). 18-month job-search permit. English-only jobs mostly in Berlin, Munich, Hamburg, Frankfurt." },
  { rank: 2, name: "EU via Erasmus Mundus", route: "DEAI, MAIA (fully funded)", score: "3.60 / 5", verdict: "best", note: "Free (€1,400/month + tuition). Low odds (~1–5%). Free extra shot alongside Germany." },
  { rank: 3, name: "Canada", route: "Funded thesis MSc", score: "3.20 / 5", verdict: "weak", note: "Good funding (CAD 20–24k/yr) but almost always needs IELTS/TOEFL, so it doesn't fit your no-IELTS choice." },
  { rank: 4, name: "Ireland", route: "Only with GOI-IES scholarship", score: "2.55 / 5", verdict: "weak", note: "Best English-only job market and a 1-year master's, but self-funded needs PKR 80–96 lakh+. Only viable with GOI-IES (~60 awards worldwide)." },
  { rank: 5, name: "Italy", route: "DSU need-based grant", score: "2.25 / 5", verdict: "weak", note: "Cheap to enter (visa needs €10,180), but a weak English-only job market." },
  { rank: 6, name: "Hungary / Finland / Malaysia", route: "Stipendium Hungaricum / waivers / MIS", score: "3.00–3.15", verdict: "weak", note: "Reachable, but low earning potential or weak English-only markets." },
  { rank: null, name: "UK", route: "Chevening / self-funded", score: "1.90 / 5", verdict: "out", note: "Chevening closed and needs 2 yrs of post-degree work (earliest a 2029 start). Graduate visa cut to 18 months. High refusal rate for Pakistanis." },
  { rank: null, name: "USA", route: "Funded MS", score: "2.35 / 5", verdict: "out", note: "71% F-1 refusal rate for Pakistanis; only ~8% of international MS students get TA/RA funding." },
  { rank: null, name: "Netherlands / Sweden / Australia", route: "Self-funded", score: "1.95–2.70", verdict: "out", note: "Tuition alone breaks the budget." },
];

export const gulf = {
  title: "The Gulf benchmark (no master's)",
  points: [
    "Dubai/Riyadh AI engineer with 2–3 yrs experience: AED 15–25k or SAR 20k/month, tax-free",
    "Modelled savings: ≈ PKR 45 lakh to 1.36 crore per year",
    "Beats most master's routes on 5-year savings; a master's wins on long-run salary, EU work rights and credential",
    "Backup plan: if no admission/visa by mid-2027, work in the Gulf for a year and reapply for Fall 2028",
  ],
};

export const earnings = [
  { label: "Entry-level gross", ireland: "€50–60k", germany: "€50–60k", germanyCheap: "€45–55k" },
  { label: "Take-home", ireland: "~€42k", germany: "~€33k", germanyCheap: "~€31k" },
  { label: "1-bed rent / month", ireland: "€1,800–2,200", germany: "€1,000–1,400", germanyCheap: "€650–850" },
  { label: "Savings / yr (entry)", ireland: "~€8–10k", germany: "~€10–12k", germanyCheap: "~€13–15k" },
  { label: "Savings / yr (mid)", ireland: "~€20–25k", germany: "~€18–22k", germanyCheap: "~€18–20k" },
];

export const budget = {
  blocked: [
    { label: "Current blocked account (since 1 Jan 2025)", eur: "€11,904/yr (€992/mo)", pkr: "≈ 38.1 lakh", verified: true },
    { label: "Likely 2027 amount (BAföG-linked increase)", eur: "≈ €12,600–13,000", pkr: "≈ 40–42 lakh", verified: false },
  ],
  oneTime: [
    { item: "HEC attestation + MOFA apostille + translations", pkr: "0.3–0.5" },
    { item: "uni-assist (€75 first + €30 each), ~6 applications", pkr: "~0.7" },
    { item: "Blocked account setup, visa fee (€75), travel insurance", pkr: "~1.0" },
    { item: "Flight Karachi → Germany", pkr: "1.5–2.5" },
    { item: "First semester fee (€127–500)", pkr: "0.4–1.6" },
    { item: "Rent deposit (2–3 months' cold rent)", pkr: "3.0–4.8" },
    { item: "Settling in (SIM, bedding, first weeks)", pkr: "1.0–1.6" },
  ],
  oneTimeTotal: "≈ 9–13 lakh",
  monthly: "€992/month must cover rent (€350–700), insurance (~€140), food (~€250), phone/transport (~€60). Tight in Munich/Frankfurt/Hamburg; workable in Dortmund, Passau, Würzburg, Göttingen, Hildesheim, Chemnitz.",
  year2: "Year 2 is paid by a working-student job: 20 hrs/week × €15–20 ≈ €1,200–1,500/month. Keep ~PKR 10 lakh untouched as a buffer.",
};

export type Uni = {
  rank: number;
  name: string;
  programme: string;
  city: string;
  deadline: string;
  apply: string;
  fee: string;
  moi: "yes" | "partial" | "likely";
  jobs: 1 | 2 | 3 | 4 | 5;
  pros: string[];
  cons: string[];
  url: string;
};

export const universities: Uni[] = [
  { rank: 1, name: "TU Darmstadt", programme: "MSc Computer Science", city: "Darmstadt (Frankfurt region)", deadline: "1 Jun – 15 Jul 2027", apply: "Direct (TUCaN) + post documents", fee: "~€403–420 / sem", moi: "yes", jobs: 4,
    pros: ["MOI accepted", "Grades not considered", "Strong Frankfurt Rhine-Main market"],
    cons: ["Must match 60 ECTS of their core, otherwise a 90-min on-campus exam in early Sept", "Paper documents must ARRIVE by 15 Jul", "Late admission is a visa risk"],
    url: "https://www.informatik.tu-darmstadt.de/studium_fb20/vor_dem_studium/bewerbung_1/bewerbung_2.en.jsp" },
  { rank: 2, name: "HPI / Uni Potsdam", programme: "MSc Computer Science (Data & AI track)", city: "Potsdam (Berlin)", deadline: "1 Apr – 1 Jun 2027", apply: "PULS portal + uni-assist VPD", fee: "~€330–350 / sem", moi: "yes", jobs: 5,
    pros: ["MOI accepted (English as sole language)", "No tuition", "Berlin: best AI/startup market"],
    cons: ["No GRE means you lose its 15% ranking share", "Moderate–hard admission", "Check whether German A1 is needed"],
    url: "https://hpi.de/en/studies/application/application-computer-science-msc/" },
  { rank: 3, name: "TU Dortmund", programme: "MSc Data Science", city: "Dortmund (Ruhr)", deadline: "by 15 May 2027 (safe)", apply: "Full uni-assist application", fee: "~€320 / sem", moi: "yes", jobs: 3,
    pros: ["MOI accepted in writing", "Seat guaranteed if you meet all criteria", "Grade limit 2.7"],
    cons: ["Needs a SEPARATE probability/statistics course of 4+ ECTS", "Statistical report + self-assessment"],
    url: "https://statistik.tu-dortmund.de/en/prospective-students/application-enrollment/master-data-science/" },
  { rank: 4, name: "Uni Göttingen", programme: "MSc Applied Computer Science", city: "Göttingen", deadline: "~15 Apr 2027", apply: "Direct portal", fee: "~€460–500 / sem", moi: "yes", jobs: 2,
    pros: ["MOI counts as C1", "No GRE, no tuition"],
    cons: ["Online aptitude test + possible video interview", "Small city (Hannover ~1 hr)"],
    url: "https://www.uni-goettingen.de/en/619514.html" },
  { rank: 5, name: "Uni Hildesheim", programme: "MSc Data Analytics", city: "Hildesheim (Hannover 30 min)", deadline: "1 Apr – 30 Jun 2027", apply: "Direct (department portal)", fee: "~€440 / sem", moi: "yes", jobs: 3,
    pros: ["MOI accepted (stamped and signed)", "Work experience scores points"],
    cons: ["Places filled as applications arrive, so apply in April"],
    url: "https://www.ismll.uni-hildesheim.de/da/faq_en.html" },
  { rank: 6, name: "Uni Würzburg", programme: "MSc AI (or AI & Extended Reality)", city: "Würzburg", deadline: "AI&XR ~15 Mar · AI 15 Jul", apply: "WueStudy + uni-assist VPD", fee: "€182 / sem", moi: "yes", jobs: 2,
    pros: ["MOI accepted", "Grade 2.5 or better = direct admission", "No tuition"],
    cons: ["Smaller job market (Frankfurt/Nuremberg ~1 hr)"],
    url: "https://informatik.uni-wuerzburg.de/en/studies/degree-programmes/master-artificial-intelligence/application" },
  { rank: 7, name: "Frankfurt UAS", programme: "MSc High Integrity Systems", city: "Frankfurt", deadline: "Jan – 15 Apr 2027", apply: "Full uni-assist application", fee: "€417 / sem", moi: "partial", jobs: 5,
    pros: ["Frankfurt job market", "Early deadline (good for the visa)"],
    cons: ["Bare MOI not listed; prove 30+ English-taught credits via course descriptions", "Your grade is in the 1.9–2.5 discretionary band"],
    url: "https://www.frankfurt-university.de/en/studies/master-programs/high-integrity-systems-msc/for-prospective-students/" },
  { rank: 8, name: "Uni Passau", programme: "MSc CS / MSc AI Engineering", city: "Passau", deadline: "1 Apr – 31 May 2027", apply: "Full uni-assist application", fee: "€127 / sem", moi: "yes", jobs: 1,
    pros: ["MOI accepted (100% English)", "Grade limit 2.7", "Cheapest semester fee"],
    cons: ["German A1 required in year 1", "Thin local job market"],
    url: "https://www.uni-passau.de/en/msc-computer-science" },
  { rank: 9, name: "THI Ingolstadt", programme: "M.Eng. AI Engineering of Autonomous Systems", city: "Ingolstadt (Munich 1 hr)", deadline: "VPD by ~1 Jun, portal by 15 Jul", apply: "uni-assist VPD + PRIMUSS", fee: "€1,200 tuition + €82 / sem", moi: "yes", jobs: 3,
    pros: ["MOI accepted", "Only 1.5 years"],
    cons: ["Tuition ≈ PKR 11.5 lakh in total", "Automotive market is weak right now"],
    url: "https://www.thi.de/en/electrical-engineering-and-information-technology/degree-programmes/ai-engineering-of-autonomous-systems-meng/" },
  { rank: 10, name: "TU Chemnitz", programme: "MSc Web Eng. / Automotive Software Eng.", city: "Chemnitz", deadline: "1 Apr – 15 Jul 2027", apply: "EduApplication portal", fee: "~€340 / sem", moi: "likely", jobs: 1,
    pros: ["High admission chance", "PTE 59 also accepted"],
    cons: ["Weak local job market", "MOI acceptance needs confirming"],
    url: "https://www.tu-chemnitz.de/studierendenservice/studserv/bewerbung/bew_bamala.php.en" },
];

export const ruledOut = [
  ["RWTH Aachen", "GRE required; MOI not accepted"],
  ["Saarland", "GRE required; MOI rejected; top 10% of class"],
  ["FAU Erlangen AI / Data Science", "GRE + Maths Subject Test / new non-EU tuition"],
  ["Uni Bonn CS", "MOI rejected; PTE 76; ~1–5% admitted"],
  ["TU Berlin CS", "MOI rejected for Pakistan; under 5% eligible"],
  ["TU Hamburg / Uni Hamburg", "MOI rejected; IELTS/TOEFL only"],
  ["TU Dresden", "MOI only from listed countries; PTE accepted"],
  ["Paderborn, Rhine-Waal", "GRE / TestAS required"],
  ["OVGU Magdeburg, Siegen, Bonn-Rhein-Sieg", "MOI rejected"],
  ["Fulda", "IELTS/TOEFL + German A1 + online test"],
  ["Stuttgart, Mannheim", "€1,500/semester; MOI unclear or GRE"],
  ["TUM, KIT, Heidelberg, Freiburg", "Non-EU tuition"],
  ["LMU Data Science, Potsdam Data Science", "Discontinued / suspended"],
];

export const process = [
  { step: "Documents", when: "Oct – Dec 2026", items: ["HEC eDAS (Rs 3,000/doc) + MOFA apostille", "MOI letter (“exclusively 100% English”)", "Course descriptions / module handbook", "CV, motivation letter, 2 references", "Work experience letters"] },
  { step: "Applications", when: "Jan – Jul 2027", items: ["uni-assist takes 4–6 weeks: full application or VPD", "Direct portals: Darmstadt, Göttingen, Hildesheim, Chemnitz", "No APS needed for Pakistan (verified)", "Apply early, even if the deadline is later"] },
  { step: "Money", when: "The week an offer arrives", items: ["Open blocked account (Expatrio / Fintiba / Coracle)", "Travel insurance for the visa", "Public student insurance at enrolment (~€140/mo)"] },
  { step: "Visa", when: "Immediately after an offer", items: ["Sindh residents apply to the Karachi Consulate", "Online via Consular Services Portal (digital.diplo.de/studium)", "Upload documents + admission letter from the start", "Handled in order received; wait times vary widely", "Too late? Switch to April 2028"] },
  { step: "Housing", when: "As soon as admitted", items: ["Studierendenwerk dorms (€300–450)", "WG-Gesucht as backup; never pay before viewing"] },
  { step: "Arrival", when: "Sep – Oct 2027", items: ["Address registration (Anmeldung) within 2 weeks", "Enrol + residence permit", "Apply for Werkstudent / HiWi jobs right away"] },
];

export const work = {
  rules: [
    "140 full days or 280 half days per year; university HiWi jobs don't count toward it",
    "Employee jobs only: no freelance or self-employed gigs on a student visa",
    "Minimum wage €13.90/hr (2026) → €14.60/hr (2027)",
    "After graduating: 18-month job-search permit; Blue Card ≈ €45,934 for recent graduates",
  ],
  paths: [
    { path: "Working student (Werkstudent) in AI/software", pay: "€15–22/hr", value: "Best: covers living costs and often leads to a full-time offer" },
    { path: "HiWi (student assistant) in a uni AI lab", pay: "€13–15/hr", value: "Easiest first job; usually English" },
    { path: "Odd jobs (warehouse, kitchen, retail)", pay: "Minimum wage", value: "Safety net only; saves nothing" },
  ],
};

export type Emjm = {
  name: string;
  full: string;
  status: "keep" | "add" | "maybe" | "drop";
  route: string;
  deadline: string;
  english: string;
  why: string;
  url?: string;
};

export const erasmus: Emjm[] = [
  { name: "DEAI", full: "Data Engineering & Artificial Intelligence", status: "keep", route: "ULB Brussels → UPC Barcelona → TU Wien / Padua / Lyon 1 → thesis", deadline: "11 Jan 2027, 12:00 GMT (refs 18 Jan)", english: "MOI accepted · PTE 59 · no Duolingo", why: "No GRE, no fee. Scored on CS credits, grades, work experience, cover letter and references. ~25 scholarships from ~3,000 applicants." },
  { name: "MAIA", full: "Medical Image Analysis", status: "add", route: "Girona (ES) · Bourgogne (FR) · Cassino (IT)", deadline: "Tentatively Nov 2026 – Feb 2027", english: "MOI accepted", why: "2027 scholarships confirmed. A direct match for your retinal-imaging final-year project.", url: "https://maiamaster.udg.edu/admission/faqs/" },
  { name: "IFRoS", full: "Intelligent Field Robotic Systems", status: "maybe", route: "Girona · Zagreb · ELTE Budapest", deadline: "Not posted", english: "MOI accepted", why: "Apply only if full 2027 scholarships are confirmed. Email them.", url: "https://www.ifrosmaster.org/admission/faqs/" },
  { name: "EMAI", full: "Artificial Intelligence (UPF Barcelona)", status: "drop", route: "UPF → Sapienza / Radboud / Ljubljana", deadline: "Self-funded windows only", english: "IELTS / TOEFL / Cambridge only", why: "No scholarships appear to be offered for 2027, and no MOI/PTE." },
  { name: "CoDaS", full: "Communications & Data Science", status: "drop", route: "Aalto-led consortium", deadline: "1 Dec 2026 – 5 Jan 2027", english: "MOI from Pakistan rejected · PTE 62", why: "Expects CGPA 3.60+ for Pakistan; communications-heavy." },
  { name: "EDISS / CYBERSURE", full: "Intelligent Software / Cybersecurity", status: "drop", route: "Nordic/EU consortia", deadline: "12 Jan / 4 Jan 2027", english: "IELTS/TOEFL only", why: "Great fits, but only possible if you take IELTS." },
];

export const erasmusRoadmap = [
  { when: "This week", what: "MOI letter + English transcripts; register on the DEAI portal; check FAST is in the list" },
  { when: "Late Oct", what: "Ask 3 referees (a publishing FAST professor counts most). Letters due 18 Jan." },
  { when: "Early Nov", what: "Email DEAI, MAIA and IFRoS; get experience letters; start the retinal-imaging arXiv write-up" },
  { when: "Nov", what: "Europass CV; fill the DEAI self-evaluation Excel exactly (altering it = exclusion); draft the cover letter" },
  { when: "1–15 Dec", what: "Submit DEAI early; post the arXiv preprint" },
  { when: "Dec – Jan", what: "Submit MAIA once the call opens; IFRoS only if funded" },
  { when: "11 Jan, 5 PM PKT", what: "Hard DEAI deadline" },
  { when: "Feb – Mar", what: "Results (reserve lists often move); keep the Germany applications going" },
  { when: "If selected", what: "Accept within ~2 weeks; the scholarship letter is your proof of funds; visa for Belgium (DEAI) or Spain (MAIA)" },
];

export const timeline = [
  { month: "Oct–Nov 2026", germany: "Request MOI letter, transcripts, course descriptions; start HEC/MOFA; CV + motivation letter; arXiv write-up; send emails", erasmus: "Register DEAI; ask referees; Europass CV; self-evaluation Excel" },
  { month: "Dec 2026", germany: "Map FAST courses against TU Darmstadt's equivalence table and Dortmund's criteria", erasmus: "Submit DEAI by 15 Dec; MAIA when the call opens" },
  { month: "Jan 2027", germany: "Re-check all deadlines; open uni-assist account; start Würzburg AI&XR + Frankfurt UAS", erasmus: "DEAI deadline 11 Jan; refs 18 Jan" },
  { month: "Feb 2027", germany: "Order VPDs (HPI, Würzburg AI); submit Würzburg AI&XR (~15 Mar)", erasmus: "Results start" },
  { month: "Mar 2027", germany: "Submit Frankfurt UAS (15 Apr) and TU Dortmund (opens 15 Mar)", erasmus: "Results / reserve lists" },
  { month: "Apr 2027", germany: "Submit Göttingen, HPI/Potsdam, Hildesheim, Passau (all open ~1 Apr)", erasmus: "If selected: accept + visa" },
  { month: "May 2027", germany: "Dortmund by 15 May, Passau by 31 May; FUND THE BLOCKED ACCOUNT + START THE VISA the day an offer arrives", erasmus: "Visa (Belgium / Spain)" },
  { month: "Jun 2027", germany: "HPI closes 1 Jun; TU Darmstadt opens 1 Jun (submit day one); apply for dorms", erasmus: "" },
  { month: "Jul 2027", germany: "15 Jul: Darmstadt, Würzburg AI, THI, Chemnitz; visa appointment", erasmus: "" },
  { month: "Aug 2027", germany: "Visa decision; book flight; or switch to April 2028", erasmus: "Travel" },
  { month: "Sep–Oct 2027", germany: "Travel; address registration; residence permit; start Werkstudent hunt", erasmus: "Programme starts" },
];

export const checklist = {
  "Documents": [
    "MOI letter (exclusively 100% English, signed + stamped)",
    "Degree + transcripts HEC attested (eDAS)",
    "MOFA apostille",
    "Official course descriptions / module handbook",
    "Experience letter: Imperium Dynamics",
    "Experience letter: SharkStack",
    "Europass CV",
    "Master motivation letter",
    "Reference: FAST professor (publishing)",
    "Reference: second FAST professor",
    "Reference: Imperium manager",
    "Passport valid to 2029+",
    "Retinal-imaging project on arXiv",
  ],
  "Emails": [
    "DEAI: MOI alone OK? FAST in the portal list?",
    "MAIA: exact 2027 deadline; PTE accepted?",
    "IFRoS: full scholarships for 2027?",
    "TU Dortmund: MOI via uni-assist? Does the statistics course count?",
    "HPI/Potsdam: is German A1 required?",
    "Frankfurt UAS: course descriptions + MOI for the 30-credit rule? Does work experience count?",
    "TU Darmstadt: pre-check the equivalence table?",
    "TU Chemnitz: MOI accepted as B2?",
    "RPTU: MOI accepted?",
  ],
  "Applications": [
    "DEAI (11 Jan)",
    "MAIA",
    "Würzburg AI & XR (~15 Mar)",
    "Frankfurt UAS (15 Apr)",
    "Göttingen (~15 Apr)",
    "TU Dortmund (by 15 May)",
    "Passau (31 May)",
    "HPI / Potsdam (1 Jun)",
    "Hildesheim (apply in April)",
    "TU Darmstadt (1 Jun – 15 Jul)",
  ],
  "Visa & money": [
    "Blocked account opened + funded",
    "Health insurance",
    "Consular Services Portal application (Karachi)",
    "Dorm applications (Studierendenwerk)",
    "Flight booked",
  ],
} as const;

export const reports = [
  { slug: "roadmap", file: "Masters abroad roadmap Pakistan.md", title: "Full roadmap & country research", desc: "The original deep-research report: country scorecard, scholarships, visas, Gulf benchmark." },
  { slug: "germany", file: "Germany masters plan.md", title: "Germany master's plan", desc: "Budget, shortlist, process, timeline and emails." },
  { slug: "erasmus", file: "Erasmus Mundus plan.md", title: "Erasmus Mundus plan", desc: "DEAI + MAIA roadmap, and why EMAI/CoDaS were dropped." },
];

// ---------------- Italy (general guide for a Pakistani CS/AI graduate) ----------------

export const italyDeadlines: Deadline[] = [
  { date: "2026-11-15", title: "Padova: Computer Eng. / Data Science", track: "Italy", note: "Published for 2027/28", verified: true },
  { date: "2026-12-01", title: "PoliMi CS & Engineering, 1st call (€50 fee)", track: "Italy", note: "Ask for the merit scholarship in this call", verified: true },
  { date: "2027-02-05", title: "Pisa: CS / Data Science (opens ~1 Dec)", track: "Italy", note: "Based on the 2026/27 pattern", verified: false },
  { date: "2027-02-13", title: "PoliTo 1st call (opens ~19 Dec)", track: "Italy", note: "Based on the 2026/27 pattern", verified: false },
  { date: "2027-02-25", title: "PoliMi 2nd call (€150 fee)", track: "Italy", note: "Published for 2027/28", verified: true },
  { date: "2027-04-17", title: "PoliTo 2nd call", track: "Italy", note: "Based on the 2026/27 pattern", verified: false },
  { date: "2027-05-15", title: "Sapienza (opens ~22 Dec)", track: "Italy", note: "Based on the 2026/27 pattern", verified: false },
  { date: "2027-07-22", title: "DSU calls close (Lazio ~22 Jul; others Aug–Sep)", track: "Italy", note: "Have apostilled family documents ready by June", verified: false },
  { date: "2027-10-31", title: "Italian student visa submission deadline (expected)", track: "Italy", note: "2026: 30 Nov. Earlier pre-enrolment = earlier slot", verified: false },
];

export const italy = {
  summary: [
    "Cheap to study: public universities charge income-based fees, and DSU winners usually pay no tuition",
    "The DSU grant is need-based, not GPA-based: up to ~€7,171/yr cash for off-site students, plus meals/housing and a tuition waiver",
    "Visa needs €10,179.85 (≈ PKR 32.6 lakh) in traceable funds, because the DSU result usually arrives after the visa",
    "Weak English-only job market outside Milan; junior tech pay ~€28–38k. Learn Italian (B1–B2) if you want to stay and work",
  ],
  money: [
    { label: "Visa proof of funds (2026/27, likely the same for 2027/28)", value: "€10,179.85/yr (€848/mo) ≈ PKR 32.6 lakh", verified: true },
    { label: "National DSU income caps", value: "ISEE ≤ €28,339.88 · ISPE ≤ €61,608.48 (some regions lower)", verified: true },
    { label: "Base DSU grant, off-site student", value: "€7,171.11/yr (+ meals/room; Padova up to €8,246)", verified: true },
    { label: "Year-1 cash outflow if DSU is won", value: "≈ €3,000–4,500 ≈ PKR 10–14 lakh", verified: false },
    { label: "Year-1 cost without DSU", value: "≈ €10–12k+ ≈ PKR 32–38 lakh", verified: false },
  ],
  universities: [
    { name: "Politecnico di Milano", programme: "MSc Computer Science & Engineering", deadline: "1 Dec 2026 (€50) · 25 Feb 2027 (€150)", english: "MOI accepted ✓ · IELTS 6.0 / TOEFL 78 / PTE 59", selection: "Strict minimum GPA by country; very competitive", money: "Fees income-based (up to ~€3,900); merit scholarships ~€5–10k (apply in the 1st call)", dsu: "PoliMi's own office (Lombardy)", city: "Milan: best job market in Italy", url: "https://www.polimi.it/en/prospective-students/how-to-apply/admission-to-laurea-magistrale/foreign-qualification/deadlines" },
    { name: "Politecnico di Torino", programme: "Computer Engineering · Data Science & Engineering", deadline: "~13 Feb · ~17 Apr 2027 (pattern)", english: "B2; MOI only for exempt countries (check Pakistan)", selection: "Committee review, no minimum GPA; GRE optional", money: "€50 fee; TOPoliTO scholarship €8,000/yr", dsu: "EDISU Piemonte", city: "Turin: moderate, cheaper living", url: "https://www.polito.it/en/education/applying-studying-graduating/admissions-and-enrolment/master-s-degree-programmes/applicants-with-a-non-italian-qualification" },
    { name: "Università di Padova", programme: "Computer Engineering · Data Science", deadline: "15 Nov 2026 ✓", english: "B2 (details to confirm)", selection: "Curricular fit", money: "Excellence scholarship ~€8,000 + fee waiver (unverified)", dsu: "ESU Padova: only 7% of first-year funds go to non-EU freshmen", city: "Padova: moderate", url: "https://www.unipd.it/en/ammissione-studenti-internazionali" },
    { name: "Sapienza Rome", programme: "Eng. in Computer Science · Data Science · AI & Robotics", deadline: "~22 Dec – 15 May (pattern)", english: "B2 (details to confirm)", selection: "Pre-selection; AI & Robotics is hardest", money: "€30 fee; tuition €300–1,500/yr by country", dsu: "DiSCo Lazio: €6,571 + 2 free meals/day", city: "Rome: moderate", url: "https://www.uniroma1.it/en/admissions" },
    { name: "Università di Pisa", programme: "Computer Science · Data Science & Business Informatics", deadline: "~1 Dec – 5 Feb (pattern)", english: "To confirm", selection: "To confirm", money: "Income-based", dsu: "DSU Toscana (2 free meals/day)", city: "Pisa: small; Florence nearby", url: "https://www.unipi.it/en/education/registration/enrolment-and-registration/enrolment-for-international-students/masters-degree-held-in-english/" },
    { name: "Università di Trento", programme: "Computer Science · AI Systems", deadline: "~Feb/Mar 2027 (unverified)", english: "To confirm", selection: "Ranked; ~10 non-EU seats", money: "To confirm", dsu: "Opera Universitaria (€1,445–8,605, ICEF-based)", city: "Trento: small, high quality of life", url: "https://www.unitn.it/en" },
    { name: "Università di Bologna", programme: "MSc Artificial Intelligence", deadline: "~Jan–Apr (unverified)", english: "MOI NOT accepted; B2 certificate (IELTS 5.5–6.5 / PTE 51–65)", selection: "Average ≥ 25.5/30 (~85%), so hard below ~3.4 CGPA", money: "Unibo Action grants have ended", dsu: "ER.GO (ISEE cap €25,000)", city: "Bologna: moderate", url: "https://corsi.unibo.it/2cycle/artificial-intelligence/how-to-enrol" },
  ],
  process: [
    { step: "Apply to universities", when: "Oct 2026 – May 2027", items: ["Each university has its own portal and calls", "Apply to 4–6; PoliMi's 1st call (1 Dec) is the cheapest and comes with scholarships", "English: IELTS/PTE is safest; PoliMi accepts an MOI letter", "No GRE needed"] },
    { step: "Degree recognition (CIMEA)", when: "Start by Jan 2027", items: ["CIMEA statement of comparability: €150, 60 working days (30 days for +€100)", "Most universities accept it instead of a Dichiarazione di Valore"] },
    { step: "Universitaly pre-enrolment", when: "Right after admission", items: ["Pre-enrol on universitaly.it; the university must validate it", "The embassy assigns BLS-Intiana appointments by validation date, so earlier is better", "You must apply at the post covering where you live"] },
    { step: "Visa", when: "Summer 2027 (deadline ~31 Oct)", items: ["€10,179.85 in traceable funds (no cash; family sponsor up to 4th degree OK)", "The embassy warns about forged bank statements and fake agents", "Accommodation proof + health insurance"] },
    { step: "DSU grant", when: "Jun – Sep 2027", items: ["ISEE parificato via a CAF: family composition, every member's income, property (m²), bank balances at 31 Dec, rent", "MOFA apostille accepted since 18 Nov 2024; translate into Italian (some DSU offices still ask for embassy-issued documents, so confirm)", "Apply on the regional DSU portal; payment usually starts Dec–Jan", "Year 2 needs 20–30 credits by 10 Aug of year 1"] },
    { step: "Arrival", when: "Sep 2027", items: ["Apply for the residence permit (permesso di soggiorno) soon after arrival", "Register a 10+ month lease (needed for off-site DSU status)"] },
  ],
  living: [
    ["Milan", "€1,100–1,500"],
    ["Rome", "€950–1,300"],
    ["Bologna", "€900–1,200"],
    ["Turin, Padova, Pisa, Trento", "€750–1,050"],
  ],
  work: [
    "Students can work about 20 hrs/week (1,040 hrs/yr)",
    "After graduating: a 9–12 month job-search permit (not renewable); request it before the study permit expires",
    "EU Blue Card threshold ≈ €36,300/yr (unverified); many junior offers (€28–38k) are below it",
    "English-only tech jobs exist mainly in Milan (multinationals, fintech). Italian B1–B2 helps a lot",
  ],
};
