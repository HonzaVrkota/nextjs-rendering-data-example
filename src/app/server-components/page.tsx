import ServerComponentTodos from "@/components/ServerComponentTodos";
import ServerComponentUsers from "@/components/ServerComponentUsers";
import Counter from "@/components/Counter";
import StrategyLayout from "@/components/StrategyLayout";
import { Suspense } from "react";

// Server Component - automatically handled by Next.js
export default async function ServerComponentsPage() {
  return (
    <StrategyLayout
      title="Server Components"
      description="React Server Components allow you to write UI that can be rendered and optionally cached on the server. Data fetching happens directly in the component."
      example="// In a Server Component\nasync function MyComponent() {\n  const data = await fetch('/api/data');\n  return <div>{/* render data */}</div>;\n}"
    >
      <div>
        <h3 className="text-lg font-medium mb-4">Server Components Demo</h3>
        <div className="flex my-5">
          <Counter />
        </div>
        <Suspense fallback={<div>Loading TODOS...</div>}>
          <ServerComponentTodos />
        </Suspense>
        <Suspense fallback={<div>Loading USERS...</div>}>
          <ServerComponentUsers />
        </Suspense>
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md text-sm">
          <p className="font-medium">Server Component Benefits:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Zero client-side JavaScript for data fetching</li>
            <li>Direct access to data sources without client-side API calls</li>
            <li>Smaller bundle size, better performance</li>
            <li>SEO-friendly content available on initial HTML load</li>
          </ul>
        </div>
      </div>
    </StrategyLayout>
  );
}
