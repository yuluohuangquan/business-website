"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';

export default function IntroductionPage() {
  // 使用翻译hook
  const t = useTranslations('About');
  const introT = useTranslations('About.introduction.section');

  // 证书数据
  const certifications = [
    { id: 1, name: "ISO9001", image: "https://picsum.photos/300/400?random=1" },
    { id: 2, name: "ISO14001", image: "https://picsum.photos/300/400?random=2" },
    { id: 3, name: "ISO18001", image: "https://picsum.photos/300/400?random=3" }
  ];

  // 业务数据
  const businesses = [
    {
      id: introT('businesses.0.id'),
      title: introT('businesses.0.title'),
      description: introT('businesses.0.description')
    },
    {
      id: introT('businesses.1.id'),
      title: introT('businesses.1.title'),
      description: introT('businesses.1.description')
    },
    {
      id: introT('businesses.2.id'),
      title: introT('businesses.2.title'),
      description: introT('businesses.2.description')
    }
  ];

  // 合作伙伴
  const partners = ['Warco', 'Flowcon', 'Johnson Control', 'Galafs'];

  return (
    <div className="w-full">
      {/* 页面标题部分 */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{introT('title')}</h1>
          <div className="w-20 h-1 bg-blue-500"></div>
          <p className="mt-4 text-xl">{introT('subtitle')}</p>
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
                className="text-blue-600 font-medium"
              >
                {t('navigation.introduction')}
              </Link>
            </li>
            <li>
              <Link 
                href="/about/vision" 
                className="text-gray-700 hover:text-blue-600 font-medium"
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
                  <h2 className="text-3xl font-bold mb-6">WBG万博集科技有限公司</h2>
                  <p className="text-lg mb-4 leading-relaxed">
                    {introT('paragraph1')}
                  </p>
                  <p className="text-lg mb-4 leading-relaxed">
                    {introT('paragraph2')}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {introT('paragraph3')}
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image 
                    src="https://picsum.photos/600/400?random=4" 
                    alt={introT('title')} 
                    width={600} 
                    height={400}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">{introT('businessTitle')}</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  {businesses.map((business, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <div className="w-16 h-16 mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-2xl font-bold">{business.id}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3">{business.title}</h3>
                      <p className="text-gray-600">
                        {business.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6">{introT('certificationsTitle')}</h2>
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
                <h2 className="text-3xl font-bold mb-6">{introT('partnersTitle')}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                  {partners.map((partner, index) => (
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