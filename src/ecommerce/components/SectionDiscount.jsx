import React from 'react'
import { CardDiscount } from './CardDiscount'


export const SectionDiscount = () => {
  return (
    <section className='w-full flex justify-center items-center min-h-[400px] mt-12'>
      <div className='gridprueba w-[90%] flex flex-col flex-wrap justify-between items-center gap-5 
                      lg:w-[1080px] lg:flex-row lg:overflow-hidden '>
        <CardDiscount />
        <CardDiscount />
      </div>
    </section>
  )
}
