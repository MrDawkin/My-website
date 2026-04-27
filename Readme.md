# Dawid Kina — Portfolio

Personal portfolio website for Dawid Kina, Junior DevOps Engineer at Comarch.

Live: https://mrdawkin.github.io/My-website

## Tech stack

- [Astro](https://astro.build) — static site framework
- [Tailwind CSS](https://tailwindcss.com) — styling
- TypeScript — data files and component logic
- GitHub Actions — CI/CD deploy to GitHub Pages

## Development

```bash
npm install
npm run dev      # http://localhost:4321/My-website
npm run build    # production build → dist/
npm run preview  # preview build locally
```

## Deploy

Every push to `main` triggers the GitHub Actions workflow which builds the site and deploys to GitHub Pages.

## Structure

```
src/
  components/   # Astro components (Hero, About, Stack, Experience, ...)
  data/         # TypeScript data files (experience, education, projects, stack)
  layouts/      # HTML shell with meta, OG, JSON-LD
  styles/       # global.css — Tailwind base + custom utilities
public/         # static assets (og.png, favicon, manifest, sitemap)
```
