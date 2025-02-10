"use client";

import { motion } from "framer-motion";
import { Shield, Lock, FileText } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            سياسة الخصوصية والشروط والأحكام
          </h1>
          <p className="text-xl text-gray-600">
            نلتزم بحماية خصوصيتك وبيان كيفية استخدام معلوماتك
          </p>
        </motion.div>

        {/* القسم الأول: سياسة الخصوصية */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl shadow-sm p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold">سياسة الخصوصية</h2>
          </div>

          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                المعلومات التي نجمعها
              </h3>
              <p>نقوم بجمع المعلومات التالية:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>معرف تلغرام الخاص بك</li>
                <li>تاريخ المعاملات والمشتريات</li>
                <li>تفضيلات التنبيهات والإعدادات</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                كيفية استخدام المعلومات
              </h3>
              <p>نستخدم معلوماتك لتقديم خدماتنا وتحسينها، بما في ذلك:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>إرسال التنبيهات والإشعارات</li>
                <li>معالجة عمليات الشراء والمدفوعات</li>
                <li>تحسين تجربة المستخدم وأداء الخدمة</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* القسم الثاني: الشروط والأحكام */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold">الشروط والأحكام</h2>
          </div>

          <div className="space-y-6 text-gray-600">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                استخدام الخدمة
              </h3>
              <p>باستخدامك لخدماتنا، فإنك توافق على:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>الالتزام بسياسات وشروط الخدمة</li>
                <li>عدم إساءة استخدام الخدمة أو محاولة اختراقها</li>
                <li>تحمل مسؤولية المحافظة على سرية بيانات حسابك</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                الاشتراكات والمدفوعات
              </h3>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>جميع الأسعار نهائية وتشمل ضريبة القيمة المضافة</li>
                <li>لا يمكن استرداد قيمة الاشتراكات بعد تفعيلها</li>
                <li>يمكن إلغاء الاشتراك في أي وقت لإيقاف التجديد التلقائي</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                إخلاء المسؤولية
              </h3>
              <p>
                نحن نقدم خدماتنا &quot;كما هي&quot; ولا نضمن توفر المنتجات في دزرت أو نجاح
                عملية الشراء. نحن نساعد في أتمتة عملية الشراء ولكن لا نتحمل
                مسؤولية أي خسائر أو أضرار ناتجة عن استخدام الخدمة.
              </p>
            </div>
          </div>
        </motion.section>

        {/* القسم الثالث: أمان البيانات */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-sm p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-bold">أمان البيانات</h2>
          </div>

          <div className="space-y-6 text-gray-600">
            <p>نحن نتخذ جميع الإجراءات اللازمة لحماية بياناتك، بما في ذلك:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>تشفير جميع البيانات الحساسة</li>
              <li>استخدام بروتوكولات أمان متقدمة</li>
              <li>مراقبة مستمرة لأي نشاط مشبوه</li>
              <li>تحديثات منتظمة لأنظمة الأمان</li>
            </ul>
          </div>
        </motion.section>

        {/* تحديث السياسة */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12 text-gray-600"
        >
          <p>آخر تحديث: 10 فبراير 2025</p>
        </motion.div>
      </div>
    </div>
  );
}
