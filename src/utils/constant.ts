// 导航菜单类型定义
export interface SubMenuItem {
  name: string;
  href: string;
  key?: string; // 用于国际化键
}

export interface NavMenuItem {
  id: number;
  name: string;
  icon?: any; // 图标组件
  href: string;
  key?: string; // 用于国际化键
  subMenus?: SubMenuItem[]; // 修改为可选属性
}

// 导航菜单数据 - 现在包含翻译键而不是固定文案
export const NAV_MENU: NavMenuItem[] = [
  {
    id: 1,
    name: "", // 将由国际化文本替换
    href: "/about",
    key: "about",
    subMenus: [
      { name: "", href: "/about/introduction", key: "introduction" },
      { name: "", href: "/about/vision", key: "vision" }
    ]
  },
 {
    id: 2,
    name: "", // 将由国际化文本替换
    href: "/product",
    key: "product",
    subMenus: [
      { name: "", href: "/product/list/wa", key: "wa" },
      { name: "", href: "/product/list/johnsoncontrols", key: "johnsoncontrols" },
      { name: "", href: "/product/list/flowcon", key: "flowcon" },
      { name: "", href: "/product/list/warco", key: "warco" }
    ]
  },
  // {
  //   id: 3,
  //   name: "服务中心",
  //   href: "/service",
  //   key: "service",
  //   subMenus: [
  //     { name: "下载中心", href: "/service/download", key: "download" },
  //     { name: "技术中心", href: "/service/tech", key: "tech" }
  //   ]
  // },
  {
    id: 4,
    name: "", // 将由国际化文本替换
    href: "/recruitment",
    key: "recruitment"
    // 没有子菜单
  },
  {
    id: 5,
    name: "", // 将由国际化文本替换
    href: "/contact",
    key: "contact",
    subMenus: [
      { name: "", href: "/contact#contact1", key: "contactUs" },
      { name: "", href: "/contact#contact2", key: "requestQuote" }
    ]
  }
]; 

// 产品子类别定义
export const PRODUCT_CATEGORIES = {
  wa: {
    name: "盖雷智阀", // 这些也可以国际化
    subCategories: [
      { name: "闸阀", href: "/product/list/wa/valve" },
      { name: "蝶阀", href: "/product/list/wa/butterfly" },
      { name: "球阀", href: "/product/list/wa/ball" },
      { name: "截止阀", href: "/product/list/wa/globe" }
    ]
  },
  johnsoncontrols: {
    name: "JohnsonControls",
    subCategories: [
      { name: "控制阀", href: "/product/list/johnsoncontrols/control" },
      { name: "执行器", href: "/product/list/johnsoncontrols/actuator" },
      { name: "传感器", href: "/product/list/johnsoncontrols/sensor" }
    ]
  },
  flowcon: {
    name: "FlowCon",
    subCategories: [
      { name: "平衡阀", href: "/product/list/flowcon/balance" },
      { name: "压差控制阀", href: "/product/list/flowcon/pressure" },
      { name: "温控阀", href: "/product/list/flowcon/temperature" }
    ]
  },
  warco: {
    name: "WARCO",
    subCategories: [
      { name: "减震器", href: "/product/list/warco/damper" },
      { name: "隔振支架", href: "/product/list/warco/mount" },
      { name: "弹簧减振器", href: "/product/list/warco/spring" }
    ]
  }
};