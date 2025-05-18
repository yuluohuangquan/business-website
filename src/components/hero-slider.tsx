"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

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
      image: "/images/home/banner1.jpg",
      link: "/"
    },
    {
      id: 2,
      image: "/images/home/banner2.jpg",
      link: "/"
    },
    {
      id: 3,
      image: "/images/home/banner3.png",
      link: "/"
    },
    {
      id: 4,
      image: "/images/home/banner4.jpg",
      link: "/"
    }
  ];

  // 根据设备宽度设置轮播图高度
  const [bannerHeight, setBannerHeight] = useState("500px");

  useEffect(() => {
    // 设置初始高度
    updateBannerHeight();
    
    // 监听窗口大小变化
    window.addEventListener("resize", updateBannerHeight);
    
    // 清理监听器
    return () => {
      window.removeEventListener("resize", updateBannerHeight);
    };
  }, []);

  // 更新高度函数
  const updateBannerHeight = () => {
    const width = window.innerWidth;
    if (width < 640) {
      // 移动设备
      setBannerHeight("300px");
    } else if (width < 1024) {
      // 平板设备
      setBannerHeight("400px");
    } else {
      // 桌面设备
      setBannerHeight("500px");
    }
  };

  return (
    <div className="relative w-full" style={{ height: bannerHeight }}>
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
          <SwiperSlide key={slide.id} className="relative h-full flex items-center justify-center">
            {slide.link ? (
              <Link href={slide.link} className="block w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={`Banner ${slide.id}`}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain object-center"
                  />
                </div>
              </Link>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={slide.image}
                  alt={`Banner ${slide.id}`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain object-center"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}