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
    name: "Solution",
    icon: RectangleStackIcon,
  },
  {
    name: "Product Manual",
    icon: UserCircleIcon,
  },
  {
    name: "About Us",
    icon: CommandLineIcon,
  },
  {
    name: "Talent Recruitment",
    icon: CommandLineIcon,
  },
  {
    name: "Contact Us",
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
