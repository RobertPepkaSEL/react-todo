import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TodoItem } from './TodoItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
        <ul>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </header>
    </div>
  );
}

export default App;
