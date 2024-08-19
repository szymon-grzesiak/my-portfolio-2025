import { cn } from "@lib/utils";
import "./globals.css";
import type { Metadata, Viewport } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Providers } from "@components/providers";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Szymon Grzesiak | Full Stack Developer | Portfolio",
  description:
    "Explore the portfolio of Szymon Grzesiak, a skilled full stack developer. Discover his projects in web development and software engineering, and learn more about his expertise in technologies like Next.js, React, and TypeScript.",
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

const cx = (...classes: any) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010] scroll-pt-[3.5rem]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className={cn("min-h-screen font-sans antialiased")}>
        <Providers>
          <div className="main bg-grid">
            <div className="bg-grid" />
          </div>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
