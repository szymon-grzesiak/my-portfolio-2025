"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PlusIcon, XIcon } from "lucide-react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils"; // Upewnij się, że masz poprawny import
import logo64 from "../../app/logo-64.png";

const CONTAINER_SIZE = 400;

const FamilyButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded(!isExpanded);

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={cn(
        "rounded-[24px]",
        "bg-gradient-to-b from-neutral-900 to-black",
        isExpanded
          ? "w-[204px] bg-gradient-to-b dark:from-stone-900 dark:to-neutral-900/80"
          : "dark:from-neutral-900 dark:to-stone-950 bg-gradient-to-b"
      )}
    >
      <div className="rounded-[23px]">
        <div className="rounded-[22px] border dark:border-stone-800 border-white/50">
          <div className="rounded-[21px] border border-neutral-950/20 flex items-center justify-center">
            <motion.div
              className={cn(
                "relative shadow-lg h-full w-full flex flex-col justify-center space-y-1 items-center text-white cursor-pointer z-10",
                !isExpanded
                  ? "bg-gradient-to-b from-neutral-900 to-stone-900 dark:from-stone-700 dark:to-neutral-800/80"
                  : ""
              )}
              layoutRoot
              layout
              initial={{ borderRadius: 21, width: "4rem", height: "4rem" }}
              animate={
                isExpanded
                  ? {
                      borderRadius: 20,
                      width: "200px",
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
                  <ul className="flex flex-col items-start p-4 justify-between h-full w-full">
                    <Link href={"/"} onClick={handleLinkClick}>
                      <Image src={logo64} width={50} height={50} alt="Logo" />
                    </Link>
                    <div className="flex flex-col items-start justify-center h-full gap-3">
                      <li className="cursor-pointer font-bagel text-3xl lineThroughEffect">
                        <Link href="/#about" onClick={handleLinkClick}>
                          ABOUT
                        </Link>
                      </li>
                      <li className="cursor-pointer font-bagel text-3xl lineThroughEffect">
                        <Link href="/#projects" onClick={handleLinkClick}>
                          PROJECTS
                        </Link>
                      </li>
                      <li className="cursor-pointer font-bagel text-3xl lineThroughEffect">
                        <Link href="/blog" onClick={handleLinkClick}>
                          BLOG
                        </Link>
                      </li>
                      <li className="cursor-pointer font-bagel text-3xl lineThroughEffect">
                        <Link href="/resume" onClick={handleLinkClick}>
                          RESUME
                        </Link>
                      </li>
                    </div>

                    <li className="flex gap-4 justify-center items-center mb-14">
                      <Link
                        href="https://www.linkedin.com/in/szymon-grzesiak-296873200/"
                        onClick={handleLinkClick}
                        target="_blank"
                      >
                        <FaLinkedin className="text-3xl hover:text-[#00E5FF]" />
                      </Link>
                      <Link
                        href="https://github.com/itsJasberry"
                        onClick={handleLinkClick}
                        target="_blank"
                      >
                        <FaGithub className="text-3xl hover:text-[#00E5FF]" />
                      </Link>
                      <Link
                        href="https://x.com/jasberry_x"
                        onClick={handleLinkClick}
                        target="_blank"
                      >
                        <FaTwitter className="text-3xl hover:text-[#00E5FF]" />
                      </Link>
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
