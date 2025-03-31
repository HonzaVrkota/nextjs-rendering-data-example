import TodoItem from "@/components/Todo";
import { Todo } from "@/types";

const ServerComponentTodos = async () => {
  // Data fetching happens directly in the component body
  const todosPromise = fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=3"
  ).then((res) => res.json() as Promise<Todo[]>);

  await new Promise((resolve) => setTimeout(resolve, 4000));

  // Parallel data fetching
  const [todos] = await Promise.all([todosPromise]);
  return (
    <div>
      <p>
        <span>Time of fetching: {new Date().toLocaleString()}</span>
        <br />
        <span className="font-bold">Random id:</span>{" "}
        {crypto.randomUUID().split("-")[0]}
      </p>
      <div>
        <h4 className="text-md font-medium mb-2">User Todos</h4>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default ServerComponentTodos;
