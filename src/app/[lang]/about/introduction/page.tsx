"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function IntroductionPage() {
  const certifications = [
    { id: 1, name: "ISO9001", image: "https://picsum.photos/300/400?random=1" },
    { id: 2, name: "ISO14001", image: "https://picsum.photos/300/400?random=2" },
    { id: 3, name: "ISO18001", image: "https://picsum.photos/300/400?random=3" }
  ];

  return (
    <div className="w-full">
      {/* 页面标题部分 */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">公司简介</h1>
          <div className="w-20 h-1 bg-blue-500"></div>
          <p className="mt-4 text-xl">INTRODUCTION</p>
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
                className="text-blue-600 font-medium"
              >
                公司简介
              </Link>
            </li>
            <li>
              <Link 
                href="/about/vision" 
                className="text-gray-700 hover:text-blue-600 font-medium"
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
                  <h2 className="text-3xl font-bold mb-6">北京涡控科技有限公司</h2>
                  <p className="text-lg mb-4 leading-relaxed">
                    北京涡控科技有限公司是减振及流体控制产品的供应商，致力于创造和供应创新高效节能的产品，满足客户利益以及市场快速变化的需求，业务覆盖水工业，节能产品及流体控制、减振降噪、气流管理等行业。
                  </p>
                  <p className="text-lg mb-4 leading-relaxed">
                    自公司创立以来，公司致力于供应高效节能产品，同时在减振领域持续创新。秉承创造卓越，公司获得了ISO9001,ISO14001,ISO18001等认证，以保证益于环境，无间服务，客户利益。
                  </p>
                  <p className="text-lg leading-relaxed">
                    公司是众多国际品牌在中国的合作伙伴，从知识传递到系统节能产品及服务，公司成为工商业楼宇及设施全生命周期的综合服务商。
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image 
                    src="https://picsum.photos/600/400?random=4" 
                    alt="公司简介" 
                    width={600} 
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">我们的业务</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-2xl font-bold">01</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">水工业</h3>
                    <p className="text-gray-600">
                      提供水工业相关的高效节能产品和控制解决方案，帮助客户实现水资源的高效利用。
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-2xl font-bold">02</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">流体控制</h3>
                    <p className="text-gray-600">
                      专业的流体控制产品和解决方案，应用于各种工业和商业场景，确保系统的高效运行。
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 text-2xl font-bold">03</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">减振降噪</h3>
                    <p className="text-gray-600">
                      提供先进的减振技术和降噪解决方案，改善工作环境，提高系统稳定性。
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">我们的资质</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  {certifications.map(cert => (
                    <div key={cert.id} className="bg-white p-6 rounded-lg shadow-md text-center">
                      <Image 
                        src={cert.image} 
                        alt={cert.name} 
                        width={300} 
                        height={400}
                        className="mx-auto mb-4 rounded"
                      />
                      <h3 className="text-xl font-semibold">{cert.name}</h3>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">合作伙伴</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                  {['Warco', 'Flowcon', 'Johnson Control', 'Galafs'].map((partner, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                      <Image 
                        src={`https://picsum.photos/200/100?random=${index + 5}`} 
                        alt={partner} 
                        width={200} 
                        height={100}
                        className="mx-auto mb-4 rounded grayscale hover:grayscale-0 transition-all"
                      />
                      <h3 className="text-lg font-medium">{partner}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 