"use client";

import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="mb-4">
      <h4 className="text-md font-medium mb-2">Simple Counter</h4>
      <p className="text-lg">{count}</p>
      <button
        className="mr-2 p-2 bg-blue-500 text-white rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="p-2 bg-red-500 text-white rounded"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
