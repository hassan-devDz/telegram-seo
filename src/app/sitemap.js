// src/app/sitemap.js
export default async function sitemap() {
  const baseUrl = "https://mychannels-mu.vercel.app";

  // احصل على قائمة القنوات من قاعدة البيانات أو API
  const channels = [
    { username: "channel1", updatedAt: new Date() },
    // ... المزيد من القنوات
  ];

  const channelUrls = channels.map((channel) => ({
    url: `${baseUrl}/channel/${channel.username}`,
    lastModified: channel.updatedAt,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...channelUrls,
  ];
}
