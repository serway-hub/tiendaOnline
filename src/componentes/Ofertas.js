import React from 'react'
import Item from './Item'
import arrayproduct from '../Json/arrayProducts.json'

const Ofertas = () => {
  const ofertasItems = arrayproduct.filter(item => item.category === 'ofertas');

  
  return (
    <div className='grid grid-cols-3'>
      {ofertasItems.map(item => (
        <Item key={item.id} item={item}/>
      ))}
      

    </div>
  )
}

export default Ofertas