import React, { useState } from 'react';
import Navbar from './componentes/Navbar';
import Logo from './componentes/Logo';



function App() {


  return (
    <header>
      <div>
        <Logo/>
      </div>
      <div className='navbarHome'>
        <Navbar/>
      </div>

    </header>
    
  );

  
}

export default App;

