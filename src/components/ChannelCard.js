import Image from "next/image";
import Link from "next/link";

export default function ChannelCard({ channel }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={channel.imageUrl}
          alt={channel.title}
          fill
          className="rounded-md object-cover"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2">{channel.title}</h2>
      <p className="text-gray-600 mb-4">{channel.description}</p>
      <Link
        href={`/channel/${channel.username}`}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 inline-block"
      >
        عرض التفاصيل
      </Link>
    </div>
  );
}

// src/lib/telegram.js