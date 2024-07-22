import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slidesPer.css";

// import required modules
import { Navigation } from "swiper/modules";

export function SlidesPer() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        loop={true}
        centeredSlides={true}
        spaceBetween={6}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="/image/blog2.svg"
            alt="event-1"
            className="w-full rounded-md object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/blog3.svg"
            alt="event-1"
            className="w-full rounded-mdobject-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/blog4.svg"
            alt="event-1"
            className="w-full rounded-mdobject-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/blog2.svg"
            alt="event-1"
            className="w-full rounded-mdobject-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/blog3.svg"
            alt="event-1"
            className="w-full rounded-mdobject-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/blog4.svg"
            alt="event-1"
            className="w-full rounded-mdobject-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/blog2.svg"
            alt="event-1"
            className="w-full rounded-mdobject-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/blog3.svg"
            alt="event-1"
            className="w-full rounded-mdobject-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/image/blog4.svg"
            alt="event-1"
            className="w-full rounded-mdobject-cover"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
