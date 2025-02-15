"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Bell,
  ShoppingCart,
  Zap,
  Sparkles,
  Bot,
  ArrowRight,
} from "lucide-react";
import { products } from "@/config/site";
import ProductCard from "@/components/ProductCard";

function GlowingBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-pulse delay-700" />
      <div className="absolute bottom-[-10%] left-[40%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/95 backdrop-blur-[2px]" />
    </div>
  );
}

const icons = [
  <Bot key="bot" />,
  <ShoppingCart key="cart" />,
  <Zap key="zap" />,
  <Bell key="bell" />,
];


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
      {[...Array(100)].map((_, i) => {
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

function HeroText() {
  const letters = "بوتات تلغرام للطلب التلقائي".split("");

  return (
    <h1 className="text-5xl md:text-6xl font-bold mb-6 relative">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: index * 0.05,
            type: "spring",
            stiffness: 100,
          }}
          className="inline-block"
          whileHover={{
            scale: 1.2,
            color: "#3B82F6",
            rotate: Math.random() * 20 - 10,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </h1>
  );
}

function FeatureCard({ icon: Icon, title, description, color }) {
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

export default function HomePage() {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!isLoaded) {
    return null;
  }

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <GlowingBackground />
      <FloatingIcons />

      {/* Main Section */}
      <motion.section
        className="relative pt-32 pb-24 text-center"
        style={{ y, opacity }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            className="flex items-center gap-2 bg-blue-900/10 backdrop-blur-md text-blue-600 px-6 py-2 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4" />
            <span>أفضل خدمة طلب تلقائي في دزرت</span>
            <Sparkles className="w-4 h-4" />
          </motion.div>
        </motion.div>

        <div className="container mx-auto px-4">
          <HeroText />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            احصل على تنبيهات فورية وخدمة الطلب التلقائي لمنتجات دزرت
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#features"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden px-8 py-4 rounded-xl bg-blue-600 text-white 
                shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800"
                animate={{
                  x: ["0%", "100%"],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <span className="relative flex items-center gap-2">
                <Zap className="w-5 h-5" />
                اكتشف خدماتنا
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/AutoDzertBot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-white/80 backdrop-blur text-blue-600 
                border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                جرب البوت مجاناً
              </span>
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16"
          >
            خدماتنا المميزة
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Bell}
              title="خدمة التنبيهات"
              description="تنبيهات فورية عند توفر المنتجات مع إمكانية الإضافة للسلة تلقائياً"
              color="from-blue-500/5 to-blue-600/5"
            />
            <FeatureCard
              icon={ShoppingCart}
              title="خدمة السلة"
              description="إضافة المنتجات للسلة تلقائياً وبسرعة عالية مع ضمان نجاح العملية"
              color="from-purple-500/5 to-purple-600/5"
            />
            <FeatureCard
              icon={Zap}
              title="خدمة الطلب التلقائي"
              description="طلب المنتجات تلقائياً عند توفرها دون أي تدخل منك"
              color="from-green-500/5 to-green-600/5"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
