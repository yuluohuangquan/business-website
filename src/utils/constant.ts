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
      { name: "盖雷智阀", href: "/product/wa" },
      { name: "JohnsonControls", href: "/product/johnsoncontrols" },
      { name: "FlowCon", href: "/product/flowcon" },
      { name: "WARCO", href: "/product/warco" }
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