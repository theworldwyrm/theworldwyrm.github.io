# Anthony Otoide

- **Engineering portfolio:** https://theworldwyrm.github.io/
- **Photography:** https://theworldwyrm.github.io/photography/

The engineering portfolio is a Vite + React + Tailwind app (`src/`). The photography site is plain HTML/CSS/JS kept in `public/photography/`. Vite copies it unchanged into the build, so it's served at `/photography/`.

## Run locally

```bash
npm install
npm run dev
```

## Deploy

Every push to `main` builds both sites and publishes them through `.github/workflows/deploy.yml`.
This needs **Settings → Pages → Build and deployment → Source** set to **GitHub Actions** (one-time setup).

## Editing

- Portfolio content is in the arrays at the top of `src/App.tsx`.
- To add photos, put them in `public/photography/photos/` and list them in `public/photography/photos.js`.
