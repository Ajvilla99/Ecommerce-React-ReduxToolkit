import React, { useRef } from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom';

export const ProductCard = ({ data }) => {

    const { name, price, imageUrl, id } = data;
    
    const pruebaRef = useRef(null);
    const getProductId = (productId) => {
        console.log(productId)
        pruebaRef.current.click()
    }

  return (
    <div onClick={() => getProductId(id)} className='w-full max-w-[200px] h-64 overflow-hidden rounded-md bg-white shadow-lg cursor-pointer
                    lg:h-80 lg:max-w-[220px] lg:hover:shadow-xl lg:duration-300 lg:rounded-lg'>
        <div className='w-full h-full'>
            <div className='w-full h-2/3 flex justify-center'>
                <img src={imageUrl} alt="" className='object-contain max-h-full max-w-full'/>
            </div>
            <div className='bg-white h-[calc(100%-66%)] flex flex-col items-center justify-around p-3'>
                <p className='text-sm text-gray-200 line-clamp-1
                              lg:line-clamp-2 lg:text-center'>{name}</p>
                <p className='text-lg text-gray-200 font-medium'>$ {price}</p>
                <Link ref={pruebaRef} to={'/product'} className='hidden'></Link>
            </div>
        </div>
    </div>
  )
}
