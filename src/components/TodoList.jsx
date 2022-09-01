import React, {useState} from 'react';
import TodoForm from './TodoForm';

const TodoList = () => {

    const [todos, setTodos] = useState([])

  return (
    <div>
      <h1>Whats the plan for to the day</h1>
      <TodoForm/>
    </div>
  )
}

export default TodoList
