import React from 'react'
import { formatPrice} from '../api/apiDivisas'
import { Link } from 'react-router-dom'


const Item = ({item}) => {

    

    const {id,idP,name,description,categoryId,variant} = item

   console.log(variant)
    

   

    const precioVariantes= variant.map(variant => variant.price)

    const precioMinimo= Math.min(...precioVariantes)
    const precioMaximo= Math.max(...precioVariantes)
    const rangoPrecio = `${formatPrice(precioMinimo)}-${formatPrice(precioMaximo)}`


    

    const variantImage =  variant.map((variantItem)=>(
        <img key={variantItem.variantId} src={variantItem.image} alt={name} id={variantItem.variantId} className={`w-[329.75px] h-[329.75px] variante-${variantItem.variantId}`}/>
    ));
    

    const prices = variant.map((variantItem)=>(
        <span key={variantItem.variantId} id={variantItem.variantId} className={`price-${variantItem.variantId}`}>{formatPrice(variantItem.price)}</span>
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