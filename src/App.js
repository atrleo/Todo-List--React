

import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';
import AddTodo from './Components/AddTodo';
import { useState, useEffect } from 'react';
import About from './Components/About';
import {
  BrowserRouter as Router,

  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("Deleting the note ", todo);
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }




  const addTodo = (title, desc) => {
    console.log("I am adding to do", title, desc);
    let sn;
    if (todos.length == 0) {
      sn = 0;
    }
    else {
      let sn = todos[todos.length - 1].sn + 1;
    }
    const myTodo = {
      sn: sn,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);


  }



  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);



  return (
    <>
      <Router>
      <Header title="Todo List" searchBar={false} />
        <Routes>

          <Route exact path='/' element={<><AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} /></>}></Route>

          <Route exact path='/about' element={<About />}>
         
          </Route>
        </Routes>
        




        <Footer />
      </Router>
    </>
  );
}

export default App;




