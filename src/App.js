

import Header from './Components/Header';
import Todos from './Components/Todos';
import Footer from './Components/Footer';


function App() {
  return (
  <>
  <Header title="Todo List" searchBar={false}/>
  <Todos />
  <Footer />
  </>
  );
}

export default App;




