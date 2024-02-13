"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
    >
      <SectionHeading>About</SectionHeading>
      <p className="mb-5">
        Fueled by my passion for transforming ideas into immersive experiences
        that seamlessly merge creativity with technology. With a robust
        background spanning front-end development, motion design, 3D modeling,
        rendering, and visual communications, I specialize in crafting
        experiences that resonate.
      </p>
      <p>
        My extensive skill set, cultivated over years of hands-on experience has
        equipped me to navigate the dynamic field of design and technology. I
        integrate my expertise in front-end development to craft immersive,
        user-centric interfaces. Motion design allows me to weave dynamic visual
        narratives, while my skill set in 3D modeling and rendering injects
        depth and realism, propelling projects further. Let's connect and build
        something extraordinary together.
      </p>
    </motion.section>
  );
}