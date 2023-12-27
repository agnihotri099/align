
import React from 'react';

const TodoList = ({ todos, onEdit, onDelete, onMarkComplete }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ backgroundColor: todo.color }}>
          <span>{todo.text}</span>
          <button onClick={() => onEdit(index)}>Edit</button>
          <button onClick={() => onDelete(index)}>Delete</button>
          <button onClick={() => onMarkComplete(index)}>
            {todo.completed ? 'Undo Complete' : 'Mark Complete'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
