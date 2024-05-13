'use client';
// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import SponsoredBy from "./sponsored-by";
import AboutEvent from "./about-event";
import OurStats from "./our-stats";
import EventContent from "./event-content";
import Faq from "./faq";

import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "解决方案",
    icon: RectangleStackIcon,
  },
  {
    name: "产品手册",
    icon: UserCircleIcon,
  },
  {
    name: "关于我们",
    icon: CommandLineIcon,
  },
  {
    name: "人才招募",
    icon: CommandLineIcon,
  },
  {
    name: "联系我们",
    icon: CommandLineIcon,
  },
];

export default function Portfolio() {
  return (
    <>
      <Navbar NAV_MENU={NAV_MENU}/>
      <Hero />
      <SponsoredBy />
      <AboutEvent />
      <OurStats />
      <EventContent />
      <Faq />
      <Footer />
    </>
  );
}
