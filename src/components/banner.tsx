import { Carousel, Button, Typography } from "@material-tailwind/react";

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
        <Typography variant="h2" color="white" className="lg:max-w-3xl">
        欢迎您的访问
        </Typography>
        <Typography variant="h4" color="white" className="mt-8 mb-12 lg:max-w-3xl">
        10年服务经验积累，9种安全保障，8中服务场景，
        <br></br>优质服务值得您的信赖
        </Typography>
        <Button color="white" size="sm" className="rounded-sm">
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