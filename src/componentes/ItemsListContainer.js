import React from 'react'
import { useState,useEffect,useContext} from 'react'
import { useParams } from 'react-router-dom'
import arrayProducts from '../Json/arrayProducts.json'
import ItemList from './ItemList'






const ItemsListContainer = ({greeting}) => {

  

  const [item,setItem] =useState([])
  const {id} = useParams()
  const [loading,setLoading] = useState(true)

  



  useEffect(()=>{

    const fetchData = async () =>{
      try{
        const data = await new Promise((resolve)=>{
          setTimeout(()=>{
            resolve(id ? arrayProducts.filter(item => item.category === id) : arrayProducts)
          },1000)
        })
        setItem(data)
        setLoading(false)
      } catch(error){
        console.log('error:',error)
      }
    }
    fetchData()

  },[id])


  return (
    <div className='container'>
      <h1>{greeting}</h1>
      {loading ? (<p>Cargando productos...</p>):(
      
      <ItemList item={item}/>
      
      )}
    </div>
  )
}

export default ItemsListContainer