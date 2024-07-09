import { Carousel } from "@material-tailwind/react";
 
export function Banner() {
  return (
    <Carousel
    className="h-100"
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
      <img
        src="/image/event.jpeg"
        alt="image 1"
        className="h-100 w-full object-cover"
      />
    </Carousel>
  );
}