"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlusIcon, XIcon } from "lucide-react";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"; // Upewnij się, że masz poprawny import
import logo64 from "../../app/logo-64.png";
import postsMeta from "@/lib/posts-meta.json";

const CONTAINER_SIZE = 540;

const FamilyButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const pathname = usePathname();
  const isPolish = pathname.startsWith("/pl");

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

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={cn(
        "rounded-[24px]",
        "bg-linear-to-b from-neutral-900 to-black",
        isExpanded
          ? "w-[244px] bg-linear-to-b dark:from-stone-900 dark:to-neutral-900/80"
          : "dark:from-neutral-900 dark:to-stone-950 bg-linear-to-b"
      )}
    >
      <div className="rounded-[23px]">
        <div className="rounded-[22px] border dark:border-stone-800 border-white/50">
          <div className="rounded-[21px] border border-neutral-950/20 flex items-center justify-center">
            <motion.div
              className={cn(
                "relative shadow-lg h-full w-full flex flex-col justify-center space-y-1 items-center text-white cursor-pointer z-10",
                !isExpanded
                  ? "bg-linear-to-b from-neutral-900 to-stone-900 dark:from-stone-700 dark:to-neutral-800/80"
                  : ""
              )}
              layoutRoot
              layout
              initial={{ borderRadius: 21, width: "4rem", height: "4rem" }}
              animate={
                isExpanded
                  ? {
                    borderRadius: 20,
                    width: "240px",
                    height: CONTAINER_SIZE,
                    transition: {
                      type: "spring",
                      damping: 25,
                      stiffness: 400,
                      when: "beforeChildren",
                    },
                  }
                  : {
                    borderRadius: 21,
                    width: "4rem",
                    height: "4rem",
                  }
              }
            >
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.3,
                      duration: 0.4,
                      ease: "easeOut",
                    },
                  }}
                  className="h-full"
                >
                  <ul className="flex flex-col items-start p-6 justify-between h-full w-full">
                    <Link href={isPolish ? "/pl" : "/"} onClick={handleLinkClick} className="mb-6">
                      <Image src={logo64} width={50} height={50} alt="Logo" />
                    </Link>
                    <div className="flex flex-col items-start justify-center h-full gap-5 mt-2">
                      <li className="cursor-pointer font-display text-3xl lineThroughEffect">
                        <Link href={isPolish ? "/pl/#about" : "/#about"} onClick={handleLinkClick}>
                          {isPolish ? "O MNIE" : "ABOUT"}
                        </Link>
                      </li>
                      <li className="cursor-pointer font-display text-3xl lineThroughEffect">
                        <Link href={isPolish ? "/pl/projects" : "/projects"} onClick={handleLinkClick}>
                          {isPolish ? "PROJEKTY" : "PROJECTS"}
                        </Link>
                      </li>
                      <li className="cursor-pointer font-display text-3xl lineThroughEffect">
                        <Link href={isPolish ? "/pl/blog" : "/blog"} onClick={handleLinkClick}>
                          {isPolish ? "BLOG" : "BLOG"}
                        </Link>
                      </li>
                      <li className="cursor-pointer font-display text-3xl lineThroughEffect">
                        <Link href={isPolish ? "/pl/contact" : "/contact"} onClick={handleLinkClick}>
                          {isPolish ? "KONTAKT" : "CONTACT"}
                        </Link>
                      </li>
                      {(pathname.includes("tags") || pathname.includes("blog")) && (
                        <li className="cursor-pointer font-display text-3xl lineThroughEffect">
                          <Link href={isPolish ? "/pl/tags" : "/tags"} onClick={handleLinkClick}>
                            {isPolish ? "TAGI" : "TAGS"}
                          </Link>
                        </li>
                      )}
                    </div>

                    <li className="flex flex-col gap-4 items-start w-full">
                      {/* Language Switcher */}
                      <div className="flex gap-4 items-center font-display text-xl border-t border-white/20 pt-3 w-full">
                        <a
                          href={enHref}
                          onClick={() => {
                            document.cookie = "user-selected-lang=en; path=/; max-age=31536000";
                            handleLinkClick();
                          }}
                          className={cn(
                            "hover:text-main transition-colors duration-200",
                            !isPolish ? "text-main underline font-bold" : "text-neutral-400 font-medium"
                          )}
                        >
                          EN
                        </a>
                        <a
                          href={plHref}
                          onClick={() => {
                            document.cookie = "user-selected-lang=pl; path=/; max-age=31536000";
                            handleLinkClick();
                          }}
                          className={cn(
                            "hover:text-main transition-colors duration-200",
                            isPolish ? "text-main underline font-bold" : "text-neutral-400 font-medium"
                          )}
                        >
                          PL
                        </a>
                      </div>

                      <div className="flex gap-4 justify-center items-center mb-20">
                        <Link
                          href="https://www.linkedin.com/in/szymongrzesiak/"
                          onClick={handleLinkClick}
                          target="_blank"
                        >
                          <FaLinkedin className="text-3xl hover:text-main" />
                        </Link>
                        <Link
                          href="https://github.com/szymon-grzesiak"
                          onClick={handleLinkClick}
                          target="_blank"
                        >
                          <FaGithub className="text-3xl hover:text-main" />
                        </Link>
                        <Link
                          href="https://t.me/jsbr9"
                          onClick={handleLinkClick}
                          target="_blank"
                        >
                          <FaTelegram className="text-3xl hover:text-main" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </motion.div>
              )}

              <motion.div
                className="absolute"
                initial={{ x: "-50%" }}
                animate={{
                  x: isExpanded ? "0%" : "-50%",
                  transition: {
                    type: "tween",
                    ease: "easeOut",
                    duration: 0.3,
                  },
                }}
                style={{
                  left: isExpanded ? "" : "50%",
                  bottom: 6,
                }}
              >
                {isExpanded ? (
                  <motion.div
                    className="p-[10px] group bg-indigo-200 border border-cyan-100/30 hover:border-neutral-200 text-orange-50 rounded-full shadow-2xl transition-colors duration-300"
                    onClick={toggleExpand}
                    layoutId="expand-toggle"
                    initial={false}
                    animate={{
                      rotate: -360,
                      transition: {
                        duration: 0.4,
                      },
                    }}
                  >
                    <XIcon
                      className={cn(
                        "h-7 w-7 text-black dark:text-neutral-400/80 group-hover:text-neutral-500 transition-colors duration-200"
                      )}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    className={cn(
                      "p-[10px] group bg-indigo-200 text-cyan-50 border border-cyan-100/10 shadow-2xl transition-colors duration-200"
                    )}
                    style={{ borderRadius: 24 }}
                    onClick={toggleExpand}
                    layoutId="expand-toggle"
                    initial={{ rotate: 180 }}
                    animate={{
                      rotate: -180,
                      transition: {
                        duration: 0.4,
                      },
                    }}
                  >
                    <PlusIcon className="h-7 w-7 text-black dark:text-neutral-900" />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FamilyButton };
