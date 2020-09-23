import React, { useContext } from "react";
import { REMOVE_TODO } from "../context/action.types";
import TodoContext from "../context/TodoContext";

const Todos = () => {
  const { todos, dispatch } = useContext(TodoContext);

  const removeHandler = (id) => {
    dispatch({
      type: REMOVE_TODO,
      payload: id,
    });
  };
  return (
    <>
      <uL
        style={{
          textAlign: "center",
        }}
      >
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              textDecoration: "none",
              listStyle: "none",
              textAlign: "center",
            }}
            onClick={() => removeHandler(todo.id)}
          >
            {todo.todoString}✅
          </li>
        ))}
      </uL>
    </>
  );
};

export default Todos;
