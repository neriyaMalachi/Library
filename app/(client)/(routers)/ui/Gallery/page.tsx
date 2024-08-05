'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import image1 from '@/assets/ImageForZoomFile.png'
import image2 from '@/assets/logo.png'
import image3 from '@/assets/logoWithBackround.jpg'
import image4 from '@/assets/bg-main-mobile.png'
import image5 from '@/assets/bg-card-front.png'
import image6 from '@/assets/icon-complete.svg'
import Image from "next/image";



const page = () => {
  return (
      <section className="w-[90%] border border-solid p-2 flex flex-col justify-center text-center">
       <h1 className="text-xl font-bold">Swiper Images</h1>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className=" rounded-lg text-black "
        >
          <SwiperSlide>
            <Image src={image1} alt="image1" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image2} alt="image2" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image3} alt="image3" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image4} alt="image4" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image5} alt="image5" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={image6} alt="image6" />
          </SwiperSlide>
        </Swiper>
      </section>
  );
};

export default page;
