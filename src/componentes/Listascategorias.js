import React from 'react'
import {Link} from 'react-router-dom'
 
const Listascategorias = () => {
  return (
    <div className='bg-[#ffffff] border-2 border-indigo-600 cursor-pointer absolute top-[110px]'>
        <ul>
            <li><Link to='/category/hombre'>Hombre</Link></li>
            <li><Link to='/category/mujer'>Mujer</Link></li>
            <li><Link to='/category/nino'>Niño</Link></li>
        </ul>
    </div>
  )
}

export default Listascategorias