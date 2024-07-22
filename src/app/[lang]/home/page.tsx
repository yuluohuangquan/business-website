"use client"
// sections
import { SponsoredBy, AboutEvent, OurStats, EventContent, Faq } from "./(components)";
import { Banner, Title, SlidesPer, GalleryWithTab } from "@/components";
export default function Page() {

  return (
    <>
      <Banner />
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
