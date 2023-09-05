import React from 'react';
import logo from '../imagenes/greyka_store_logo.webp'
import icon from '../imagenes/iconos/search (2).svg'

const Navbar = ({ categorias, onCategoriaClick }) => {
  return (
    <header>
        <div>
            <img src={logo} alt='Logo greykastore'></img>
        </div>
        <div>
            <form>
                <input type='text' placeholder='Buscar los Mejores prodctos'></input>
                <button type='submit'><img src={icon} alt='buscar productos'></img></button>
            </form>
        </div>
        <nav>
        <ul>
            {categorias.map((categoria, index) => (
            <li key={index}>
                <button onClick={() => onCategoriaClick(categoria)}>{categoria}</button>
            </li>
            ))}
        </ul>
        </nav>


    </header>
  );
};

export default Navbar;
