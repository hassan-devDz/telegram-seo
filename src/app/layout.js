import { Cairo } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

// تهيئة الخط
const cairo = Cairo({
  subsets: ["latin", "arabic"],
  display: "swap",
  adjustFontFallback: false,
});

// تعريف البيانات الوصفية للموقع
export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "تامر بن حنة",
      url: siteConfig.socials.telegram,
    },
  ],
  creator: "تامر بن حنة",
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.png`],
    creator: "@benhanatamer",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

// توليد بيانات Schema.org
function generateSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    inLanguage: "ar",
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/logo.png`,
      },
    },
    sameAs: [siteConfig.socials.telegram, siteConfig.socials.twitter],
  };
}
// في src/app/layout.js


export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.className}>
      <head>
        <link rel="alternate" href={siteConfig.url} hrefLang="ar-SA" />
        <meta name="theme-color" content="#ffffff" />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateSchema()),
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50 flex flex-col">
        <CartProvider>
        {/* القائمة العلوية */}
        <Navbar />

        {/* المحتوى الرئيسي */}
        <main className="flex-grow">{children}</main>

        {/* التذييل */}
        <Footer />
</CartProvider>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}

        {/* سكريبت Crisp للدردشة المباشرة */}
        {process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID && (
          <Script id="crisp-chat" strategy="afterInteractive">
            {`
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="${process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID}";
              (function(){
                var d=document;
                var s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
