# frankcongson.dev

My career journey as a technical lead working on design systems, from full stack roles to design systems and leading engineers. Designed and built by me with Vue 3, TypeScript, and Vite, and themed with [Lagom Tokens](https://github.com/fcongson/lagom-tokens).

Live at [frankcongson.dev](https://frankcongson.dev). See also [frankcongson.com](https://frankcongson.com) for my blog.

## Stack

- [Vue 3](https://vuejs.org) with TypeScript, built with [Vite](https://vite.dev)
- Design decisions come from [Lagom Tokens](https://github.com/fcongson/lagom-tokens), my DTCG design tokens package, shared with my other sites
- Type-checked with `vue-tsc`, linted with ESLint, and formatted with Prettier
- Managed with pnpm on Node 22.12 or newer
- Deployed to Netlify

## Setup

Requires Node 22.12+ (see `.nvmrc`) and pnpm (`corepack enable`).

`@fcongson/lagom-tokens` is published to GitHub Packages. pnpm ignores
environment variables in a repository `.npmrc`, so add your token to your
user-level `~/.npmrc`:

```
//npm.pkg.github.com/:_authToken=<token with read:packages>
```

## Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `pnpm start`      | Start the dev server            |
| `pnpm build`      | Type-check and build to `dist/` |
| `pnpm serve`      | Preview the production build    |
| `pnpm lint`       | Lint with ESLint                |
| `pnpm format`     | Format with Prettier            |
| `pnpm type-check` | Type-check with vue-tsc         |
