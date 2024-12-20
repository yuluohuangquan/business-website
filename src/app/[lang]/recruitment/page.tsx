'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

// 添加联系方式数据
const contactInfo = {
  email: 'hr@company.com',
  phone: '+86 123-4567-8900'
};

export default function RecruitmentPage() {
  const t = useTranslations('Recruitment');
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
      requirements: t('jobs.frontend.requirements').split('|')
    },
    {
      id: 2,
      title: t('jobs.pm.title'),
      department: t('product'),
      location: t('jobs.pm.location'),
      type: t('jobs.pm.type'),
      requirements: t('jobs.pm.requirements').split('|')
    },
    // 可以添加更多职位
  ];

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 页面标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('joinUs')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* 部门筛选 */}
        <div className="flex justify-center gap-4 mb-8">
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDepartment(dept)}
              className={`px-4 py-2 rounded-full ${
                selectedDepartment === dept
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
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
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <div className="flex gap-2 mb-4">
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
                <div className="space-y-2">
                <h4 className="font-medium text-gray-900">{t('requirementsLabel')}：</h4>
                <ul className="list-disc list-inside text-gray-600 h-[90px]">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
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

        {/* 添加联系方式弹窗 */}
        {showContact && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full mx-4"
            >
              <h3 className="text-xl font-semibold mb-4">{t('contactUs')}</h3>
              <div className="space-y-3">
                <p className="flex items-center">
                  <span className="font-medium mr-2">Email:</span>
                  <a href={`mailto:${contactInfo.email}`} className="text-blue-600 hover:underline">
                    {contactInfo.email}
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="font-medium mr-2">{t('phone')}:</span>
                  <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:underline">
                    {contactInfo.phone}
                  </a>
                </p>
              </div>
              <button 
                onClick={() => setShowContact(false)}
                className="mt-6 w-full bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                {t('close')}
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}