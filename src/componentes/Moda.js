import React from 'react'
import Item from './Item'
import arrayproduct from '../Json/arrayProducts.json'

const Moda = () => {
  const modaItems = arrayproduct.filter(item => item.category === 'moda');

  return (
    <div>
      {modaItems.map(item => (
        <Item key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default Moda