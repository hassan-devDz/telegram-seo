import { siteConfig } from "@/config/site";

export function generateSchema(type, data) {
  const schemaTypes = {
    channel: {
      type: "SocialMediaPosting",
      wrapper: "WebPage",
    },
    bot: {
      type: "SoftwareApplication",
      wrapper: "WebPage",
    },
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": schemaTypes[type].wrapper,
    name: data.title,
    description: data.description,
    url: `${siteConfig.url}/${type}/${data.username}`,
    mainEntity: {
      "@type": schemaTypes[type].type,
      headline: data.title,
      description: data.description,
      image: `${siteConfig.url}${data.imageUrl}`,
      author: {
        "@type": "Organization",
        name: data.title,
        url: `https://t.me/${data.username}`,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.name,
        url: siteConfig.url,
      },
    },
  };

  return schema;
}
// src/lib/schema.js
export function generateBreadcrumbSchema(type, data) {
  const typeMap = {
    channel: { name: 'القنوات', path: 'channels' },
    bot: { name: 'البوتات', path: 'bots' }
  };

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": siteConfig.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": typeMap[type]?.name || type,
        "item": `${siteConfig.url}/${typeMap[type]?.path || type}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.title,
        "item": `${siteConfig.url}/${type}/${data.username}`
      }
    ]
  };
}