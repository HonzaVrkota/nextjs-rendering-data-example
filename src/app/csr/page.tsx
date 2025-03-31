"use client";

import { useState, useEffect } from "react";
import StrategyLayout from "@/components/StrategyLayout";
import TodoItem from "@/components/Todo";
import { Todo } from "@/types";

export default function CSRPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
          {
            headers: {
              apiKey: "1234567890",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setTodos(data);
        setError(null);
      } catch (err) {
        setError("Error fetching todos. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  return (
    <StrategyLayout
      title="Client-Side Rendering (CSR)"
      description="Data is fetched from the client using useEffect or similar hooks after the component mounts. The page initially renders without data, then updates once data is loaded."
      example="useEffect(() => { fetch('/api/data').then(res => res.json()).then(setData) }, [])"
    >
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="text-center">
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent"
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-2">Loading todos...</p>
          </div>
        </div>
      ) : error ? (
        <div className="text-red-500 p-4 border border-red-200 rounded">
          {error}
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-medium mb-4">
            Todo List (Client-Side Rendered)
          </h3>
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
      )}
    </StrategyLayout>
  );
}
