import React, { useEffect, useState } from 'react';
import Todo from './Todo';
 
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/r951236958/todo')
      .then(response => response.json())
      .then(data => {
        setTodos(data);
      })
  });
  return (
    <div>
      {
        todos.map(todo => (
          <Todo
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
          />
        ))
      }
    </div>
  )
}
 
export default TodoList;
