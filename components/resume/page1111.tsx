// import Link from "next/link";
// import React from "react";
// import { HiOutlineDownload } from "react-icons/hi";
// import { Metadata } from 'next';
// import { siteConfig } from "@/config/site";

// export const metadata: Metadata = {
//   title: "Download My Resume | Szymon Grzesiak | Full Stack Developer",
//   description: "Download my professional resume in PDF format to learn about my skills, experience and qualifications as a Full Stack Developer specializing in Next.js, React, and TypeScript.",
//   keywords: [
//     "Resume Download",
//     "CV Download",
//     "Szymon Grzesiak Resume",
//     "Full Stack Developer CV",
//     "Developer Portfolio"
//   ],
//   alternates: {
//     canonical: `${siteConfig.url}/resume`,
//   }
// };

// const Page = () => {
//   return (
//     <div className="relative mx-auto w-full h-screen flex justify-center items-center z-10">
//       <div className="flex flex-col justify-center items-center gap-6 bg-white/90 p-10 rounded-3xl border-2 border-black shadow-[4px_4px] shadow-black">
//         <div className="button rounded-[24px] overflow-hidden px-6 py-3 font-bold">
//           <Link
//             href={"https://szymongrzesiak.dev/resume_szymon_grzesiak.pdf"}
//             target="_blank"
//             className="text-white"
//           >
//             Open in a new tab
//           </Link>
//         </div>
//         <p className="px-5 text-2xl font-bold">or download directly</p>
//         <a
//           href="/resume_szymon_grzesiak.pdf"
//           download="resume_szymon_grzesiak.pdf"
//         >
//           <HiOutlineDownload className="h-[61px] w-[61px] shrink-0 hover:cursor-pointer text-black hover:text-indigo-500" />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Page;
