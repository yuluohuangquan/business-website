'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PRODUCT_CATEGORIES } from '@/utils/constant';

// 产品类型映射
const productTypeMap = {
  wa: '盖雷智阀',
  johnsoncontrols: 'JohnsonControls',
  flowcon: 'FlowCon',
  warco: 'WARCO',
  valve: '闸阀',
  butterfly: '蝶阀',
  ball: '球阀',
  globe: '截止阀',
  control: '控制阀',
  actuator: '执行器',
  sensor: '传感器',
  balance: '平衡阀',
  pressure: '压差控制阀',
  temperature: '温控阀',
  damper: '减震器',
  mount: '隔振支架',
  spring: '弹簧减振器'
};

// 品牌介绍数据
const brandIntroductions = {
  wa: {
    title: '盖雷智阀',
    description: '盖雷智阀系列产品采用先进的设计理念和制造工艺，提供高精度流量控制和可靠的密封性能，广泛应用于暖通、石化、水处理等领域。我们的产品以高质量、高可靠性和长使用寿命著称，为客户提供专业的流体控制解决方案。',
    features: [
      '卓越的密封性能，确保零泄漏',
      '简便的安装和维护，降低运营成本',
      '符合国际标准，满足各种使用场景',
      '丰富的规格和接口选择，适应不同管道系统'
    ],
    image: 'https://picsum.photos/seed/wa/800/400',
    bannerImage: 'https://picsum.photos/seed/wabanner/1200/300'
  },
  johnsoncontrols: {
    title: 'JohnsonControls',
    description: 'JohnsonControls是全球领先的暖通空调控制系统提供商，产品包括各类控制阀、执行器和温控设备，以高效节能和智能控制著称。作为楼宇自动化和能源管理领域的先驱，JohnsonControls提供的解决方案帮助客户实现智能化、节能化的运营目标。',
    features: [
      '智能化控制系统，实现精准温湿度调节',
      '能源管理解决方案，显著降低运营成本',
      '远程监控和数据分析，优化系统性能',
      '兼容多种协议，易于与现有系统集成'
    ],
    image: 'https://picsum.photos/seed/jc/800/400',
    bannerImage: 'https://picsum.photos/seed/jcbanner/1200/300'
  },
  flowcon: {
    title: 'FlowCon',
    description: 'FlowCon专注于流量控制解决方案，产品主要包括自力式平衡阀、压差控制阀等，为暖通空调和制冷系统提供高效稳定的流量控制。FlowCon产品以其卓越的性能和可靠性在数据中心、高层建筑和大型公共设施项目中广泛应用。',
    features: [
      '自动平衡技术，保证系统稳定运行',
      '精确的流量控制，提高系统效率',
      '抗垢设计，减少维护频率',
      '低噪音运行，改善用户体验'
    ],
    image: 'https://picsum.photos/seed/flowcon/800/400',
    bannerImage: 'https://picsum.photos/seed/flowconbanner/1200/300'
  },
  warco: {
    title: 'WARCO',
    description: 'WARCO产品系列以高品质和耐用性著称，包括减震器、隔振支架等减振设备，广泛应用于建筑、工业和特殊场所的噪音与振动控制。WARCO减振系统能有效降低设备运行时产生的振动和噪音，为客户创造安静舒适的工作和生活环境。',
    features: [
      '专业减振设计，有效降低噪音和振动',
      '高强度材料，承载能力强',
      '耐腐蚀处理，适用于各种苛刻环境',
      '简便的安装方式，降低施工难度'
    ],
    image: 'https://picsum.photos/seed/warco/800/400',
    bannerImage: 'https://picsum.photos/seed/warcobanner/1200/300'
  }
};

// 产品系列图片映射
const subTypeImages = {
  valve: 'https://picsum.photos/seed/valve/400/300',
  butterfly: 'https://picsum.photos/seed/butterfly/400/300',
  ball: 'https://picsum.photos/seed/ball/400/300',
  globe: 'https://picsum.photos/seed/globe/400/300',
  control: 'https://picsum.photos/seed/control/400/300',
  actuator: 'https://picsum.photos/seed/actuator/400/300',
  sensor: 'https://picsum.photos/seed/sensor/400/300',
  balance: 'https://picsum.photos/seed/balance/400/300',
  pressure: 'https://picsum.photos/seed/pressure/400/300',
  temperature: 'https://picsum.photos/seed/temperature/400/300',
  damper: 'https://picsum.photos/seed/damper/400/300',
  mount: 'https://picsum.photos/seed/mount/400/300',
  spring: 'https://picsum.photos/seed/spring/400/300'
};

export default function BrandProductListPage() {
  const params = useParams();
  const type = params.type as string;
  
  // 获取产品类型名称
  const productTypeName = productTypeMap[type] || type;
  
  // 获取该品牌的产品子类别
  const subCategories = PRODUCT_CATEGORIES[type]?.subCategories || [];
  
  // 获取品牌介绍
  const brandInfo = brandIntroductions[type] || {
    title: productTypeName,
    description: `${productTypeName}系列产品提供专业的流体控制解决方案。`,
    features: ['高品质', '可靠性强', '使用寿命长'],
    image: 'https://picsum.photos/seed/default/800/400',
    bannerImage: 'https://picsum.photos/seed/defaultbanner/1200/300'
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 页面标题 */}
      <div 
        className="bg-blue-900 text-white py-16 relative" 
        style={{
          backgroundImage: `url(${brandInfo.bannerImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:underline">首页</Link>
              <span>/</span>
              <Link href="/product" className="hover:underline">产品中心</Link>
              <span>/</span>
              <span>{productTypeName}</span>
            </div>
            <h1 className="text-4xl font-bold mt-2">{brandInfo.title}</h1>
            <p className="text-xl mt-4 max-w-3xl opacity-90">{brandInfo.description}</p>
          </div>
        </div>
      </div>
      
      {/* 品牌介绍 */}
      <div className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">{brandInfo.title}系列介绍</h2>
                <p className="text-gray-700 mb-6 text-lg">{brandInfo.description}</p>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">产品特点：</h3>
                <ul className="space-y-2 mb-6">
                  {brandInfo.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={brandInfo.image}
                  alt={brandInfo.title}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 产品系列列表 */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{productTypeName}产品系列</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              我们提供多种{productTypeName}产品系列，满足不同行业和应用场景的需求。
              选择下方产品系列，了解更多详细信息。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subCategories.map((subCategory, index) => {
              const subCategoryId = subCategory.href.split('/').pop() || '';
              const subCategoryName = productTypeMap[subCategoryId] || subCategoryId;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all"
                >
                  <Link href={`/product/list/${type}/${subCategoryId}`}>
                    <div className="h-56 overflow-hidden">
                      <Image
                        src={subTypeImages[subCategoryId] || 'https://picsum.photos/seed/default/400/300'}
                        alt={subCategoryName}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{subCategoryName}系列</h3>
                      <p className="text-gray-600 mb-4">
                        {type === 'wa' && subCategoryId === 'valve' && '闸阀在各种流体控制系统中用于开关控制，我们提供多种材质和规格的闸阀产品。'}
                        {type === 'wa' && subCategoryId === 'butterfly' && '蝶阀结构简单，操作轻便，是理想的大口径管路控制产品。'}
                        {type === 'wa' && subCategoryId === 'ball' && '球阀具有良好的密封性能和较小的流体阻力，广泛应用于各类管路系统。'}
                        {type === 'wa' && subCategoryId === 'globe' && '截止阀适用于需要精确调节流量的场合，操作灵活可靠。'}
                        {type === 'johnsoncontrols' && subCategoryId === 'control' && '控制阀是楼宇自动化系统的核心部件，提供精确的流量和温度控制。'}
                        {type === 'johnsoncontrols' && subCategoryId === 'actuator' && '执行器能将控制信号转换为机械运动，实现阀门的自动化控制。'}
                        {type === 'johnsoncontrols' && subCategoryId === 'sensor' && '传感器提供精确的温度、湿度和压力数据，是智能控制系统的基础。'}
                        {type === 'flowcon' && subCategoryId === 'balance' && '平衡阀能自动调节系统中的水力平衡，提高系统效率。'}
                        {type === 'flowcon' && subCategoryId === 'pressure' && '压差控制阀维持系统中的恒定压差，确保系统稳定运行。'}
                        {type === 'flowcon' && subCategoryId === 'temperature' && '温控阀根据温度变化自动调节流量，保持理想的温度环境。'}
                        {type === 'warco' && subCategoryId === 'damper' && '减震器有效吸收设备运行产生的振动，延长设备使用寿命。'}
                        {type === 'warco' && subCategoryId === 'mount' && '隔振支架为设备提供稳定支撑，同时降低振动传递。'}
                        {type === 'warco' && subCategoryId === 'spring' && '弹簧减振器适用于大型设备，提供优异的减振效果。'}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">多种规格可选</span>
                        <span className="text-blue-600 font-medium">查看详情 →</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
      
      {/* 应用案例 */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">应用案例</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-gray-600 text-lg">
              {productTypeName}产品在多个领域成功应用，以下是部分典型案例
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            >
              <Image 
                src="https://picsum.photos/seed/case1/600/400" 
                alt="案例1" 
                width={600} 
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">大型商业综合体</h3>
                <p className="text-gray-600 mb-4">
                  {productTypeName}产品为该项目提供了完整的流体控制解决方案，
                  实现了高效、稳定、智能化的运行。
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            >
              <Image 
                src="https://picsum.photos/seed/case2/600/400" 
                alt="案例2" 
                width={600} 
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">数据中心</h3>
                <p className="text-gray-600 mb-4">
                  {productTypeName}产品在数据中心的冷却系统中发挥关键作用，
                  确保设备在理想温度下稳定运行。
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden"
            >
              <Image 
                src="https://picsum.photos/seed/case3/600/400" 
                alt="案例3" 
                width={600} 
                height={400}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">工业生产线</h3>
                <p className="text-gray-600 mb-4">
                  {productTypeName}产品在工业生产流程控制中表现出色，
                  提高了生产效率，降低了能耗。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* CTA部分 */}
      <div className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">需要{productTypeName}解决方案？</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            我们的专业团队随时为您提供定制化的{productTypeName}解决方案，
            满足您的特定需求
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact#contact1" 
              className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors shadow-lg"
            >
              联系我们
            </Link>
            <Link 
              href="/contact#contact2" 
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded-full font-medium transition-colors"
            >
              索取报价
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}