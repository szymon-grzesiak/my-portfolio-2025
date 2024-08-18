import { cn } from "@lib/utils";
import "./globals.css";
import type { Metadata, Viewport } from "next";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Providers } from "@components/providers";

export const metadata: Metadata = {
  title: "Szymon Grzesiak | Full Stack Developer",
  description:
    "Hi, I'm Szymon. Discover my projects and share your thoughts. I'm trying to create good looking websites and then showcase it on my portfolio. I hope you will like it. 🚀",
  keywords: [
    "Szymon Grzesiak",
    "Full Stack Developer",
    "Website Development",
    "Next.js",
    "Responsive Web Design",
    "User Experience",
    "Software Engineering",
    "Web Development",
  ],
  authors: [{ name: "Szymon Grzesiak", url: "https://szymongrzesiak.dev" }],
  creator: "Szymon Grzesiak",
  openGraph: {
    title: "Szymon Grzesiak | Full Stack Developer",
    description:
      "Hi, I'm Szymon. Discover my projects and share your thoughts. I'm trying to create good looking websites and then showcase it on my portfolio. I hope you will like it. 🚀",
    url: "https://szymongrzesiak.com",
    siteName: "Szymon Grzesiak | Full Stack Developer",
    images: [
      {
        url: "https://ptnotltkpwuwkpqppfbq.supabase.co/storage/v1/object/sign/portfolio/opengraph-image.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW8vb3BlbmdyYXBoLWltYWdlLnBuZyIsImlhdCI6MTcxMDE3MDQ3NSwiZXhwIjoxNzQxNzA2NDc1fQ.my1Ny0K3_3e3gmi5LNHArbCBTT2pF9stGy0cbiRyhnY&t=2024-03-11T15%3A21%3A18.798Z",
      },
    ],
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
        </Providers>
      </body>
    </html>
  );
}
