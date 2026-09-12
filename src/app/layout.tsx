import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { profile } from "@/data";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const ogImage = `${profile.siteUrl}/og-image.png`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: profile.title,
    template: `%s | ${profile.name}`,
  },
  description: profile.description,
  keywords: [
    "AI Product Manager",
    "AI产品经理",
    "数据驱动",
    "MVP",
    "全栈开发",
    "机器学习",
    "NLP",
    "用户研究",
    profile.name,
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: profile.siteUrl,
    siteName: profile.title,
    title: profile.title,
    description: profile.description,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: profile.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: profile.title,
    description:
      "市场营销 × 人工智能双学科背景。从数据洞察到产品落地，用 AI 驱动 MVP 快速验证。",
    images: [ogImage],
    creator: profile.twitter,
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={inter.variable}>
      <body className={`${inter.className} overflow-x-hidden`}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
