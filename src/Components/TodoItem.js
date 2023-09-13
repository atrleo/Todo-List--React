import React from 'react'

export default function TodoItem({todo}) {
  return (
    <div className='container'>
         <h2>{todo.title}</h2>
         <h2>{todo.desc}</h2>
          <button className='btn btn-sm btn-danger'>Delete</button>
    </div>
  )
}
