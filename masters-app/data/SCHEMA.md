# JSON schemas for research data (all files are UTF-8 JSON arrays)

## Applicant profile (use this to judge "fit")
- Pakistani citizen living in Karachi (Sindh). 4-year BS Computer Science, FAST-NUCES Karachi, CGPA 3.41/4 (graduated 2025/2026).
- About 1.5–2 years of work: AI Software Engineer I at Imperium Dynamics (LLMs, RAG, MCP), earlier SharkStack and internships. Final-year project: multimodal deep learning on retinal images.
- Budget: PKR 35–40 lakh (≈ €11–12.5k) can be shown as a blocked account / proof of funds, plus PKR 10–15 lakh (≈ €3–4.7k) for other costs. That's ≈ €14–17k in total. €1 = PKR 320, USD 1 = PKR 278.
- Wants a September/October 2027 start. Goal: earn abroad for a few years, then return to Pakistan, so post-study work rights and salaries matter, and return-home bonds are a negative.
- Prefers English-only. Does NOT want to take IELTS (prefers an English-medium-of-instruction "MOI" letter from FAST). No GRE. Still list test-requiring options, but flag them clearly.
- Today is 2026-10-18.

## Scholarship (files: scholarships-*.json)
```json
{
  "id": "kebab-case-unique",
  "name": "Programme or scholarship name",
  "country": "Country where you study (or 'Multiple')",
  "region": "Europe | Gulf | East Asia | South/Southeast Asia | North America | Oceania | Global",
  "host": "Who funds or runs it",
  "coverage": "What is covered: tuition / stipend / travel / insurance",
  "amount": "Amounts with currency, e.g. '€1,400/month + tuition'",
  "level": "Master's",
  "fields": "Eligible fields relevant to CS/AI",
  "eligibility": "Key eligibility rules (nationality, GPA, work experience, age)",
  "english": "Accepted English proof; say explicitly whether an MOI letter is accepted",
  "gre": "Required / Optional / Not required / Unknown",
  "deadline": "Human-readable deadline for a 2027 start (or last cycle's, labelled)",
  "deadlineISO": "YYYY-MM-DD or null",
  "status": "open | upcoming | closed | unknown",
  "bond": "Any return-home or service obligation, or 'None found'",
  "fit": "high | medium | low",
  "fitReason": "One or two sentences on this applicant specifically",
  "steps": ["Exact application step 1", "step 2", "..."],
  "url": "Official URL",
  "verified": true
}
```

## Guide (files: guide-*.json): exact step-by-step processes
```json
{
  "id": "germany",
  "title": "Germany: exact steps",
  "summary": "2–3 sentences",
  "sections": [
    {
      "heading": "1. Documents",
      "when": "Oct–Dec 2026",
      "steps": [
        { "title": "HEC degree attestation", "detail": ["sub-step", "sub-step"], "cost": "Rs 3,000/document", "time": "1–3 weeks", "url": "https://...", "verified": true }
      ]
    }
  ],
  "tips": ["practical tip", "..."],
  "pitfalls": ["common mistake", "..."]
}
```

## Country option (files: countries-*.json)
```json
{
  "id": "austria",
  "country": "Austria",
  "region": "Europe",
  "route": "e.g. TU Wien MSc (English), public university",
  "tuition": "e.g. €726.72/semester for non-EU",
  "living": "e.g. €1,000–1,200/month in Vienna",
  "visaFunds": "Proof of funds needed for the visa",
  "english": "English proof; MOI accepted?",
  "postStudy": "Post-study job-search permit and work route",
  "jobsEnglishOnly": 3,
  "scholarships": ["names of relevant scholarships"],
  "fitsBudget": "yes | borderline | no",
  "fit": "high | medium | low",
  "fitReason": "Specific to this applicant",
  "keyDeadlines": "Typical deadlines for a 2027 start",
  "programmes": ["Specific English CS/AI master's programmes"],
  "url": "Official URL",
  "verified": true
}
```

Rules: mark "verified": false whenever a fact is not confirmed on an official page. Prefer official sources. Use valid JSON (no comments, no trailing commas). After writing a file, validate it with:
`node -e "JSON.parse(require('fs').readFileSync(process.argv[1],'utf8'));console.log('ok')" <file>`
