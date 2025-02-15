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
import ProductCard from "@/components/ProductCard";
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

function FloatingIcons() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className="fixed inset-0 w-full h-full overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {[...Array(20)].map((_, i) => {
        // Generate random positions from -100 to 100 to cover full width
        const startX = Math.random() * 200 - 100; // -100 to 100
        const startY = Math.random() * 200 - 100; // -100 to 100
        const endX = Math.random() * 200 - 100; // -100 to 100
        const endY = Math.random() * 200 - 100; // -100 to 100

        return (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
            }}
            initial={{
              x: `${startX}vw`,
              y: `${startY}vh`,
              scale: 0,
              rotate: 0,
            }}
            animate={{
              x: [`${startX}vw`, `${endX}vw`],
              y: [`${startY}vh`, `${endY}vh`],
              scale: [0, 1, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 30,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          >
            <div className="text-blue-500/10 text-4xl transform -translate-x-1/2 -translate-y-1/2">
              {
                [
                  <Bot key="bot" />,
                  <ShoppingCart key="cart" />,
                  <Zap key="zap" />,
                  <Bell key="bell" />,
                ][Math.floor(Math.random() * 4)]
              }
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
function FeatureCard1({ icon: Icon, title, description,benefits, color }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-2xl p-8 bg-white shadow-lg border border-gray-100
        before:absolute before:inset-0 before:bg-gradient-to-r ${color} before:opacity-0 
        before:transition-opacity hover:before:opacity-10`}
    >
      <div className="relative z-10">
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            rotate: isHovered ? [0, -10, 10, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-white to-gray-50 
            shadow-lg flex items-center justify-center mb-6"
        >
          <Icon className="w-8 h-8 text-blue-600" />
        </motion.div>

        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <motion.div
          animate={{
            height: isHovered ? "auto" : "auto",
            opacity: isHovered ? 1 : 1,
          }}
          className="space-y-3 overflow-hidden"
        >
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 ">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-gray-600">{benefit}</span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-wrap gap-3"
          animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
        >
          {["24/7", "سريع", "آمن"].map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}



// مكون عرض السعر
function PricingCard({ plan, isPopular , product }) {
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
          ? "ring-4 ring-blue-500 shadow-blue-200"
          : "border border-gray-200"
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
          height: isHovered ? "auto" : "100%",
        }}
        className="space-y-4 mb-8"
      >
        {product.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <CheckCircle
              className={`w-5 h-5 ${
                isHovered ? "text-blue-500" : "text-green-500"
              }`}
            />
            <span className="text-gray-600">{feature}</span>
          </div>
        ))}
      </motion.div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-4 rounded-xl ${
          isPopular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "bg-gray-100 text-gray-800 hover:bg-gray-200"
        } transition-all duration-300`}
      >
        اشترك الآن
      </motion.button>
    </motion.div>
  );
}

// الصفحة الرئيسية
export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    const { scrollYProgress } = useScroll({
      target: heroRef,
      offset: ["start start", "end start"],
    });

    // تأثيرات التمرير مع useTransform
    const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const titleScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* شرائط متحركة في الخلفية */}

      {/* القسم الرئيسي */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center"
      >
        {" "}
        <FloatingIcons />
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-20 w-full rotate-12">
            <InfiniteMarquee items={[ShoppingCart, Bell, Bot, Zap]} />
          </div>
          <div className="absolute top-60 w-full -rotate-12">
            <InfiniteMarquee
              items={[CheckCircle, Shield, Clock, Gift]}
              direction={-1}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 pt-32 pb-16">
          {/* عنوان رئيسي متحرك */}
          <motion.div
            style={{ opacity: titleOpacity, scale: titleScale }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-6 py-2 rounded-full mb-8"
            >
              <Sparkles className="w-5 h-5" />
              <span>أفضل خدمة طلب تلقائي في دزرت</span>
              <Sparkles className="w-5 h-5" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-transparent bg-clip-text"
            >
              احصل على منتجاتك
              <br />
              بشكل تلقائي
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            >
              بوت ذكي يقوم بمراقبة المنتجات وطلبها تلقائياً فور توفرها باستخدام
              أحدث التقنيات
            </motion.p>

            {/* أزرار التحرك */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <motion.a
                href="#features"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-8 py-4 rounded-xl bg-blue-600 text-white"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                  animate={{
                    x: ["0%", "100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <span className="relative flex items-center gap-2">
                  اكتشف خدماتنا
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="https://t.me/AutoDzertBot"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 rounded-xl bg-white shadow-lg text-blue-600 border border-blue-100"
              >
                <span className="flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  جرب البوت مجاناً
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* الإحصائيات */}
          <AnimatedStats />
        </div>
      </section>
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
            <FeatureCard1
              icon={Bell}
              title="خدمة التنبيهات"
              description="تنبيهات فورية عند توفر المنتجات مع إمكانية الإضافة للسلة تلقائياً"
              benefits={[
                "تنبيهات لحظية",
                "إشعارات عبر التلغرام",
                "تخصيص التنبيهات",
                "مراقبة 24/7",
              ]}
              color="from-blue-500/5 to-blue-600/5"
            />
            <FeatureCard1
              icon={ShoppingCart}
              title="خدمة السلة"
              description="إضافة المنتجات للسلة تلقائياً وبسرعة عالية مع ضمان نجاح العملية"
              benefits={[
                "تنبيهات لحظية",
                "إشعارات عبر التلغرام",
                "تخصيص التنبيهات",
                "مراقبة 24/7",
              ]}
              color="from-purple-500/5 to-purple-600/5"
            />
            <FeatureCard1
              icon={Zap}
              title="خدمة الطلب التلقائي"
              description="طلب المنتجات تلقائياً عند توفرها دون أي تدخل منك"
              benefits={[
                "تنبيهات لحظية",
                "إشعارات عبر التلغرام",
                "تخصيص التنبيهات",
                "مراقبة 24/7",
              ]}
              color="from-green-500/5 to-green-600/5"
            />
          </div>
        </div>
      </section>
      {/* قسم المميزات */}

      {/* قسم الباقات */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50 relative">
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

          {/* باقات الطلب التلقائي */}
          <div className="mb-16 relative container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-center">
              خدمة التنبيهات
            </h3>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
              {products.notifications.plans.map((plan) => (
                <ProductCard
                  key={plan.id}
                  product={products.notifications}
                  plan={plan}
                  isPopular={plan.duration === 90}
                />
              ))}
            </div>
          </div>
          <div className="mb-16 relative container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-center">خدمة السلة</h3>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
              {products.cart.plans.map((plan) => (
                <ProductCard
                  key={plan.id}
                  product={products.cart}
                  plan={plan}
                  isPopular={plan.duration === 60}
                />
              ))}
            </div>
          </div>
          <div className="mb-16 relative container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-8 text-center">
              خدمة الطلب التلقائي
            </h3>
            <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
              {products.autoOrder.plans.map((plan) => (
                <ProductCard
                  key={plan.id}
                  product={products.autoOrder}
                  plan={plan}
                  isPopular={plan.price === 180}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* قسم المميزات الإضافية */}
      <section className="py-24 relative">
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
                icon: Zap,
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

      {/* قسم الأسئلة الشائعة */}
      <section className="py-24 bg-gray-50 relative">
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
      <section className="py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white relative">
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