

import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';


function App() {
  let todos = [
    {
      sn :1 ,
      title:"1st todo",
      desc : "To go to the mall"
    },
    {
      sn :2,
      title:"2nd todo",
      desc : "Bike servicing"
    },
    {
      sn:3,
      title:"3rd todo",
      desc: "Revisit React"
    }

  ]
  return (
  <>
  <Header title="Todo List" searchBar={false}/>
  <Todos todos={todos}/>
  <Footer />
  </>
  );
}

export default App;




