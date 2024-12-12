// src/app/robots.js
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://mychannels-mu.vercel.app/sitemap.xml",
  };
}
