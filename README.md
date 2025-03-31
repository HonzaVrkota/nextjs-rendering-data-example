# Next.js 15 Data Rendering Strategies Demo

This project is an educational demo showcasing the various data rendering strategies available in Next.js 15 with the App Router. It's designed to help students understand how each strategy works and when to use them.

## Rendering Strategies Demonstrated

### Client-Side Rendering (CSR)

- **Path:** `/csr`
- **How it works:** Data is fetched from the client using React hooks like `useEffect` after the component mounts.
- **Use case:** Interactive dashboards where SEO is less important and you need dynamic data.
- **Key files:** `src/app/csr/page.tsx`

### Server-Side Rendering (SSR)

- **Path:** `/ssr`
- **How it works:** Data is fetched on the server for each request before the page is sent to the client.
- **Use case:** Pages that need fresh data for each request and good SEO.
- **Key files:** `src/app/ssr/page.tsx`

### Static Site Generation (SSG)

- **Path:** `/ssg`
- **How it works:** Pages are pre-rendered at build time with data baked in.
- **Use case:** Marketing pages, blogs, or content that rarely changes.
- **Key files:** `src/app/ssg/page.tsx`

### Incremental Static Regeneration (ISR)

- **Path:** `/isr`
- **How it works:** Pages are statically generated but can be regenerated after deployment at a specified interval.
- **Use case:** E-commerce product pages, news sites with occasional updates.
- **Key files:** `src/app/isr/page.tsx`

### Server Components

- **Path:** `/server-components`
- **How it works:** React components that run and render on the server, with direct data fetching in the component.
- **Use case:** Any page where you want to reduce client-side JavaScript and improve initial load time.
- **Key files:** `src/app/server-components/page.tsx`

## Project Structure

```
src/
├── app/                    # App router pages
│   ├── csr/                # Client-side rendering example
│   ├── isr/                # Incremental static regeneration example
│   ├── server-components/  # Server components example
│   ├── ssg/                # Static site generation example
│   ├── ssr/                # Server-side rendering example
│   ├── layout.tsx          # Root layout with navigation
│   └── page.tsx            # Home page with overview
├── components/             # Shared components
│   ├── Navigation.tsx      # Navigation menu
│   ├── StrategyLayout.tsx  # Common layout for strategy pages
│   └── Todo.tsx            # Todo item component
└── types/                  # TypeScript definitions
    └── index.ts            # Shared types
```

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install` (or `yarn` or `pnpm install`)
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [App Router Documentation](https://nextjs.org/docs/app)
- [Data Fetching Documentation](https://nextjs.org/docs/app/building-your-application/data-fetching)
- [Server Components Documentation](https://nextjs.org/docs/app/building-your-application/rendering/server-components)
