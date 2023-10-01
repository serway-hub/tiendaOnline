import React, { useState,useEffect } from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import arrayProducts from '../Json/arrayProducts.json'
import { formatPrice} from '../api/apiDivisas'

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

  const precioVariantes = product.variant.map(variant => variant.Price)

  const precioMinimo  = Math.min(...precioVariantes)
  const precioMaximo = Math.max(...precioVariantes)

  const rangoPrecio = `${formatPrice(precioMinimo)}-${formatPrice(precioMaximo)}`


  

  return (
    
    <div className='mt-[30px]'>
      {product ? (
        <div className='flex flex-row ml-5 mr-5'>
          <div className='imageCol w-[40%]'>
            {product.variant.map((item)=>(
              <img key={item.variantId} src={item.image} alt={item.name} id={item.variantId} className={`w-full h-[589.75px] variationImage-${item.variantId}`}/> 
            ))}
          </div>
          <div className='ml-5 mr-5 flex flex-col w-[60%]'>
              <div className='text-3xl'>
                <h2>{product.name}</h2>

              </div>
              <div className='flex justify-around mt-[20px]'>
                <div className='w-full'>

                  <span className='flex flex-col'>
                    <span>Color:</span>
                    <div className='flex text-2xl gap-[20px] '>

                      {product.variant.map((item)=>(
                        <button key={item.variantId} className='bg-blue-600 w-[100px] text-[#f9f9fa] rounded-full hover:bg-[#ffa040] hover:ring-4 hover:font-medium  px-4 py-2 text-white focus:ring focus:bg-[#ffa040] active:bg-[#ffa040]'>{item.color}</button>
                        
                      ))}
                    </div>

                  </span>

                  {product.variant.map((item)=>(
                    <div key={item.variantId} className='flex gap-[10px] mb-[10px] mt-[40px]'>
                      <span>Talla:</span>
                      {item.sizeStock.map((itemSise) => (
                        
                        <button id={product.id} value={item.variantId}key={itemSise.size} className='bg-blue-600 w-[3rem] h-[3rem]text-[#f9f9fa] rounded-full hover:bg-[#ffa040] hover:ring-4 hover:font-medium  px-4 py-2 text-white focus:ring focus:bg-[#ffa040] active:bg-[#ffa040]'>{itemSise.size}</button>
                        
                      ))}
                    </div>
                  ))}

                </div>
                <div className='w-full'>
                  <div className='flex flex-col'>

                    <span className='text-3xl'>{rangoPrecio}</span>
                    {product.variant.map((item)=>(
                      
                      <span key={item.variantId} className={`w-full h-auto text-2xl variationImage-${item.variantId}`}>{formatPrice(item.Price)}</span>  
                    ))}
                  </div>
                  
                  <div>
                    <ItemCount stockItems={10}/>
                    <span></span>
                  </div>
                </div>
              </div>
            
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