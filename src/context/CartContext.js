
"use client";

import { createContext, useContext, useState, useEffect } from "react";
import Toast from "@/components/ui/Toast";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: "" });

  // استرجاع السلة من localStorage عند بدء التطبيق
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
    setIsLoading(false);
  }, []);

  // حفظ السلة في localStorage عند التحديث
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, isLoading]);

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id && item.planId === product.planId
      );

      const newCart = existingProduct
        ? currentCart.map((item) =>
            item.id === product.id && item.planId === product.planId
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...currentCart, { ...product, quantity: 1 }];

      showToast("تمت إضافة المنتج إلى السلة");
      return newCart;
    });
  };

  const removeFromCart = (productId, planId) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) => !(item.id === productId && item.planId === planId)
      )
    );
    showToast("تم حذف المنتج من السلة");
  };

  const updateQuantity = (productId, planId, quantity) => {
    if (quantity < 1) return;
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId && item.planId === planId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  if (isLoading) {
    return null;
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
      }}
    >
      {children}
      <Toast
        message={toast.message}
        isVisible={toast.show}
        onClose={() => setToast({ show: false, message: "" })}
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}