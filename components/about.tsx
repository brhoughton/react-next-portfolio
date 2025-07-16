"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40 scroll-mt-28"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.25 }}
			id="about"
		>
			<SectionHeading>About</SectionHeading>
			<p className="mb-5">
				Passionate about turning ideas into immersive experiences that blend
				creativity and technology. With a background in front-end development,
				motion design, 3D modeling, rendering, and visual communication, I love
				creating work that truly resonates.
			</p>
			<p>
				Over the years, I&apos;ve built a versatile skill set through hands-on
				experience. I design user-friendly web apps with a strong front-end
				foundation, bring stories to life through motion design, and add realism
				and depth with 3D modeling and rendering. I thrive at the intersection
				of design and tech. Let&apos;s connect.
			</p>
		</motion.section>
	);
}
