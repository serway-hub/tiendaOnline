import React from 'react';
import Navbaringreso from './Navbaringreso'
import Cart from './Cart';
import Logo from './Logo';
import {Link} from 'react-router-dom'



const Navbar = () => {
  return (
    <header>
        <div className='flex justify-around'>
        <Logo/>
        <div className='flex items-center'>
          
        <Link to='/cart'><Cart/></Link>  
        </div>
        
        </div>
        <div className='flex justify-around'>
            <nav>
                <ul className='flex gap-[20px] cursor-pointer'>
                    <li className='cursor-pointer'><Link to='/categorias'>Categorias</Link></li>{}
                    <li><Link to='/ofertas'>Ofertas</Link></li>
                    <li><Link to='/moda'>Moda</Link></li>
                    <li><Link to='/contactenos'>Contactenos</Link></li>
                </ul>
            </nav>
            <Navbaringreso/>
        </div>
    </header>
  )
}

export default Navbar

