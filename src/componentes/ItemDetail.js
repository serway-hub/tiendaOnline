import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ location }) => {

  const {item} =location.state
  const { id, name, variant, description, category } = item;

  const varianData =variant.map((item) => {
    const {variantId, image,color,sizeStock,Price} =item
    return {
      variantId,
      image,
      color,
      sizeStock,
      Price

    }
  })
  const variantImage =  varianData.map((variantItem)=>(
    <img key={variantItem.variantId} src={variantItem.image} alt={name} id={variantItem.variantId} className={`w-[329.75px] h-[329.75px] variante-${variantItem.variantId}`}/>
  ));
console.log(variantImage)

  
  return (
    <div>
        

    </div>
  )
}

export default ItemDetail


// detalle cuando se abre la card