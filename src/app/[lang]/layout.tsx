"use client"
import { ReactNode } from 'react';
import { Navbar, Footer } from "@/components";

import {
  RectangleStackIcon,
  UserCircleIcon,
  PhoneIcon,
  BriefcaseIcon,
  UserGroupIcon
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
    href: "/aboutus"
  },
  {
    name: "联系我们",
    icon: PhoneIcon,
    href: "/connactus"
  },
  {
    name: "人才招聘",
    icon: UserGroupIcon,
    href: "/recruitment"
  },
];

export default function RootLayout({ children }: Props) {
  return <>
     <Navbar NAV_MENU={NAV_MENU} />
     <div className='min-h-[calc(100vh-320px)] pt-[60px]'>
      {children}
     </div>
     <Footer />
  </>;
}