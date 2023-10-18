import React, {createContext, useState} from 'react'

export const cartContext = createContext([])


const CartContext = ({children}) => {
  const [cart,setCart] = useState([])
  console.log(cart)

  const addItem =(pd) => {
    console.log(pd)
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
      const updatedCart = [...cart, { ...pd}];
      setCart(updatedCart);
    }
  }

  const removeItem= (itemId) => {
    const updatedCart = cart.filter((item,index) => index !==itemId)
    setCart(updatedCart)
  }

  const updateQuantity = (updateItem) => {
    const updateCart = cart.map((item) => {
      if(item.id === updateItem.id) {
        return updateItem
      }
      return item
    })
    setCart(updateCart)
  }

  return (
    <cartContext.Provider value={{cart, addItem,updateQuantity}}>
        {children}
    </cartContext.Provider>
  )
}

export default CartContext