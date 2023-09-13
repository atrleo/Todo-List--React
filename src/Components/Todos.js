import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
  return (
    <div className='container'>
     <h1 className='text-center my-3' >Todo List</h1>
     {props.todos.length===0 ? "No Todos To Display" :
     props.todos.map((todo)=>{
      return <TodoItem todo={todo} key={todo.sn} onDelete={props.onDelete} />
     })}
 
     
    </div>
  )
}

