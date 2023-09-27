import React from 'react'
import {Link} from 'react-router-dom'
 
const Listascategorias = () => {
  return (
    <div className='bg-[#ffffff] border-2 border-indigo-600 cursor-pointer absolute top-[105px] w-[120px]'>
        <ul >
            <li className='mb-[10px]'><Link to='/category/hombre'>Hombre</Link></li>
            <li className='mb-[10px]'><Link to='/category/mujer'>Mujer</Link></li>
            <li className='mb-[10px]'><Link to='/category/nino'>Niño</Link></li>
        </ul>
    </div>
  )
}

export default Listascategorias