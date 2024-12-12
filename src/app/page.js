// src/app/page.js
import ChannelCard from "@/components/ChannelCard";
import BotCard from "@/components/BotCard";
import Header from "@/components/Header";
import { getAllChannels } from "@/data/channels";
import { getAllBots } from "@/data/bots";

export default async function Home() {
  // استرجاع البيانات بشكل غير متزامن
  const [channels, bots] = await Promise.all([getAllChannels(), getAllBots()]);

  return (
    <>
      <Header />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">أحدث القنوات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel) => (
            <ChannelCard key={channel.username} channel={channel} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">أحدث البوتات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bots.map((bot) => (
            <BotCard key={bot.username} bot={bot} />
          ))}
        </div>
      </section>

      <div className="mt-12 text-center">
        <p className="text-gray-600 mb-4">لم تجد ما تبحث عنه؟</p>
        <div className="space-x-4 rtl:space-x-reverse">
          <a href="/channels" className="text-blue-500 hover:text-blue-700">
            جميع القنوات
          </a>
          <span className="text-gray-300">|</span>
          <a href="/bots" className="text-blue-500 hover:text-blue-700">
            جميع البوتات
          </a>
        </div>
      </div>
    </>
  );
}
