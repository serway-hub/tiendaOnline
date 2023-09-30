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
                        <button key={item.variantId} className='bg-indigo-500 w-[100px] text-[#f9f9fa] rounded-full hover:bg-[#ffa040] hover:ring-2 hover:font-medium'>{item.color}</button>
                        
                      ))}
                    </div>

                  </span>

                  {product.variant.map((item)=>(
                    <div key={item.variantId} className='flex gap-[10px] mb-[10px] mt-[40px]'>
                      <span>Talla:</span>
                      {item.sizeStock.map((itemSise) => (
                        
                        <button key={itemSise.size} className='bg-[#0085d0] w-[3rem] h-[3rem] rounded-lg text-[#ffffff] font-bold'>{itemSise.size}</button>
                        
                      ))}
                    </div>
                  ))}

                </div>
                <div className='w-full'>
                  {product.variant.map((item)=>(
                    <span key={item.variantId} className={`w-full h-auto text-2xl variationImage-${item.variantId}`}>{formatPrice(item.Price)}</span>  
                  ))}
                  
                  <div>
                    <ItemCount stockItems={product.variant.reduce((acc,variant) => acc + variant.sizeStock.length,0)}/>

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