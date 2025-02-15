// // "use client";

// // import { motion } from "framer-motion";
// // import Image from "next/image";
// // import Link from "next/link";
// // import {
// //   Calendar,
// //   Clock,
// //   ChevronLeft,
// //   Share2,
// //   Bookmark,
// //   MessageCircle,
// //   ArrowLeft,
// // } from "lucide-react";

// // // بيانات المقالات (في الواقع ستأتي من قاعدة البيانات)
// // const blogPosts = {
// //   "how-to-use-auto-order": {
// //     title: "كيف تستفيد من خدمة الطلب التلقائي في دزرت",
// //     excerpt:
// //       "دليل شامل لاستخدام خدمة الطلب التلقائي في دزرت والحصول على أفضل النتائج",
// //     coverImage: "/blog/auto-order-guide.jpg",
// //     category: "دليل الاستخدام",
// //     date: "10 فبراير 2025",
// //     readTime: 5,
// //     author: {
// //       name: "تامر بن حنة",
// //       image: "/authors/tamer.jpg",
// //       role: "مؤسس FreeDzert",
// //     },
// //     content: [
// //       {
// //         type: "paragraph",
// //         content:
// //           "تعتبر خدمة الطلب التلقائي من أهم الخدمات التي نقدمها في FreeDzert، حيث تمكنك من طلب منتجاتك المفضلة بشكل تلقائي بمجرد توفرها.",
// //       },
// //       {
// //         type: "heading",
// //         content: "كيف تعمل الخدمة؟",
// //       },
// //       {
// //         type: "paragraph",
// //         content:
// //           "تقوم الخدمة بمراقبة المنتجات التي تحددها بشكل مستمر، وعند توفر أي منها يقوم النظام تلقائياً بإتمام عملية الطلب نيابة عنك.",
// //       },
// //       {
// //         type: "features",
// //         items: [
// //           "طلب تلقائي فوري عند توفر المنتج",
// //           "تنبيهات فورية عند تنفيذ الطلب",
// //           "دعم فني على مدار الساعة",
// //           "إمكانية إعداد طلبات متعددة",
// //         ],
// //       },
// //       {
// //         type: "heading",
// //         content: "خطوات الاستخدام",
// //       },
// //       {
// //         type: "steps",
// //         items: [
// //           "اختيار الباقة المناسبة",
// //           "إضافة معلومات الطلب",
// //           "تحديد المنتج والكمية",
// //           "انتظار توفر المنتج",
// //         ],
// //       },
// //       {
// //         type: "tips",
// //         items: [
// //           "تأكد من صحة معلومات الطلب",
// //           "احتفظ برصيد كافٍ في البطاقة",
// //           "تأكد من صلاحية العنوان",
// //           "راقب حالة طلباتك بشكل دوري",
// //         ],
// //       },
// //     ],
// //   },
// //   // يمكن إضافة المزيد من المقالات هنا
// // };

// // export default function BlogArticle({ params }) {
// //   const post = blogPosts[params.slug];

// //   if (!post) {
// //     return null; // أو صفحة 404
// //   }

// //   const renderContent = (content) => {
// //     return content.map((block, index) => {
// //       switch (block.type) {
// //         case "paragraph":
// //           return (
// //             <motion.p
// //               key={index}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.1 * index }}
// //               className="text-gray-600 leading-relaxed mb-6"
// //             >
// //               {block.content}
// //             </motion.p>
// //           );
// //         case "heading":
// //           return (
// //             <motion.h2
// //               key={index}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.1 * index }}
// //               className="text-2xl font-bold text-gray-900 mb-4 mt-8"
// //             >
// //               {block.content}
// //             </motion.h2>
// //           );
// //         case "features":
// //           return (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.1 * index }}
// //               className="bg-blue-50 rounded-xl p-6 mb-6"
// //             >
// //               <ul className="space-y-3">
// //                 {block.items.map((item, i) => (
// //                   <li key={i} className="flex items-start gap-3">
// //                     <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
// //                     <span className="text-gray-700">{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </motion.div>
// //           );
// //         case "steps":
// //           return (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.1 * index }}
// //               className="space-y-4 mb-6"
// //             >
// //               {block.items.map((item, i) => (
// //                 <div key={i} className="flex items-start gap-4">
// //                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">
// //                     {i + 1}
// //                   </div>
// //                   <div className="flex-1 pt-1">
// //                     <p className="text-gray-700">{item}</p>
// //                   </div>
// //                 </div>
// //               ))}
// //             </motion.div>
// //           );
// //         case "tips":
// //           return (
// //             <motion.div
// //               key={index}
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ delay: 0.1 * index }}
// //               className="bg-amber-50 rounded-xl p-6 mb-6"
// //             >
// //               <h3 className="font-bold text-amber-800 mb-4">نصائح مهمة</h3>
// //               <ul className="space-y-3">
// //                 {block.items.map((item, i) => (
// //                   <li key={i} className="flex items-start gap-3">
// //                     <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
// //                     <span className="text-amber-800">{item}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </motion.div>
// //           );
// //         default:
// //           return null;
// //       }
// //     });
// //   };

// //   return (
// //     <div className="min-h-screen py-24">
// //       <div className="container mx-auto px-4">
// //         {/* زر العودة */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -20 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           className="mb-8"
// //         >
// //           <Link
// //             href="/blog"
// //             className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
// //           >
// //             <ArrowLeft className="w-5 h-5 ml-2" />
// //             العودة للمدونة
// //           </Link>
// //         </motion.div>

// //         <div className="max-w-4xl mx-auto">
// //           {/* رأس المقال */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             className="text-center mb-8"
// //           >
// //             <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
// //               {post.category}
// //             </span>
// //             <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
// //             <p className="text-xl text-gray-600 mb-6">{post.excerpt}</p>

// //             {/* معلومات المقال */}
// //             <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
// //               <div className="flex items-center gap-2">
// //                 <Calendar className="w-4 h-4" />
// //                 {post.date}
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <Clock className="w-4 h-4" />
// //                 {post.readTime} دقائق للقراءة
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* صورة المقال */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.2 }}
// //             className="relative h-[400px] rounded-2xl overflow-hidden mb-12"
// //           >
// //             <Image
// //               src={post.coverImage}
// //               alt={post.title}
// //               fill
// //               className="object-cover"
// //             />
// //           </motion.div>

// //           {/* معلومات الكاتب */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.3 }}
// //             className="flex items-center gap-4 mb-8 bg-gray-50 p-4 rounded-xl"
// //           >
// //             <div className="relative w-12 h-12 rounded-full overflow-hidden">
// //               <Image
// //                 src={post.author.image}
// //                 alt={post.author.name}
// //                 fill
// //                 className="object-cover"
// //               />
// //             </div>
// //             <div>
// //               <div className="font-medium">{post.author.name}</div>
// //               <div className="text-sm text-gray-500">{post.author.role}</div>
// //             </div>
// //           </motion.div>

// //           {/* محتوى المقال */}
// //           <article className="prose prose-lg max-w-none">
// //             {renderContent(post.content)}
// //           </article>

// //           {/* أزرار المشاركة */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.4 }}
// //             className="flex items-center justify-center gap-4 mt-12 pt-8 border-t"
// //           >
// //             <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
// //               <Share2 className="w-5 h-5" />
// //               مشاركة
// //             </button>
// //             <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
// //               <Bookmark className="w-5 h-5" />
// //               حفظ
// //             </button>
// //             <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
// //               <MessageCircle className="w-5 h-5" />
// //               تعليق
// //             </button>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";
// import { 
//   Calendar, 
//   Clock, 
//   ChevronLeft,
//   Share2,
//   Bookmark,
//   MessageCircle,
//   ArrowLeft,
//   ThumbsUp,
//   Copy,

//   Send,
//   Star,
//   Eye,
//   TrendingUp
// } from "lucide-react";

// // Progress Bar Component
// function ReadingProgressBar() {
//   const [readingProgress, setReadingProgress] = useState(0);

//   useEffect(() => {
//     const updateReadingProgress = () => {
//       const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = (window.scrollY / totalHeight) * 100;
//       setReadingProgress(progress);
//     };

//     window.addEventListener('scroll', updateReadingProgress);
//     return () => window.removeEventListener('scroll', updateReadingProgress);
//   }, []);

//   return (
//     <motion.div 
//       className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.5 }}
//     >
//       <motion.div 
//         className="h-full bg-blue-600"
//         style={{ width: `${readingProgress}%` }}
//       />
//     </motion.div>
//   );
// }

// // Share Menu Component
// function ShareMenu({ url, title }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [copySuccess, setCopySuccess] = useState(false);

//   const shareOptions = [
//     {
//       icon: Send,
//       label: "تويتر",
//       color: "text-blue-400",
//       onClick: () =>
//         window.open(
//           `https://twitter.com/intent/tweet?text=${title}&url=${url}`
//         ),
//     },
//     {
//       icon: TrendingUp,
//       label: "فيسبوك",
//       color: "text-blue-600",
//       onClick: () =>
//         window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`),
//     },
//     {
//       icon: Bookmark,
//       label: "تلغرام",
//       color: "text-blue-500",
//       onClick: () =>
//         window.open(`https://t.me/share/url?url=${url}&text=${title}`),
//     },
//     {
//       icon: ArrowLeft,
//       label: "واتساب",
//       color: "text-green-500",
//       onClick: () => window.open(`https://wa.me/?text=${title} ${url}`),
//     },
//   ];

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(window.location.href);
//       setCopySuccess(true);
//       setTimeout(() => setCopySuccess(false), 2000);
//     } catch (err) {
//       console.error('Failed to copy: ', err);
//     }
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
//       >
//         <Share2 className="w-5 h-5" />
//         مشاركة
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95, y: 10 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.95, y: 10 }}
//             className="absolute bottom-full right-0 mb-2 bg-white rounded-xl shadow-lg p-3 min-w-[200px]"
//           >
//             <div className="space-y-2">
//               {shareOptions.map((option) => (
//                 <button
//                   key={option.label}
//                   onClick={option.onClick}
//                   className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-right"
//                 >
//                   <option.icon className={`w-5 h-5 ${option.color}`} />
//                   <span>{option.label}</span>
//                 </button>
//               ))}
//               <button
//                 onClick={copyToClipboard}
//                 className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors text-right"
//               >
//                 <Copy className={`w-5 h-5 ${copySuccess ? 'text-green-500' : 'text-gray-500'}`} />
//                 <span>{copySuccess ? 'تم النسخ!' : 'نسخ الرابط'}</span>
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// // Table of Contents Component
// function TableOfContents({ content }) {
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const observerCallback = (entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(observerCallback, {
//       rootMargin: '-20% 0px -80% 0px'
//     });

//     document.querySelectorAll('h2[id]').forEach((heading) => observer.observe(heading));

//     return () => observer.disconnect();
//   }, []);

//   const headings = content.filter(block => block.type === 'heading');

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       className="sticky top-24 bg-white rounded-xl shadow-sm p-6"
//     >
//       <h3 className="font-bold text-lg mb-4">محتويات المقال</h3>
//       <ul className="space-y-2">
//         {headings.map((heading, index) => (
//           <motion.li
//             key={index}
//             whileHover={{ x: 5 }}
//             className={`border-r-2 pr-3 transition-colors ${
//               activeSection === `heading-${index}`
//                 ? 'border-blue-600 text-blue-600'
//                 : 'border-gray-200 text-gray-600 hover:text-blue-600'
//             }`}
//           >
//             <a href={`#heading-${index}`} className="block py-1">
//               {heading.content}
//             </a>
//           </motion.li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// }

// // Comments Section Component
// function CommentsSection() {
//   const [isCommenting, setIsCommenting] = useState(false);
//   const [comment, setComment] = useState("");

//   const dummyComments = [
//     {
//       id: 1,
//       author: "أحمد محمد",
//       avatar: "/avatars/user1.jpg",
//       content: "مقال رائع ومفيد جداً! شكراً على المعلومات القيمة",
//       date: "منذ ساعتين",
//       likes: 12
//     },
//     {
//       id: 2,
//       author: "سارة أحمد",
//       avatar: "/avatars/user2.jpg",
//       content: "استفدت كثيراً من شرح خطوات استخدام الخدمة",
//       date: "منذ 3 ساعات",
//       likes: 8
//     }
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="mt-12 pt-8 border-t"
//     >
//       <h3 className="text-2xl font-bold mb-6">التعليقات ({dummyComments.length})</h3>
      
//       {/* نموذج التعليق */}
//       <div className="mb-8">
//         {isCommenting ? (
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="space-y-4"
//           >
//             <textarea
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//               placeholder="اكتب تعليقك هنا..."
//               className="w-full p-4 rounded-lg border focus:ring-2 focus:ring-blue-500 min-h-[100px]"
//             />
//             <div className="flex gap-2 justify-end">
//               <button
//                 onClick={() => setIsCommenting(false)}
//                 className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
//               >
//                 إلغاء
//               </button>
//               <button
//                 disabled={!comment.trim()}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
//               >
//                 إرسال
//               </button>
//             </div>
//           </motion.div>
//         ) : (
//           <button
//             onClick={() => setIsCommenting(true)}
//             className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors"
//           >
//             <MessageCircle className="w-5 h-5" />
//             أضف تعليقاً
//           </button>
//         )}
//       </div>

//       {/* قائمة التعليقات */}
//       <div className="space-y-6">
//         {dummyComments.map((comment) => (
//           <motion.div
//             key={comment.id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="bg-gray-50 rounded-xl p-6"
//           >
//             <div className="flex items-start gap-4">
//               <div className="relative w-10 h-10 rounded-full overflow-hidden">
//                 <Image
//                   src={comment.avatar}
//                   alt={comment.author}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="flex-1">
//                 <div className="flex items-center justify-between mb-2">
//                   <div>
//                     <h4 className="font-medium">{comment.author}</h4>
//                     <span className="text-sm text-gray-500">{comment.date}</span>
//                   </div>
//                   <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600 transition-colors">
//                     <ThumbsUp className="w-4 h-4" />
//                     {comment.likes}
//                   </button>
//                 </div>
//                 <p className="text-gray-600">{comment.content}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </motion.div>
//   );
// }

// // Related Articles Component
// function RelatedArticles({ currentPostId }) {
//   const relatedPosts = [
//     {
//       id: 3,
//       title: "نصائح مهمة لاستخدام خدمة التنبيهات",
//       excerpt: "تعرف على أفضل الممارسات لاستخدام خدمة التنبيهات بكفاءة",
//       coverImage: "/blog/notifications-tips.jpg",
//       category: "نصائح",
//       date: "7 فبراير 2025",
//       readTime: 3
//     },
//     {
//       id: 4,
//       title: "كيف تختار الباقة المناسبة لك",
//       excerpt: "دليل اختيار الباقة المثالية حسب احتياجاتك",
//       coverImage: "/blog/packages-guide.jpg",
//       category: "دليل الاستخدام",
//       date: "5 فبراير 2025",
//       readTime: 4
//     }
//   ].filter(post => post.id !== currentPostId);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="mt-16 pt-8 border-t"
//     >
//       <h3 className="text-2xl font-bold mb-8">مقالات ذات صلة</h3>
//       <div className="grid md:grid-cols-2 gap-8">
//         {relatedPosts.map((post) => (
//           <motion.article
//             key={post.id}
//             whileHover={{ y: -5 }}
//             className="bg-white rounded-xl shadow-sm overflow-hidden"
//           >
//             <Link href={`/blog/${post.id}`}>
//               <div className="relative h-48">
//                 <Image
//                   src={post.coverImage}
//                   alt={post.title}
//                   fill
//                   className="object-cover"
//                 />
//               </div>
//               <div className="p-6">
//                 <span className="inline-block bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full mb-3">
//                   {post.category}
//                 </span>
//                 <h4 className="font-bold text-xl mb-2 line-clamp-2">{post.title}</h4>
//                 <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
//                 <div className="flex items-center text-sm text-gray-500">
//                   <Calendar className="w-4 h-4 ml-1" />
//                   {post.date}
//                   <span className="mx-2">•</span>
//                   <Clock className="w-4 h-4 ml-1" />
//                   {post.readTime} دقائق للقراءة
//                 </div>
//               </div>
//             </Link>
//           </motion.article>
//         ))}
//       </div>
//     </motion.div>
//   );
// }
// export const blogPosts = {
//   "how-to-use-auto-order": {
//     id: 1,
//     title: "كيف تستفيد من خدمة الطلب التلقائي في دزرت",
//     slug: "how-to-use-auto-order",
//     excerpt:
//       "دليل شامل لاستخدام خدمة الطلب التلقائي في دزرت والحصول على أفضل النتائج",
//     coverImage: "/blog/auto-order-guide.jpg",
//     category: "دليل الاستخدام",
//     date: "10 فبراير 2025",
//     readTime: 5,
//     author: {
//       name: "تامر بن حنة",
//       image: "/authors/tamer.jpg",
//       role: "مؤسس FreeDzert",
//     },
//     content: [
//       {
//         type: "paragraph",
//         content:
//           "تعتبر خدمة الطلب التلقائي من أهم الخدمات التي نقدمها في FreeDzert، حيث تمكنك من طلب منتجاتك المفضلة بشكل تلقائي بمجرد توفرها.",
//       },
//       {
//         type: "heading",
//         content: "كيف تعمل الخدمة؟",
//       },
//       {
//         type: "paragraph",
//         content:
//           "تقوم الخدمة بمراقبة المنتجات التي تحددها بشكل مستمر، وعند توفر أي منها يقوم النظام تلقائياً بإتمام عملية الطلب نيابة عنك.",
//       },
//       {
//         type: "features",
//         items: [
//           "طلب تلقائي فوري عند توفر المنتج",
//           "تنبيهات فورية عند تنفيذ الطلب",
//           "دعم فني على مدار الساعة",
//           "إمكانية إعداد طلبات متعددة",
//         ],
//       },
//       {
//         type: "heading",
//         content: "خطوات الاستخدام",
//       },
//       {
//         type: "steps",
//         items: [
//           "اختيار الباقة المناسبة",
//           "إضافة معلومات الطلب",
//           "تحديد المنتج والكمية",
//           "انتظار توفر المنتج",
//         ],
//       },
//       {
//         type: "heading",
//         content: "الباقات المتوفرة",
//       },
//       {
//         type: "paragraph",
//         content:
//           "نقدم مجموعة متنوعة من الباقات لتناسب جميع الاحتياجات، بدءاً من طلب واحد وحتى 30 طلب.",
//       },
//       {
//         type: "tips",
//         items: [
//           "تأكد من صحة معلومات الطلب",
//           "احتفظ برصيد كافٍ في البطاقة",
//           "تأكد من صلاحية العنوان",
//           "راقب حالة طلباتك بشكل دوري",
//         ],
//       },
//     ],
//   },
//   "best-practices-dezert-shopping": {
//     id: 2,
//     title: "أفضل الممارسات للتسوق في دزرت",
//     slug: "best-practices-dezert-shopping",
//     excerpt: "نصائح وإرشادات للتسوق الذكي في دزرت وتجنب الأخطاء الشائعة",
//     coverImage: "/blog/shopping-tips.jpg",
//     category: "نصائح",
//     date: "8 فبراير 2025",
//     readTime: 4,
//     author: {
//       name: "تامر بن حنة",
//       image: "/authors/tamer.jpg",
//       role: "مؤسس FreeDzert",
//     },
//     content: [
//       {
//         type: "paragraph",
//         content:
//           "التسوق في دزرت يمكن أن يكون تجربة ممتعة وناجحة إذا اتبعت بعض الممارسات الذكية.",
//       },
//       {
//         type: "heading",
//         content: "قبل التسوق",
//       },
//       {
//         type: "tips",
//         items: [
//           "تأكد من تفعيل حسابك في دزرت",
//           "جهز قائمة بالمنتجات المطلوبة",
//           "تأكد من توفر رصيد كافٍ",
//           "اشترك في خدمة التنبيهات",
//         ],
//       },
//     ],
//   },
// };

// export const getAllPosts = () => {
//   return Object.values(blogPosts).map((post) => ({
//     id: post.id,
//     title: post.title,
//     slug: post.slug,
//     excerpt: post.excerpt,
//     coverImage: post.coverImage,
//     category: post.category,
//     date: post.date,
//     readTime: post.readTime,
//   }));
// };

// export const getPostBySlug = (slug) => {
//   return blogPosts[slug];
// };

// export const getRelatedPosts = (currentPostId) => {
//   return getAllPosts()
//     .filter((post) => post.id !== currentPostId)
//     .slice(0, 2);
// };
// // Main Article Component
// export default function BlogArticle({ params }) {
//    const post = blogPosts[params.slug];

//   if (!post) {
//     return null; // أو صفحة 404
//   }

//   const renderContent = (content) => {
//     return content.map((block, index) => {
//       switch (block.type) {
//         case "paragraph":
//           return (
//             <motion.p
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//               className="text-gray-600 leading-relaxed mb-6"
//             >
//               {block.content}
//             </motion.p>
//           );
//         case "heading":
//           return (
//             <motion.h2
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//               className="text-2xl font-bold text-gray-900 mb-4 mt-8"
//             >
//               {block.content}
//             </motion.h2>
//           );
//         case "features":
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//               className="bg-blue-50 rounded-xl p-6 mb-6"
//             >
//               <ul className="space-y-3">
//                 {block.items.map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
//                     <span className="text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           );
//         case "steps":
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//               className="space-y-4 mb-6"
//             >
//               {block.items.map((item, i) => (
//                 <div key={i} className="flex items-start gap-4">
//                   <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 text-blue-600 font-bold">
//                     {i + 1}
//                   </div>
//                   <div className="flex-1 pt-1">
//                     <p className="text-gray-700">{item}</p>
//                   </div>
//                 </div>
//               ))}
//             </motion.div>
//           );
//         case "tips":
//           return (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.1 * index }}
//               className="bg-amber-50 rounded-xl p-6 mb-6"
//             >
//               <h3 className="font-bold text-amber-800 mb-4">نصائح مهمة</h3>
//               <ul className="space-y-3">
//                 {block.items.map((item, i) => (
//                   <li key={i} className="flex items-start gap-3">
//                     <span className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0" />
//                     <span className="text-amber-800">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </motion.div>
//           );
//         default:
//           return null;
//       }
//     });
//   };

//   return (
//     <>
//       <ReadingProgressBar />
//       <div className="min-h-screen py-24">
//         <div className="container mx-auto px-4">
//           {/* زر العودة ... */}

//           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//             {/* المحتوى الرئيسي */}{" "}
//             <div className="lg:col-span-3">
//               {/* ... باقي المحتوى ... */}
//               {renderContent(post.content)}
//               {/* قسم التعليقات */}
//               <CommentsSection />

//               {/* المقالات ذات الصلة */}
//               <RelatedArticles currentPostId={post.id} />
//             </div>
//             {/* الشريط الجانبي */}
//             <aside className="lg:col-span-1 space-y-8">
//               {/* فهرس المحتويات */}
//               <TableOfContents content={post.content} />

//               {/* إحصائيات المقال */}
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="bg-white rounded-xl shadow-sm p-6"
//               >
//                 <h3 className="font-bold text-lg mb-4">إحصائيات المقال</h3>
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600 flex items-center gap-2">
//                       <Eye className="w-4 h-4" />
//                       المشاهدات
//                     </span>
//                     <span className="font-medium">1,234</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600 flex items-center gap-2">
//                       <MessageCircle className="w-4 h-4" />
//                       التعليقات
//                     </span>
//                     <span className="font-medium">12</span>
//                   </div>
//                   <div className="flex items-center justify-between">
//                     <span className="text-gray-600 flex items-center gap-2">
//                       <Star className="w-4 h-4" />
//                       التقييم
//                     </span>
//                     <span className="font-medium">4.8/5</span>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* كاتب المقال */}
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="bg-white rounded-xl shadow-sm p-6"
//               >
//                 <div className="text-center">
//                   <div className="relative w-24 h-24 mx-auto mb-4">
//                     <Image
//                       src={post.author.image}
//                       alt={post.author.name}
//                       fill
//                       className="object-cover rounded-full"
//                     />
//                   </div>
//                   <h3 className="font-bold text-lg">{post.author.name}</h3>
//                   <p className="text-gray-600 text-sm mb-4">
//                     {post.author.role}
//                   </p>
//                   <button className="w-full bg-blue-100 text-blue-600 py-2 rounded-lg hover:bg-blue-200 transition-colors">
//                     عرض جميع المقالات
//                   </button>
//                 </div>
//               </motion.div>

//               {/* أدوات مشاركة */}
//               <motion.div
//                 initial={{ opacity: 0, x: 50 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 className="bg-white rounded-xl shadow-sm p-6 space-y-4"
//               >
//                 <h3 className="font-bold text-lg mb-4">مشاركة المقال</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                   <ShareButton
//                     icon={Send}
//                     label="تويتر"
//                     color="bg-blue-400 hover:bg-blue-500"
//                   />
//                   <ShareButton
//                     icon={TrendingUp}
//                     label="فيسبوك"
//                     color="bg-blue-600 hover:bg-blue-700"
//                   />
//                   <ShareButton
//                     icon={Bookmark}
//                     label="تلغرام"
//                     color="bg-blue-500 hover:bg-blue-600"
//                   />
//                   <ShareButton
//                     icon={ArrowLeft}
//                     label="واتساب"
//                     color="bg-green-500 hover:bg-green-600"
//                   />
//                 </div>
//               </motion.div>
//             </aside>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // مكون زر المشاركة
// function ShareButton({ icon: Icon, label, color }) {
//   return (
//     <button
//       className={`${color} text-white py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors`}
//     >
//       <Icon className="w-4 h-4" />
//       <span className="text-sm">{label}</span>
//     </button>
//   );
// }

// // مكون تمييز المقاطع
// function Highlight({ children }) {
//   return (
//     <motion.span
//       initial={{ backgroundColor: "#fff" }}
//       whileHover={{ backgroundColor: "#f0f9ff" }}
//       className="px-1 rounded transition-colors cursor-pointer"
//     >
//       {children}
//     </motion.span>
//   );
// }
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import {
  Calendar,
  Clock,
  Share2,
  MessageCircle,
  ThumbsUp,
  Bookmark,
  ChevronLeft,
  ArrowLeft,
  Eye,
  Bot,
} from "lucide-react";

// مكون شريط التقدم
function ReadingProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}

// مكون القائمة الجانبية
function ArticleSidebar({ tableOfContents, onHeadingClick }) {
  return (
    <aside className="hidden lg:block sticky top-24 w-64 p-6 bg-white rounded-2xl shadow-sm space-y-4">
      <h3 className="font-bold text-lg mb-4">محتويات المقال</h3>
      <ul className="space-y-2">
        {tableOfContents.map((heading, index) => (
          <li key={index}>
            <button
              onClick={() => onHeadingClick(heading.id)}
              className="text-gray-600 hover:text-blue-600 transition-colors text-right w-full"
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// مكون التعليقات
function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "أحمد محمد",
      avatar: "/avatars/user1.jpg",
      content: "مقال رائع ومفيد! شكراً على المعلومات القيمة",
      date: "منذ 2 ساعة",
      likes: 12,
    },
    {
      id: 2,
      author: "سارة أحمد",
      avatar: "/avatars/user2.jpg",
      content: "استفدت كثيراً من هذا الشرح، شكراً جزيلاً",
      date: "منذ 4 ساعات",
      likes: 8,
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newComment = {
      id: comments.length + 1,
      author: "أنت",
      avatar: "/avatars/default.jpg",
      content: comment,
      date: "الآن",
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setComment("");
  };

  return (
    <div className="mt-12 pt-8 border-t">
      <h3 className="text-2xl font-bold mb-6">التعليقات ({comments.length})</h3>

      {/* نموذج التعليق */}
      <form onSubmit={handleSubmit} className="mb-8">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="اكتب تعليقك هنا..."
          className="w-full p-4 rounded-xl border focus:ring-2 focus:ring-blue-500 min-h-[100px]"
        />
        <div className="mt-2 flex justify-end">
          <button
            type="submit"
            disabled={!comment.trim()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            إضافة تعليق
          </button>
        </div>
      </form>

      {/* قائمة التعليقات */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image
                  src={comment.avatar}
                  alt={comment.author}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-medium">{comment.author}</h4>
                    <span className="text-sm text-gray-500">
                      {comment.date}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 text-gray-500 hover:text-blue-600">
                    <ThumbsUp className="w-4 h-4" />
                    {comment.likes}
                  </button>
                </div>
                <p className="text-gray-600">{comment.content}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// الصفحة الرئيسية للمقال
export default function ArticlePage({ params }) {
  // بيانات تجريبية للمقال
  const article = {
    title: "كيف تستفيد من خدمة الطلب التلقائي في دزرت",
    excerpt:
      "دليل شامل لاستخدام خدمة الطلب التلقائي في دزرت والحصول على أفضل النتائج",
    coverImage: "/blog/auto-order-guide.jpg",
    category: "دليل الاستخدام",
    date: "10 فبراير 2025",
    readTime: 5,
    author: {
      name: "تامر بن حنة",
      image: "/authors/tamer.jpg",
      role: "مؤسس FreeDzert",
    },
    stats: {
      views: 1234,
      comments: 25,
      likes: 156,
    },
  };

  const scrollToHeading = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <ReadingProgress />

      <div className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          {/* زر العودة */}
          <Link
            href="/blog"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 ml-2 transform group-hover:-translate-x-1 transition-transform" />
            العودة للمدونة
          </Link>

          <div className="grid lg:grid-cols-[1fr_300px] gap-8">
            {/* المحتوى الرئيسي */}
            <main>
              {/* رأس المقال */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-8"
              >
                <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  {article.category}
                </span>
                <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
                <p className="text-xl text-gray-600 mb-6">{article.excerpt}</p>

                {/* معلومات المقال */}
                <div className="flex items-center justify-center gap-6 text-gray-500 text-sm">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {article.readTime} دقائق للقراءة
                  </span>
                </div>
              </motion.div>

              {/* صورة المقال */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative h-[400px] rounded-2xl overflow-hidden mb-12"
              >
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* محتوى المقال */}
              <div className="prose prose-lg max-w-none">
                <h2 id="intro">مقدمة</h2>
                <p>محتوى المقال هنا...</p>

                <h2 id="features">المميزات</h2>
                <p>محتوى المميزات هنا...</p>

                <h2 id="usage">كيفية الاستخدام</h2>
                <p>شرح كيفية الاستخدام هنا...</p>
              </div>

              {/* التعليقات */}
              <Comments />
            </main>

            {/* الشريط الجانبي */}
            <aside className="space-y-8">
              {/* معلومات الكاتب */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-sm p-6"
              >
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                      src={article.author.image}
                      alt={article.author.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="font-bold text-lg">{article.author.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {article.author.role}
                  </p>
                  <a
                    href="https://t.me/AutoDzertBot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors"
                  >
                    <Bot className="w-5 h-5" />
                    تواصل معي
                  </a>
                </div>
              </motion.div>

              {/* إحصائيات المقال */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-sm p-6"
              >
                <h3 className="font-bold text-lg mb-4">إحصائيات المقال</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      المشاهدات
                    </span>
                    <span>{article.stats.views}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      التعليقات
                    </span>
                    <span>{article.stats.comments}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 flex items-center gap-2">
                      <ThumbsUp className="w-4 h-4" />
                      الإعجابات
                    </span>
                    <span>{article.stats.likes}</span>
                  </div>
                </div>
              </motion.div>

              {/* أزرار المشاركة */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-sm p-6"
              >
                <h3 className="font-bold text-lg mb-4">شارك المقال</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex items-center justify-center gap-2 bg-blue-100 text-blue-600 p-2 rounded-lg hover:bg-blue-200 transition-colors">
                    <Share2 className="w-5 h-5" />
                    مشاركة
                  </button>
                  <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-600 p-2 rounded-lg hover:bg-gray-200 transition-colors">
                    <Bookmark className="w-5 h-5" />
                    حفظ
                  </button>
                </div>
              </motion.div>

              {/* محتويات المقال */}
              <ArticleSidebar
                tableOfContents={[
                  { id: "intro", text: "مقدمة" },
                  { id: "features", text: "المميزات" },
                  { id: "usage", text: "كيفية الاستخدام" },
                ]}
                onHeadingClick={scrollToHeading}
              />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}