"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa";
import Image from "next/image";
import logo64 from "../../app/logo-64.png";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import postsMeta from "@/lib/posts-meta.json";

const Sidebar = () => {
  const pathname = usePathname();
  const isPolish = pathname.startsWith("/pl");

  const links = isPolish
    ? [
      { href: "/pl/projects", label: "PROJEKTY" },
      { href: "/pl/blog", label: "BLOG" },
      { href: "/pl/contact", label: "KONTAKT" },
    ]
    : [
      { href: "/projects", label: "PROJECTS" },
      { href: "/blog", label: "BLOG" },
      { href: "/contact", label: "CONTACT" },
    ];

  const getLanguageLinks = () => {
    let enHref = pathname;
    let plHref = `/pl${pathname === "/" ? "" : pathname}`;

    if (isPolish) {
      enHref = pathname.replace(/^\/pl/, "") || "/";
      plHref = pathname;
    }

    const isBlogPost = pathname.includes("/blog/") || pathname.includes("/pl/blog/");
    const isProjectStudy = pathname.includes("/projects/") || pathname.includes("/pl/projects/");

    if (isBlogPost) {
      const match = pathname.match(/(?:\/pl)?\/blog\/(.+)$/);
      const postSlug = match ? match[1] : "";

      if (postSlug) {
        if (!isPolish) {
          const plExists = postsMeta.some(
            (p) => p.locale === "pl" && p.slugAsParams === `pl/${postSlug}`
          );
          plHref = plExists ? `/pl/blog/${postSlug}` : "/pl/blog";
        } else {
          const enExists = postsMeta.some(
            (p) => p.locale === "en" && p.slugAsParams === `en/${postSlug}`
          );
          enHref = enExists ? `/blog/${postSlug}` : "/blog";
        }
      } else {
        if (!isPolish) {
          plHref = "/pl/blog";
        } else {
          enHref = "/blog";
        }
      }
    }

    if (isProjectStudy) {
      const match = pathname.match(/(?:\/pl)?\/projects\/(.+)$/);
      const projectSlug = match ? match[1] : "";
      if (projectSlug) {
        if (!isPolish) {
          plHref = `/pl/projects/${projectSlug}`;
        } else {
          enHref = `/projects/${projectSlug}`;
        }
      } else {
        if (!isPolish) {
          plHref = "/pl/projects";
        } else {
          enHref = "/projects";
        }
      }
    }

    return { enHref, plHref };
  };

  const { enHref, plHref } = getLanguageLinks();

  const SpecialUrl = () => {
    if (pathname.includes("tags") || pathname.includes("blog")) {
      return (
        <div className="cursor-pointer font-display text-[22px] leading-[30px] 2xl:text-2xl">
          <Link href={isPolish ? "/pl/tags" : "/tags"}>
            <span
              className={cn(
                "lineThroughEffect",
                pathname.includes("tags") && "active-lineThroughEffect"
              )}
            >
              {isPolish ? "TAGI" : "TAGS"}
            </span>
          </Link>
        </div>
      );
    }
  };

  return (
    <div className="hidden md:block w-[130px] px-2 md:px-4 fixed left-0 top-0 h-screen bg-white/70 border-r-2 border-r-slate-400 backdrop-blur-xl z-100">
      <ul className="flex h-screen flex-col justify-between items-center py-6 gap-16">
        <li>
          <Link href={isPolish ? "/pl" : "/"}>
            <Image src={logo64} width={50} height={50} alt="Logo" />
          </Link>
        </li>
        <li className="flex flex-col items-start justify-center h-full gap-12">
          {links.map((link) => (
            <div
              key={link.href}
              className="cursor-pointer font-display text-[22px] leading-[30px] 2xl:text-2xl"
            >
              <Link href={link.href}>
                <span
                  className={cn(
                    "lineThroughEffect",
                    pathname.startsWith(link.href) && "active-lineThroughEffect"
                  )}
                >
                  {link.label}
                </span>
              </Link>
            </div>
          ))}
          <SpecialUrl />
        </li>
        <li className="flex flex-col gap-4 justify-center items-center">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-white border-2 border-black p-0.5 rounded-lg shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-xs font-base font-display shrink-0 mb-4">
            <a
              href={enHref}
              onClick={() => {
                document.cookie = "user-selected-lang=en; path=/; max-age=31536000";
              }}
              className={cn(
                "px-2 py-0.5 rounded-md transition-all duration-200",
                !isPolish
                  ? "bg-main text-white border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                  : "text-slate-600 hover:text-indigo-500"
              )}
            >
              EN
            </a>
            <a
              href={plHref}
              onClick={() => {
                document.cookie = "user-selected-lang=pl; path=/; max-age=31536000";
              }}
              className={cn(
                "px-2 py-0.5 rounded-md transition-all duration-200",
                isPolish
                  ? "bg-main text-white border border-black shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]"
                  : "text-slate-600 hover:text-indigo-500"
              )}
            >
              PL
            </a>
          </div>

          <Link href="https://t.me/jsbr9" aria-label="Telegram profile">
            <FaTelegram className="text-3xl hover:text-main" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/szymongrzesiak/"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin className="text-3xl hover:text-main" />
          </Link>
          <Link
            href="https://github.com/szymon-grzesiak"
            aria-label="GitHub profile"
          >
            <FaGithub className="text-3xl hover:text-main" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
