# Dev Portfolio — React + Tailwind CSS

A single-page developer portfolio (GitHub-profile-site style) built with React, JavaScript, HTML, CSS and Tailwind CSS.

## Edit your content

Open `src/App.jsx` and edit the `PROFILE`, `SKILLS`, and `PROJECTS` objects near the top of the file. Everything on the page is driven from those three.

## Run locally

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to GitHub Pages

1. Install the deploy dependency (already in `devDependencies`): `gh-pages`.
2. In `vite.config.js` (create it if missing) set `base: '/your-repo-name/'`:

   ```js
   import { defineConfig } from "vite";
   import react from "@vitejs/plugin-react";

   export default defineConfig({
     plugins: [react()],
     base: "/your-repo-name/",
   });
   ```

3. Push this project to a GitHub repo, then run:

   ```bash
   npm run deploy
   ```

   This builds the site and pushes `dist/` to a `gh-pages` branch. Then enable GitHub Pages for that branch in your repo's Settings → Pages.

   **Special case:** if this repo is named `yourusername.github.io`, set `base: '/'` instead and your site will be live at `https://yourusername.github.io`.

## Stack

- React 18
- Tailwind CSS 3
- Vite (build tool / dev server)
