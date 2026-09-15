# Live Coding Starter

## Stack

- Next.js 16.3.x
- React 19
- TypeScript
- TanStack Query (installed and provider configured; use only when it helps)
- Zod (installed; use only when runtime validation is useful)
- ESLint

## Before the interview

Use Node 24 LTS (`.nvmrc` is included), then run:

```bash
npm install
npm run check
npm run build
npm run dev
```

Open `http://localhost:3000` and press **Check API**. It should display `API OK`.

Also verify screen sharing, browser profile/incognito mode, editor font size, terminal visibility, and that no personal notifications can appear.

## Where to work

Start with:

```text
src/app/page.tsx
```

Create API endpoints under:

```text
src/app/api/<name>/route.ts
```

Example methods supported by Next route handlers:

```ts
export async function GET() {}
export async function POST(request: Request) {}
```

## Useful commands

```bash
npm run dev       # development server
npm run lint      # ESLint
npm run typecheck # TypeScript
npm run check     # lint + typecheck
npm run build     # production build
```

## Interview rule of thumb

Do not begin by building abstractions. A good flow is:

1. Clarify requirements and scope.
2. State the smallest useful vertical slice.
3. Implement the happy path.
4. Verify it.
5. Add loading/error/empty states and edge cases requested by the interviewer.
6. Refactor only when the code gives you a reason.
7. Before finishing, run `npm run check` and summarize trade-offs / next steps.
