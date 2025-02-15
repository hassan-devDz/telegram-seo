"use client";

import { useState } from "react";
import BlogHero from "@/components/blog/BlogHero";
import BlogFilter from "@/components/blog/BlogFilter";
import BlogCard3D from "@/components/blog/BlogCard3D";

// مثال لبيانات المقالات (يمكن نقلها إلى ملف منفصل)
const blogPosts = [
  {
    id: 1,
    title: "كيف تستفيد من خدمة الطلب التلقائي في دزرت",
    slug: "how-to-use-auto-order",
    excerpt:
      "دليل شامل لاستخدام خدمة الطلب التلقائي في دزرت والحصول على أفضل النتائج",
    coverImage: "/blog/auto-order-guide.jpg",
    category: "دليل الاستخدام",
    date: "10 فبراير 2025",
    readTime: 5,
    views: 1234,
    comments: 12,
  },
  {
    id: 2,
    title: "أفضل الممارسات للتسوق في دزرت",
    slug: "best-practices-dezert-shopping",
    excerpt: "نصائح وإرشادات للتسوق الذكي في دزرت وتجنب الأخطاء الشائعة",
    coverImage: "/blog/shopping-tips.jpg",
    category: "نصائح",
    date: "8 فبراير 2025",
    readTime: 4,
    views: 856,
    comments: 8,
  },
  {
    id: 3,
    title: "تحديثات جديدة في خدمة التنبيهات",
    slug: "notification-service-updates",
    excerpt: "تعرف على أحدث التحديثات والميزات الجديدة في خدمة التنبيهات",
    coverImage: "/blog/notification-updates.jpg",
    category: "تحديثات",
    date: "5 فبراير 2025",
    readTime: 3,
    views: 645,
    comments: 5,
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  // معالج البحث
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // معالج تغيير التصنيف
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // تصفية المقالات حسب البحث والتصنيف
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "الكل" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* قسم Hero */}
      <BlogHero />

      {/* المحتوى الرئيسي */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          {/* شريط التصفية */}
          <BlogFilter
            onSearch={handleSearch}
            onCategoryChange={handleCategoryChange}
          />

          {/* عرض المقالات */}
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600">
                لم يتم العثور على مقالات تطابق بحثك
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {filteredPosts.map((post) => (
                <BlogCard3D key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
