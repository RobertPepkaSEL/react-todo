import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoItemListItem } from './TodoItemListItem';
import { TodoItemModel } from './Models/TodoItemModel';

function App() {
  const [todos, setTodos] = useState<TodoItemModel[]>([]);

  function handleClick() {
    setTodos([...todos, {
      description: "",
      done: false,
    }]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
        <ul>{ todos.map((todo, index) => (
          <TodoItemListItem key={index} item={todo} />
        ))}
        </ul>
        <button onClick={handleClick}>Add Todo</button>
      </header>
    </div>
  );
}

export default App;
