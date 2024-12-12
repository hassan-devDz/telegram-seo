"use client";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useAnimation,
} from "framer-motion";
import { useEffect, useState } from "react";

export default function BotCard({ bot }) {
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  // تأثيرات حركية متقدمة
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const springConfig = { damping: 25, stiffness: 300 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);

  useEffect(() => {
    if (isHovered) {
      controls.start("hover");
    } else {
      controls.start("initial");
    }
  }, [isHovered, controls]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 2;
    const yPct = (mouseY / height - 0.5) * 2;
    x.set(xPct * 100);
    y.set(yPct * 100);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      className="group relative w-full h-[28rem] perspective-1000"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-3xl transform -translate-z-10 group-hover:translate-z-0 transition-transform duration-500" />

      <motion.div
        variants={{
          initial: { scale: 1 },
          hover: { scale: 1.02, translateZ: 50 },
        }}
        className="relative h-full bg-gradient-to-br from-white to-white/90 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm border border-white/20"
      >
        {/* صورة البوت مع تأثيرات متقدمة */}
        <div className="relative h-1/2 overflow-hidden">
          <motion.div
            variants={{
              initial: { scale: 1.2 },
              hover: { scale: 1 },
            }}
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"
          />
          <motion.div
            variants={{
              initial: { scale: 1 },
              hover: { scale: 1.1, rotate: 3 },
            }}
            className="relative w-full h-full"
          >
            <Image
              src={bot.imageUrl}
              alt={bot.title}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* شارة التوثيق المتحركة */}
          {bot.isVerified && (
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                hover: { scale: 1.1 },
              }}
              className="absolute top-4 left-4 z-20"
            >
              <div className="relative flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <svg
                    className="w-5 h-5 text-green-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </motion.div>
                <span className="text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                  موثق رسمياً
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* محتوى البطاقة */}
        <div className="relative p-6 z-20">
          <motion.div
            variants={{
              initial: { y: 0 },
              hover: { y: -10 },
            }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              {bot.title}
            </h2>
            <p className="text-gray-600 line-clamp-2 leading-relaxed">
              {bot.description}
            </p>

            {/* معلومات المستخدمين النشطين */}
            <div className="flex items-center gap-3">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-3 h-3 bg-green-500 rounded-full"
              />
              <span className="text-sm text-gray-600">
                {bot.activeUsers} مستخدم نشط
              </span>
            </div>
          </motion.div>

          {/* زر العرض المتقدم */}
          <motion.div
            variants={{
              initial: { y: 20, opacity: 0 },
              hover: { y: 0, opacity: 1 },
            }}
            className="absolute bottom-6 left-6 right-6"
          >
            <Link href={`/bot/${bot.username}`} className="relative block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 p-[2px]"
              >
                <div className="relative bg-white rounded-[10px] p-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <div className="relative flex items-center justify-center">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 font-medium">
                      عرض التفاصيل
                    </span>
                    <motion.svg
                      className="w-5 h-5 mr-2 text-blue-600"
                      variants={{
                        initial: { x: -10, opacity: 0 },
                        hover: { x: 0, opacity: 1 },
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </motion.svg>
                  </div>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
