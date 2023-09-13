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
                <ul className='flex gap-[20px] cursor-pointer'>
                    <li className='cursor-pointer'><a href='#'>Categorias</a></li>
                    <li><a href='#'>Ofertas</a></li>
                    <li><a href='#'>Moda</a></li>
                    <li><a href='#'>Contactenos</a></li>
                </ul>
            </nav>
            <Navbaringreso/>

        </div>
    </header>
  )
}

export default Navbar

