import { METADATA, SITE_URL } from "@/config/constants";
import { siteConfig } from "@/config/site";

export function generateChannelMetadata(channel) {
  return {
    title: {
      absolute: `${channel.title} | ${METADATA.title.default}`,
    },
    description: channel.description,
    openGraph: {
      title: channel.title,
      description: channel.description,
      images: [`${SITE_URL}${channel.imageUrl}`],
    },
    twitter: {
      card: "summary_large_image",
      title: channel.title,
      description: channel.description,
      images: [`${SITE_URL}${channel.imageUrl}`],
    },
  };
}

export function generateMetadata(type, data) {
  const baseMetadata = {
    metadataBase: new URL(siteConfig.url),
    title: {
      absolute: `${data.title} | ${siteConfig.name}`,
    },
    description: data.description,
    keywords: siteConfig.keywords,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: data.imageUrl || "/default-channel.jpg",
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.description,
      images: [data.imageUrl || "/default-channel.jpg"],
    },
    alternates: {
      canonical: `${siteConfig.url}/${type}/${data.username}`,
    },
  };

  return baseMetadata;
}
