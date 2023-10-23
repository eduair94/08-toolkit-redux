import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  //const { data: todos = [], isLoading } = useGetTodosQuery({ limit: 10 });
  const [todoId, setTodoId] = useState(1);

  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  const nextTodo = () => {
    setTodoId((state) => state + 1);
  };

  const previousTodo = () => {
    if (todoId === 1) return;
    setTodoId((state) => state - 1);
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>{isLoading ? "Loading..." : "Loaded"}</h4>
      <pre>{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map((todo: any) => {
          return (
            <li key={todo.id}>
              <strong style={{ marginRight: "10px" }}>
                {todo.completed ? "DONE" : "PENDING"}
              </strong>
              <span>{todo.title}</span>
            </li>
          );
        })}
      </ul> */}
      <button onClick={previousTodo}>Previous Todo</button>
      <button onClick={nextTodo}>Next Todo</button>
    </>
  );
};
