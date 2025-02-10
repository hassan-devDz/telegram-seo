export const siteConfig = {
  // معلومات الموقع الأساسية
  url: "https://www.freedzert.store",
  name: "متجر FreeDzert",
  description: "متجر FreeDzert - بوتات تلغرام للطلب التلقائي",

  // الكلمات المفتاحية
  keywords: [
    "بوت تلغرام",
    "طلب تلقائي",
    "دزرت",
    "تنبيهات دزرت",
    "FreeDzert",
    "متجر دزرت",
    "خدمات تلغرام",
  ],

  // روابط التواصل الاجتماعي
  socials: {
    telegram: "https://t.me/Tamer_Benhana",
    twitter: "https://x.com/benhanatamer",
  },

  // قائمة التنقل
  navigation: {
    main: [
      { name: "الرئيسية", href: "/" },
      { name: "المنتجات", href: "/products" },
      { name: "من نحن", href: "/about" },
      { name: "المدونة", href: "/blog" },
      { name: "الأسئلة الشائعة", href: "/faq" },
    ],
  },
};

// بيانات المنتجات
export const products = {
  notifications: {
    id: "notifications",
    name: "خدمة التنبيهات",
    description: "تنبيهات فورية عند توفر المنتجات",
    plans: [
      {
        id: "notif-30",
        name: "30 يوم",
        price: 5.99,
        duration: 30,
      },
      {
        id: "notif-60",
        name: "60 يوم",
        price: 11.98,
        duration: 60,
      },
      {
        id: "notif-90",
        name: "90 يوم",
        price: 17.97,
        duration: 90,
      },
      {
        id: "notif-180",
        name: "180 يوم",
        price: 35.94,
        duration: 180,
      },
    ],
    features: ["تنبيهات فورية", "دعم على مدار الساعة", "تحديثات مستمرة"],
  },
  cart: {
    id: "cart",
    name: "خدمة السلة",
    description: "إضافة المنتجات للسلة تلقائياً",
    plans: [
      {
        id: "cart-30",
        name: "30 يوم",
        price: 5.99,
        duration: 30,
      },
      {
        id: "cart-60",
        name: "60 يوم",
        price: 11.98,
        duration: 60,
      },
      {
        id: "cart-90",
        name: "90 يوم",
        price: 17.97,
        duration: 90,
      },
      {
        id: "cart-180",
        name: "180 يوم",
        price: 35.94,
        duration: 180,
      },
    ],
    features: ["إضافة تلقائية للسلة", "سرعة في الاستجابة", "دعم فني متواصل"],
  },
  autoOrder: {
    id: "auto-order",
    name: "خدمة الطلب التلقائي",
    description: "طلب المنتجات تلقائياً عند توفرها",
    plans: [
      {
        id: "order-1",
        name: "طلب واحد",
        price: 25,
        orders: 1,
      },
      {
        id: "order-6",
        name: "6 طلبات",
        price: 100,
        orders: 6,
      },
      {
        id: "order-12",
        name: "12 طلب",
        price: 180,
        orders: 12,
      },
      {
        id: "order-18",
        name: "18 طلب",
        price: 240,
        orders: 18,
      },
      {
        id: "order-24",
        name: "24 طلب",
        price: 300,
        orders: 24,
      },
      {
        id: "order-30",
        name: "30 طلب",
        price: 360,
        orders: 30,
      },
    ],
    features: [
      "طلب تلقائي فوري",
      "تنبيهات عند تنفيذ الطلب",
      "دعم فني على مدار الساعة",
      "توفير الوقت والجهد",
    ],
  },
};
