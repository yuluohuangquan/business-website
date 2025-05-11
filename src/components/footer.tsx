import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* 顶部 Logo 和导航区域 */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">万博集科技</h2>
            <p className="text-gray-400 max-w-md">
              致力于创造和供应创新高效节能的产品，满足客户利益以及市场快速变化的需求
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {/* 服务中心 */}
            <div className="hidden md:block opacity-0">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">服务中心</h3>
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
              <h3 className="text-lg font-semibold mb-3 text-gray-300">产品中心</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/product/wa" className="text-gray-400 hover:text-white transition-colors text-sm">
                    盖雷智阀
                  </Link>
                </li>
                <li>
                  <Link href="/product/johnsoncontrols" className="text-gray-400 hover:text-white transition-colors text-sm">
                    JohnsonControls
                  </Link>
                </li>
                <li>
                  <Link href="/product/flowcon" className="text-gray-400 hover:text-white transition-colors text-sm">
                    FlowCon
                  </Link>
                </li>
                <li>
                  <Link href="/product/warco" className="text-gray-400 hover:text-white transition-colors text-sm">
                    WARCO
                  </Link>
                </li>
              </ul>
            </div>

            {/* 新闻资讯 */}
            <div className="hidden md:block opacity-0">
              <h3 className="text-lg font-semibold mb-3 text-gray-300">新闻资讯</h3>
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
          <h4 className="text-base font-medium mb-3 text-gray-300">友情链接</h4>
          <div className="flex flex-wrap gap-6">
            <Link href="https://www.warco.com" className="text-gray-400 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
              WARCO
            </Link>
            <Link href="https://www.flowcon.com" className="text-gray-400 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
              FlowCon
            </Link>
            <Link href="https://www.johnsoncontrols.com" className="text-gray-400 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
              Johnsoncontrols
            </Link>
            <Link href="https://www.wa.com" className="text-gray-400 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
              WA|盖雷智阀
            </Link>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              Copyright © {new Date().getFullYear()} 万博集科技 All rights reserved.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="text-gray-500 text-sm">企业认证： ISO9001/ISO14001/ISO45001</span>
              <span className="text-gray-500 text-sm">京ICP备 XXXXXXXX号-1</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}