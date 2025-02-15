"use client";

import { motion } from "framer-motion";
import {  ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState, useEffect } from "react";
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
  Gift,
} from "lucide-react";
export default function ProductCard({ product, plan, isPopular }) {
  // تحريك التفاعلات خارج JSX الأساسي
  const { addToCart } = useCart();
  const [isClient, setIsClient] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
      whileInView={{ opacity: 1, y: 0 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      //className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
      className={`relative overflow-hidden  rounded-2xl bg-white p-8 ${
        isPopular
          ? "ring-1 ring-blue-500  shadow-blue-200"
          : "border border-gray-200"
      } shadow-xl`}
    >
      <div className="block ">
        {/* شريط مميز للباقة المفضلة */}
        {isPopular && (
          <div className="absolute top-4 right-4">
            <motion.div
              className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4" />
              <span>الأكثر طلباً</span>
            </motion.div>
          </div>
        )}
        <div className="p-1">
          {/* رأس المنتج */}

          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

            <div className="text-4xl font-bold text-blue-600 mb-2">
              {plan.price} <span className="text-lg text-gray-500">ريال</span>
            </div>
            <p className="text-sm text-gray-500">{product.description}</p>
          </div>
          {/* المميزات */}

          <motion.ul
            animate={{
              height: isHovered ? "auto" : "100%",
            }}
            className="space-y-4 mb-8"
          >
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm gap-3">
                <CheckCircle
                  className={`w-5 h-5 ${
                    isHovered ? "text-blue-500" : "text-green-500"
                  }`}
                />
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </motion.ul>
          {/* الأزرار */}
          <div className="flex gap-2 flex-col xl:flex-row">
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
        {/* تأثير التوهج عند التحويم */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
          >
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/30 via-fuchsia-500/30 to-cyan-500/30 animate-gradient blur-2xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-indigo-500/20 to-purple-500/20 animate-gradient-slow blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-bl from-blue-500/20 via-rose-500/20 to-amber-500/20 mix-blend-overlay animate-gradient-slow blur-3xl" />
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
