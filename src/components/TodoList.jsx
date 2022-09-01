import React, {useState} from 'react';
import TodoForm from './TodoForm';

const TodoList = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos)
    }

  return (
    <div>
      <h1>Whats the plan for to the day</h1>
      <TodoForm/>
    </div>
  )
}

export default TodoList
