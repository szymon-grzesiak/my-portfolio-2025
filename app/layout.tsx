import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Szymon Grzesiak | Full Stack Developer",
  description:
    "Hi, I'm Szymon. Discover my projects and share your thoughts. I'm trying to create good looking websites and then showcase it on my portfolio. I hope you will like it. 🚀",
  keywords:
    "Szymon Grzesiak, Full Stack Developer, Website Development, Next.js, Responsive Web Design, User Experience, Software Engineering, Web Development",
  authors: [{ name: "Szymon Grzesiak", url: "https://github.com/itsJasberry" }],
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="main bg-grid">
          <div className="gradient bg-grid" />
        </div>
        <main className="app bg-grid">
          <div className="fixed left-0 top-0 h-full flex items-center justify-center">
            <ul className="flex flex-col gap-10 ml-8 font-bold text-lg">
              <li>
                <Link
                  className="[writing-mode:vertical-lr] rotate-180"
                  href="https://google.com"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  className="[writing-mode:vertical-lr] rotate-180"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="[writing-mode:vertical-lr] rotate-180"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
