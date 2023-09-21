import Navbar from './componentes/Navbar';
import ItemsListContainer from './componentes/ItemsListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';




function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemsListContainer greeting='bienvenido a greyka store'/>} />
        </Routes>
      
      </BrowserRouter>
    </div>
    
    

    
  );

  
}

export default App;

