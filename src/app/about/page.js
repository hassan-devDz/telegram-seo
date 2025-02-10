"use client";

import { motion } from "framer-motion";
import { Users, Shield, Zap, Award, ChevronLeft } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Users,
    title: "خدمة عملاء متميزة",
    description: "فريق دعم متخصص متواجد على مدار الساعة لمساعدتك في أي وقت",
  },
  {
    icon: Shield,
    title: "أمان وموثوقية",
    description: "نستخدم أحدث تقنيات الأمان لحماية بياناتك وضمان خصوصيتك",
  },
  {
    icon: Zap,
    title: "سرعة في الأداء",
    description: "تنفيذ فوري للطلبات وتنبيهات لحظية عند توفر المنتجات",
  },
  {
    icon: Award,
    title: "جودة الخدمة",
    description: "نسعى دائماً لتقديم أفضل تجربة مستخدم وخدمات عالية الجودة",
  },
];

const stats = [
  {
    number: "20K+",
    label: "مستخدم نشط",
  },
  {
    number: "99.9%",
    label: "نسبة توافر الخدمة",
  },
  {
    number: "24/7",
    label: "دعم فني",
  },
  {
    number: "100K+",
    label: "طلب تم تنفيذه",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen py-24">
      {/* القسم الرئيسي */}
      <section className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="text-4xl font-bold mb-6">
            نحن نسهل عليك التسوق في دزرت
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            FreeDzert هو حلك الأمثل للتسوق السريع والفعال في دزرت. نوفر لك خدمات
            متكاملة تشمل التنبيهات الفورية، الإضافة التلقائية للسلة، والطلب
            التلقائي.
          </p>
        </motion.div>

        {/* الإحصائيات */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl shadow-sm p-6"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* قسم المميزات */}
      <section className="bg-gray-50 py-16 mb-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-center mb-12"
          >
            لماذا FreeDzert؟
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl p-6 shadow-sm"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* قسم القيم */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            قيمنا
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 mb-12"
          >
            نحن نؤمن بتقديم أفضل تجربة لعملائنا من خلال الالتزام بمجموعة من
            القيم الأساسية
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">الشفافية</h3>
              <p className="text-gray-600">
                نؤمن بالوضوح والشفافية في جميع تعاملاتنا مع العملاء
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">الابتكار</h3>
              <p className="text-gray-600">
                نسعى دائماً لتطوير حلول مبتكرة تلبي احتياجات عملائنا
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-2">التميز</h3>
              <p className="text-gray-600">
                نلتزم بتقديم أعلى مستويات الجودة في خدماتنا
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* قسم الدعوة للعمل */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-6"
          >
            ابدأ رحلتك مع FreeDzert اليوم
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            اكتشف كيف يمكن لخدماتنا أن تجعل تجربة التسوق الخاصة بك أسهل وأسرع
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/products"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              اكتشف خدماتنا
              <ChevronLeft className="w-5 h-5 mr-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
