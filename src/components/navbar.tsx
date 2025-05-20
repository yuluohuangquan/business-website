'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon, ChevronDownIcon, LanguageIcon } from "@heroicons/react/24/outline";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  RectangleStackIcon,
  UserCircleIcon,
  CommandLineIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/solid";
import { usePathname, useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { NAV_MENU, NavMenuItem, SubMenuItem } from "@/utils/constant";
import { locales } from "@/navigation";

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
        target={"_self"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

interface NavMenuType {
  name: string;
  icon: any;
  href: string;
}

interface NavbarProps {
  NAV_MENU: NavMenuType[];
}

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const intlLocale = useLocale(); // 获取当前语言
  const navT = useTranslations('Navigation'); // 获取导航翻译
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [currentLocale, setCurrentLocale] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('userLocale');
      if (savedLocale && locales.includes(savedLocale as any)) {
        return savedLocale;
      }
    }
    return intlLocale;
  });
  
  // 生成带国际化文本的菜单项
  const getLocalizedMenu = (): NavMenuItem[] => {
    return NAV_MENU.map(item => {
      const menuItem = { ...item };
      
      // 处理主菜单项的名称翻译
      if (item.key) {
        menuItem.name = navT(`menu.${item.key}`);
      }
      
      // 处理子菜单项的名称翻译
      if (item.subMenus && item.subMenus.length > 0) {
        menuItem.subMenus = item.subMenus.map(subItem => {
          const newSubItem = { ...subItem };
          if (item.key && subItem.key) {
            newSubItem.name = navT(`submenu.${item.key}.${subItem.key}`);
          }
          return newSubItem;
        });
      }
      
      return menuItem;
    });
  };
  
  // 获取翻译后的菜单
  const localizedMenu = getLocalizedMenu();
  
  // 客户端挂载后，从localStorage获取用户语言偏好
  useEffect(() => {
    setIsMounted(true);
    
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('userLocale');
      if (savedLocale && locales.includes(savedLocale as any)) {
        setCurrentLocale(savedLocale);
      } else {
        // 如果没有保存的语言，则使用当前的intlLocale并保存
        localStorage.setItem('userLocale', intlLocale);
      }
    }
  }, [intlLocale]);
  
  // 当intlLocale变化时，更新状态和localStorage
  useEffect(() => {
    if (isMounted && intlLocale && intlLocale !== currentLocale) {
      console.log('useLocale 更新:', intlLocale);
      setCurrentLocale(intlLocale);
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('userLocale', intlLocale);
      }
    }
  }, [intlLocale, currentLocale, isMounted]);

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLangMenu = () => {
    setIsLangMenuOpen(!isLangMenuOpen);
  };

  const switchLanguage = (newLocale: string) => {
    // 如果已经是当前语言就不做操作
    if (newLocale === currentLocale) {
      setIsLangMenuOpen(false);
      return;
    }
    
    // 更新当前语言状态并保存到localStorage
    setCurrentLocale(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('userLocale', newLocale);
    }
    
    // 构建新的URL路径
    const currentPath = pathname || '/';
    let newPath = '';
    
    // 如果是根路径，直接切换语言
    if (currentPath === '/') {
      newPath = `/${newLocale}`;
    } 
    // 检查当前路径是否以支持的语言代码开头
    else if (locales.some(loc => currentPath.startsWith(`/${loc}`))) {
      // 替换当前语言部分为新语言
      const pathWithoutLocale = currentPath.replace(/^\/[^\/]+/, '');
      newPath = `/${newLocale}${pathWithoutLocale}`;
    }
    // 如果没有语言前缀，则添加
    else {
      newPath = `/${newLocale}${currentPath}`;
    }
    
    // 导航到新路径并强制刷新页面
    window.location.href = newPath; // 使用window.location替代router.push以强制刷新
    setIsLangMenuOpen(false);
  };

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  // 点击子菜单后关闭导航
  const handleSubMenuClick = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  // 检查菜单项是否有子菜单
  const hasSubMenus = (item: NavMenuItem): boolean => {
    return Boolean(item.subMenus && item.subMenus.length > 0);
  };

  // 获取语言显示文本
  const getLanguageDisplay = () => {
    // 在客户端挂载前使用服务器的locale展示
    if (!isMounted) return intlLocale === 'zh' ? navT('language.chinese') : navT('language.english');
    
    // 客户端挂载后使用currentLocale
    return currentLocale === 'zh' ? navT('language.chinese') : navT('language.english');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white bg-opacity-95"}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-16 w-auto relative">
                {/* 使用public文件夹下的logo图片 */}
                <Image 
                  src="/logo.png" 
                  alt="WBG万博集" 
                  width={200} 
                  height={60} 
                  priority
                  className="h-full w-auto object-contain"
                />
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <div className="flex space-x-1">
              {localizedMenu.map((item, index) => (
                <div key={item.id} className="relative group">
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-gray-800 hover:text-blue-600 rounded-md text-base font-medium transition-colors flex items-center"
                  >
                    {item.name}
                    {hasSubMenus(item) && (
                      <ChevronDownIcon className="h-4 w-4 ml-1" />
                    )}
                  </Link>
                  
                  {/* 子菜单 - PC端用悬停显示 */}
                  {hasSubMenus(item) && (
                    <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top z-10">
                      <div className="py-1">
                        {item.subMenus!.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 语言切换 - PC端 */}
            <div className="relative ml-6">
              <button 
                onClick={toggleLangMenu}
                className="flex items-center text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium"
              >
                <LanguageIcon className="h-5 w-5 mr-1" />
                <span suppressHydrationWarning>{getLanguageDisplay()}</span>
                <ChevronDownIcon className="h-4 w-4 ml-1" />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-1 w-32 bg-white shadow-lg rounded-md z-20">
                  <div className="py-1">
                    <button 
                      onClick={() => switchLanguage('zh')}
                      className={`block w-full text-left px-4 py-2 text-sm ${currentLocale === 'zh' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
                    >
                      {navT('language.chinese')}
                    </button>
                    <button 
                      onClick={() => switchLanguage('en')}
                      className={`block w-full text-left px-4 py-2 text-sm ${currentLocale === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'}`}
                    >
                      {navT('language.english')}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            {/* 语言切换 - 移动端 */}
            <button
              onClick={toggleLangMenu}
              className="p-2 mr-2 text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label={navT('language.switchLanguage')}
            >
              <LanguageIcon className="h-6 w-6" />
            </button>

            <button
              onClick={toggleMenu}
              className="p-2 text-gray-700 hover:text-blue-600 focus:outline-none"
              aria-label="打开菜单"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端语言菜单 */}
      {isLangMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-2">
            <button 
              onClick={() => switchLanguage('zh')}
              className={`block w-full text-left px-4 py-3 ${currentLocale === 'zh' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'} border-b border-gray-100`}
            >
              {navT('language.chinese')}
            </button>
            <button 
              onClick={() => switchLanguage('en')}
              className={`block w-full text-left px-4 py-3 ${currentLocale === 'en' ? 'bg-blue-50 text-blue-600' : 'text-gray-700'}`}
            >
              {navT('language.english')}
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-2">
            {localizedMenu.map((item, index) => (
              <div key={item.id} className="border-b border-gray-100 last:border-b-0">
                <div className="flex justify-between items-center">
                  <Link
                    href={item.href}
                    className="py-3 block text-gray-800 font-medium"
                    onClick={() => !hasSubMenus(item) && setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {hasSubMenus(item) && (
                    <button
                      className="p-2 text-gray-500"
                      onClick={() => handleDropdownToggle(index)}
                      aria-label={`展开${item.name}子菜单`}
                    >
                      <ChevronDownIcon 
                        className={`h-5 w-5 transition-transform duration-200 ${activeDropdown === index ? 'rotate-180' : ''}`} 
                      />
                    </button>
                  )}
                </div>

                {/* 子菜单 - 移动端用点击切换显示 */}
                {hasSubMenus(item) && activeDropdown === index && (
                  <div className="pl-4 pb-2">
                    {item.subMenus!.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className="block py-2 text-gray-600 hover:text-blue-600"
                        onClick={handleSubMenuClick}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
