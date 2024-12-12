// src/app/sitemap.js

// src/app/sitemap.js
import { getAllChannels } from '@/data/channels';
import { getAllBots } from '@/data/bots';

import { siteConfig } from "@/config/site";

export default async function sitemap() {
  try {
    const [channels, bots] = await Promise.all([
      getAllChannels(),
      getAllBots()
    ]);

    const baseUrl = siteConfig.url;

    const generateUrls = (items, type) => items.map((item) => ({
      url: `${baseUrl}/${type}/${item.username}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    }));

    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      ...generateUrls(channels, 'channel'),
      ...generateUrls(bots, 'bot')
    ];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [];
  }
}