import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";


const images = [
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681492244799-f559a49e767f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1683141168204-7e5f85e820bb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

const Slider = () => {
  return (
    <Swiper
      className="mySwiper h-[80vh] w-full"
      spaceBetween={30}
      slidesPerView={1}
      loop={true} 
      autoplay={{ delay: 3000, disableOnInteraction: false }}  
      pagination={{ clickable: true }} 
      navigation={true} 
      modules={[Autoplay, Navigation, Pagination]}
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="h-full w-full">
          <img src={src} alt={`Slide ${index + 1}`} className="slider-img w-full h-full object-cover brightness-70 contrast-90" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
