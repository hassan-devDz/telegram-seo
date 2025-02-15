"use client";

import { motion } from "framer-motion";
import { products } from "@/config/site";
import ProductCard from "@/components/ProductCard";

export default function ProductsPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          منتجاتنا
        </motion.h1>

        {/* خدمة التنبيهات */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">خدمة التنبيهات</h2>
           <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
                        {products.notifications.plans.map((plan) => (
                          <ProductCard
                            key={plan.id}
                            product={products.notifications}
                            plan={plan}
                            isPopular={plan.duration === 90}
                          />
                        ))}
                      </div>
        </section>

        {/* خدمة السلة */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">خدمة السلة</h2>
           <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
                        {products.cart.plans.map((plan) => (
                          <ProductCard
                            key={plan.id}
                            product={products.cart}
                            plan={plan}
                            isPopular={plan.duration === 60}
                          />
                        ))}
                      </div>
        </section>

        {/* خدمة الطلب التلقائي */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">خدمة الطلب التلقائي</h2>
         <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
                       {products.autoOrder.plans.map((plan) => (
                         <ProductCard
                           key={plan.id}
                           product={products.autoOrder}
                           plan={plan}
                           isPopular={plan.price === 180}
                         />
                       ))}
                     </div>
        </section>
      </div>
    </div>
  );
}
