// 定义支持的语言
export const locales = ['zh', 'en'];

// 设置默认语言
export const defaultLocale = 'zh';

// 添加路径名映射用于国际化路由
export const pathnames = {
  // 添加需要国际化的路径映射
  '/': '/',
  '/about': '/about',
  '/about/introduction': '/about/introduction',
  '/about/vision': '/about/vision',
  '/product': '/product',
  '/recruitment': '/recruitment',
  '/contact': '/contact'
};

// 语言显示名称
export const localObject = {
  zh: '中文',
  en: 'English'
}; 