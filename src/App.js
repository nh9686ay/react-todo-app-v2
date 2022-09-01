import React from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList.jsx"

function App() {
  return (
    <div className="App">
      <h1>ToDo Application</h1>
      <TodoForm/>
      <TodoList />
    </div>
  );
}

export default App;
