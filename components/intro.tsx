"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import { BsChatDotsFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { SiAdobe } from "react-icons/si";
import { HiDownload } from "react-icons/hi";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
	const { ref } = useSectionInView("Home", 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section
			ref={ref}
			id="home"
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
		>
			<div className="flex items-center justify-center">
				<div>
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "tween",
							duration: 0.2,
						}}
					>
						<Image
							src="/profile-image.png"
							alt="Portrait of Breck"
							width="300"
							height="300"
							quality="100"
							priority={true}
							className="object-cover w-64 h-64 rounded-full shadow-xl border-[0.25rem] border-white"
						/>
					</motion.div>
				</div>
			</div>
			<motion.h1
				className="font-medium mb-10 mt-4 px-4 text-2xl !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
			>
				Hi! My name is Breck and I&apos;m a Creative Director and Front-End
				Developer.
			</motion.h1>
			<motion.div
				className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
			>
				<Link
					href="#contact"
					className="flex items-center gap-2 py-3 text-white transition bg-gray-900 rounded-full outline-none dark:bg-gray-700 group px-7 focus:scale-105 hover:scale-105 hover:bg-gray-700 dark:hover:bg-gray-600 active:scale-100"
				>
					Let&apos;s Chat{" "}
					<BsChatDotsFill className="transition opacity-70 group-hover:rotate-12" />
				</Link>
				{/* <a
          className="flex items-center gap-2 py-3 text-gray-700 transition bg-gray-200 border rounded-full outline-none cursor-pointer px-7 group focus:scale-105 hover:scale-105 hover:bg-gray-300 active:scale-100 border-black/5"
          href="/CV.pdf"
          download
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Download Résumé{" "}
          <HiDownload className="transition opacity-70 group-hover:translate-y-1" />
        </a> */}
				<a
					className="flex items-center gap-2 py-3 text-gray-700 transition bg-gray-200 border rounded-full outline-none cursor-pointer px-7 group focus:scale-105 hover:scale-105 hover:bg-gray-300 active:scale-100 border-black/5"
					href="https://www.linkedin.com/in/breck-houghton/"
					target="_blank"
				>
					LinkedIn{" "}
					<BsLinkedin className="transition opacity-70 group-hover:scale-105" />
				</a>
				<a
					className="flex items-center gap-2 py-3 text-gray-700 transition bg-gray-200 border rounded-full outline-none cursor-pointer px-7 group focus:scale-105 hover:scale-105 hover:bg-gray-300 active:scale-100 border-black/5"
					href="https://www.breckhoughton.com"
					target="_blank"
				>
					Adobe{" "}
					<SiAdobe className="transition opacity-70 group-hover:scale-105" />
				</a>
				<a
					className="flex items-center gap-2 py-3 text-gray-700 transition bg-gray-200 border rounded-full outline-none cursor-pointer px-7 group focus:scale-105 hover:scale-105 hover:bg-gray-300 active:scale-100 border-black/5"
					href="https://github.com/brhoughton"
					target="_blank"
				>
					{" "}
					Github{" "}
					<BsGithub className="transition opacity-70 group-hover:scale-110" />
				</a>
			</motion.div>
		</section>
	);
}
