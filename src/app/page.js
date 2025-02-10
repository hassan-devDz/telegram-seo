// // src/app/page.js
// import ChannelCard from "@/components/ChannelCard";
// import BotCard from "@/components/BotCard";
// import Header from "@/components/Header";
// import { getAllChannels } from "@/data/channels";
// import { getAllBots } from "@/data/bots";

// export default async function Home() {
//   // استرجاع البيانات بشكل غير متزامن
//   const [channels, bots] = await Promise.all([getAllChannels(), getAllBots()]);

//   return (
//     <>
//       <Header />

//       <section className="mb-12">
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">أحدث القنوات</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {channels.map((channel) => (
//             <ChannelCard key={channel.username} channel={channel} />
//           ))}
//         </div>
//       </section>

//       <section>
//         <h2 className="text-2xl font-bold mb-6 text-gray-800">أحدث البوتات</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {bots.map((bot) => (
//             <BotCard key={bot.username} bot={bot} />
//           ))}
//         </div>
//       </section>

//       <div className="mt-12 text-center">
//         <p className="text-gray-600 mb-4">لم تجد ما تبحث عنه؟</p>
//         <div className="space-x-4 rtl:space-x-reverse">
//           <a href="/channels" className="text-blue-500 hover:text-blue-700">
//             جميع القنوات
//           </a>
//           <span className="text-gray-300">|</span>
//           <a href="/bots" className="text-blue-500 hover:text-blue-700">
//             جميع البوتات
//           </a>
//         </div>
//       </div>
//     </>
//   );
// }

"use client";

import { motion } from "framer-motion";
import { products } from "@/config/site";
import ProductCard from "@/components/ProductCard";
import { ShoppingCart, Bell, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* القسم الرئيسي */}
      <section className="pt-24 pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
        >
          بوتات تلغرام للطلب التلقائي
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          احصل على تنبيهات فورية وخدمة الطلب التلقائي لمنتجات دزرت
        </motion.p>
      </section>

      {/* قسم المميزات */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            خدماتنا المميزة
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* خدمة التنبيهات */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">خدمة التنبيهات</h3>
              <p className="text-gray-600 mb-4">
                تنبيهات فورية عند توفر المنتجات مع إمكانية الإضافة للسلة
                تلقائياً
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full ml-2"></span>
                  تنبيهات فورية
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-blue-600 rounded-full ml-2"></span>
                  دعم على مدار الساعة
                </li>
              </ul>
            </motion.div>

            {/* خدمة السلة */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">خدمة السلة</h3>
              <p className="text-gray-600 mb-4">
                إضافة المنتجات للسلة تلقائياً وبسرعة عالية
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  إضافة تلقائية للسلة
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
                  سرعة في الاستجابة
                </li>
              </ul>
            </motion.div>

            {/* خدمة الطلب التلقائي */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">خدمة الطلب التلقائي</h3>
              <p className="text-gray-600 mb-4">
                طلب المنتجات تلقائياً عند توفرها دون تدخل منك
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full ml-2"></span>
                  طلب تلقائي فوري
                </li>
                <li className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full ml-2"></span>
                  تنبيهات عند تنفيذ الطلب
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* قسم الباقات */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">باقاتنا</h2>

          {/* خدمة التنبيهات */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              خدمة التنبيهات
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {products.notifications.plans.map((plan) => (
                <ProductCard
                  key={plan.id}
                  product={products.notifications}
                  plan={plan}
                />
              ))}
            </div>
          </div>

          {/* خدمة السلة */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">خدمة السلة</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {products.cart.plans.map((plan) => (
                <ProductCard
                  key={plan.id}
                  product={products.cart}
                  plan={plan}
                />
              ))}
            </div>
          </div>

          {/* خدمة الطلب التلقائي */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              خدمة الطلب التلقائي
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {products.autoOrder.plans.map((plan) => (
                <ProductCard
                  key={plan.id}
                  product={products.autoOrder}
                  plan={plan}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* قسم الأسئلة الشائعة */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            الأسئلة الشائعة
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2">كيف يعمل البوت؟</h3>
              <p className="text-gray-600">
                يقوم البوت بمراقبة المنتجات بشكل مستمر وعند توفر المنتج يقوم
                بإرسال تنبيه فوري لك مع إمكانية الطلب التلقائي.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-bold mb-2">هل الخدمة آمنة؟</h3>
              <p className="text-gray-600">
                نعم، نحن نستخدم أحدث تقنيات الأمان لحماية بياناتك وضمان سرية
                معلوماتك.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
