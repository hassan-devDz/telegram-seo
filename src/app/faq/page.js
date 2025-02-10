"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Minus,
  Search,
  HelpCircle,
  ShoppingCart,
  Bell,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

// بيانات الأسئلة الشائعة
const faqCategories = {
  general: {
    name: "أسئلة عامة",
    icon: HelpCircle,
    questions: [
      {
        id: 1,
        question: "ما هو FreeDzert؟",
        answer:
          "FreeDzert هو بوت تلغرام متخصص في خدمات الطلب التلقائي والتنبيهات لمنتجات دزرت. نوفر خدمات متنوعة تشمل التنبيهات الفورية، إضافة المنتجات للسلة تلقائياً، والطلب التلقائي.",
      },
      {
        id: 2,
        question: "كيف يمكنني البدء باستخدام الخدمة؟",
        answer:
          "يمكنك البدء باختيار الباقة المناسبة لك من صفحة المنتجات، ثم إتمام عملية الشراء. بعد ذلك ستتلقى رسالة تحتوي على تعليمات البدء على تلغرام.",
      },
    ],
  },
  notifications: {
    name: "خدمة التنبيهات",
    icon: Bell,
    questions: [
      {
        id: 3,
        question: "كيف تعمل خدمة التنبيهات؟",
        answer:
          "يقوم البوت بمراقبة المنتجات التي تهمك بشكل مستمر، وعند توفر أي منها سيرسل لك تنبيهاً فورياً على تلغرام. يمكنك أيضاً تخصيص إعدادات التنبيهات حسب احتياجاتك.",
      },
      {
        id: 4,
        question: "هل التنبيهات فورية؟",
        answer:
          "نعم، نستخدم تقنيات متقدمة لضمان وصول التنبيهات بشكل فوري بمجرد توفر المنتج.",
      },
    ],
  },
  autoOrder: {
    name: "الطلب التلقائي",
    icon: ShoppingCart,
    questions: [
      {
        id: 5,
        question: "هل الطلب التلقائي آمن؟",
        answer:
          "نعم، نستخدم أحدث تقنيات الأمان لحماية بياناتك وضمان سرية معلوماتك. جميع المعاملات مشفرة وآمنة.",
      },
      {
        id: 6,
        question: "كم من الوقت يستغرق تنفيذ الطلب التلقائي؟",
        answer:
          "يتم تنفيذ الطلب بشكل فوري بمجرد توفر المنتج، مما يضمن لك الحصول على المنتج قبل نفاد الكمية.",
      },
    ],
  },
  support: {
    name: "الدعم الفني",
    icon: MessageCircle,
    questions: [
      {
        id: 7,
        question: "كيف يمكنني التواصل مع الدعم الفني؟",
        answer:
          "يمكنك التواصل معنا عبر قنوات متعددة: البوت مباشرة على تلغرام، أو عبر نموذج الاتصال في موقعنا، أو عبر البريد الإلكتروني.",
      },
    ],
  },
};

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <motion.div
      initial={false}
      className="border-b border-gray-200 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full py-4 text-right flex items-center justify-between"
      >
        <span className="font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-blue-600 flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-gray-600 leading-relaxed">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [activeQuestionId, setActiveQuestionId] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("general");

  // تصفية الأسئلة حسب البحث
  const filterQuestions = (questions) => {
    if (!searchQuery) return questions;
    return questions.filter(
      (q) =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* رأس الصفحة */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-4"
          >
            الأسئلة الشائعة
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
          >
            كل ما تريد معرفته عن خدمات FreeDzert
          </motion.p>
        </div>

        {/* البحث */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative">
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث في الأسئلة الشائعة..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-12 py-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
            />
          </div>
        </motion.div>

        {/* التصنيفات والأسئلة */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* شريط التصنيفات */}
          <div className="flex overflow-x-auto border-b">
            {Object.entries(faqCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`flex items-center justify-center gap-2 py-4 px-6 transition-colors whitespace-nowrap ${
                    activeCategory === key
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              );
            })}
          </div>

          {/* قائمة الأسئلة */}
          <div className="p-6">
            {filterQuestions(faqCategories[activeCategory].questions).length >
            0 ? (
              filterQuestions(faqCategories[activeCategory].questions).map(
                (item) => (
                  <FAQItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isOpen={activeQuestionId === item.id}
                    onClick={() =>
                      setActiveQuestionId(
                        activeQuestionId === item.id ? null : item.id
                      )
                    }
                  />
                )
              )
            ) : (
              <div className="text-center py-8">
                <Search className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-600">لم نجد أي نتائج تطابق بحثك</p>
              </div>
            )}
          </div>
        </div>

        {/* قسم المساعدة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center bg-blue-50 rounded-2xl p-8"
        >
          <h3 className="text-xl font-bold mb-4">لم تجد إجابة لسؤالك؟</h3>
          <p className="text-gray-600 mb-6">
            فريق الدعم الفني متواجد على مدار الساعة لمساعدتك
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <MessageCircle className="w-5 h-5 ml-2" />
            تواصل معنا
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
