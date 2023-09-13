import React from 'react';
import { Navbaringreso } from './Navbaringreso';
const Navbar = () => {
  return (
    <div className='flex justify-around'>
        <nav>
            <ul className='flex gap-[20px]'>
                <li>Categorias</li>
                <li>Ofertas</li>
                <li>Moda</li>
                <li>Contactenos</li>
            </ul>
        </nav>
        <Navbaringreso/>

    </div>
  )
}

export default Navbar

