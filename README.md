# turudev

Full-stack web app with React, TypeScript, Vite, Nitro, Drizzle ORM, Better Auth, dan Tailwind CSS.

## Tech Stack

- **Frontend**: React 19, React Router, Tailwind CSS
- **Backend**: Nitro (server API)
- **Database**: MySQL via Drizzle ORM
- **Auth**: Better Auth
- **Build**: Vite, TypeScript, Bun

## Struktur Proyek

```
src/
  pages/        # Halaman (Home, Login, Dashboard)
  lib/          # auth-client
server/
  api/          # API routes
  db/           # Schema, seed, koneksi DB
  lib/          # auth server
drizzle/        # Migrasi database
```

## Setup

1. Install dependensi:
   ```bash
   bun install
   ```

2. Salin `.env` dan isi variabel yang dibutuhkan (database URL, auth secret, dll).

3. Jalankan migrasi:
   ```bash
   bunx drizzle-kit migrate
   ```

4. Seed database (opsional):
   ```bash
   bun server/db/seed.ts
   ```

## Development

```bash
bun run dev
```

## Build

```bash
bun run build
```

## Lint

```bash
bun run lint
```
