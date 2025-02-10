"use client";

import { motion } from "framer-motion";
import { Shield, AlertTriangle, FileText, CheckCircle } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "الشروط والأحكام العامة",
      content: [
        "الموافقة على جميع الشروط والأحكام قبل استخدام الخدمة",
        "يحق للشركة تعديل الشروط والأحكام في أي وقت",
        "الخدمة متاحة فقط للمستخدمين الذين لديهم حساب مفعل في دزرت",
        "يجب أن يكون المستخدم قد أتم 18 عاماً",
        "يحق للشركة إيقاف الخدمة عن أي مستخدم يخالف الشروط",
      ],
    },
    {
      title: "شروط الاستخدام",
      content: [
        "استخدام الخدمة للطلب الشخصي فقط",
        "عدم محاولة اختراق أو التلاعب بالنظام",
        "عدم استخدام الخدمة لأغراض غير قانونية",
        "الحفاظ على سرية معلومات الحساب",
        "عدم مشاركة معلومات الدخول مع الآخرين",
      ],
    },
    {
      title: "سياسة الاسترجاع",
      content: [
        "لا يمكن استرجاع قيمة الباقات بعد تفعيلها",
        "لا يمكن استرجاع الرصيد غير المستخدم",
        "في حال فشل الطلب لا يتم خصم من رصيد الباقة",
        "يمكن نقل الرصيد المتبقي لحساب آخر بموافقة الإدارة",
        "لا يتم استرجاع قيمة الطلبات المنفذة",
      ],
    },
    {
      title: "حدود المسؤولية",
      content: [
        "الشركة غير مسؤولة عن تأخر أو فشل الطلبات لأسباب خارجة عن إرادتها",
        "الشركة غير مسؤولة عن أي أضرار ناتجة عن سوء استخدام الخدمة",
        "المستخدم مسؤول عن صحة البيانات المدخلة",
        "الشركة غير مسؤولة عن أي مشاكل في موقع دزرت",
        "الشركة غير مسؤولة عن توفر أو نفاد المنتجات",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* رأس الصفحة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-block bg-blue-100 p-4 rounded-full mb-4">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold mb-4">الشروط والأحكام</h1>
          <p className="text-gray-600">
            يرجى قراءة الشروط والأحكام بعناية قبل استخدام خدمة الطلب التلقائي
          </p>
        </motion.div>

        {/* محتوى الشروط */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <h2 className="text-xl font-bold mb-6 flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-600" />
                {section.title}
              </h2>
              <ul className="space-y-4">
                {section.content.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* تنبيه مهم */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl mx-auto mt-8 bg-amber-50 rounded-xl p-6 flex items-start gap-3"
        >
          <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-amber-800 mb-2">تنبيه مهم</h3>
            <p className="text-amber-700">
              باستخدامك للخدمة، فإنك توافق على جميع الشروط والأحكام المذكورة
              أعلاه. في حال عدم موافقتك على أي من هذه الشروط، يرجى عدم استخدام
              الخدمة.
            </p>
          </div>
        </motion.div>

        {/* معلومات التواصل */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            للاستفسارات والدعم الفني، يرجى التواصل معنا عبر{" "}
            <a
              href="https://t.me/AutoDzertBot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              البوت
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
