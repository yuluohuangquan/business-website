"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components";
import { useState } from "react";

export default function Page() {
  const brands = [
    {
      id: 1,
      name: "涡控",
      description: "Warco品牌1960年创立于美国，是北美减振材料技术和流体密封技术的掌握者，60多年来将精湛的材料知识和经验应用于工程流体系统和流程工业系统。",
      link: "/product/warco",
      image: "https://picsum.photos/200/120"
    },
    {
      id: 2,
      name: "阀罗坎",
      description: "源自丹麦的平衡阀技术领先者，在美国加州和丹麦设有工厂，是动态平衡阀和动态平衡电动调节阀的发明者，理念： 节约能耗 、智能化控制、节省成本、技术领先。",
      link: "/product/flowcon",
      image: "https://picsum.photos/200/120"
    },
    {
      id: 3,
      name: "江森自控",
      description: "江森是全球关键环境建筑控制一体式解决方案提供商；从暖通空调、楼宇自控、能源管理、关键环境控制、安全防范到消防报警，江森自控拥有业内值得信赖的品牌。",
      link: "/product/johnson-controls",
      image: "https://picsum.photos/200/120"
    },
    {
      id: 4,
      name: "盖雷|盖雷智阀",
      description: "盖雷是领先的流体控制供应商，现隶属于奥赛阀门集团，服务了超过100座大型数据中心和大型商业综合体及酒店,致力于更加节能的流体控制，遵循高品质及服务。",
      link: "/product/wa",
      image: "https://picsum.photos/200/120"
    }
  ];

  const news = [
    {
      id: 1,
      date: "2025.05.06",
      title: "FlowCon产品助力乌兰察布优刻得数据中心项目",
      link: "/news/1",
      image: "https://picsum.photos/300/200"
    },
    {
      id: 2,
      date: "2025.05.06",
      title: "FlowCon产品助力北京农行数据中心项目",
      link: "/news/2",
      image: "https://picsum.photos/300/200"
    },
    {
      id: 3,
      date: "2025.05.06",
      title: "FlowCon产品助力罗湖区笋岗街道城建项目",
      link: "/news/3",
      image: "https://picsum.photos/300/200"
    }
  ];

  const clients = [
    { id: 1, image: "https://picsum.photos/150/80" },
    { id: 2, image: "https://picsum.photos/150/80" },
    { id: 3, image: "https://picsum.photos/150/80" },
    { id: 4, image: "https://picsum.photos/150/80" },
    { id: 5, image: "https://picsum.photos/150/80" },
    { id: 6, image: "https://picsum.photos/150/80" },
    { id: 7, image: "https://picsum.photos/150/80" },
    { id: 8, image: "https://picsum.photos/150/80" }
  ];

  // 添加表单状态管理
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // 处理表单输入
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // 准备发送到API的数据
      const emailData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '未提供',
        reason: '首页咨询',
        details: formData.message
      };
      
      // 调用API发送邮件
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailData),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || '提交失败，请稍后再试');
      }
      
      // 显示成功消息
      setSubmitSuccess(true);
      
      // 重置表单数据
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setSubmitSuccess(false);
      }, 5000);
    } catch (error: any) {
      console.error('提交表单时出错:', error);
      setSubmitError(error.message || '提交失败，请稍后再试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      {/* Hero Section - 使用轮播图组件 */}
      <HeroSlider />

      {/* Brands Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">品牌展示</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand) => (
            <motion.div 
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 shadow-md rounded-md"
            >
              <div className="mb-4 flex justify-center">
                <Image 
                  src={brand.image} 
                  alt={brand.name} 
                  width={200} 
                  height={120} 
                  className="rounded-md object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-4">{brand.name}</h3>
              <p className="text-gray-600 mb-4">{brand.description}</p>
              <Link href={brand.link} className="text-blue-500 hover:underline">
                品牌产品
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Service Center Section */}
      {/* <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">服务中心</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 shadow-md rounded-md text-center"
            >
              <div className="flex justify-center mb-4">
                <Image 
                  src="https://picsum.photos/100/100" 
                  alt="下载中心" 
                  width={100} 
                  height={100}
                  className="rounded-full" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2">下载中心</h3>
              <p className="uppercase text-sm text-gray-500 mb-4">DOWNLOAD CENTER</p>
              <Link href="/service/download" className="text-blue-500 hover:underline">
                查看详情
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 shadow-md rounded-md text-center"
            >
              <div className="flex justify-center mb-4">
                <Image 
                  src="https://picsum.photos/100/100" 
                  alt="技术中心" 
                  width={100} 
                  height={100}
                  className="rounded-full" 
                />
              </div>
              <h3 className="text-xl font-bold mb-2">技术中心</h3>
              <p className="uppercase text-sm text-gray-500 mb-4">TECHNOLOGY CENTER</p>
              <Link href="/service/tech" className="text-blue-500 hover:underline">
                查看详情
              </Link>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* News Section */}
      {/* <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">资讯动态</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {news.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 shadow-md rounded-md"
            >
              <div className="mb-4">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={300} 
                  height={200}
                  className="w-full h-48 object-cover rounded-md" 
                />
              </div>
              <div className="text-gray-500 mb-2">{item.date}</div>
              <h3 className="text-lg font-semibold mb-4">{item.title}</h3>
              <Link href={item.link} className="text-blue-500 hover:underline">
                查看详情
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/news" className="inline-block px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors rounded-md">
            更多动态
          </Link>
        </div>
      </section> */}

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">关于北京涡控</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <Image 
                src="https://picsum.photos/600/400" 
                alt="关于我们" 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg" 
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed mb-8">
                北京涡控科技有限公司是减振及流体控制产品的供应商，致力于创造和供应创新高效节能的产品，满足客户利益以及市场快速变化的需求，业务覆盖水工业，节能产品及流体控制、减振降噪、气流管理等行业。
              </p>
              <p className="text-lg leading-relaxed mb-8">
                自公司创立以来，公司致力于供应高效节能产品，同时在减振领域持续创新。秉承创造卓越，公司获得了ISO9001,ISO14001,ISO18001等认证，以保证益于环境，无间服务，客户利益。
              </p>
              <Link href="/about" className="inline-block px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors rounded-md">
                查看更多
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">我们的客户</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm">
              <Image 
                src={client.image} 
                alt={`客户 ${client.id}`} 
                width={150} 
                height={80}
                className="grayscale hover:grayscale-0 transition-all" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">联系我们</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="bg-gray-700 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">联系方式</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400">地址：</span>
                    <span>北京市朝阳区</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400">电话：</span>
                    <span>010-12345678</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400">邮箱：</span>
                    <span>contact@wbg.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400">工作时间：</span>
                    <span>周一至周五 9:00-18:00</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <Image 
                    src="https://picsum.photos/300/300" 
                    alt="地图" 
                    width={300} 
                    height={300}
                    className="rounded-md" 
                  />
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-gray-700 p-8 rounded-lg h-full">
                <h3 className="text-xl font-bold mb-4">给我们留言</h3>
                
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-white mb-2">提交成功</h3>
                    <p className="text-gray-300">感谢您的咨询，我们会尽快与您联系！</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="name">姓名</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-500" 
                        placeholder="您的姓名" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="email">邮箱</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-500" 
                        placeholder="您的邮箱" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="phone">电话</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-500" 
                        placeholder="您的电话" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="message">留言内容</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-500" 
                        placeholder="请输入您的留言内容" 
                      ></textarea>
                    </div>
                    
                    {submitError && (
                      <div className="bg-red-900 border border-red-700 text-white px-4 py-3 rounded-md">
                        {submitError}
                      </div>
                    )}
                    
                    <div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className={`w-full py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-md transition-colors ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isSubmitting ? '提交中...' : '提交留言'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}