import React from 'react';
import Navbar from './componentes/Navbar';
import ItemsListContainer from './componentes/ItemsListContainer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ItemsDetailContainer from './componentes/ItemsDetailContainer';
import Error404 from './componentes/Error404';
import ItemDetail from './componentes/ItemDetail';
import Contactenos from './componentes/Contactenos';
import Ofertas from './componentes/Ofertas'
import Moda from './componentes/Moda'




function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={'/'} element={<ItemsListContainer greeting='bienvenido a greyka store'/>} />
          <Route path={'/category/:id'} element={<ItemsListContainer />} />
          <Route path={'/item/:id'} element={<ItemsDetailContainer />} />
          <Route path={'/item/:id'} element={<ItemDetail />} />
          <Route path={'/Ofertas'} element={<Ofertas/>}/>
          <Route path={'/Moda'} element={<Moda/>}/>
          <Route path={'/contactenos'} element={<Contactenos/>}/>
          <Route path={'*'} element={<Error404 />} />
        </Routes>
      
      </BrowserRouter>
    </div>
    
    

    
  );

  
}

export default App;

