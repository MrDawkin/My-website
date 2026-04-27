# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Project Overview

Static personal portfolio website for Dawid Kina (MrDawkin), a Junior DevOps Engineer at Comarch.
Built with **Astro + Tailwind CSS + TypeScript**. Deployed via GitHub Actions to GitHub Pages.

Live site: https://mrdawkin.github.io/My-website
Repo: https://github.com/MrDawkin/My-website

## Development

```bash
npm run dev      # dev server at http://localhost:4321/My-website
npm run build    # production build → dist/
npm run preview  # preview the build locally

git push origin main  # triggers GitHub Actions → auto-deploy to GitHub Pages
```

## Architecture

Single-page Astro site. All sections are Astro components, data lives in TypeScript files.

### File structure

```
src/
  pages/
    index.astro          — page entry point, imports all components
  layouts/
    Layout.astro         — HTML shell: meta, OG, JSON-LD, fonts, global scripts
  components/
    Nav.astro            — fixed navbar with scroll-active link highlighting
    Hero.astro           — name, title, keywords, CTA buttons, profile photo
    About.astro          — bio paragraphs + facts table
    Stack.astro          — tech stack grid with level indicators
    Experience.astro     — timeline (main) + additional experience section
    Education.astro      — education cards
    Projects.astro       — project cards + placeholder slots
    Terminal.astro       — interactive terminal easter egg
    Contact.astro        — email, GitHub, LinkedIn links + footer
  data/
    experience.ts        — ExperienceEntry[] — work history
    education.ts         — EducationEntry[] — education history
    projects.ts          — Project[] — projects (supports placeholder?: boolean)
    stack.ts             — StackCategory[] with StackLevel (daily/proficient/learning)
  styles/
    global.css           — Tailwind base + custom utilities (dot-grid, gradient-text,
                           reveal animations, mobile nav, terminal scrollbar)
  assets/
    images/profile.jpg   — profile photo (optimized by Astro Image)
public/
  favicon.svg            — >_ monogram on dark background
  manifest.webmanifest   — PWA manifest
  robots.txt             — allow all, points to sitemap
  sitemap.xml            — single-URL sitemap
  og.png                 — Open Graph image 1200×630 (add when ready)
  cv.pdf                 — CV download (add when ready)
.github/workflows/
  deploy.yml             — build + deploy to GitHub Pages on push to main
```

### Section numbering

01 / about — 02 / stack — 03 / experience — 04 / education — 05 / projects — 06 / terminal — 07 / contact

### Key design tokens (tailwind.config)

`brand-bg` (#080C14), `brand-surface`, `brand-card`, `brand-border`, `brand-hover`

### Scroll reveal

Elements with class `.reveal` animate in via IntersectionObserver (Layout.astro).
Groups of cards use `.reveal-group` for staggered entry.

### Interactive Terminal

Located in `Terminal.astro`. Client-side fake shell — no real execution.
Commands: `help whoami about experience education projects stack contact clear`
Tab completion: partial match → autocomplete or show options.
History navigation: ArrowUp / ArrowDown.
To add a command: add to `COMMANDS` array + add `cmdXxx()` function + add case in `run()`.

### GitHub Actions deploy

`.github/workflows/deploy.yml` — builds with Node 20, uploads `dist/` as Pages artifact.
GitHub Pages source must be set to **"GitHub Actions"** in repo settings (not "Deploy from a branch").

## Open items (as of 2026-04-23)

- `public/og.png` — screenshot of live site at 1200×630 px
- `public/cv.pdf` — CV file + set `showCv: true` in `Contact.astro`
- New email address — update in `Contact.astro` (const email) and `Terminal.astro` (CONTACT_TEXT)
- Replace 2 placeholder projects in `projects.ts` with real DevOps projects
