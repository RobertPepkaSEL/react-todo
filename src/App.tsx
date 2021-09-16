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

  function handleDescriptionChanged(index: number, newDescription: string) {
    const newTodos = [...todos];
    newTodos[index].description = newDescription;
    setTodos(newTodos);
  }

  function handleDoneClick(index: number, done: boolean) {
    const newTodos = [...todos];
    newTodos[index].done = !done;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos</h1>
        <ul>{ todos.map((todo, index) => (
          <TodoItemListItem
            key={index} item={todo} 
            onDescriptionChanged={(description) => handleDescriptionChanged(index, description)}
            onDoneClick={() => handleDoneClick(index, todo.done)}
          />
        ))}
        </ul>
        <button onClick={handleClick}>Add Todo</button>
      </header>
    </div>
  );
}

export default App;
