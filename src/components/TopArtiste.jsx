import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css';
import {Pagination } from 'swiper';
const TopArtiste = () => {;
  return (
    <div className='mt-10   flex-col flex  font-bold text-xl    gap-4 text-white'>
      <h2>TopArtiste</h2>
      <Swiper 
      modules={[Pagination]}
      spaceBetween={5}
     
      breakpoints={{
        320: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 1.5,
        },
        968: {
          slidesPerView: 2,
        },

      }}
      className='w-full cursor-pointer'
      > <SwiperSlide >
            <img className='h-[90px] w-[90px]  rounded-full' src={img1} alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img className='h-[90px] w-[90px]  rounded-full' src={img2} alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img className='h-[90px] w-[90px]   rounded-full' src={img3} alt="" />
          </SwiperSlide>
          <SwiperSlide >
            <img className='h-[90px] w-[90px]   rounded-full' src={img4} alt="" />
          </SwiperSlide>
    </Swiper>
    </div>
  )
}

export default TopArtiste