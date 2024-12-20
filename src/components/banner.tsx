import { Carousel, Button, Typography } from "@material-tailwind/react";

interface BannerProps {
  slides: {
    image: string;
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
  }[];
}

export function Banner({ slides }: BannerProps) {
  return (
    <Carousel
      className="h-screen"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {slides.map((slide, index) => (
        <div key={index} className="h-screen w-full">
          <img
            src={slide.image}
            alt={`slide ${index + 1}`}
            className="h-screen w-full object-cover"
          />
          {(slide.title || slide.description || slide.buttonText) && (
            <div className="pl-[20%] w-full text-white absolute top-1/3">
              {slide.title && (
                <Typography
                  variant="h2"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  {slide.title}
                </Typography>
              )}
              {slide.description && (
                <Typography
                  variant="h4"
                  color="white"
                  className="mt-8 mb-12 opacity-80"
                >
                  {slide.description}
                </Typography>
              )}
              {slide.buttonText && (
                <Button
                  color="white"
                  size="lg"
                  onClick={() => {
                    if (slide.buttonLink) {
                      window.location.href = slide.buttonLink;
                    }
                  }}
                >
                  {slide.buttonText}
                </Button>
              )}
            </div>
          )}
        </div>
      ))}
    </Carousel>
  );
}