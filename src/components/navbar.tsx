'use client';

import { useState, useEffect } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { usePathname, useRouter } from 'next/navigation';

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}


export function Navbar({ NAV_MENU }: any) {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const [language, setLanguage] = useState("en");

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    setLanguage(sessionStorage?.getItem("language") || "en")
  }, [])

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = () => {
    console.log(pathname);
    if (language === "en") {
      setLanguage("zh");
      sessionStorage?.setItem("language", "zh");
      const url = pathname.replace('en', 'zh');
      router.push(url);
    } else {
      setLanguage("en");
      sessionStorage?.setItem("language", "en");
      const url = pathname.replace('zh', 'en');
      router.push(url);
    }
    router.refresh();
  };

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          color={isScrolling ? "blue-gray" : "white"}
          className="text-lg font-bold"
        >
          Material Tailwind
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${isScrolling ? "text-gray-900" : "text-white"
            }`}
        >
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              <span>{name}</span>
            </NavItem>
          ))}
        </ul>
        <div className="hidden items-center gap-4 lg:flex">
          <a onClick={() => changeLanguage()} className="cursor-pointer" color={isScrolling ? "gray" : "white"}>
            {language === "en" ? "中文" : "English"}
          </a>
        </div>
        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <a onClick={() => changeLanguage()}>
              {language === "en" ? "中文" : "English"}
            </a>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
