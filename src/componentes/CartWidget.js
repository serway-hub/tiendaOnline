import React,{useContext,useEffect} from 'react'
import cartIcon from '../componentes/iconos/cart-shopping-solid.svg'
import { cartContext } from './contex/CartContex'
import { Link } from 'react-router-dom'
import Item from './Item'

const CartWidget = () => {

  const {cart} = useContext(cartContext)  
  console.log(cart)

  

  useEffect(() => {
    // Realiza otras operaciones si es necesario
  }, [cart]);



    return (
      <div className='flex'>
        <Link to ='/cart'>
          <div className='flex'>
            <img src={cartIcon} className='w-[2rem]' alt='carrito'></img>
            <span>{cart.reduce((acc,itemh) => acc + itemh.quantity,0)}</span>

          </div>
        </Link>
        
      </div>
    )
  }

export default CartWidget