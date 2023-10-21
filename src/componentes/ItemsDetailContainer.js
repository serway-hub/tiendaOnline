import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from './ItemDetail'

const ItemsDetailContainer = () => {
    const [item,setItem] =useState([])
    const {id} = useParams()
  
  
    useEffect(()=>{
        const querydb = getFirestore()
        const queryDoc = doc(querydb, 'products', id)
        getDoc(queryDoc).then((res) => setItem({id: res.id, ...res.data()}))
    },[id])
  
  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemsDetailContainer