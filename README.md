# OpenCut

A standalone, browser-based video editor built with Next.js. Project media and
editing state stay in browser storage; no desktop or Rust runtime is required.

## Local development

Requirements: Node.js and pnpm.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open <http://localhost:3000>. The optional Freesound and Upstash variables in
`.env.local` enable online sound search and distributed API rate limiting.

## Commands

```bash
pnpm dev          # local Next.js development server
pnpm build        # production Next.js build
pnpm build:worker # Cloudflare Worker build
pnpm test         # test suite
pnpm lint         # Biome checks
pnpm typecheck    # TypeScript checks
pnpm preview      # build and preview the Cloudflare Worker
pnpm deploy       # build and deploy the Cloudflare Worker
```

Before deploying, make sure the `opencut` Worker name is available in your
Cloudflare account, then configure environment variables in Cloudflare.

## Project structure

```text
src/       application and editor source
public/    editor assets
scripts/   maintenance scripts
```

OpenCut is distributed under the MIT license. See [LICENSE](LICENSE) for the
required copyright and permission notice.
