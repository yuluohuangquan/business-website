"use client"
// sections
import { SponsoredBy, AboutEvent, OurStats, EventContent, Faq } from "./(components)";
import { Banner, Title } from "@/components";
export default function Page() {

  return (
    <>
      <Banner />

      <div className="m-auto max-w-7xl py-8 px-8 mb-4">
        <Title title="聚焦新品" url="/" />
        {
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1">
              <img src="/image/blog2.svg" alt="event-1" className="w-full rounded-xl h-full object-cover" />
            </div>
            <div className="col-span-1">
              <img src="/image/blog3.svg" alt="event-2" className="w-full rounded-xl h-full object-cover" />
            </div>
            <div className="col-span-1">
              <img src="/image/blog4.svg" alt="event-2" className="w-full rounded-xl h-full object-cover" />
            </div>
          </div>
        }
      </div>

      <div className="m-auto max-w-7xl py-8 px-8 mb-4">
        <Title title="行业与应用" url="/" />

        {
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 pb-6 text-center">
              <img src="/image/avatar1.jpg" alt="avatar1" className="w-full rounded-xl h-full object-cover" />
              <p className="p-2">高端住宅别墅</p>
            </div>
            <div className="col-span-1 pb-6 text-center">
              <img src="/image/avatar2.jpg" alt="avatar2" className="w-full rounded-xl h-full object-cover" />
              <p className="p-2">商业建筑设施</p>
            </div>
            <div className="col-span-1 pb-6 text-center">
              <img src="/image/avatar3.jpg" alt="avatar3" className="w-full rounded-xl h-full object-cover" />
              <p className="p-2">酒店宾馆休闲</p>
            </div>
            <div className="col-span-1 pb-6 text-center">
              <img src="/image/avatar1.jpg" alt="avatar4" className="w-full rounded-xl h-full object-cover" />
              <p className="p-2">医院学校科研文体</p>
            </div>
            <div className="col-span-1 pb-6 text-center">
              <img src="/image/avatar2.jpg" alt="avatar5" className="w-full rounded-xl h-full object-cover" />
              <p className="p-2">公共设施</p>
            </div>
            <div className="col-span-1 pb-6 text-center">
              <img src="/image/avatar3.jpg" alt="avatar6" className="w-full rounded-xl h-full object-cover" />
              <p className="p-2">数据中心</p>
            </div>
          </div>
        }
      </div>
      <SponsoredBy />
      {/* <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq /> */}
    </>
  );
}
