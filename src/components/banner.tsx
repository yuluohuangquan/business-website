import { Carousel, Button } from "@material-tailwind/react";

export function Banner() {
  return (
    <Carousel
      className="h-screen"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="h-screen w-full">
        <img
          src="/image/event.jpeg"
          alt="image 1"
          className="h-screen w-full object-cover"
        />
        <div className="pl-[20%] w-full text-white absolute top-1/3">
        <p className="text-3xl">标题</p>
        <p className="text-xl mt-16 mb-16">描述</p>
        <Button color="white" size="sm" className="rounded-none">
          了解详情
        </Button>
        </div>
      </div>
      <div className="h-screen w-full">
        <img
          src="/image/event.jpeg"
          alt="image 1"
          className="h-screen w-full object-cover"
        />
      </div>
    </Carousel>
  );
}