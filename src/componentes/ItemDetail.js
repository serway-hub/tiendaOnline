import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({item}) => {




  return (
    <div>
        {/* <div>
            <img src={item.imagen} alt={item.nombre}></img>
            <div>
                <p>{item.mame}</p>
                <span>{productFinal.rangoPrecio}</span>
            </div>

        </div> */}

        <div>
            <ItemCount stockItems={10}/>
        </div>


    </div>
  )
}

export default ItemDetail


// detalle cuando se abre la card