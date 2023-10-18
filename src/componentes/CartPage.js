import React,{useContext,useEffect,useState} from 'react'
import { cartContext } from './contex/CartContex'
import { formatPrice } from '../api/apiDivisas'
import Swal from 'sweetalert2'


const CartPage = () => {
    
    const {cart} = useContext(cartContext)
    const [items, setItems] = useState(cart);

    const plusItem = (itemId) => {

        const updatedItems = items.map((item,index) => {
            console.log(item.id)
            console.log(item.quantity)
            if (index === itemId && item.quantity < item.stock) {
                return { ...item, quantity: item.quantity + 1 };
            } else{
                Swal.fire({
                    icon: 'info',
                    text: `La cantidad no puede ser mayor a  ${item.quantity} unidades`
                })
            }
            return item;

        });
        console.log(updatedItems)
        setItems(updatedItems);
    };

    const minusItem = (itemId) => {
        
        const updatedItems = items.map((item,index) => {
            console.log(item.id)
            console.log(item.quantity)
            if (index === itemId && item.quantity > 0) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        console.log(updatedItems)
        setItems(updatedItems);

    };

    const removeItem= (itemId) =>{
        const updatedItems = items.filter((item,index) => index !== itemId)

        setItems(updatedItems)
    }

    useEffect(() => {
        // Actualiza el estado de items cuando cambia cart
        setItems(cart);
    }, [cart]);

    
  return (
    <div className='bg-[#ebebeb] grid grid-cols-[2fr,1fr]'>
        <div className='pb-[30px]'>
            <div className='flex pt-[30px] pl-[30px] gap-[5px]'>
                <p className='text-2xl font-semibold'>Carro</p>
                <p className='text-2xl'>({items.reduce((acc,item) => acc + item.quantity,0)} productos)</p>
                
            </div>
            <div className='w-full'>
                {items.map((item,index) => (
                    <div key={index} className='pt-[30px] pb-[30px] px-7 rounded-t-xl ' > 
                        <section className='bg-[#ffffff] flex justify-stretch rounded-lg items-center gap-[25px]'>

                            <img src={item.image} className='w-24'></img>
                            <div>
                                <span className='text-xl'>{item.name}</span>
                                <div className='flex w-full gap-[70px] items-center'>

                                    <div className='flex flex-col gap-[10px]'>
                                        
                                        <span>Color: {item.Color}</span>
                                        <span>Talla: {item.talla}</span>
                                        
                                    </div>
                                    <div>
                                        <span className='text-2xl'>{formatPrice(item.price)}</span>

                                    </div>
                                    <div className='flex gap-[10px]'>

                                        <div>
                                            <button className="bg-[#eeeeee] w-[30px] h-[30px] text-2xl" type='button' onClick={()=>minusItem(index)}>-</button>
                                            <button  className='button w-[40px] text-2xl'>{item.quantity}</button>
                                            <button className="bg-[#eeeeee] w-[30px] h-[30px] text-2xl" type='button' onClick={()=>plusItem(index)}>+</button>
                                        </div>
                                        <div className='flex items-center gap-[5px] '>
                                            
                                            <span>Maximo</span>
                                            {item.stock}
                                            <span> unidades </span>
                                        </div>
                                    </div>
                                    <button className='bg-[#ff8117] w-8 text-[#ffffff] rounded-lg' onClick={()=> removeItem(index)}>X</button>
                                </div>
                            </div>
                        </section>
                        
                    </div>
                ))}
            </div>
        </div>
        <section className='flex flex-col w-10/12 '>
            <div className='pt-[30px] pb-[30px]'>
              <h2 className='text-2xl font-semibold'>Resumen de la orden</h2>
            </div>
            <div className='bg-[#ffffff] p-[25px] rounded-lg'>
                <div></div>
                <div>
                    <div className='flex flex-col gap-[5px] mb-[10px]'>
                        <div className='flex justify-between'>

                            <p className='font-semibold text-xl'>Productos ({items.reduce((acc,item) => acc + item.quantity,0)})</p>
                            <span className='text-xl font-semibold'>{formatPrice(items.reduce((acc,item) => acc + (item.price * item.quantity),0))}</span>

                        </div>
                        <div className='flex justify-between'>
                            <p className='text-xl font-semibold'>Total:</p>
                            <span className='text-xl font-semibold'>{formatPrice(items.reduce((acc,item) => acc + (item.price * item.quantity),0))}</span>
                        </div>
                        
                    </div>
                </div>
                <button type="button" className='bg-[#ff8117] rounded-full w-full text-2xl font-semibold text-[#ffffff] pt-[10px] pb-[10px]'>Finalizar Compra</button>
            </div>
        </section>
    </div>
  )
}

export default CartPage