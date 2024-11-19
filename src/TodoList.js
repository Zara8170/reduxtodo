import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoslice";

export default function TodoList() {
  const [inputTodo, setTodo] = useState("");
  const todos = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (inputTodo.trim()) {
      dispatch(addTodo(inputTodo));
      setTodo("");
    }
  };

  return (
    <div>
      <h1>To-Do-List</h1>
      <input
        type="text"
        placeholder="Enter a task..."
        value={inputTodo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ol>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.content}
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
