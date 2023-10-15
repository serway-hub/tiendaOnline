import React, {createContext, useState} from 'react'

export const cartContext = createContext([])


const CartContext = ({children}) => {
  const [cart,setCart] = useState([])

  const addItem =(pd) => {
    console.log(pd)
    setCart([...cart,pd])
    console.log(cart)
  }

  return (
    <cartContext.Provider value={{cart, addItem}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContext