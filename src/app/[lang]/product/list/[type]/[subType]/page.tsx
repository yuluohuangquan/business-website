'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PRODUCT_CATEGORIES } from '@/utils/constant';

// 产品数据
const valveProducts = [
  {
    id: '276',
    name: '暗杆金属阀座闸阀',
    model: 'Fig.5320',
    type: '金属密封闸阀',
    size: 'DN40-DN300',
    pressure: '10bar、16bar',
    image: 'https://picsum.photos/seed/valve1/400/300'
  },
  {
    id: '277',
    name: '黄铜闸阀',
    model: 'Fig.5311',
    type: '金属密封闸阀',
    size: 'DN15-DN100',
    pressure: '16bar',
    image: 'https://picsum.photos/seed/valve2/400/300'
  },
  {
    id: '278',
    name: '不锈钢丝扣闸阀',
    model: 'Fig.5315',
    type: '金属密封闸阀',
    size: 'DN15-DN50',
    pressure: '16bar',
    image: 'https://picsum.photos/seed/valve3/400/300'
  },
  {
    id: '279',
    name: '弹性明杆闸阀',
    model: 'Fig.5220',
    type: '弹性座封闸阀',
    size: 'DN50-DN300',
    pressure: '16bar',
    image: 'https://picsum.photos/seed/valve4/400/300'
  },
  {
    id: '280',
    name: '弹性暗杆闸阀',
    model: 'Fig.5120',
    type: '弹性座封闸阀',
    size: 'DN50-DN300',
    pressure: '16bar',
    image: 'https://picsum.photos/seed/valve5/400/300'
  },
  {
    id: '281',
    name: '明杆金属阀座闸阀',
    model: 'Fig.5420',
    type: '金属密封闸阀',
    size: 'DN50-DN300',
    pressure: '16bar',
    image: 'https://picsum.photos/seed/valve6/400/300'
  },
  {
    id: '282',
    name: '不锈钢法兰闸阀',
    model: 'Fig.5425',
    type: '金属密封闸阀',
    size: 'DN50-DN200',
    pressure: '16bar',
    image: 'https://picsum.photos/seed/valve7/400/300'
  }
];

// 筛选选项
const filterOptions = {
  types: ['全部', '金属密封闸阀', '弹性座封闸阀'],
  sizes: ['全部', '<DN50', 'DN50-DN200', '>DN200'],
  pressures: ['全部', '≤1.0MPa', '≤1.6MPa', '>1.6MPa']
};

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

export default function ProductListPage() {
  const params = useParams();
  const type = params.type as string;
  const subType = params.subType as string;
  
  // 状态管理
  const [selectedType, setSelectedType] = useState(filterOptions.types[0]);
  const [selectedSize, setSelectedSize] = useState(filterOptions.sizes[0]);
  const [selectedPressure, setSelectedPressure] = useState(filterOptions.pressures[0]);
  
  // 获取产品类型显示名称
  const productTypeName = productTypeMap[type] || type;
  const productSubTypeName = productTypeMap[subType] || subType;
  
  // 筛选产品
  const filteredProducts = valveProducts.filter(product => {
    // 类型筛选
    if (selectedType !== '全部' && product.type !== selectedType) {
      return false;
    }
    
    // 尺寸筛选 (简化处理)
    if (selectedSize !== '全部') {
      if (selectedSize === '<DN50' && !product.size.includes('DN15') && !product.size.includes('DN40')) {
        return false;
      }
      if (selectedSize === 'DN50-DN200' && !product.size.includes('DN50') && !product.size.includes('DN100')) {
        return false;
      }
      if (selectedSize === '>DN200' && !product.size.includes('DN300')) {
        return false;
      }
    }
    
    // 压力筛选 (简化处理)
    if (selectedPressure !== '全部') {
      if (selectedPressure === '≤1.0MPa' && !product.pressure.includes('10bar')) {
        return false;
      }
      if (selectedPressure === '≤1.6MPa' && !product.pressure.includes('16bar')) {
        return false;
      }
      if (selectedPressure === '>1.6MPa' && !product.pressure.includes('25bar')) {
        return false;
      }
    }
    
    return true;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 页面标题 */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2 text-sm">
              <Link href="/" className="hover:underline">首页</Link>
              <span>/</span>
              <Link href="/product" className="hover:underline">产品中心</Link>
              <span>/</span>
              <Link href={`/product/list/${type}`} className="hover:underline">{productTypeName}</Link>
              <span>/</span>
              <span>{productSubTypeName}</span>
            </div>
            <h1 className="text-3xl font-bold mt-2">{productSubTypeName}</h1>
          </div>
        </div>
      </div>
      
      {/* 筛选器 */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="space-y-4">
            {/* 产品类型筛选 */}
            <div className="flex flex-wrap items-center">
              <h3 className="text-gray-700 font-medium w-28">产品类型</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.types.map((filterType) => (
                  <button
                    key={filterType}
                    onClick={() => setSelectedType(filterType)}
                    className={`px-4 py-1 rounded-full text-sm ${
                      selectedType === filterType
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filterType}
                  </button>
                ))}
              </div>
            </div>
            
            {/* 口径筛选 */}
            <div className="flex flex-wrap items-center">
              <h3 className="text-gray-700 font-medium w-28">口径</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-1 rounded-full text-sm ${
                      selectedSize === size
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            {/* 工作压力筛选 */}
            <div className="flex flex-wrap items-center">
              <h3 className="text-gray-700 font-medium w-28">工作压力</h3>
              <div className="flex flex-wrap gap-2">
                {filterOptions.pressures.map((pressure) => (
                  <button
                    key={pressure}
                    onClick={() => setSelectedPressure(pressure)}
                    className={`px-4 py-1 rounded-full text-sm ${
                      selectedPressure === pressure
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {pressure}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 产品列表 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/product/detail/${product.id}`}>
                <div className="h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>型号：{product.model}</p>
                    <p>类型：{product.type}</p>
                    <p>规格：{product.size}</p>
                    <p>压力：{product.pressure}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          
          {filteredProducts.length === 0 && (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 text-lg">没有找到符合条件的产品</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}