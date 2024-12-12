import { notFound } from "next/navigation";

export const bots = [
  {
    username: "OfficialDezertBot",
    title: "نجوم ديزرت",
    description:
      "بوت تابع لقناة التنبيهات المجانية  لمنتجات دزرت يقوم بالتنبيه والاضافة للسلة وان شاء الله الطلب مباشرة دون تدخل منك",
    activeUsers: "5000+",
    imageUrl: "/bots/OfficialDezertBot.jpg",
    category: "خدمات",
    isVerified: false,
    commands: ["/start"],
    features: ["الدفع التلقائي", "إدارة المهام", "التنبيهات"],
  },
  // يمكن إضافة المزيد من البوتات هنا
];

export async function getBotData(username) {
  const bot = bots.find((b) => b.username === username);
  if (!bot) {
    notFound();
  }
  return bot;
}

export async function getAllBots() {
  return bots;
}

export async function getBotsByCategory(category) {
  return bots.filter((b) => b.category === category);
}
