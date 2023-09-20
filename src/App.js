import Navbar from './componentes/Navbar';
import ItemsListContainer from './componentes/ItemsListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';




function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      

        <ItemsListContainer greeting="bienvenido a greyka store"/>
      
      </BrowserRouter>
    </div>
    
    

    
  );

  
}

export default App;

