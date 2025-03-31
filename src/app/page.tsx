export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Next.js Data Rendering Strategies
      </h1>

      <p className="mb-6">
        This demo application showcases the different data rendering strategies
        available in Next.js 15 with the App Router. Use the navigation above to
        explore each strategy.
      </p>

      <div className="space-y-6">
        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">
            Client-Side Rendering (CSR)
          </h2>
          <p>
            Data is fetched from the client using useEffect or React Query. The
            page initially loads without data, then fetches it after rendering.
          </p>
        </div>

        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">
            Server-Side Rendering (SSR)
          </h2>
          <p>
            Data is fetched on each request on the server before sending HTML to
            the client. Every request provides fresh data.
          </p>
        </div>

        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">
            Static Site Generation (SSG)
          </h2>
          <p>
            Pages are generated at build time with data baked in. Content
            doesn't change after deployment unless rebuilt.
          </p>
        </div>

        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">
            Incremental Static Regeneration (ISR)
          </h2>
          <p>
            Similar to SSG, but pages can be regenerated after deployment at a
            specific interval or on-demand.
          </p>
        </div>

        <div className="border p-4 rounded-md">
          <h2 className="text-xl font-semibold mb-2">Server Components</h2>
          <p>
            React components that run and render on the server, allowing for
            direct data fetching without client-side JavaScript.
          </p>
        </div>
      </div>
    </div>
  );
}
