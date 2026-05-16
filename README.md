# Helder Lucheses — Personal Landing Page

A production-ready bilingual (PT / EN) personal landing page for **Helder Lucheses Gonçalves da Costa** — Information Systems Engineer, Founder of Planeta Consciente, Founder & Executive Director of Nervi, and Board Member of the Rotary Club of Luanda.

Built with **React + Vite + Tailwind CSS**, ready for deployment on **AWS Amplify**.

---

## ✦ Design concept

> *Editorial Statesman — Financial Times meets head-of-state dossier.*

- Palette: oxblood `#8B1A1A`, wine, antique gold `#C9A961`, warm black, ivory cream
- Typography: **Fraunces** (display serif) + **Manrope** (body sans-serif)
- Numbered sections (01–11), gold rule dividers, corner brackets, formal numerals
- Alternating dark / cream sections for editorial rhythm
- Executive premium aesthetic with a subtle political character — never campaign propaganda

---

## ✦ Quick start — local development

Requires Node.js 18+.

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

To build for production:

```bash
npm run build
npm run preview   # local preview of the production build
```

---

## ✦ Drop-in placeholder files

Place the following files in the `/public` directory before deploying:

| File                          | Purpose                       | Recommended dimensions / format |
| ----------------------------- | ----------------------------- | ------------------------------- |
| `/public/profile.jpg`         | Hero portrait                 | 800 × 1000 px (4:5 portrait), JPG |
| `/public/hero-bg.jpg`         | Hero background image         | 1920 × 1080 px or larger, JPG  |
| `/public/Helder-Lucheses-CV.pdf` | Downloadable CV            | PDF                             |

The Hero gracefully falls back to an **HL monogram** if `profile.jpg` is missing, so the site never breaks during development.

---

## ✦ Editing content

All copy lives in **one file**:

```
src/data/translations.js
```

Each entry is shaped:

```js
key: { pt: 'Portuguese text', en: 'English text' }
```

To change any text on the page, edit only this file — no component changes required.

All external URLs live in:

```
src/data/links.js
```

To replace a social media URL, the CV path, or contact email, edit only this file.

---

## ✦ Bilingual toggle

- Default language: **Portuguese**
- A `PT · EN` toggle sits in the header (mobile and desktop)
- Language preference is persisted in `localStorage` (key: `hl-lang`)
- Powered by a lightweight React Context (`src/contexts/LanguageContext.jsx`) — no external i18n library

---

## ✦ Deploy to AWS Amplify

### Option A — Connect a Git repository (recommended)

1. Push this project to a Git provider (GitHub, GitLab, Bitbucket, CodeCommit).
2. Open the **AWS Amplify Console** → *Create new app* → *Host web app*.
3. Connect your repository and branch.
4. Amplify auto-detects the included **`amplify.yml`** build spec:
   ```yaml
   preBuild: npm ci
   build:    npm run build
   artifacts: dist
   ```
5. Confirm and deploy. Subsequent pushes auto-deploy.

### Option B — Manual upload (drag & drop)

1. Locally run `npm run build` to produce the `dist/` folder.
2. Zip the **contents** of `dist/` (not the folder itself).
3. In Amplify Console → *Host web app* → *Deploy without Git provider* → upload the zip.

### Custom domain

In the Amplify Console: *Domain management* → *Add domain* → enter your domain (e.g. `lucheses.com`) and follow the verification steps. SSL is provisioned automatically.

---

## ✦ Project structure

```
helder-lucheses-landing/
├── public/
│   ├── profile.jpg            ← drop your portrait here
│   ├── hero-bg.jpg            ← drop your hero background here
│   ├── Helder-Lucheses-CV.pdf ← drop your CV here
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── ProfessionalProfile.jsx
│   │   ├── AreasOfWork.jsx
│   │   ├── FeaturedWork.jsx      ← 3 editorial cards: PC, CAP 412, Nervi
│   │   ├── Projects.jsx          ← full hierarchy (6 items)
│   │   ├── Timeline.jsx
│   │   ├── Highlights.jsx
│   │   ├── Vision.jsx
│   │   ├── Press.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── Icon.jsx
│   ├── contexts/
│   │   └── LanguageContext.jsx
│   ├── data/
│   │   ├── translations.js   ← all text content
│   │   └── links.js          ← all external URLs
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── amplify.yml
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

---

## ✦ Stack rationale

| Choice         | Why it fits                                                         |
| -------------- | ------------------------------------------------------------------- |
| **Vite**       | Sub-second HMR, tiny production bundle, zero config needed for Amplify. |
| **React 18**   | Industry-standard, easy for any developer to maintain.              |
| **Tailwind**   | Utility-first allows the custom oxblood/gold palette without a CSS framework fighting the design. |
| **No i18n lib**| A 30-line Context is enough for two languages — keeps the bundle lean. |
| **AWS Amplify**| Static hosting, free SSL, atomic deploys, custom domains.           |

---

## ✦ Content guidelines (when editing)

- Use **"Helder Lucheses"** as the public-facing name.
- Use **"Helder Lucheses Gonçalves da Costa"** only in About and Footer.
- Lead with engineer / founder / entrepreneur — politics is secondary.
- MPLA / CAP 412 framed as *institutional communication*, **not** campaign material.
- MWF / YALI framed as *alumnus / credibility marker*, **not** an active project.
- Unitel appears only in the Professional Profile section, not in the project hierarchy.

---

© Helder Lucheses Gonçalves da Costa
