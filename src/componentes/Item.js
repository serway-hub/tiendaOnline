import React from 'react'
import { formatPrice} from '../api/apiDivisas'
import { Link } from 'react-router-dom'


const Item = ({item}) => {

    const {id,name,variant,description,category} =item

    const precioVariantes= variant.map(variant => variant.Price)

    const precioMinimo= Math.min(...precioVariantes)
    const precioMaximo= Math.max(...precioVariantes)
    const rangoPrecio = `${formatPrice(precioMinimo)}-${formatPrice(precioMaximo)}`

    const variantData = variant.map((item)=>{
        const {variantId, image,color,sizeStock,Price} = item
        return {
            variantId,
            image,
            color,
            sizeStock,
            Price

        }
    })

    const variantImage =  variantData.map((variantItem)=>(
        <img key={variantItem.variantId} src={variantItem.image} alt={name} id={variantItem.variantId} className={`w-[329.75px] h-[329.75px] variante-${variantItem.variantId}`}/>
    ));
    

    const prices = variantData.map((variantItem)=>(
        <span key={variantItem.variantId} id={variantItem.variantId} className={`price-${variantItem.variantId}`}>{formatPrice(variantItem.Price)}</span>
    ))
    const colorVariant = variantData.map((variantItem)=>(
        <button key={variantItem.color} id={variantItem.variantId} className='bg-indigo-500 w-[100px] text-[#f9f9fa] rounded-full hover:bg-[#ffa040] hover:ring-2 hover:font-medium botton-SG1 px-4 py-2 bg-[#ffa040] text-white hover:bg-blue-600  focus:ring focus:ring-blue-300 active:bg-[#5495f8] active:bg-[#ffa040]'>{variantItem.color}</button>
    ))



  return (
    
    <Link to={{pathname: `/item/${item.id}`}} className='product '>
        <div className='flex flex-col justify-center gap-[20px] mb-[20px]'>
            
            {variantImage}
    
            <div className='grid'>
                <p className='text-xl line-clamp-1'>{name}</p>
                <span className='text-2xl'>{rangoPrecio}</span>
                {prices}
            </div>

              
            
        </div>
    </Link>
  )
}

export default Item