"use client";

import { motion } from "framer-motion";
import { Trash2, Plus, Minus } from "lucide-react";

export default function CartItem({ item, onUpdateQuantity, onRemove }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex items-center justify-between p-4 mb-4 bg-white rounded-xl shadow-sm border border-gray-100"
    >
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
        <p className="text-sm text-gray-500">
          {item.duration ? `${item.duration} يوم` : `${item.orders} طلبات`}
        </p>
      </div>

      <div className="flex items-center gap-6">
        {/* التحكم بالكمية */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Minus className="w-4 h-4" />
          </button>
          <span className="w-8 text-center font-medium">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>

        {/* السعر */}
        <div className="w-24 text-left">
          <div className="font-semibold text-gray-900">
            {(item.price * item.quantity).toFixed(2)} ريال
          </div>
          <div className="text-sm text-gray-500">
            {item.price.toFixed(2)} ريال / للوحدة
          </div>
        </div>

        {/* زر الحذف */}
        <button
          onClick={() => onRemove(item.id)}
          className="p-2 text-gray-400 hover:text-red-500 transition-colors"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
}
