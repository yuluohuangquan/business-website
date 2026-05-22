"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HeroSlider } from "@/components";
import { useState, useEffect } from "react";
import { useTranslations, useLocale } from 'next-intl';
import {
  getArticles,
  getStrapiMediaUrl,
  type HomeBrandArticle,
} from "@/lib/strapi";

interface BrandItem {
  id: number;
  name: string;
  description: string;
  link?: string;
  image: string;
}

function mapBrandArticle(article: HomeBrandArticle): BrandItem | null {
  const imagePath =
    article.cover?.formats?.medium?.url ??
    article.cover?.url;
  const image = getStrapiMediaUrl(imagePath);
  if (!image) return null;

  return {
    id: article.id,
    name: article.title,
    description: article.content ?? "",
    link: article.link ?? undefined,
    image,
  };
}
export default function Page() {
  const locale = useLocale();
  const homeT = useTranslations('Home');
  const companyT = useTranslations('CompanyDetail');

  const [brands, setBrands] = useState<BrandItem[]>([]);
  const [brandsLoading, setBrandsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadBrands() {
      setBrandsLoading(true);
      try {
        const { data } = await getArticles<HomeBrandArticle>(
          {
            lang: locale,
            populate: "cover",
            filters: { type: { $eq: "home2" } },
            sort: "sort:asc",
          },
          { signal: controller.signal }
        );

        const mapped = [...data]
          .sort((a, b) => (a.sort ?? 0) - (b.sort ?? 0))
          .map(mapBrandArticle)
          .filter((brand): brand is BrandItem => brand !== null);

        setBrands(mapped);
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("Failed to load brands:", error);
        setBrands([]);
      } finally {
        if (!controller.signal.aborted) setBrandsLoading(false);
      }
    }

    loadBrands();
    return () => controller.abort();
  }, [locale]);

  const clients = [
    { id: 1, image: "/images/home/client1.png" }, 
    { id: 2, image: "/images/home/client2.png" },
    { id: 3, image: "/images/home/client3.png" },
    { id: 4, image: "/images/home/client4.png" },
    { id: 5, image: "/images/home/client5.png" },
    { id: 6, image: "/images/home/client6.png" },
    { id: 7, image: "/images/home/client7.png" },
    { id: 8, image: "/images/home/client8.png" },
    { id: 9, image: "/images/home/client9.png" },
    { id: 10, image: "/images/home/client10.png" },
    { id: 11, image: "/images/home/client11.png" },
    { id: 12, image: "/images/home/client12.png" },
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
          <h2 className="text-3xl font-bold mb-2">{homeT('brandSection.title')}</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {brandsLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="bg-white p-6 shadow-md rounded-md animate-pulse"
              >
                <div className="mb-4 h-80 bg-gray-200 rounded-md" />
                <div className="h-6 bg-gray-200 rounded mb-4 w-3/4" />
                <div className="h-4 bg-gray-200 rounded mb-2" />
                <div className="h-4 bg-gray-200 rounded mb-4 w-full" />
                <div className="h-4 bg-gray-200 rounded w-1/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brands.map((brand) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-6 shadow-md rounded-md"
              >
                <div className="mb-4 flex justify-center h-80 w-auto relative">
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={200}
                    height={320}
                    className="rounded-md object-contain max-h-80 w-auto h-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">{brand.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-6">{brand.description}</p>
                {brand.link ? (
                  <Link href={brand.link} className="text-blue-500 hover:underline">
                    {homeT('brandSection.brands.0.cta')}
                  </Link>
                ) : null}
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">{homeT('aboutSection.title')}</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <Image 
                src="https://picsum.photos/600/400" 
                alt={homeT('aboutSection.title')} 
                width={600} 
                height={400}
                className="rounded-lg shadow-lg" 
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg leading-relaxed mb-8">
                {companyT('description')}
              </p>
              <p className="text-lg leading-relaxed mb-8">
                {companyT('detailedDescription')}
              </p>
              <Link href="/about" className="inline-block px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors rounded-md">
                {homeT('aboutSection.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">{homeT('clientsSection.title')}</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 max-w-6xl mx-auto mb-12">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center bg-white rounded-md shadow-sm border border-gray-200">
              <Image 
                src={client.image} 
                alt={`客户 ${client.id}`} 
                width={150} 
                height={80}
                className="transition-all hover:scale-110" 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">{homeT('contactSection.title')}</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="flex flex-col md:flex-row max-w-6xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="bg-gray-700 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{homeT('contactSection.contactInfo.title')}</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400">{homeT('contactSection.contactInfo.address')}</span>
                    <span>{companyT('address')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400">{homeT('contactSection.contactInfo.phone')}</span>
                    <span>{companyT('phone')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400">{homeT('contactSection.contactInfo.email')}</span>
                    <span>{companyT('email')}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-blue-400">{homeT('contactSection.contactInfo.workHours')}</span>
                    <span>{companyT('workHours')}</span>
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
                <h3 className="text-xl font-bold mb-4">{homeT('contactSection.contactForm.title')}</h3>
                
                {submitSuccess ? (
                  <div className="text-center py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="text-2xl font-bold text-white mb-2">{homeT('contactSection.contactForm.successTitle')}</h3>
                    <p className="text-gray-300">{homeT('contactSection.contactForm.successMessage')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="name">{homeT('contactSection.contactForm.name')}</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-500" 
                        placeholder={homeT('contactSection.contactForm.namePlaceholder')} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="email">{homeT('contactSection.contactForm.email')}</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-500" 
                        placeholder={homeT('contactSection.contactForm.emailPlaceholder')} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="phone">{homeT('contactSection.contactForm.phone')}</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 rounded-md bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-500" 
                        placeholder={homeT('contactSection.contactForm.phonePlaceholder')} 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="message">{homeT('contactSection.contactForm.message')}</label>
                      <textarea 
                        id="message" 
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 rounded-md bg-gray-600 border border-gray-500 focus:outline-none focus:border-blue-500" 
                        placeholder={homeT('contactSection.contactForm.messagePlaceholder')} 
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
                        {isSubmitting ? homeT('contactSection.contactForm.submittingButton') : homeT('contactSection.contactForm.submitButton')}
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