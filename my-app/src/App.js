
import React, { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [color, setColor] = useState('#ffffff');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, color, completed: false }]);
      setNewTodo('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    const updatedText = prompt('Edit todo:', todos[index].text);
    if (updatedText !== null) {
      const newTodos = [...todos];
      newTodos[index].text = updatedText;
      setTodos(newTodos);
    }
  };

  const markComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
  <h1>Todo App</h1>
  <input
    type="text"
    value={newTodo}
    onChange={(e) => setNewTodo(e.target.value)}
  />

  
  <label htmlFor="colorPicker">Select Color: </label>
  <input
    id="colorPicker"
    type="color"
    value={color}
    onChange={handleColorChange}
  />

  <button onClick={addTodo}>Add Todo</button>
  <TodoList
    todos={todos}
    onEdit={editTodo}
    onDelete={deleteTodo}
    onMarkComplete={markComplete}
  />
</div>

  );
};

export default App;
