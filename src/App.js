import React, { useReducer } from "react";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";
import todoReducer from "./context/reducer";
import TodoContext from "./context/TodoContext";
import todoImg from "./todo.png";
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <div>
      <h1>To-Do App Using ContextAPI</h1>
      <img src={todoImg} style={{ height: "200px", width: "300px" }}></img>
      <TodoContext.Provider value={{ todos, dispatch }}>
        <Todos />
        <Form />
      </TodoContext.Provider>
    </div>
  );
};

export default App;
