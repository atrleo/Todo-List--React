import React, { useState } from 'react'

const AddTodo = (props) => {
    const[title, setTitle]= useState("");
    const[desc,setDesc] = useState("");
    const submit =(e) =>{
        e.preventDefault();
        if(!title || !desc){
        alert("The Title and Description cannot be empty!!");
        }
        else{
        setTitle("");
        setDesc("");
     props.addTodo(title,desc)   
        } 

    }
    return (
        <div>
            <form className='container my-3' onSubmit={submit}>
                <h1 className='text-center'>Add Todo</h1>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Add Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                       
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Add Description</label>
                    <input type="text"  value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="description" />
                </div>
               
                <button type="submit" className="btn btn-sm btn-dark">ADD</button>
            </form>

        </div>
    )
}

export default AddTodo
