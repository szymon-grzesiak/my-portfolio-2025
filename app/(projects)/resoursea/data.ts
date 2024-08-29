import { FaGitAlt, FaGithub, FaReact, FaStripe } from "react-icons/fa";
import {
  SiClerk,
  SiMongoose,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiResend,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { BsFillShieldLockFill } from "react-icons/bs";
import { MongoIcon, TinyMCE } from "@components/icons";

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
  { icon: FaGitAlt, title: "Git" },
  { icon: FaGithub, title: "Github" },
  { icon: MongoIcon, title: "MongoDB" },
  { icon: SiMongoose, title: "Mongoose" },
  { icon: SiClerk, title: "Clerk.js" },
  { icon: TinyMCE, title: "TinyMCE" },
  { icon: SiOpenai, title: "OpenAI" },
];

export const challenges = [
  "Implementing a robust authentication system using Clerk.js was challenging, particularly in ensuring seamless user experience with features like two-factor authentication.",
  "Developing and managing the AI-generated response feature required careful integration with OpenAI's API while controlling costs and maintaining platform performance.",
  "Designing a fast and accurate global search mechanism posed challenges in optimizing search algorithms and efficiently handling large datasets.",
  "Ensuring responsive and user-friendly UI design with Tailwind CSS across various devices and screen sizes was a continuous challenge.",
];

export const learnings = [
  "Mastered the implementation of advanced authentication workflows with Clerk.js, including two-factor authentication.",
  "Gained significant experience in integrating and managing AI capabilities using OpenAI's API while balancing cost efficiency.",
  "Enhanced my ability to create and optimize global search functionality, focusing on speed and accuracy.",
  "Improved my skills in responsive UI design using Tailwind CSS, ensuring consistency across different devices.",
];

export const features = [
  {
    title: "Advanced Login System",
    content:
      "Powered by Clerk.js, the platform ensures secure and seamless user authentication, providing a smooth and secure login experience.",
  },
  {
    title: "Global Search Mechanism",
    content:
      "The platform features an advanced global search function, enabling users to easily find relevant questions, posts, and discussions across the entire platform.",
  },
  {
    title: "Comprehensive Knowledge Sharing",
    content:
      "Users can explore and contribute to various topics through dedicated sections such as Community, Collections, and Tags. This setup makes it easy to organize and access valuable information.",
  },
  {
    title: "Question and Answer Interface",
    content:
      "The platform’s main interface allows users to view, ask, and answer questions, fostering an environment of collaborative knowledge sharing. The 'All Questions' tab lets users filter and sort through content based on relevance, frequency, and more.",
  },
  {
    title: "Job Finder",
    content:
      "In addition to sharing knowledge, Resoursea includes a 'Find Jobs' section where users can discover employment opportunities relevant to their interests and expertise.",
  },
  {
    title: "AI-Generated Responses",
    content:
      "Resoursea has integrated a feature that allows users to generate AI-powered responses to posts. Although this feature is currently disabled to avoid incurring costs for the OpenAI API, it is designed to enhance user interaction by providing intelligent, context-aware responses.",
  },
  {
    title: "Customizable Appearance",
    content:
      "Users can personalize their experience by adjusting the platform’s interface, ensuring a comfortable and engaging environment.",
  },
  {
    title: "Tags and Popular Topics",
    content:
      "The platform supports the use of tags to organize content effectively. Users can easily navigate through popular topics to find the information most relevant to their needs.",
  },
];
