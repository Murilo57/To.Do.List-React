import React from 'react'

function All( { all }) {
  return (
    <div className="all">
         <div className="content">
           <p>{all.text}</p>      
           <p className="category">({all.category})</p>
         </div>
         <div>
           <button>To complete</button>
           <button>X</button>
         </div>
         </div>
    )
  } 
export default All