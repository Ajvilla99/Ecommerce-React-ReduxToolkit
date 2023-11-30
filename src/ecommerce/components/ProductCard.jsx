import React from 'react'
import './ProductCard.css'

export const ProductCard = ({ data }) => {

    
    const { name, price, imageUrl } = data;

  return (
    <div className='product-card w-[200px] max-w-[200px] h-[360px] flex flex-col justify-between rounded-[16px] overflow-hidden bg-white'>
        <div className='w-full'>
            <img src={imageUrl} alt="" className='w-full'/>
        </div>
        <div className='w-full min-h-[85px]'>
            <div className='h-full flex flex-col px-2 items-center justify-around lg:justify-between'>
                <h4 className="text-[16px] font-medium text-center line-clamp-2">{name}</h4>
                <div className=''>
                    <span className='text-[16px]'>$ {price}</span>
                </div>
            </div>
        </div>
        <button className='bg-gray-200 text-gray-100 p-[13px] h-[50px] w-[100%] relative'>
            Comprar ahora
            <span className='animation-btn-shop'></span>
        </button>
    </div>
  )
}
