import React from 'react';
import { Navbaringreso } from './Navbaringreso';
import Logo from './Logo';
const Navbar = () => {
  return (
    <header>
        <div>

        <Logo/>
        </div>
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
    </header>
  )
}

export default Navbar

