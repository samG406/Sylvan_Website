# Sylvan — Marketing Website

Public landing page for **Sylvan**: standardized private real estate income structures aimed at RIAs. The page explains the “structure vs. asset” model, committee-focused benefits, strategy cards (Core Income, Offset Income, DST Access), capital stack positioning, and platform / regulatory disclosures.

## Tech stack

- **React** (Vite)
- **Plain CSS** — layout, theme, animations (`src/App.css`)
- **lucide-react** — icons

## Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** (comes with Node)

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Local dev server + HMR   |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint               |

## Project layout

| Path            | Role                                      |
| --------------- | ----------------------------------------- |
| `src/App.jsx`   | Page content and structure                |
| `src/App.css`   | All styling (no Tailwind)                 |
| `src/main.jsx`  | App entry                                 |
| `src/index.css` | Global reset / base                       |
| `index.html`    | Document shell + page title               |

## Repository

Remote: [github.com/samG406/Sylvan_Website](https://github.com/samG406/Sylvan_Website)
