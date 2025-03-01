// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { siteConfig } from "@/config/site";
// import { MessageCircle, Phone, Mail, CreditCard, Shield, HelpCircle } from 'lucide-react';

// export default function Footer() {
//   const footerLinks = {
//     company: [
//       { name: "من نحن", href: "/about" },
//       { name: "اتصل بنا", href: "/contact" },
//       { name: "المدونة", href: "/blog" },
//     ],
//     legal: [
//       { name: "سياسة الخصوصية", href: "/privacy" },
//       { name: "الشروط والأحكام", href: "/terms" },
//       { name: "سياسة الاسترجاع", href: "/refund-policy" },
//     ],
//     support: [
//       { name: "الأسئلة الشائعة", href: "/faq" },
//       { name: "الدعم الفني", href: "/support" },
//       { name: "دليل الاستخدام", href: "/guide" },
//     ],
//   };

//   const footerFeatures = [
//     {
//       icon: CreditCard,
//       title: "دفع آمن",
//       description: "طرق دفع متعددة وآمنة"
//     },
//     {
//       icon: Shield,
//       title: "حماية المعلومات",
//       description: "تشفير كامل للبيانات"
//     },
//     {
//       icon: HelpCircle,
//       title: "دعم متواصل",
//       description: "متواجدون على مدار الساعة"
//     }
//   ];

//   return (
//     <footer className="bg-white border-t border-gray-200">
//       {/* قسم المميزات */}
//       <div className="border-b border-gray-200">
//         <div className="container mx-auto px-4 py-12">
//           <div className="grid md:grid-cols-3 gap-8">
//             {footerFeatures.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center gap-4"
//                 >
//                   <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Icon className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-gray-900">{feature.title}</h3>
//                     <p className="text-sm text-gray-600">{feature.description}</p>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* القسم الرئيسي */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* معلومات الشركة */}
//           <div>
//             <Link href="/" className="inline-block">
//               <h2 className="text-2xl font-bold text-blue-600">{siteConfig.name}</h2>
//             </Link>
//             <p className="mt-4 text-gray-600 text-sm">
//               {siteConfig.description}
//             </p>
//             <div className="mt-6 space-y-4">
//               <div className="flex items-center text-gray-600">
//                 <Phone className="w-5 h-5 ml-2" />
//                 <span className="text-sm">+966 50 000 0000</span>
//               </div>
//               <div className="flex items-center text-gray-600">
//                 <Mail className="w-5 h-5 ml-2" />
//                 <span className="text-sm">support@freedzert.store</span>
//               </div>
//             </div>
//           </div>

//           {/* روابط سريعة */}
//           <div>
//             <h3 className="font-semibold text-gray-900 mb-4">روابط سريعة</h3>
//             <ul className="space-y-3">
//               {footerLinks.company.map((link) => (
//                 <li key={link.href}>
//                   <Link 
//                     href={link.href}
//                     className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* معلومات قانونية */}
//           <div>
//             <h3 className="font-semibold text-gray-900 mb-4">معلومات قانونية</h3>
//             <ul className="space-y-3">
//               {footerLinks.legal.map((link) => (
//                 <li key={link.href}>
//                   <Link 
//                     href={link.href}
//                     className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* الدعم */}
//           <div>
//             <h3 className="font-semibold text-gray-900 mb-4">الدعم</h3>
//             <ul className="space-y-3">
//               {footerLinks.support.map((link) => (
//                 <li key={link.href}>
//                   <Link 
//                     href={link.href}
//                     className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>

//       {/* شريط الحقوق */}
//       <div className="border-t border-gray-200">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <div className="text-sm text-gray-600 mb-4 md:mb-0">
//               © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق محفوظة
//             </div>
//             <div className="flex items-center space-x-4 rtl:space-x-reverse">
//               <a
//                 href={siteConfig.socials.telegram}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-blue-600 transition-colors"
//               >
//                 <MessageCircle className="w-5 h-5" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }
"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  MessageCircle, Phone, Mail, CreditCard, Shield,
  HelpCircle, ChevronRight, Sparkles, GemIcon
} from 'lucide-react';
import { useState, useRef } from 'react';

const MouseGlow = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return {
    mouseX,
    mouseY,
    handleMouseMove
  };
};

const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const { mouseX, mouseY, handleMouseMove } = MouseGlow();
  const maskImage = useMotionTemplate`radial-gradient(
    250px at \${mouseX}px \${mouseY}px,
    rgba(255, 255, 255, 0.5),
    transparent
  )`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      onMouseMove={handleMouseMove}
      className="relative group"
    >
      <div className="absolute inset-0 rounded-2xl transition duration-300 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl" />
      <div className="relative p-6 rounded-2xl bg-gradient-to-r from-white/70 to-white/40 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300">
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
          style={{ maskImage }}
        />
        <div className="relative flex items-center gap-4">
          <div className="relative">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 via-blue-50 to-white flex items-center justify-center">
              <Icon className="w-7 h-7 text-blue-600" />
            </div>
            <motion.div
              className="absolute -inset-2 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-300"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FooterLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative"
    >
      <Link href={href} className="block py-2">
        <motion.div
          className="relative z-10 flex items-center gap-2 text-gray-600 transition-colors group"
          animate={{ x: isHovered ? 10 : 0 }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0, opacity: isHovered ? 1 : 0 }}
            className="absolute right-full ml-2"
          >
            <ChevronRight className="w-4 h-4 text-blue-600" />
          </motion.div>
          <span className="group-hover:text-blue-600">{children}</span>
        </motion.div>
      </Link>
      <motion.div
        className="absolute inset-0 bg-blue-50 rounded-lg"
        initial={false}
        animate={{
          scale: isHovered ? 1 : 0.6,
          opacity: isHovered ? 1 : 0,
        }}
        style={{ originX: 0 }}
      />
    </motion.li>
  );
};

const FooterSection = ({ title, links }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative"
  >
    <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-2">
      <div className="relative">
        <GemIcon className="w-5 h-5 text-blue-600" />
        <motion.div
          className="absolute inset-0 text-blue-600"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Sparkles className="w-5 h-5" />
        </motion.div>
      </div>
      {title}
    </h3>
    <ul className="space-y-1">
      {links.map((link) => (
        <FooterLink key={link.href} href={link.href}>
          {link.name}
        </FooterLink>
      ))}
    </ul>
  </motion.div>
);

const ContactButton = ({ icon: Icon, text }) => (
  <motion.div 
    className="group relative"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="relative flex items-center gap-3 p-3 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 group-hover:border-blue-200 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-blue-50 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">{text}</span>
    </div>
  </motion.div>
);
const GradientText = ({ text }) => (
  <Link href="/" className="inline-block group">
    <div className="relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"
        animate={{
          backgroundPosition: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        <span className="text-3xl font-bold">{text}</span>
      </motion.div>
      <span className="text-3xl font-bold opacity-0">{text}</span>
    </div>
  </Link>
);

export default function Footer() {
  const { mouseX, mouseY, handleMouseMove } = MouseGlow();

  const footerLinks = {
    company: [
      { name: "من نحن", href: "/about" },
      { name: "اتصل بنا", href: "/contact" },
      { name: "المدونة", href: "/blog" },
    ],
    legal: [
      { name: "سياسة الخصوصية", href: "/privacy" },
      { name: "الشروط والأحكام", href: "/terms" },
      { name: "سياسة الاسترجاع", href: "/refund-policy" },
    ],
    support: [
      { name: "الأسئلة الشائعة", href: "/faq" },
      { name: "الدعم الفني", href: "/support" },
      { name: "دليل الاستخدام", href: "/guide" },
    ],
  };

  const footerFeatures = [
    {
      icon: CreditCard,
      title: "دفع آمن",
      description: "طرق دفع متعددة وآمنة مع حماية كاملة"
    },
    {
      icon: Shield,
      title: "حماية المعلومات",
      description: "تشفير متقدم لجميع البيانات والمعاملات"
    },
    {
      icon: HelpCircle,
      title: "دعم متواصل",
      description: "فريق دعم متخصص متواجد 24/7"
    }
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-blue-100/20" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-100/30 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative">
        {/* Features Section */}
        <div className="border-b border-white/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-16">
            <div className="grid md:grid-cols-3 gap-8">
              {footerFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
              onMouseMove={handleMouseMove}
            >
              <GradientText text={siteConfig.name} />
              <p className="mt-6 text-gray-600 text-sm leading-relaxed">
                {siteConfig.description}
              </p>
              <div className="mt-8 space-y-4">
                <ContactButton icon={Phone} text="+966 50 000 0000" />
                <ContactButton icon={Mail} text="support@freedzert.store" />
              </div>
            </motion.div>

            <FooterSection title="روابط سريعة" links={footerLinks.company} />
            <FooterSection title="معلومات قانونية" links={footerLinks.legal} />
            <FooterSection title="الدعم" links={footerLinks.support} />
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="relative border-t border-white/20 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-sm text-gray-600 mb-4 md:mb-0"
              >
                © {new Date().getFullYear()} {siteConfig.name}. جميع الحقوق
                محفوظة شركة حراء للتقنية و البرمجيات
              </motion.div>
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <motion.a
                  href={siteConfig.socials.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="absolute inset-0 rounded-xl bg-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:text-blue-700 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}