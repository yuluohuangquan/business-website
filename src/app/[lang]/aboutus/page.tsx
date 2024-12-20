'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutUsPage() {
  const t = useTranslations('AboutUs');

  const certifications = [
    'iso9001', 'iso14001', 'iso45001', 'hightech', 'safety'
  ];

  const history = [
    { year: '2018', content: 'history.2018' },
    { year: '2019', content: 'history.2019' },
    { year: '2020', content: 'history.2020' },
    { year: '2021', content: 'history.2021' },
    { year: '2022', content: 'history.2022' },
    { year: '2023', content: 'history.2023' },
  ];

  const achievements = [
    { number: '150+', key: 'projects' },
    { number: '10+', key: 'experience' },
    { number: '8+', key: 'centers' },
  ];

  const landmarks = [
    { city: 'shanghai', type: ['office', 'factory'] },
    { city: 'beijing', type: ['office'] },
    { city: 'guangzhou', type: ['office', 'service'] },
    { city: 'shenzhen', type: ['office', 'service'] },
    { city: 'chengdu', type: ['office'] },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[400px] w-full"
      >
        <Image
          src="/images/about-hero.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            {t('title')}
          </h1>
        </div>
      </motion.div>

      {/* Company Overview - 新增公司概览 */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8">{t('overview.title')}</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              {t('overview.content')}
            </p>
          </motion.div>

          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {achievements.map((item) => (
              <motion.div
                key={item.key}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.number}</div>
                <div className="text-gray-600">{t(`achievements.${item.key}`)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications - 新增资质认证 */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('certifications.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {certifications.map((cert) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-4 bg-white rounded-lg shadow-lg text-center"
              >
                <Image
                  src={`/images/certifications/${cert}.png`}
                  alt={t(`certifications.${cert}`)}
                  width={120}
                  height={120}
                  className="mx-auto mb-4"
                />
                <p className="text-sm text-gray-600">{t(`certifications.${cert}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* History Timeline - 新增发展历程 */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('history.title')}</h2>
          <div className="max-w-4xl mx-auto">
            {history.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="flex items-start mb-8"
              >
                <div className="w-24 flex-shrink-0">
                  <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                </div>
                <div className="flex-grow pl-8 border-l-2 border-blue-200">
                  <p className="text-gray-600">{t(item.content)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values & Culture - 新增企业文化 */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('culture.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{t('culture.mission.title')}</h3>
              <p className="text-gray-600">{t('culture.mission.content')}</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{t('culture.vision.title')}</h3>
              <p className="text-gray-600">{t('culture.vision.content')}</p>
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{t('culture.values.title')}</h3>
              <p className="text-gray-600">{t('culture.values.content')}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Company Introduction */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">{t('introduction.title')}</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            {t('introduction.content')}
          </p>
        </motion.div>

        {/* Landmarks */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">{t('landmarks.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landmarks.map((landmark) => (
              <motion.div
                key={landmark.city}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {t(`landmarks.cities.${landmark.city}`)}
                </h3>
                <ul className="space-y-2">
                  {landmark.type.map((type) => (
                    <li key={type} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {t(`landmarks.types.${type}`)}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Company Structure */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">{t('structure.title')}</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="text-center font-bold text-xl mb-6">
                {t('structure.parent')}
              </div>
              <div className="space-y-4">
                {[1, 2, 3].map((index) => (
                  <div key={index} className="pl-8 border-l-2 border-blue-500">
                    <h4 className="font-semibold">
                      {t(`structure.subsidiaries.${index}.name`)}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">
                      {t(`structure.subsidiaries.${index}.description`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}