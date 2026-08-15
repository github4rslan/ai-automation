# Arslan Faisal, AI Automation Portfolio

A modern, animated single page portfolio focused on AI automation work. Built with
Vite, React, TypeScript, Tailwind CSS and Framer Motion.

## Highlights

- Clean, warm, editorial aesthetic: cream base, a single orange accent, black
  headings, big rounded cards, pill buttons, and a dark floating nav pill. No gradients.
- Smooth scroll reveal animations, an animated automation pipeline in the hero,
  a scroll progress bar, an active section nav pill and a filterable project grid.
- Fully responsive and reduced motion aware.
- All content lives in one file: `src/data/site.ts`.

## Change the colors

The palette lives in `tailwind.config.js` under `theme.extend.colors`
(`cream`, `brand` for the orange, `ink` for text, `night` for the dark cards).
Base background and text are also mirrored in `src/index.css` on `body`.

## Run locally

```bash
npm install
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build into dist/
npm run preview   # preview the production build
```

## Edit the content

Open `src/data/site.ts`. Everything the site shows is there:

- `profile` : your name, role, intro, about paragraphs, stats and links.
- `skillGroups` : the skills cards.
- `projects` : the work grid. To add a project, copy one object in the array and
  edit it. Fields:
  - `name`, `blurb`, `highlights` (array of lines), `tech` (array of tags)
  - `category` : `"Automation"`, `"AI SaaS"` or `"Web App"` (drives the filter tabs)
  - `featured` : `true` to pin it to the top and show a Featured badge
  - `liveUrl` and `codeUrl` : optional, render the Live and Code buttons
  - `icon` : any icon imported from `lucide-react` at the top of the file
- `experience` and `education` : the timeline section.

No other file needs touching to update text or add projects.

## Deploy to Vercel

**Option A, dashboard (easiest):**

1. Push this folder to a new GitHub repo.
2. On vercel.com, New Project, import that repo.
3. Vercel auto detects Vite. Framework `Vite`, build `npm run build`, output `dist`.
4. Deploy. Done.

**Option B, CLI:**

```bash
npm i -g vercel
vercel          # first run links/creates the project
vercel --prod   # production deploy
```

## Notes

- `vercel.json` sets the framework and a SPA rewrite so deep links resolve.
- To add a downloadable CV button, host your PDF and set `profile.links.resume`
  in `src/data/site.ts` (then add a button that reads it, if you want one in the nav).
