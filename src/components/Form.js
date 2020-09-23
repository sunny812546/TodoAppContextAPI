import React, { useContext, useState } from "react";
import TodoContext from "../context/TodoContext";
import { ADD_TODO } from "../context/action.types";
import { v4 } from "uuid";
const Form = () => {
  const [todoString, setTodoString] = useState("");
  const { dispatch } = useContext(TodoContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (todoString === "") {
      return alert("Enter valid inputs😊");
    }
    const todo = {
      todoString,
      id: v4(),
    };
    dispatch({
      type: ADD_TODO,
      payload: todo,
    });
    setTodoString("");
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={todoString}
          name="todo"
          id="todo"
          placeholder="Your next Todo"
          onChange={(e) => setTodoString(e.target.value)}
        ></input>
        <button onClick={submitHandler}>ToDo</button>
      </form>
    </div>
  );
};

export default Form;
