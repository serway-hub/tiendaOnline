import React from 'react'
import { useState } from 'react'

const ItemCount = (stockItems,{item}) => {
    const [counter,setCounter] = useState(1)
    const [stock,setStock] =useState(stockItems)

    const plusStock = () => {
        if (counter < stock) {
            setCounter(counter+1)
        }
    }

    const minusStock = () => {
        if (counter > 1) {
            setCounter(counter-1)
        }
    }


  return (
    <div>ItemCount</div>
  )
}

export default ItemCount