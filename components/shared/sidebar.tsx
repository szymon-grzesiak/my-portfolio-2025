import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
import logo64 from "../../app/logo-64.png";

const Sidebar = () => {
  return (
    <div className="px-2 md:px-4 fixed left-0 top-0 h-screen bg-white/50 border-r-2 border-r-slate-400 backdrop-blur-xl z-[100]">
      <ul className="flex h-screen flex-col justify-between items-center py-6 gap-16">
        <Link href={"/"}>
          <Image src={logo64} width={50} height={50} alt="Logo" />
        </Link>
        <div className="flex flex-col items-start justify-center h-full gap-12">
          <li className="cursor-pointer font-jersey text-3xl lineThroughEffect">
          <Link href="/#about">ABOUT</Link>
          </li>
          <li className="cursor-pointer font-jersey text-3xl lineThroughEffect">
          <Link href="/#projects">PROJECTS</Link>
          </li>
          <li className="cursor-pointer font-jersey text-3xl lineThroughEffect">
            <Link href="/blog">BLOG</Link>
          </li>
          <li className="cursor-pointer font-jersey text-3xl lineThroughEffect">
            <Link href="/resume">RESUME</Link>
          </li>
        </div>

        <li className="flex flex-col gap-4 justify-center items-center">
          <Link href="https://www.linkedin.com/in/szymon-grzesiak-296873200/">
            <FaLinkedin className="text-3xl hover:text-[#00E5FF]" />
          </Link>
          <Link href="https://github.com/itsJasberry">
            <FaGithub className="text-3xl hover:text-[#00E5FF]" />
          </Link>
          <Link href="https://x.com/jasberry_x">
            <FaTwitter className="text-3xl hover:text-[#00E5FF]" />
          </Link>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
