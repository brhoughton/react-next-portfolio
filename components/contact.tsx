"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

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
        Use the form below to reach out and I'll get back to you as soon as
        possible.
      </p>
      <form
        className="flex flex-col mt-10"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Message sent!");
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
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
