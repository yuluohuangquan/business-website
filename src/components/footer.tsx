import Link from "next/link";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('Footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* 顶部 Logo 和导航区域 */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">{t('companyName')}</h2>
            <p className="text-gray-400 max-w-md">
              {t('companyDescription')}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* 服务中心 */}
            <div className="hidden md:block opacity-0">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">{t('sections.serviceCenter')}</h3>
              <ul className="space-y-2">
                {/* <li>
                  <Link href="/service/download" className="text-gray-400 hover:text-white transition-colors text-sm">
                    下载中心
                  </Link>
                </li>
                <li>
                  <Link href="/service/tech" className="text-gray-400 hover:text-white transition-colors text-sm">
                    技术中心
                  </Link>
                </li> */}
              </ul>
            </div>


            {/* 产品中心 */}
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-300">{t('sections.productCenter')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/product/wa" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('products.wa')}
                  </Link>
                </li>
                <li>
                  <Link href="/product/johnsoncontrols" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('products.johnsoncontrols')}
                  </Link>
                </li>
                <li>
                  <Link href="/product/flowcon" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('products.flowcon')}
                  </Link>
                </li>
                <li>
                  <Link href="/product/warco" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('products.warco')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* 新闻资讯 */}
            <div className="hidden md:block opacity-0">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">{t('sections.newsCenter')}</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/news/1" className="text-gray-400 hover:text-white transition-colors text-sm">
                    FlowCon产品助力乌兰察布优刻得数据中心项目
                  </Link>
                </li>
                <li>
                  <Link href="/news/2" className="text-gray-400 hover:text-white transition-colors text-sm">
                    FlowCon产品助力北京农行数据中心项目
                  </Link>
                </li>
                <li>
                  <Link href="/news/3" className="text-gray-400 hover:text-white transition-colors text-sm">
                    FlowCon产品助力罗湖区笋岗街道城建项目
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 友情链接 */}
        <div className="border-t border-gray-800 pt-6 pb-4">
          <h4 className="text-base font-medium mb-3 text-gray-300">{t('links.title')}</h4>
          <div className="flex flex-wrap gap-6">
            <Link href="https://www.keencool.com/" className="text-gray-400 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
              云酷KeenCool
            </Link>
            <Link href="https://www.canatal.com.cn/" className="text-gray-400 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
              佳力图Canatal
            </Link>
            <Link href="https://watts.cn/" className="text-gray-400 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
              沃茨Watts
            </Link>
            <Link href="https://www.ivco.com.cn/" className="text-gray-400 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
              艾维科IVCO
            </Link>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              {t('copyright.text', { year: currentYear })}
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-gray-500 text-sm">{t('copyright.certification')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}