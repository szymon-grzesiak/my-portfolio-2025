import "./globals.css";
import type { Metadata, Viewport } from "next";

import { Poppins, Jersey_10, Bagel_Fat_One } from "next/font/google";
import { Providers } from "@components/shared/providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Sidebar from "@components/shared/sidebar";
import { siteConfig } from "@config/site";
import { FamilyButton } from "@components/shared/family-button";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-poppins",
});

const jersey = Jersey_10({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-jersey",
});

const bagel = Bagel_Fat_One({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--font-bagel",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Szymon Grzesiak | Full Stack Developer | Portfolio",
  description:
    "Discover my projects in web development and software engineering, and learn more about my expertise in technologies like Next.js, React, and TypeScript.",
  keywords: [
    "Full Stack Developer Portfolio",
    "Web Development",
    "Next.js",
    "React",
    "typescript",
    "Software Engineering",
  ],
  authors: [{ name: "Szymon Grzesiak", url: "https://szymongrzesiak.dev" }],
  creator: "Szymon Grzesiak",
  openGraph: {
    title: "Szymon Grzesiak | Full Stack Developer",
    description:
      "Szymon Grzesiak, Full Stack Developer creating modern, responsive websites and web applications. Explore my portfolio and projects in web development. 🚀",
    url: "https://szymongrzesiak.dev",
    siteName: "Szymon Grzesiak | Full Stack Developer",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "Szymon Grzesiak | Full Stack Developer",
    card: "summary_large_image",
  },
  verification: {
    google: "fJVBRYoJSrpgs402DczTj2RoH37l1WJVB5EWuKR2l1w",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`text-black ${poppins.variable} ${jersey.variable} ${bagel.variable} font-sans antialiased bg-white dark:text-white dark:bg-[#111110]`}
    >
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9YFNJST6XE"
        ></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9YFNJST6XE', {
            cookie_flags: 'SameSite=None; Secure'
          });
          `}
        </Script>
      </head>
      <body className="min-h-screen">
        <Providers>
          {children}
          <Sidebar />
          <div className="block md:hidden fixed z-[200] right-4 bottom-4">
            <FamilyButton />
          </div>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
