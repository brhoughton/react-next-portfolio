import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import videostreamingapp from "@/public/videostreamingapp.png";
import shoppingcart from "@/public/shoppingcart.png";
import weatherapp from "@/public/weatherapp.png";
import calculatorapp from "@/public/calculatorapp.png";
import expensetracker from "@/public/expensetracker.png";

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
	// {
	//   name: "Skills",
	//   hash: "#skills",
	// },
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
		description:
			"Developed essential knowledge and skills required to design for print and digital environments as well as build usable and accessible front-end web apps.",
		icon: React.createElement(LuGraduationCap),
		date: "2012–2016",
	},
	{
		title: "Graphic Designer",
		location: "Mykyla Inc, Roseville, CA",
		description:
			"Responsible for in-house design, print, and production. Has a proven track record of reliability and consistency. Managed successful projects and built continuing relationships with clients such as Swatch Group, Victoria's Secret, and Kaiser Permanente",
		icon: React.createElement(CgWorkAlt),
		date: "2008–2017",
	},
	{
		title: "Graphic & Front-End Dev",
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
			"Responsible for creating, developing, deploying, and managing projects and applications for various businesses.",
		icon: React.createElement(CgWorkAlt),
		date: "2019–Current",
	},
	{
		title: "Programming Foundations, Duke University",
		location: "Professional Certification",
		description:
			"Foundational programming concepts (functions, loops, conditional statements).",
		icon: React.createElement(LuGraduationCap),
		date: "2023",
	},
	{
		title: "Front-End Foundations, UC Davis",
		location: "Professional Certification",
		description: "Foundational knowledge in JavaScript, HTML, and CSS.",
		icon: React.createElement(LuGraduationCap),
		date: "2023",
	},
	{
		title: "Front-End Developer, Meta",
		location: "Professional Certification",
		description: "Advanced HTML and CSS, advanced React, UX/UI principles.",
		icon: React.createElement(LuGraduationCap),
		date: "2023",
	},
	{
		title: "Back-End Developer, Meta",
		location: "Professional Certification",
		description:
			"Databases for back-end development, Django, Python, and API development.",
		icon: React.createElement(LuGraduationCap),
		date: "2023",
	},
	{
		title: "Advanced Front-End, Codecademy",
		location: "Professional Certification",
		description:
			"HTML, CSS, JavaScript, Git, React, Redux, data structures, and algorithms.",
		icon: React.createElement(LuGraduationCap),
		date: "2024",
	},
] as const;

export const projectsData = [
	{
		title: "Video Streaming App",
		description:
			"A landing page clone with fully functional components including preview on hover and sidebar functionality.",
		tags: ["React", "TypeScript", "Tailwind", "Vite"],
		imageUrl: videostreamingapp,
		link: "https://github.com/brhoughton/react-video-streaming-app",
	},
	{
		title: "Expense Tracker",
		description:
			"Tack your personal expenses with notifications and local storage",
		tags: ["Vue", "JavaScript", "Toastification", "Vite"],
		imageUrl: expensetracker,
		link: "https://github.com/brhoughton/vue-expense-tracker",
	},
	{
		title: "Shopping Cart",
		description:
			"A fully functional shopping cart component that tracks quantity and cost.",
		tags: ["React", "TypeScript", "Bootstrap"],
		imageUrl: shoppingcart,
		link: "https://github.com/brhoughton/react-shopping-cart-app",
	},
	// {
	// 	title: "Calculator App",
	// 	description:
	// 		"A calculator app that is able to process operations without relying on any outside libraries.",
	// 	tags: ["React", "CSS", "Vite"],
	// 	imageUrl: calculatorapp,
	// 	link: "https://github.com/brhoughton/react-calculator-app",
	// },
	// {
	// 	title: "Weather App",
	// 	description:
	// 		"A weather app that calls an API and returns the forecast for the users current location",
	// 	tags: ["JavaScript", "HTML", "CSS", "Vite"],
	// 	imageUrl: weatherapp,
	// 	link: "https://github.com/brhoughton/weather-app",
	// },
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Vite",
	"MySQL",
	"Git",
	"Tailwind",
	"Framer Motion",
	"Bootstrap",
	"Cinema 4D",
	"Octane",
	"AfterEffects",
	"Premiere",
	"InDesign",
	"Illustrator",
	"Photoshop",
] as const;
