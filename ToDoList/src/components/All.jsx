import React from 'react'

function All( { all, removeTodo, completeTodo }) {
  return (
    <div className="all" style={{textDecoration: all.isCompleted ? "line-through" : ""}}>
         <div className="content">
           <p>{all.text}</p>      
           <p className="category">({all.category})</p>
         </div>
         <div>
           <button className="complete" onClick={() => completeTodo(all.id)}>To complete</button>
           <button className="remove" onClick={() => removeTodo(all.id)}>X</button>
         </div>
         </div>
    )
  } 
export default All