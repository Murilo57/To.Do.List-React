import React from 'react'

function All( { all, removeTodo }) {
  return (
    <div className="all">
         <div className="content">
           <p>{all.text}</p>      
           <p className="category">({all.category})</p>
         </div>
         <div>
           <button className="complete">To complete</button>
           <button className="remove" onClick={() => removeTodo(all.id)}>X</button>
         </div>
         </div>
    )
  } 
export default All