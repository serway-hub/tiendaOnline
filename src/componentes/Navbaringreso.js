import React from 'react'
import { Link } from 'react-router-dom'


const Navbaringreso = () => {
  return (
    
        <nav>
            <ul className='flex gap-[30px]'>
                <li><Link to='/cuenta'>Crea tu Cuenta</Link></li>
                <li><Link to='/loguin'>Ingresa</Link></li>
            </ul>
        </nav>
    
  )
}
export default Navbaringreso
