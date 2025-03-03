export const createStructuredData = (type, data) => {
  if (type === "channel") {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: data.title,
      description: data.description,
      url: `https://www.dzrt.shop/channel/${data.username}`,
      image: data.imageUrl,
      sameAs: [`https://t.me/${data.username}`],
    };
  }

  if (type === "bot") {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: data.title,
      description: data.description,
      applicationCategory: "Messenger Bot",
      image: data.imageUrl,
      url: `https://www.dzrt.shop/bot/${data.username}`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    };
  }
};
