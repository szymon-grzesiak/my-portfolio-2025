import { Metadata } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import Grainient from "@/components/ui/grainient";
import { ContactForm } from "@/components/ui/ContactDrawer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Szymon Grzesiak. Let's discuss your project, frontend/backend needs, or general inquiries.",
  alternates: {
    canonical: `${siteConfig.url}/contact`,
  },
  openGraph: {
    title: "Contact | Szymon Grzesiak",
    description: "Get in touch with Szymon Grzesiak. Let's discuss your project, frontend/backend needs, or general inquiries.",
    url: `${siteConfig.url}/contact`,
  },
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center p-4 md:pl-[130px]">
      <Grainient
        color1="#341833"
        color2="#bab5cf"
        color3="#3c00ff"
        timeSpeed={0.25}
        colorBalance={0}
        warpStrength={1}
        warpFrequency={5}
        warpSpeed={2}
        warpAmplitude={50}
        blendAngle={0}
        blendSoftness={0.05}
        rotationAmount={500}
        noiseScale={2}
        grainAmount={0.1}
        grainScale={2}
        grainAnimated={false}
        contrast={1.5}
        gamma={1}
        saturation={1}
        centerX={0}
        centerY={0}
        zoom={0.9}
      />
      <div className="relative z-10 w-full max-w-md my-auto flex flex-col gap-6">
        <ContactForm />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 w-full px-2">
          <div className="h-[1px] bg-white/20 flex-1" />
          <span className="text-xs font-bold text-white/70 uppercase tracking-widest whitespace-nowrap">
            Or contact me here
          </span>
          <div className="h-[1px] bg-white/20 flex-1" />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-8 text-white">
          <Link
            href="https://t.me/jsbr9"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors duration-200"
            aria-label="Telegram profile"
          >
            <FaTelegram className="text-4xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/szymongrzesiak/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors duration-200"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="text-4xl" />
          </Link>
          <Link
            href="https://github.com/szymon-grzesiak"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition-colors duration-200"
            aria-label="GitHub profile"
          >
            <FaGithub className="text-4xl" />
          </Link>
        </div>
      </div>
    </main>
  );
}
