# Flutter Developer Portfolio

Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 diye banano portfolio website.

## Run korte

```bash
npm install
npm run dev
```

Tারপর browser e `http://localhost:3000` open koro.

## Folder structure

```
src/
├── app/
│   ├── layout.tsx     ← Root layout (fonts, Navbar, Footer sob page e thake)
│   ├── page.tsx        ← Homepage - sob section joda ekhane
│   └── globals.css     ← Design tokens (color, font) + Tailwind import
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── PhoneMockup.tsx ← Reusable phone-frame component (Projects e use hoy)
│   └── sections/        ← Prottekta homepage section (Hero, About, Skills, etc.)
└── data/                 ← Static content (projects, skills, experience, nav links)
```

`data/` folder theke content edit korle component file er bhitor dhukte hoy na -
eta dore-hogar project er `constants/` folder er moto pattern.

## Nijer content bosano (TODO)

- `src/data/projects.ts` — nijer real app gulo add koro
- `src/data/experience.ts` — real work history
- `src/data/skills.ts` — real skill list
- `src/app/layout.tsx` — metadata (title/description) e nijer naam
- `public/resume.pdf` — ei file ta ekta placeholder, nijer real resume diye replace koro

## Build & clean

```bash
npm run build   # production build (.next folder toiri hoy)
npm run clean   # .next ar out folder delete kore (Flutter er "flutter clean" er moto)
```

Zip kore share/deploy korar age always `npm run clean` chalao, na hole
`.next` cache ar `node_modules` er jonno zip file onek boro hoye jabe.
