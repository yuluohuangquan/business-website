"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

// 导入 Swiper 样式
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideType {
  id: number;
  image: string;
  link?: string;
}

export function HeroSlider() {
  const slides: SlideType[] = [
    {
      id: 1,
      image: "/images/home/banner1.png",
      link: "/about"
    },
    {
      id: 2,
      image: "/images/home/banner2.png",
      link: "/product"
    }
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
            <div className="relative w-full h-full">
              {slide.link ? (
                <Link href={slide.link} className="block w-full h-full">
                  <Image
                    src={slide.image}
                    alt={`Banner ${slide.id}`}
                    fill
                    priority
                    className="object-cover object-center"
                  />
                </Link>
              ) : (
                <Image
                  src={slide.image}
                  alt={`Banner ${slide.id}`}
                  fill
                  priority
                  className="object-cover object-center"
                />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}