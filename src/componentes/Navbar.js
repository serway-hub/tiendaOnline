import React from 'react';
import Logo from './Logo';
import Listascategorias from './Listascategorias';
import {Link} from 'react-router-dom'
import { useState } from 'react';
import CartWidget from './CartWidget';
import chevronDown from './iconos/chevron-down-solid.svg'

const Navbar = () => {

  
  const [showListacategorias, setShowListacategorias] = useState(false)

  const handleMouseEnter = () => {
    setShowListacategorias(true)
  }

  const handleMouseleave =() =>{
    setShowListacategorias(false)
  }
  return (
    <header>
        <div className='flex justify-around'>
          <Logo/>
        <div className='flex items-center'>
          <Link to='/cart'><CartWidget/></Link>  
        </div>
        
        </div>
        <div className='flex justify-around'>
            <nav>
                <ul className='flex gap-[20px] cursor-pointer'>
                    <li className='cursor-pointer flex gap-[5px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseleave}>Categorias{showListacategorias && <Listascategorias/>}<img src={chevronDown} className='w-[13px] items-center'></img></li>
                    <li><Link to='/ofertas'>Ofertas</Link></li>
                    <li><Link to='/moda'>Moda</Link></li>
                    <li><Link to='/contactenos'>Contactenos</Link></li>
                </ul>
            </nav>
            
        </div>
    </header>
  )
}

export default Navbar

