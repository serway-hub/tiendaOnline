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
        <div className='mb-[30px] mt-[30px]'>
            <button className="bg-[#eeeeee] w-[30px] h-[30px] text-2xl" type='button' onClick={minusStock}>-</button>
            <button  className='button w-[40px] text-2xl'>{counter}</button>
            <button className="bg-[#eeeeee] w-[30px] h-[30px] text-2xl" type='button' onClick={plusStock}>+</button>
            
        </div>
        <div>
            <button className='bg-indigo-500 w-full h-[60px] text-[#f9f9fa] rounded-full hover:bg-[#ffa040] hover:ring-2 hover:font-medium text-2xl '>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount