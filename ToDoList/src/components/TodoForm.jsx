 import {createFactory, useState} from 'react'

const TodoForm = () => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")
     
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category) return
        //Added all
        //Clear the fields      
        setValue("")  
        setCategory("")
    }

  return (
  <div className='todo-form'> 
    <h2>Create Task:</h2>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter the title'
        value={value}
        onChange={(e) => setValue(e.target.value)}/>
        <select  value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select a category</option>
            <option value="Work">Work</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Studys">Studys</option>
        </select>
        <button type='submit'>Create a task</button>
    </form>
    </div>
    )  
}

export default TodoForm