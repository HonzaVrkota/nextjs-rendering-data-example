import StrategyLayout from "@/components/StrategyLayout";
import TodoItem from "@/components/Todo";
import { Todo } from "@/types";

async function getTodos(): Promise<Todo[]> {
  // This fetch happens only at build time
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    {
      // Default cache behavior is to cache with no revalidation (SSG)
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
}

export default async function SSGPage() {
  const todos = await getTodos();
  const buildTime = new Date().toLocaleString();

  return (
    <StrategyLayout
      title="Static Site Generation (SSG)"
      description="Data is fetched at build time and the page is pre-rendered to static HTML. This provides the fastest page loads, but data is only as fresh as the last build."
      example="// In a Server Component\nconst data = await fetch('/api/data'); // Default is cached permanently"
    >
      <div>
        <h3 className="text-lg font-medium mb-4">
          Todo List (Statically Generated)
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          This page was statically generated at build time.
          <br />
          Page generation time: {buildTime}
          <br />
          Random id: {crypto.randomUUID().split("-")[0]}
        </p>
        <div className="bg-yellow-50 border border-yellow-200 p-3 mb-4 rounded text-sm">
          Note: In production, this timestamp would be fixed at build time.
          Since were in development mode, Next.js may re-render this page on
          each request.
        </div>

        {todos.length === 0 ? (
          <p>No todos found.</p>
        ) : (
          <div>
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </div>
        )}
      </div>
    </StrategyLayout>
  );
}
