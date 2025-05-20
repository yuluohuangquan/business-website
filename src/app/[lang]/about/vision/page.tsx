"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function VisionPage() {
  // 使用翻译hook
  const t = useTranslations('About');
  const visionT = useTranslations('About.vision.section');
  const companyT = useTranslations('CompanyDetail');

  // 分支机构 - 直接在组件中定义，而不是从i18n获取
  const branches = [
    "上海", "广州", "长沙", "重庆", "成都", "沈阳", "合肥"
  ];

  // 公司信息数据
  const companyInfo = [
    { 
      label: visionT('companyInfo.items.0.label'), 
      value: companyT('name') 
    },
    { 
      label: visionT('companyInfo.items.1.label'), 
      value: companyT('englishName') 
    },
    { 
      label: visionT('companyInfo.items.2.label'), 
      value: companyT('founded') 
    }
  ];

  // 产品数据 - 直接在组件中定义，而不是从i18n获取
  const products = [
    {
      title: companyT('productLine1Title'),
      description: companyT('productLine1Description')
    },
    {
      title: companyT('productLine2Title'),
      description: companyT('productLine2Description')
    },
    {
      title: companyT('productLine3Title'),
      description: companyT('productLine3Description')
    },
    {
      title: companyT('productLine4Title'),
      description: companyT('productLine4Description')
    }
  ];

  return (
    <div className="w-full">
      {/* 页面标题部分 */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{visionT('title')}</h1>
          <div className="w-20 h-1 bg-blue-500"></div>
          <p className="mt-4 text-xl">{visionT('subtitle')}</p>
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
                {t('navigation.back')}
              </Link>
            </li>
            <li>
              <Link 
                href="/about/introduction" 
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {t('navigation.introduction')}
              </Link>
            </li>
            <li>
              <Link 
                href="/about/vision" 
                className="text-blue-600 font-medium"
              >
                {t('navigation.vision')}
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
                  <h2 className="text-3xl font-bold mb-6">{companyT('name')}</h2>
                  <p className="text-lg mb-4 leading-relaxed">
                    {companyT('description')}
                  </p>
                  
                  <div className="bg-gray-50 p-6 rounded-lg my-6">
                    <h3 className="text-xl font-semibold mb-4">{visionT('companyInfo.title')}</h3>
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
                    {companyT('detailedDescription')}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image 
                    src="https://picsum.photos/600/400?random=10" 
                    alt={visionT('title')} 
                    width={600} 
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <p className="text-lg mt-6 leading-relaxed">
                    {companyT('additionalInfo1')}
                  </p>
                  <p className="text-lg mt-4 leading-relaxed">
                    {companyT('additionalInfo2')}
                  </p>
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">{visionT('branchesTitle')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {branches.map((city, index) => (
                    <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                      <span className="text-blue-600 font-semibold">{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">{visionT('productsTitle')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  {products.map((product, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md flex">
                      <div className="mr-4">
                        <Image 
                          src={`https://picsum.photos/150/150?random=${index + 11}`} 
                          alt={product.title} 
                          width={150} 
                          height={150}
                          className="rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                        <p className="text-gray-600">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">{visionT('visionTitle')}</h2>
                <p className="text-xl leading-relaxed">
                  {companyT('vision')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
} 