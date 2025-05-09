'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { PRODUCT_CATEGORIES } from '@/utils/constant';

// 产品分类数据
const productCategories = [
  {
    id: 'wa',
    name: '盖雷智阀',
    description: '盖雷智阀系列产品采用先进的设计理念和制造工艺，提供高精度流量控制和可靠的密封性能，广泛应用于暖通、石化、水处理等领域。',
    image: 'https://picsum.photos/seed/valve1/800/600',
    products: PRODUCT_CATEGORIES.wa.subCategories
  },
  {
    id: 'johnsoncontrols',
    name: 'JohnsonControls',
    description: 'JohnsonControls是全球领先的暖通空调控制系统提供商，产品包括各类控制阀、执行器和温控设备，以高效节能和智能控制著称。',
    image: 'https://picsum.photos/seed/jc/800/600',
    products: PRODUCT_CATEGORIES.johnsoncontrols.subCategories
  },
  {
    id: 'flowcon',
    name: 'FlowCon',
    description: 'FlowCon专注于流量控制解决方案，产品主要包括自力式平衡阀、压差控制阀等，为暖通空调和制冷系统提供高效稳定的流量控制。',
    image: 'https://picsum.photos/seed/flowcon/800/600',
    products: PRODUCT_CATEGORIES.flowcon.subCategories
  },
  {
    id: 'warco',
    name: 'WARCO',
    description: 'WARCO产品系列以高品质和耐用性著称，包括减震器、隔振支架等减振设备，广泛应用于建筑、工业和特殊场所的噪音与振动控制。',
    image: 'https://picsum.photos/seed/warco/800/600',
    products: PRODUCT_CATEGORIES.warco.subCategories
  }
];

export default function ProductPage() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 产品中心标题 */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">产品中心</h1>
          <div className="w-20 h-1 bg-blue-500"></div>
          <p className="mt-4 text-xl">专业流体控制与减振系统解决方案</p>
        </div>
      </div>
      
      {/* 产品类别展示 */}
      <div className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={800}
                  height={600}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCategory === category.id ? 'scale-110' : 'scale-100'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">{category.name}</h2>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 h-24 overflow-hidden">{category.description}</p>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">主要产品系列：</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, index) => (
                      <Link 
                        key={index} 
                        href={`/product/list/${category.id}/${product.href.split('/').pop()}`}
                        className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/product/list/${category.id}`}
                    className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800"
                  >
                    查看全部产品 →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* 产品优势部分 */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我们的产品优势</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">专业品质</h3>
              <p className="text-gray-600">
                我们所有产品均通过ISO9001、ISO14001和ISO45001认证，保证卓越品质和可靠性能。
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">节能高效</h3>
              <p className="text-gray-600">
                创新设计和先进工艺使我们的产品具有更高效率和更低能耗，为客户创造更大价值。
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">完善服务</h3>
              <p className="text-gray-600">
                从产品选型到安装调试，从技术培训到维护保养，我们提供全生命周期的专业服务支持。
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* 客户案例部分 */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">成功案例</h2>
        <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image 
              src="https://picsum.photos/seed/case1/600/400" 
              alt="案例1" 
              width={600} 
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">乌兰察布优刻得数据中心</h3>
              <p className="text-gray-600 mb-4">FlowCon产品为该数据中心提供了高精度流量控制解决方案，大幅提升了制冷系统效率。</p>
              <Link href="/news/case1" className="text-blue-600 hover:underline">
                查看详情 →
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image 
              src="https://picsum.photos/seed/case2/600/400" 
              alt="案例2" 
              width={600} 
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">北京农行数据中心</h3>
              <p className="text-gray-600 mb-4">采用FlowCon产品的自动平衡系统，实现了水力平衡精确控制，降低了能耗。</p>
              <Link href="/news/case2" className="text-blue-600 hover:underline">
                查看详情 →
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <Image 
              src="https://picsum.photos/seed/case3/600/400" 
              alt="案例3" 
              width={600} 
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">罗湖区笋岗街道城建项目</h3>
              <p className="text-gray-600 mb-4">FlowCon产品为该项目提供了稳定可靠的流量控制系统，确保了暖通系统的高效运行。</p>
              <Link href="/news/case3" className="text-blue-600 hover:underline">
                查看详情 →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* 咨询部分 */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">需要专业流体控制解决方案？</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            我们的专业团队随时为您提供技术咨询和定制化方案，为您的项目保驾护航
          </p>
          <Link 
            href="/contact#contact2" 
            className="inline-block bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors shadow-lg"
          >
            立即咨询
          </Link>
        </div>
      </div>
    </div>
  );
}