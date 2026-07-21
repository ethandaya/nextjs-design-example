# Next.js design example

A deliberately small [Next.js](https://nextjs.org) App Router application for
demos, integration tests, and UI tooling experiments.

The long-lived design-adjustment pull request changes one positive numeric CSS
value and one six-digit hex color. That keeps the review surface predictable for
automated tools without depending on a third-party repository.

## Run locally

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Validate the production path with `pnpm build && pnpm start`.
