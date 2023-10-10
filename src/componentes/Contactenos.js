import React from 'react'
import iconcart from './iconos/letter.png'
import iconWhatsapp from './iconos/whatsapp.png'

const Contactenos = () => {
  return (
    <section  className='contacto'>
        <h1 className='text-3xl  text-center font-serif mt-8'>
            Hola Estamos para Servirte tenemos los siguientes canales para atender tus solicitudes
        </h1>
        <div className='flex justify-around items-center mt-10'>
            <div>
                <h2 className='text-4xl'>
                    Devoluciones:
                    Cra 15 #17-103
                </h2>
            </div>
            <div className='flex flex-col items-center'>
                <img src={iconWhatsapp} alt='contacto whatapp' className='w-[100px]'></img>
                <span className='text-4xl'>302-2830872</span>
            </div>
            <div className='flex flex-col items-center'>
                <img src={iconcart} alt='contacto correo' className='w-[100px]'></img>
                <span className='text-4xl'>
                    ventas@greykastore.com
                </span>
            </div>

        </div>
    </section>
  )
}

export default Contactenos