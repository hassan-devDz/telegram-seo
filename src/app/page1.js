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

// "use client";

// import { motion } from "framer-motion";
// import { products } from "@/config/site";
// import ProductCard from "@/components/ProductCard";
// import { ShoppingCart, Bell, Zap } from "lucide-react";

// export default function HomePage() {
//   return (
//     <div className="min-h-screen">
//       {/* القسم الرئيسي */}
//       <section className="pt-24 pb-12 text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
//         >
//           بوتات تلغرام للطلب التلقائي
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
//         >
//           احصل على تنبيهات فورية وخدمة الطلب التلقائي لمنتجات دزرت
//         </motion.p>
//       </section>

//       {/* قسم المميزات */}
//       <section className="py-12 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             خدماتنا المميزة
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">
//             {/* خدمة التنبيهات */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               className="bg-white p-6 rounded-xl shadow-lg"
//             >
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//                 <Bell className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">خدمة التنبيهات</h3>
//               <p className="text-gray-600 mb-4">
//                 تنبيهات فورية عند توفر المنتجات مع إمكانية الإضافة للسلة
//                 تلقائياً
//               </p>
//               <ul className="space-y-2 mb-4">
//                 <li className="flex items-center text-sm text-gray-600">
//                   <span className="w-2 h-2 bg-blue-600 rounded-full ml-2"></span>
//                   تنبيهات فورية
//                 </li>
//                 <li className="flex items-center text-sm text-gray-600">
//                   <span className="w-2 h-2 bg-blue-600 rounded-full ml-2"></span>
//                   دعم على مدار الساعة
//                 </li>
//               </ul>
//             </motion.div>

//             {/* خدمة السلة */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.3 }}
//               className="bg-white p-6 rounded-xl shadow-lg"
//             >
//               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
//                 <ShoppingCart className="w-6 h-6 text-purple-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">خدمة السلة</h3>
//               <p className="text-gray-600 mb-4">
//                 إضافة المنتجات للسلة تلقائياً وبسرعة عالية
//               </p>
//               <ul className="space-y-2 mb-4">
//                 <li className="flex items-center text-sm text-gray-600">
//                   <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
//                   إضافة تلقائية للسلة
//                 </li>
//                 <li className="flex items-center text-sm text-gray-600">
//                   <span className="w-2 h-2 bg-purple-600 rounded-full ml-2"></span>
//                   سرعة في الاستجابة
//                 </li>
//               </ul>
//             </motion.div>

//             {/* خدمة الطلب التلقائي */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//               className="bg-white p-6 rounded-xl shadow-lg"
//             >
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//                 <Zap className="w-6 h-6 text-green-600" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">خدمة الطلب التلقائي</h3>
//               <p className="text-gray-600 mb-4">
//                 طلب المنتجات تلقائياً عند توفرها دون تدخل منك
//               </p>
//               <ul className="space-y-2 mb-4">
//                 <li className="flex items-center text-sm text-gray-600">
//                   <span className="w-2 h-2 bg-green-600 rounded-full ml-2"></span>
//                   طلب تلقائي فوري
//                 </li>
//                 <li className="flex items-center text-sm text-gray-600">
//                   <span className="w-2 h-2 bg-green-600 rounded-full ml-2"></span>
//                   تنبيهات عند تنفيذ الطلب
//                 </li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* قسم الباقات */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">باقاتنا</h2>

//           {/* خدمة التنبيهات */}
//           <div className="mb-16">
//             <h3 className="text-2xl font-bold mb-8 text-center">
//               خدمة التنبيهات
//             </h3>
//             <div className="grid md:grid-cols-4 gap-6">
//               {products.notifications.plans.map((plan) => (
//                 <ProductCard
//                   key={plan.id}
//                   product={products.notifications}
//                   plan={plan}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* خدمة السلة */}
//           <div className="mb-16">
//             <h3 className="text-2xl font-bold mb-8 text-center">خدمة السلة</h3>
//             <div className="grid md:grid-cols-4 gap-6">
//               {products.cart.plans.map((plan) => (
//                 <ProductCard
//                   key={plan.id}
//                   product={products.cart}
//                   plan={plan}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* خدمة الطلب التلقائي */}
//           <div>
//             <h3 className="text-2xl font-bold mb-8 text-center">
//               خدمة الطلب التلقائي
//             </h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               {products.autoOrder.plans.map((plan) => (
//                 <ProductCard
//                   key={plan.id}
//                   product={products.autoOrder}
//                   plan={plan}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* قسم الأسئلة الشائعة */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             الأسئلة الشائعة
//           </h2>
//           <div className="max-w-3xl mx-auto space-y-6">
//             <div className="bg-white rounded-lg p-6 shadow-md">
//               <h3 className="text-lg font-bold mb-2">كيف يعمل البوت؟</h3>
//               <p className="text-gray-600">
//                 يقوم البوت بمراقبة المنتجات بشكل مستمر وعند توفر المنتج يقوم
//                 بإرسال تنبيه فوري لك مع إمكانية الطلب التلقائي.
//               </p>
//             </div>
//             <div className="bg-white rounded-lg p-6 shadow-md">
//               <h3 className="text-lg font-bold mb-2">هل الخدمة آمنة؟</h3>
//               <p className="text-gray-600">
//                 نعم، نحن نستخدم أحدث تقنيات الأمان لحماية بياناتك وضمان سرية
//                 معلوماتك.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
///////////////////////////////

"use client";

import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { 
  Bell, 
  ShoppingCart, 
  Zap,
  Sparkles,
  Bot,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Users,
  DollarSign,
  Repeat,
  Star,
  Gift
} from "lucide-react";
import { products } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
// مكون الشريط المتحرك في الخلفية
function InfiniteMarquee({ items, direction = 1 }) {
  return (
    <div className="relative flex overflow-hidden opacity-5">
      <motion.div
        animate={{
          x: direction > 0 ? [0, -1035] : [-1035, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-4 whitespace-nowrap"
      >
        {items.map((Icon, index) => (
          <Icon key={index} className="w-12 h-12" />
        ))}
      </motion.div>
      <motion.div
        animate={{
          x: direction > 0 ? [1035, 0] : [0, 1035]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-4 whitespace-nowrap absolute left-full"
      >
        {items.map((Icon, index) => (
          <Icon key={index} className="w-12 h-12" />
        ))}
      </motion.div>
    </div>
  );
}

// مكون الإحصائيات المتحركة
function AnimatedStats() {
  return (
    <div className="grid grid-cols-4 gap-8 mb-16">
      {[
        { icon: Users, value: "5000+", label: "مستخدم نشط" },
        { icon: CheckCircle, value: "98%", label: "نسبة نجاح الطلبات" },
        { icon: Clock, value: "24/7", label: "دعم فني متواصل" },
        { icon: DollarSign, value: "100K+", label: "طلب تم تنفيذه" }
      ].map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/80 backdrop-blur rounded-2xl p-6 text-center shadow-xl"
        >
          <div className="mb-4 inline-flex p-4 rounded-xl bg-blue-50">
            <stat.icon className="w-8 h-8 text-blue-600" />
          </div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.5 + index * 0.1 }}
            className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          >
            {stat.value}
          </motion.div>
          <div className="text-gray-600">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}

// مكون الميزات المتحركة
function FeatureCard({ icon: Icon, title, description, benefits, color, delay }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100`}
    >
      {/* تأثير الخلفية المتحرك */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br opacity-0"
        animate={{
          opacity: isHovered ? 0.1 : 0
        }}
        style={{ background: color }}
      />

      <div className="p-8 relative z-10">
        <motion.div
          animate={{
            rotateY: isHovered ? 180 : 0
          }}
          transition={{ duration: 0.4 }}
          className="w-16 h-16 rounded-2xl bg-gradient-to-br mb-6 flex items-center justify-center"
          style={{ background: color }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>

        <motion.div
          animate={{
            height: isHovered ? "auto" : 0,
            opacity: isHovered ? 1 : 0
          }}
          className="space-y-3 overflow-hidden"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">{benefit}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* شريط السعر */}
      <motion.div
        animate={{
          y: isHovered ? 0 : 100
        }}
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 text-center"
      >
        ابدأ من 5.99 ريال
      </motion.div>
    </motion.div>
  );
}

// مكون عرض السعر
function PricingCard({ plan, isPopular }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative rounded-2xl bg-white p-8 ${
        isPopular 
          ? 'ring-4 ring-blue-500 shadow-blue-200'
          : 'border border-gray-200'
      } shadow-xl`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm">
            الأكثر طلباً
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {plan.price} <span className="text-lg text-gray-500">ريال</span>
        </div>
        <p className="text-gray-600">
          {plan.duration ? `لمدة ${plan.duration} يوم` : `${plan.orders} طلبات`}
        </p>
      </div>

      <motion.div
        animate={{
          height: isHovered ? "auto" : "100%"
        }}
        className="space-y-4 mb-8"
      >
        {[
          "تنبيهات فورية",
          "دعم على مدار الساعة",
          "تحديثات مجانية",
          "ضمان نجاح الطلب",
        ].map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle className={`w-5 h-5 ${
              isHovered ? 'text-blue-500' : 'text-green-500'
            }`} />
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-4 rounded-xl ${
          isPopular
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
        } transition-all duration-300`}
      >
        اشترك الآن
      </motion.button>
    </motion.div>
  );
}
import React from 'react';
import { useMotionValue } from 'framer-motion';
import { Check } from 'lucide-react';

export  function ProductCard({ product, plan }) {
  const [isHovered, setIsHovered] = useState(false);
  
  // تأثير ثلاثي الأبعاد
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  const springConfig = { damping: 25, stiffness: 400 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.x + rect.width / 2;
    const centerY = rect.y + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative h-full perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className={`relative h-full bg-white rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm border
          ${product.features ? "border-blue-500/50" : "border-gray-200"}
        `}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* تأثير الخلفية المتألقة */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 mix-blend-overlay" />

        {/* شريط مميز للباقة المفضلة */}
        {product?.features && (
          <div className="absolute top-4 right-4">
            <motion.div
              className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>الأكثر طلباً</span>
            </motion.div>
          </div>
        )}

        {/* محتوى البطاقة */}
        <div className="p-6 space-y-6">
          {/* العنوان والسعر */}
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {plan.name}
            </h3>
            <div className="flex justify-center items-baseline gap-1">
              <span className="text-3xl font-bold text-blue-600">
                {plan.price}
              </span>
              <span className="text-gray-500">ريال</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">{plan.duration}</p>
          </div>

          {/* المميزات */}
          <ul className="space-y-3">
            {product.features?.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-center gap-2 text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <Check className="w-5 h-5 text-green-500" />
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>

          {/* زر الشراء */}
          <motion.button
            className={`w-full py-3 px-4 rounded-xl font-medium transition-all
              ${
                product?.features
                  ? "bg-blue-500 text-white hover:bg-blue-600"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            اشترك الآن
          </motion.button>
        </div>

        {/* تأثير التوهج عند التحويم */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl" />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
// الصفحة الرئيسية
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-blue-50">
      {/* القسم الرئيسي */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* النص الرئيسي */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center bg-black/5 rounded-full px-3 py-1 mb-6">
                  <span className="flex w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2" />
                  <span className="text-sm text-gray-700">
                    متوفر الآن - ابدأ مجاناً
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  احصل على منتجاتك من 
                  <span className="text-blue-600 relative">
                    دزرت
                    <svg
                      className="absolute bottom-0 left-0 w-full h-2 text-blue-200"
                      viewBox="0 0 100 10"
                    >
                      <path
                        d="M0 5 Q 25 0, 50 5 Q 75 10, 100 5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </span>
                  <br />
                  بشكل تلقائي وفوري
                </h1>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  لا داعي للانتظار والمراقبة المستمرة. دع بوت FreeDzert يقوم بكل
                  شيء نيابة عنك، من المراقبة وحتى إتمام عملية الشراء.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Link
                    href="/products"
                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-medium hover:bg-blue-700 
                      transform hover:-translate-y-1 transition-all duration-200 shadow-lg hover:shadow-xl
                      flex items-center gap-2"
                  >
                    ابدأ الآن
                    <span className="bg-blue-500 p-1 rounded">👉</span>
                  </Link>

                  <a
                    href="https://t.me/AutoDzertBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 px-8 py-4 rounded-xl font-medium hover:bg-gray-50
                      border border-gray-200 transform hover:-translate-y-1 transition-all duration-200 
                      shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <Bot className="w-5 h-5" />
                    جرب البوت مجاناً
                  </a>
                </div>

                {/* شهادات المستخدمين */}
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3 rtl:space-x-reverse">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative"
                      >
                        <Image
                          src={`/avatars/user${i}.jpg`}
                          alt={`مستخدم ${i}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-medium">+5000 مستخدم نشط</div>
                    <div className="flex items-center text-yellow-500">
                      {"★".repeat(5)}{" "}
                      <span className="text-gray-600 mr-1">4.9/5</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* العرض المرئي */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative z-10"
              >
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/demo.gif"
                      alt="عرض توضيحي للبوت"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-600">يعمل الآن</span>
                    </div>
                    <div className="text-sm text-gray-600">
                      آخر تحديث: قبل 5 دقائق
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* تأثيرات الخلفية */}
              <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" />
              <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob" />
            </div>
          </div>
        </div>
      </section>
      {/* قسم المميزات */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "طلب تلقائي",
                description: "يراقب المنتجات ويقوم بالطلب فور توفرها",
                stats: "99.9% نسبة نجاح",
              },
              {
                icon: Clock,
                title: "سرعة فائقة",
                description: "يتم تنفيذ الطلب خلال ثوانٍ من توفر المنتج",
                stats: "أسرع من التصفح اليدوي بـ 50 مرة",
              },
              {
                icon: Shield,
                title: "حماية متكاملة",
                description: "تشفير كامل للبيانات وحماية متقدمة",
                stats: "0 حالات اختراق",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100
                  hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 
                  transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                />

                <div className="mb-6">
                  <feature.icon className="w-12 h-12 text-blue-600" />
                </div>

                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>

                <div className="flex items-center text-sm text-blue-600 font-medium">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  {feature.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* قسم المميزات */}
      {/* قسم المميزات */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4"
            >
              خدماتنا المميزة
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              اختر من بين خدماتنا المتنوعة ما يناسب احتياجاتك
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Bell}
              title="خدمة التنبيهات"
              description="تنبيهات فورية عند توفر المنتجات"
              benefits={[
                "تنبيهات لحظية",
                "إشعارات عبر التلغرام",
                "تخصيص التنبيهات",
                "مراقبة 24/7",
              ]}
              color="from-blue-500 to-blue-600"
              delay={0.2}
            />
            <FeatureCard
              icon={ShoppingCart}
              title="خدمة السلة"
              description="إضافة المنتجات للسلة تلقائياً"
              benefits={[
                "إضافة فورية للسلة",
                "سرعة في الاستجابة",
                "متابعة حالة السلة",
                "تقارير مفصلة",
              ]}
              color="from-purple-500 to-purple-600"
              delay={0.3}
            />
            <FeatureCard
              icon={Zap}
              title="خدمة الطلب التلقائي"
              description="طلب المنتجات تلقائياً عند توفرها"
              benefits={[
                "طلب تلقائي كامل",
                "دفع آمن وسريع",
                "تأكيد فوري للطلب",
                "ضمان نجاح العملية",
              ]}
              color="from-green-500 to-green-600"
              delay={0.4}
            />
          </div>
        </div>
      </section>
      {/* قسم الباقات */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm mb-4"
            >
              باقات مرنة
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-bold mb-4"
            >
              اختر الباقة المناسبة لك
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              باقات متنوعة تناسب جميع الاحتياجات مع إمكانية الترقية في أي وقت
            </motion.p>
          </div>

          {/* باقات التنبيهات والسلة */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              خدمة التنبيهات والسلة
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { duration: 30, price: 5.99 },
                { duration: 60, price: 11.98, popular: true },
                { duration: 90, price: 17.97 },
                { duration: 180, price: 35.94 },
              ].map((plan, index) => (
                <PricingCard
                  key={index}
                  plan={{
                    name: `${plan.duration} يوم`,
                    price: plan.price,
                    duration: plan.duration,
                  }}
                  isPopular={plan.popular}
                />
              ))}
            </div>
          </div>

          {/* باقات الطلب التلقائي */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              خدمة الطلب التلقائي
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { orders: 6, price: 100 },
                { orders: 12, price: 180, popular: true },
                { orders: 24, price: 300 },
              ].map((plan, index) => (
                <PricingCard
                  key={index}
                  plan={{
                    name: `${plan.orders} طلبات`,
                    price: plan.price,
                    orders: plan.orders,
                  }}
                  isPopular={plan.popular}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
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
      {/* قسم المميزات الإضافية */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "حماية كاملة",
                description: "تشفير متقدم لجميع البيانات وأمان عالي المستوى",
              },
              {
                icon: Star,
                title: "سرعة فائقة",
                description: "استجابة فورية وتنفيذ سريع لجميع العمليات",
              },
              {
                icon: Repeat,
                title: "تحديثات مستمرة",
                description: "تطوير مستمر للخدمات وإضافة ميزات جديدة",
              },
              {
                icon: Clock,
                title: "دعم 24/7",
                description: "فريق دعم فني متخصص متواجد على مدار الساعة",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <div className="mb-4 inline-flex p-3 rounded-lg bg-blue-50">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <AnimatedStats />
      </section>
      {/* قسم الأسئلة الشائعة */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold mb-4"
            >
              الأسئلة الشائعة
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-gray-600"
            >
              إجابات على أكثر الأسئلة شيوعاً
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "كيف يعمل البوت؟",
                answer:
                  "يقوم البوت بمراقبة المنتجات المطلوبة بشكل مستمر، وعند توفر أي منها يقوم بتنفيذ الإجراء المطلوب سواء كان تنبيه أو إضافة للسلة أو طلب تلقائي.",
              },
              {
                question: "هل الخدمة آمنة؟",
                answer:
                  "نعم، نستخدم أحدث تقنيات التشفير والأمان لحماية بياناتك. جميع المعلومات الحساسة مشفرة ومحمية بشكل كامل.",
              },
              {
                question: "كيف يتم الدفع؟",
                answer:
                  "نوفر طرق دفع متعددة وآمنة تشمل البطاقات الائتمانية و Apple Pay ومدى. جميع المعاملات المالية مؤمنة بالكامل.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm mb-4"
              >
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* قسم الدعوة للعمل */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8"
          >
            ابدأ رحلتك مع FreeDzert اليوم
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-12 max-w-2xl mx-auto opacity-90"
          >
            احصل على تجربة تسوق سلسة وذكية مع أفضل خدمة طلب تلقائي في دزرت
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="https://t.me/AutoDzertBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors"
            >
              <Bot className="w-6 h-6" />
              ابدأ الآن مجاناً
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}