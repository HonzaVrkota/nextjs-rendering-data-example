import { Todo } from "@/types";

interface TodoProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoProps) => {
  return (
    <div className="border p-4 rounded-md mb-2">
      <div className="flex items-start">
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          className="mt-1 mr-3"
        />
        <div>
          <h3
            className={`text-lg ${
              todo.completed ? "line-through text-gray-500" : ""
            }`}
          >
            {todo.title}
          </h3>
          <p className="text-sm text-gray-500">
            ID: {todo.id} | User ID: {todo.userId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
