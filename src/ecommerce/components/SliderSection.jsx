import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { ProductCard } from './ProductCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './SliderSection.css'

export const SliderSection = ({ data }) => {


  return (
    <div className='w-full flex flex-col items-center justify-center mt-[50px] relative'>
      <div className="text-center mb-5">
        <h1 className="text-[24px] lg:text-[36px]">Conoce nuestros nuevos productos</h1>
        <p className="text-gray-200 text-[14px]  lg:text-[18px]">Lo último en maquillaje</p>
      </div>
        <Swiper
            className='w-11/12 h-[300px]
                       lg:w-[80%] lg:h-[360px]
                       xl:w-[1080px] '
            navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next'}}
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            slidesPerGroup={2}
            pagination={{ clickable: true }}
            breakpoints={{
                620: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                  spaceBetween: 10,

                },
                720: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                  slidesPerGroup: 4
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10,
                  slidesPerGroup: 5
                }
        }}>
            {
              data.map( swiper => (
                <SwiperSlide key={ swiper.id }> <ProductCard data={ swiper }/> </SwiperSlide>
              ))
            }

        </Swiper>
        <button 
            className="swiper-button-prev absolute hidden lg:block lg:left-[5%] xl:left-[19%] "
        >
            <FaChevronLeft className="text-2xl" />
        </button>
        <button 
            className="swiper-button-next absolute  hidden lg:block lg:right-[5%] xl:right-[19%]"
        >
            <FaChevronRight className="text-2xl"/>
        </button>
    </div>
  )
}
