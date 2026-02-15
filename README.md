# Futevôlei Maranhão

Website do Futevôlei Maranhão — Professor Gutenberg Vidal. Aulas, treinos e o melhor do futevôlei em São Luís, Maranhão.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** Tailwind CSS 4, shadcn/ui, Framer Motion
- **Backend:** Supabase (Auth + Database)
- **Language:** TypeScript
- **Deploy:** Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/
│   ├── (public)/       # Public pages (home, equipe, posts)
│   └── admin/          # Admin dashboard (protected)
├── components/
│   ├── home/           # Homepage sections
│   ├── layout/         # Header, footer, mobile nav
│   ├── admin/          # Admin components
│   ├── icons/          # Custom SVG icons
│   └── ui/             # shadcn/ui components
└── lib/
    ├── constants.ts    # Site config, WhatsApp contacts
    ├── team-data.ts    # Team members data
    ├── posts.ts        # Post queries (Supabase)
    └── supabase/       # Supabase client setup
```

## Deployment

The project is configured for deployment on Vercel. Push to `main` to trigger auto-deploy.

```bash
npm run build
```
