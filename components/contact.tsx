"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem) text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="-mt-4 text-gray-700">
        You can email me at{" "}
        <a
          className="font-semibold transition hover:text-green-500"
          href="mailto:breck@brhdev.com"
        >
          breck@brhdev.com
        </a>{" "}
        or you can reach out through this form.
      </p>
      <form
        className="flex flex-col mt-10"
        action={async (formData) => {
          await sendEmail(formData);
        }}
      >
        <input
          className="px-4 border rounded-lg h-14 border-black/10"
          type="email"
          name="senderEmail"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="p-4 my-3 border rounded-lg h-52 border-black/10"
          placeholder="Your message"
          name="message"
          required
          maxLength={3000}
        />
        <button
          type="submit"
          className="group items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex focus:scale-105 hover:scale-105 hover:bg-gray-700 active:scale-105"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs transition-all opacity-70 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </button>
      </form>
    </motion.section>
  );
}
