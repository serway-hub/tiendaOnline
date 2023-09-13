import React from 'react'
import logo from '../imagenes/greyka_store_logo.webp'
import logosearch from '../imagenes/iconos/search.svg'
import Cart from './Cart'


const Logo = () => {
  return (
    <div className='flex justify-around items-center'>
        <img src={logo} alt='logo greyka store'></img>
        <form className='flex'>
            <input type='text' placeholder='Busca los mejores productos' className='w-[40rem] h-[3rem] rounded-full pl-7 border-2 border-[#dcdcdc]'></input>
            <button type='submit' className='bg-[#ffa040] rounded-full relative right-[40px] w-[4rem]'>
                <img src={logosearch} className='text-3xl  w-[3rem] mx-auto'></img>
            </button>
        </form>
        <div>
            <Cart/>  
        </div>
    </div>
  )
}

export default Logo