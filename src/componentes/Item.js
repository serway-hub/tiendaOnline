import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({item}) => {
    const {id,name,variant,description,category} =item

    const precioVariantes= variant.map(variant => variant.Price)

    const precioMinimo= Math.min(...precioVariantes)
    const precioMaximo= Math.max(...precioVariantes)
    const rangoPrecio = `${precioMinimo}-${precioMaximo}`

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
    console.log(variantImage)

    const prices = variantData.map((variantItem)=>(
        <span key={variantItem.variantId} id={variantItem.variantId}>{variantItem.Price}</span>
    ))
    const colorVariant = variantData.map((variantItem)=>(
        <button key={variantItem.color} id={variantItem.variantId}>{variantItem.color}</button>
    ))


  return (
    
    <Link to={{pathname: `/item/${item.id}`,state:{item}}} className='product'>
        <div className='flex'>
            <div>
                {variantImage}
                <div>
                    <p>{name}</p>
                    <span>{rangoPrecio}</span>
                    {prices}
                </div>
                <div>
                    {colorVariant}
                </div>
            </div>
        </div>
    </Link>
  )
}

export default Item