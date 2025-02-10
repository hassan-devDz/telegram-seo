"use client";

import { motion } from "framer-motion";
import { Star, User, ThumbsUp } from "lucide-react";

// مكون النجوم
function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

// مكون المراجعة الفردية
function ReviewCard({ review }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl p-6 shadow-sm"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-medium">{review.name}</h4>
            <div className="flex items-center gap-2">
              <StarRating rating={review.rating} />
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-blue-600 transition-colors">
          <ThumbsUp className="w-5 h-5" />
        </button>
      </div>
      <p className="text-gray-600 mb-4">{review.comment}</p>
      {review.response && (
        <div className="bg-gray-50 rounded-lg p-4 mr-8">
          <div className="font-medium text-sm text-gray-900 mb-2">
            رد الإدارة
          </div>
          <p className="text-sm text-gray-600">{review.response}</p>
        </div>
      )}
    </motion.div>
  );
}

export default function ReviewSection() {
  // بيانات تجريبية للمراجعات
  const reviews = [
    {
      id: 1,
      name: "أحمد محمد",
      rating: 5,
      date: "10 فبراير 2025",
      comment:
        "خدمة ممتازة وسريعة جداً. التنبيهات تصل فورياً وتمكنت من شراء المنتجات التي أريدها بسهولة.",
      response: "شكراً لك على ثقتك بنا! نسعد دائماً بخدمتك.",
    },
    {
      id: 2,
      name: "سارة أحمد",
      rating: 4,
      date: "8 فبراير 2025",
      comment: "بوت رائع وفعال. أتمنى لو كانت هناك خيارات أكثر للتخصيص.",
    },
    {
      id: 3,
      name: "محمد علي",
      rating: 5,
      date: "5 فبراير 2025",
      comment: "الدعم الفني ممتاز والاستجابة سريعة جداً. أنصح به بشدة.",
    },
  ];

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mt-16"
    >
      <h2 className="text-2xl font-bold mb-8">آراء العملاء</h2>

      {/* ملخص التقييمات */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {averageRating.toFixed(1)}
            </div>
            <StarRating rating={Math.round(averageRating)} />
            <div className="text-sm text-gray-500 mt-1">
              من {reviews.length} تقييم
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            إضافة تقييم
          </button>
        </div>
      </div>

      {/* قائمة المراجعات */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </motion.section>
  );
}
