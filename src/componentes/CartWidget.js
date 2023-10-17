import React,{useContext} from 'react'
import cartIcon from '../componentes/iconos/cart-shopping-solid.svg'
import { cartContext } from './contex/CartContex'
import { Link } from 'react-router-dom'

const CartWidget = () => {

  const {cart} = useContext(cartContext)  



    return (
      <div className='flex'>
        <Link to ='/cart'>
          <div className='flex'>
            <img src={cartIcon} className='w-[2rem]' alt='carrito'></img>
            <span>{cart.length}</span>

          </div>
        </Link>
        
      </div>
    )
  }

export default CartWidget