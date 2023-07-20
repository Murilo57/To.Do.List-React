import { useState } from 'react';
import './App.css';
import All from "./components/All";
import TodoForm from './components/TodoForm';

function App() {
  const [alls, setAll] = useState([
  {
    id: 1,
    text: "Create functionality X in system", category: "Work", isCompleted: false,
  },
  {
    id: 2,
    text: "Go to the gym", category: "Pessoal", isCompleted: false,
  },
  {
    id: 3,
    text: "To study React", category: "Studys", isCompleted: false,
  }
])

  return (
    <div className="app">
    <h1>To-Do List</h1>
      <div className="todo-list">
        {alls.map((all) => (
          <All all={all}/>
        ))}
      </div>
      <TodoForm/>
    </div>
  )
}

export default App
