import React, { useState, useRef } from "react";

export const TodoReact = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    setTodos(() => [...todos, todo]);
    setTodo("");
  };

  return (
    <div>
      <label>
        Add new todo
        <input
          type="text"
          value={todo}
          onChange={val => setTodo(val.target.value)}
        />
      </label>
      <button type="button" onClick={handleAddTodo}>
        Add todo
      </button>
      <ul>
        {todos.map(todo => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};
