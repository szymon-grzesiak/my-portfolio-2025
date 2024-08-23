import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";
import Image from "next/image";
import logo64 from "../app/logo-64.png";
import { buttonVariants } from "./ui/button";
import { cn } from "@lib/utils";

const Sidebar = () => {
  return (
    <div className="w-20 fixed left-0 top-0 h-screen bg-white/40 border-r-2 border-r-slate-400 backdrop-blur-xl">
      <ul className="flex h-screen flex-col justify-between items-center py-6 gap-6">
        <Link href={"/"}>
          <Image src={logo64} width={50} height={50} alt="Logo" />
        </Link>
        <div className="flex flex-col items-start h-full gap-10">
          <li
            className={cn(
              buttonVariants({ variant: "link" }),
              "cursor-pointer [text-shadow:_3px_3px_3px_rgb(0_0_255_/_30%)]"
            )}
          >
            About
          </li>
          <li
            className={cn(
              buttonVariants({ variant: "link" }),
              "cursor-pointer [text-shadow:_3px_3px_3px_rgb(0_0_255_/_30%)]"
            )}
          >
            Projects
          </li>
          <li
            className={cn(
              buttonVariants({ variant: "link" }),
              "cursor-pointer [text-shadow:_3px_3px_3px_rgb(0_0_255_/_30%)]"
            )}
          >
            Blog
          </li>
          <li
            className={cn(
              buttonVariants({ variant: "link" }),
              "cursor-pointer [text-shadow:_3px_3px_3px_rgb(0_0_255_/_30%)]"
            )}
          >
            Contact
          </li>
          <li
            className={cn(
              buttonVariants({ variant: "link" }),
              "cursor-pointer [text-shadow:_3px_3px_3px_rgb(0_0_255_/_30%)]"
            )}
          >
            Resume
          </li>
        </div>

        <li className="flex flex-col gap-4 justify-center items-center">
          <Link href="https://www.linkedin.com/in/szymon-grzesiak-296873200/">
            <FaLinkedin className="text-2xl hover:text-indigo-600" />
          </Link>
          <Link href="https://github.com/itsJasberry">
            <FaGithub className="text-2xl hover:text-indigo-600" />
          </Link>
          <Link href="https://x.com/jasberry_x">
            <FaTwitter className="text-2xl hover:text-indigo-600" />
          </Link>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
