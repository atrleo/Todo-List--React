

import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import { useState } from 'react';


function App() {
  const onDelete =(todo)=>{
    console.log("Deleting the note ",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
  }




  const addTodo = (title,desc)=>{
    console.log("I am adding to do",title,desc);
    let sn;
    if(todos.length==0){
      sn=0;
    }
    else{
    let sn =  todos[todos.length-1].sn + 1;
    }
    const myTodo ={
      sn: sn,
      title: title,
      desc: desc
    } 
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  }



 const [todos, setTodos] = useState([
    {
      sn :1 ,
      title:"Shopping",
      desc : "To go to the mall"
    },
    {
      sn :2,
      title:"Bike",
      desc : "Go for Bike Servicing"
    },
    {
      sn:3,
      title:"Learn",
      desc: "Revisit React"
    }

  ]);
  return (
  <>
  <Header title="Todo List" searchBar={false}/>
  < AddTodo addTodo={addTodo} />
  <Todos todos={todos} onDelete={onDelete}/>



  <Footer />
  </>
  );
}

export default App;




