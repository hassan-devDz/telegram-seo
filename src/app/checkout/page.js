"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { CreditCard, Shield, Lock, CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const subtotal = getCartTotal();
  const vat = subtotal * 0.15;
  const total = subtotal + vat;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // محاكاة عملية الدفع
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // عند نجاح عملية الدفع
    clearCart();
    router.push("/checkout/success");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* رأس الصفحة */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-3">إتمام الدفع</h1>
            <p className="text-gray-600">
              أدخل تفاصيل البطاقة لإتمام عملية الشراء
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* نموذج الدفع */}
            <div className="md:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* رقم البطاقة */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      رقم البطاقة
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    </div>
                  </div>

                  {/* اسم حامل البطاقة */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      اسم حامل البطاقة
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {/* تاريخ الانتهاء */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        تاريخ الانتهاء
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>

                    {/* رمز الأمان */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        رمز الأمان (CVV)
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          placeholder="000"
                          className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        />
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      </div>
                    </div>
                  </div>

                  {/* معلومات الأمان */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-4 rounded-lg">
                    <Shield className="w-5 h-5 text-green-500" />
                    <span>جميع المعاملات مشفرة وآمنة</span>
                  </div>

                  {/* زر الدفع */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full py-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        جاري معالجة الدفع...
                      </>
                    ) : (
                      <>
                        <CreditCard className="w-5 h-5" />
                        ادفع {total.toFixed(2)} ريال
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* ملخص الطلب */}
            <div>
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-lg mb-4">ملخص الطلب</h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-gray-600">
                    <span>المجموع الفرعي</span>
                    <span>{subtotal.toFixed(2)} ريال</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>ضريبة القيمة المضافة</span>
                    <span>{vat.toFixed(2)} ريال</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>الإجمالي</span>
                      <span className="text-blue-600">
                        {total.toFixed(2)} ريال
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
