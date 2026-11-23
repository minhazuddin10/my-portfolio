# Minhaz Uddin: Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Features
- Theme switcher (5 colors, saved in the browser) in the navbar
- Neutrino particle field (drifting particles, cursor repel, fast streaks) + orbiting neutrinos around the hero photo
- Clickable cards everywhere: details open in a dialog (Esc or outside click closes)
- Research page (team, supervisor, journey timeline, photos), flip-card certificates, events, achievements, YouTube, NeutrinoByte link

## Where to change things

| What | Where |
| --- | --- |
| All text, links, images | `src/data/portfolio.ts` |
| Email / CV | `profile` in `src/data/portfolio.ts`, CV file at `public/Minhaz_Uddin_CV.pdf` |
| YouTube channels | `youtubeChannels` in `src/data/portfolio.ts` (one card per object) |
| Sliding tech icons | rows in `src/components/sections/TechMarquee.tsx`, icons in `ui/skillIcons.ts` |
| Add a section | create `src/components/sections/X.tsx`, add one line to `src/config/sections.tsx` |
| Add a certificate / achievement / event / video | add an object to its array in `src/data/portfolio.ts` |
| Theme colors | `src/app/globals.css` (variables) and `src/config/themes.ts` |
| Glass / button styles | `src/app/globals.css` |
| Skill icons | `iconMap` in `src/components/sections/Skills.tsx` |

## Images to add (missing photos are hidden in galleries, covers show a soft placeholder)
```
public/images/research/defense.jpg                  final defense photo
public/images/research/paper-acceptance.jpg        acceptance post image
public/images/research/conference-certificate.jpg   iCONEECT certificate
public/images/research/with-supervisor-1.jpg        photos with sir (add more in data file)
public/images/events/it-fest-volunteer-certificate.jpg
public/images/certificates/nvidia-ai-for-all.jpg
public/images/certificates/kaggle-python.jpg
public/images/achievements/thesis-black-book.jpg
```

## Structure
```
src/
  app/           layout, page, global styles
  config/        sections.tsx (registry), themes.ts
  components/
    layout/      Navbar, Footer
    sections/    Hero, About, Company, Research, Achievements, Certificates, Events,
                 Skills, Experience, Projects, Education, Videos, Contact
    ui/          Section, Modal, DetailModal, TiltCard, Reveal, SmartImage,
                 OrbitRing, NeutrinoField, AnimatedBackground, ThemeSwitcher
    providers/   ThemeProvider
  data/          portfolio.ts (content)
  hooks/         useActiveSection
  types/         shared interfaces
```

## Backend later
The contact form opens the visitor's mail app for now. Later, add `src/app/api/contact/route.ts`
and make `handleSubmit` in `Contact.tsx` call `fetch("/api/contact")`.
