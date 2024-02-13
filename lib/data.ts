import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "BS Graphic & Web Development",
    location: "AICS Sacramento, CA",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2012–2016",
  },
  {
    title: "Graphic Designer",
    location: "Mykyla Inc, Roseville, CA",
    description:
      "Responsible for in-house design, print, and production. Has a proven track record of reliability and consistency. Has managed successful projects and built continuing relationships with clients such as Swatch Group, Victoria's Secret, and Kaiser Permanente",
    icon: React.createElement(CgWorkAlt),
    date: "2008–2017",
  },
  {
    title: "Graphic Designer",
    location: "Dreambox Creative, Roseville, CA",
    description:
      "Primary responsibilities included ideation, design, and development of brand identities in both print and digital environments.",
    icon: React.createElement(CgWorkAlt),
    date: "2017–2019",
  },
  {
    title: "Creative Director",
    location: "FLB Group, Folsom, CA",
    description:
      "Responsible for creating, developing, deploying, and managing projects for multiple businesses each with unique identities.",
    icon: React.createElement(CgWorkAlt),
    date: "2019–Current",
  },
  {
    title: "Professional Certification",
    location: "Duke University, Programming Foundations",
    description:
      "Foundational programming concepts (functions, loops, conditional statements).",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Professional Certification",
    location: "UC Davis, JavaScript",
    description: "Front-End foundations in JavaScript",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Professional Certification",
    location: "Front-End Developer, Meta",
    description: "advanced HTML and CSS, advanced React, UX/UI principles, ",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Professional Certification",
    location: "Back-End Developer, Meta",
    description:
      "Databases for back-end development, Django, Python, API development",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Professional Certification",
    location: "Advanced Front-End Developer, Codecademy",
    description:
      "HTML, CSS, JavaScript, Git, React, Redux, data structures, algorithms",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for two years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MondoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has feature likes filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Vite",
  "MySQL",
  "Git",
  "Tailwind",
  "Framer Motion",
  "Cinema 4D",
  "Octane",
  "AfterEffects",
  "Premiere",
  "InDesign",
  "Illustrator",
  "Photoshop",
] as const;
