"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MessageCircle, Phone, Mail, CreditCard, Shield, HelpCircle } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    company: [
      { name: "من نحن", href: "/about" },
      { name: "اتصل بنا", href: "/contact" },
      { name: "المدونة", href: "/blog" },
    ],
    legal: [
      { name: "سياسة الخصوصية", href: "/privacy" },
      { name: "الشروط والأحكام", href: "/terms" },
      { name: "سياسة الاسترجاع", href: "/refund-policy" },
    ],
    support: [
      { name: "الأسئلة الشائعة", href: "/faq" },
      { name: "الدعم الفني", href: "/support" },
      { name: "دليل الاستخدام", href: "/guide" },
    ],
  };

  const footerFeatures = [
    {
      icon: CreditCard,
      title: "دفع آمن",
      description: "طرق دفع متعددة وآمنة"
    },
    {
      icon: Shield,
      title: "حماية المعلومات",
      description: "تشفير كامل للبيانات"
    },
    {
      icon: HelpCircle,
      title: "دعم متواصل",
      description: "متواجدون على مدار الساعة"
    }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* قسم المميزات */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {footerFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* القسم الرئيسي */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* معلومات الشركة */}
          <div>
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold text-blue-600">{siteConfig.name}</h2>
            </Link>
            <p className="mt-4 text-gray-600 text-sm">
              {siteConfig.description}
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center text-gray-600">
                <Phone className="w-5 h-5 ml-2" />
                <span className="text-sm">+966 50 000 0000</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mail className="w-5 h-5 ml-2" />
                <span className="text-sm">support@freedzert.store</span>
              </div>
            </div>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات قانونية */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">معلومات قانونية</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* الدعم */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">الدعم</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* شريط الحقوق */}
      <div className="border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-gray-600 mb-4 md:mb-0">
              © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة
            </div>
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <a
                href={siteConfig.socials.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}