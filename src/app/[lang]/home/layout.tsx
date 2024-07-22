"use client"
import { ReactNode } from 'react';
import { Navbar, Footer } from "@/components";

import {
  RectangleStackIcon,
  UserCircleIcon,
  PhoneIcon,
  BriefcaseIcon
} from "@heroicons/react/24/solid";

type Props = {
  children: ReactNode;
};

const NAV_MENU = [
  {
    name: "产品",
    icon: BriefcaseIcon,
    href: "/product"
  },
  {
    name: "解决方案",
    icon: RectangleStackIcon,
    href: "/solutions"
  },
  {
    name: "关于我们",
    icon: UserCircleIcon,
    href: "/solutions"
  },
  {
    name: "联系我们",
    icon: PhoneIcon,
    href: "/aboutus"
  },
];

export default function RootLayout({ children }: Props) {
  return <>
     <Navbar NAV_MENU={NAV_MENU} />
     {children}
     <Footer />
  </>;
}