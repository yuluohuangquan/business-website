'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// 产品详细数据
const productDetails: Record<string, ProductDetail> = {
  '276': {
    name: '暗杆金属阀座闸阀',
    model: 'Fig.5320',
    type: '金属密封闸阀',
    category: 'wa',
    subCategory: 'valve',
    description: '面到面标准：DIN 3352〔F4〕。连接法兰： EN1092- 2 PN10 / PN16、ISO 7005 / ANSI B16.5、GB/T 9119。测试标准： EN12266- 1 / DIN3230 / ISO5208。',
    image: 'https://picsum.photos/seed/valve1/600/400',
    specs: {
      pressure: '10bar、16bar',
      size: 'DN40-DN300',
      testPressure: '壳体： 15bar (PN10), 24bar (PN16)\n密封： 11bar (PN10), 17.6bar (PN16)',
      temperature: '-10℃～120℃',
      body: '铸铁、球墨铸铁',
      bonnet: '铸铁、球墨铸铁',
      stem: '黄铜、不锈钢',
      disc: '铸铁、球墨铸铁',
      seating: '黄铜',
      handwheel: '铸铁',
      packing: '石墨'
    },
    downloads: [
      { name: '产品规格书', url: '#', type: 'PDF', size: '2.5MB' },
      { name: '安装说明书', url: '#', type: 'PDF', size: '1.8MB' },
      { name: '3D模型图纸', url: '#', type: 'STEP', size: '5.6MB' }
    ]
  },
  '277': {
    name: '黄铜闸阀',
    model: 'Fig.5311',
    type: '金属密封闸阀',
    category: 'wa',
    subCategory: 'valve',
    description: '黄铜闸阀采用优质铜合金材质，具有耐腐蚀、密封性好等特点，广泛应用于给排水、消防系统等领域。',
    image: 'https://picsum.photos/seed/valve2/600/400',
    specs: {
      pressure: '16bar',
      size: 'DN15-DN100',
      testPressure: '壳体： 24bar\n密封： 17.6bar',
      temperature: '-10℃～120℃',
      body: '黄铜',
      bonnet: '黄铜',
      stem: '黄铜',
      disc: '黄铜',
      seating: '黄铜',
      handwheel: '铁制',
      packing: '石墨'
    },
    downloads: [
      { name: '产品规格书', url: '#', type: 'PDF', size: '2.3MB' },
      { name: '安装说明书', url: '#', type: 'PDF', size: '1.5MB' }
    ]
  },
  '278': {
    name: '不锈钢丝扣闸阀',
    model: 'Fig.5315',
    type: '金属密封闸阀',
    category: 'wa',
    subCategory: 'valve',
    description: '不锈钢丝扣闸阀采用高品质不锈钢材料，具有耐高温、耐腐蚀、使用寿命长等优点，适用于各类苛刻工况环境。',
    image: 'https://picsum.photos/seed/valve3/600/400',
    specs: {
      pressure: '16bar',
      size: 'DN15-DN50',
      testPressure: '壳体： 24bar\n密封： 17.6bar',
      temperature: '-20℃～200℃',
      body: '304不锈钢',
      bonnet: '304不锈钢',
      stem: '304不锈钢',
      disc: '304不锈钢',
      seating: '304不锈钢',
      handwheel: '304不锈钢',
      packing: 'PTFE'
    },
    downloads: [
      { name: '产品规格书', url: '#', type: 'PDF', size: '2.1MB' },
      { name: '安装说明书', url: '#', type: 'PDF', size: '1.7MB' }
    ]
  }
};

// 产品分类映射
const productTypeMap: Record<string, string> = {
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

// 其他产品推荐
const relatedProducts = [
  {
    id: '277',
    name: '黄铜闸阀',
    model: 'Fig.5311',
    image: 'https://picsum.photos/seed/valve2/400/300'
  },
  {
    id: '278',
    name: '不锈钢丝扣闸阀',
    model: 'Fig.5315',
    image: 'https://picsum.photos/seed/valve3/400/300'
  },
  {
    id: '279',
    name: '弹性明杆闸阀',
    model: 'Fig.5220',
    image: 'https://picsum.photos/seed/valve4/400/300'
  }
];

// 定义接口
interface ProductDetail {
  name: string;
  model: string;
  type: string;
  category: string;
  subCategory: string;
  description: string;
  image: string;
  specs: Record<string, string>;
  downloads: Array<{
    name: string;
    url: string;
    type: string;
    size: string;
  }>;
}

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    reason: '',
    message: ''
  });
  const [activeTab, setActiveTab] = useState('specs');
  
  // 获取产品信息，如果不存在则使用默认ID "276"
  const product = productDetails[productId] || productDetails['276'];
  
  // 表单处理
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('提交的表单数据:', formData);
    alert('感谢您的咨询！我们将尽快与您联系。');
    setShowContactForm(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 页面标题 */}
      <div className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:underline">首页</Link>
              <span>/</span>
              <Link href="/product" className="hover:underline">产品中心</Link>
              <span>/</span>
              <Link href={`/product/list/${product.category}`} className="hover:underline">{productTypeMap[product.category]}</Link>
              <span>/</span>
              <Link href={`/product/list/${product.category}/${product.subCategory}`} className="hover:underline">{productTypeMap[product.subCategory]}</Link>
              <span>/</span>
              <span>{product.name}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* 产品概述 */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* 产品图片 */}
            <div className="md:w-1/2 mb-6 md:mb-0">
              <div className="rounded-lg overflow-hidden border">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* 产品信息 */}
            <div className="md:w-1/2">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-gray-600 font-medium">简介</span>
                </div>
                <p className="text-gray-700">{product.description}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-gray-600 font-medium">编号</span>
                </div>
                <p className="text-gray-700">{product.model}</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-gray-600 font-medium">分类</span>
                </div>
                <p className="text-gray-700">{product.type}</p>
              </div>
              
              <div className="mt-8 space-y-4">
                <button
                  onClick={() => setShowContactForm(true)}
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
                >
                  立即咨询
                </button>
                
                <div className="flex justify-between">
                  <a
                    href="tel:86-10-85591860"
                    className="flex items-center justify-center bg-gray-100 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-200 transition-colors w-[48%]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    咨询电话
                  </a>
                  
                  <Link
                    href="/contact#contact2"
                    className="flex items-center justify-center bg-gray-100 text-gray-800 py-3 px-6 rounded-md hover:bg-gray-200 transition-colors w-[48%]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                    索取报价
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 产品详情标签 */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'specs'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              技术参数
            </button>
            
            <button
              onClick={() => setActiveTab('downloads')}
              className={`px-6 py-3 text-sm font-medium ${
                activeTab === 'downloads'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              资料下载
            </button>
          </div>
          
          <div className="p-6">
            {activeTab === 'specs' && (
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="border-b pb-4">
                      <h3 className="text-gray-700 font-medium mb-2">
                        {key === 'pressure' && '公称压力：'}
                        {key === 'size' && '规格尺寸：'}
                        {key === 'testPressure' && '试验压力：'}
                        {key === 'temperature' && '工作温度：'}
                        {key === 'body' && '阀体：'}
                        {key === 'bonnet' && '阀盖：'}
                        {key === 'stem' && '阀杆：'}
                        {key === 'disc' && '阀芯：'}
                        {key === 'seating' && '阀座垫圈：'}
                        {key === 'handwheel' && '手轮：'}
                        {key === 'packing' && '填料：'}
                      </h3>
                      <p className="text-gray-600 whitespace-pre-line">{value}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            )}
            
            {activeTab === 'downloads' && (
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {product.downloads.map((download, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg mb-3">
                      <div className="flex items-center">
                        <div className="bg-gray-100 p-2 rounded mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">{download.name}</h4>
                          <p className="text-sm text-gray-500">{download.type} · {download.size}</p>
                        </div>
                      </div>
                      <a
                        href={download.url}
                        className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-4 py-2 rounded-md text-sm font-medium"
                      >
                        下载
                      </a>
                    </div>
                  ))}
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* 相关产品 */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">更多产品</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/product/detail/${item.id}`}>
                <div className="h-48 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600">型号：{item.model}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* 咨询表单弹窗 */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-lg shadow-xl max-w-md w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">资讯留言</h3>
              <button
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-1">您的姓名</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-1">电子邮箱</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-gray-700 text-sm font-medium mb-1">查询原因</label>
                <select
                  id="reason"
                  name="reason"
                  required
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">请选择</option>
                  <option value="产品询价">产品询价</option>
                  <option value="技术咨询">技术咨询</option>
                  <option value="合作代理">合作代理</option>
                  <option value="其他">其他</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-1">请求详情</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="请详细描述您的需求..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
              >
                提交
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}