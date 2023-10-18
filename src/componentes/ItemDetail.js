import React, { useState,useEffect } from 'react'
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom'
import arrayProducts from '../Json/arrayProducts.json'
import { formatPrice} from '../api/apiDivisas'
import Item from './Item'
import logo from '../componentes/iconos/greyka_store_logo.webp'


const ItemDetail = () => {
  const { id } = useParams()
  const [product, setproduct] = useState(null)
  const [showFirstImage, setShowFirstImage] = useState(true)
  const [showSecondImage, setShowSecondImage] = useState(false)
  const [selectImage, setSelectImage] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedPrecio, setSelectedPrecio] = useState(null)
  const [showRangePrice, setShowRangePrice] = useState(true)
  const [showFirtsPrice, setShowFirtsPrice] = useState(false)
  const [showSecondPrice, setShowSecondPrice] = useState(false)
  
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

  const precioVariantes = product ? product.variant.map(variant => variant.Price) : []

  const precioMinimo  = Math.min(...precioVariantes)
  const precioMaximo = Math.max(...precioVariantes)

  const rangoPrecio = `${formatPrice(precioMinimo)}-${formatPrice(precioMaximo)}`
  
  const handleColorClick = (item) => {
    if (item.variantId === 'SG1') {
      setShowFirstImage(true);
      setShowSecondImage(false)
      setShowRangePrice(false)
      setShowFirtsPrice(true)
      setShowSecondPrice(false)
      
    } else if (item.variantId === 'SG2') {
      setShowFirstImage(false);
      setShowSecondImage(true);
      setShowRangePrice(false)
      setShowFirtsPrice(false)
      setShowSecondPrice(true)
    }
    setSelectedColor(item.color)
    setSelectedPrecio(item.Price)
    setSelectImage(item.image)
    
  };

   // Función para manejar la selección de talla
   const handleSizeClick = (itemSize) => {
    setSelectedSize(itemSize.size);
  };

  return (
    
    <div className='mt-[30px]'>
      {product ? (
        <div className='flex flex-row ml-5 mr-5'>
          <div className='imageCol w-[40%]'>
            {product.variant.map((item)=>(
              <img key={item.variantId} src={item.image} alt={item.name} id={item.variantId} className={`w-full h-[589.75px] ${
                  showFirstImage && item.variantId === 'SG1'
                    ? ''
                    : showSecondImage && item.variantId === 'SG2'
                    ? ''
                    : 'hidden'
                }`}/> 
            ))}
          </div>
          <div className='ml-5 mr-5 flex flex-col w-[60%]'>
              <div className='text-3xl'>
                <h2>{product.name}</h2>
              </div>
              <div className='flex justify-around mt-[20px]'>
                <div className='w-full'>
                  <div className='flex items-center'>
                    <span>Vendido por </span>
                    <img src={logo} className='w-[40px]'></img>
                    <span className=''>Greyka Store</span>

                  </div>

                  <span className='flex flex-col'>
                    <span>Color:</span>
                    <div className='flex text-2xl gap-[20px] '>

                      {product.variant.map((item)=>(
                        <button key={item.variantId} className={`bg-blue-600 w-auto text-[#f9f9fa] rounded-full hover:bg-[#ffa040] hover:ring-4 hover:font-medium  px-4 py-2 text-white focus:ring-4 focus:bg-[#ffa040] active:bg-[#ffa040] ${
                          selectedColor === item.variantId ? 'focus:ring-4 focus:bg-[#ffa040] active:bg-[#ffa040]' : 'bg-blue-600'
                        }`} 
                        onClick={() => 
                          handleColorClick(item)         
                        }>{item.color}</button>
                        
                      ))}
                    </div>

                  </span>

                  { product.variant.map((item)=>(
                    <div key={item.variantId} id={item.variantId} value={product.id} className={`flex gap-[10px] mb-[10px] mt-[40px] ${
                      showFirstImage && item.variantId === 'SG1'
                        ? ''
                        : showSecondImage && item.variantId === 'SG2'
                        ? ''
                        : 'hidden'
                    }`}>
                      <span>Talla:</span>
                      {item.sizeStock.map((itemSise) => (
                        
                        <button 
                        id={product.id} 
                        value={item.variantId} 
                        key={itemSise.size} 
                        className={`bg-blue-600 w-[80px] h-[3rem]text-[#f9f9fa] rounded-full hover:bg-[#ffa040] hover:ring-4 hover:font-medium  px-4 py-2 text-white focus:ring focus:bg-[#ffa040] active:bg-[#ffa040]${
                          selectedSize === itemSise.size ? 'focus:ring-4 focus:bg-[#ffa040] active:bg-[#ffa040]' : ''
                        }}`
                      
                        }
                        onClick={()=> handleSizeClick(itemSise)
                        }
                        
                        >{itemSise.size}</button>
                        
                      ))}
                    </div>
                  ))}

                </div>
                <div className='w-full'>
                  <div className='flex flex-col'>

                    <span className={`text-3xl ${
                      showRangePrice ? '': 'hidden'

                    }`} >{rangoPrecio}</span>
                    {product.variant.map((item)=>(
                      
                      <span key={item.variantId} className={`w-full h-auto text-3xl variationPrice-${item.variantId} 
                      ${
                        
                        showFirtsPrice && showSecondPrice ? '': showFirtsPrice && item.variantId === 'SG1' ? '': showSecondPrice && item.variantId ==='SG2'? '': 'hidden'
                       
                      }
                    
                      `}>{formatPrice(item.Price)}</span>  
                    ))}
                  </div>
                  
                  <div>
                    <ItemCount 
                      productId = {product.id}
                      productImage={selectImage}
                      producName ={product.name}
                      productSize={selectedSize}
                      productprice={selectedPrecio}
                      productcolor={selectedColor}
                      stockItems={
                        product.variant.find(
                          (item) =>
                            (showFirstImage && item.variantId === 'SG1') ||
                            (showSecondImage && item.variantId === 'SG2')
                        ).sizeStock.find((itemSize) => itemSize.size === selectedSize)?.quantity || 12
                      }
                      productStock ={product.variant.find((item) =>
                        (showFirstImage && item.variantId === 'SG1') ||
                          (showSecondImage && item.variantId === 'SG2')
                        ).sizeStock.find((itemSize) => itemSize.size ===selectedSize)?.quantity || 12}
                      
                      />
                    <span className='flex absolute gap-[5px] top-[258px] left-[1050px]'>
                      <p>Maximo</p>
                      {product.variant.find(
                          (item) =>
                            (showFirstImage && item.variantId === 'SG1') ||
                            (showSecondImage && item.variantId === 'SG2')
                        ).sizeStock.find((itemSize) => itemSize.size === selectedSize)?.quantity || 12
                      }
                      <p> disponibles</p>

                    </span>
                   
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