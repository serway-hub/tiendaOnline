import React from 'react'
import {Link} from 'react-router-dom'
 
const Listascategorias = () => {
  return (
    <div className='bg-[#ffffff] border-2 border-indigo-600 cursor-pointer'>
        <ul>
            <li><Link to='/Hombre'>Hombre</Link></li>
            <li><Link to='/Mujer'>Mujer</Link></li>
            <li><Link to='/Niño'>Niño</Link></li>
        </ul>
    </div>
  )
}

export default Listascategorias