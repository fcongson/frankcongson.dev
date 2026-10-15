# frankcongson.dev

FrankCongson.dev built with Vue 3 + TypeScript + Vite.

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
