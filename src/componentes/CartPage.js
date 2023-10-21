import React,{useContext,useEffect,useState} from 'react'
import { cartContext } from './contex/CartContex'
import { formatPrice } from '../api/apiDivisas'
import Swal from 'sweetalert2'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { Link } from 'react-router-dom'


const CartPage = () => {
    
    const {cart,removeItem,updateQuantity,cleartCart} = useContext(cartContext)
    const [items, setItems] = useState(cart);
    console.log(items)

    const totalPrice= formatPrice(items.reduce((acc,item) => acc + (item.price * item.quantity),0))

    const order={
        buyer:{
            name: 'jorge luis contreras',
            email: 'george@gmail.com',
            phone: '3153276899',
            address: 'cra 15 #16-25'
        },
        items: items.map((item) =>({
            id: item.id,
            title: item.name,
            price: item.price,
            quantity: item.quantity

        })),
        total:totalPrice
    }
    const handleClick =()=>{
        const db = getFirestore()
        const ordersColletion = collection(db, 'orders')
        addDoc(ordersColletion,order).then(({id})=> console.log(id))

    }

   

    const plusItem = (itemId) => {

        const updatedItems = items.map((item) => {
       
            if (item.id === itemId && item.quantity < item.stock) {
                const updatedItem = { ...item, quantity: item.quantity + 1 };
                updateQuantity(updatedItem)
               
                return { ...item, quantity: item.quantity + 1 };
            } 
            
            return item;

        });
        console.log(updatedItems)
        setItems(updatedItems);
    };

    const minusItem = (itemId) => {
        
        const updatedItems = items.map((item) => {     
            if (item.id === itemId && item.quantity > 1) {
                const updatedItem = { ...item, quantity: item.quantity - 1 };
                updateQuantity(updatedItem)
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        console.log(updatedItems)
        setItems(updatedItems);

    };

    const handleRemove = (index) =>{
        removeItem(index)
    }

    const  handleRomoveAllItems= () => {
        cleartCart()

    }

    useEffect(() => {
        // Actualiza el estado de items cuando cambia cart
        setItems(cart);
    }, [cart]);

    if (cart.legth === 0){
        return(
            <>
            <p>Hola no hay productos en tu Carrito</p>
            <Link to='/'> Hacer una compra</Link>
            
            </>
        )
    }

    
  return (
    <div className='bg-[#ebebeb] grid grid-cols-[2fr,1fr]'>
        <div className='pb-[30px]'>
            <div className='flex pt-[30px] pl-[30px] justify-between pr-[30px] '>
                <div className='flex '>
                    <p className='text-2xl font-semibold'>Carro</p>
                    <p className='text-2xl'>({items.reduce((acc,item) => acc + item.quantity,0)} productos)</p>
                </div>
                <button className='text-2xl font-semibold text-[#ffffff] bg-[#ff8117] rounded-full pl-[20px] pr-[20px]' onClick={()=>handleRomoveAllItems()}>Vaciar Carrito</button>
                
            </div>
            <div className='w-full'>
                {items.map((item,index) => (
                    <div key={index} className='pt-[30px] pb-[30px]  px-7 rounded-t-xl ' > 
                        <section className='bg-[#ffffff] flex justify-stretch rounded-lg items-center gap-[25px]'>

                            <img src={item.image} className='w-24'></img>
                            <div>
                                <span className='text-xl'>{item.name}</span>
                                <div className='flex w-full gap-[50px] items-center'>

                                    <div className='flex flex-col gap-[10px]'>
                                        
                                        <span>Color: {item.Color}</span>
                                        <span>Talla: {item.talla}</span>
                                        
                                    </div>
                                    <div>
                                        <span className='text-2xl'>{formatPrice(item.price)}</span>

                                    </div>
                                    <div className='flex gap-[10px]'>

                                        <div>
                                            <button className="bg-[#eeeeee] w-[30px] h-[30px] text-2xl" type='button' onClick={()=>minusItem(item.id)}>-</button>
                                            <button  className='button w-[40px] text-2xl'>{item.quantity}</button>
                                            <button className="bg-[#eeeeee] w-[30px] h-[30px] text-2xl" type='button' onClick={()=>plusItem(item.id)}>+</button>
                                        </div>
                                        <div className='flex items-center gap-[5px] '>
                                            
                                            <span>Maximo</span>
                                            {item.stock}
                                            <span> unidades </span>
                                        </div>
                                    </div>
                                    <button className='bg-[#ff8117] w-8 text-[#ffffff] rounded-lg' onClick={()=> handleRemove(index)}>X</button>
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
                <button type="button" className='bg-[#ff8117] rounded-full w-full text-2xl font-semibold text-[#ffffff] pt-[10px] pb-[10px]' onClick={handleClick}>Finalizar Compra</button>
            </div>
        </section>
    </div>
  )
}

export default CartPage