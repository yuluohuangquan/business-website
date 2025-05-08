'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useParams, useSearchParams } from 'next/navigation';

// 联系地址数据
const officeLocations = [
  {
    id: 'beijing',
    city: '北京',
    phone: '010-85591869',
    email: 'info@whcon.com',
    address: '北京市大兴区经济技术开发区首合国际大厦A座2层'
  },
  {
    id: 'shanghai',
    city: '上海',
    phone: '13701698143',
    email: 'keungluck@warcofs.com',
    address: '上海市普陀区光复西路2899弄赢华国际8号楼1005室'
  },
  {
    id: 'shenzhen',
    city: '深圳',
    phone: '13823733906',
    email: 'tom@warcofs.com',
    address: '广东省深圳市宝安区西乡幸福港湾前海科创中心232室'
  },
  {
    id: 'shenyang',
    city: '沈阳',
    phone: '15840060708',
    email: 'zhyc@warcofs.com',
    address: '辽宁省沈阳市浑南区绮霞街6-3号（1-12-3）'
  }
];

export default function ContactPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    details: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('contact1');
  
  const contact1Ref = useRef<HTMLDivElement>(null);
  const contact2Ref = useRef<HTMLDivElement>(null);

  // 处理URL中的锚点，滚动到相应部分
  useEffect(() => {
    // 获取URL中的锚点
    const hash = window.location.hash;
    
    if (hash === '#contact2') {
      // 如果锚点为contact2，滚动到索取报价部分
      setActiveTab('contact2');
      contact2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (hash === '#contact1' || hash === '') {
      // 如果锚点为contact1或没有锚点，滚动到联系我们部分
      setActiveTab('contact1');
      contact1Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // 表单输入处理
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 表单提交处理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单验证和提交逻辑
    console.log('表单提交:', formData);
    // 显示成功提交消息
    setFormSubmitted(true);
    // 重置表单数据
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        reason: '',
        details: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  // 切换标签页
  const switchTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'contact1') {
      contact1Ref.current?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/contact#contact1');
    } else {
      contact2Ref.current?.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/contact#contact2');
    }
  };

  return (
    <div className="bg-gray-50">
      {/* 页面标题部分 */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">联系我们</h1>
          <div className="w-20 h-1 bg-blue-500"></div>
          <p className="mt-4 text-xl">无间服务 客户至上</p>
        </div>
      </div>

      {/* 导航标签页 */}
      <div className="bg-gray-100 py-4 shadow-sm sticky top-0 z-10" ref={contact1Ref} id="contact1" >
        <div className="container mx-auto px-4">
          <ul className="flex flex-wrap gap-8">
            <li>
              <button 
                onClick={() => switchTab('contact1')}
                className={`${activeTab === 'contact1' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600 font-medium'}`}
              >
                联系我们
              </button>
            </li>
            <li>
              <button 
                onClick={() => switchTab('contact2')}
                className={`${activeTab === 'contact2' ? 'text-blue-600 font-medium' : 'text-gray-700 hover:text-blue-600 font-medium'}`}
              >
                索取报价
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* 联系我们部分 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-2">联系我们</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
            
            <div className="max-w-7xl mx-auto">
              {/* 公司地图 */}
              <div className="mb-16 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.1662728523407!2d116.49620511526928!3d39.78828447944123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35f1ac3a9127e2a1%3A0x7c53d5d4b8adf258!2z5aSp5rSl57uE5rK555S15a2Q56eR5oqA5byA5Y-R5Yy6!5e0!3m2!1szh-CN!2scn!4v1621837440121!5m2!1szh-CN!2scn" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="w-full"
                ></iframe>
              </div>
              
              {/* 联系方式列表 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {officeLocations.map((office) => (
                  <motion.div
                    key={office.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold mb-4 text-blue-900">{office.city}</h3>
                    <div className="space-y-3">
                      <p className="flex items-start">
                        <span className="flex-shrink-0 text-blue-600 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                          </svg>
                        </span>
                        <span>
                          <span className="font-medium text-gray-700">电话：</span>
                          <a href={`tel:${office.phone}`} className="text-blue-600 hover:underline">
                            {office.phone}
                          </a>
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span className="flex-shrink-0 text-blue-600 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </span>
                        <span>
                          <span className="font-medium text-gray-700">邮箱：</span>
                          <a href={`mailto:${office.email}`} className="text-blue-600 hover:underline">
                            {office.email}
                          </a>
                        </span>
                      </p>
                      <p className="flex items-start">
                        <span className="flex-shrink-0 text-blue-600 mr-3">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span>
                          <span className="font-medium text-gray-700">地址：</span>
                          <span className="text-gray-600">{office.address}</span>
                        </span>
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 索取报价部分 */}
      <section ref={contact2Ref} id="contact2" className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-2">索取报价</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-12"></div>
            
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">提交成功</h3>
                  <p className="text-gray-600">感谢您的咨询，我们会尽快与您联系！</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">您的姓名</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">电子邮箱</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">联系电话</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="reason" className="block text-gray-700 font-medium mb-2">查询原因</label>
                    <select
                      id="reason"
                      name="reason"
                      value={formData.reason}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">请选择原因</option>
                      <option value="产品询价">产品询价</option>
                      <option value="技术支持">技术支持</option>
                      <option value="合作伙伴">合作伙伴</option>
                      <option value="其他">其他</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="details" className="block text-gray-700 font-medium mb-2">请求详情</label>
                    <textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleInputChange}
                      rows={5}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="请详细描述您的需求..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      提交
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
