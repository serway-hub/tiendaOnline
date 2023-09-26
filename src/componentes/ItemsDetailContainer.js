import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import arrayProducts from '../Json/arrayProducts.json'
import ItemDetail from './ItemDetail'

const ItemsDetailContainer = () => {
    const [item,setItem] =useState([])
    const {id} = useParams()
  
  
    useEffect(()=>{
        const promesa = new Promise ((resolve)=>{
            setTimeout(()=>{
                resolve(arrayProducts.find(item=> item.id === parseInt(id)))
            },3000)
        })
        promesa.then((data)=>{
            setItem(data)
        }) 
    },[id])
  
  return (
    <div>
        <ItemDetail item={item}/>
    </div>
  )
}

export default ItemsDetailContainer