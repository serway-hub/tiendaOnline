import React, { useState,useEffect } from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import arrayProducts from '../Json/arrayProducts.json'

const ItemDetail = () => {
  const { id } = useParams()
  const [product, setproduct] = useState(null)

  useEffect(()=>{
    const getProductDetail = async () =>{
      try {
        const selectProduct = arrayProducts.find((item) => item.id === id)
        setproduct(selectProduct)
      } catch (error) {
        console.error('error fetching product detail', error)
      }
    }
    getProductDetail()
  },[id])


  

  return (
    
    <div>
      {product ? (
        
        
        
        <div>
          <div>
            {product.variant.map((item)=>(
              <div key={item.variantId}>
                <img src={item.image} alt={item.name} id={item.variantId}/>

              </div>

            ))}
          </div>
          <h1>{product.name}</h1>
          <h1>{product.category}</h1>
          <h1>{product.description}</h1>
          
          <div>
            <ItemCount/>

          </div>
          

        </div>

      ): (
        <p>capo</p>
      )}
    
    </div>
  )
}

export default ItemDetail


// detalle cuando se abre la card