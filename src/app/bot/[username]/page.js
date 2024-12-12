// src/app/bot/[username]/page.js
import Image from "next/image";
import { notFound } from "next/navigation";
import { getBotData } from "@/data/bots";
import { generateSchema } from "@/lib/schema";
import { siteConfig } from "@/config/site";
import BotPageClient from "./BotPageClient";
export async function generateMetadata({ params }) {
  const { username } = await params;
  const bot = await getBotData(username);
  const schema = generateSchema("bot", bot);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      absolute: `${bot.title} | ${siteConfig.name}`,
    },
    description: bot.description,
    keywords: siteConfig.keywords,
    openGraph: {
      title: bot.title,
      description: bot.description,
      images: [{ url: bot.imageUrl, width: 1200, height: 630 }],
    },
    jsonLd: schema,
  };
}

export default async function BotPage({ params }) {
  const bot = await getBotData(params.username);
  if (!bot) {
    return notFound();
  }

  const schema = generateSchema("bot", bot);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return <BotPageClient bot={bot} schema={schema} />;
  
}