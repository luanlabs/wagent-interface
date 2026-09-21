# Wagent Interface

Wagent makes online transactions hassle-free within the Stellar network. Whether
you're a merchant or a buyer, Wagent offers practical features tailored to your
needs. This repository contains the web dashboard ("interface") — a
[Next.js](https://nextjs.org/) App Router application.

## Tech stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict)
- **Redux Toolkit** + RTK Query for state and data fetching
- **Tailwind CSS 3** for styling
- **Firebase Cloud Messaging** for web push notifications
- **@stellar/stellar-sdk** for Stellar address validation
- **PWA** support via `@ducanh2912/next-pwa`

## Prerequisites

- **Node.js 20.9+** (Node 24 LTS recommended — see [`.nvmrc`](./.nvmrc))
- **npm 10+**

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env.local
#   then edit .env.local and set NEXT_PUBLIC_API (and, optionally, Firebase keys)

# 3. Start the dev server (http://localhost:3000)
npm run dev
```

## Environment variables

All variables are `NEXT_PUBLIC_*` and are **inlined at build time** — they must be
present before `npm run build` and changing them requires a rebuild.

| Variable                                  | Required | Description                                                        |
| ----------------------------------------- | :------: | ------------------------------------------------------------------ |
| `NEXT_PUBLIC_API`                         |   Yes    | Base URL of the Wagent backend API, e.g. `https://api.wagent.app`. |
| `NEXT_PUBLIC_FIREBASE_API_KEY`            |    No    | Firebase web API key (FCM push).                                   |
| `NEXT_PUBLIC_FIREBASE_APP_ID`             |    No    | Firebase app id.                                                   |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID`         |    No    | Firebase project id.                                               |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`        |    No    | Firebase auth domain.                                              |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`     |    No    | Firebase storage bucket.                                           |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`     |    No    | Firebase Analytics measurement id.                                 |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`|    No    | Firebase Cloud Messaging sender id.                                |
| `NEXT_PUBLIC_FIREBASE_VAPID_KEY`          |    No    | Web Push VAPID public key.                                         |

Push notifications degrade gracefully if the Firebase variables are unset.

> **Note:** the background push service worker, `public/firebase-messaging-sw.js`,
> cannot read environment variables, so its Firebase config is hard-coded. If you
> point the app at a different Firebase project, update that file too.

## Scripts

| Script                 | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `npm run dev`          | Start the development server.                     |
| `npm run build`        | Production build (type-checks and lints).         |
| `npm run start`        | Serve the production build on port `3003`.        |
| `npm run lint`         | Run ESLint.                                       |
| `npm run typecheck`    | Run the TypeScript compiler with no emit.         |
| `npm run format`       | Format the codebase with Prettier.               |
| `npm run format:check` | Check formatting without writing.                 |

## Production build

```bash
npm run build
npm run start   # http://localhost:3003
```

The build uses Next.js [`output: 'standalone'`](https://nextjs.org/docs/app/api-reference/config/next-config-js/output),
which produces a self-contained server in `.next/standalone`. In production you
can run it directly:

```bash
node .next/standalone/server.js   # also copy ./public and ./.next/static alongside it
```

## Docker

The image is a multi-stage build that ships only the standalone server and runs
as a non-root user.

```bash
# Build (pass build-time public env vars as needed)
docker build \
  --build-arg NEXT_PUBLIC_API=https://api.wagent.app \
  -t wagent-interface:latest .

# Run
docker run -p 3003:3003 wagent-interface:latest
```

Or with Docker Compose (reads `NEXT_PUBLIC_*` from your shell / `.env`):

```bash
docker compose up --build
```

The app is then available at http://localhost:3003. The container exposes a
`HEALTHCHECK` that polls `/signin`.

## License

Wagent is licensed under the [MIT License](LICENSE).

## Contact

For more information or support, reach out to us at
[support@wagent.app](mailto:support@wagent.app).
