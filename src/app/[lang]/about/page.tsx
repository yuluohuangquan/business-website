"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  // 使用翻译hook
  const t = useTranslations('About');
  const introT = useTranslations('About.introduction.section');
  const visionT = useTranslations('About.vision.section');
  const companyT = useTranslations('CompanyDetail');

  return (
    <div className="w-full">
      {/* 页面标题部分 */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{t('pageTitle')}</h1>
          <div className="w-20 h-1 bg-blue-500"></div>
          <p className="mt-4 text-xl">{t('subtitle')}</p>
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
                {t('navigation.introduction')}
              </p>
            </li>
            <li>
              <p 
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {t('navigation.vision')}
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* 内容部分 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-2">{t('navigation.introduction')}</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg mb-6 leading-relaxed">
                    {companyT('description')}
                  </p>
                  <p className="text-lg mb-6 leading-relaxed">
                    {companyT('detailedDescription')}
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
                    alt={t('navigation.introduction')} 
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
                {introT('viewMore')}
              </Link>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-2">{t('navigation.vision')}</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            
            <div className="flex flex-col md:flex-row-reverse gap-8 max-w-6xl mx-auto">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-lg mb-6 leading-relaxed">
                    {companyT('description')}
                  </p>
                  <p className="text-lg mb-6 leading-relaxed">
                    {companyT('detailedDescription')}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {companyT('vision')}
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
                    alt={t('navigation.vision')} 
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
                {introT('viewMore')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 合作伙伴部分 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">{t('partners.title')}</h2>
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
                <button className="text-blue-500 hover:underline">{t('partners.viewCredentials')}</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
