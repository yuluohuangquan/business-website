"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import {
  getArticles,
  getStrapiMediaUrl,
  type HomeBannerArticle,
} from "@/lib/strapi";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideType {
  id: number;
  image: string;
  title: string;
  link?: string;
}

function mapArticleToSlide(article: HomeBannerArticle): SlideType | null {
  const imagePath =
    article.cover?.formats?.large?.url ??
    article.cover?.url;
  const image = getStrapiMediaUrl(imagePath);
  if (!image) return null;

  return {
    id: article.id,
    image,
    title: article.title,
    link: article.link ?? undefined,
  };
}

export function HeroSlider() {
  const locale = useLocale();
  const [slides, setSlides] = useState<SlideType[]>([]);
  const [loading, setLoading] = useState(true);
  const [bannerHeight, setBannerHeight] = useState("500px");

  useEffect(() => {
    const controller = new AbortController();

    async function loadSlides() {
      setLoading(true);
      try {
        const { data } = await getArticles<HomeBannerArticle>(
          {
            lang: locale,
            populate: "cover",
            filters: { type: { $eq: "home1" } },
            sort: "sort:asc",
          },
          { signal: controller.signal }
        );

        const mapped = [...data]
          .sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0))
          .map(mapArticleToSlide)
          .filter((slide): slide is SlideType => slide !== null);

        setSlides(mapped);
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("Failed to load hero slides:", error);
        setSlides([]);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }

    loadSlides();
    return () => controller.abort();
  }, [locale]);

  useEffect(() => {
    updateBannerHeight();
    window.addEventListener("resize", updateBannerHeight);
    return () => {
      window.removeEventListener("resize", updateBannerHeight);
    };
  }, []);

  const updateBannerHeight = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setBannerHeight("300px");
    } else if (width < 1024) {
      setBannerHeight("400px");
    } else {
      setBannerHeight("500px");
    }
  };

  if (loading) {
    return (
      <div
        className="relative w-full bg-gray-100 animate-pulse"
        style={{ height: bannerHeight }}
      />
    );
  }

  if (slides.length === 0) {
    return null;
  }

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
          <SwiperSlide
            key={slide.id}
            className="relative h-full flex items-center justify-center"
          >
            {slide.link ? (
              <Link
                href={slide.link}
                className="block w-full h-full flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={slide.image}
                    alt={slide.title}
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
                  alt={slide.title}
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

