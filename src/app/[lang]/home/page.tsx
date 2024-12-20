"use client"
// sections
import { SponsoredBy, AboutEvent, OurStats, EventContent, Faq } from "./(components)";
import { Banner, Title, SlidesPer, GalleryWithTab } from "@/components";
export default function Page() {

  const homeSlides = [
    {
      image: "/image/event.jpeg",
      title: "欢迎您的访问",
      description: "10年服务经验积累，9种安全保障，8中服务场景，\n优质服务值得您的信赖",
      buttonText: "了解详情",
      buttonLink: "/about"
    },
    {
      image: "/image/event.jpeg"
    }
  ];

  return (
    <>
    <Banner slides={homeSlides} />
    <div className="m-auto max-w-7xl py-8 px-8 mb-4">
      <Title title="聚焦新品" url="/" />
      <SlidesPer />
      </div>

      <div className="m-auto max-w-7xl py-8 px-8 mb-4">
        <Title title="行业与应用" url="/" />
        <div className="relative " style={{ marginTop: "-60px"}}>
        <GalleryWithTab />
        </div>
      </div>
      <SponsoredBy />
      {/* <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq /> */}
    </>
  );
}
