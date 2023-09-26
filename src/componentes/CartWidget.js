import React from 'react'
import cartIcon from '../componentes/iconos/cart-shopping-solid.svg'

const CartWidget = () => {
  return (
    <div className='flex'>
        <img src={cartIcon} className='w-[2rem]' alt='carrito'></img>
        <span>0</span>
    </div>
  )
}

export default CartWidget