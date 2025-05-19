"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function VisionPage() {
  const companyInfo = [
    { label: "公司名称", value: "WBG万博集科技有限公司" },
    { label: "外文名", value: "Whcon (Beijing) Fluid Systems Co., Ltd" },
    { label: "成立于", value: "2014年3月13日" }
  ];

  const branches = [
    "上海", "广州", "长沙", "重庆", "成都", "沈阳", "合肥"
  ];

  return (
    <div className="w-full">
      {/* 页面标题部分 */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">公司愿景</h1>
          <div className="w-20 h-1 bg-blue-500"></div>
          <p className="mt-4 text-xl">COMPANY VISION</p>
        </div>
      </div>

      {/* 导航部分 */}
      <div className="bg-gray-100 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap gap-8">
            <li>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                返回
              </Link>
            </li>
            <li>
              <Link 
                href="/about/introduction" 
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                公司简介
              </Link>
            </li>
            <li>
              <Link 
                href="/about/vision" 
                className="text-blue-600 font-medium"
              >
                公司愿景
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* 内容部分 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-12 flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold mb-6">WBG万博集科技有限公司</h2>
                  <p className="text-lg mb-4 leading-relaxed">
                    WBG万博集科技有限公司是减振和能效智能解决专家，公司总部设于北京，致力于创造和供应创新高效的产品，满足客户利益以及市场快速变化的需求，业务覆盖水工业、节能产品及流体控制、减振降噪、气流管理等行业。
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">公司信息</h3>
                    <ul className="space-y-3">
                      {companyInfo.map((info, index) => (
                        <li key={index} className="flex">
                          <span className="font-bold w-24">{info.label}:</span>
                          <span>{info.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="text-lg mb-4 leading-relaxed">
                    公司是流体控制专家和减振控制专家，为不同需求的客户持续精益服务，秉承品质至上，公司严格遵循国际标准ISO 9001/ISO 14001/ISO45001来保证产品的卓越性能，在HVAC，IDC，水务，设备隔振等市场获得了客户的一致信赖。
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image 
                    src="https://picsum.photos/600/400?random=10" 
                    alt="公司愿景" 
                    width={600} 
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <p className="text-lg mt-6 leading-relaxed">
                    供应包括通用阀门、电动阀、水力控制阀、平衡阀等多种产品，能够覆盖流体系统的多种需求。
                  </p>
                  <p className="text-lg mt-4 leading-relaxed">
                    公司在上海、广州、长沙、重庆、成都、沈阳、合肥等地建立了业务分支机构，保障为客户提供无间隙服务。
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">业务分支机构</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {branches.map((city, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                      <span className="text-blue-600 font-semibold">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">我们的产品</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="mr-4">
                      <Image 
                        src="https://picsum.photos/150/150?random=11" 
                        alt="通用阀门" 
                        width={150} 
                        height={150}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">通用阀门</h3>
                      <p className="text-gray-600">
                        高品质通用阀门，满足各种流体控制需求，质量可靠，使用寿命长。
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="mr-4">
                      <Image 
                        src="https://picsum.photos/150/150?random=12" 
                        alt="电动阀" 
                        width={150} 
                        height={150}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">电动阀</h3>
                      <p className="text-gray-600">
                        智能化电动阀门，精准控制，可远程操作，适用于智能建筑和自动化系统。
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="mr-4">
                      <Image 
                        src="https://picsum.photos/150/150?random=13" 
                        alt="水力控制阀" 
                        width={150} 
                        height={150}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">水力控制阀</h3>
                      <p className="text-gray-600">
                        专业水力控制阀门，用于管网压力控制、流量调节和水力平衡等场景。
                      </p>
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex">
                    <div className="mr-4">
                      <Image 
                        src="https://picsum.photos/150/150?random=14" 
                        alt="平衡阀" 
                        width={150} 
                        height={150}
                        className="rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">平衡阀</h3>
                      <p className="text-gray-600">
                        高精度平衡阀，实现系统最佳水力平衡，提高能效，节约能源。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">公司愿景</h2>
                <p className="text-xl leading-relaxed">
                  公司的愿景是让高效能产品及服务为客户带来持续效率利益，为益于环境践行社会责任。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 