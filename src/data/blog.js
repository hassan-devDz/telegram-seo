export const blogPosts = {
  "how-to-use-auto-order": {
    id: 1,
    title: "كيف تستفيد من خدمة الطلب التلقائي في دزرت",
    slug: "how-to-use-auto-order",
    excerpt:
      "دليل شامل لاستخدام خدمة الطلب التلقائي في دزرت والحصول على أفضل النتائج",
    coverImage: "/blog/auto-order-guide.jpg",
    category: "دليل الاستخدام",
    date: "10 فبراير 2025",
    readTime: 5,
    author: {
      name: "تامر بن حنة",
      image: "/authors/tamer.jpg",
      role: "مؤسس FreeDzert",
    },
    content: [
      {
        type: "paragraph",
        content:
          "تعتبر خدمة الطلب التلقائي من أهم الخدمات التي نقدمها في FreeDzert، حيث تمكنك من طلب منتجاتك المفضلة بشكل تلقائي بمجرد توفرها.",
      },
      {
        type: "heading",
        content: "كيف تعمل الخدمة؟",
      },
      {
        type: "paragraph",
        content:
          "تقوم الخدمة بمراقبة المنتجات التي تحددها بشكل مستمر، وعند توفر أي منها يقوم النظام تلقائياً بإتمام عملية الطلب نيابة عنك.",
      },
      {
        type: "features",
        items: [
          "طلب تلقائي فوري عند توفر المنتج",
          "تنبيهات فورية عند تنفيذ الطلب",
          "دعم فني على مدار الساعة",
          "إمكانية إعداد طلبات متعددة",
        ],
      },
      {
        type: "heading",
        content: "خطوات الاستخدام",
      },
      {
        type: "steps",
        items: [
          "اختيار الباقة المناسبة",
          "إضافة معلومات الطلب",
          "تحديد المنتج والكمية",
          "انتظار توفر المنتج",
        ],
      },
      {
        type: "heading",
        content: "الباقات المتوفرة",
      },
      {
        type: "paragraph",
        content:
          "نقدم مجموعة متنوعة من الباقات لتناسب جميع الاحتياجات، بدءاً من طلب واحد وحتى 30 طلب.",
      },
      {
        type: "tips",
        items: [
          "تأكد من صحة معلومات الطلب",
          "احتفظ برصيد كافٍ في البطاقة",
          "تأكد من صلاحية العنوان",
          "راقب حالة طلباتك بشكل دوري",
        ],
      },
    ],
  },
  "best-practices-dezert-shopping": {
    id: 2,
    title: "أفضل الممارسات للتسوق في دزرت",
    slug: "best-practices-dezert-shopping",
    excerpt: "نصائح وإرشادات للتسوق الذكي في دزرت وتجنب الأخطاء الشائعة",
    coverImage: "/blog/shopping-tips.jpg",
    category: "نصائح",
    date: "8 فبراير 2025",
    readTime: 4,
    author: {
      name: "تامر بن حنة",
      image: "/authors/tamer.jpg",
      role: "مؤسس FreeDzert",
    },
    content: [
      {
        type: "paragraph",
        content:
          "التسوق في دزرت يمكن أن يكون تجربة ممتعة وناجحة إذا اتبعت بعض الممارسات الذكية.",
      },
      {
        type: "heading",
        content: "قبل التسوق",
      },
      {
        type: "tips",
        items: [
          "تأكد من تفعيل حسابك في دزرت",
          "جهز قائمة بالمنتجات المطلوبة",
          "تأكد من توفر رصيد كافٍ",
          "اشترك في خدمة التنبيهات",
        ],
      },
    ],
  },
};

export const getAllPosts = () => {
  return Object.values(blogPosts).map((post) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    coverImage: post.coverImage,
    category: post.category,
    date: post.date,
    readTime: post.readTime,
  }));
};

export const getPostBySlug = (slug) => {
  return blogPosts[slug];
};

export const getRelatedPosts = (currentPostId) => {
  return getAllPosts()
    .filter((post) => post.id !== currentPostId)
    .slice(0, 2);
};
