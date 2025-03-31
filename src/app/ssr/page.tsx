import { Metadata } from "next";
import StrategyLayout from "@/components/StrategyLayout";
import TodoItem from "@/components/Todo";
import { Todo } from "@/types";

// This metadata function runs on every request
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Server-Side Rendering - Next.js Demo",
    description: "Example of server-side rendering in Next.js",
  };
}

async function getTodos(): Promise<Todo[]> {
  // Server-side fetch - this runs on every request
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    {
      // Force fetch on every request (no caching)
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
}

export default async function SSRPage() {
  const todos = await getTodos();

  return (
    <StrategyLayout
      title="Server-Side Rendering (SSR)"
      description="Data is fetched on the server for each request. This ensures the page always has the latest data, but requires server processing time for every page load."
      example="// In a Server Component\nconst data = await fetch('/api/data', { cache: 'no-store' });"
    >
      <div>
        <h3 className="text-lg font-medium mb-4">
          Todo List (Server-Side Rendered)
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Fetched at: {new Date().toLocaleTimeString()}
        </p>

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
