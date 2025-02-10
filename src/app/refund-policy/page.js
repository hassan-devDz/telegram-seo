"use client";

import { motion } from "framer-motion";
import {
  RefreshCcw,
  AlertTriangle,
  CircleDollarSign,
  ShieldCheck,
  Clock,
  HelpCircle,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function RefundPolicyPage() {
  const policies = [
    {
      title: "الباقات والخدمات",
      icon: CircleDollarSign,
      items: [
        {
          type: "not-refundable",
          text: "لا يمكن استرجاع قيمة الباقات بعد تفعيلها",
          reason: "يتم تفعيل الخدمة فور شراء الباقة",
        },
        {
          type: "not-refundable",
          text: "لا يمكن استرجاع الرصيد غير المستخدم",
          reason: "الرصيد مخصص للاستخدام في النظام فقط",
        },
        {
          type: "refundable",
          text: "في حال فشل الطلب لا يتم خصم من رصيد الباقة",
          reason: "يتم الخصم فقط عند نجاح الطلب",
        },
      ],
    },
    {
      title: "حالات خاصة",
      icon: Clock,
      items: [
        {
          type: "conditional",
          text: "يمكن نقل الرصيد المتبقي لحساب آخر بموافقة الإدارة",
          reason: "يتطلب موافقة خاصة من الدعم الفني",
        },
        {
          type: "not-refundable",
          text: "لا يتم استرجاع قيمة الطلبات المنفذة",
          reason: "الطلبات المنفذة تعتبر مكتملة ونهائية",
        },
        {
          type: "refundable",
          text: "في حال وجود خطأ تقني من النظام",
          reason: "يتم التعويض أو إعادة المبلغ حسب الحالة",
        },
      ],
    },
  ];

  const generalNotes = [
    "جميع المعاملات تخضع لسياسة الاسترجاع المذكورة",
    "يحق للإدارة تعديل سياسة الاسترجاع في أي وقت",
    "يتم مراجعة كل طلب استرجاع على حدة",
    "يجب التواصل مع الدعم الفني لأي استفسارات",
  ];

  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* رأس الصفحة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
            <RefreshCcw className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4">سياسة الاسترجاع</h1>
          <p className="text-xl text-gray-600">
            تعرف على سياسة الاسترجاع والتعويض الخاصة بخدماتنا
          </p>
        </motion.div>

        {/* السياسات الرئيسية */}
        <div className="max-w-4xl mx-auto space-y-8">
          {policies.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm overflow-hidden"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-blue-600" />
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-6">
                    {section.items.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                            item.type === "refundable"
                              ? "bg-green-100"
                              : item.type === "not-refundable"
                              ? "bg-red-100"
                              : "bg-amber-100"
                          }`}
                        >
                          {item.type === "refundable" ? (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          ) : item.type === "not-refundable" ? (
                            <XCircle className="w-5 h-5 text-red-600" />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-amber-600" />
                          )}
                        </div>
                        <div>
                          <p className="font-medium mb-1">{item.text}</p>
                          <p className="text-sm text-gray-600">{item.reason}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ملاحظات عامة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto mt-8 bg-blue-50 rounded-2xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-bold">ملاحظات عامة</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {generalNotes.map((note, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-700">{note}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* قسم الدعم */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto mt-12 text-center"
        >
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">تحتاج مساعدة؟</h2>
            <p className="text-gray-600 mb-6">
              إذا كان لديك أي استفسار حول سياسة الاسترجاع، فريق الدعم جاهز
              لمساعدتك
            </p>
            <a
              href="https://t.me/AutoDzertBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              تواصل مع الدعم الفني
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
