"use client";

import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto text-center"
        >
          {/* رمز النجاح */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-green-500" />
          </motion.div>

          {/* رسالة النجاح */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl font-bold mb-4">تم الدفع بنجاح!</h1>
            <p className="text-gray-600 mb-8">
              شكراً لك على الطلب. تم تفعيل خدمتك بنجاح ويمكنك البدء في استخدامها الآن.
            </p>
          </motion.div>

          {/* معلومات الخدمة */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-6 mb-8"
          >
            <h2 className="font-bold text-lg mb-4">معلومات مهمة</h2>
            <ul className="text-right text-gray-600 space-y-3">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>تم تفعيل حسابك في البوت</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>يمكنك استخدام جميع مميزات الخدمة الآن</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span>سيصلك رسالة تأكيد على تلغرام</span>
              </li>
            </ul>
          </motion.div>

          {/* روابط مهمة */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            {/* زر البوت */}
            <a
              href="https://t.me/OfficialDezertBot"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              الذهاب إلى البوت
            </a>

            {/* زر العودة للرئيسية */}
            <Link
              href="/"
              className="block w-full py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-5 h-5" />
              العودة للصفحة الرئيسية
            </Link>
          </motion.div>

          {/* ملاحظة الدعم */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-sm text-gray-500"
          >
            إذا واجهتك أي مشكلة، يرجى التواصل مع{' '}
            <a
              href="https://t.me/Tamer_Benhana"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              الدعم الفني
            </a>
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}