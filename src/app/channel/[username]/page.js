// // import Image from "next/image";
// // import { createStructuredData } from "@/lib/seo";
// // import Script from "next/script";
// // import { siteConfig } from "@/config/site";
// // import { generateSchema } from "@/lib/schema";

// // export async function generateMetadata({ params }) {
// //   const channel = await getChannelData(params.username);
// //   const schema = generateSchema("channel", channel);

// //   return {
// //     metadataBase: new URL(siteConfig.url),
// //     title: {
// //       absolute: `${channel.title} | ${siteConfig.name}`,
// //     },
// //     description: channel.description,
// //     keywords: siteConfig.keywords,
// //     openGraph: {
// //       title: channel.title,
// //       description: channel.description,
// //       images: [{ url: channel.imageUrl, width: 1200, height: 630 }],
// //     },
// //     jsonLd: schema,
// //   };
// // }
// // // src/app/channel/[username]/page.js



// // async function getChannelData(username) {
// //   // Your data fetching logic here
// //   return {
// //     username,
// //     title: `قناة ${username}`,
// //     description: "وصف القناة",
// //     memberCount: "1000+",
// //     imageUrl: "/default-channel.jpg",
// //   };
// // }

// // export default async function ChannelPage({ params }) {
// //   const { username } = await params;
// //   const channel = await getChannelData(username);
// //   const structuredData = createStructuredData("channel", channel);

// //   return (
// //     <>
// //       <Script
// //         id="structured-data"
// //         type="application/ld+json"
// //         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
// //       />
// //       <article className="bg-white rounded-lg shadow-lg p-8">
// //         <div className="relative w-32 h-32 mx-auto mb-6">
// //           <Image
// //             src={channel.imageUrl}
// //             alt={channel.title}
// //             fill
// //             className="rounded-full object-cover"
// //           />
// //         </div>
// //         <h1 className="text-3xl font-bold text-center mb-4">{channel.title}</h1>
// //         <p className="text-gray-600 text-center mb-6">{channel.description}</p>
// //         <div className="text-center">
// //           <a
// //             href={`https://t.me/${channel.username}`}
// //             className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-block"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //           >
// //             الانضمام للقناة
// //           </a>
// //         </div>
// //         <div className="mt-8">
// //           <h2 className="text-xl font-semibold mb-4">معلومات إضافية</h2>
// //           <ul className="space-y-2">
// //             <li>عدد المشتركين: {channel.memberCount}</li>
// //             <li>نوع القناة: عامة</li>
// //           </ul>
// //         </div>
// //       </article>
// //     </>
// //   );
// // }
// // // src/components/ChannelCard.js
// // src/app/channel/[username]/page.js
// import Image from "next/image";
// import { siteConfig } from "@/config/site";
// import { generateSchema } from "@/lib/schema";
// import { getChannelData } from "@/data/channels";
// export async function generateMetadata({ params }) {
//     const { username } = await params;
//   const channel = await getChannelData(username);
//   const schema = generateSchema("channel", channel);

//   return {
//     metadataBase: new URL(siteConfig.url),
//     title: {
//       absolute: `${channel.title} | ${siteConfig.name}`,
//     },
//     description: channel.description,
//     keywords: siteConfig.keywords,
//     openGraph: {
//       title: channel.title,
//       description: channel.description,
//       images: [{ url: channel.imageUrl, width: 1200, height: 630 }],
//     },
//     jsonLd: schema,
//   };
// }



// export default async function ChannelPage({ params }) {
//     const { username } = await params;
//   const channel = await getChannelData(username);
//   const schema = generateSchema("channel", channel);

//   return (
//     <article className="bg-white rounded-lg shadow-lg p-8">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
//       />
//       <div className="relative w-32 h-32 mx-auto mb-6">
//         <Image
//           src={channel.imageUrl}
//           alt={channel.title}
//           fill
//           className="rounded-full object-cover"
//         />
//       </div>
//       <h1 className="text-3xl font-bold text-center mb-4">{channel.title}</h1>
//       <p className="text-gray-600 text-center mb-6">{channel.description}</p>
//       <div className="text-center">
//          <a
//           href={`https://t.me/${channel.username}`}
//           className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 inline-block"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           الانضمام للقناة
//         </a>
//       </div>
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold mb-4">معلومات إضافية</h2>
//         <ul className="space-y-2">
//           <li>عدد المشتركين: {channel.memberCount}</li>
//           <li>نوع القناة: عامة</li>
//         </ul>
//       </div>
//     </article>
//   );
// }

import ChannelPageClient from "./ChannelPageClient";
import { siteConfig } from "@/config/site";
import { generateSchema } from "@/lib/schema";
import { getChannelData } from "@/data/channels";

export async function generateMetadata({ params }) {
  const channel = await getChannelData(params.username);
  const schema = generateSchema("channel", channel);

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      absolute: `${channel.title} | ${siteConfig.name}`,
    },
    description: channel.description,
    keywords: siteConfig.keywords,
    openGraph: {
      title: channel.title,
      description: channel.description,
      images: [{ url: channel.imageUrl, width: 1200, height: 630 }],
    },
    jsonLd: schema,
  };
}

export default async function ChannelPage({ params }) {
  const channel = await getChannelData(params.username);
  const schema = generateSchema("channel", channel);

  return <ChannelPageClient channel={channel} schema={schema} />;
}