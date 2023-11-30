import React from 'react'
import { Link } from 'react-router-dom'

export const CardDiscount = ({ fullwidth }) => {

    

  return (
    <div className={`min-w-[300px] h-[180px] flex rounded-[16px] overflow-hidden shadow-lg
                    // tablets 
                    lg:h-[280px] ${ fullwidth ? 'lg:w-[1080px]' : 'lg:w-[49%]'}`}>
        <div className='w-[55%] h-full bg-white flex flex-col py-[10px] pl-[10px] pr-[20px] justify-between
                        lg:p-[20px] lg:justify-center'>
            <div>
                <h5 className='text-[12px] uppercase text-gray-200
                                lg:text-[12px]'
                >imperdibles</h5>
                <h2 className='text-[18px] uppercase
                                lg:text-[24px]'>ofertas solo por hoy</h2>
            </div>
            <Link
                to={'/'}
                className='text-[12px] bg-gray-200 text-gray-50 font-semibold
                lg:w-[120px] lg:h-[40px] lg:flex lg:justify-center lg:items-center'
            >
                Ver más
            </Link>
        </div>
        <div className='w-[45%] h-full'>
            <img src="https://i.imgur.com/UQLnqZU.jpg" className='h-full object-cover' alt="Imagen promocional" />
        </div>
    </div>
  )
}
