"use client";

import { motion } from "framer-motion";
import { useRef, useEffect } from "react";
import { ArrowRight, Sparkles, Zap, Bot } from "lucide-react";

const glowVariants = {
  initial: { opacity: 0, scale: 0.5 },
  animate: {
    opacity: [0.5, 1, 0.5],
    scale: [1, 1.2, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function BlogHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];

    // تهيئة حجم Canvas
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 500;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // إنشاء الجزيئات
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = `hsla(${Math.random() * 50 + 200}, 100%, 70%, ${
          Math.random() * 0.3 + 0.1
        })`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
        if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // إنشاء مجموعة من الجزيئات
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // تحريك الجزيئات
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <div className="relative h-[500px] overflow-hidden bg-gradient-to-b from-blue-900 to-blue-950">
      {/* خلفية متحركة */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.3 }}
      />

      {/* توهج الخلفية */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[100px] opacity-20"
      />

      {/* المحتوى */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-sm text-blue-200 px-4 py-2 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4" />
          <span>مقالات مميزة عن خدمات FreeDzert</span>
          <Sparkles className="w-4 h-4" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
        >
          اكتشف عالم
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-200">
            التسوق الذكي
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-blue-100 max-w-2xl mb-12"
        >
          مقالات وأدلة شاملة لمساعدتك في استخدام خدماتنا بأفضل شكل ممكن
        </motion.p>

        {/* أزرار التنقل */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#latest"
            className="group bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl flex items-center gap-2 transition-all hover:gap-4"
          >
            <Zap className="w-5 h-5" />
            <span>أحدث المقالات</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:-rotate-45" />
          </a>

          <a
            href="https://t.me/AutoDzertBot"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-900/50 hover:bg-blue-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-xl flex items-center gap-2 transition-all hover:gap-4"
          >
            <Bot className="w-5 h-5" />
            <span>جرب البوت مجاناً</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:-rotate-45" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
