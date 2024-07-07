"use client"
// sections
import { Hero, SponsoredBy, AboutEvent, OurStats, EventContent, Faq } from "./(components)";
import { Banner } from "@/components";
export default function Page() {

  return (
    <>
      <Banner />
      <Hero />
      <SponsoredBy />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq />
    </>
  );
}
