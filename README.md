# Shiv Rekha Gurukul — Frontend Website

A responsive React + Vite frontend for a non-governmental educational initiative.

## Requirements
- Node.js 18+ (recommended)
- npm

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Project structure
```text
shiv-rekha-gurukul/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── PageHero.jsx
│   │   ├── SectionHeading.jsx
│   │   └── ScrollToTop.jsx
│   ├── data/
│   │   └── siteData.js
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   ├── Gallery.jsx
│   │   ├── GetInvolved.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles/
│       └── global.css
├── index.html
├── package.json
└── vite.config.js
```

## Important notes
- This is a **frontend-only** project. Contact, volunteer and donation actions are visual/demo interactions; no data is sent or stored.
- Replace sample contact details, images, statistics and organization information with verified Shiv Rekha Gurukul information before publishing.
- Images currently load from Unsplash over the internet. For production, use photos owned by or authorized for the organization and store them locally in `src/assets/`.
- No donation payment gateway or backend is included.
