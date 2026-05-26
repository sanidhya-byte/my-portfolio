# Next.js 14 Modern Starter

A production-ready Next.js 14 starter with App Router, TypeScript, Tailwind CSS, and ESLint.

## Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14 | Framework (App Router) |
| React | 18 | UI library |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3 | Utility-first styling |
| ESLint | 8 | Linting |
| PostCSS | 8 | CSS processing |

## Getting Started

```bash
npm install
npm run dev        # dev server → http://localhost:3000
npm run build      # production build
npm run lint       # run ESLint
```

## Project Structure

```
my-app/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   └── dashboard/
│       └── page.tsx        # Dashboard demo
├── components/
│   └── Card.tsx            # Reusable Card component
├── tailwind.config.ts      # Tailwind + design tokens
├── tsconfig.json           # TypeScript strict config
└── .eslintrc.json          # ESLint rules
```

## Design Tokens

CSS variables are defined in `globals.css` and mapped to Tailwind:

- `--accent` — primary purple `#7c6aff`
- `--bg` — dark base `#0c0c0f`
- `--surface` / `--surface-2` — elevated layers
- `--border` — subtle dividers
- `--serif` — DM Serif Display
- `--mono` — DM Mono

## Extending

- **New route**: add `app/my-route/page.tsx`
- **New component**: add `components/MyComponent.tsx`
- **API route**: add `app/api/my-endpoint/route.ts`
- **Middleware**: add `middleware.ts` at the root
