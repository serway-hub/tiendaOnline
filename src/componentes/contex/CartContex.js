import React, {createContext, useState} from 'react'

export const cartContext = createContext([])


const CartContext = ({children}) => {
  const [cart,setCart] = useState([])

  const addItem =(pd) => {
    const isproductInCart = cart.some((item) => (item.id === pd.id && item.talla === pd.talla && item.Color === pd.Color))
    if(isproductInCart){

      const updateCart = cart.map((item) => {
        if (item.id === pd.id && item.talla === pd.talla && item.Color === pd.Color){
          return {...item, quantity:item.quantity +1}
        }
        return item
      })
      setCart(updateCart)
    } else {
      setCart([...cart,pd])
      console.log(cart)
      console.log(pd)
    }
  }

  return (
    <cartContext.Provider value={{cart, addItem}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContext