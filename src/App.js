import React, { useState } from 'react';
import Navbar from './componentes/Navbar';

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);

  const categorias = ['Tenis Para Hombre', 'Tenis Para Mujer', 'Tenis para niños'];

  const handleCategoriaClick = (categoria) => {
    // Manejar el clic en la categoría aquí
    setCategoriaSeleccionada(categoria);
  };

  return (
    <div>
      <Navbar categorias={categorias} onCategoriaClick={handleCategoriaClick} />
      {categoriaSeleccionada && <p>Categoría seleccionada: {categoriaSeleccionada}</p>}
    </div>
  );
}

export default App;

