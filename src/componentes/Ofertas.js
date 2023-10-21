import React,{useEffect,useState} from 'react'
import Item from './Item'
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore'

const Ofertas = () => {
  const [item,setItems] =useState([])
  
  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const productsCollection = collection(db, 'products');

      // Crear una consulta para filtrar por la categoría 'ofertas'
      const q = query(productsCollection, where('categoryId', '==', 'ofertas'));

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
    <div className='grid grid-cols-3'>
      {item.map(item => (
        <Item key={item.id} item={item}/>
      ))}
      

    </div>
  )
}

export default Ofertas