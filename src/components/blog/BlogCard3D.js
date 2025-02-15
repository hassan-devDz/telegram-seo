"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  ArrowUpRight,
  Eye,
  MessageCircle,
} from "lucide-react";

export default function BlogCard3D({ post }) {
  const cardRef = useRef(null);
  const [hover, setHover] = useState(false);

  // قيم الحركة
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // إعدادات الحركة السلسة
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  // تحويل الحركة إلى دوران
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  // تحديث موقع المؤشر
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {
        setHover(false);
        x.set(0);
        y.set(0);
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative w-full rounded-2xl"
    >
      {/* تأثير الظل المتحرك */}
      <motion.div
        animate={{
          scale: hover ? 0.95 : 1,
        }}
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl transition-opacity opacity-0 group-hover:opacity-100"
      />

      {/* البطاقة الرئيسية */}
      <motion.div
        animate={{
          scale: hover ? 1.02 : 1,
          z: hover ? 50 : 0,
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        {/* صورة المقال */}
        <div className="relative h-64 overflow-hidden">
          <motion.div
            animate={{
              scale: hover ? 1.1 : 1,
            }}
            className="absolute inset-0"
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
            />
          </motion.div>
          {/* تراكب الصورة المتدرج */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* التصنيف */}
          <motion.div
            animate={{
              y: hover ? 0 : 10,
              opacity: hover ? 1 : 0,
            }}
            className="absolute top-4 right-4"
          >
            <span className="bg-blue-600/90 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm">
              {post.category}
            </span>
          </motion.div>

          {/* إحصائيات المقال */}
          <div className="absolute bottom-4 right-4 left-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-4 text-sm">
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {post.views || 0}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle className="w-4 h-4" />
                {post.comments || 0}
              </span>
            </div>
          </div>
        </div>

        {/* محتوى المقال */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>

          {/* معلومات المقال */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime} دقائق
              </span>
            </div>

            {/* زر القراءة */}
            <Link
              href={`/blog/${post.slug}`}
              className="relative group/link p-2"
            >
              <motion.div
                animate={{
                  scale: hover ? 1.2 : 1,
                }}
                className="relative z-10"
              >
                <ArrowUpRight className="w-5 h-5 text-blue-600 transform transition-transform group-hover/link:rotate-45" />
              </motion.div>
              <motion.div
                animate={{
                  scale: hover ? 1 : 0,
                }}
                className="absolute inset-0 bg-blue-100 rounded-full"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
