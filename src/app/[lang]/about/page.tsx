"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* 页面标题部分 */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">关于我们</h1>
          <div className="w-20 h-1 bg-blue-500"></div>
          <p className="mt-4 text-xl">无间服务 客户至上</p>
        </div>
      </div>

      {/* 导航部分 */}
      <div className="bg-gray-100 py-4 shadow-sm">
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap gap-8">
            <li>
              <p 
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                公司简介
              </p>
            </li>
            <li>
              <p 
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                公司愿景
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* 内容部分 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-2">公司简介</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg mb-6 leading-relaxed">
                    上海万博集科技有限公司是减振及流体控制产品的供应商，致力于创造和供应创新高效节能的产品，满足客户利益以及市场快速变化的需求，业务覆盖水工业，节能产品及流体控制、减振降噪、气流管理等行业。
                  </p>
                  <p className="text-lg mb-6 leading-relaxed">
                    自公司创立以来，公司致力于供应高效节能产品，同时在减振领域持续创新。秉承创造卓越，公司获得了ISO9001,ISO14001,ISO18001等认证，以保证益于环境，无间服务，客户利益。
                  </p>
                  <p className="text-lg leading-relaxed">
                    公司是众多国际品牌在中国的合作伙伴，从知识传递到系统节能产品及服务，公司成为工商业楼宇及设施全生命周期的综合服务商。
                  </p>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image 
                    src="https://picsum.photos/600/400" 
                    alt="公司简介" 
                    width={600} 
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/about/introduction" 
                className="inline-block px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors rounded-md"
              >
                查看更多
              </Link>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-2">公司愿景</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 max-w-6xl mx-auto">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg mb-6 leading-relaxed">
                    上海万博集科技有限公司是减振和能效智能解决专家，公司总部设于北京，致力于创造和供应创新高效的产品，满足客户利益以及市场快速变化的需求，业务覆盖水工业、节能产品及流体控制、减振降噪、气流管理等行业。
                  </p>
                  <p className="text-lg mb-6 leading-relaxed">
                    公司是流体控制专家和减振控制专家，为不同需求的客户持续精益服务，秉承品质至上，公司严格遵循国际标准ISO 9001/ISO 14001/ISO45001来保证产品的卓越性能，在HVAC，IDC，水务，设备隔振等市场获得了客户的一致信赖。
                  </p>
                  <p className="text-lg leading-relaxed">
                    公司的愿景是让高效能产品及服务为客户带来持续效率利益，为益于环境践行社会责任。
                  </p>
                </motion.div>
              </div>
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image 
                    src="https://picsum.photos/600/400" 
                    alt="公司愿景" 
                    width={600} 
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </motion.div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link 
                href="/about/vision" 
                className="inline-block px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors rounded-md"
              >
                查看更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 合作伙伴部分 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">合作伙伴及其资质</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {['Warco', 'Flowcon', 'Johnson Control', 'Galafs'].map((partner, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <Image 
                  src={`https://picsum.photos/300/150?random=${index}`} 
                  alt={partner} 
                  width={300} 
                  height={150}
                  className="mx-auto mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-3">{partner}</h3>
                <button className="text-blue-500 hover:underline">查看资质</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
