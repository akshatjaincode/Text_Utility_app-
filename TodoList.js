import React from 'react';

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
          />
          {todo.text}
          <br />
          <button className="btn btn-primary" onClick={() => removeTodo(index)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
