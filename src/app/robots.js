import { siteConfig } from "@/config/site";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/channels/*", "/bots/*"],
        disallow: [
          "/private/",
          "/api/*",
          "/admin/*",
          "/*.json$",
          "/tmp/",
          "/draft/*",
        ],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
