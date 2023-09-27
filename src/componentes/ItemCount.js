import React from 'react'
import { useState } from 'react'


const ItemCount = ({stockItems}) => {
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
    <div>
        <div>
            <button type='button' onClick={minusStock}>-</button>
            <button type='button'>{counter}</button>
            <button type='button' onClick={plusStock}>+</button>
            
        </div>
        <div>
            <button>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount