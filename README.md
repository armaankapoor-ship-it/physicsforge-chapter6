# physicsforge-chapter6 - Electromagnetic Induction Visual Notes

A premium-style, zero-cost visual notes website for **NCERT Class 12 Physics Chapter 6: Electromagnetic Induction**.

Built for CBSE Class 12 Boards, NEET Physics, JEE Main Physics and JEE Advanced foundation-level conceptual understanding.

## Free Tools Used

- React + Vite
- Tailwind CSS
- lucide-react icons
- Local JSON data
- SVG-based diagrams
- Frontend-only simulations
- Browser print / Save as PDF

No paid APIs, backend, paid templates, paid assets, premium stock images, subscription tools or copyrighted coaching material are used.

## What Is Included

- 30-section chapter notebook
- Formula sheet with units, dimensions, examples and traps
- 12 derivations with board-exam writing style
- 30 original SVG visual plans and diagrams
- 8 interactive simulations
- 12 solved examples
- 380-question local JSON practice bank
- One-page printable revision sheet
- Final high-yield dashboard

## Run Locally

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Deploy for Free

Create a GitHub repository named `physicsforge-chapter6`, push this project, and use GitHub Pages from the `gh-pages` branch.

For a repository path build:

```bash
VITE_BASE_PATH=/physicsforge-chapter6/ pnpm build
```

The included GitHub Actions workflow builds and publishes the `dist` folder to `gh-pages` automatically on pushes to `main`.

## Edit Notes and Questions

- `src/data/chapterSections.js`
- `src/data/formulas.js`
- `src/data/derivations.js`
- `src/data/visualPlans.js`
- `src/data/revisionData.js`
- `src/data/questionBank.json`
- `src/data/solvedExamples.js`

## Add More Chapters Later

Copy this project, rename `siteConfig.js`, update the data files, and keep the same reusable React components.
