import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import { ProductCard } from './ProductCard';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import './SliderSection.css'

export const SliderSection = ({ data }) => {

  return (
    <div className='w-full flex flex-col items-center justify-center mt-[50px] relative'>
      <div className="text-center">
        <h1 className="text-[24px] lg:text-[36px]">Conoce nuestros nuevos productos</h1>
        <p className="text-gray-200 text-[14px]  lg:text-[18px]">Lo último en maquillaje</p>
      </div>
        <Swiper
            className='swiper-slider max-w-[1080px] h-[350px] mt-4 lg:h-[400px]'
            navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next'}}
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            slidesPerGroup={2}
            pagination={{ clickable: true }}
            onSwiper={''}
            breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                  slidesPerGroup: 3
                },
                720: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                  slidesPerGroup: 3
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                  slidesPerGroup: 5
                }
        }}>
            {
              data.map( swiper => (
                <SwiperSlide key={ swiper.id } className=""> <ProductCard data={ swiper }/> </SwiperSlide>
              ))
            }

        </Swiper>
        <button 
            className="swiper-button-prev absolute left-[20%] top-[168px] hidden sm:block"
        >
            <FaChevronLeft className="text-2xl" />
        </button>
        <button 
            className="swiper-button-next absolute right-[20%] top-[168px] hidden sm:block"
        >
            <FaChevronRight className="text-2xl"/>
        </button>
    </div>
  )
}
