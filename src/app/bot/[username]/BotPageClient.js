// src/app/bot/[username]/BotPageClient.js
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function BotPageClient({ bot, schema }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12"
    >
      <motion.article
        variants={itemVariants}
        className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <motion.div
          variants={itemVariants}
          className="relative w-40 h-40 mx-auto mb-8"
        >
          <Image
            src={bot.imageUrl}
            alt={bot.title}
            fill
            className="rounded-full object-cover shadow-xl"
            priority
          />
        </motion.div>

        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            {bot.title}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {bot.description}
          </p>
        </motion.div>

        <motion.a
          variants={itemVariants}
          href={`https://t.me/${bot.username}`}
          className="block text-center mb-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-flex items-center px-8 py-4 rounded-xl bg-blue-500 text-white transition-colors hover:bg-blue-600">
            <svg
              className="w-6 h-6 ml-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z" />
            </svg>
            بدء المحادثة مع البوت
          </span>
        </motion.a>

        <motion.section
          variants={itemVariants}
          className="mb-12 bg-slate-50 rounded-xl p-8"
        >
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            الأوامر المتاحة
          </h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            variants={containerVariants}
          >
            {bot.commands.map((command) => (
              <motion.div
                key={command}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-4 rounded-lg shadow-sm"
              >
                <code className="text-blue-600 text-lg">{command}</code>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          variants={itemVariants}
          className="bg-slate-50 rounded-xl p-8"
        >
          <h2 className="text-2xl font-semibold text-slate-800 mb-6">
            المميزات
          </h2>
          <motion.ul className="grid gap-4" variants={containerVariants}>
            {bot.features.map((feature) => (
              <motion.li
                key={feature}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="w-2 h-2 bg-blue-500 rounded-full ml-4"></span>
                <span className="text-slate-700">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        {bot.isVerified && (
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-green-50 text-green-700 border border-green-200">
              <svg
                className="w-5 h-5 ml-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
              </svg>
              بوت موثق رسمياً
            </span>
          </motion.div>
        )}
      </motion.article>
    </motion.div>
  );
}
