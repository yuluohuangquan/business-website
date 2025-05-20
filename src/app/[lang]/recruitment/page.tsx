'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

// 添加联系方式数据
const contactInfo = {
  email: 'hr@company.com',
  phone: '+86 123-4567-8900'
};

export default function RecruitmentPage() {
  const t = useTranslations('Recruitment');
  const companyT = useTranslations('CompanyDetail');
  const [selectedDepartment, setSelectedDepartment] = useState(t('all'));
  const [showContact, setShowContact] = useState(false);

  const departments = [t('all'), t('tech'), t('product'), t('marketing'), t('operations')];

  // 从翻译文件获取职位列表
  const jobList = [
    {
      id: 1,
      title: t('jobs.frontend.title'),
      department: t('tech'),
      location: t('jobs.frontend.location'),
      type: t('jobs.frontend.type'),
      requirements: t('jobs.frontend.requirements').split('|'),
      responsibilities: ['负责公司产品的前端开发', '参与技术方案设计和评审', '持续优化前端性能和用户体验']
    },
    {
      id: 2,
      title: t('jobs.pm.title'),
      department: t('product'),
      location: t('jobs.pm.location'),
      type: t('jobs.pm.type'),
      requirements: t('jobs.pm.requirements').split('|'),
      responsibilities: ['负责产品规划和需求分析', '对接客户需求，输出产品文档', '跟进产品开发过程和质量控制']
    },
    {
      id: 3,
      title: t('jobs.marketing.title'),
      department: t('marketing'),
      location: t('jobs.marketing.location'),
      type: t('jobs.marketing.type'),
      requirements: t('jobs.marketing.requirements').split('|'),
      responsibilities: t('jobs.marketing.responsibilities').split('|')
    },
    {
      id: 4,
      title: t('jobs.operations.title'),
      department: t('operations'),
      location: t('jobs.operations.location'),
      type: t('jobs.operations.type'),
      requirements: t('jobs.operations.requirements').split('|'),
      responsibilities: t('jobs.operations.responsibilities').split('|')
    }
  ];

  // 从翻译文件获取公司价值观
  const companyValues = [
    {
      title: t('about.values.0.title'),
      description: t('about.values.0.description'),
      icon: t('about.values.0.icon')
    },
    {
      title: t('about.values.1.title'),
      description: t('about.values.1.description'),
      icon: t('about.values.1.icon')
    },
    {
      title: t('about.values.2.title'),
      description: t('about.values.2.description'),
      icon: t('about.values.2.icon')
    },
    {
      title: t('about.values.3.title'),
      description: t('about.values.3.description'),
      icon: t('about.values.3.icon')
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* 页面标题和介绍部分 */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('joinUs')}
            </h1>
            <p className="text-xl leading-relaxed opacity-90 mb-8">
              {t('subtitle')}
            </p>
            <div className="flex justify-center">
              <button 
                onClick={() => setShowContact(true)}
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors shadow-lg"
              >
                {t('contactUs')}
              </button>
            </div>
          </motion.div>
        </div>
        
        {/* 波浪形状分隔 */}
        <div className="h-16 bg-gray-50 relative -mb-1">
          <svg className="absolute bottom-0 w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#1e3a8a" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,154.7C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>
      </div>

      {/* 公司介绍部分 */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('about.title')}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              {companyT('description')}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="md:w-1/2">
              <Image 
                src="https://picsum.photos/600/400?random=20" 
                alt="公司环境" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('about.culture.title')}</h3>
              <p className="text-lg text-gray-600 mb-6">
                {t('about.culture.description1')}
              </p>
              <p className="text-lg text-gray-600">
                {t('about.culture.description2')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600"
              >
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 职位列表部分 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('jobList.title')}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600">
              {t('jobList.description')}
            </p>
          </div>

          {/* 部门筛选 */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedDepartment === dept
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* 职位列表 */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {jobList
              .filter(job => selectedDepartment === t('all') || job.department === selectedDepartment)
              .map((job) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                      {job.department}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {job.location}
                    </span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">{t('requirementsLabel')}：</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="text-sm">{req}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">{t('jobList.responsibilitiesLabel')}：</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.responsibilities.map((resp, index) => (
                        <li key={index} className="text-sm">{resp}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    onClick={() => setShowContact(true)}
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    {t('apply')}
                  </button>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </section>

      {/* 团队风采部分 */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('teamShowcase.title')}</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 mb-8">
              {t('teamShowcase.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: num * 0.05 }}
                className="overflow-hidden rounded-lg shadow-md"
              >
                <Image 
                  src={`https://picsum.photos/400/300?random=${20 + num}`} 
                  alt={`团队活动 ${num}`} 
                  width={400} 
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 底部CTA部分 */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">{t('ctaSection.title')}</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            {t('ctaSection.description')}
          </p>
          <button 
            onClick={() => setShowContact(true)}
            className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-colors shadow-lg"
          >
            {t('ctaSection.buttonText')}
          </button>
        </div>
      </section>

      {/* 添加联系方式弹窗 */}
      {showContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">{t('contactUs')}</h3>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <span className="font-medium mr-3 text-gray-900">Email:</span>
                <a href={`mailto:${t('contactModal.email')}`} className="text-blue-600 hover:underline">
                  {t('contactModal.email')}
                </a>
              </p>
              <p className="flex items-center text-gray-600">
                <span className="font-medium mr-3 text-gray-900">{t('phone')}:</span>
                <a href={`tel:${t('contactModal.phone')}`} className="text-blue-600 hover:underline">
                  {t('contactModal.phone')}
                </a>
              </p>
              
              <div className="mt-6 border-t border-gray-200 pt-6">
                <p className="text-gray-600 mb-4">{t('contactModal.learnMore')}</p>
                <Link href="/about" className="text-blue-600 hover:underline block mb-2">
                  {t('contactModal.viewCompanyIntro')}
                </Link>
                <Link href="/about/vision" className="text-blue-600 hover:underline block">
                  {t('contactModal.viewCompanyVision')}
                </Link>
              </div>
            </div>
            <button 
              onClick={() => setShowContact(false)}
              className="mt-8 w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              {t('close')}
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}