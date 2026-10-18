# Masters Abroad Plan (local app)

A readable version of the master's research in `../reports/` and `../research_notes/`.

## Run it

```bash
cd masters-app
npm install        # first time only
npm run build
npx next start -p 3123
```

Then open http://localhost:3123. (Port 3000 is used by another app on this machine.)

While editing, use `npx next dev -p 3123` instead, so changes show up live.

## Where things live

- `lib/data.ts`: all structured findings (deadlines, universities, Erasmus programmes, budget, timeline, checklist). Edit this to update the pages.
- `app/reports/[slug]`: renders the full markdown reports straight from `../reports/*.md`.
- The checklist saves ticks in your browser (localStorage).
