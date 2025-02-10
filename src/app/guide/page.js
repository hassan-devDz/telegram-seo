"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Check,
  AlertTriangle,
  Package,
  Settings,
  CreditCard,
  MessageCircle,
  HelpCircle,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function GuidePage() {
  const features = [
    {
      icon: Zap,
      title: "طلب تلقائي",
      description: "طلب المنتجات تلقائياً عند توفرها",
    },
    {
      icon: CreditCard,
      title: "دفع آلي",
      description: "إكمال الدفع بشكل آلي",
    },
    {
      icon: Check,
      title: "تحقق تلقائي",
      description: "إدخال رمز التحقق تلقائياً",
    },
    {
      icon: Package,
      title: "طلبات متعددة",
      description: "إمكانية إعداد طلبات متعددة",
    },
  ];

  const packages = [
    { name: "طلب واحد", price: 25, details: "طلب واحد فقط" },
    { name: "6 طلبات", price: 100, details: "16.7 ريال للطلب" },
    { name: "12 طلب", price: 180, details: "15 ريال للطلب" },
    { name: "18 طلب", price: 240, details: "13.3 ريال للطلب" },
    { name: "24 طلب", price: 300, details: "12.5 ريال للطلب" },
    { name: "30 طلب", price: 360, details: "12 ريال للطلب" },
  ];

  const steps = [
    {
      title: "اختيار الباقة",
      description: "اختر الباقة المناسبة من قائمة شراء باقة",
      icon: Package,
    },
    {
      title: "إضافة الرصيد",
      description: "تأكد من وجود رصيد كافٍ في حسابك",
      icon: CreditCard,
    },
    {
      title: "إدخال رقم الهاتف",
      description: "أدخل رقم هاتفك المسجل في دزرت",
      icon: MessageCircle,
    },
    {
      title: "إعداد الطلب",
      description: "اختر المنتج والكمية المطلوبة",
      icon: Settings,
    },
  ];

  const tips = [
    "تأكد من صحة رقم الهاتف وتفعيله في موقع دزرت",
    "تأكد من خلو السلة من المنتجات قبل إعداد الطلب",
    "احتفظ برصيد كافٍ لتنفيذ طلباتك",
    "تأكد من صلاحية البطاقة وكفاية الرصيد",
    "يمكنك إعداد طلبات متعددة لنفس المنتج",
    "الخدمة تعمل تلقائياً 24/7",
  ];

  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* رأس الصفحة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
            <Bot className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">دليل استخدام البوت</h1>
          <p className="text-xl text-gray-600">
            دليلك الشامل لاستخدام خدمة الطلب التلقائي
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8"
          >
            <a
              href="https://t.me/AutoDzertBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Bot className="w-6 h-6 ml-2" />
              الانتقال إلى البوت
            </a>
          </motion.div>
        </motion.div>

        {/* المميزات */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">مميزات الخدمة</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* الباقات */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            الباقات المتوفرة
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <h3 className="font-bold text-lg mb-2">{pkg.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {pkg.price} ريال
                </div>
                <p className="text-gray-600">{pkg.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* خطوات الاستخدام */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">
            خطوات الاستخدام
          </h2>
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-4 mb-8"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* نصائح مهمة */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">نصائح مهمة</h2>
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {tips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{tip}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* الدعم */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-blue-50 rounded-2xl p-8"
        >
          <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">تحتاج مساعدة؟</h2>
          <p className="text-gray-600 mb-6">
            فريق الدعم متواجد على مدار الساعة لمساعدتك
          </p>
          <a
            href="https://t.me/AutoDzertBot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            تواصل مع الدعم
          </a>
        </motion.section>
      </div>
    </div>
  );
}
