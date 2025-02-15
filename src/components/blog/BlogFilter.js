"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X } from "lucide-react";
import { useState } from "react";

export default function BlogFilter({ onSearch, onCategoryChange }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = [
    { id: "all", name: "الكل", color: "bg-blue-500" },
    { id: "guide", name: "دليل الاستخدام", color: "bg-green-500" },
    { id: "tips", name: "نصائح", color: "bg-purple-500" },
    { id: "updates", name: "تحديثات", color: "bg-orange-500" },
    { id: "news", name: "أخبار", color: "bg-red-500" },
  ];

  const handleSearch = (value) => {
    setSearchValue(value);
    onSearch(value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="sticky top-20 z-30 bg-white/80 backdrop-blur-lg py-4 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* حقل البحث */}
          <div className="relative flex-1">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="ابحث في المقالات..."
                className="w-full pl-4 pr-12 py-3 rounded-xl border focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white/50"
              />
              {searchValue && (
                <button
                  onClick={() => handleSearch("")}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </motion.div>
          </div>

          {/* زر التصفية */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="md:hidden bg-blue-600 text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <Filter className="w-5 h-5" />
            تصفية
          </motion.button>

          {/* التصنيفات للشاشات الكبيرة */}
          <div className="hidden md:flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategorySelect(category.name)}
                className={`relative px-4 py-2 rounded-xl transition-colors ${
                  selectedCategory === category.name
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <motion.div
                  initial={false}
                  animate={{
                    opacity: selectedCategory === category.name ? 1 : 0,
                    scale: selectedCategory === category.name ? 1 : 0.8,
                  }}
                  className={`absolute inset-0 rounded-xl ${category.color}`}
                />
                <span className="relative z-10">{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* قائمة التصفية للجوال */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 grid grid-cols-2 gap-2"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCategorySelect(category.name)}
                  className={`p-3 rounded-xl border transition-colors ${
                    selectedCategory === category.name
                      ? `${category.color} text-white border-transparent`
                      : "border-gray-200 text-gray-600"
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
