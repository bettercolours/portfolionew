# Sumeetha Suppiah — Portfolio (Final)

## Quick Start
```bash
npm install
npm run dev
# Open http://localhost:5173
```

## Deploy to Vercel
1. Push to GitHub
2. Import at vercel.com → auto-detects Vite → Deploy
   OR: `npm install -g vercel && vercel`

## Deploy to Netlify
1. Drag this folder to netlify.com
   OR connect GitHub repo — netlify.toml handles the rest

## Public Files (in /public)
- Sumeetha_Suppiah_Resume.pdf   ← Resume (downloadable)
- Techno_branding.pdf           ← Project 04 case study
- Case_study.pdf                ← Project 03 case study
- UX_Research_GoJek.pdf         ← Project 05 (on request for now)
- your-photo.jpg                ← Hero background photo

## Enabling Case Studies on Request
When ready to show 01, 02 or 05 publicly, open src/App.jsx and change:
  pdf: null  →  pdf: "/filename.pdf"

## Case Study Status
- Project 01 → Request Access (pdf: null)
- Project 02 → Request Access (pdf: null)
- Project 03 → Live PDF popover
- Project 04 → Live PDF popover
- Project 05 → Request Access (pdf: null — change to "/UX_Research_GoJek.pdf" when ready)
