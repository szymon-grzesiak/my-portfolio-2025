import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins, Jersey_10, Bagel_Fat_One } from "next/font/google";
import { Providers } from "@/components/shared/providers";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Sidebar from "@/components/shared/sidebar";
import { siteConfig } from "@/config/site";
import { FamilyButton } from "@/components/shared/family-button";
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
  title: {
    default: "Szymon Grzesiak | Full Stack Developer | Portfolio",
    template: "%s | Szymon Grzesiak",
  },
  description:
    "Experienced Full Stack Developer specializing in Next.js, React, and TypeScript. View my portfolio of modern web applications and software engineering projects.",
  keywords: [
    "Szymon Grzesiak",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Development Portfolio",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Software Engineer",
    "Web Applications",
    "Responsive Design",
    "Modern Web Development",
  ],
  authors: [{ name: "Szymon Grzesiak", url: "https://szymongrzesiak.dev" }],
  creator: "Szymon Grzesiak",
  publisher: "Szymon Grzesiak",
  openGraph: {
    title: "Szymon Grzesiak | Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer creating modern, responsive web applications. Explore my portfolio showcasing projects in Next.js, React, and TypeScript.",
    url: "https://szymongrzesiak.dev",
    siteName: "Szymon Grzesiak Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://szymongrzesiak.dev/og-image.jpg", // Dodaj ten obraz!
        width: 1200,
        height: 630,
        alt: "Szymon Grzesiak - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Szymon Grzesiak | Full Stack Developer Portfolio",
    description:
      "Experienced Full Stack Developer specializing in modern web technologies",
    images: ["https://szymongrzesiak.dev/og-image.jpg"],
    creator: "@jasberry_x", // Dodaj jeśli masz
  },
  alternates: {
    canonical: "https://szymongrzesiak.dev",
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
  verification: {
    google: "fJVBRYoJSrpgs402DczTj2RoH37l1WJVB5EWuKR2l1w",
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Szymon Grzesiak",
  jobTitle: "Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in Next.js, React, and TypeScript",
  url: "https://szymongrzesiak.dev",
  image: "https://szymongrzesiak.dev/profile-image.jpg", // Dodaj swoje zdjęcie
  sameAs: [
    "https://github.com/szymon-grzesiak", // Dodaj swoje profile
    "https://www.linkedin.com/in/szymon-grzesiak-296873200/",
    // inne profile społecznościowe
  ],
  knowsAbout: [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Full Stack Development",
    "Web Development",
    "Software Engineering",
  ],
  alumniOf: {
    "@type": "Organization",
    name: "University of Kalisz", // Jeśli chcesz dodać
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Szymon Grzesiak Portfolio",
  url: "https://szymongrzesiak.dev",
  description: "Portfolio of Szymon Grzesiak - Full Stack Developer",
  author: {
    "@type": "Person",
    name: "Szymon Grzesiak",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jersey.variable} ${bagel.variable} font-sans antialiased text-black bg-white`}
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        {/* Preconnects for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9YFNJST6XE"
        />
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
          <div className="block md:hidden fixed z-200 right-4 bottom-4">
            <FamilyButton />
          </div>
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}
