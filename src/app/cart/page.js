"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  CreditCard,
  ArrowLeft,
  Box,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("credit_card");

  const subtotal = getCartTotal();
  const vat = subtotal * 0.15;
  const total = subtotal + vat;
const router = useRouter();


const handleCheckout = () => {
  // توجيه المستخدم إلى صفحة الدفع
  router.push("/checkout");
};


  const paymentMethods = [
    {
      id: "credit_card",
      name: "بطاقة ائتمان",
      description: "فيزا، ماستركارد، مدى",
      icon: CreditCard,
    },
    {
      id: "apple_pay",
      name: "Apple Pay",
      description: "ادفع بسهولة عبر Apple Pay",
      icon: Box, // يمكن استبدالها بأيقونة Apple Pay المناسبة
    },
  ];

  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* رأس الصفحة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h1 className="text-3xl font-bold mb-3">سلة المشتريات</h1>
          <p className="text-gray-600">راجع طلبك قبل إتمام عملية الشراء</p>
        </motion.div>

        {/* محتوى السلة */}
        {cart.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-md mx-auto bg-white rounded-2xl shadow-sm p-8 text-center"
          >
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="w-10 h-10 text-blue-500" />
            </div>
            <h2 className="text-2xl font-bold mb-3">السلة فارغة</h2>
            <p className="text-gray-600 mb-6">
              لم تقم بإضافة أي منتجات للسلة بعد
            </p>
            <Link
              href="/products"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 ml-2" />
              تصفح المنتجات
            </Link>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* عناصر السلة */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cart.map((item) => (
                  <motion.div
                    key={`${item.id}-${item.planId}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start gap-4">
                      {/* صورة المنتج أو أيقونة */}
                      <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Box className="w-8 h-8 text-blue-500" />
                      </div>

                      {/* تفاصيل المنتج */}
                      <div className="flex-grow">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-bold text-lg mb-1">
                              {item.name}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {item.planName}
                            </p>
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-lg text-blue-600">
                              {(item.price * item.quantity).toFixed(2)} ريال
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.price.toFixed(2)} ريال / للوحدة
                            </div>
                          </div>
                        </div>

                        {/* التحكم بالكمية */}
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.planId,
                                  item.quantity - 1
                                )
                              }
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-md transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.id,
                                  item.planId,
                                  item.quantity + 1
                                )
                              }
                              className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-200 rounded-md transition-colors"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.planId)}
                            className="text-red-500 hover:text-red-600 transition-colors px-3 py-1 hover:bg-red-50 rounded-md text-sm"
                          >
                            حذف
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* ملخص الطلب */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:sticky lg:top-24 space-y-4"
            >
              {/* تفاصيل الطلب */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">ملخص الطلب</h2>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>المجموع الفرعي</span>
                    <span>{subtotal.toFixed(2)} ريال</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>ضريبة القيمة المضافة (15%)</span>
                    <span>{vat.toFixed(2)} ريال</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold text-lg">
                      <span>الإجمالي</span>
                      <span className="text-blue-600">
                        {total.toFixed(2)} ريال
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* طرق الدفع */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold mb-4">اختر طريقة الدفع</h3>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <label
                      key={method.id}
                      className={`flex items-center p-4 border rounded-lg cursor-pointer transition-all ${
                        paymentMethod === method.id
                          ? "border-blue-500 bg-blue-50"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="ml-3"
                      />
                      <div className="flex items-center gap-3">
                        <method.icon className="w-5 h-5 text-gray-600" />
                        <div>
                          <div className="font-medium">{method.name}</div>
                          <div className="text-sm text-gray-500">
                            {method.description}
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* ملاحظة مهمة */}
              <div className="bg-amber-50 rounded-xl p-4 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-800">
                  سيتم تفعيل الخدمة تلقائياً بعد إتمام عملية الدفع بنجاح
                </p>
              </div>

              {/* زر إتمام الطلب */}
              <button
                onClick={handleCheckout}
                className="w-full py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                متابعة الدفع ({total.toFixed(2)} ريال)
              </button>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
