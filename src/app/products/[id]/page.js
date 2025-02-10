// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { products } from "@/config/site";
// import {
//   Check,
//   AlertTriangle,
//   ShoppingCart,
//   Shield,
//   Zap,
//   Clock,ChevronLeft
// } from "lucide-react";
// import Link from "next/link";
// import * as React from "react";
// export default  function ProductDetailsPage({ params }) {
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [addingToCart, setAddingToCart] = useState(false);
//     const { id } = React.use(params);
//     console.log(params, id, products[id]);
    
//   // محاكاة استرجاع بيانات المنتج حسب المعرف
//   const product = products[params.id] || products.autoOrder; // مثال

//   const handleAddToCart = async () => {
//     if (!selectedPlan) return;

//     setAddingToCart(true);
//     // محاكاة إضافة للسلة
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     setAddingToCart(false);
//     // يمكن إضافة التوجيه للسلة هنا
//   };

//   return (
//     <div className="min-h-screen py-24">
//       <div className="container mx-auto px-4">
//         <div className="max-w-5xl mx-auto">
//           {/* رأس الصفحة */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-center mb-12"
//           >
//             <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
//               {product.category}
//             </span>
//             <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
//             <p className="text-xl text-gray-600 max-w-2xl mx-auto">
//               {product.description}
//             </p>
//           </motion.div>

//           {/* المميزات الرئيسية */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="grid grid-cols-3 gap-6 mb-12"
//           >
//             <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                 <Zap className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="font-semibold mb-2">سرعة في الأداء</h3>
//               <p className="text-gray-600 text-sm">
//                 تنفيذ فوري للطلبات وتنبيهات لحظية
//               </p>
//             </div>

//             <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                 <Shield className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="font-semibold mb-2">حماية وأمان</h3>
//               <p className="text-gray-600 text-sm">
//                 تشفير كامل للبيانات وحماية متقدمة
//               </p>
//             </div>

//             <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
//               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
//                 <Clock className="w-6 h-6 text-blue-600" />
//               </div>
//               <h3 className="font-semibold mb-2">دعم متواصل</h3>
//               <p className="text-gray-600 text-sm">
//                 فريق دعم متواجد على مدار الساعة
//               </p>
//             </div>
//           </motion.div>

//           {/* مميزات المنتج */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="grid md:grid-cols-2 gap-8 mb-12"
//           >
//             {/* القسم الأيمن: المميزات */}
//             <div className="bg-white rounded-2xl shadow-sm p-8">
//               <h2 className="text-2xl font-bold mb-6">مميزات الخدمة</h2>
//               <div className="space-y-4">
//                 {product.features.map((feature, index) => (
//                   <div key={index} className="flex items-start">
//                     <div className="flex-shrink-0 mt-1">
//                       <Check className="w-5 h-5 text-green-500" />
//                     </div>
//                     <p className="mr-3 text-gray-600">{feature}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* القسم الأيسر: ملاحظات مهمة */}
//             <div className="bg-white rounded-2xl shadow-sm p-8">
//               <h2 className="text-2xl font-bold mb-6">ملاحظات مهمة</h2>
//               <div className="space-y-4">
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 mt-1">
//                     <AlertTriangle className="w-5 h-5 text-amber-500" />
//                   </div>
//                   <p className="mr-3 text-gray-600">
//                     الخدمة تعمل فقط مع حسابات دزرت المفعلة
//                   </p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 mt-1">
//                     <AlertTriangle className="w-5 h-5 text-amber-500" />
//                   </div>
//                   <p className="mr-3 text-gray-600">
//                     يجب تفعيل الإشعارات في تلغرام لاستلام التنبيهات
//                   </p>
//                 </div>
//                 <div className="flex items-start">
//                   <div className="flex-shrink-0 mt-1">
//                     <AlertTriangle className="w-5 h-5 text-amber-500" />
//                   </div>
//                   <p className="mr-3 text-gray-600">
//                     لا يمكن استرداد قيمة الاشتراك بعد تفعيله
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </motion.section>

//           {/* خطط الأسعار */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="mb-12"
//           >
//             <h2 className="text-2xl font-bold mb-6 text-center">
//               اختر الباقة المناسبة لك
//             </h2>
//             <div className="grid md:grid-cols-4 gap-6">
//               {product.plans.map((plan) => (
//                 <motion.div
//                   key={plan.id}
//                   whileHover={{ y: -5 }}
//                   className={`bg-white rounded-xl p-6 shadow-sm border-2 transition-colors cursor-pointer ${
//                     selectedPlan?.id === plan.id
//                       ? "border-blue-600"
//                       : "border-transparent hover:border-gray-200"
//                   }`}
//                   onClick={() => setSelectedPlan(plan)}
//                 >
//                   <div className="text-center mb-4">
//                     <h3 className="font-bold mb-2">{plan.name}</h3>
//                     <div className="text-3xl font-bold text-blue-600 mb-1">
//                       {plan.price} ريال
//                     </div>
//                     {plan.duration && (
//                       <div className="text-sm text-gray-500">
//                         لمدة {plan.duration} يوم
//                       </div>
//                     )}
//                     {plan.orders && (
//                       <div className="text-sm text-gray-500">
//                         {plan.orders} طلبات
//                       </div>
//                     )}
//                   </div>

//                   {/* زر الاختيار */}
//                   <button
//                     className={`w-full py-2 rounded-lg border transition-colors ${
//                       selectedPlan?.id === plan.id
//                         ? "bg-blue-600 text-white border-blue-600"
//                         : "border-gray-200 text-gray-600 hover:bg-gray-50"
//                     }`}
//                   >
//                     {selectedPlan?.id === plan.id
//                       ? "تم الاختيار"
//                       : "اختر هذه الباقة"}
//                   </button>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.section>

//           {/* زر إضافة للسلة */}
//           {selectedPlan && (
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="text-center"
//             >
//               <button
//                 onClick={handleAddToCart}
//                 disabled={addingToCart}
//                 className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center space-x-2 rtl:space-x-reverse"
//               >
//                 <ShoppingCart className="w-5 h-5" />
//                 <span>{addingToCart ? "جاري الإضافة..." : "إضافة للسلة"}</span>
//               </button>
//             </motion.div>
//           )}

//           {/* الضمان والدعم */}
//           <motion.section
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.4 }}
//             className="mt-16 text-center bg-blue-50 rounded-2xl p-8"
//           >
//             <h2 className="text-2xl font-bold mb-4">الدعم والمساعدة</h2>
//             <p className="text-gray-600 mb-6">
//               فريق الدعم الفني متواجد على مدار الساعة لمساعدتك في أي وقت
//             </p>
//             <Link
//               href="/contact"
//               className="inline-flex items-center text-blue-600 hover:text-blue-700"
//             >
//               تواصل معنا
//               <ChevronLeft className="w-5 h-5 mr-1" />
//             </Link>
//           </motion.section>
//         </div>
//       </div>
//     </div>
//   );
// }
import ProductDetails from "./ProductDetails";
import { products } from "@/config/site";
import { notFound } from "next/navigation";
 import * as React from "react";

// الصفحة الرئيسية - غير متزامنة
export default async function ProductPage({ params }) {
      const { id } = await params;
  const product = products[id];

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}