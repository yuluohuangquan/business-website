"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

// 导入 Swiper 样式
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideType {
  id: number;
  gradientFrom: string;
  gradientTo: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

export function HeroSlider() {
  const slides: SlideType[] = [
    {
      id: 1,
      gradientFrom: "from-blue-900",
      gradientTo: "to-blue-600",
      title: "减振及流体控制专家",
      description: "致力于创造和供应创新高效节能的产品",
      buttonText: "了解更多",
      buttonLink: "/about"
    },
    {
      id: 2,
      gradientFrom: "from-indigo-900",
      gradientTo: "to-indigo-600",
      title: "高品质产品与服务",
      description: "业务覆盖水工业，节能产品及流体控制、减振降噪等行业",
      buttonText: "查看产品",
      buttonLink: "/product"
    },
    {
      id: 3,
      gradientFrom: "from-sky-900",
      gradientTo: "to-sky-600",
      title: "国际认证品质",
      description: "ISO9001、ISO14001、ISO18001等多项认证",
      buttonText: "联系我们",
      buttonLink: "/contactus"
    },
  ];

  return (
    <div className="relative w-full h-[500px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradientFrom} ${slide.gradientTo} flex items-center justify-center`}>
              <div className="text-center text-white px-4 md:px-0 max-w-4xl">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-xl mb-8">{slide.description}</p>
                {slide.buttonText && slide.buttonLink && (
                  <Link 
                    href={slide.buttonLink}
                    className="inline-block px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-blue-50 transition-colors"
                  >
                    {slide.buttonText}
                  </Link>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}