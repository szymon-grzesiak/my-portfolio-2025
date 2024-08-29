import { FaGitAlt, FaGithub, FaReact, FaStripe } from "react-icons/fa";
import {
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiResend,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BsFillShieldLockFill } from "react-icons/bs";

export const technologies = [
  {
    icon: FaReact,
    title: "React",
  },
  {
    icon: SiNextdotjs,
    title: "Next.js",
  },
  {
    icon: SiTypescript,
    title: "TypeScript",
  },
  { icon: SiTailwindcss, title: "Tailwind CSS" },
  { icon: TbBrandFramerMotion, title: "Framer Motion" },
  { icon: FaGitAlt, title: "Git" },
  { icon: FaGithub, title: "Github" },
  { icon: SiPostgresql, title: "PostgreSQL" },
  { icon: SiPrisma, title: "Prisma" },
  { icon: FaStripe, title: "Stripe" },
  { icon: SiResend, title: "Resend" },
  { icon: BsFillShieldLockFill, title: "NextAuth" },
];

export const challenges = [
  "Working solo on this project required me to independently manage all aspects of development, from frontend to backend, without external assistance.",
  "Integrating Stripe for payment processing was particularly challenging as I had no prior experience with payment systems. I had to learn and implement it from scratch, ensuring secure transactions within the platform.",
  "Implementing authentication features such as password resets via email and two-factor authentication (2FA) was new to me. I had to get up to speed with these concepts and successfully integrate them using services like Resend.",
  "Balancing the comprehensive demands of this project with tight deadlines added pressure, requiring efficient time management and the ability to quickly learn and apply new technologies.",
];

export const learnings = [
  "Mastered the implementation of full authentication and authorization workflows, including advanced features like password reset via email and two-factor authentication, using industry-standard protocols and services like Resend.",
  "Gained significant experience with Stripe, learning how to securely manage payment processing, including handling premium features and ensuring compliance with security standards.",
  "Improved my backend development skills, particularly in optimizing database queries and managing server-side logic, to ensure the platform's performance and scalability.",
  "Developed a strong understanding of NextJS, mastering its server-side rendering, static site generation, and API handling, all of which were crucial to the success of this project.",
];

export const features = [
  "Language Games: Engage in interactive learning through Flashcards, Matching Tiles, and Hangman, each designed to reinforce vocabulary retention.",
  "Progress Tracking: Monitor your learning journey with detailed progress tracking, allowing you to see your improvement over time.",
  "Customizable Appearance: Personalize the platform’s interface to match your preferences, making the learning environment more comfortable and engaging.",
  "Material Sharing: Easily share your custom vocabulary sets with others, fostering a collaborative learning environment.",
  "Import Words from Files: Conveniently import words from external files, streamlining the process of creating new vocabulary sets.",
  "Premium Features: Unlock additional benefits with a premium subscription, including enhanced game options and advanced progress analytics. Payment processing is handled securely through Stripe.",
];
