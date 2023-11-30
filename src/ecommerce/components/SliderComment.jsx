
import { Comments } from './Comments'

import { Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './SliderComment.css'

export const SliderComment = ({ data }) => {
  return (
    <section className='w-full flex flex-col justify-center items-center gap-4 mt-[10px] lg:mt-[30px]'>
        <div className='title py-5 text-center'>
          <h1 className='text-[24px] lg:text-[36px]'>Algunos comentarios de nuestros clientes</h1>
        </div>
        <Swiper
        modules={[Navigation, Autoplay]}
        className='slider-comment max-w-[1080px] w-[1080px] h-[450px]'
        spaceBetween={5}
        slidesPerView={1}
        slidesPerGroup={1}
        pagination={{ clickable: true }}
        autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
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
            slidesPerView: 3,
            spaceBetween: 10,
            slidesPerGroup: 3
            }
        }}>
        {
            data.map( swiper => (
                <SwiperSlide key={ swiper.id } className="">
                  <Comments data={ swiper }/>
                </SwiperSlide>
            ))
            }

        </Swiper>
    </section>
  )
}
