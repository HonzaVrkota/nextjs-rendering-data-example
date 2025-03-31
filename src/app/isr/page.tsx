import RevalidateButton from "@/components/RevalidateButton";
import StrategyLayout from "@/components/StrategyLayout";
import TodoItem from "@/components/Todo";
import { Todo } from "@/types";

// Set revalidation time to 30 seconds for this page segment
export const revalidate = 30;

async function getTodos(): Promise<Todo[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5",
    {
      headers: {
        apiKey: "1234567890",
      },
      // This will use the revalidate value from above
      next: { revalidate },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch todos");
  }

  return res.json();
}

export default async function ISRPage() {
  const todos = await getTodos();
  const fetchTime = new Date().toLocaleString();

  return (
    <StrategyLayout
      title="Incremental Static Regeneration (ISR)"
      description="Pages are generated at build time like SSG, but can be regenerated in the background after a specified interval. This provides a good balance between performance and freshness."
      example="// Top-level page segment option\nexport const revalidate = 60; // seconds\n\n// Or in fetch\nfetch('/api/data', { next: { revalidate: 60 } });"
    >
      <div>
        <h3 className="text-lg font-medium mb-4">Todo List (ISR)</h3>
        <p className="text-sm text-gray-500 mb-4">
          Last generated: {fetchTime}
          <br />
          Random id: {crypto.randomUUID().split("-")[0]}
        </p>
        <div className="bg-blue-50 border border-blue-200 p-3 mb-4 rounded text-sm">
          This page revalidates every 30 seconds. Refresh after that time to see
          potentially new data.
          <br />
          In production, the old cached version would be shown first, then
          updated in the background after revalidation time passes.
        </div>

        <div className="mb-6">
          <RevalidateButton />
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
