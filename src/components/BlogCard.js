"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export default function BlogCard({ post }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
    >
      {/* صورة المقال */}
      <div className="relative h-48 md:h-64">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>

      {/* محتوى المقال */}
      <div className="p-6">
        {/* التصنيف */}
        <div className="mb-4">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>

        {/* العنوان */}
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          <Link
            href={`/blog/${post.slug}`}
            className="hover:text-blue-600 transition-colors"
          >
            {post.title}
          </Link>
        </h3>

        {/* المقدمة */}
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

        {/* التفاصيل */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <div className="flex items-center ml-4">
            <Calendar className="w-4 h-4 ml-1" />
            {post.date}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 ml-1" />
            {post.readTime} دقائق للقراءة
          </div>
        </div>

        {/* زر القراءة */}
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          قراءة المزيد
          <ArrowLeft className="w-4 h-4 mr-1" />
        </Link>
      </div>
    </motion.article>
  );
}
