// 导航菜单类型定义
export interface SubMenuItem {
  name: string;
  href: string;
}

export interface NavMenuItem {
  id: number;
  name: string;
  icon?: any; // 图标组件
  href: string;
  subMenus?: SubMenuItem[]; // 修改为可选属性
}

// 导航菜单数据
export const NAV_MENU: NavMenuItem[] = [
  {
    id: 1,
    name: "关于我们",
    href: "/about",
    subMenus: [
      { name: "公司简介", href: "/about/introduction" },
      { name: "公司愿景", href: "/about/vision" }
    ]
  },
 {
    id: 2,
    name: "产品中心",
    href: "/product",
    subMenus: [
      { name: "盖雷智阀", href: "/product/list/wa" },
      { name: "JohnsonControls", href: "/product/list/johnsoncontrols" },
      { name: "FlowCon", href: "/product/list/flowcon" },
      { name: "WARCO", href: "/product/list/warco" }
    ]
  },
  // {
  //   id: 3,
  //   name: "服务中心",
  //   href: "/service",
  //   subMenus: [
  //     { name: "下载中心", href: "/service/download" },
  //     { name: "技术中心", href: "/service/tech" }
  //   ]
  // },
  {
    id: 4,
    name: "招贤纳士",
    href: "/recruitment"
    // 没有子菜单
  },
  {
    id: 5,
    name: "联系我们",
    href: "/contact",
    subMenus: [
      { name: "联系我们", href: "/contact#contact1" },
      { name: "索取报价", href: "/contact#contact2" }
    ]
  }
]; 

// 产品子类别定义
export const PRODUCT_CATEGORIES = {
  wa: {
    name: "盖雷智阀",
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