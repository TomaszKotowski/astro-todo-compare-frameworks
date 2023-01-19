import { ChangeEvent, useState } from "react";

type Todo = {
  id: string;
  label: string;
  checked: boolean;
};

export const TodoReact = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    if (!todo.length) return;

    setTodoList(todos => [
      ...todos,
      {
        id: new Date().getTime().toString(),
        checked: false,
        label: todo,
      },
    ]);
    setTodo("");
  };

  const handleCheckTodo = (id: string) =>
    setTodoList(() =>
      todoList.map(todo =>
        id === todo.id ? { ...todo, checked: !todo.checked } : todo
      )
    );

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <div>
      <label>
        Add new todo
        <input type="text" value={todo} onChange={handleInputChange} />
      </label>
      <button type="button" onClick={handleAddTodo}>
        Add todo
      </button>
      <ul>
        {todoList.map(({ id, label, checked }) => (
          <li key={id}>
            {label}
            <input
              type="checkbox"
              id="id"
              checked={checked}
              onChange={() => handleCheckTodo(id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
