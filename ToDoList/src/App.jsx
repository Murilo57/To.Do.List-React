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

  const addAll = (text, category) => {
    const newAlls = [
      ...alls, 
      {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
   ]
  setAll(newAlls)   
  }

  const removeTodo = (id) => {
    const newAlls = [...alls]
    const filteredAlls = newAlls.filter((all) => 
    all.id !== id ? all : null
    )
    setAll(filteredAlls)
  }

  const completeTodo = (id) => {
    const newAlls = [...alls]
    newAlls.map((all) => all.id === id ? all.isCompleted = !all.isCompleted : all)
    setAll(newAlls)
  }

  return (
    <div className="app">
    <h1>To-Do List</h1>
      <div className="todo-list">
        {alls.map((all) => (
          <All key={all.id} all={all} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addAll={addAll}/>
    </div>
  )
}

export default App
