"use client";

import { motion } from "framer-motion";
import { ShoppingCart, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";

export default function ProductCard({ product, plan }) {
  // تحريك التفاعلات خارج JSX الأساسي
  const { addToCart } = useCart();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleAddToCart = (e) => {
    e.preventDefault(); // منع التوجيه عند الضغط على زر الإضافة للسلة
    addToCart({
      id: product.id,
      planId: plan.id,
      name: product.name,
      planName: plan.name,
      price: plan.price,
      duration: plan.duration,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
    >
      <Link href={`/products/${product.id}`} className="block">
        <div className="p-6">
          {/* رأس المنتج */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              {product.name}
              {plan && (
                <span className="block text-sm text-gray-500 mt-1">
                  {plan.name}
                </span>
              )}
            </h3>
            <div className="flex justify-center items-baseline mb-2">
              <span className="text-3xl font-bold text-blue-600">
                {plan ? plan.price : product.plans[0].price}
              </span>
              <span className="mr-2 text-gray-500">ريال</span>
              {plan?.duration && (
                <span className="mr-2 text-sm text-gray-500">
                  / {plan.duration} يوم
                </span>
              )}
            </div>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>

          {/* المميزات */}
          <ul className="space-y-3 mb-6">
            {product.features.slice(0, 3).map((feature, index) => (
              <li
                key={index}
                className="flex items-center text-sm text-gray-600"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full ml-2"></span>
                {feature}
              </li>
            ))}
          </ul>

          {/* الأزرار */}
          <div className="flex gap-2">
            {isClient && (
              <button
                onClick={handleAddToCart}
                className="flex-1 py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                إضافة للسلة
              </button>
            )}
            <Link
              href={`/products/${product.id}`}
              className="py-2 px-4 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              التفاصيل
              <ChevronLeft className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
