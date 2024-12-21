import { notFound } from "next/navigation";
// import { getChannelMembers } from "@/lib/telegram";

// export async function getChannelData1(username) {
//   try {
//     // جلب معلومات الأعضاء من تيليجرام
//     const memberInfo = await getChannelMembers(username);
    
//     // باقي المعلومات من قاعدة البيانات أو مصدر آخر
//     const channelData = {
//       username,
//       title: `قناة ${username}`,
//       description: "وصف القناة",
//       imageUrl: "/default-channel.jpg",
//       memberCount: memberInfo.memberCount,
//       onlineCount: memberInfo.onlineCount,
//     };

//     return channelData;
//   } catch (error) {
//     console.error("Error fetching channel data:", error);
//     return {
//       username,
//       title: `قناة ${username}`,
//       description: "وصف القناة",
//       memberCount: "غير متاح",
//       onlineCount: 0,
//       imageUrl: "/default-channel.jpg",
//     };
//   }
// }
export const channels = [
  {
    id: 1,
    username: "freeDzert",
    title: "تنبيهات دزرت المجانية",
    description: "قناة تنبيهات دزرت المجانية حالة توفر منتجات دزرت",
    imageUrl: "/freeDzert1.jpg",
    memberCount: "2200+",
    category: "أخبار",
    isVerified: true,
    joinDate: "2023-01-01",
    language: "ar",
  },
  {
    id: 1,
    username: "webook_alerts",
    title: "تنبيهات ويبوك",
    description: `نوفر لكم أحدث الإشعارات عن جميع الفعاليات في المملكة العربية السعودية بمختلف فئاتها: 🎶 حفلات، ⚽️ مباريات، 🍴 مطاعم، 🏞 تجارب، والمزيد!
🎉 لا تفوّت أي فعالية مميزة - تابعنا الآن!`,
    imageUrl: "/webook_alerts.jpg",
    memberCount: "100+",
    category: "أخبار",
    isVerified: true,
    joinDate: "2023-01-01",
    language: "ar",
  },
  // يمكن إضافة المزيد من القنوات هنا
];

export async function getChannelData(username) {
  const channel = channels.find((ch) => ch.username === username);
  if (!channel) {
    // يمكن استرجاع البيانات من API تلغرام إذا لم تكن موجودة محلياً
   notFound();
  }
  return channel;
}

export async function getAllChannels() {
  return channels;
}

export async function getChannelsByCategory(category) {
  return channels.filter((ch) => ch.category === category);
}
