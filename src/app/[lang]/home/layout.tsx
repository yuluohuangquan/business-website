"use client"
import { ReactNode } from 'react';
import { Navbar, Footer } from "@/components";

import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
} from "@heroicons/react/24/solid";

type Props = {
  children: ReactNode;
};

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

export default function RootLayout({ children }: Props) {
  return <>
     <Navbar NAV_MENU={NAV_MENU} />
     {children}
     <Footer />
  </>;
}