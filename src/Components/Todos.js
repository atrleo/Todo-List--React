import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className='container'>
     <h1 className='text-center my-3' >Todo List</h1>
     {props.todos.map((todo)=>{
      return <TodoItem todo={todo} />
     })}
    

      
    </div>
  )
}
