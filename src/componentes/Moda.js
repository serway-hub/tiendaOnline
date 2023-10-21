import React from 'react'
import Item from './Item'
import { useState,useEffect } from 'react'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'


const Moda = () => {
  const [item,setItems] =useState([])
  
  
  
  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, 'products');

      // Crear una consulta para filtrar por la categoría 'ofertas'
      const q = query(productsCollection, where('categoryId', '==', 'moda'));

      try {
        const querySnapshot = await getDocs(q);

        const itemsData = [];
        querySnapshot.forEach((doc) => {
          itemsData.push({ id: doc.id, ...doc.data() });
        });

        setItems(itemsData);
      } catch (error) {
        console.error('Error al cargar los datos', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {item.map(item => (
        <Item key={item.id} item={item}/>
      ))}
    </div>
  )
}

export default Moda