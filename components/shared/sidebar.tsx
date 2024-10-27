"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import logo64 from "../../app/logo-64.png";
import { usePathname } from "next/navigation";
import { cn } from "@lib/utils";

const links = [
  { href: "/#about", label: "ABOUT" },
  { href: "/#projects", label: "PROJECTS" },
  { href: "/blog", label: "BLOG" },
  { href: "/resume", label: "RESUME" },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="hidden md:block px-2 md:px-4 fixed left-0 top-0 h-screen bg-white/50 border-r-2 border-r-slate-400 backdrop-blur-xl z-[100]">
      <ul className="flex h-screen flex-col justify-between items-center py-6 gap-16">
        <li>
          <Link href={"/"}>
            <Image src={logo64} width={50} height={50} alt="Logo" />
          </Link>
        </li>
        <li className="flex flex-col items-start justify-center h-full gap-12">
          {links.map((link) => (
            <div
              key={link.href}
              className="cursor-pointer font-bagel text-[22px] leading-[30px] 2xl:text-2xl"
            >
              <Link href={link.href}>
                <span
                  className={cn(
                    "lineThroughEffect",
                    pathname === link.href && "active-lineThroughEffect"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            </div>
          ))}
        </li>
        <li className="flex flex-col gap-4 justify-center items-center">
          <Link
            href="https://www.linkedin.com/in/szymon-grzesiak-296873200/"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="text-3xl hover:text-[#00E5FF]" />
          </Link>
          <Link
            href="https://github.com/itsJasberry"
            aria-label="GitHub profile"
          >
            <FaGithub className="text-3xl hover:text-[#00E5FF]" />
          </Link>
          <Link href="https://x.com/jasberry_x" aria-label="Twitter profile">
            <FaTwitter className="text-3xl hover:text-[#00E5FF]" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
