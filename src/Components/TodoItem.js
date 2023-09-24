import React from 'react'

export default function TodoItem({todo,onDelete}) {
  return (
    <div className='container'>
         <h2>{todo.title}</h2>
         <p>{todo.desc}</p>
          <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
 