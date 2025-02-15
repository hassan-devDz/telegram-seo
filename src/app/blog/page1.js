// src/app/blog/page.js

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import { Search } from "lucide-react";
import { getAllPosts } from "@/data/blog";

const categories = ["الكل", "دليل الاستخدام", "نصائح", "تحديثات", "أخبار"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [searchQuery, setSearchQuery] = useState("");

  const posts = getAllPosts();

  // تصفية المقالات حسب التصنيف والبحث
  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "الكل" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        {/* رأس الصفحة */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            مدونة FreeDzert
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            آخر الأخبار والنصائح حول خدمات FreeDzert
          </motion.p>
        </div>

        {/* شريط البحث والتصفية */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* البحث */}
            <div className="relative w-full md:w-96">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
              />
            </div>

            {/* التصنيفات */}
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* قائمة المقالات */}
        {filteredPosts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">لا توجد نتائج</h3>
            <p className="text-gray-600">
              لم نتمكن من العثور على أي مقالات تطابق بحثك. جرب كلمات مفتاحية
              مختلفة.
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
