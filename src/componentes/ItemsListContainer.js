import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs,where,query } from 'firebase/firestore'
import ItemList from './ItemList'






const ItemsListContainer = ({greeting}) => {

  

  const [item,setItem] =useState([])
  const {id} = useParams()
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const querydb = getFirestore()
    const queryColletion = collection(querydb,'products')
    console.log(queryColletion)
    if(id){
      const queryFilter = query(queryColletion, where('categoryId','==',id), )
      getDocs(queryFilter).then((res)=>{
        const itemsData = res.docs.map((p)=> ({id: p.id, ...p.data()})) 
        setItem(itemsData)
        setLoading(false)
        console.log(itemsData)

      })
      .catch((error) => {
        console.error('error al cargar los datos')
        setLoading(false)
      })

    } else{

      getDocs(queryColletion).then((res)=>{
        const itemsData = res.docs.map((p)=>({id: p.id, ...p.data()}))
        setItem(itemsData)
        setLoading(false)
        console.log(itemsData) 
      })
    }
  
  },[id])

  





  return (
    <div className='container max-w-full'>
      <h1>{greeting}</h1>
      {loading ? (<p>Cargando productos...</p>):(
      
      <ItemList item={item}/>
      
      )}
    </div>
  )
}

export default ItemsListContainer